'use client'

import { useState, useMemo, useRef, useEffect } from 'react'

const MECHANISM_COLORS = {
  assassination: '#3b82f6',
  military: '#f97316',
  intra_elite: '#22c55e',
}

// Region tags for fuzzy search
const REGION_KEYWORDS = {
  'East Asia': ['Song', 'Tang', 'Ming', 'Qing', 'Han', 'Jin', 'Wei', 'Kansai', 'Ashikaga', 'Kamakura', 'Tokugawa', 'Japan', 'Majapahit', 'Mataram', 'Medang', 'Angkor', 'Ayutthaya', 'Rattanakosin'],
  'Middle East': ['Abbasid', 'Umayyad', 'Fatimid', 'Safavid', 'Timurid', 'Ottoman', 'Sasanid', 'Achaemenid', 'Seleucid', 'Parthian', 'Durrani', 'Bukhara', 'Ak Koyunlu', 'Zungharian', 'Mongol', 'Rouran', 'Saadi'],
  'Europe': ['Byzantine', 'Roman', 'Venice', 'Carolingian', 'Merovingian', 'French', 'Papal', 'Ostrogothic', 'Ravenna', 'Peter'],
  'North Africa': ['Egypt', 'Mamluk', 'Fatimid', 'Ptolemaic'],
  'Sub-Saharan Africa': ['Akan', 'Ashanti', 'Bamana'],
  'Americas': ['Aztec', 'Inca', 'Hawaii', 'Tikal'],
  'South Asia': ['Mughal', 'Delhi', 'Kushan', 'Rashtrakuta', 'Satavahana', 'Sind'],
  'Mesopotamia': ['Akkadian', 'Neo-Assyrian', 'Neo-Babylonian', 'Hatti'],
}

function getRegions(name) {
  const regions = []
  for (const [region, keywords] of Object.entries(REGION_KEYWORDS)) {
    for (const kw of keywords) {
      if (name.toLowerCase().includes(kw.toLowerCase())) {
        regions.push(region)
        break
      }
    }
  }
  return regions
}

// Simple fuzzy match: check if all query tokens appear in the search string
function fuzzyMatch(query, text) {
  const tokens = query.toLowerCase().split(/\s+/).filter(Boolean)
  const haystack = text.toLowerCase()
  return tokens.every(t => haystack.includes(t))
}

export default function PolityDeepDive({ trajectories, eliteScatter }) {
  const [selectedPolity, setSelectedPolity] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [highlightIndex, setHighlightIndex] = useState(-1)
  const searchRef = useRef(null)
  const dropdownRef = useRef(null)

  // Build searchable polity list with region tags
  const polityList = useMemo(() => {
    return Object.entries(trajectories)
      .map(([name, data]) => {
        const regions = getRegions(name)
        return {
          name,
          ...data,
          regions,
          searchText: [name, ...regions].join(' '),
        }
      })
      .sort((a, b) => b.n_transitions - a.n_transitions)
  }, [trajectories])

  // Filtered results based on search query
  const filtered = useMemo(() => {
    if (!searchQuery.trim()) return polityList
    return polityList.filter(p => fuzzyMatch(searchQuery, p.searchText))
  }, [polityList, searchQuery])

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (!dropdownOpen) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setHighlightIndex(i => Math.min(i + 1, filtered.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHighlightIndex(i => Math.max(i - 1, 0))
    } else if (e.key === 'Enter' && highlightIndex >= 0 && highlightIndex < filtered.length) {
      e.preventDefault()
      selectPolity(filtered[highlightIndex].name)
    } else if (e.key === 'Escape') {
      setDropdownOpen(false)
    }
  }

  const selectPolity = (name) => {
    setSelectedPolity(name)
    setSearchQuery('')
    setDropdownOpen(false)
    setHighlightIndex(-1)
  }

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
    const height = 260
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

    const totalViolent = transitions.filter(t => t.violent).length
    const totalPeaceful = transitions.filter(t => !t.violent).length
    const totalAssassination = transitions.filter(t => t.assassination).length
    const totalMilitary = transitions.filter(t => t.military).length

    return (
      <div className="trajectory-chart">
        <div className="trajectory-header">
          <h4>{selectedPolity}</h4>
          <div className="trajectory-meta">
            <span>{selected.first_year < 0 ? `${Math.abs(selected.first_year)} BCE` : selected.first_year} – {selected.last_year < 0 ? `${Math.abs(selected.last_year)} BCE` : `${selected.last_year} CE`}</span>
            <span className="meta-sep">/</span>
            <span>{selected.n_transitions} transitions</span>
            {selected.admin_levels && <><span className="meta-sep">/</span><span>Admin: {selected.admin_levels}</span></>}
            <span className="meta-sep">/</span>
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

        {/* Summary stats - spread out */}
        <div className="trajectory-stats">
          <div className="traj-stat">
            <span className="traj-stat-val" style={{ color: '#ef4444' }}>{totalViolent}</span>
            <span className="traj-stat-label">violent</span>
          </div>
          <div className="traj-stat">
            <span className="traj-stat-val">{totalPeaceful}</span>
            <span className="traj-stat-label">peaceful</span>
          </div>
          <div className="traj-stat">
            <span className="traj-stat-val" style={{ color: MECHANISM_COLORS.assassination }}>{totalAssassination}</span>
            <span className="traj-stat-label">assassinations</span>
          </div>
          <div className="traj-stat">
            <span className="traj-stat-val" style={{ color: MECHANISM_COLORS.military }}>{totalMilitary}</span>
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
            onClick={() => selectPolity(selectedPolity === p.name ? null : p.name)}>
            {p.label}
          </button>
        ))}
      </div>

      {/* Fuzzy search dropdown */}
      <div className="polity-search" ref={dropdownRef}>
        <input
          ref={searchRef}
          type="text"
          placeholder="Search polities by name or region (e.g. &quot;China&quot;, &quot;Europe&quot;, &quot;Egypt&quot;)..."
          value={searchQuery}
          onChange={e => {
            setSearchQuery(e.target.value)
            setDropdownOpen(true)
            setHighlightIndex(0)
          }}
          onFocus={() => setDropdownOpen(true)}
          onKeyDown={handleKeyDown}
          className="polity-search-input"
        />
        {dropdownOpen && (
          <div className="polity-dropdown">
            {filtered.length === 0 ? (
              <div className="dropdown-empty">No polities found</div>
            ) : (
              filtered.map((p, i) => (
                <button key={p.name}
                  className={`dropdown-item ${selectedPolity === p.name ? 'selected' : ''} ${i === highlightIndex ? 'highlighted' : ''}`}
                  onClick={() => selectPolity(p.name)}
                  onMouseEnter={() => setHighlightIndex(i)}>
                  <div className="dropdown-item-main">
                    <span className="dropdown-name">{p.name}</span>
                    {p.regions.length > 0 && (
                      <span className="dropdown-region">{p.regions[0]}</span>
                    )}
                  </div>
                  <span className="dropdown-meta">
                    {p.n_transitions}t · {(p.overall_rate * 100).toFixed(0)}% violent
                  </span>
                </button>
              ))
            )}
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
          font-family: inherit;
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
          padding: 0.6rem 0.85rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 6px;
          color: var(--text-primary);
          font-size: 0.85rem;
          font-family: inherit;
        }
        .polity-search-input:focus {
          outline: none;
          border-color: var(--accent-dim);
        }
        .polity-search-input::placeholder {
          color: var(--text-muted);
          opacity: 0.6;
        }
        .polity-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-top: none;
          border-radius: 0 0 6px 6px;
          max-height: 280px;
          overflow-y: auto;
          z-index: 10;
        }
        .dropdown-empty {
          padding: 0.75rem;
          text-align: center;
          color: var(--text-muted);
          font-size: 0.8rem;
        }
        .dropdown-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 0.5rem 0.85rem;
          background: none;
          border: none;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          color: var(--text-muted);
          font-size: 0.8rem;
          cursor: pointer;
          text-align: left;
          font-family: inherit;
          transition: background 0.1s;
        }
        .dropdown-item:last-child {
          border-bottom: none;
        }
        .dropdown-item:hover,
        .dropdown-item.highlighted {
          background: rgba(99, 102, 241, 0.08);
        }
        .dropdown-item.selected {
          color: var(--accent);
        }
        .dropdown-item-main {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .dropdown-name {
          color: var(--text-primary);
        }
        .dropdown-region {
          font-size: 0.7rem;
          padding: 0.1rem 0.4rem;
          background: rgba(99, 102, 241, 0.1);
          border-radius: 3px;
          color: var(--text-muted);
        }
        .dropdown-meta {
          font-size: 0.7rem;
          opacity: 0.6;
          white-space: nowrap;
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
          flex-wrap: wrap;
          gap: 0.4rem;
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 0.75rem;
        }
        .meta-sep {
          opacity: 0.3;
        }
        .trajectory-svg {
          width: 100%;
          max-width: 800px;
        }
        .trajectory-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin-top: 0.75rem;
          padding: 0.75rem 0;
          border-top: 1px solid var(--border);
        }
        .traj-stat {
          text-align: center;
        }
        .traj-stat-val {
          display: block;
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          font-family: var(--font-jetbrains), monospace;
        }
        .traj-stat-label {
          font-size: 0.7rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        @media (max-width: 640px) {
          .trajectory-stats {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  )
}
