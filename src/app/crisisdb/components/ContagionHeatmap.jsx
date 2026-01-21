'use client'

import { useState, useEffect } from 'react'

export default function ContagionHeatmap({ markov }) {
  const [step, setStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [startState, setStartState] = useState('peaceful')

  // Simulate convergence to stationary distribution
  const maxSteps = 20
  const initialState = startState === 'peaceful' ? [1, 0] : [0, 1]

  const P = [
    [markov.p_peaceful_to_peaceful, markov.p_peaceful_to_violent],
    [markov.p_violent_to_peaceful, markov.p_violent_to_violent]
  ]

  const getStateAtStep = (n) => {
    let state = [...initialState]
    for (let i = 0; i < n; i++) {
      state = [
        state[0] * P[0][0] + state[1] * P[1][0],
        state[0] * P[0][1] + state[1] * P[1][1]
      ]
    }
    return state
  }

  const currentState = getStateAtStep(step)

  useEffect(() => {
    if (isPlaying && step < maxSteps) {
      const timer = setTimeout(() => setStep(s => s + 1), 500)
      return () => clearTimeout(timer)
    } else if (step >= maxSteps) {
      setIsPlaying(false)
    }
  }, [isPlaying, step])

  const reset = () => {
    setStep(0)
    setIsPlaying(false)
  }

  return (
    <div className="contagion-heatmap">
      <div className="contagion-header">
        <h3>Violence Contagion</h3>
        <p className="contagion-subtitle">
          Markov transition dynamics: violence is "sticky"
        </p>
      </div>

      <div className="matrix-section">
        <h4>Transition Matrix</h4>
        <table className="transition-matrix">
          <thead>
            <tr>
              <th></th>
              <th>→ Peaceful</th>
              <th>→ Violent</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="row-label">Peaceful</td>
              <td className="cell peaceful">{(markov.p_peaceful_to_peaceful * 100).toFixed(0)}%</td>
              <td className="cell mixed">{(markov.p_peaceful_to_violent * 100).toFixed(0)}%</td>
            </tr>
            <tr>
              <td className="row-label">Violent</td>
              <td className="cell mixed">{(markov.p_violent_to_peaceful * 100).toFixed(0)}%</td>
              <td className="cell violent">{(markov.p_violent_to_violent * 100).toFixed(0)}%</td>
            </tr>
          </tbody>
        </table>

        <div className="key-insight">
          <strong>Key insight:</strong> After a violent transition,
          the next transition is <span className="highlight">2.7x more likely</span> to
          also be violent (60% vs 22% baseline).
        </div>
      </div>

      <div className="simulation-section">
        <h4>Convergence to Equilibrium</h4>

        <div className="sim-controls">
          <label>
            Start:
            <select value={startState} onChange={e => { setStartState(e.target.value); reset(); }}>
              <option value="peaceful">100% Peaceful</option>
              <option value="violent">100% Violent</option>
            </select>
          </label>
          <button onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <button onClick={reset}>Reset</button>
          <span className="step-counter">Step {step}/{maxSteps}</span>
        </div>

        <div className="state-bars">
          <div className="bar-row">
            <span className="bar-label">Peaceful</span>
            <div className="bar-track">
              <div
                className="bar-fill peaceful"
                style={{ width: `${currentState[0] * 100}%` }}
              />
            </div>
            <span className="bar-value">{(currentState[0] * 100).toFixed(1)}%</span>
          </div>
          <div className="bar-row">
            <span className="bar-label">Violent</span>
            <div className="bar-track">
              <div
                className="bar-fill violent"
                style={{ width: `${currentState[1] * 100}%` }}
              />
            </div>
            <span className="bar-value">{(currentState[1] * 100).toFixed(1)}%</span>
          </div>
        </div>

        <div className="stationary-note">
          <strong>Stationary distribution:</strong> {(markov.stationary_peaceful * 100).toFixed(0)}% peaceful, {(markov.stationary_violent * 100).toFixed(0)}% violent
          <br/>
          <span className="note-detail">The system spends ~36% of time in violent states at equilibrium.</span>
        </div>
      </div>

      <style jsx>{`
        .contagion-heatmap {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 1.5rem;
          margin-bottom: 2rem;
        }

        .contagion-header h3 {
          margin: 0 0 0.25rem 0;
          font-size: 1.1rem;
          color: var(--text-primary);
        }

        .contagion-subtitle {
          margin: 0 0 1.5rem 0;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .matrix-section, .simulation-section {
          margin-bottom: 1.5rem;
        }

        h4 {
          font-size: 0.9rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin: 0 0 0.75rem 0;
        }

        .transition-matrix {
          border-collapse: collapse;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .transition-matrix th, .transition-matrix td {
          padding: 0.5rem 1rem;
          text-align: center;
          border: 1px solid var(--border);
        }

        .transition-matrix th {
          background: var(--bg-primary);
          color: var(--text-muted);
          font-weight: 500;
        }

        .row-label {
          background: var(--bg-primary);
          color: var(--text-muted);
          font-weight: 500;
          text-align: left !important;
        }

        .cell.peaceful {
          background: rgba(34, 197, 94, 0.15);
          color: rgb(34, 197, 94);
          font-weight: 600;
        }

        .cell.violent {
          background: rgba(239, 68, 68, 0.15);
          color: rgb(239, 68, 68);
          font-weight: 600;
        }

        .cell.mixed {
          background: var(--bg-primary);
          color: var(--text-muted);
        }

        .key-insight {
          font-size: 0.85rem;
          color: var(--text-muted);
          padding: 0.75rem 1rem;
          background: var(--bg-primary);
          border-radius: 4px;
        }

        .highlight {
          color: rgb(239, 68, 68);
          font-weight: 600;
        }

        .sim-controls {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
          font-size: 0.85rem;
        }

        .sim-controls select {
          padding: 0.25rem 0.5rem;
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: 4px;
          color: var(--text-primary);
          margin-left: 0.5rem;
        }

        .sim-controls button {
          padding: 0.35rem 0.75rem;
          background: var(--accent);
          border: none;
          border-radius: 4px;
          color: var(--bg-primary);
          font-size: 0.8rem;
          cursor: pointer;
        }

        .sim-controls button:hover {
          opacity: 0.9;
        }

        .step-counter {
          color: var(--text-muted);
          font-family: var(--font-mono);
          font-size: 0.8rem;
        }

        .state-bars {
          margin-bottom: 1rem;
        }

        .bar-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
        }

        .bar-label {
          width: 70px;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .bar-track {
          flex: 1;
          height: 24px;
          background: var(--bg-primary);
          border-radius: 4px;
          overflow: hidden;
        }

        .bar-fill {
          height: 100%;
          transition: width 0.3s ease;
        }

        .bar-fill.peaceful {
          background: rgb(34, 197, 94);
        }

        .bar-fill.violent {
          background: rgb(239, 68, 68);
        }

        .bar-value {
          width: 50px;
          font-size: 0.8rem;
          font-family: var(--font-mono);
          color: var(--text-primary);
          text-align: right;
        }

        .stationary-note {
          font-size: 0.8rem;
          color: var(--text-muted);
          padding: 0.75rem 1rem;
          background: var(--bg-primary);
          border-radius: 4px;
        }

        .note-detail {
          opacity: 0.7;
        }
      `}</style>
    </div>
  )
}
