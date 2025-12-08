// src/components/visualizations/DiscoveriesSection.jsx
'use client'

import { useState, useEffect } from 'react'

const discoveries = [
  {
    id: 1,
    title: "Religion shows complex effects",
    summary: "Religious features account for 27% of model decisions, but direction varies",
    detail: "Religious variables collectively dominate model importance (27.2%), but the relationship is nuanced. Total religious institutionalization shows stabilizing effects, while ideology scores show context-dependent patterns. The 'software' of shared meaning matters - but more isn't always better.",
    stat: "27.2%",
    statLabel: "combined importance",
    icon: "◉"
  },
  {
    id: 2,
    title: "Era trumps geography",
    summary: "Historical period matters more than where a civilization was located",
    detail: "Civilizations cluster by time, not space. The relationship between complexity and duration completely reverses across eras: Ancient polities show strong negative effects (B=-159), while Early Modern polities show slight positive effects (B=+6). The 'rules' of survival changed over millennia.",
    stat: "B=-159 to +6",
    statLabel: "coefficient shift",
    icon: "◈"
  },
  {
    id: 3,
    title: "Warfare technology matters",
    summary: "Adding military features improved model prediction by 28%",
    detail: "Military technology doesn't just correlate with outcomes - it moderates how complexity affects survival. The model jumped from coin-flip (0.505 AUC) to meaningful signal (0.648 AUC) when warfare variables were added. Context matters as much as capacity.",
    stat: "+28%",
    statLabel: "AUC improvement",
    icon: "◇"
  },
  {
    id: 4,
    title: "Classical era is special",
    summary: "500 BCE - 500 CE shows unique dynamics across all analyses",
    detail: "The Classical period consistently emerges as exceptional: warfare moderation peaks here (+0.634 effect), the complexity-duration relationship moderates significantly compared to Ancient times, and the era produced history's most durable complex societies. Rome, Han China, Persia - something was different.",
    stat: "+0.634",
    statLabel: "warfare moderation",
    icon: "◆"
  },
]

export default function DiscoveriesSection() {
  const [expandedId, setExpandedId] = useState(null)
  const [visibleItems, setVisibleItems] = useState([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.dataset.id)
            setVisibleItems(prev => [...new Set([...prev, id])])
          }
        })
      },
      { threshold: 0.2 }
    )

    document.querySelectorAll('.discovery-item').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="discoveries-section">
      <h2 className="section-title">What the Model Revealed</h2>
      <p className="section-subtitle">Four key findings from analyzing 10,000 years of civilizational data</p>

      <div className="discoveries-grid">
        {discoveries.map((discovery, index) => (
          <div
            key={discovery.id}
            data-id={discovery.id}
            className={`discovery-item ${expandedId === discovery.id ? 'expanded' : ''} ${visibleItems.includes(discovery.id) ? 'visible' : ''}`}
            style={{ transitionDelay: `${index * 100}ms` }}
            onClick={() => setExpandedId(expandedId === discovery.id ? null : discovery.id)}
          >
            <div className="discovery-header">
              <span className="discovery-icon">{discovery.icon}</span>
              <span className="discovery-num">{String(discovery.id).padStart(2, '0')}</span>
            </div>
            
            <h3 className="discovery-title">{discovery.title}</h3>
            <p className="discovery-summary">{discovery.summary}</p>
            
            <div className="discovery-stat">
              <span className="stat-value">{discovery.stat}</span>
              <span className="stat-label">{discovery.statLabel}</span>
            </div>

            <div className="discovery-detail">
              <p>{discovery.detail}</p>
            </div>

            <span className="expand-hint">
              {expandedId === discovery.id ? '- Less' : '+ More'}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .discoveries-section {
          padding: 4rem 0;
        }
        .section-title {
          font-size: 1.1rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
        }
        .section-subtitle {
          color: var(--text-muted);
          margin-bottom: 3rem;
        }
        .discoveries-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        .discovery-item {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(20px);
        }
        .discovery-item.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .discovery-item:hover {
          border-color: var(--accent-dim);
        }
        .discovery-item.expanded {
          border-color: var(--accent);
        }
        .discovery-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        .discovery-icon {
          font-size: 1.5rem;
          color: var(--accent);
        }
        .discovery-num {
          font-family: var(--font-jetbrains), monospace;
          font-size: 0.7rem;
          color: var(--text-muted);
        }
        .discovery-title {
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }
        .discovery-summary {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: 1rem;
        }
        .discovery-stat {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
          padding: 0.75rem;
          background: var(--bg-primary);
          border-radius: 4px;
          margin-bottom: 1rem;
        }
        .discovery-stat .stat-value {
          font-family: var(--font-jetbrains), monospace;
          font-size: 1.25rem;
          color: var(--accent);
        }
        .discovery-stat .stat-label {
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        .discovery-detail {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }
        .discovery-item.expanded .discovery-detail {
          max-height: 200px;
        }
        .discovery-detail p {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.6;
          padding-top: 1rem;
          border-top: 1px solid var(--border);
        }
        .expand-hint {
          display: block;
          font-family: var(--font-jetbrains), monospace;
          font-size: 0.7rem;
          color: var(--accent-dim);
          text-align: right;
          margin-top: 0.5rem;
        }
        @media (max-width: 700px) {
          .discoveries-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
