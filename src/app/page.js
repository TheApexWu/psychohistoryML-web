import { StatsRow } from '../components/visualizations/AnimatedStats'
import DiscoveriesSection from '../components/visualizations/DiscoveriesSection'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <h1>I Am Building Asimov&apos;s <em>Psychohistory</em></h1>
        <p className="subtitle">
          What happens when you feed 10,000 years of civilizational data 
          to a machine learning model? It learns why empires fall.
        </p>
      </section>

      {/* Animated Stats */}
      <StatsRow />

      {/* Dataset Context */}
      <section className="dataset-context">
        <p>
          The <a href="https://seshatdatabank.info/" target="_blank" rel="noopener noreferrer">Seshat Global History Databank</a> is 
          an international research project that systematically codes historical and archaeological 
          data, everything from administrative hierarchy to military technology to religious practices, 
          across hundreds of societies spanning 10,000 years. I trained a Random Forest classifier on 
          this data to find patterns in civilizational stability.
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

      {/* About CTA */}
      <section className="about-cta">
        <p className="about-cta-text">Curious who&apos;s behind this?</p>
        <Link href="/about" className="about-link">
          Meet the Builder →
        </Link>
      </section>
    </>
  )
}