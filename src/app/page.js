'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div className="home-minimal">
      {/* Name/Identity */}
      <header className="home-header">
        <h1>Amadeus Woo <span className="aka">aka Alex Wu</span></h1>
        <p className="home-tagline">
          Applied ML data scientist. Historical patterns, computational linguistics, developer tools.
        </p>

        <nav className="home-links">
          <a href="https://github.com/TheApexWu" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/alex-wu-873b25181/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <Link href="/about">About</Link>
        </nav>
      </header>

      {/* Featured Project */}
      <section className="home-featured">
        <h2>Featured</h2>

        <div className="featured-card">
          <div className="featured-header">
            <h3>PsychohistoryML</h3>
            <span className="featured-tag">Research</span>
          </div>
          <p className="featured-desc">
            Exploratory ML analysis of 372 historical polities from the Seshat Global History Databank.
            Random Forest (CV AUC 0.66) finds that the complexity-duration relationship reverses by era.
          </p>
          <div className="featured-links">
            <Link href="/discover" className="featured-btn primary">Explore Project</Link>
            <Link href="/research" className="featured-btn">Research</Link>
            <Link href="/predict" className="featured-btn">Simulator</Link>
            <Link href="/chat" className="featured-btn">Chat</Link>
          </div>
        </div>
      </section>

      {/* More Projects */}
      <section className="home-projects">
        <h2>More Projects</h2>

        <div className="project-card">
          <div className="project-header">
            <h3>Suzerain</h3>
            <span className="project-tag">Developer Tools</span>
          </div>
          <p className="project-desc">
            Voice-activated Claude Code. Speak a phrase, your code deploys. Cipher-based commands
            map literary quotes to developer actions. Published on PyPI.
          </p>
          <a href="https://github.com/TheApexWu/suzerain" target="_blank" rel="noopener noreferrer" className="project-link">
            View Project →
          </a>
        </div>

        <div className="project-card">
          <div className="project-header">
            <h3>Beyond Translation</h3>
            <span className="project-tag">Computational Philology</span>
          </div>
          <p className="project-desc">
            Sentence embeddings reveal translator fingerprints across 5 English translations of Nietzsche's Beyond Good and Evil.
            Hollingdale sits at the semantic centroid; Zimmern drifts furthest from the German.
          </p>
          <a href="https://nietzsche.amadeuswoo.com" target="_blank" rel="noopener noreferrer" className="project-link">
            View Project →
          </a>
        </div>
      </section>

      {/* Contact */}
      <section className="home-contact">
        <h2>Contact</h2>
        <p>
          Best way to reach me: <code>amadeuswoo@proton.me</code>
        </p>
      </section>

      <style jsx>{`
        .home-minimal {
          max-width: 700px;
          margin: 0 auto;
          padding: 4rem 1.5rem;
        }

        .home-header {
          margin-bottom: 3rem;
        }

        .home-header h1 {
          font-size: 1.75rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .aka {
          font-size: 0.9rem;
          font-weight: 400;
          color: var(--text-muted);
        }

        .home-tagline {
          color: var(--text-muted);
          font-size: 1rem;
          line-height: 1.5;
          margin-bottom: 1rem;
        }

        .home-links {
          display: flex;
          gap: 1.5rem;
        }

        .home-links a {
          color: var(--accent);
          text-decoration: none;
          font-size: 0.95rem;
        }

        .home-links a:hover {
          text-decoration: underline;
        }

        .home-featured,
        .home-projects {
          margin-bottom: 3rem;
        }

        .home-featured h2,
        .home-projects h2,
        .home-contact h2 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
        }

        .featured-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 1.5rem;
        }

        .featured-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        .featured-header h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
        }

        .featured-tag {
          font-size: 0.7rem;
          padding: 0.2rem 0.5rem;
          background: var(--accent-dim);
          color: var(--text-primary);
          border-radius: 3px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .featured-desc {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }

        .featured-links {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .featured-btn {
          padding: 0.5rem 1rem;
          font-size: 0.85rem;
          border: 1px solid var(--border);
          border-radius: 4px;
          color: var(--text-muted);
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .featured-btn:hover {
          border-color: var(--accent-dim);
          color: var(--text-primary);
        }

        .featured-btn.primary {
          background: var(--accent);
          border-color: var(--accent);
          color: var(--bg-primary);
          font-weight: 500;
        }

        .featured-btn.primary:hover {
          background: var(--accent-dim);
          border-color: var(--accent-dim);
        }

        .project-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 1.25rem;
          margin-bottom: 1rem;
        }

        .project-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
        }

        .project-header h3 {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
        }

        .project-tag {
          font-size: 0.65rem;
          padding: 0.15rem 0.4rem;
          background: var(--accent-dim);
          color: var(--text-primary);
          border-radius: 3px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .project-desc {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 1rem;
        }

        .project-link {
          font-size: 0.85rem;
          color: var(--accent);
          text-decoration: none;
        }

        .project-link:hover {
          text-decoration: underline;
        }

        .home-contact p {
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        .home-contact code {
          background: var(--bg-secondary);
          padding: 0.2rem 0.4rem;
          border-radius: 3px;
          font-family: var(--font-jetbrains), monospace;
          font-size: 0.9rem;
          color: var(--text-primary);
        }
      `}</style>
    </div>
  )
}
