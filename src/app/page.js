'use client'

import Link from 'next/link'
import LorenzAttractor from '../components/LorenzAttractor'

export default function Home() {
  return (
    <div className="home-minimal">
      {/* Hero */}
      <header className="home-hero">
        <div className="hero-grid">
          <div className="hero-text">
            <h1>
              <span className="hero-name">Alex Wu</span>
            </h1>
            <div className="hero-gold-line" />
            <p className="hero-tagline home-tagline">
              I creatively build ML systems to solve unorthodox problems. Recent NYU CS + Data Science grad.
            </p>
            <nav className="hero-links home-links">
              <a href="https://github.com/TheApexWu" target="_blank" rel="noopener noreferrer" className="link-draw">GitHub</a>
              <a href="https://www.linkedin.com/in/alex-wu-873b25181/" target="_blank" rel="noopener noreferrer" className="link-draw">LinkedIn</a>
              <Link href="/about" className="link-draw">About</Link>
            </nav>
          </div>
          <div className="hero-viz">
            <LorenzAttractor />
          </div>
        </div>
      </header>

      {/* Featured Project */}
      <section className="home-section scroll-fade-in">
        <div className="minimal-header">Featured</div>
        <div className="featured-card">
          <div className="featured-meta">Research</div>
          <h3 className="featured-title">PsychohistoryML</h3>
          <p className="featured-desc">
            Exploratory ML analysis of 372 historical polities from the Seshat Global History Databank.
            Random Forest (CV AUC 0.66) finds that the complexity-duration relationship reverses by era.
          </p>
          <div className="featured-actions">
            <Link href="/discover" className="btn-fill">Explore Project</Link>
            <Link href="/research" className="btn-fill secondary">Research</Link>
          </div>
          <div className="featured-update">
            <Link href="/crisisdb" className="link-draw">CrisisDB Explorer</Link>
            <span className="update-note">— 3,447 power transitions (r=0.36, p&lt;0.001)</span>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="home-section scroll-fade-in">
        <div className="minimal-header">Projects</div>
        <div>
          <div className="project-row">
            <div>
              <h4>Suzerain</h4>
              <p>
                Analyzes your Claude Code logs to reveal how you govern AI assistants.
                Bash acceptance rate is the key signal.
              </p>
              <a href="https://suzerain.dev" target="_blank" rel="noopener noreferrer" className="row-link link-draw">View Project →</a>
            </div>
            <span className="row-tag">CLI Tool</span>
          </div>

          <div className="project-row">
            <div>
              <h4>Beyond Translation</h4>
              <p>
                Sentence embeddings reveal translator fingerprints across 5 English translations of Nietzsche.
                Hollingdale sits at the semantic centroid; Zimmern drifts furthest.
              </p>
              <a href="https://nietzsche.amadeuswoo.com" target="_blank" rel="noopener noreferrer" className="row-link link-draw">View Project →</a>
            </div>
            <span className="row-tag">NLP</span>
          </div>

          <div className="project-row">
            <div>
              <h4>McCarthyGPT</h4>
              <p>
                Reverse-engineered Cormac McCarthy's prose style. 81% monosyllables create the "drumbeat" rhythm.
                4.8M parameter character-level GPT trained on Blood Meridian.
              </p>
              <a href="https://github.com/TheApexWu/BloodMeridianNLP" target="_blank" rel="noopener noreferrer" className="row-link link-draw">View Project →</a>
            </div>
            <span className="row-tag">Deep Learning</span>
          </div>

          <div className="project-row">
            <div>
              <h4>East2West</h4>
              <p>
                NYC to SF trip planner. Scrapes Google Flights and Skiplagged for cheap flights,
                scouts ML/AI hackathons and tech events. Zero API keys.
              </p>
              <a href="https://github.com/TheApexWu/East2West" target="_blank" rel="noopener noreferrer" className="row-link link-draw">View Project →</a>
            </div>
            <span className="row-tag">Scraping</span>
          </div>

          <div className="project-row">
            <div>
              <h4>NYC MTA Live Map</h4>
              <p>
                Real-time subway positions on an interactive map. Decodes MTA's GTFS-RT protobuf feeds.
              </p>
              <a href="https://github.com/TheApexWu/experimental-nyc-mta-live" target="_blank" rel="noopener noreferrer" className="row-link link-draw">View Project →</a>
            </div>
            <span className="row-tag">Real-time</span>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="home-section scroll-fade-in">
        <div className="minimal-header">Contact</div>
        <p className="contact-line">
          Best way to reach me: <code>amadeuswoo@proton.me</code>
        </p>
      </section>

      <style jsx>{`
        .home-minimal {
          max-width: 900px;
          margin: 0 auto;
          padding: 4rem 1.5rem;
        }

        .home-hero {
          margin-bottom: 4rem;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 280px;
          gap: 2rem;
          align-items: center;
        }

        .hero-viz {
          width: 280px;
          height: 280px;
        }

        .home-hero h1 {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 0;
          color: var(--text-primary);
        }

        .home-tagline {
          color: var(--text-muted);
          font-size: 1.1rem;
          line-height: 1.5;
          margin-bottom: 1rem;
        }

        .home-links {
          display: flex;
          gap: 1.5rem;
        }

        .home-links a {
          font-size: 0.95rem;
        }

        .home-section {
          margin-bottom: 3.5rem;
        }

        .featured-meta {
          font-family: var(--font-jetbrains), monospace;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accent-dim);
          margin-bottom: 0.5rem;
        }

        .featured-title {
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .featured-desc {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }

        .featured-actions {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: 1.25rem;
        }

        .featured-update {
          padding-top: 1rem;
          border-top: 1px solid var(--border);
          font-size: 0.95rem;
        }

        .update-note {
          color: var(--text-muted);
          font-size: 0.8rem;
        }

        .contact-line {
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        .contact-line code {
          background: var(--bg-secondary);
          padding: 0.2rem 0.4rem;
          border-radius: 3px;
          font-family: var(--font-jetbrains), monospace;
          font-size: 0.8rem;
          color: var(--text-primary);
        }

        @media (max-width: 768px) {
          .home-minimal {
            padding: 2rem 1.25rem;
          }

          .hero-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .hero-viz {
            width: 100%;
            height: 220px;
          }

          .home-hero h1 {
            font-size: 1.75rem;
          }

          .home-tagline {
            font-size: 1rem;
          }

          .home-links {
            gap: 1.25rem;
          }

          .home-section {
            margin-bottom: 2.5rem;
          }

          .featured-actions {
            flex-direction: column;
          }

          .featured-actions :global(.btn-fill) {
            text-align: center;
          }

          .featured-update {
            font-size: 0.85rem;
          }

          .update-note {
            display: block;
            margin-top: 0.25rem;
          }
        }

        @media (max-width: 400px) {
          .home-minimal {
            padding: 1.5rem 1rem;
          }

          .hero-viz {
            height: 180px;
          }

          .home-hero h1 {
            font-size: 1.5rem;
          }

          .home-links {
            gap: 1rem;
            font-size: 0.85rem;
          }
        }
      `}</style>
    </div>
  )
}
