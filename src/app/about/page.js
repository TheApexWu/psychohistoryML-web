'use client';

import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <h1>
          <span className="hero-name">Alex Wu</span>
        </h1>
        <div className="hero-gold-line" />
        <p className="hero-tagline hero-sub">
          I creatively build ML systems to solve unorthodox problems. Recent NYU CS + Data Science grad.
        </p>

        <div className="availability scroll-fade-in">
          <span className="dot"></span>
          Looking for work, will relocate to SF
        </div>

        <div className="links scroll-fade-in">
          <a href="https://github.com/TheApexWu" target="_blank" rel="noopener noreferrer" className="link-draw">GitHub</a>
          <a href="https://www.linkedin.com/in/alex-wu-873b25181/" target="_blank" rel="noopener noreferrer" className="link-draw">LinkedIn</a>
          <button
            onClick={() => {
              navigator.clipboard.writeText('amadeuswoo@proton.me');
              const btn = document.querySelector('.email-btn');
              btn.textContent = 'Copied!';
              setTimeout(() => btn.textContent = 'amadeuswoo@proton.me', 2000);
            }}
            className="email-btn link-draw"
          >
            amadeuswoo@proton.me
          </button>
        </div>
      </section>

      {/* What I Do */}
      <section className="about-section scroll-fade-in">
        <p className="looking-for">
          Simply put, I learn by building, parallelizing my projects to answer questions like a GPU. Looking for a bona fide team where I can apply my momentum.
        </p>
      </section>

      {/* Skills */}
      <section className="about-section scroll-fade-in">
        <div className="minimal-header">Stack</div>
        <div>
          <span className="pill-category">Core</span>
          <div className="pill-row">
            <span className="pill">Python</span>
            <span className="pill">PyTorch</span>
            <span className="pill">scikit-learn</span>
            <span className="pill">Pandas</span>
            <span className="pill">SQL</span>
          </div>
          <span className="pill-category">ML</span>
          <div className="pill-row">
            <span className="pill">NLP</span>
            <span className="pill">Audio / Librosa</span>
            <span className="pill">Time Series</span>
            <span className="pill">Deep Learning</span>
          </div>
          <span className="pill-category">Web</span>
          <div className="pill-row">
            <span className="pill">React / Next.js</span>
            <span className="pill">Node.js</span>
            <span className="pill">FastAPI</span>
            <span className="pill">GCP</span>
            <span className="pill">MongoDB</span>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="about-section scroll-fade-in">
        <div className="minimal-header">Education</div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">2020 – 2025</div>
            <h4>New York University</h4>
            <p>B.A. Computer Science + Data Science, Minor in Mathematics</p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="about-section scroll-fade-in">
        <div className="minimal-header">Experience</div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">Summer 2025</div>
            <h4>Exiger LLC</h4>
            <div className="timeline-role">Data Science Intern, NYC</div>
            <p>Shipped NLP pipeline to production: ticket classification, priority scoring, time series forecasting with Prophet.</p>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">Summer 2023</div>
            <h4>Horizon BCBS NJ</h4>
            <div className="timeline-role">IT Intern, Newark</div>
            <p>Insurance catalog frontend (Salesforce/SQL), microservice monitoring, HIPAA compliance.</p>
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="about-section scroll-fade-in">
        <div className="minimal-header">Research</div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">NYU, Summer 2024</div>
            <h4>Audio-Based Depression Detection</h4>
            <div className="timeline-role">w/ Pascal Wallasch</div>
            <p>Built audio/linguistic feature pipeline for clinical depression research on 1,000+ hours of patient audio. Key finding: speech patterns vary too much across individuals for population-level detection.</p>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2024 – Present</div>
            <h4>PsychohistoryML</h4>
            <p>ML analysis of 372 historical polities. Random Forest (AUC 0.67) finding complexity-duration relationship reverses by era.</p>
            <Link href="/discover" className="link-draw" style={{display:'inline-block',marginTop:'0.35rem',fontSize:'0.8rem'}}>View Project →</Link>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="about-section scroll-fade-in">
        <div className="minimal-header">Projects</div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">Audio ML</div>
            <h4>Audio Style Classifier</h4>
            <p>89.5% accuracy on 954 tracks. Handcrafted features beat CLAP/MERT by 19-24%.</p>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">CLI Tool</div>
            <h4>Suzerain</h4>
            <p>Analyze your Claude Code logs locally. See where you trust AI, where you don't.</p>
            <a href="https://suzerain.dev" className="link-draw" style={{display:'inline-block',marginTop:'0.35rem',fontSize:'0.8rem'}}>View →</a>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">NLP</div>
            <h4>Beyond Translation</h4>
            <p>Sentence embeddings reveal translator fingerprints across 5 Nietzsche translations.</p>
            <a href="https://nietzsche.amadeuswoo.com" className="link-draw" style={{display:'inline-block',marginTop:'0.35rem',fontSize:'0.8rem'}}>View →</a>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">Deep Learning</div>
            <h4>Music Transcription</h4>
            <p>Piano audio to MIDI. CRNN with dual-output heads for onset/duration detection.</p>
          </div>
        </div>
      </section>

      {/* Human */}
      <section className="about-section scroll-fade-in">
        <div className="minimal-header">Beyond Code</div>
        <ul className="beyond-list">
          <li><strong>History:</strong> Peter Turchin's cliodynamics. Building ML pipelines around public datasets.</li>
          <li><strong>Music:</strong> Japanese indie + DnB. Why I got into audio ML.</li>
          <li><strong>Reading:</strong> Mentally somewhere in the 19th century.</li>
          <li><strong>Linguistics:</strong> How language shapes thought. Feeds into my NLP work.</li>
          <li><strong>Location:</strong> NYC/NJ → SF for the right opportunity</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="about-cta scroll-fade-in">
        <p>If you're building something interesting, I'd like to hear about it.</p>
        <button
          onClick={() => {
            navigator.clipboard.writeText('amadeuswoo@proton.me');
            const btn = document.querySelector('.cta-btn');
            btn.textContent = 'Copied!';
            setTimeout(() => btn.textContent = 'amadeuswoo@proton.me', 2000);
          }}
          className="cta-btn btn-fill"
        >
          amadeuswoo@proton.me
        </button>
      </section>

      <Link href="/" className="back-link link-draw">← Back</Link>

      <style jsx>{`
        .about-page {
          max-width: 800px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }

        .about-hero {
          margin-bottom: 3rem;
        }

        .about-hero h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 0;
          color: var(--text-primary);
        }

        .hero-sub {
          font-size: 1.1rem;
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
          font-size: 0.95rem;
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
          align-items: center;
        }

        .links a, .email-btn {
          font-size: 1rem;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          font-family: inherit;
        }

        .about-section {
          margin-bottom: 3rem;
        }

        .looking-for {
          font-size: 1.1rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .looking-for strong {
          color: var(--text-primary);
        }

        .beyond-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .beyond-list li {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-bottom: 0.75rem;
          line-height: 1.5;
        }

        .beyond-list li strong {
          color: var(--text-primary);
        }

        .about-cta {
          margin: 4rem 0 2rem;
          padding: 2rem;
          background: var(--bg-secondary);
          border-radius: 8px;
        }

        .about-cta p {
          font-size: 1.1rem;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .cta-btn {
          font-size: 0.95rem;
        }

        .back-link {
          font-size: 0.95rem;
        }

        @media (max-width: 768px) {
          .about-page {
            padding: 2rem 1.25rem;
          }

          .about-hero h1 {
            font-size: 2.25rem;
          }

          .hero-sub {
            font-size: 1rem;
          }

          .about-section {
            margin-bottom: 2rem;
          }

          .about-cta {
            margin: 2rem 0 1.5rem;
            padding: 1.5rem;
          }

          .availability {
            font-size: 0.85rem;
          }

          .links {
            gap: 1rem;
          }

          .links a, .email-btn {
            font-size: 0.9rem;
          }

          .looking-for {
            font-size: 1rem;
          }
        }

        @media (max-width: 400px) {
          .about-hero h1 {
            font-size: 1.75rem;
          }

          .about-page {
            padding: 1.5rem 1rem;
          }
        }
      `}</style>
    </div>
  )
}
