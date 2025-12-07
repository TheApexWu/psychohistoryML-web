// src/components/visualizations/AnimatedROC.jsx
'use client'

import { useState, useEffect } from 'react'

// Actual data points from your 07_roc_curves.png
const rocData = {
  randomForest: [
    [0, 0], [0.05, 0.42], [0.1, 0.54], [0.15, 0.62], [0.2, 0.65],
    [0.25, 0.69], [0.3, 0.69], [0.35, 0.69], [0.4, 0.77], [0.45, 0.77],
    [0.5, 0.81], [0.55, 0.85], [0.6, 1.0], [1, 1]
  ],
  logistic: [
    [0, 0], [0.05, 0.15], [0.1, 0.15], [0.15, 0.31], [0.2, 0.46],
    [0.25, 0.58], [0.3, 0.58], [0.35, 0.62], [0.4, 0.65], [0.45, 0.65],
    [0.5, 0.69], [0.6, 0.85], [0.7, 0.88], [0.8, 0.92], [0.9, 0.96], [1, 1]
  ]
}

export default function AnimatedROC() {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('roc-chart')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    
    const duration = 2000
    const start = Date.now()
    
    const animate = () => {
      const elapsed = Date.now() - start
      const newProgress = Math.min(elapsed / duration, 1)
      setProgress(newProgress)
      
      if (newProgress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }, [isVisible])

  const width = 400
  const height = 400
  const padding = 50

  const scaleX = (x) => padding + x * (width - 2 * padding)
  const scaleY = (y) => height - padding - y * (height - 2 * padding)

  const getPathData = (points, progress) => {
    const visiblePoints = Math.floor(points.length * progress)
    if (visiblePoints < 2) return ''
    
    return points.slice(0, visiblePoints).map((point, i) => {
      const x = scaleX(point[0])
      const y = scaleY(point[1])
      return i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`
    }).join(' ')
  }

  return (
    <div id="roc-chart" className="roc-container">
      <h3 className="chart-title">Model Performance</h3>
      <svg viewBox={`0 0 ${width} ${height}`} className="roc-svg">
        {/* Grid lines */}
        {[0.2, 0.4, 0.6, 0.8].map((v) => (
          <g key={v}>
            <line
              x1={scaleX(v)} y1={scaleY(0)}
              x2={scaleX(v)} y2={scaleY(1)}
              stroke="var(--border)" strokeWidth="1" opacity="0.3"
            />
            <line
              x1={scaleX(0)} y1={scaleY(v)}
              x2={scaleX(1)} y2={scaleY(v)}
              stroke="var(--border)" strokeWidth="1" opacity="0.3"
            />
          </g>
        ))}

        {/* Diagonal (random) line */}
        <line
          x1={scaleX(0)} y1={scaleY(0)}
          x2={scaleX(1)} y2={scaleY(1)}
          stroke="var(--text-muted)" strokeWidth="1" strokeDasharray="5,5" opacity="0.5"
        />

        {/* ROC Curves */}
        <path
          d={getPathData(rocData.logistic, progress)}
          fill="none"
          stroke="#6b7280"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d={getPathData(rocData.randomForest, progress)}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Axes */}
        <line x1={scaleX(0)} y1={scaleY(0)} x2={scaleX(1)} y2={scaleY(0)} stroke="var(--text-muted)" strokeWidth="1" />
        <line x1={scaleX(0)} y1={scaleY(0)} x2={scaleX(0)} y2={scaleY(1)} stroke="var(--text-muted)" strokeWidth="1" />

        {/* Labels */}
        <text x={width / 2} y={height - 10} textAnchor="middle" className="axis-label">
          False Positive Rate
        </text>
        <text x={15} y={height / 2} textAnchor="middle" transform={`rotate(-90, 15, ${height / 2})`} className="axis-label">
          True Positive Rate
        </text>
      </svg>

      {/* Legend */}
      <div className="roc-legend">
        <div className="legend-item">
          <span className="legend-line accent"></span>
          <span>Random Forest (AUC = 0.744)</span>
        </div>
        <div className="legend-item">
          <span className="legend-line muted"></span>
          <span>Logistic Regression (AUC = 0.669)</span>
        </div>
        <div className="legend-item">
          <span className="legend-line dashed"></span>
          <span>Random Chance (AUC = 0.500)</span>
        </div>
      </div>

      <style jsx>{`
        .roc-container {
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
          margin-bottom: 1rem;
        }
        .roc-svg {
          width: 100%;
          max-width: 400px;
          display: block;
          margin: 0 auto;
        }
        .axis-label {
          font-family: var(--font-jetbrains), monospace;
          font-size: 10px;
          fill: var(--text-muted);
        }
        .roc-legend {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          justify-content: center;
          margin-top: 1.5rem;
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .legend-line {
          width: 24px;
          height: 3px;
          border-radius: 2px;
        }
        .legend-line.accent {
          background: var(--accent);
        }
        .legend-line.muted {
          background: #6b7280;
        }
        .legend-line.dashed {
          background: repeating-linear-gradient(
            90deg,
            var(--text-muted) 0px,
            var(--text-muted) 4px,
            transparent 4px,
            transparent 8px
          );
        }
      `}</style>
    </div>
  )
}
