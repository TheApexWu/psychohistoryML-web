// src/components/visualizations/DiscoveriesSection.jsx
'use client'

import { useState, useEffect } from 'react'

const discoveries = [
  {
    id: 1,
    title: "Complexity alone predicts nothing",
    summary: "The Tainter hypothesis failed — until I added context",
    detail: "I started with Joseph Tainter's classic argument: complex societies should be more fragile. The first model using only complexity features hit 0.505 AUC — literally a coin flip. Complexity matters, but only in combination with other factors.",
    stat: "0.505",
    statLabel: "AUC (random chance)",
    icon: "◇"
  },
  {
    id: 2,
    title: "The complexity curse reversed over time",
    summary: "What killed Ancient polities helped Early Modern ones survive",
    detail: "In the Ancient world (pre-500 BCE), each unit of hierarchy reduced expected duration by ~159 years. By the Early Modern period, the relationship flipped — complexity slightly helped. Writing, institutions, trade networks changed the rules.",
    stat: "-159 → +6",
    statLabel: "coefficient shift",
    icon: "◈"
  },
  {
    id: 3,
    title: "Religion outweighs military",
    summary: "Religious variables account for 27% of model decisions",
    detail: "Religious institutionalization shows stabilizing effects. Ideology scores matter for fine-grained distinctions. Moralizing religion shows mixed effects — possibly reflecting rigidity or schism risk. The relationship is nonlinear: more isn't always better.",
    stat: "27%",
    statLabel: "feature importance",
    icon: "◉"
  },
  {
    id: 4,
    title: "Warfare unlocked the signal",
    summary: "Adding military features jumped prediction accuracy by 28%",
    detail: "The model went from coin-flip (0.505) to meaningful signal (0.648 AUC) when warfare variables were added. Cavalry, armor, and fortifications don't just correlate — they moderate how complexity affects survival.",
    stat: "+28%",
    statLabel: "AUC improvement",
    icon: "◆"
  },
  {
    id: 5,
    title: "The Classical sweet spot",
    summary: "500 BCE – 500 CE shows unique dynamics across all analyses",
    detail: "Rome, Han China, Persia — the Classical era consistently emerges as exceptional. Warfare moderation peaks here (+0.634 effect). Complex societies with strong militaries outlasted their simpler neighbors. Something about that combination, in that moment, worked.",
    stat: "+0.634",
    statLabel: "moderation effect",
    icon: "◎"
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
      <h2 className="section-title">What the Model Learned</h2>
      <p className="section-subtitle">
        Five findings from training a Random Forest on 256 polities across 10,000 years
      </p>

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
          font-size: 1rem;
        }
        .discoveries-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        /* Make the 5th card span full width or center it */
        .discoveries-grid .discovery-item:nth-child(5) {
          grid-column: 1 / -1;
          max-width: calc(50% - 0.75rem);
          justify-self: center;
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
          .discoveries-grid .discovery-item:nth-child(5) {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  )
}
