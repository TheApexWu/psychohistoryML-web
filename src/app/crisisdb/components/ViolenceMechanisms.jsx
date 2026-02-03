'use client'

import { useState, useMemo } from 'react'

const COLORS = {
  assassination: '#3b82f6',  // blue
  military: '#f97316',       // orange
  intra_elite: '#22c55e',    // green
  violent: '#ef4444',        // red (overall)
}

const LABELS = {
  assassination: 'Assassination',
  military: 'Military Revolt',
  intra_elite: 'Intra-Elite Conflict',
}

export default function ViolenceMechanisms({ data }) {
  const [hoveredCentury, setHoveredCentury] = useState(null)
  const [showOverall, setShowOverall] = useState(false)

  // Chart dimensions
  const width = 800
  const height = 320
  const margin = { top: 20, right: 20, bottom: 50, left: 55 }
  const plotW = width - margin.left - margin.right
  const plotH = height - margin.top - margin.bottom

  const xMin = Math.min(...data.map(d => d.century))
  const xMax = Math.max(...data.map(d => d.century))
  const yMax = 0.85

  const x = (v) => margin.left + ((v - xMin) / (xMax - xMin)) * plotW
  const y = (v) => margin.top + (1 - v / yMax) * plotH

  const mechanisms = ['assassination', 'military', 'intra_elite']

  const makePath = (key) => {
    const rateKey = `${key}_rate`
    return data
      .map((d, i) => `${i === 0 ? 'M' : 'L'}${x(d.century).toFixed(1)},${y(d[rateKey]).toFixed(1)}`)
      .join(' ')
  }

  const overallPath = data
    .map((d, i) => `${i === 0 ? 'M' : 'L'}${x(d.century).toFixed(1)},${y(d.violent_rate).toFixed(1)}`)
    .join(' ')

  // Crisis of 3rd century marker
  const crisisX = x(200)

  // Y-axis ticks
  const yTicks = [0, 0.2, 0.4, 0.6, 0.8]

  // X-axis ticks - every 400 years
  const xTicks = data.filter(d => d.century % 400 === 0)

  const hovered = hoveredCentury !== null ? data.find(d => d.century === hoveredCentury) : null

  return (
    <div className="mechanisms-chart">
      <div className="mechanisms-controls">
        <label className="mechanism-toggle">
          <input type="checkbox" checked={showOverall} onChange={e => setShowOverall(e.target.checked)} />
          <span>Show overall violence rate</span>
        </label>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="mechanisms-svg">
        {/* Grid */}
        {yTicks.map(t => (
          <g key={t}>
            <line x1={margin.left} y1={y(t)} x2={width - margin.right} y2={y(t)}
              stroke="var(--border)" strokeDasharray={t === 0 ? "none" : "3,3"} />
            <text x={margin.left - 8} y={y(t) + 4} textAnchor="end"
              fill="var(--text-muted)" fontSize="11">{(t * 100).toFixed(0)}%</text>
          </g>
        ))}

        {/* X axis labels */}
        {xTicks.map(d => (
          <text key={d.century} x={x(d.century)} y={height - 8} textAnchor="middle"
            fill="var(--text-muted)" fontSize="11">
            {d.century < 0 ? `${Math.abs(d.century)} BCE` : `${d.century} CE`}
          </text>
        ))}

        {/* Crisis of 3rd century */}
        <line x1={crisisX} y1={margin.top} x2={crisisX} y2={height - margin.bottom}
          stroke="rgba(239,68,68,0.25)" strokeDasharray="6,4" />
        <text x={crisisX + 5} y={margin.top + 14} fill="rgba(239,68,68,0.5)" fontSize="10">
          Crisis of 3rd c.
        </text>

        {/* Lines */}
        {showOverall && (
          <path d={overallPath} fill="none" stroke={COLORS.violent}
            strokeWidth="1.5" strokeDasharray="6,3" opacity="0.5" />
        )}
        {mechanisms.map(key => (
          <path key={key} d={makePath(key)} fill="none"
            stroke={COLORS[key]} strokeWidth="2" />
        ))}

        {/* Data points */}
        {mechanisms.map(key => (
          data.map(d => (
            <circle key={`${key}-${d.century}`}
              cx={x(d.century)} cy={y(d[`${key}_rate`])}
              r={hoveredCentury === d.century ? 5 : 3}
              fill={COLORS[key]}
              opacity={hoveredCentury === null || hoveredCentury === d.century ? 1 : 0.3}
            />
          ))
        ))}

        {/* Hover targets */}
        {data.map(d => (
          <rect key={d.century}
            x={x(d.century) - 15} y={margin.top} width={30} height={plotH}
            fill="transparent"
            onMouseEnter={() => setHoveredCentury(d.century)}
            onMouseLeave={() => setHoveredCentury(null)}
          />
        ))}

        {/* Axis labels */}
        <text x={width / 2} y={height - 2} textAnchor="middle"
          fill="var(--text-muted)" fontSize="12">Century</text>
        <text x={14} y={height / 2} textAnchor="middle"
          fill="var(--text-muted)" fontSize="12"
          transform={`rotate(-90, 14, ${height / 2})`}>Rate</text>
      </svg>

      {/* Legend */}
      <div className="mechanisms-legend">
        {mechanisms.map(key => (
          <div key={key} className="legend-item">
            <span className="legend-dot" style={{ background: COLORS[key] }} />
            <span>{LABELS[key]}</span>
          </div>
        ))}
        {showOverall && (
          <div className="legend-item">
            <span className="legend-dot" style={{ background: COLORS.violent, opacity: 0.5 }} />
            <span>Overall Violence</span>
          </div>
        )}
      </div>

      {/* Tooltip */}
      {hovered && (
        <div className="mechanisms-tooltip">
          <strong>{hovered.century < 0 ? `${Math.abs(hovered.century)}s BCE` : `${hovered.century}s CE`}</strong>
          <span className="tooltip-n">n = {hovered.total}</span>
          <div className="tooltip-row">
            <span style={{ color: COLORS.intra_elite }}>■</span> Intra-Elite: {(hovered.intra_elite_rate * 100).toFixed(1)}%
          </div>
          <div className="tooltip-row">
            <span style={{ color: COLORS.assassination }}>■</span> Assassination: {(hovered.assassination_rate * 100).toFixed(1)}%
          </div>
          <div className="tooltip-row">
            <span style={{ color: COLORS.military }}>■</span> Military: {(hovered.military_rate * 100).toFixed(1)}%
          </div>
        </div>
      )}

      <style jsx>{`
        .mechanisms-chart {
          position: relative;
        }
        .mechanisms-controls {
          display: flex;
          gap: 1rem;
          margin-bottom: 0.75rem;
          font-size: 0.8rem;
        }
        .mechanism-toggle {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          cursor: pointer;
          color: var(--text-muted);
        }
        .mechanisms-svg {
          width: 100%;
          max-width: 800px;
        }
        .mechanisms-legend {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          margin-top: 0.5rem;
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .legend-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          display: inline-block;
        }
        .mechanisms-tooltip {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 0.75rem 1rem;
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.6;
        }
        .mechanisms-tooltip strong {
          display: block;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }
        .tooltip-n {
          display: block;
          font-size: 0.7rem;
          opacity: 0.7;
          margin-bottom: 0.4rem;
        }
      `}</style>
    </div>
  )
}
