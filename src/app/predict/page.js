'use client';

import { useState, useEffect, useMemo } from 'react';
import { 
  PARAMETERS, 
  ERAS, 
  ERA_DESCRIPTIONS,
  PRESETS, 
  DEFAULT_CONFIG 
} from '../../components/constants';
import { 
  findSimilarPolities, 
  getRiskAssessment,
  formatYear 
} from '../../components/similarity';
import Link from 'next/link';

// Era colors
const ERA_COLORS = {
  'Ancient': { bg: 'bg-amber-500/20', text: 'text-amber-400', border: 'border-amber-500/30', dot: 'bg-amber-400' },
  'Classical': { bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500/30', dot: 'bg-blue-400' },
  'Medieval': { bg: 'bg-purple-500/20', text: 'text-purple-400', border: 'border-purple-500/30', dot: 'bg-purple-400' },
  'Early Modern': { bg: 'bg-green-500/20', text: 'text-green-400', border: 'border-green-500/30', dot: 'bg-green-400' },
};

// Detect outliers
function detectOutliers(config, allPolities, selectedEra) {
  const outliers = [];
  const pool = selectedEra 
    ? allPolities.filter(p => p.era === selectedEra)
    : allPolities;
  
  if (pool.length < 10) return outliers;
  
  const featureKeys = [
    'hierarchy', 'government', 'information', 'infrastructure',
    'weapons', 'armor', 'cavalry', 'fortifications', 'ironWorking', 'religion'
  ];
  
  featureKeys.forEach(key => {
    const values = pool
      .filter(p => p.rawFeatures && p.rawFeatures[key] !== undefined)
      .map(p => p.rawFeatures[key]);
    
    if (values.length < 10) return;
    
    const min = Math.min(...values);
    const max = Math.max(...values);
    const userVal = config[key];
    
    // Only flag if OUTSIDE the historical range
    if (userVal < min - 0.01 || userVal > max + 0.01) {
      outliers.push({
        feature: key,
        label: PARAMETERS[key]?.label || key,
        userVal,
        min,
        max,
        message: userVal > max 
          ? `Exceeds historical maximum (${max.toFixed(1)})`
          : `Below historical minimum (${min.toFixed(1)})`
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
  const [isLoading, setIsLoading] = useState(true);
  const [activePreset, setActivePreset] = useState(null);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [expandedMatch, setExpandedMatch] = useState(null);

  // Load data
  useEffect(() => {
    async function loadData() {
      try {
        const [politiesRes, scalerRes] = await Promise.all([
          fetch('/data/polities.json'),
          fetch('/data/scaler-params.json')
        ]);
        setPolities(await politiesRes.json());
        setScalerParams(await scalerRes.json());
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to load data:', error);
        setIsLoading(false);
      }
    }
    loadData();
  }, []);

  // Compute results
  useEffect(() => {
    if (!polities.length || !scalerParams) return;
    const similarityResults = findSimilarPolities(
      config, polities, scalerParams, 
      { k: 5, era: selectedEra, maxDuration: 1000 }
    );
    setResults(similarityResults);
    setExpandedMatch(null);
  }, [config, selectedEra, polities, scalerParams]);

  // Detect outliers
  const outliers = useMemo(() => {
    if (!polities.length) return [];
    return detectOutliers(config, polities, selectedEra);
  }, [config, polities, selectedEra]);

  const outlierKeys = useMemo(() => new Set(outliers.map(o => o.feature)), [outliers]);

  const handleParamChange = (key, value) => {
    const param = PARAMETERS[key];
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return;
    const clampedValue = Math.min(Math.max(numValue, param.min), param.max);
    setConfig(prev => ({ ...prev, [key]: clampedValue }));
    setActivePreset(null);
  };

  const handlePresetSelect = (presetName) => {
    setConfig(PRESETS[presetName]);
    setActivePreset(presetName);
  };

  const risk = results ? getRiskAssessment(results.durationEstimate) : null;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-400">Loading historical data...</div>
      </div>
    );
  }

  // Group parameters
  const complexityParams = Object.entries(PARAMETERS).filter(([_, p]) => p.category === 'complexity');
  const warfareParams = Object.entries(PARAMETERS).filter(([_, p]) => p.category === 'warfare');
  const religionParams = Object.entries(PARAMETERS).filter(([_, p]) => p.category === 'religion');

  return (
    <div className="predict-page">
      {/* Hero */}
      <section className="hero" style={{ paddingBottom: '2rem' }}>
        <h1>Polity Simulator</h1>
        <p className="subtitle">
          Configure a hypothetical civilization and discover which historical societies 
          shared similar characteristics. Based on 372 polities from the Seshat database.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-6 pb-16">
        
        {/* Presets */}
        <section className="mb-8">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Quick Presets
          </h2>
          <div className="flex flex-wrap gap-3">
            {Object.keys(PRESETS).map(preset => (
              <button
                key={preset}
                onClick={() => handlePresetSelect(preset)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activePreset === preset
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                    : 'bg-[#161616] text-gray-300 hover:bg-[#1a1a1a] border border-gray-800'
                }`}
              >
                {preset}
              </button>
            ))}
          </div>
        </section>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-5 gap-8">
          
          {/* Left: Configuration (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Outlier Warning - Only show if outliers exist */}
            {outliers.length > 0 && (
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <span className="text-amber-400 text-lg">⚠️</span>
                  <div>
                    <p className="text-sm font-medium text-amber-400">
                      {outliers.length} value{outliers.length > 1 ? 's' : ''} outside historical range
                    </p>
                    <p className="text-xs text-amber-400/70 mt-1">
                      Your configuration includes values no historical polity had. 
                      Results may be less reliable.
                    </p>
                    <div className="mt-2 space-y-1">
                      {outliers.map((o, i) => (
                        <div key={o.feature} className="text-xs text-amber-400/80">
                          • {o.label}: {o.message}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Parameters Card */}
            <div className="card">
              <h3 className="text-lg font-semibold text-white mb-6">Configure Your Polity</h3>
              
              {/* Complexity Section */}
              <div className="mb-8">
                <h4 className="text-xs uppercase tracking-widest text-blue-400 mb-4 flex items-center gap-2 font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-400"></span>
                  Complexity
                </h4>
                <div className="space-y-5">
                  {complexityParams.map(([key, param]) => (
                    <ParameterControl
                      key={key}
                      paramKey={key}
                      param={param}
                      value={config[key]}
                      onChange={handleParamChange}
                      isOutlier={outlierKeys.has(key)}
                    />
                  ))}
                </div>
              </div>

              {/* Warfare Section */}
              <div className="mb-8">
                <h4 className="text-xs uppercase tracking-widest text-red-400 mb-4 flex items-center gap-2 font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                  Warfare
                </h4>
                
                {/* Show first 2, hide rest behind toggle */}
                <div className="space-y-5">
                  {warfareParams.slice(0, 2).map(([key, param]) => (
                    <ParameterControl
                      key={key}
                      paramKey={key}
                      param={param}
                      value={config[key]}
                      onChange={handleParamChange}
                      isOutlier={outlierKeys.has(key)}
                    />
                  ))}
                </div>
                
                {!showAdvanced && warfareParams.length > 2 && (
                  <button
                    onClick={() => setShowAdvanced(true)}
                    className="mt-4 text-sm text-gray-500 hover:text-gray-300 transition"
                  >
                    + Show {warfareParams.length - 2} more warfare parameters
                  </button>
                )}
                
                {showAdvanced && (
                  <div className="mt-5 space-y-5">
                    {warfareParams.slice(2).map(([key, param]) => (
                      <ParameterControl
                        key={key}
                        paramKey={key}
                        param={param}
                        value={config[key]}
                        onChange={handleParamChange}
                        isOutlier={outlierKeys.has(key)}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Religion Section */}
              <div>
                <h4 className="text-xs uppercase tracking-widest text-amber-400 mb-4 flex items-center gap-2 font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                  Religion
                </h4>
                <div className="space-y-5">
                  {religionParams.map(([key, param]) => (
                    <ParameterControl
                      key={key}
                      paramKey={key}
                      param={param}
                      value={config[key]}
                      onChange={handleParamChange}
                      isOutlier={outlierKeys.has(key)}
                    />
                  ))}
                </div>
              </div>
              
              {showAdvanced && (
                <button
                  onClick={() => setShowAdvanced(false)}
                  className="mt-6 text-sm text-gray-500 hover:text-gray-300 transition"
                >
                  − Hide advanced parameters
                </button>
              )}
            </div>

            {/* Era Filter */}
            <div className="card">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Filter by Era
              </h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedEra(null)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    selectedEra === null
                      ? 'bg-gray-700 text-white'
                      : 'bg-[#161616] text-gray-400 hover:bg-[#1a1a1a] border border-gray-800'
                  }`}
                >
                  All Eras
                </button>
                {ERAS.map(era => {
                  const colors = ERA_COLORS[era];
                  return (
                    <button
                      key={era}
                      onClick={() => setSelectedEra(era)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                        selectedEra === era
                          ? `${colors.bg} ${colors.text} border ${colors.border}`
                          : 'bg-[#161616] text-gray-400 hover:bg-[#1a1a1a] border border-gray-800'
                      }`}
                    >
                      {era}
                    </button>
                  );
                })}
              </div>
              {selectedEra && (
                <p className="mt-3 text-sm text-gray-500">{ERA_DESCRIPTIONS[selectedEra]}</p>
              )}
              {!selectedEra && (
                <p className="mt-3 text-xs text-gray-600">
                  Tip: The same configuration meant different things in different periods. 
                  Filter by era for more meaningful comparisons.
                </p>
              )}
            </div>
          </div>

          {/* Right: Results (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Main Result Card */}
            {results && (
              <div className="card text-center">
                <p className="text-sm text-gray-500 mb-2">Estimated Duration</p>
                <div 
                  className="text-5xl font-bold mb-1"
                  style={{ color: risk?.color || '#f97316' }}
                >
                  ~{results.durationEstimate}
                </div>
                <p className="text-gray-500 mb-4">years</p>
                
                {/* Range */}
                <div className="flex justify-center gap-6 mb-4 text-sm">
                  <div className="text-center">
                    <div className="text-white font-semibold">{results.durationRange[0]}–{results.durationRange[1]}</div>
                    <div className="text-xs text-gray-500 uppercase">Range</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-semibold">{Math.round(results.confidence * 100)}%</div>
                    <div className="text-xs text-gray-500 uppercase">Confidence</div>
                  </div>
                </div>

                {/* Risk badge */}
                {risk && (
                  <div 
                    className="inline-block px-4 py-2 rounded-lg text-sm font-medium"
                    style={{ backgroundColor: `${risk.color}15`, color: risk.color }}
                  >
                    {risk.description}
                  </div>
                )}
              </div>
            )}

            {/* Similar Polities */}
            {results?.similar?.length > 0 && (
              <div className="card">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  Most Similar Polities
                </h3>
                <div className="space-y-2">
                  {results.similar.map((polity, i) => {
                    const colors = ERA_COLORS[polity.era] || ERA_COLORS['Ancient'];
                    const isExpanded = expandedMatch === i;
                    const fullPolity = polities.find(p => p.name === polity.name);
                    
                    return (
                      <div key={`${polity.name}-${i}`}>
                        <button
                          onClick={() => setExpandedMatch(isExpanded ? null : i)}
                          className="w-full text-left p-3 rounded-lg bg-[#0d0d0d] hover:bg-[#111] transition"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className={`w-2 h-2 rounded-full ${colors.dot}`}></span>
                                <span className="font-medium text-white text-sm truncate">
                                  {polity.name}
                                </span>
                              </div>
                              <div className="text-xs text-gray-600 mt-0.5 ml-4">
                                {polity.duration} years · {polity.era}
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-sm font-semibold text-blue-400">
                                {polity.similarity}%
                              </span>
                              <span className="text-gray-600 text-xs">
                                {isExpanded ? '▼' : '▶'}
                              </span>
                            </div>
                          </div>
                        </button>
                        
                        {/* Expanded Details */}
                        {isExpanded && fullPolity && (
                          <ExpandedPolityDetails 
                            config={config}
                            polity={polity}
                            fullPolity={fullPolity}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
                
                <p className="text-xs text-gray-600 mt-4">
                  Estimate is a similarity-weighted average of these polities' durations.
                </p>
              </div>
            )}

            {/* Caveat */}
            <div className="p-4 border-l-2 border-amber-600/50 bg-[#0d0d0d] rounded-r-lg">
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
          <Link 
            href="/predict/methodology" 
            className="text-gray-500 hover:text-gray-300 transition"
          >
            How does this work? Read the methodology →
          </Link>
        </div>
      </div>
    </div>
  );
}

// Parameter Control with Slider + Number Input
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
        <span className="absolute -left-4 top-1 text-amber-400 text-sm" title="Value outside historical range">⚠️</span>
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

// Expanded Polity Details
function ExpandedPolityDetails({ config, polity, fullPolity }) {
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
    <div className="mt-2 p-4 bg-[#080808] rounded-lg border border-gray-800/50 text-sm">
      {/* Basic Info */}
      <div className="grid grid-cols-2 gap-2 text-xs mb-4">
        <div className="text-gray-500">Period</div>
        <div className="text-gray-300">
          {formatYear(polity.start)} – {formatYear(polity.end)}
        </div>
        <div className="text-gray-500">Duration</div>
        <div className="text-gray-300">{polity.duration} years</div>
        <div className="text-gray-500">Similarity</div>
        <div className="text-gray-300">{polity.similarity}% match</div>
      </div>
      
      {/* Feature Comparison Table */}
      {hasRawFeatures && (
        <div className="border-t border-gray-800 pt-3">
          <div className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Feature Comparison</div>
          
          {/* Header */}
          <div className="grid grid-cols-4 gap-1 text-xs mb-1">
            <div className="text-gray-600">Feature</div>
            <div className="text-gray-600 text-center">You</div>
            <div className="text-gray-600 text-center">Them</div>
            <div className="text-gray-600 text-right">Diff</div>
          </div>
          
          {/* Rows */}
          <div className="space-y-1">
            {featureMapping.map(({ key, label }) => {
              const yourVal = config[key];
              const theirVal = fullPolity.rawFeatures[key];
              const diff = theirVal !== undefined ? (theirVal - yourVal) : null;
              const isClose = diff !== null && Math.abs(diff) < 0.5;
              
              return (
                <div key={key} className="grid grid-cols-4 gap-1 text-xs py-1">
                  <div className="text-gray-400">{label}</div>
                  <div className="text-center text-white">{yourVal}</div>
                  <div className="text-center text-gray-300">
                    {theirVal !== undefined ? theirVal.toFixed(1) : '—'}
                  </div>
                  <div className="text-right">
                    {diff !== null && (
                      <span className={`px-1.5 py-0.5 rounded ${
                        isClose 
                          ? 'bg-green-500/20 text-green-400' 
                          : diff > 0 
                            ? 'bg-blue-500/20 text-blue-400'
                            : 'bg-orange-500/20 text-orange-400'
                      }`}>
                        {isClose ? '≈' : diff > 0 ? `+${diff.toFixed(1)}` : diff.toFixed(1)}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Legend */}
          <div className="mt-3 pt-2 border-t border-gray-800/50 text-xs text-gray-600">
            <span className="text-green-400">≈</span> close · 
            <span className="text-blue-400 ml-2">+</span> higher · 
            <span className="text-orange-400 ml-2">−</span> lower
          </div>
        </div>
      )}
    </div>
  );
}