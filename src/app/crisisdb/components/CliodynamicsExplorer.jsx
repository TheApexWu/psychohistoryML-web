'use client'

import { useState, useMemo, useEffect } from 'react'

export default function CliodynamicsExplorer({ eliteScatter, markov, rulers, stats }) {
  const [complexity, setComplexity] = useState(5)
  const [priorViolent, setPriorViolent] = useState(false)
  const [simulation, setSimulation] = useState([])
  const [isRunning, setIsRunning] = useState(false)
  const [selectedPolity, setSelectedPolity] = useState('')
  const [simSpeed, setSimSpeed] = useState(100)

  // Compute historical patterns for given complexity
  const historicalPatterns = useMemo(() => {
    // Find polities at similar complexity (±1 level)
    const nearby = eliteScatter.filter(p =>
      Math.abs(p.admin_levels - complexity) <= 1
    )

    // Also get exact matches
    const exact = eliteScatter.filter(p =>
      Math.round(p.admin_levels) === complexity
    )

    // Get rulers at this complexity level
    const complexityRulers = rulers.filter(r => {
      const polity = eliteScatter.find(p =>
        p.name.toLowerCase() === r.polity.toLowerCase()
      )
      return polity && Math.round(polity.admin_levels) === complexity
    })

    const conflictRate = exact.length > 0
      ? exact.reduce((sum, p) => sum + p.intra_rate, 0) / exact.length
      : nearby.reduce((sum, p) => sum + p.intra_rate, 0) / Math.max(nearby.length, 1)

    const medianTenure = complexityRulers.length > 0
      ? [...complexityRulers].sort((a, b) => a.reign_years - b.reign_years)[Math.floor(complexityRulers.length / 2)].reign_years
      : 10 - (complexity - 4) * 0.5 // rough estimate based on correlation

    const transitionCount = exact.reduce((sum, p) => sum + p.n_transitions, 0)

    return {
      conflictRate: conflictRate || 0.25 + complexity * 0.05,
      medianTenure: medianTenure || 10,
      sampleSize: transitionCount,
      polityCount: exact.length,
      equilibrium: markov.stationary_violent
    }
  }, [complexity, eliteScatter, rulers, markov])

  // Markov transition probabilities
  const P = useMemo(() => ({
    peacefulToPeaceful: markov.p_peaceful_to_peaceful,
    peacefulToViolent: markov.p_peaceful_to_violent,
    violentToPeaceful: markov.p_violent_to_peaceful,
    violentToViolent: markov.p_violent_to_violent
  }), [markov])

  // Run simulation
  const runSimulation = () => {
    setSimulation([])
    setIsRunning(true)

    let currentViolent = priorViolent
    const results = []

    for (let i = 0; i < 50; i++) {
      const prob = currentViolent ? P.violentToViolent : P.peacefulToViolent
      const nextViolent = Math.random() < prob
      results.push({
        index: i,
        violent: nextViolent,
        fromViolent: currentViolent
      })
      currentViolent = nextViolent
    }

    // Animate the results
    results.forEach((r, i) => {
      setTimeout(() => {
        setSimulation(prev => [...prev, r])
        if (i === results.length - 1) setIsRunning(false)
      }, i * simSpeed)
    })
  }

  // Compute simulation stats
  const simStats = useMemo(() => {
    if (simulation.length === 0) return null

    const violentCount = simulation.filter(s => s.violent).length
    const violenceRate = violentCount / simulation.length

    // Find longest streaks
    let longestPeace = 0, longestCrisis = 0
    let currentPeace = 0, currentCrisis = 0

    simulation.forEach(s => {
      if (s.violent) {
        currentCrisis++
        currentPeace = 0
        longestCrisis = Math.max(longestCrisis, currentCrisis)
      } else {
        currentPeace++
        currentCrisis = 0
        longestPeace = Math.max(longestPeace, currentPeace)
      }
    })

    return { violentCount, violenceRate, longestPeace, longestCrisis }
  }, [simulation])

  // Real polities for comparison
  const polityOptions = useMemo(() => {
    return [...eliteScatter]
      .sort((a, b) => b.n_transitions - a.n_transitions)
      .slice(0, 30)
  }, [eliteScatter])

  const selectedPolityData = useMemo(() => {
    if (!selectedPolity) return null
    return eliteScatter.find(p => p.name === selectedPolity)
  }, [selectedPolity, eliteScatter])

  // Deviation analysis
  const deviation = useMemo(() => {
    if (!selectedPolityData) return null

    const expected = historicalPatterns.conflictRate
    const actual = selectedPolityData.intra_rate
    const diff = actual - expected

    let insight = ''
    if (Math.abs(diff) < 0.1) {
      insight = 'Close to historical average for this complexity level.'
    } else if (diff > 0.3) {
      insight = 'Significantly higher conflict—suggests compounding instability factors (decline, external pressure, succession crises).'
    } else if (diff > 0.1) {
      insight = 'Above average conflict—possible weak succession institutions or elite fragmentation.'
    } else if (diff < -0.3) {
      insight = 'Remarkably stable—suggests strong succession institutions buffering elite competition.'
    } else if (diff < -0.1) {
      insight = 'Below average conflict—effective institutional constraints on elite violence.'
    }

    return { expected, actual, diff, insight }
  }, [selectedPolityData, historicalPatterns])

  return (
    <div className="cliodynamics-explorer">
      <div className="explorer-header">
        <h2>Explore the Patterns</h2>
        <p className="explorer-subtitle">
          What do polities at different complexity levels typically experience?
          Configure parameters and explore historical patterns from {stats.total_transitions.toLocaleString()} observed transitions.
        </p>
      </div>

      <div className="explorer-grid">
        {/* Left: Configuration */}
        <div className="config-panel">
          <h3>Configure Polity Profile</h3>

          <div className="config-group">
            <label>
              Administrative Complexity
              <span className="config-value">{complexity} levels</span>
            </label>
            <input
              type="range"
              min="2"
              max="8"
              value={complexity}
              onChange={e => setComplexity(Number(e.target.value))}
              className="complexity-slider"
            />
            <div className="slider-labels">
              <span>Simple</span>
              <span>Complex</span>
            </div>
          </div>

          <div className="config-group">
            <label>Prior Transition</label>
            <div className="toggle-group">
              <button
                className={!priorViolent ? 'active peaceful' : ''}
                onClick={() => setPriorViolent(false)}
              >
                Peaceful
              </button>
              <button
                className={priorViolent ? 'active violent' : ''}
                onClick={() => setPriorViolent(true)}
              >
                Violent
              </button>
            </div>
          </div>

          <button
            className="run-button"
            onClick={runSimulation}
            disabled={isRunning}
          >
            {isRunning ? 'Running...' : '▶ Simulate 50 Successions'}
          </button>
          <p className="run-note">Using observed Markov transition rates</p>

          <div className="compare-section">
            <h4>Compare to Real Polity</h4>
            <select
              value={selectedPolity}
              onChange={e => setSelectedPolity(e.target.value)}
            >
              <option value="">Select a polity...</option>
              {polityOptions.map(p => (
                <option key={p.name} value={p.name}>
                  {p.name} (n={p.n_transitions})
                </option>
              ))}
            </select>

            {selectedPolityData && (
              <div className="polity-info">
                <div className="polity-stat">
                  <span className="label">Complexity:</span>
                  <span className="value">{selectedPolityData.admin_levels}</span>
                </div>
                <div className="polity-stat">
                  <span className="label">Actual conflict:</span>
                  <span className="value">{(selectedPolityData.intra_rate * 100).toFixed(0)}%</span>
                </div>
                <div className="polity-stat">
                  <span className="label">Transitions:</span>
                  <span className="value">{selectedPolityData.n_transitions}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right: Patterns & Simulation */}
        <div className="results-panel">
          <div className="patterns-section">
            <h3>Historical Patterns at Complexity {complexity}</h3>
            <p className="patterns-note">
              Based on {historicalPatterns.polityCount} polities, {historicalPatterns.sampleSize} transitions
            </p>

            <div className="pattern-metrics">
              <div className="metric">
                <span className="metric-label">Conflict Rate</span>
                <div className="metric-bar-container">
                  <div
                    className="metric-bar conflict"
                    style={{ width: `${historicalPatterns.conflictRate * 100}%` }}
                  />
                </div>
                <span className="metric-value">{(historicalPatterns.conflictRate * 100).toFixed(0)}%</span>
              </div>

              <div className="metric">
                <span className="metric-label">Median Tenure</span>
                <div className="metric-bar-container">
                  <div
                    className="metric-bar tenure"
                    style={{ width: `${(historicalPatterns.medianTenure / 20) * 100}%` }}
                  />
                </div>
                <span className="metric-value">{historicalPatterns.medianTenure.toFixed(0)} yrs</span>
              </div>

              <div className="metric">
                <span className="metric-label">Equilibrium Violence</span>
                <div className="metric-bar-container">
                  <div
                    className="metric-bar equilibrium"
                    style={{ width: `${historicalPatterns.equilibrium * 100}%` }}
                  />
                </div>
                <span className="metric-value">{(historicalPatterns.equilibrium * 100).toFixed(0)}%</span>
              </div>

              <div className="metric">
                <span className="metric-label">Next Transition</span>
                <div className="metric-bar-container">
                  <div
                    className="metric-bar next"
                    style={{ width: `${(priorViolent ? P.violentToViolent : P.peacefulToViolent) * 100}%` }}
                  />
                </div>
                <span className="metric-value">
                  {((priorViolent ? P.violentToViolent : P.peacefulToViolent) * 100).toFixed(0)}% violent
                </span>
              </div>
            </div>
          </div>

          {/* Simulation visualization */}
          <div className="simulation-section">
            <h4>Simulation</h4>
            {simulation.length === 0 ? (
              <p className="sim-placeholder">
                Click "Simulate" to see one possible trajectory based on historical rates
              </p>
            ) : (
              <>
                <div className="sim-grid">
                  {simulation.map((s, i) => (
                    <div
                      key={i}
                      className={`sim-block ${s.violent ? 'violent' : 'peaceful'}`}
                      title={`Transition ${i + 1}: ${s.violent ? 'Violent' : 'Peaceful'}`}
                    />
                  ))}
                  {isRunning && Array.from({ length: 50 - simulation.length }).map((_, i) => (
                    <div key={`empty-${i}`} className="sim-block empty" />
                  ))}
                </div>
                <div className="sim-legend">
                  <span><span className="block peaceful" /> Peaceful</span>
                  <span><span className="block violent" /> Violent</span>
                </div>
                {simStats && !isRunning && (
                  <div className="sim-stats">
                    <span>Violence rate: <strong>{(simStats.violenceRate * 100).toFixed(0)}%</strong></span>
                    <span>Longest peace streak: <strong>{simStats.longestPeace}</strong></span>
                    <span>Longest crisis: <strong>{simStats.longestCrisis}</strong></span>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Deviation insight */}
          {deviation && (
            <div className="deviation-section">
              <h4>Deviation Analysis: {selectedPolityData.name}</h4>
              <div className="deviation-comparison">
                <div className="deviation-bar">
                  <span className="dev-label">Historical avg</span>
                  <div className="dev-track">
                    <div
                      className="dev-fill expected"
                      style={{ width: `${deviation.expected * 100}%` }}
                    />
                  </div>
                  <span className="dev-value">{(deviation.expected * 100).toFixed(0)}%</span>
                </div>
                <div className="deviation-bar">
                  <span className="dev-label">Actual</span>
                  <div className="dev-track">
                    <div
                      className={`dev-fill actual ${deviation.diff > 0 ? 'higher' : 'lower'}`}
                      style={{ width: `${deviation.actual * 100}%` }}
                    />
                  </div>
                  <span className="dev-value">{(deviation.actual * 100).toFixed(0)}%</span>
                </div>
              </div>
              <p className="deviation-insight">
                <strong>
                  {deviation.diff > 0 ? '+' : ''}{(deviation.diff * 100).toFixed(0)}pp deviation:
                </strong>{' '}
                {deviation.insight}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="explorer-footer">
        <p>
          <strong>How to read this:</strong> The complexity slider shows what polities at each
          administrative level historically experienced. The simulation runs a Markov chain using
          observed transition probabilities (P(V→V)={P.violentToViolent.toFixed(0)*100}%,
          P(P→V)={(P.peacefulToViolent * 100).toFixed(0)}%). Compare to real polities to see
          which deviate from expected patterns—and why.
        </p>
      </div>

      <style jsx>{`
        .cliodynamics-explorer {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 1.5rem;
          margin-bottom: 3rem;
        }

        .explorer-header {
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .explorer-header h2 {
          font-size: 1.5rem;
          margin: 0 0 0.5rem 0;
          color: var(--text-primary);
        }

        .explorer-subtitle {
          color: var(--text-muted);
          font-size: 0.95rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .explorer-grid {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 1.5rem;
        }

        @media (max-width: 768px) {
          .explorer-grid {
            grid-template-columns: 1fr;
          }
        }

        .config-panel, .results-panel {
          background: var(--bg-primary);
          border-radius: 6px;
          padding: 1.25rem;
        }

        .config-panel h3, .results-panel h3 {
          font-size: 0.9rem;
          color: var(--text-primary);
          margin: 0 0 1rem 0;
        }

        .config-group {
          margin-bottom: 1.25rem;
        }

        .config-group label {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
        }

        .config-value {
          color: var(--accent);
          font-family: var(--font-mono);
        }

        .complexity-slider {
          width: 100%;
          height: 6px;
          -webkit-appearance: none;
          background: var(--border);
          border-radius: 3px;
          outline: none;
        }

        .complexity-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 18px;
          height: 18px;
          background: var(--accent);
          border-radius: 50%;
          cursor: pointer;
        }

        .slider-labels {
          display: flex;
          justify-content: space-between;
          font-size: 0.7rem;
          color: var(--text-muted);
          margin-top: 0.25rem;
        }

        .toggle-group {
          display: flex;
          gap: 0.5rem;
        }

        .toggle-group button {
          flex: 1;
          padding: 0.5rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 4px;
          color: var(--text-muted);
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .toggle-group button:hover {
          border-color: var(--accent);
        }

        .toggle-group button.active.peaceful {
          background: rgba(34, 197, 94, 0.15);
          border-color: rgb(34, 197, 94);
          color: rgb(34, 197, 94);
        }

        .toggle-group button.active.violent {
          background: rgba(239, 68, 68, 0.15);
          border-color: rgb(239, 68, 68);
          color: rgb(239, 68, 68);
        }

        .run-button {
          width: 100%;
          padding: 0.75rem;
          background: var(--accent);
          border: none;
          border-radius: 4px;
          color: var(--bg-primary);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: opacity 0.15s ease;
        }

        .run-button:hover:not(:disabled) {
          opacity: 0.9;
        }

        .run-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .run-note {
          font-size: 0.7rem;
          color: var(--text-muted);
          text-align: center;
          margin: 0.5rem 0 0 0;
        }

        .compare-section {
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border);
        }

        .compare-section h4 {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin: 0 0 0.75rem 0;
        }

        .compare-section select {
          width: 100%;
          padding: 0.5rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 4px;
          color: var(--text-primary);
          font-size: 0.85rem;
        }

        .polity-info {
          margin-top: 0.75rem;
          padding: 0.75rem;
          background: var(--bg-secondary);
          border-radius: 4px;
        }

        .polity-stat {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          margin-bottom: 0.25rem;
        }

        .polity-stat .label {
          color: var(--text-muted);
        }

        .polity-stat .value {
          color: var(--text-primary);
          font-family: var(--font-mono);
        }

        .patterns-note {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin: -0.5rem 0 1rem 0;
        }

        .pattern-metrics {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .metric {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .metric-label {
          width: 130px;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .metric-bar-container {
          flex: 1;
          height: 20px;
          background: var(--bg-secondary);
          border-radius: 3px;
          overflow: hidden;
        }

        .metric-bar {
          height: 100%;
          transition: width 0.3s ease;
        }

        .metric-bar.conflict {
          background: linear-gradient(90deg, rgb(34, 197, 94), rgb(239, 68, 68));
        }

        .metric-bar.tenure {
          background: var(--accent);
        }

        .metric-bar.equilibrium {
          background: rgb(168, 85, 247);
        }

        .metric-bar.next {
          background: ${priorViolent ? 'rgb(239, 68, 68)' : 'rgb(34, 197, 94)'};
        }

        .metric-value {
          width: 60px;
          text-align: right;
          font-size: 0.85rem;
          font-family: var(--font-mono);
          color: var(--text-primary);
        }

        .simulation-section {
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border);
        }

        .simulation-section h4 {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin: 0 0 0.75rem 0;
        }

        .sim-placeholder {
          font-size: 0.85rem;
          color: var(--text-muted);
          opacity: 0.7;
          text-align: center;
          padding: 1rem;
        }

        .sim-grid {
          display: grid;
          grid-template-columns: repeat(25, 1fr);
          gap: 3px;
        }

        .sim-block {
          aspect-ratio: 1;
          border-radius: 2px;
          transition: transform 0.1s ease;
        }

        .sim-block.peaceful {
          background: rgb(34, 197, 94);
        }

        .sim-block.violent {
          background: rgb(239, 68, 68);
        }

        .sim-block.empty {
          background: var(--bg-secondary);
        }

        .sim-block:hover {
          transform: scale(1.2);
        }

        .sim-legend {
          display: flex;
          gap: 1rem;
          margin-top: 0.5rem;
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .sim-legend .block {
          display: inline-block;
          width: 10px;
          height: 10px;
          border-radius: 2px;
          margin-right: 0.25rem;
        }

        .sim-legend .block.peaceful {
          background: rgb(34, 197, 94);
        }

        .sim-legend .block.violent {
          background: rgb(239, 68, 68);
        }

        .sim-stats {
          display: flex;
          gap: 1rem;
          margin-top: 0.75rem;
          padding: 0.75rem;
          background: var(--bg-secondary);
          border-radius: 4px;
          font-size: 0.8rem;
          color: var(--text-muted);
          flex-wrap: wrap;
        }

        .sim-stats strong {
          color: var(--text-primary);
        }

        .deviation-section {
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border);
        }

        .deviation-section h4 {
          font-size: 0.85rem;
          color: var(--text-primary);
          margin: 0 0 0.75rem 0;
        }

        .deviation-comparison {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .deviation-bar {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .dev-label {
          width: 90px;
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .dev-track {
          flex: 1;
          height: 16px;
          background: var(--bg-secondary);
          border-radius: 3px;
          overflow: hidden;
        }

        .dev-fill {
          height: 100%;
        }

        .dev-fill.expected {
          background: var(--text-muted);
          opacity: 0.5;
        }

        .dev-fill.actual.higher {
          background: rgb(239, 68, 68);
        }

        .dev-fill.actual.lower {
          background: rgb(34, 197, 94);
        }

        .dev-value {
          width: 40px;
          font-size: 0.8rem;
          font-family: var(--font-mono);
          color: var(--text-primary);
        }

        .deviation-insight {
          margin-top: 0.75rem;
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .deviation-insight strong {
          color: var(--text-primary);
        }

        .explorer-footer {
          margin-top: 1.5rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border);
        }

        .explorer-footer p {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0;
        }
      `}</style>
    </div>
  )
}
