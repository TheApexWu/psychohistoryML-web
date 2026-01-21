'use client';

import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <h1>Alex Wu</h1>
        <p className="hero-sub">
          I creatively build ML systems to solve unorthodox problems. Recent NYU CS + Data Science grad.
        </p>

        <div className="availability">
          <span className="dot"></span>
          Looking for work — will relocate to SF
        </div>

        <div className="links">
          <a href="https://github.com/TheApexWu" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/alex-wu-873b25181/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <button
            onClick={() => {
              navigator.clipboard.writeText('amadeuswoo@proton.me');
              const btn = document.querySelector('.email-btn');
              btn.textContent = 'Copied!';
              setTimeout(() => btn.textContent = 'amadeuswoo@proton.me', 2000);
            }}
            className="email-btn"
          >
            amadeuswoo@proton.me
          </button>
        </div>
      </section>

      {/* What I Do */}
      <section className="about-section">
        <p className="looking-for">
          I learn by building. Most of my projects exist because I wanted to answer a question or solve a problem I had.
          Looking for a team where I can keep doing that.
        </p>
      </section>

      {/* Skills */}
      <section className="about-section">
        <h2>Stack</h2>
        <div className="skills">
          <div className="skill-row">
            <span className="skill-label">Core</span>
            <span>Python, PyTorch, scikit-learn, Pandas, SQL</span>
          </div>
          <div className="skill-row">
            <span className="skill-label">ML</span>
            <span>NLP, Audio/Librosa, Time Series, Deep Learning</span>
          </div>
          <div className="skill-row">
            <span className="skill-label">Web</span>
            <span>React/Next.js, Node.js, FastAPI, GCP, MongoDB</span>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="about-section">
        <h2>Experience</h2>

        <div className="exp">
          <div className="exp-top">
            <h3>Exiger LLC</h3>
            <span>Summer 2025</span>
          </div>
          <p className="exp-role">Data Science Intern, NYC</p>
          <p>Shipped NLP pipeline to production — ticket classification, priority scoring, time series forecasting with Prophet.</p>
        </div>

        <div className="exp">
          <div className="exp-top">
            <h3>Horizon BCBS NJ</h3>
            <span>Summer 2023</span>
          </div>
          <p className="exp-role">IT Intern, Newark</p>
          <p>Insurance catalog frontend (Salesforce/SQL), microservice monitoring, HIPAA compliance.</p>
        </div>
      </section>

      {/* Research */}
      <section className="about-section">
        <h2>Research</h2>

        <div className="exp">
          <div className="exp-top">
            <h3>Audio-Based Depression Detection</h3>
            <span>NYU, Summer 2024</span>
          </div>
          <p className="exp-role">w/ Pascal Wallasch</p>
          <p>Built audio/linguistic feature pipeline for clinical depression research on 1,000+ hours of patient audio. Key finding: speech patterns vary too much across individuals for population-level detection — an informative null result that shaped the research direction.</p>
        </div>

        <div className="exp">
          <div className="exp-top">
            <h3>PsychohistoryML</h3>
            <span>2024–Present</span>
          </div>
          <p>ML analysis of 372 historical polities. Random Forest (AUC 0.67) finding complexity-duration relationship reverses by era.</p>
          <Link href="/discover" className="exp-link">View Project →</Link>
        </div>
      </section>

      {/* Projects */}
      <section className="about-section">
        <h2>Projects</h2>

        <div className="exp">
          <div className="exp-top">
            <h3>Touhou Style Classifier</h3>
            <span>Audio ML</span>
          </div>
          <p>89.5% accuracy on 954 tracks. Handcrafted features beat CLAP/MERT by 19-24%.</p>
        </div>

        <div className="exp">
          <div className="exp-top">
            <h3>Suzerain</h3>
            <span>CLI Tool</span>
          </div>
          <p>Analyze your Claude Code logs locally. See where you trust AI, where you don't. Bash acceptance is the signal.</p>
          <a href="https://suzerain.dev" className="exp-link">View →</a>
        </div>

        <div className="exp">
          <div className="exp-top">
            <h3>Beyond Translation</h3>
            <span>NLP</span>
          </div>
          <p>Sentence embeddings reveal translator fingerprints across 5 Nietzsche translations.</p>
          <a href="https://nietzsche.amadeuswoo.com" className="exp-link">View →</a>
        </div>

        <div className="exp">
          <div className="exp-top">
            <h3>Music Transcription</h3>
            <span>Deep Learning</span>
          </div>
          <p>Piano audio to MIDI. CRNN with dual-output heads for onset/duration detection.</p>
        </div>
      </section>

      {/* Education */}
      <section className="about-section">
        <h2>Education</h2>
        <div className="exp">
          <div className="exp-top">
            <h3>NYU</h3>
            <span>2020–2025</span>
          </div>
          <p>B.A. Computer Science + Data Science, Minor in Mathematics</p>
        </div>
      </section>

      {/* Human */}
      <section className="about-section human">
        <h2>Beyond Code</h2>
        <ul>
          <li><strong>History:</strong> Peter Turchin's cliodynamics — built an ML project around it</li>
          <li><strong>Music:</strong> Doujin scene for years — why I got into audio ML</li>
          <li><strong>Philosophy:</strong> Nietzsche, Schopenhauer — built an NLP project around that too</li>
          <li><strong>Location:</strong> NYC/NJ → SF for the right opportunity</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <p>If you ship, let's talk.</p>
        <button
          onClick={() => {
            navigator.clipboard.writeText('amadeuswoo@proton.me');
            const btn = document.querySelector('.cta-btn');
            btn.textContent = 'Copied!';
            setTimeout(() => btn.textContent = 'amadeuswoo@proton.me', 2000);
          }}
          className="cta-btn"
        >
          amadeuswoo@proton.me
        </button>
      </section>

      <Link href="/" className="back-link">← Back</Link>

      <style jsx>{`
        .about-page {
          max-width: 800px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }

        /* Hero - LEFT ALIGNED */
        .about-hero {
          margin-bottom: 3rem;
        }

        .about-hero h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }

        .hero-sub {
          font-size: 1.25rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: 1.5rem;
          max-width: 600px;
        }

        .availability {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          border-radius: 6px;
          font-size: 1rem;
          color: #22c55e;
          margin-bottom: 1.5rem;
        }

        .dot {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .links {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .links a, .email-btn {
          color: var(--accent);
          text-decoration: none;
          font-size: 1.1rem;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          font-family: inherit;
        }

        .links a:hover, .email-btn:hover {
          text-decoration: underline;
        }

        /* Sections */
        .about-section {
          margin-bottom: 3rem;
        }

        .about-section h2 {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid var(--border);
        }

        .looking-for {
          font-size: 1.2rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .looking-for strong {
          color: var(--text-primary);
        }

        /* Skills */
        .skills {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .skill-row {
          display: flex;
          gap: 1.5rem;
          font-size: 1.1rem;
          color: var(--text-muted);
        }

        .skill-label {
          width: 60px;
          color: var(--text-primary);
          font-weight: 500;
          flex-shrink: 0;
        }

        /* Experience */
        .exp {
          margin-bottom: 2rem;
        }

        .exp:last-child {
          margin-bottom: 0;
        }

        .exp-top {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 0.25rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .exp-top h3 {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
        }

        .exp-top span {
          font-size: 0.95rem;
          color: var(--text-muted);
        }

        .exp-role {
          font-size: 1rem;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
          font-style: italic;
        }

        .exp p {
          font-size: 1.1rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0;
        }

        .exp-link {
          display: inline-block;
          margin-top: 0.5rem;
          font-size: 1rem;
          color: var(--accent);
          text-decoration: none;
        }

        .exp-link:hover {
          text-decoration: underline;
        }

        /* Human */
        .human ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .human li {
          font-size: 1.1rem;
          color: var(--text-muted);
          margin-bottom: 0.75rem;
          line-height: 1.5;
        }

        .human li strong {
          color: var(--text-primary);
        }

        /* CTA */
        .about-cta {
          margin: 4rem 0 2rem;
          padding: 2rem;
          background: var(--bg-secondary);
          border-radius: 8px;
        }

        .about-cta p {
          font-size: 1.25rem;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .cta-btn {
          padding: 0.75rem 1.5rem;
          background: var(--accent);
          color: var(--bg-primary);
          border: none;
          border-radius: 6px;
          font-size: 1.1rem;
          font-weight: 500;
          cursor: pointer;
        }

        .cta-btn:hover {
          opacity: 0.9;
        }

        .back-link {
          color: var(--accent);
          text-decoration: none;
          font-size: 1rem;
        }

        .back-link:hover {
          text-decoration: underline;
        }

        @media (max-width: 600px) {
          .about-hero h1 {
            font-size: 2.25rem;
          }

          .hero-sub {
            font-size: 1.1rem;
          }

          .skill-row {
            flex-direction: column;
            gap: 0.25rem;
          }

          .skill-label {
            width: auto;
          }
        }
      `}</style>
    </div>
  )
}
