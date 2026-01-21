'use client'

import { StatsRow } from '../../../components/visualizations/AnimatedStats'
import DiscoveriesSection from '../../../components/visualizations/DiscoveriesSection'
import Link from 'next/link'

export default function DiscoverPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <span className="hero-tag">Exploratory Research</span>
        <h1>Toward Asimov&apos;s <em>Psychohistory</em></h1>
        <p className="subtitle">
          What happens when you feed 10,000 years of civilizational data
          to a machine learning model? It finds patterns—but not laws.
        </p>
      </section>

      {/* Animated Stats */}
      <StatsRow />

      {/* Dataset Context */}
      <section className="dataset-context">
        <p>
          The <a href="https://seshatdatabank.info/" target="_blank" rel="noopener noreferrer">Seshat Global History Databank</a> is
          an international research project that systematically codes historical and archaeological
          data—administrative hierarchy, military technology, religious practices—across hundreds
          of societies spanning 10,000 years. I trained a Random Forest classifier to find patterns
          in civilizational duration, though duration is an imperfect proxy for stability.
        </p>
        <p className="caveat" style={{ marginTop: '1rem' }}>
          <strong>Important:</strong> This is exploratory analysis, not confirmatory prediction.
          Cross-validation shows AUC ~0.67 with high variance (0.51-0.76). Temporal holdout (LOEO)
          drops to 0.57—the model learns era-specific patterns, not universal laws. I&apos;m working
          toward more rigorous methods.
        </p>
      </section>

      {/* Expandable Discovery Cards */}
      <DiscoveriesSection />

      {/* CTA Section */}
      <section className="research-cta">
        <p>Want the full methodology and analysis?</p>
        <div className="cta-buttons">
          <Link href="/research" className="research-link">
            Read the Research
          </Link>
          <Link href="/predict" className="research-link secondary">
            Try the Simulator
          </Link>
        </div>
      </section>

      {/* Chatbot CTA */}
      <section className="research-cta" style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
        <p>Or ask questions directly</p>
        <Link
          href="/chat"
          className="research-link"
          style={{
            background: 'transparent',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          Try Research Assistant Bot
          <span style={{
            fontSize: '0.65rem',
            padding: '0.2rem 0.4rem',
            background: 'var(--accent-dim)',
            color: 'var(--text-primary)',
            borderRadius: '3px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>Beta</span>
        </Link>
      </section>
    </>
  )
}
