'use client';

import { useState, useEffect } from 'react';
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

export default function PredictPage() {
  const [config, setConfig] = useState(DEFAULT_CONFIG);
  const [selectedEra, setSelectedEra] = useState(null);
  const [polities, setPolities] = useState([]);
  const [scalerParams, setScalerParams] = useState(null);
  const [results, setResults] = useState(null);
  const [eraComparison, setEraComparison] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activePreset, setActivePreset] = useState(null);

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
  }, [config, selectedEra, polities, scalerParams]);

  const handleParamChange = (key, value) => {
    const param = PARAMETERS[key];
    const numValue = parseFloat(value);
    // Clamp to valid range
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
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-gray-400 text-lg">Loading historical data...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-[system-ui]">
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
            Configure a society and find historically similar polities from the Seshat database.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left Column: Controls (3/5 width) */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Presets */}
            <div className="bg-gray-900/50 rounded-xl p-5 border border-gray-800">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Quick Presets</h3>
              <div className="flex flex-wrap gap-3">
                {Object.keys(PRESETS).map(preset => (
                  <button
                    key={preset}
                    onClick={() => handlePresetSelect(preset)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                      activePreset === preset
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {preset}
                  </button>
                ))}
              </div>
            </div>

            {/* Parameter Sliders */}
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">Configure Your Polity</h3>
              
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
                      />
                    ))}
                </div>
              </div>
            </div>

            {/* Era Filter */}
            <div className="bg-gray-900/50 rounded-xl p-5 border border-gray-800">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Filter by Era</h3>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setSelectedEra(null)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    selectedEra === null
                      ? 'bg-gray-600 text-white'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
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
                        ? 'bg-gray-600 text-white'
                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                    }`}
                  >
                    {era}
                  </button>
                ))}
              </div>
              {selectedEra && (
                <p className="mt-3 text-sm text-gray-500">{ERA_DESCRIPTIONS[selectedEra]}</p>
              )}
            </div>
          </div>

          {/* Right Column: Results (2/5 width) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Duration Estimate */}
            {results && (
              <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">Duration Estimate</h3>
                
                <div className="text-center mb-6">
                  <div className="text-6xl font-bold tracking-tight" style={{ color: risk?.color }}>
                    {results.durationEstimate ? `~${results.durationEstimate}` : '—'}
                  </div>
                  <div className="text-lg text-gray-400 mt-1">years</div>
                </div>

                {risk && (
                  <div 
                    className="text-center text-sm font-medium px-4 py-2 rounded-full mx-auto w-fit"
                    style={{ 
                      backgroundColor: `${risk.color}20`,
                      color: risk.color
                    }}
                  >
                    {risk.description}
                  </div>
                )}

                {results.durationRange[0] !== null && (
                  <div className="mt-4 text-center text-sm text-gray-500">
                    Range: {results.durationRange[0]} – {results.durationRange[1]} years
                  </div>
                )}

                <div className="mt-6 pt-5 border-t border-gray-800">
                  <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span>Confidence</span>
                    <span>{(results.confidence * 100).toFixed(0)}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-500 rounded-full transition-all duration-300"
                      style={{ width: `${results.confidence * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Similar Polities */}
            {results && results.similar.length > 0 && (
              <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Similar Historical Polities
                </h3>
                <div className="space-y-3">
                  {results.similar.map((polity, i) => (
                    <div 
                      key={i}
                      className="p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition cursor-pointer"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-semibold text-white text-base">{polity.name}</div>
                          <div className="text-sm text-gray-500 mt-1">
                            {polity.era} · {formatYear(polity.start)} – {formatYear(polity.end)}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-base font-semibold text-blue-400">
                            {polity.similarity}%
                          </div>
                          <div className="text-sm text-gray-500">
                            {polity.duration} yrs
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-xs text-gray-600 text-center">
                  Based on {results.candidateCount} polities in database
                </div>
              </div>
            )}

            {/* Era Comparison */}
            {eraComparison.length > 0 && !selectedEra && (
              <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Same Config, Different Eras
                </h3>
                <div className="space-y-3">
                  {eraComparison.map(era => (
                    <div 
                      key={era.era}
                      className="flex justify-between items-center py-3 border-b border-gray-800 last:border-0"
                    >
                      <span className="text-base text-gray-300">{era.era}</span>
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
                  ))}
                </div>
                <p className="mt-4 text-xs text-gray-600">
                  Historical context changes outcomes dramatically.
                </p>
              </div>
            )}
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
function ParameterControl({ paramKey, param, value, onChange }) {
  const [inputValue, setInputValue] = useState(value.toString());

  // Sync input when value changes externally (e.g., preset)
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
    <div>
      <div className="flex justify-between items-center mb-2">
        <label className="text-base text-gray-200 font-medium">{param.label}</label>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleInputKeyDown}
          className="w-16 px-2 py-1 text-right text-base font-medium bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-blue-500 transition"
        />
      </div>
      <input
        type="range"
        min={param.min}
        max={param.max}
        step={param.step}
        value={value}
        onChange={(e) => onChange(paramKey, e.target.value)}
        className="w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer
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