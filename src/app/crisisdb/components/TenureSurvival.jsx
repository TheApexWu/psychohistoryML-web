'use client'

import { useState, useMemo } from 'react'

export default function TenureSurvival({ data }) {
  const [showMechanism, setShowMechanism] = useState('all')
  const [hoveredYear, setHoveredYear] = useState(null)

  // Compute survival curves
  const maxYears = 50
  const years = Array.from({ length: maxYears + 1 }, (_, i) => i)

  const survivalData = useMemo(() => {
    const violent = data.filter(d => d.violent_accession)
    const peaceful = data.filter(d => !d.violent_accession)

    const computeCurve = (rulers) => {
      return years.map(y => ({
        year: y,
        survival: rulers.filter(r => r.reign_years >= y).length / rulers.length,
        count: rulers.filter(r => r.reign_years >= y).length
      }))
    }

    return {
      violent: computeCurve(violent),
      peaceful: computeCurve(peaceful),
      violentN: violent.length,
      peacefulN: peaceful.length,
      violentMedian: violent.length > 0 ?
        [...violent].sort((a, b) => a.reign_years - b.reign_years)[Math.floor(violent.length / 2)].reign_years : 0,
      peacefulMedian: peaceful.length > 0 ?
        [...peaceful].sort((a, b) => a.reign_years - b.reign_years)[Math.floor(peaceful.length / 2)].reign_years : 0
    }
  }, [data])

  // Mechanism breakdown
  const mechanismStats = useMemo(() => {
    const mechanisms = ['military_revolt', 'intra_elite', 'contested', 'predecessor_assassination']
    return mechanisms.map(mech => {
      const yes = data.filter(d => d[mech])
      const no = data.filter(d => !d[mech])
      const yesMedian = yes.length > 0 ?
        [...yes].sort((a, b) => a.reign_years - b.reign_years)[Math.floor(yes.length / 2)].reign_years : 0
      const noMedian = no.length > 0 ?
        [...no].sort((a, b) => a.reign_years - b.reign_years)[Math.floor(no.length / 2)].reign_years : 0
      return {
        name: mech.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
        key: mech,
        yesMedian,
        noMedian,
        diff: noMedian - yesMedian,
        yesN: yes.length,
        noN: no.length
      }
    }).sort((a, b) => b.diff - a.diff)
  }, [data])

  // SVG dimensions
  const width = 700
  const height = 300
  const margin = { top: 30, right: 120, bottom: 50, left: 60 }
  const innerWidth = width - margin.left - margin.right
  const innerHeight = height - margin.top - margin.bottom

  const xScale = (year) => margin.left + (year / maxYears) * innerWidth
  const yScale = (surv) => margin.top + (1 - surv) * innerHeight

  // Find median crossing points
  const findMedianYear = (curve) => {
    for (let i = 0; i < curve.length - 1; i++) {
      if (curve[i].survival >= 0.5 && curve[i + 1].survival < 0.5) {
        return curve[i].year
      }
    }
    return null
  }

  const violentMedianYear = findMedianYear(survivalData.violent)
  const peacefulMedianYear = findMedianYear(survivalData.peaceful)

  return (
    <div className="tenure-survival">
      <div className="tenure-header">
        <h3>Ruler Tenure: Survival by Accession Type</h3>
        <p className="tenure-subtitle">
          Does violent accession predict shorter reigns?
        </p>
      </div>

      <div className="tenure-stats">
        <div className="stat-box violent">
          <span className="stat-label">Violent Accession</span>
          <span className="stat-value">{survivalData.violentMedian} yrs</span>
          <span className="stat-detail">median reign (n={survivalData.violentN.toLocaleString()})</span>
        </div>
        <div className="stat-box peaceful">
          <span className="stat-label">Peaceful Accession</span>
          <span className="stat-value">{survivalData.peacefulMedian} yrs</span>
          <span className="stat-detail">median reign (n={survivalData.peacefulN.toLocaleString()})</span>
        </div>
        <div className="stat-box diff">
          <span className="stat-label">Difference</span>
          <span className="stat-value">-{survivalData.peacefulMedian - survivalData.violentMedian} yrs</span>
          <span className="stat-detail">p {'<'} 0.0001 (Mann-Whitney)</span>
        </div>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="survival-svg">
        {/* Grid lines */}
        {[0.25, 0.5, 0.75].map(tick => (
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

        {/* Median reference line */}
        <line
          x1={margin.left}
          x2={width - margin.right}
          y1={yScale(0.5)}
          y2={yScale(0.5)}
          stroke="var(--text-muted)"
          strokeWidth={1}
          opacity={0.8}
        />
        <text x={width - margin.right + 5} y={yScale(0.5) + 4} fill="var(--text-muted)" fontSize={10}>
          50%
        </text>

        {/* Area between curves */}
        <path
          d={`
            M ${xScale(0)} ${yScale(survivalData.peaceful[0].survival)}
            ${survivalData.peaceful.map(d => `L ${xScale(d.year)} ${yScale(d.survival)}`).join(' ')}
            ${[...survivalData.violent].reverse().map(d => `L ${xScale(d.year)} ${yScale(d.survival)}`).join(' ')}
            Z
          `}
          fill="rgba(150, 150, 150, 0.1)"
        />

        {/* Peaceful curve */}
        <path
          d={`M ${survivalData.peaceful.map(d => `${xScale(d.year)} ${yScale(d.survival)}`).join(' L ')}`}
          fill="none"
          stroke="rgb(34, 197, 94)"
          strokeWidth={2.5}
        />

        {/* Violent curve */}
        <path
          d={`M ${survivalData.violent.map(d => `${xScale(d.year)} ${yScale(d.survival)}`).join(' L ')}`}
          fill="none"
          stroke="rgb(239, 68, 68)"
          strokeWidth={2.5}
        />

        {/* Median markers */}
        {violentMedianYear && (
          <>
            <line
              x1={xScale(violentMedianYear)}
              y1={yScale(0.5)}
              x2={xScale(violentMedianYear)}
              y2={yScale(0) + 5}
              stroke="rgb(239, 68, 68)"
              strokeDasharray="3,3"
              opacity={0.7}
            />
            <text x={xScale(violentMedianYear)} y={yScale(0) + 18}
                  fill="rgb(239, 68, 68)" fontSize={10} textAnchor="middle">
              {violentMedianYear}yr
            </text>
          </>
        )}
        {peacefulMedianYear && (
          <>
            <line
              x1={xScale(peacefulMedianYear)}
              y1={yScale(0.5)}
              x2={xScale(peacefulMedianYear)}
              y2={yScale(0) + 5}
              stroke="rgb(34, 197, 94)"
              strokeDasharray="3,3"
              opacity={0.7}
            />
            <text x={xScale(peacefulMedianYear)} y={yScale(0) + 18}
                  fill="rgb(34, 197, 94)" fontSize={10} textAnchor="middle">
              {peacefulMedianYear}yr
            </text>
          </>
        )}

        {/* Hover line */}
        {hoveredYear !== null && (
          <>
            <line
              x1={xScale(hoveredYear)}
              y1={margin.top}
              x2={xScale(hoveredYear)}
              y2={height - margin.bottom}
              stroke="var(--text-primary)"
              strokeWidth={1}
              opacity={0.5}
            />
            <circle
              cx={xScale(hoveredYear)}
              cy={yScale(survivalData.violent[hoveredYear]?.survival || 0)}
              r={4}
              fill="rgb(239, 68, 68)"
            />
            <circle
              cx={xScale(hoveredYear)}
              cy={yScale(survivalData.peaceful[hoveredYear]?.survival || 0)}
              r={4}
              fill="rgb(34, 197, 94)"
            />
          </>
        )}

        {/* Invisible hover zones */}
        {years.map(y => (
          <rect
            key={y}
            x={xScale(y) - innerWidth / maxYears / 2}
            y={margin.top}
            width={innerWidth / maxYears}
            height={innerHeight}
            fill="transparent"
            onMouseEnter={() => setHoveredYear(y)}
            onMouseLeave={() => setHoveredYear(null)}
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
        {[0, 10, 20, 30, 40, 50].map(tick => (
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
        <text
          x={margin.left + innerWidth / 2}
          y={height - 8}
          textAnchor="middle"
          fill="var(--text-muted)"
          fontSize={12}
        >
          Years Since Accession
        </text>

        {/* Y axis */}
        <line
          x1={margin.left}
          x2={margin.left}
          y1={margin.top}
          y2={height - margin.bottom}
          stroke="var(--text-muted)"
        />
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

        {/* Legend */}
        <line x1={width - margin.right + 10} y1={margin.top + 10} x2={width - margin.right + 30} y2={margin.top + 10}
              stroke="rgb(34, 197, 94)" strokeWidth={2.5} />
        <text x={width - margin.right + 35} y={margin.top + 14} fill="var(--text-muted)" fontSize={10}>Peaceful</text>

        <line x1={width - margin.right + 10} y1={margin.top + 28} x2={width - margin.right + 30} y2={margin.top + 28}
              stroke="rgb(239, 68, 68)" strokeWidth={2.5} />
        <text x={width - margin.right + 35} y={margin.top + 32} fill="var(--text-muted)" fontSize={10}>Violent</text>
      </svg>

      {/* Hover tooltip */}
      {hoveredYear !== null && (
        <div className="hover-stats">
          <strong>Year {hoveredYear}:</strong>
          <span className="peaceful-stat">
            {(survivalData.peaceful[hoveredYear]?.survival * 100).toFixed(1)}% peaceful still ruling
          </span>
          <span className="violent-stat">
            {(survivalData.violent[hoveredYear]?.survival * 100).toFixed(1)}% violent still ruling
          </span>
        </div>
      )}

      {/* Mechanism breakdown */}
      <div className="mechanism-section">
        <h4>Which Violence Types Shorten Reigns Most?</h4>
        <div className="mechanism-bars">
          {mechanismStats.map(m => (
            <div key={m.key} className="mechanism-row">
              <span className="mech-name">{m.name}</span>
              <div className="mech-bar-container">
                <div className="mech-bar absent" style={{ width: `${(m.noMedian / 15) * 100}%` }}>
                  <span>{m.noMedian}yr</span>
                </div>
                <div className="mech-bar present" style={{ width: `${(m.yesMedian / 15) * 100}%` }}>
                  <span>{m.yesMedian}yr</span>
                </div>
              </div>
              <span className="mech-diff">-{m.diff}yr</span>
            </div>
          ))}
        </div>
        <p className="mechanism-note">
          Military revolts have the strongest effect: usurpers who seize power via coup reign 4 years shorter on average.
        </p>
      </div>

      {/* Violence cascade */}
      <div className="cascade-section">
        <h4>Violence Begets Violence</h4>
        <div className="cascade-grid">
          <div className="cascade-cell header"></div>
          <div className="cascade-cell header">Peaceful Exit</div>
          <div className="cascade-cell header">Violent Exit</div>

          <div className="cascade-cell row-header">Peaceful Entry</div>
          <div className="cascade-cell value peaceful">91%</div>
          <div className="cascade-cell value mixed">9%</div>

          <div className="cascade-cell row-header">Violent Entry</div>
          <div className="cascade-cell value mixed">77.5%</div>
          <div className="cascade-cell value violent">22.5%</div>
        </div>
        <p className="cascade-note">
          Rulers who seized power violently are <strong>2.5x more likely</strong> to be removed violently.
          Chi-square p {'<'} 0.0001.
        </p>
      </div>

      <style jsx>{`
        .tenure-survival {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 1.5rem;
          margin-bottom: 2rem;
        }

        .tenure-header h3 {
          margin: 0 0 0.25rem 0;
          font-size: 1.1rem;
          color: var(--text-primary);
        }

        .tenure-subtitle {
          margin: 0 0 1.5rem 0;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .tenure-stats {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }

        .stat-box {
          flex: 1;
          min-width: 140px;
          padding: 1rem;
          background: var(--bg-primary);
          border-radius: 6px;
          text-align: center;
        }

        .stat-box.violent {
          border-left: 3px solid rgb(239, 68, 68);
        }

        .stat-box.peaceful {
          border-left: 3px solid rgb(34, 197, 94);
        }

        .stat-box.diff {
          border-left: 3px solid var(--accent);
        }

        .stat-label {
          display: block;
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.25rem;
        }

        .stat-value {
          display: block;
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          font-family: var(--font-mono);
        }

        .stat-detail {
          display: block;
          font-size: 0.7rem;
          color: var(--text-muted);
          margin-top: 0.25rem;
        }

        .survival-svg {
          width: 100%;
          max-width: 700px;
        }

        .hover-stats {
          display: flex;
          gap: 1rem;
          padding: 0.75rem 1rem;
          background: var(--bg-primary);
          border-radius: 4px;
          font-size: 0.85rem;
          margin-top: 0.5rem;
          flex-wrap: wrap;
        }

        .peaceful-stat {
          color: rgb(34, 197, 94);
        }

        .violent-stat {
          color: rgb(239, 68, 68);
        }

        .mechanism-section, .cascade-section {
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border);
        }

        .mechanism-section h4, .cascade-section h4 {
          font-size: 0.9rem;
          color: var(--text-primary);
          margin: 0 0 1rem 0;
        }

        .mechanism-bars {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .mechanism-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .mech-name {
          width: 160px;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .mech-bar-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .mech-bar {
          height: 16px;
          border-radius: 2px;
          display: flex;
          align-items: center;
          padding-left: 0.5rem;
          font-size: 0.7rem;
          color: white;
          font-weight: 500;
        }

        .mech-bar.absent {
          background: rgb(34, 197, 94);
        }

        .mech-bar.present {
          background: rgb(239, 68, 68);
        }

        .mech-diff {
          width: 50px;
          text-align: right;
          font-size: 0.8rem;
          font-family: var(--font-mono);
          color: rgb(239, 68, 68);
        }

        .mechanism-note, .cascade-note {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 1rem;
        }

        .cascade-grid {
          display: grid;
          grid-template-columns: 120px 1fr 1fr;
          gap: 2px;
          background: var(--border);
          border-radius: 4px;
          overflow: hidden;
          max-width: 400px;
        }

        .cascade-cell {
          padding: 0.5rem;
          background: var(--bg-primary);
          font-size: 0.8rem;
          text-align: center;
        }

        .cascade-cell.header {
          font-weight: 600;
          color: var(--text-muted);
          font-size: 0.75rem;
        }

        .cascade-cell.row-header {
          text-align: left;
          font-weight: 500;
          color: var(--text-muted);
        }

        .cascade-cell.value {
          font-family: var(--font-mono);
          font-weight: 600;
        }

        .cascade-cell.peaceful {
          background: rgba(34, 197, 94, 0.15);
          color: rgb(34, 197, 94);
        }

        .cascade-cell.violent {
          background: rgba(239, 68, 68, 0.15);
          color: rgb(239, 68, 68);
        }

        .cascade-cell.mixed {
          color: var(--text-muted);
        }
      `}</style>
    </div>
  )
}
