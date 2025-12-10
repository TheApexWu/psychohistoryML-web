'use client';

import { useState, useEffect, useMemo } from 'react';
import { 
  PARAMETERS, 
  FEATURE_ORDER, 
  ERAS, 
  ERA_DESCRIPTIONS,
  PRESETS, 
  DEFAULT_CONFIG,
  CATEGORY_COLORS 
} from '../../components/constants';
import { 
  findSimilarPolities, 
  compareEras, 
  getRiskAssessment,
  formatDuration,
  formatYear 
} from '../../components/similarity';

// Era color mapping for badges
const ERA_COLORS = {
  'Ancient': { bg: 'bg-amber-500/20', text: 'text-amber-400', border: 'border-amber-500/30' },
  'Classical': { bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500/30' },
  'Medieval': { bg: 'bg-purple-500/20', text: 'text-purple-400', border: 'border-purple-500/30' },
  'Early Modern': { bg: 'bg-green-500/20', text: 'text-green-400', border: 'border-green-500/30' },
};

/**
 * OUTLIER DETECTION
 * -----------------
 * How it works:
 * 1. For each feature, compute the distribution (mean, std) across the polity pool
 * 2. Flag if user's value is OUTSIDE the historical range (below min or above max)
 * 3. Also flag if >2.5 std deviations from mean (very unusual but still in range)
 * 
 * Key insight: Values AT the min/max are valid historical configurations.
 * Only flag values that NO historical polity ever had.
 */
function detectOutliers(config, matchedPolities, allPolities, selectedEra) {
  const outliers = [];
  
  // Get the relevant polity pool (era-filtered or all)
  const pool = selectedEra 
    ? allPolities.filter(p => p.era === selectedEra)
    : allPolities;
  
  if (pool.length < 10) return outliers; // Not enough data to detect outliers
  
  const featureKeys = [
    'hierarchy', 'government', 'information', 'infrastructure',
    'weapons', 'armor', 'cavalry', 'fortifications', 'ironWorking', 'religion'
  ];
  
  featureKeys.forEach(key => {
    // Get distribution of this feature across the pool
    const values = pool
      .filter(p => p.rawFeatures && p.rawFeatures[key] !== undefined)
      .map(p => p.rawFeatures[key]);
    
    if (values.length < 10) return;
    
    const mean = values.reduce((a, b) => a + b, 0) / values.length;
    const std = Math.sqrt(values.reduce((sum, v) => sum + Math.pow(v - mean, 2), 0) / values.length);
    const min = Math.min(...values);
    const max = Math.max(...values);
    
    const userVal = config[key];
    const zScore = std > 0 ? Math.abs(userVal - mean) / std : 0;
    
    // FIXED: Only flag if OUTSIDE the range, not at boundaries
    // Values at min/max are valid - some historical polity had that value
    const isOutsideRange = userVal < min - 0.01 || userVal > max + 0.01; // Small tolerance for floating point
    
    // Also flag extreme z-scores even if in range (very unusual combinations)
    const isExtremeZScore = zScore > 2.5 && !isOutsideRange;
    
    if (isOutsideRange) {
      const eraLabel = selectedEra || 'all';
      outliers.push({
        feature: key,
        label: PARAMETERS[key]?.label || key,
        userVal,
        mean: mean.toFixed(2),
        severity: 'high',
        message: userVal > max 
          ? `Your ${PARAMETERS[key]?.label || key} (${userVal}) exceeds any ${eraLabel} polity (max: ${max.toFixed(1)})`
          : `Your ${PARAMETERS[key]?.label || key} (${userVal}) is below any ${eraLabel} polity (min: ${min.toFixed(1)})`
      });
    } else if (isExtremeZScore) {
      // In range but statistically unusual
      const percentile = Math.round((values.filter(v => v < userVal).length / values.length) * 100);
      const direction = userVal > mean ? 'higher' : 'lower';
      outliers.push({
        feature: key,
        label: PARAMETERS[key]?.label || key,
        userVal,
        mean: mean.toFixed(2),
        severity: 'moderate',
        message: `Your ${PARAMETERS[key]?.label || key} (${userVal}) is ${direction} than ${Math.max(percentile, 100-percentile)}% of polities (unusual but valid)`
      });
    }
  });
  
  return outliers;
}

export default function PredictPage() {
  const [config, setConfig] = useState(DEFAULT_CONFIG);
  const [selectedEra, setSelectedEra] = useState(null);
  const [polities, setPolities] = useState([]);
  const [scalerParams, setScalerParams] = useState(null);
  const [results, setResults] = useState(null);
  const [eraComparison, setEraComparison] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activePreset, setActivePreset] = useState(null);
  const [showCalculation, setShowCalculation] = useState(true);
  const [expandedPolity, setExpandedPolity] = useState(null);
  const [showOutlierDetails, setShowOutlierDetails] = useState(false);

  // Load data on mount
  useEffect(() => {
    async function loadData() {
      try {
        const [politiesRes, scalerRes] = await Promise.all([
          fetch('/data/polities.json'),
          fetch('/data/scaler-params.json')
        ]);
        
        const politiesData = await politiesRes.json();
        const scalerData = await scalerRes.json();
        
        setPolities(politiesData);
        setScalerParams(scalerData);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to load data:', error);
        setIsLoading(false);
      }
    }
    loadData();
  }, []);

  // Compute results when config or era changes
  useEffect(() => {
    if (!polities.length || !scalerParams) return;

    const similarityResults = findSimilarPolities(
      config, 
      polities, 
      scalerParams, 
      { k: 5, era: selectedEra, maxDuration: 1000 }
    );
    
    const eraResults = compareEras(config, polities, scalerParams, { k: 5, maxDuration: 1000 });
    
    setResults(similarityResults);
    setEraComparison(eraResults);
    setExpandedPolity(null);
  }, [config, selectedEra, polities, scalerParams]);

  // Detect outliers (memoized for performance)
  const outliers = useMemo(() => {
    if (!polities.length || !results?.similar) return [];
    return detectOutliers(config, results.similar, polities, selectedEra);
  }, [config, polities, results, selectedEra]);

  const handleParamChange = (key, value) => {
    const param = PARAMETERS[key];
    const numValue = parseFloat(value);
    const clampedValue = Math.min(Math.max(numValue, param.min), param.max);
    setConfig(prev => ({ ...prev, [key]: clampedValue }));
    setActivePreset(null);
  };

  const handlePresetSelect = (presetName) => {
    setConfig(PRESETS[presetName]);
    setActivePreset(presetName);
  };

  const risk = results ? getRiskAssessment(results.durationEstimate) : null;


  const getRangePosition = (value, min, max) => {
    if (min === max) return 50; // Center if no range
    const normalized = (value - min) / (max - min); // 0 to 1
    return 10 + (normalized * 80); // Map to 10%-90% of bar width
  };

  // Check if matches span multiple eras
  const getEraSpan = () => {
    if (!results?.similar?.length) return null;
    const eras = [...new Set(results.similar.map(p => p.era))];
    return eras.length > 1 ? eras : null;
  };

  const eraSpan = getEraSpan();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-gray-400 text-lg">Loading historical data...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      {/* Header */}
      <header className="border-b border-gray-800 bg-[#0a0a0a]/95 backdrop-blur sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-8 py-5">
          <div className="flex items-center justify-between">
            <div>
              <a href="/" className="text-2xl font-semibold tracking-tight text-white hover:text-gray-300 transition">
                PsychohistoryML
              </a>
              <span className="ml-3 text-base text-gray-500">/ Simulator</span>
            </div>
            <nav className="flex gap-8 text-base">
              <a href="/research" className="text-gray-400 hover:text-white transition">Research</a>
              <a href="/predict/methodology" className="text-gray-400 hover:text-white transition">Methodology</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-10">
        {/* Title */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-3">Polity Simulator</h1>
          <p className="text-lg text-gray-400">
            Configure a hypothetical society and find historically similar polities from 372 in the Seshat database.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left Column: Controls (3/5 width) */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Presets */}
            <div className="bg-[#111] rounded-xl p-5 border border-gray-800/50">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Quick Presets</h3>
              <div className="flex flex-wrap gap-3">
                {Object.keys(PRESETS).map(preset => (
                  <button
                    key={preset}
                    onClick={() => handlePresetSelect(preset)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                      activePreset === preset
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                    }`}
                  >
                    {preset}
                  </button>
                ))}
              </div>
            </div>

            {/* Parameter Sliders */}
            <div className="bg-[#111] rounded-xl p-6 border border-gray-800/50">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-6">Configure Your Polity</h3>
              
              {/* Complexity */}
              <div className="mb-8">
                <h4 className="text-xs uppercase tracking-widest text-blue-400 mb-4 flex items-center gap-2 font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-400"></span>
                  Complexity
                </h4>
                <div className="space-y-5">
                  {Object.entries(PARAMETERS)
                    .filter(([_, p]) => p.category === 'complexity')
                    .map(([key, param]) => (
                      <ParameterControl
                        key={key}
                        paramKey={key}
                        param={param}
                        value={config[key]}
                        onChange={handleParamChange}
                        isOutlier={outliers.some(o => o.feature === key)}
                      />
                    ))}
                </div>
              </div>

              {/* Warfare */}
              <div className="mb-8">
                <h4 className="text-xs uppercase tracking-widest text-red-400 mb-4 flex items-center gap-2 font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                  Warfare
                </h4>
                <div className="space-y-5">
                  {Object.entries(PARAMETERS)
                    .filter(([_, p]) => p.category === 'warfare')
                    .map(([key, param]) => (
                      <ParameterControl
                        key={key}
                        paramKey={key}
                        param={param}
                        value={config[key]}
                        onChange={handleParamChange}
                        isOutlier={outliers.some(o => o.feature === key)}
                      />
                    ))}
                </div>
              </div>

              {/* Religion */}
              <div>
                <h4 className="text-xs uppercase tracking-widest text-amber-400 mb-4 flex items-center gap-2 font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                  Religion
                </h4>
                <div className="space-y-5">
                  {Object.entries(PARAMETERS)
                    .filter(([_, p]) => p.category === 'religion')
                    .map(([key, param]) => (
                      <ParameterControl
                        key={key}
                        paramKey={key}
                        param={param}
                        value={config[key]}
                        onChange={handleParamChange}
                        isOutlier={outliers.some(o => o.feature === key)}
                      />
                    ))}
                </div>
              </div>
            </div>

            {/* Era Filter */}
            <div className="bg-[#111] rounded-xl p-5 border border-gray-800/50">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Filter by Era</h3>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setSelectedEra(null)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    selectedEra === null
                      ? 'bg-gray-600 text-white'
                      : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
                  }`}
                >
                  All Eras
                </button>
                {ERAS.map(era => (
                  <button
                    key={era}
                    onClick={() => setSelectedEra(era)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                      selectedEra === era
                        ? `${ERA_COLORS[era].bg} ${ERA_COLORS[era].text} border ${ERA_COLORS[era].border}`
                        : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
                    }`}
                  >
                    {era}
                  </button>
                ))}
              </div>
              {selectedEra && (
                <p className="mt-3 text-sm text-gray-500">{ERA_DESCRIPTIONS[selectedEra]}</p>
              )}
              {!selectedEra && (
                <p className="mt-3 text-xs text-gray-600">
                  Matches polities by feature similarity across all time periods. Use era filters for period-specific comparisons.
                </p>
              )}
            </div>
          </div>

          {/* Right Column: Results (2/5 width) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Outlier Warning */}
            {outliers.length > 0 && (
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
                <button 
                  onClick={() => setShowOutlierDetails(!showOutlierDetails)}
                  className="w-full flex items-start justify-between"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-amber-400 text-lg">⚠️</span>
                    <div className="text-left">
                      <p className="text-sm font-medium text-amber-400">
                        {outliers.length} unusual configuration{outliers.length > 1 ? 's' : ''} detected
                      </p>
                      <p className="text-xs text-amber-400/70 mt-1">
                        Your config has values outside typical historical ranges. Results may be less reliable.
                      </p>
                    </div>
                  </div>
                  <span className="text-amber-400/50 text-sm">{showOutlierDetails ? '▼' : '▶'}</span>
                </button>
                
                {showOutlierDetails && (
                  <div className="mt-4 space-y-2 pl-8">
                    {outliers.map((outlier, i) => (
                      <div key={i} className="text-xs text-amber-400/80 py-1 border-b border-amber-500/20 last:border-0">
                        {outlier.message}
                      </div>
                    ))}
                    <p className="text-xs text-gray-500 mt-2 pt-2">
                      ML models extrapolate poorly outside training data. Consider adjusting these values or interpreting results with extra caution.
                    </p>
                  </div>
                )}
              </div>
            )}
            
            {/* Main Estimate Card - Dashboard B */}
            {results && (
              <div className="bg-[#111] rounded-xl p-6 border border-gray-800/50">
                {/* Headline Number */}
                <div className="text-center mb-6">
                  <div className="text-6xl font-bold tracking-tight" style={{ color: risk?.color || '#f97316' }}>
                    ~{results.durationEstimate || '—'}
                  </div>
                  <div className="text-base text-gray-500 mt-1">estimated years</div>
                </div>

                {/* Context Stats */}
                <div className="flex justify-center gap-8 mb-6">
                  <div className="text-center">
                    <div className="text-xl font-semibold text-white">
                      {results.durationRange[0]}–{results.durationRange[1]}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Range</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-semibold text-white">
                      {Math.round(results.confidence * 100)}%
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Confidence</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-semibold text-white">
                      {results.similar.length}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Matches</div>
                  </div>
                </div>

                {/* Range Visualization - FIXED positioning */}
                {results.durationRange[0] !== null && (
                  <div className="mb-6">
                    <div className="relative h-10 bg-[#1a1a1a] rounded-lg overflow-visible">
                      {/* Spread indicator */}
                      <div 
                        className="absolute top-1/2 -translate-y-1/2 h-2 rounded-full"
                        style={{
                          left: '10%',
                          right: '10%',
                          background: 'linear-gradient(90deg, #333, #60a5fa, #333)'
                        }}
                      />
                      {/* Estimate marker - FIXED: using left % with transform to center */}
                      <div 
                        className="absolute top-1/2 w-4 h-4 rounded-full border-2 border-[#0a0a0a]"
                        style={{
                          left: `${getRangePosition(results.durationEstimate, results.durationRange[0], results.durationRange[1])}%`,
                          transform: 'translate(-50%, -50%)',
                          backgroundColor: risk?.color || '#f97316'
                        }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-600 mt-2 px-1">
                      <span>{results.durationRange[0]} yrs</span>
                      <span>{results.durationEstimate} yrs</span>
                      <span>{results.durationRange[1]} yrs</span>
                    </div>
                  </div>
                )}

                {/* Era Span Warning */}
                {eraSpan && !selectedEra && (
                  <div className="mb-4 px-3 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <p className="text-xs text-blue-400">
                      Matches span {eraSpan.join(', ')} eras. Use era filter for period-specific results.
                    </p>
                  </div>
                )}

                {/* Risk Assessment */}
                {risk && (
                  <div 
                    className="text-center text-sm font-medium px-4 py-2 rounded-lg"
                    style={{ 
                      backgroundColor: `${risk.color}15`,
                      color: risk.color
                    }}
                  >
                    {risk.description}
                  </div>
                )}
              </div>
            )}

            {/* Calculation Breakdown */}
            {results && results.similar.length > 0 && (
              <div className="bg-[#111] rounded-xl border border-gray-800/50 overflow-hidden">
                <button
                  onClick={() => setShowCalculation(!showCalculation)}
                  className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-800/30 transition"
                >
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Calculation Breakdown
                  </span>
                  <span className="text-gray-500">{showCalculation ? '−' : '+'}</span>
                </button>
                
                {showCalculation && (
                  <div className="px-6 pb-4">
                    <div className="space-y-2">
                      {results.similar.map((polity, i) => {
                        const contribution = (polity.similarity / 100) * polity.duration;
                        const isExpanded = expandedPolity === i;
                        const fullPolity = polities.find(p => p.name === polity.name);
                        const eraColor = ERA_COLORS[polity.era] || ERA_COLORS['Ancient'];
                        
                        return (
                          <div key={i}>
                            {/* Match Row */}
                            <div 
                              onClick={() => setExpandedPolity(isExpanded ? null : i)}
                              className="flex items-center gap-3 p-3 bg-[#0d0d0d] rounded-lg hover:bg-[#151515] transition cursor-pointer"
                            >
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className="font-medium text-white text-sm truncate">{polity.name}</span>
                                  <span className={`text-[10px] px-1.5 py-0.5 rounded ${eraColor.bg} ${eraColor.text}`}>
                                    {polity.era}
                                  </span>
                                </div>
                                <div className="text-xs text-gray-600">
                                  {formatYear(polity.start)}–{formatYear(polity.end)}
                                </div>
                              </div>
                              <div className="text-right flex-shrink-0">
                                <div className="text-sm font-semibold text-blue-400">{polity.similarity}%</div>
                              </div>
                              <div className="text-right flex-shrink-0 w-16">
                                <div className="text-sm text-gray-400">{polity.duration} yrs</div>
                              </div>
                              <div className="text-right flex-shrink-0 w-12">
                                <div className="text-xs text-gray-600 font-mono">
                                  → {Math.round(contribution)}
                                </div>
                              </div>
                              <div className="text-gray-600 text-sm">
                                {isExpanded ? '▼' : '▶'}
                              </div>
                            </div>
                            
                            {/* Expanded Comparison Table */}
                            {isExpanded && fullPolity && (
                              <ComparisonTable 
                                config={config} 
                                polity={polity}
                                fullPolity={fullPolity}
                              />
                            )}
                          </div>
                        );
                      })}
                    </div>
                    
                    {/* Weighted Average */}
                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-800">
                      <span className="text-sm font-semibold text-white">Weighted Average</span>
                      <span className="text-sm font-semibold text-white">{results.durationEstimate} years</span>
                    </div>
                    
                    <p className="text-xs text-gray-600 mt-4">
                      Based on {results.candidateCount} polities in database. 
                      Click any row to compare features.
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Era Comparison */}
            {eraComparison.length > 0 && !selectedEra && (
              <div className="bg-[#111] rounded-xl p-6 border border-gray-800/50">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  Same Config, Different Eras
                </h3>
                <div className="space-y-3">
                  {eraComparison.map(era => {
                    const eraColor = ERA_COLORS[era.era] || ERA_COLORS['Ancient'];
                    return (
                      <div 
                        key={era.era}
                        className="flex justify-between items-center py-3 border-b border-gray-800/50 last:border-0"
                      >
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${eraColor.bg.replace('/20', '')}`}></span>
                          <span className="text-base text-gray-300">{era.era}</span>
                        </div>
                        <div className="text-right">
                          <span className="font-semibold text-white text-base">
                            {era.durationEstimate ? `${era.durationEstimate} yrs` : '—'}
                          </span>
                          {era.topMatch && (
                            <div className="text-xs text-gray-500 truncate max-w-[140px]">
                              e.g. {era.topMatch.name}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <p className="mt-4 text-xs text-gray-600">
                  Historical context changes outcomes. The same configuration could mean different things in different eras.
                </p>
              </div>
            )}

            {/* Caveat */}
            <div className="bg-[#0d0d0d] rounded-xl p-5 border-l-4 border-amber-600/50">
              <p className="text-sm text-gray-500">
                <strong className="text-gray-400">Note:</strong> This is pattern-matching, not prediction. 
                Similar configurations produced different outcomes depending on leadership, geography, 
                and luck — none of which are in our model.
              </p>
            </div>
          </div>
        </div>

        {/* Methodology Link */}
        <div className="mt-16 text-center">
          <a 
            href="/predict/methodology" 
            className="text-gray-500 hover:text-gray-300 text-base transition"
          >
            How does this work? Read the methodology →
          </a>
        </div>
      </main>
    </div>
  );
}

// Parameter Control Component with Slider + Number Input
function ParameterControl({ paramKey, param, value, onChange, isOutlier }) {
  const [inputValue, setInputValue] = useState(value.toString());

  useEffect(() => {
    setInputValue(value.toString());
  }, [value]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputBlur = () => {
    const num = parseFloat(inputValue);
    if (!isNaN(num)) {
      onChange(paramKey, num);
    } else {
      setInputValue(value.toString());
    }
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.target.blur();
    }
  };

  return (
    <div className={isOutlier ? 'relative' : ''}>
      {isOutlier && (
        <span className="absolute -left-4 top-1 text-amber-400 text-sm" title="Unusual value">⚠️</span>
      )}
      <div className="flex justify-between items-center mb-2">
        <label className={`text-base font-medium ${isOutlier ? 'text-amber-300' : 'text-gray-200'}`}>
          {param.label}
        </label>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleInputKeyDown}
          className={`w-16 px-2 py-1 text-right text-base font-medium border rounded focus:outline-none focus:border-blue-500 transition ${
            isOutlier 
              ? 'bg-amber-500/10 border-amber-500/30 text-amber-300' 
              : 'bg-gray-800/50 border-gray-700/50 text-white'
          }`}
        />
      </div>
      <input
        type="range"
        min={param.min}
        max={param.max}
        step={param.step}
        value={value}
        onChange={(e) => onChange(paramKey, e.target.value)}
        className="w-full h-2 bg-gray-700/50 rounded-full appearance-none cursor-pointer
                   [&::-webkit-slider-thumb]:appearance-none
                   [&::-webkit-slider-thumb]:w-4
                   [&::-webkit-slider-thumb]:h-4
                   [&::-webkit-slider-thumb]:rounded-full
                   [&::-webkit-slider-thumb]:bg-white
                   [&::-webkit-slider-thumb]:cursor-pointer
                   [&::-webkit-slider-thumb]:transition
                   [&::-webkit-slider-thumb]:hover:bg-gray-200
                   [&::-webkit-slider-thumb]:shadow-md"
      />
      <p className="text-sm text-gray-500 mt-1.5">{param.description}</p>
    </div>
  );
}

/**
 * COMPARISON TABLE - COLOR FIX
 * Color logic:
 * - Green: Close match (diff < 0.5)
 * - Blue: Polity value is higher
 * - Orange: Polity value is lower
 */
function ComparisonTable({ config, polity, fullPolity }) {
  const featureMapping = [
    { key: 'hierarchy', label: 'Hierarchy' },
    { key: 'government', label: 'Government' },
    { key: 'information', label: 'Information' },
    { key: 'infrastructure', label: 'Infrastructure' },
    { key: 'weapons', label: 'Weapons' },
    { key: 'armor', label: 'Armor' },
    { key: 'cavalry', label: 'Cavalry' },
    { key: 'fortifications', label: 'Fortifications' },
    { key: 'ironWorking', label: 'Iron Working' },
    { key: 'religion', label: 'Religion' },
  ];

  const hasRawFeatures = fullPolity?.rawFeatures;

  return (
    <div className="mt-2 mb-3 bg-[#080808] rounded-lg border border-gray-800/50 overflow-hidden">
      <div className="px-4 py-3 bg-[#0a0a0a] border-b border-gray-800/50 flex justify-between items-center">
        <span className="text-xs text-gray-500 uppercase tracking-wider">
          Feature Comparison
        </span>
        <span className="text-xs text-gray-600">
          {polity.similarity}% similar
        </span>
      </div>
      
      {/* Table Header */}
      <div className="flex items-center px-4 py-2 bg-[#0a0a0a] border-b border-gray-800/50 text-xs text-gray-500 uppercase tracking-wider">
        <div className="w-1/3">Feature</div>
        <div className="w-1/4 text-center">You</div>
        <div className="w-1/4 text-center">{polity.name.split(' ').slice(0, 2).join(' ')}</div>
        <div className="w-1/6 text-right">Diff</div>
      </div>
      
      {/* Feature Rows - FIXED: neutral middle column, colored diff only */}
      <div className="divide-y divide-gray-800/30">
        {featureMapping.map(({ key, label }) => {
          const yourVal = config[key];
          const polityVal = hasRawFeatures ? fullPolity.rawFeatures[key] : null;
          const diff = polityVal !== null ? (polityVal - yourVal) : null;
          
          const isExact = diff !== null && Math.abs(diff) < 0.05;
          const isClose = diff !== null && Math.abs(diff) < 0.5;
          
          return (
            <div key={key} className="flex items-center px-4 py-2.5 text-sm hover:bg-[#0d0d0d] transition">
              <div className="w-1/3 text-gray-400">{label}</div>
              <div className="w-1/4 text-center text-white font-medium">{yourVal}</div>
              {/* FIXED: Middle column now neutral gray */}
              <div className="w-1/4 text-center text-gray-300">
                {polityVal !== null ? polityVal : '—'}
              </div>
              {/* Diff column carries all color meaning */}
              <div className="w-1/6 text-right">
                {diff !== null ? (
                  <span className={`text-xs px-2 py-0.5 rounded ${
                    isExact 
                      ? 'bg-green-500/20 text-green-400' 
                      : isClose 
                        ? 'bg-green-500/10 text-green-400/70'
                        : diff > 0
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'bg-orange-500/20 text-orange-400'
                  }`}>
                    {isExact ? '=' : diff > 0 ? `+${diff.toFixed(1)}` : diff.toFixed(1)}
                  </span>
                ) : (
                  <span className="text-gray-600 text-xs">—</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Footer */}
      <div className="px-4 py-3 bg-[#0a0a0a] border-t border-gray-800/50">
        <div className="flex justify-between items-center">
          <p className="text-xs text-gray-600">
            <span className="text-green-400">Green</span> = close · 
            <span className="text-blue-400 ml-1">Blue</span> = higher · 
            <span className="text-orange-400 ml-1">Orange</span> = lower
          </p>
          <p className="text-xs text-gray-500">
            {fullPolity.era} · {fullPolity.duration} years
          </p>
        </div>
      </div>
    </div>
  );
}