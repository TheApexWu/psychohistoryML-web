import EmailSignup from '../components/EmailSignup'
import { StatsRow } from '../components/visualizations/AnimatedStats'
import DiscoveriesSection from '../components/visualizations/DiscoveriesSection'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <span className="hero-tag">Coming January 2026</span>
        <h1>I Am Building Asimov's <em>Psychohistory</em></h1>
        <p className="subtitle">
          What happens when you feed 10,000 years of civilizational data 
          to a machine learning model? It learns why empires fall.
        </p>
      </section>

      {/* Animated Stats - counts up on scroll */}
      <StatsRow />

      {/* 6 Expandable Discovery Cards */}
      <DiscoveriesSection />

      {/* CTA to full research */}
      <section className="research-cta">
        <p>Want the full methodology and analysis?</p>
        <Link href="/research" className="research-link">
          Read the Research
        </Link>
      </section>

      {/* Email Signup with state management */}
      <EmailSignup />
    </>
  )
}
