'use client'

import { useState, useMemo } from 'react'

export default function TransitionTimeline({ timeline, stats }) {
  const [yearRange, setYearRange] = useState([-500, 1500])
  const [hoveredEvent, setHoveredEvent] = useState(null)

  const filteredEvents = useMemo(() =>
    timeline.filter(e => e.year >= yearRange[0] && e.year <= yearRange[1]),
    [timeline, yearRange]
  )

  // Bin events by decade for density plot
  const bins = useMemo(() => {
    const binSize = 50
    const binMap = {}
    filteredEvents.forEach(e => {
      const bin = Math.floor(e.year / binSize) * binSize
      if (!binMap[bin]) binMap[bin] = { total: 0, violent: 0 }
      binMap[bin].total++
      if (e.violent) binMap[bin].violent++
    })
    return Object.entries(binMap)
      .map(([year, data]) => ({ year: Number(year), ...data }))
      .sort((a, b) => a.year - b.year)
  }, [filteredEvents])

  const maxBinCount = Math.max(...bins.map(b => b.total), 1)

  // SVG dimensions
  const width = 800
  const height = 200
  const margin = { top: 30, right: 20, bottom: 40, left: 50 }
  const innerWidth = width - margin.left - margin.right
  const innerHeight = height - margin.top - margin.bottom

  const xScale = (year) =>
    margin.left + ((year - yearRange[0]) / (yearRange[1] - yearRange[0])) * innerWidth
  const yScale = (count) =>
    margin.top + innerHeight - (count / maxBinCount) * innerHeight

  const presets = [
    { label: 'Ancient', range: [-2500, -500] },
    { label: 'Classical', range: [-500, 500] },
    { label: 'Medieval', range: [500, 1500] },
    { label: 'Early Modern', range: [1500, 1900] },
    { label: 'All Time', range: [-2500, 1900] },
  ]

  const violentCount = filteredEvents.filter(e => e.violent).length
  const violenceRate = filteredEvents.length > 0
    ? (violentCount / filteredEvents.length * 100).toFixed(1)
    : 0

  return (
    <div className="transition-timeline">
      <div className="timeline-header">
        <h3>Power Transitions Over Time</h3>
        <p className="timeline-subtitle">
          {filteredEvents.length.toLocaleString()} transitions from {yearRange[0]} to {yearRange[1]}
        </p>
      </div>

      <div className="timeline-controls">
        <div className="presets">
          {presets.map(p => (
            <button
              key={p.label}
              className={yearRange[0] === p.range[0] && yearRange[1] === p.range[1] ? 'active' : ''}
              onClick={() => setYearRange(p.range)}
            >
              {p.label}
            </button>
          ))}
        </div>
        <div className="period-stats">
          <span>{violenceRate}% violent</span>
          <span>{violentCount.toLocaleString()} / {filteredEvents.length.toLocaleString()}</span>
        </div>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="timeline-svg">
        {/* Area chart for density */}
        <defs>
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Filled area */}
        <path
          d={`
            M ${xScale(bins[0]?.year || yearRange[0])} ${margin.top + innerHeight}
            ${bins.map(b => `L ${xScale(b.year + 25)} ${yScale(b.total)}`).join(' ')}
            L ${xScale(bins[bins.length - 1]?.year + 50 || yearRange[1])} ${margin.top + innerHeight}
            Z
          `}
          fill="url(#areaGradient)"
        />

        {/* Violent overlay */}
        <path
          d={`
            M ${xScale(bins[0]?.year || yearRange[0])} ${margin.top + innerHeight}
            ${bins.map(b => `L ${xScale(b.year + 25)} ${yScale(b.violent)}`).join(' ')}
            L ${xScale(bins[bins.length - 1]?.year + 50 || yearRange[1])} ${margin.top + innerHeight}
            Z
          `}
          fill="rgba(239, 68, 68, 0.3)"
        />

        {/* Line for total */}
        <path
          d={`M ${bins.map(b => `${xScale(b.year + 25)} ${yScale(b.total)}`).join(' L ')}`}
          fill="none"
          stroke="var(--accent)"
          strokeWidth={2}
        />

        {/* X axis */}
        <line
          x1={margin.left}
          x2={width - margin.right}
          y1={margin.top + innerHeight}
          y2={margin.top + innerHeight}
          stroke="var(--text-muted)"
          opacity={0.5}
        />
        {/* X axis labels */}
        {Array.from({ length: 5 }, (_, i) => {
          const year = yearRange[0] + (yearRange[1] - yearRange[0]) * (i / 4)
          return (
            <text
              key={i}
              x={xScale(year)}
              y={height - 10}
              textAnchor="middle"
              fill="var(--text-muted)"
              fontSize={11}
            >
              {year > 0 ? `${Math.round(year)} CE` : `${Math.abs(Math.round(year))} BCE`}
            </text>
          )
        })}

        {/* Legend */}
        <rect x={margin.left} y={8} width={12} height={12} fill="var(--accent)" opacity={0.5} />
        <text x={margin.left + 18} y={18} fill="var(--text-muted)" fontSize={10}>Total</text>
        <rect x={margin.left + 60} y={8} width={12} height={12} fill="rgba(239, 68, 68, 0.5)" />
        <text x={margin.left + 78} y={18} fill="var(--text-muted)" fontSize={10}>Violent</text>
      </svg>

      <div className="timeline-insight">
        <strong>Pattern:</strong> Transition density peaks around 1050 CE (late medieval).
        Ottoman and Roman empires dominate the dataset with the most recorded transitions.
      </div>

      <style jsx>{`
        .transition-timeline {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 1.5rem;
          margin-bottom: 2rem;
        }

        .timeline-header h3 {
          margin: 0 0 0.25rem 0;
          font-size: 1.1rem;
          color: var(--text-primary);
        }

        .timeline-subtitle {
          margin: 0 0 1rem 0;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .timeline-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .presets {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .presets button {
          padding: 0.35rem 0.75rem;
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: 4px;
          color: var(--text-muted);
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .presets button:hover {
          border-color: var(--accent);
          color: var(--text-primary);
        }

        .presets button.active {
          background: var(--accent);
          border-color: var(--accent);
          color: var(--bg-primary);
        }

        .period-stats {
          display: flex;
          gap: 1rem;
          font-size: 0.8rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }

        .timeline-svg {
          width: 100%;
          max-width: 800px;
        }

        .timeline-insight {
          font-size: 0.85rem;
          color: var(--text-muted);
          padding: 0.75rem 1rem;
          background: var(--bg-primary);
          border-radius: 4px;
          margin-top: 1rem;
        }
      `}</style>
    </div>
  )
}
