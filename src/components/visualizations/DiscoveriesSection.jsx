// src/components/visualizations/DiscoveriesSection.jsx
'use client'

import { useState, useEffect } from 'react'

const discoveries = [
  {
    id: 1,
    title: "Religion outweighs complexity",
    summary: "Ideology score is the #1 predictor of civilizational stability",
    detail: "Counter to assumptions that bureaucratic sophistication determines survival, religious/ideological cohesion (12.7% importance) outranks all complexity measures. Societies with shared belief systems weather crises better.",
    stat: "12.7%",
    statLabel: "importance",
    icon: "◉"
  },
  {
    id: 2,
    title: "Era trumps geography",
    summary: "Historical period matters more than where a civilization was located",
    detail: "Civilizations cluster by time, not space. Ancient polities (β=-159) face dramatically different complexity dynamics than Early Modern ones (β=+6). The 'rules' of civilizational survival changed over millennia.",
    stat: "β=-159→+6",
    statLabel: "coefficient shift",
    icon: "◈"
  },
  {
    id: 3,
    title: "Warfare technology transitions",
    summary: "Adding warfare features improved prediction by 28%",
    detail: "Military technology moderates complexity effects differently per era. Classical period warfare shows +0.634 moderation—the strongest effect—suggesting military innovation helped manage complex societies.",
    stat: "+28%",
    statLabel: "AUC improvement",
    icon: "◇"
  },
  {
    id: 4,
    title: "Classical era is special",
    summary: "500 BCE–500 CE shows unique dynamics in all analyses",
    detail: "The Classical period consistently emerges as exceptional: warfare moderation peaks here, religion-complexity interactions differ, and the negative complexity effect moderates significantly compared to Ancient times.",
    stat: "+0.634",
    statLabel: "warfare moderation",
    icon: "◆"
  },
  {
    id: 5,
    title: "Low complexity + low ideology = longest",
    summary: "The 'simple and secular' sweet spot for longevity",
    detail: "Surprisingly, polities with minimal bureaucratic complexity AND minimal ideological cohesion show the longest average durations. Perhaps they avoid both administrative overreach and ideological rigidity.",
    stat: "~650",
    statLabel: "avg. years",
    icon: "○"
  },
  {
    id: 6,
    title: "Complexity is conditionally harmful",
    summary: "Only dangerous without stabilizing mechanisms",
    detail: "Raw complexity correlates with shorter duration, but this effect is moderated by warfare technology and religious cohesion. Complex societies can persist—if they have the right institutional supports.",
    stat: "R²=0.21",
    statLabel: "ancient only",
    icon: "●"
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
      <p className="section-subtitle">Six key findings from analyzing 10,000 years of civilizational data</p>

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
              {expandedId === discovery.id ? '− Less' : '+ More'}
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
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
        @media (max-width: 600px) {
          .discoveries-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
