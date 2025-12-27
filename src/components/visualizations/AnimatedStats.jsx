// src/components/visualizations/AnimatedStats.jsx
'use client'

import { useState, useEffect, useRef } from 'react'

function AnimatedNumber({ value, decimals = 0, prefix = '', suffix = '', duration = 2000 }) {
  const [displayValue, setDisplayValue] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const start = Date.now()
    const startValue = 0

    const animate = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      
      setDisplayValue(startValue + (value - startValue) * eased)
      
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [isVisible, value, duration])

  return (
    <span ref={ref}>
      {prefix}{displayValue.toFixed(decimals)}{suffix}
    </span>
  )
}

export function StatsRow() {
  return (
    <div className="stats-row">
      <div className="stat">
        <span className="stat-value">
          <AnimatedNumber value={256} duration={1500} />
        </span>
        <span className="stat-label">Civilizations</span>
      </div>
      
      <div className="stat">
        <span className="stat-value">
          <AnimatedNumber value={0.66} decimals={2} duration={2000} />
        </span>
        <span className="stat-label">Model AUC (CV mean)</span>
      </div>
      
      <div className="stat">
        <span className="stat-value">
          <AnimatedNumber value={10000} duration={2500} suffix="+" />
        </span>
        <span className="stat-label">Years of History</span>
      </div>

      <style jsx>{`
        .stats-row {
          display: flex;
          justify-content: center;
          gap: 4rem;
          padding: 3rem 0;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          margin: 4rem 0;
        }
        .stat {
          text-align: center;
        }
        .stat-value {
          font-family: var(--font-jetbrains), monospace;
          font-size: 2.5rem;
          color: var(--accent);
          display: block;
        }
        .stat-label {
          font-size: 0.8rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-top: 0.5rem;
          display: block;
        }
        @media (max-width: 600px) {
          .stats-row {
            flex-direction: column;
            gap: 2rem;
          }
        }
      `}</style>
    </div>
  )
}

// Progress indicator showing model improvement journey
export function ModelJourney() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )

    const element = document.getElementById('model-journey')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const stages = [
    { label: 'Baseline', auc: 0.505, description: 'Complexity alone' },
    { label: '+ Warfare', auc: 0.648, description: 'Added military tech' },
    { label: '+ Religion', auc: 0.67, description: 'Added ideology scores (CV mean)' },
  ]

  return (
    <div id="model-journey" className="journey-container">
      <h3 className="chart-title">Model Evolution</h3>
      
      <div className="journey-track">
        {stages.map((stage, index) => (
          <div 
            key={stage.label}
            className="journey-stage"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: `all 0.6s ease ${index * 300}ms`
            }}
          >
            <div className="stage-dot" style={{
              background: index === stages.length - 1 ? 'var(--accent)' : 'var(--border)'
            }}>
              {index < stages.length - 1 && <div className="stage-connector" />}
            </div>
            
            <div className="stage-content">
              <span className="stage-auc">{stage.auc.toFixed(3)}</span>
              <span className="stage-label">{stage.label}</span>
              <span className="stage-desc">{stage.description}</span>
            </div>
            
          </div>
        ))}
      </div>

      <style jsx>{`
        .journey-container {
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
          margin-bottom: 2rem;
        }
        .journey-track {
          display: flex;
          justify-content: space-between;
          position: relative;
        }
        .journey-stage {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
          position: relative;
        }
        .stage-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          position: relative;
          z-index: 2;
        }
        .stage-connector {
          position: absolute;
          top: 50%;
          left: 100%;
          width: 200%;
          height: 2px;
          background: var(--border);
          transform: translateY(-50%);
        }
        .stage-content {
          text-align: center;
          margin-top: 1rem;
        }
        .stage-auc {
          display: block;
          font-family: var(--font-jetbrains), monospace;
          font-size: 1.5rem;
          color: var(--text-primary);
        }
        .stage-label {
          display: block;
          font-size: 0.9rem;
          color: var(--text-primary);
          margin-top: 0.25rem;
        }
        .stage-desc {
          display: block;
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: 0.25rem;
        }
        @media (max-width: 600px) {
          .journey-track {
            flex-direction: column;
            gap: 2rem;
          }
          .stage-connector {
            display: none;
          }
          .stage-improvement {
            position: static;
            margin-top: 0.5rem;
          }
        }
      `}</style>
    </div>
  )
}

export default AnimatedNumber
