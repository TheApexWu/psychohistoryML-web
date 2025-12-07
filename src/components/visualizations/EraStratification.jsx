// src/components/visualizations/EraStratification.jsx
'use client'

import { useState, useEffect } from 'react'

const eraData = [
  { 
    era: 'Ancient', 
    period: 'pre-500 BCE', 
    n: 77, 
    coefficient: -159, 
    color: '#4ade80',
    interpretation: 'Complexity strongly hurts duration'
  },
  { 
    era: 'Classical', 
    period: '500 BCE - 500 CE', 
    n: 44, 
    coefficient: -20, 
    color: '#fb923c',
    interpretation: 'Complexity mildly hurts duration'
  },
  { 
    era: 'Medieval', 
    period: '500 - 1500 CE', 
    n: 92, 
    coefficient: -11, 
    color: '#60a5fa',
    interpretation: 'Complexity effect nearly zero'
  },
  { 
    era: 'Early Modern', 
    period: '1500+ CE', 
    n: 43, 
    coefficient: 6, 
    color: '#f472b6',
    interpretation: 'Complexity slightly helps duration'
  },
]

const MAX_COEFFICIENT = 159

export default function EraStratification() {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [activeEra, setActiveEra] = useState(null)

  // Intersection observer for scroll trigger
  useEffect(() => {
    const element = document.getElementById('era-chart')
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  // Animation
  useEffect(() => {
    if (!isVisible) return
    
    const duration = 1200
    const start = Date.now()
    
    const animate = () => {
      const elapsed = Date.now() - start
      const t = Math.min(elapsed / duration, 1)
      setProgress(1 - Math.pow(1 - t, 3)) // ease-out cubic
      if (t < 1) requestAnimationFrame(animate)
    }
    
    requestAnimationFrame(animate)
  }, [isVisible])

  const activeData = eraData.find(e => e.era === activeEra)

  return (
    <div id="era-chart" className="era-container">
      <h3 className="chart-title">The Era Effect</h3>
      <p className="chart-subtitle">
        How complexity affects duration changes dramatically across historical periods
      </p>

      <div className="chart-area">
        {eraData.map((era, index) => {
          const barWidthPercent = (Math.abs(era.coefficient) / MAX_COEFFICIENT) * 100 * progress
          const isNegative = era.coefficient < 0
          
          return (
            <div 
              key={era.era}
              className={`row ${activeEra === era.era ? 'active' : ''}`}
              onMouseEnter={() => setActiveEra(era.era)}
              onMouseLeave={() => setActiveEra(null)}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s ease ${index * 150}ms`
              }}
            >
              {/* Label */}
              <div className="label">
                <span className="name">{era.era}</span>
                <span className="period">{era.period}</span>
              </div>
              
              {/* Bar area: two halves with center line */}
              <div className="bar-area">
                {/* Left half (negative values) */}
                <div className="half left">
                  {isNegative && (
                    <div 
                      className="bar"
                      style={{
                        width: `${barWidthPercent}%`,
                        backgroundColor: era.color,
                      }}
                    />
                  )}
                </div>
                
                {/* Center line */}
                <div className="center-line" />
                
                {/* Right half (positive values) */}
                <div className="half right">
                  {!isNegative && (
                    <div 
                      className="bar"
                      style={{
                        width: `${barWidthPercent}%`,
                        backgroundColor: era.color,
                      }}
                    />
                  )}
                </div>
              </div>

              {/* Coefficient value */}
              <div className="value">
                <span className="beta">
                  B = {era.coefficient > 0 ? '+' : ''}{Math.round(era.coefficient * progress)}
                </span>
                <span className="n">n={era.n}</span>
              </div>
            </div>
          )
        })}

        {/* Axis labels */}
        <div className="axis-labels">
          <span>Complexity Hurts</span>
          <span>Complexity Helps</span>
        </div>
      </div>

      {/* Interpretation panel */}
      <div className="interpretation">
        {activeData ? (
          <p>
            <strong style={{ color: activeData.color }}>{activeData.era}:</strong>{' '}
            {activeData.interpretation}
          </p>
        ) : (
          <p>
            In the <strong style={{ color: '#4ade80' }}>Ancient</strong> world, 
            each unit of complexity reduced duration by ~159 years. 
            By the <strong style={{ color: '#f472b6' }}>Early Modern</strong> period, 
            the relationship reversed.
          </p>
        )}
      </div>

      <style jsx>{`
        .era-container {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 2rem;
          margin: 2rem 0;
        }
        
        .chart-title {
          font-family: var(--font-jetbrains), monospace;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          margin-bottom: 0.25rem;
        }
        
        .chart-subtitle {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
        }
        
        .chart-area {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .row {
          display: grid;
          grid-template-columns: 120px 1fr 80px;
          align-items: center;
          gap: 1rem;
          padding: 0.5rem;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.2s;
        }
        
        .row:hover,
        .row.active {
          background: rgba(255, 255, 255, 0.03);
        }
        
        .label {
          text-align: right;
        }
        
        .name {
          display: block;
          font-size: 0.9rem;
          color: var(--text-primary);
          font-weight: 500;
        }
        
        .period {
          font-size: 0.7rem;
          color: var(--text-muted);
        }
        
        /* Bar layout: [left half][line][right half] */
        .bar-area {
          display: flex;
          align-items: center;
          height: 28px;
        }
        
        .half {
          flex: 1;
          height: 20px;
          display: flex;
          align-items: center;
        }
        
        .half.left {
          justify-content: flex-end;
        }
        
        .half.right {
          justify-content: flex-start;
        }
        
        .center-line {
          width: 1px;
          height: 100%;
          background: var(--text-muted);
          opacity: 0.5;
          flex-shrink: 0;
        }
        
        .bar {
          height: 100%;
          border-radius: 2px;
          transition: width 0.1s linear;
        }
        
        .value {
          display: flex;
          flex-direction: column;
        }
        
        .beta {
          font-family: var(--font-jetbrains), monospace;
          font-size: 0.85rem;
          color: var(--text-primary);
        }
        
        .n {
          font-family: var(--font-jetbrains), monospace;
          font-size: 0.65rem;
          color: var(--text-muted);
        }
        
        .axis-labels {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: var(--text-muted);
          padding: 1rem 0 0;
          margin-top: 0.5rem;
          border-top: 1px solid var(--border);
        }
        
        .interpretation {
          margin-top: 1.5rem;
          padding: 1rem;
          background: var(--bg-primary);
          border-radius: 4px;
          min-height: 60px;
        }
        
        .interpretation p {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin: 0;
        }
        
        .interpretation strong {
          color: var(--text-primary);
        }

        @media (max-width: 600px) {
          .row {
            grid-template-columns: 90px 1fr 70px;
          }
          .name {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  )
}
