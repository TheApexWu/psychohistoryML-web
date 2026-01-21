'use client'

import { useState, useMemo } from 'react'

export default function EliteScatter({ data, stats }) {
  const [hoveredPoint, setHoveredPoint] = useState(null)
  const [minTransitions, setMinTransitions] = useState(5)

  const filteredData = useMemo(() =>
    data.filter(d => d.n_transitions >= minTransitions),
    [data, minTransitions]
  )

  // SVG dimensions
  const width = 600
  const height = 400
  const margin = { top: 40, right: 40, bottom: 60, left: 70 }
  const innerWidth = width - margin.left - margin.right
  const innerHeight = height - margin.top - margin.bottom

  // Scales
  const xMin = Math.min(...filteredData.map(d => d.admin_levels)) - 0.5
  const xMax = Math.max(...filteredData.map(d => d.admin_levels)) + 0.5
  const yMax = Math.max(...filteredData.map(d => d.intra_rate)) + 0.05

  const xScale = (val) => margin.left + ((val - xMin) / (xMax - xMin)) * innerWidth
  const yScale = (val) => margin.top + innerHeight - (val / yMax) * innerHeight

  // Regression line (from notebook: y = 0.056x + intercept)
  const beta = 0.056
  const intercept = 0.08 // approximate
  const lineX1 = xMin
  const lineX2 = xMax
  const lineY1 = intercept + beta * lineX1
  const lineY2 = intercept + beta * lineX2

  return (
    <div className="elite-scatter">
      <div className="scatter-header">
        <h3>Elite Overproduction: Complexity → Conflict</h3>
        <p className="scatter-subtitle">
          Administrative levels vs intra-elite conflict rate
        </p>
      </div>

      <div className="scatter-controls">
        <label>
          Min transitions:
          <select value={minTransitions} onChange={e => setMinTransitions(Number(e.target.value))}>
            <option value={5}>5+</option>
            <option value={10}>10+</option>
            <option value={15}>15+</option>
          </select>
        </label>
        <span className="sample-size">n = {filteredData.length} polities</span>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="scatter-svg">
        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map(tick => (
          <line
            key={tick}
            x1={margin.left}
            x2={width - margin.right}
            y1={yScale(tick)}
            y2={yScale(tick)}
            stroke="var(--border)"
            strokeDasharray="4,4"
            opacity={0.5}
          />
        ))}

        {/* Regression line */}
        <line
          x1={xScale(lineX1)}
          y1={yScale(Math.max(0, lineY1))}
          x2={xScale(lineX2)}
          y2={yScale(Math.min(yMax, lineY2))}
          stroke="var(--accent)"
          strokeWidth={2}
          opacity={0.8}
        />

        {/* Data points */}
        {filteredData.map((d, i) => (
          <circle
            key={i}
            cx={xScale(d.admin_levels)}
            cy={yScale(d.intra_rate)}
            r={hoveredPoint === i ? 8 : 6}
            fill={hoveredPoint === i ? "var(--accent)" : "var(--text-muted)"}
            stroke="var(--bg-primary)"
            strokeWidth={1.5}
            opacity={hoveredPoint === i ? 1 : 0.7}
            onMouseEnter={() => setHoveredPoint(i)}
            onMouseLeave={() => setHoveredPoint(null)}
            style={{ cursor: 'pointer', transition: 'all 0.15s ease' }}
          />
        ))}

        {/* X axis */}
        <line
          x1={margin.left}
          x2={width - margin.right}
          y1={height - margin.bottom}
          y2={height - margin.bottom}
          stroke="var(--text-muted)"
        />
        <text
          x={width / 2}
          y={height - 15}
          textAnchor="middle"
          fill="var(--text-muted)"
          fontSize={12}
        >
          Administrative Levels (Seshat)
        </text>
        {[2, 4, 6, 8].map(tick => (
          <text
            key={tick}
            x={xScale(tick)}
            y={height - margin.bottom + 20}
            textAnchor="middle"
            fill="var(--text-muted)"
            fontSize={11}
          >
            {tick}
          </text>
        ))}

        {/* Y axis */}
        <line
          x1={margin.left}
          x2={margin.left}
          y1={margin.top}
          y2={height - margin.bottom}
          stroke="var(--text-muted)"
        />
        <text
          x={-height / 2}
          y={20}
          textAnchor="middle"
          fill="var(--text-muted)"
          fontSize={12}
          transform="rotate(-90)"
        >
          Intra-Elite Conflict Rate
        </text>
        {[0, 0.25, 0.5, 0.75, 1].map(tick => (
          <text
            key={tick}
            x={margin.left - 10}
            y={yScale(tick) + 4}
            textAnchor="end"
            fill="var(--text-muted)"
            fontSize={11}
          >
            {(tick * 100).toFixed(0)}%
          </text>
        ))}

        {/* Stats annotation */}
        <rect
          x={width - margin.right - 140}
          y={margin.top}
          width={130}
          height={55}
          fill="var(--bg-secondary)"
          stroke="var(--border)"
          rx={4}
        />
        <text x={width - margin.right - 130} y={margin.top + 18} fill="var(--text-primary)" fontSize={11} fontWeight={600}>
          r = {stats.correlation_r}
        </text>
        <text x={width - margin.right - 130} y={margin.top + 34} fill="var(--text-muted)" fontSize={10}>
          p {'<'} 0.001
        </text>
        <text x={width - margin.right - 130} y={margin.top + 48} fill="var(--text-muted)" fontSize={10}>
          +{stats.effect_size} pp / level
        </text>
      </svg>

      {/* Tooltip */}
      {hoveredPoint !== null && (
        <div className="scatter-tooltip">
          <strong>{filteredData[hoveredPoint].name}</strong>
          <div className="tooltip-stats">
            <span>Admin: {filteredData[hoveredPoint].admin_levels}</span>
            <span>Conflict: {(filteredData[hoveredPoint].intra_rate * 100).toFixed(1)}%</span>
            <span>n = {filteredData[hoveredPoint].n_transitions}</span>
          </div>
          <div className="tooltip-years">
            {filteredData[hoveredPoint].first_year} – {filteredData[hoveredPoint].last_year}
          </div>
        </div>
      )}

      <style jsx>{`
        .elite-scatter {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 1.5rem;
          margin-bottom: 2rem;
        }

        .scatter-header h3 {
          margin: 0 0 0.25rem 0;
          font-size: 1.1rem;
          color: var(--text-primary);
        }

        .scatter-subtitle {
          margin: 0 0 1rem 0;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .scatter-controls {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 1rem;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .scatter-controls select {
          margin-left: 0.5rem;
          padding: 0.25rem 0.5rem;
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: 4px;
          color: var(--text-primary);
        }

        .sample-size {
          font-family: var(--font-mono);
          font-size: 0.8rem;
        }

        .scatter-svg {
          width: 100%;
          max-width: 600px;
        }

        .scatter-tooltip {
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 0.75rem 1rem;
          margin-top: 1rem;
          font-size: 0.9rem;
        }

        .scatter-tooltip strong {
          color: var(--text-primary);
        }

        .tooltip-stats {
          display: flex;
          gap: 1rem;
          margin-top: 0.5rem;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .tooltip-years {
          margin-top: 0.25rem;
          font-size: 0.75rem;
          color: var(--text-muted);
          opacity: 0.7;
        }
      `}</style>
    </div>
  )
}
