// src/components/visualizations/FeatureImportance.jsx
'use client'

import { useState, useEffect } from 'react'

// Data from your 07_feature_importance.png
const features = [
  { name: 'Ideology Score', key: 'ideol_score', value: 0.127, category: 'religion' },
  { name: 'Hierarchy (PC1)', key: 'PC1_hier', value: 0.115, category: 'complexity' },
  { name: 'Government (PC2)', key: 'PC2_hier', value: 0.087, category: 'complexity' },
  { name: 'Infrastructure (PC3)', key: 'PC3_hier', value: 0.085, category: 'complexity' },
  { name: 'Complexity²', key: 'PC1_squared', value: 0.072, category: 'complexity' },
  { name: 'Total Religion', key: 'total_rel', value: 0.071, category: 'religion' },
  { name: 'PC1 × PC2', key: 'PC1_x_PC2', value: 0.069, category: 'complexity' },
  { name: 'Warfare Tech', key: 'total_warfare', value: 0.055, category: 'warfare' },
  { name: 'Moral Religion', key: 'moral_score', value: 0.051, category: 'religion' },
  { name: 'Weapons', key: 'weapons', value: 0.045, category: 'warfare' },
]

const categoryColors = {
  religion: '#c9a55c',    // accent gold
  complexity: '#6b8cce',  // blue
  warfare: '#ce6b6b',     // red
}

export default function FeatureImportance() {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    const element = document.getElementById('feature-chart')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    
    const duration = 1500
    const start = Date.now()
    
    const animate = () => {
      const elapsed = Date.now() - start
      const newProgress = Math.min(elapsed / duration, 1)
      // Easing function for smooth animation
      const eased = 1 - Math.pow(1 - newProgress, 3)
      setProgress(eased)
      
      if (newProgress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }, [isVisible])

  const maxValue = Math.max(...features.map(f => f.value))

  return (
    <div id="feature-chart" className="feature-container">
      <h3 className="chart-title">What Predicts Instability?</h3>
      <p className="chart-subtitle">Feature importance from Random Forest model</p>
      
      <div className="bars">
        {features.map((feature, index) => (
          <div 
            key={feature.key} 
            className="bar-row"
            style={{ 
              animationDelay: `${index * 80}ms`,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
              transition: `opacity 0.5s ease ${index * 80}ms, transform 0.5s ease ${index * 80}ms`
            }}
          >
            <span className="bar-label">{feature.name}</span>
            <div className="bar-track">
              <div 
                className="bar-fill"
                style={{ 
                  width: `${(feature.value / maxValue) * 100 * progress}%`,
                  backgroundColor: categoryColors[feature.category],
                }}
              />
            </div>
            <span className="bar-value">
              {(feature.value * 100 * progress).toFixed(1)}%
            </span>
          </div>
        ))}
      </div>

      {/* Category Legend */}
      <div className="category-legend">
        <div className="legend-item">
          <span className="legend-dot" style={{ background: categoryColors.religion }}></span>
          <span>Religion</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot" style={{ background: categoryColors.complexity }}></span>
          <span>Complexity</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot" style={{ background: categoryColors.warfare }}></span>
          <span>Warfare</span>
        </div>
      </div>

      {/* Insight callout */}
      <div className="insight-callout">
        <span className="insight-icon">→</span>
        <span className="insight-text">
          <strong>Ideology</strong> (religious cohesion) outweighs all complexity measures as a predictor
        </span>
      </div>

      <style jsx>{`
        .feature-container {
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
          margin-bottom: 1.5rem;
        }
        .bars {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .bar-row {
          display: grid;
          grid-template-columns: 140px 1fr 50px;
          align-items: center;
          gap: 1rem;
        }
        .bar-label {
          font-size: 0.85rem;
          color: var(--text-primary);
          text-align: right;
        }
        .bar-track {
          height: 24px;
          background: var(--bg-primary);
          border-radius: 2px;
          overflow: hidden;
        }
        .bar-fill {
          height: 100%;
          border-radius: 2px;
          transition: width 0.1s linear;
        }
        .bar-value {
          font-family: var(--font-jetbrains), monospace;
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        .category-legend {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          margin-top: 1.5rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border);
        }
        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .legend-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .insight-callout {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-top: 1.5rem;
          padding: 1rem;
          background: rgba(201, 165, 92, 0.1);
          border-left: 3px solid var(--accent);
          border-radius: 0 4px 4px 0;
        }
        .insight-icon {
          color: var(--accent);
          font-weight: bold;
        }
        .insight-text {
          font-size: 0.9rem;
          color: var(--text-primary);
          line-height: 1.4;
        }
        .insight-text strong {
          color: var(--accent);
        }

        @media (max-width: 600px) {
          .bar-row {
            grid-template-columns: 100px 1fr 45px;
            gap: 0.5rem;
          }
          .bar-label {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </div>
  )
}
