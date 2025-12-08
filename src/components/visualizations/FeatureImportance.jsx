// src/components/visualizations/FeatureImportance.jsx
'use client'

import { useState, useEffect } from 'react'

// Actual feature importance from Random Forest classifier (NB07)
// With human-readable labels
const features = [
  // Religion (27.2% total)
  { 
    name: 'ideol_score', 
    label: 'Ideology',
    description: 'Ideological cohesion and shared belief systems',
    importance: 12.7, 
    category: 'religion', 
    effect: 'context-dependent' 
  },
  { 
    name: 'total_rel', 
    label: 'Religious institutions',
    description: 'Total religious/legitimation infrastructure',
    importance: 7.2, 
    category: 'religion', 
    effect: 'stabilizing' 
  },
  { 
    name: 'moral_score', 
    label: 'Moralizing religion',
    description: 'Presence of moral codes enforced by religion',
    importance: 5.2, 
    category: 'religion', 
    effect: 'slight destabilizing' 
  },
  { 
    name: 'legit_score', 
    label: 'Divine legitimation',
    description: 'Rulers legitimated by gods or religious authority',
    importance: 2.2, 
    category: 'religion', 
    effect: 'slight stabilizing' 
  },
  
  // Complexity (43.7% total)
  { 
    name: 'PC1_hier', 
    label: 'Hierarchy depth',
    description: 'Administrative, military, and religious hierarchy levels',
    importance: 11.5, 
    category: 'complexity', 
    effect: 'slight stabilizing' 
  },
  { 
    name: 'PC2_hier', 
    label: 'Information systems',
    description: 'Writing, record-keeping, and information infrastructure',
    importance: 8.8, 
    category: 'complexity', 
    effect: 'stabilizing' 
  },
  { 
    name: 'PC3_hier', 
    label: 'Government scale',
    description: 'Territorial and population scale of governance',
    importance: 8.8, 
    category: 'complexity', 
    effect: 'destabilizing' 
  },
  { 
    name: 'PC1_squared', 
    label: 'Extreme hierarchy',
    description: 'Nonlinear effect: very high complexity becomes risky',
    importance: 7.5, 
    category: 'complexity', 
    effect: 'destabilizing' 
  },
  { 
    name: 'PC1_x_PC2', 
    label: 'Hierarchy + information',
    description: 'Interaction: complex societies with good records',
    importance: 7.1, 
    category: 'complexity', 
    effect: 'stabilizing' 
  },
  
  // Warfare (29.1% total)
  { 
    name: 'total_warfare', 
    label: 'Military technology',
    description: 'Overall military technological sophistication',
    importance: 5.5, 
    category: 'warfare', 
    effect: 'slight destabilizing' 
  },
  { 
    name: 'weapons', 
    label: 'Weapons diversity',
    description: 'Variety of weapon types available',
    importance: 4.8, 
    category: 'warfare', 
    effect: 'slight stabilizing' 
  },
  { 
    name: 'advanced_tech', 
    label: 'Advanced military tech',
    description: 'Iron weapons, siege equipment, naval capacity',
    importance: 4.7, 
    category: 'warfare', 
    effect: 'slight stabilizing' 
  },
  { 
    name: 'material', 
    label: 'Material sophistication',
    description: 'Quality of materials (bronze, iron, steel)',
    importance: 4.5, 
    category: 'warfare', 
    effect: 'destabilizing' 
  },
  { 
    name: 'fortifications', 
    label: 'Fortifications',
    description: 'Defensive walls, castles, fortified cities',
    importance: 4.3, 
    category: 'warfare', 
    effect: 'destabilizing' 
  },
  { 
    name: 'cavalry', 
    label: 'Cavalry',
    description: 'Mounted military units',
    importance: 2.7, 
    category: 'warfare', 
    effect: 'stabilizing' 
  },
  { 
    name: 'armor', 
    label: 'Armor',
    description: 'Personal protective equipment',
    importance: 2.6, 
    category: 'warfare', 
    effect: 'slight stabilizing' 
  },
]

const categoryColors = {
  religion: '#d4a574',    // gold/tan
  complexity: '#60a5fa',  // blue
  warfare: '#f87171',     // red
}

const categoryLabels = {
  religion: 'Religion (27%)',
  complexity: 'Complexity (44%)',
  warfare: 'Warfare (29%)',
}

export default function FeatureImportance() {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredFeature, setHoveredFeature] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
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
      setProgress(1 - Math.pow(1 - newProgress, 3))
      
      if (newProgress < 1) requestAnimationFrame(animate)
    }
    
    requestAnimationFrame(animate)
  }, [isVisible])

  // Sort by importance, show top 10
  const topFeatures = [...features]
    .sort((a, b) => b.importance - a.importance)
    .slice(0, 10)

  const maxImportance = Math.max(...topFeatures.map(f => f.importance))

  return (
    <div id="feature-chart" className="feature-container">
      <h3 className="chart-title">Feature Importance</h3>
      <p className="chart-subtitle">
        How much each feature contributes to model decisions (not direction)
      </p>

      <div className="legend">
        {Object.entries(categoryLabels).map(([key, label]) => (
          <div key={key} className="legend-item">
            <span 
              className="legend-color" 
              style={{ backgroundColor: categoryColors[key] }}
            />
            <span>{label}</span>
          </div>
        ))}
      </div>

      <div className="bars">
        {topFeatures.map((feature, index) => (
          <div 
            key={feature.name}
            className={`bar-row ${hoveredFeature === feature.name ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredFeature(feature.name)}
            onMouseLeave={() => setHoveredFeature(null)}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
              transition: `all 0.4s ease ${index * 80}ms`
            }}
          >
            <span className="feature-name">{feature.label}</span>
            <div className="bar-container">
              <div 
                className="bar"
                style={{
                  width: `${(feature.importance / maxImportance) * 100 * progress}%`,
                  backgroundColor: categoryColors[feature.category],
                }}
              />
            </div>
            <span className="importance-value">
              {(feature.importance * progress).toFixed(1)}%
            </span>
          </div>
        ))}
      </div>

      {/* Hover detail */}
      {hoveredFeature && (
        <div className="hover-detail">
          {(() => {
            const f = features.find(x => x.name === hoveredFeature)
            return f ? (
              <>
                <strong>{f.label}</strong>
                <br />
                <span className="description">{f.description}</span>
                <br />
                <span className="effect-label">Effect on stability: {f.effect}</span>
              </>
            ) : null
          })()}
        </div>
      )}

      <div className="insight-callout">
        <p>
          <strong>Note:</strong> Importance measures how often the model uses a feature 
          for decisions, not whether high values help or hurt stability. Hover over bars for details.
        </p>
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
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }
        .legend {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }
        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        .legend-color {
          width: 12px;
          height: 12px;
          border-radius: 2px;
        }
        .bars {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .bar-row {
          display: grid;
          grid-template-columns: 140px 1fr 50px;
          align-items: center;
          gap: 0.75rem;
          padding: 0.25rem 0;
          border-radius: 2px;
          transition: background 0.2s;
          cursor: pointer;
        }
        .bar-row.hovered {
          background: rgba(255, 255, 255, 0.03);
        }
        .feature-name {
          font-size: 0.8rem;
          color: var(--text-muted);
          text-align: right;
        }
        .bar-container {
          height: 20px;
          background: var(--bg-primary);
          border-radius: 2px;
          overflow: hidden;
        }
        .bar {
          height: 100%;
          border-radius: 2px;
          transition: width 0.1s linear;
        }
        .importance-value {
          font-family: var(--font-jetbrains), monospace;
          font-size: 0.75rem;
          color: var(--text-primary);
          text-align: right;
        }
        .hover-detail {
          margin-top: 1rem;
          padding: 0.75rem;
          background: var(--bg-primary);
          border-radius: 4px;
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.6;
        }
        .hover-detail strong {
          color: var(--text-primary);
        }
        .description {
          color: var(--text-muted);
        }
        .effect-label {
          color: var(--accent);
        }
        .insight-callout {
          margin-top: 1.5rem;
          padding: 1rem;
          background: var(--bg-primary);
          border-left: 3px solid var(--accent-dim);
          border-radius: 0 4px 4px 0;
        }
        .insight-callout p {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin: 0;
          line-height: 1.5;
        }
        .insight-callout strong {
          color: var(--accent);
        }

        @media (max-width: 600px) {
          .bar-row {
            grid-template-columns: 110px 1fr 40px;
          }
          .feature-name {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </div>
  )
}
