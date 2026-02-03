'use client'

import { useState, useMemo } from 'react'

const MECHANISM_COLORS = {
  assassination: '#3b82f6',
  military: '#f97316',
  intra_elite: '#22c55e',
}

export default function PolityDeepDive({ trajectories, eliteScatter }) {
  const [selectedPolity, setSelectedPolity] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  // Sort polities by interest (n_transitions * intra_rate for "most dramatic")
  const sortedPolities = useMemo(() => {
    return Object.entries(trajectories)
      .map(([name, data]) => ({ name, ...data }))
      .sort((a, b) => b.n_transitions - a.n_transitions)
  }, [trajectories])

  const filtered = useMemo(() => {
    if (!searchQuery) return sortedPolities.slice(0, 20)
    return sortedPolities.filter(p =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 20)
  }, [sortedPolities, searchQuery])

  // Notable presets
  const presets = [
    { label: 'Byzantine III', name: 'Byzantine Empire III' },
    { label: 'Venice III', name: 'Republic of Venice III' },
    { label: 'Mamluk I', name: 'Egypt - Mamluk Sultanate I' },
    { label: 'Ottoman', name: 'Ottoman Empire II' },
    { label: 'Roman Principate', name: 'Roman Empire - Principate' },
    { label: 'Abbasid', name: 'Abbasid Caliphate I' },
    { label: 'N. Song', name: 'Northern Song' },
  ]

  const selected = selectedPolity ? trajectories[selectedPolity] : null

  // Chart for selected polity
  const renderTrajectory = () => {
    if (!selected || !selected.transitions.length) return null

    const transitions = selected.transitions
    const width = 800
    const height = 240
    const margin = { top: 20, right: 20, bottom: 40, left: 50 }
    const plotW = width - margin.left - margin.right
    const plotH = height - margin.top - margin.bottom

    const years = transitions.map(t => t.year)
    const xMin = Math.min(...years)
    const xMax = Math.max(...years)
    const xRange = xMax - xMin || 1

    const x = (v) => margin.left + ((v - xMin) / xRange) * plotW
    const y = (v) => margin.top + (1 - v) * plotH

    // Rolling violence path
    const rollingPath = transitions
      .map((t, i) => `${i === 0 ? 'M' : 'L'}${x(t.year).toFixed(1)},${y(t.rolling_violence).toFixed(1)}`)
      .join(' ')

    return (
      <div className="trajectory-chart">
        <div className="trajectory-header">
          <h4>{selectedPolity}</h4>
          <div className="trajectory-meta">
            <span>{selected.first_year < 0 ? `${Math.abs(selected.first_year)} BCE` : selected.first_year} – {selected.last_year} CE</span>
            <span>·</span>
            <span>{selected.n_transitions} transitions</span>
            {selected.admin_levels && <><span>·</span><span>Admin: {selected.admin_levels}</span></>}
            <span>·</span>
            <span>Conflict: {(selected.intra_rate * 100).toFixed(0)}%</span>
          </div>
        </div>

        <svg viewBox={`0 0 ${width} ${height}`} className="trajectory-svg">
          {/* Grid */}
          {[0, 0.25, 0.5, 0.75, 1.0].map(t => (
            <g key={t}>
              <line x1={margin.left} y1={y(t)} x2={width - margin.right} y2={y(t)}
                stroke="var(--border)" strokeDasharray={t === 0 ? "none" : "2,3"} opacity="0.5" />
              <text x={margin.left - 8} y={y(t) + 4} textAnchor="end"
                fill="var(--text-muted)" fontSize="10">{(t * 100).toFixed(0)}%</text>
            </g>
          ))}

          {/* Rolling violence line */}
          <path d={rollingPath} fill="none" stroke="rgba(239,68,68,0.6)" strokeWidth="2" />

          {/* Individual transitions */}
          {transitions.map((t, i) => {
            const cx = x(t.year)
            const cy = y(t.rolling_violence)
            const color = t.violent
              ? (t.assassination ? MECHANISM_COLORS.assassination
                : t.military ? MECHANISM_COLORS.military
                : t.intra_elite ? MECHANISM_COLORS.intra_elite
                : '#ef4444')
              : 'var(--text-muted)'
            return (
              <g key={i}>
                {/* Event tick at bottom */}
                <line x1={cx} y1={height - margin.bottom} x2={cx}
                  y2={height - margin.bottom + (t.violent ? 12 : 6)}
                  stroke={color} strokeWidth={t.violent ? 2 : 1}
                  opacity={t.violent ? 0.9 : 0.3} />
                {/* Point on rolling line */}
                <circle cx={cx} cy={cy} r={t.violent ? 4 : 2.5}
                  fill={color} opacity={t.violent ? 1 : 0.4} />
              </g>
            )
          })}

          {/* X-axis years */}
          {(() => {
            const step = xRange > 500 ? 200 : xRange > 200 ? 100 : 50
            const ticks = []
            const start = Math.ceil(xMin / step) * step
            for (let t = start; t <= xMax; t += step) ticks.push(t)
            return ticks.map(t => (
              <text key={t} x={x(t)} y={height - 5} textAnchor="middle"
                fill="var(--text-muted)" fontSize="10">
                {t < 0 ? `${Math.abs(t)} BCE` : t}
              </text>
            ))
          })()}

          <text x={margin.left - 8} y={margin.top - 6}
            fill="var(--text-muted)" fontSize="10">Violence</text>
        </svg>

        {/* Summary stats */}
        <div className="trajectory-stats">
          <div className="traj-stat">
            <span className="traj-stat-val">{transitions.filter(t => t.violent).length}</span>
            <span className="traj-stat-label">violent</span>
          </div>
          <div className="traj-stat">
            <span className="traj-stat-val">{transitions.filter(t => !t.violent).length}</span>
            <span className="traj-stat-label">peaceful</span>
          </div>
          <div className="traj-stat">
            <span className="traj-stat-val">{transitions.filter(t => t.assassination).length}</span>
            <span className="traj-stat-label">assassinations</span>
          </div>
          <div className="traj-stat">
            <span className="traj-stat-val">{transitions.filter(t => t.military).length}</span>
            <span className="traj-stat-label">military revolts</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="polity-dive">
      {/* Quick picks */}
      <div className="polity-presets">
        {presets.map(p => (
          <button key={p.name}
            className={`preset-btn ${selectedPolity === p.name ? 'active' : ''}`}
            onClick={() => setSelectedPolity(selectedPolity === p.name ? null : p.name)}>
            {p.label}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="polity-search">
        <input
          type="text"
          placeholder="Search polities..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="polity-search-input"
        />
        {searchQuery && (
          <div className="polity-results">
            {filtered.map(p => (
              <button key={p.name}
                className={`polity-result ${selectedPolity === p.name ? 'active' : ''}`}
                onClick={() => { setSelectedPolity(p.name); setSearchQuery('') }}>
                <span className="polity-name">{p.name}</span>
                <span className="polity-meta">
                  {p.n_transitions}t · {(p.intra_rate * 100).toFixed(0)}% conflict
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Trajectory view */}
      {selected ? renderTrajectory() : (
        <div className="polity-placeholder">
          Select a polity above to see its transition trajectory
        </div>
      )}

      <style jsx>{`
        .polity-dive {
          margin-top: 1rem;
        }
        .polity-presets {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .preset-btn {
          padding: 0.35rem 0.75rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 4px;
          color: var(--text-muted);
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.15s;
        }
        .preset-btn:hover {
          border-color: var(--accent);
          color: var(--text-primary);
        }
        .preset-btn.active {
          background: rgba(99, 102, 241, 0.15);
          border-color: var(--accent);
          color: var(--accent);
        }
        .polity-search {
          position: relative;
          margin-bottom: 1rem;
        }
        .polity-search-input {
          width: 100%;
          padding: 0.5rem 0.75rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 4px;
          color: var(--text-primary);
          font-size: 0.85rem;
        }
        .polity-search-input::placeholder {
          color: var(--text-muted);
        }
        .polity-results {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 0 0 4px 4px;
          max-height: 200px;
          overflow-y: auto;
          z-index: 10;
        }
        .polity-result {
          display: flex;
          justify-content: space-between;
          width: 100%;
          padding: 0.5rem 0.75rem;
          background: none;
          border: none;
          border-bottom: 1px solid var(--border);
          color: var(--text-muted);
          font-size: 0.8rem;
          cursor: pointer;
          text-align: left;
        }
        .polity-result:hover {
          background: rgba(99, 102, 241, 0.08);
        }
        .polity-result.active {
          color: var(--accent);
        }
        .polity-name {
          color: var(--text-primary);
        }
        .polity-meta {
          font-size: 0.75rem;
          opacity: 0.7;
        }
        .polity-placeholder {
          text-align: center;
          padding: 3rem;
          color: var(--text-muted);
          font-size: 0.9rem;
          opacity: 0.6;
        }
        .trajectory-chart {
          margin-top: 0.5rem;
        }
        .trajectory-header h4 {
          font-size: 1.1rem;
          color: var(--text-primary);
          margin: 0 0 0.25rem 0;
        }
        .trajectory-meta {
          display: flex;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 0.75rem;
        }
        .trajectory-svg {
          width: 100%;
          max-width: 800px;
        }
        .trajectory-stats {
          display: flex;
          gap: 2rem;
          margin-top: 0.75rem;
          padding-top: 0.75rem;
          border-top: 1px solid var(--border);
        }
        .traj-stat {
          text-align: center;
        }
        .traj-stat-val {
          display: block;
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          font-family: var(--font-mono);
        }
        .traj-stat-label {
          font-size: 0.7rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
      `}</style>
    </div>
  )
}
