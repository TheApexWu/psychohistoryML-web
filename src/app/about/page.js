'use client';

import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <span className="hero-tag">The Human Behind the Model</span>
        <h1>My real name is <em>Alex Wu</em></h1>
        <p className="subtitle">
          "Amadeus Woo" just a cooler name.
        </p>
        
        <div className="social-links">
          <a href="https://github.com/TheApexWu" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/alex-wu-873b25181/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
        
        <div className="email-contact">
          <button 
            className="email-copy-btn"
            onClick={() => {
              navigator.clipboard.writeText('amadeuswoo@proton.me');
              const btn = document.querySelector('.email-copy-btn');
              btn.textContent = 'Copied!';
              setTimeout(() => btn.textContent = 'Copy My Preferred Contact', 2000);
            }}
          >
            Copy My Preferred Contact
          </button>
        </div>
      </section>

      {/* Skills - PROMINENT for recruiters */}
      <section className="skills-section">
        <h2>Technical Stack</h2>
        
        <div className="skill-category">
          <span className="skill-label">Languages</span>
          <div className="skill-tags">
            <span className="skill-tag primary">Python</span>
            <span className="skill-tag primary">SQL</span>
            <span className="skill-tag primary">JavaScript</span>
            <span className="skill-tag">Java</span>
            <span className="skill-tag">C/C++</span>
            <span className="skill-tag">R</span>
            <span className="skill-tag">Go</span>
          </div>
        </div>

        <div className="skill-category">
          <span className="skill-label">ML / Data Science</span>
          <div className="skill-tags">
            <span className="skill-tag primary">PyTorch</span>
            <span className="skill-tag primary">TensorFlow</span>
            <span className="skill-tag primary">Scikit-Learn</span>
            <span className="skill-tag primary">Pandas</span>
            <span className="skill-tag">NLP</span>
            <span className="skill-tag">Deep Learning</span>
          </div>
        </div>

        <div className="skill-category">
          <span className="skill-label">Web / Infrastructure</span>
          <div className="skill-tags">
            <span className="skill-tag primary">React.js</span>
            <span className="skill-tag primary">Next.js</span>
            <span className="skill-tag">Git</span>
            <span className="skill-tag">MongoDB</span>
            <span className="skill-tag">GCP</span>
            <span className="skill-tag">Azure</span>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="about-section">
        <h2>Education</h2>
        <div className="experience-card">
          <div className="exp-header">
            <div>
              <h3>New York University</h3>
              <p className="exp-subtitle">College of Arts and Sciences</p>
            </div>
            <span className="exp-date">2020 – 2025</span>
          </div>
          <p className="exp-degree">B.A. Computer and Data Science, Minor in Mathematics</p>
          <p className="exp-courses">
            Machine Learning · Deep Learning · Causal Inference · Predictive Analytics · Parallel Computing
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="about-section">
        <h2>Experience</h2>
        
        <div className="experience-card">
          <div className="exp-header">
            <div>
              <h3>Exiger LLC</h3>
              <p className="exp-subtitle">Application Support Intern · New York, NY</p>
            </div>
            <span className="exp-date">Summer 2025</span>
          </div>
          <ul className="exp-highlights">
            <li>Built NLP pipeline classifying support tickets by intent, sentiment, and topic (TF-IDF, logistic regression)</li>
            <li>Created priority scoring system predicting urgency from historical resolution times</li>
            <li>Built time series forecasting tool with Prophet for ticket surge prediction</li>
          </ul>
        </div>

        <div className="experience-card">
          <div className="exp-header">
            <div>
              <h3>Horizon Blue Cross Blue Shield NJ</h3>
              <p className="exp-subtitle">Enterprise Applications IT Intern · Newark, NJ</p>
            </div>
            <span className="exp-date">Summer 2023</span>
          </div>
          <ul className="exp-highlights">
            <li>Built front-end UI for insurance package catalogs using Salesforce and SQL</li>
            <li>Dashboard for microservice availability monitoring and open enrollment automation</li>
            <li>HIPAA compliance and cybersecurity protocols</li>
          </ul>
        </div>

        <div className="experience-card muted">
          <div className="exp-header">
            <div>
              <h3>NYU Bobst Library</h3>
              <p className="exp-subtitle">Help Desk Support Assistant · New York, NY</p>
            </div>
            <span className="exp-date">2022 – 2025</span>
          </div>
          <ul className="exp-highlights">
            <li>Front-end web tools for library technology</li>
            <li>ServiceNow ticketing, hardware/software management</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section className="about-section">
        <h2>Research Projects</h2>

        <div className="experience-card featured">
          <div className="exp-header">
            <div>
              <h3>PsychohistoryML</h3>
              <p className="exp-subtitle">Independent Research · Fall 2025 – Present</p>
            </div>
            <span className="exp-tag">You're looking at it</span>
          </div>
          <p className="exp-description">
            ML analysis of 10,000 years of civilizational data from the Seshat databank. 
            Random Forest classifier (AUC 0.744) discovering patterns in societal stability.
          </p>
        </div>

        <div className="experience-card">
          <div className="exp-header">
            <div>
              <h3>Music Transcription System</h3>
              <p className="exp-subtitle">NYU Deep Learning Final Project</p>
            </div>
            <span className="exp-date">Spring 2025</span>
          </div>
          <p className="exp-description">
            End-to-end deep learning system converting raw piano audio to MIDI. 
            CRNN model with spectrogram inputs, dual-output heads for onset/duration detection.
          </p>
        </div>

        <div className="experience-card">
          <div className="exp-header">
            <div>
              <h3>Audio-Based Depression Detection</h3>
              <p className="exp-subtitle">NYU Data Science Research</p>
            </div>
            <span className="exp-date">Summer 2024</span>
          </div>
          <p className="exp-description">
            Developed audio/linguistic feature pipeline for clinical depression research. 
            Analysis showed speech patterns vary too much across individuals for population-level detection — an informative null result.
          </p>
        </div>
      </section>

      {/* The Menial Stuff */}
      <section className="about-section menial">
        <h2>The Menial Stuff</h2>
        <p className="menial-intro">Things that don't fit on a resume but might come up at networking events:</p>
        <ul className="menial-list">
          <li>NYC based, open to the Bay Area</li>
          <li>Intermediate French, active francophile (food, culture, history, architecture)</li>
          <li>Aficionado of 19th century German philosophers</li>
          <li>Currently learning more about Peter Turchin's cliodynamics</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="about-cta-bottom">
        <Link href="/" className="return-link">
          ← Return to the Cool Stuff
        </Link>
      </section>
    </div>
  )
}