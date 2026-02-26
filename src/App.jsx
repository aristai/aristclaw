import React from "react";
import "./App.css";

function App() {
  return (
    <div className="page">
      <div className="above-fold">
        {/* Header - just logo */}
        <header className="header">
          <div className="header-inner">
            <div className="logo">
              <img src="/aristai-logo-full.webp" alt="AristAI" className="logo-full" />
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="hero">
          <div className="hero-bg" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <h1 className="hero-title">
              AristAI + OpenClaw<br />
              <span className="hero-highlight">AristClaw</span>
            </h1>
            <p className="hero-subtitle">
              AI-powered education — personalized tutoring, smarter study tools, and intelligent curriculum design.
            </p>
            <a href="https://aedify.ai/openclaw-landing" target="_blank" rel="noopener noreferrer" className="cta-btn">
              Try It Now
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </section>

        {/* Partner logos */}
        <section className="logo-bar">
        <div className="logo-bar-inner">
          <img src="/aristai-logo-full.webp" alt="AristAI" className="logo-bar-img" />
          <span className="logo-bar-x">&times;</span>
          <img src="/openclaw-logo.png" alt="OpenClaw" className="logo-bar-img logo-bar-img-wide" />
          <span className="logo-bar-x">&times;</span>
          <img src="/aedify-logo.svg" alt="Aedify" className="logo-bar-img logo-bar-img-tall" />
        </div>
        <div className="cta-block">
          <div className="access-code">
            <span className="access-label">Early Access — 1 Month Free</span>
            <span className="scratch-wrapper">
              <span className="access-value">ARISTCLAW</span>
              <span className="scratch-cover">
                <span className="scratch-text">HOVER TO REVEAL</span>
              </span>
            </span>
          </div>
          <span className="powered-label">Powered by Aedify</span>
        </div>
      </section>
      </div>

      {/* What we do */}
      <section className="about">
        <p className="section-label">What We Do</p>
        <h2 className="section-heading">Smarter Learning, Together</h2>
        <div className="cards-grid">
          <div className="card">
            <div className="card-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path d="M12 14v7" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="card-title">AI Tutoring</h3>
            <p className="card-desc">24/7 personalized tutoring powered by OpenClaw that adapts to each student's learning pace.</p>
          </div>
          <div className="card">
            <div className="card-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
                <path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="card-title">AI Podcast</h3>
            <p className="card-desc">AI-generated audio lessons that transform course materials into engaging podcast-style content.</p>
          </div>
          <div className="card">
            <div className="card-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 19.5A2.5 2.5 0 016.5 17H20" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 7h8M8 11h5" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="card-title">Smart Study Tools</h3>
            <p className="card-desc">AI-powered flashcards, summaries, and practice exams that help students learn faster and retain more.</p>
          </div>
          <div className="card">
            <div className="card-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polyline points="16,18 22,12 16,6" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="8,6 2,12 8,18" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="14" y1="4" x2="10" y2="20" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="card-title">Code Assistant</h3>
            <p className="card-desc">Real-time coding help with OpenClaw — debugging, code review, and step-by-step tutorials.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="logo" style={{ marginBottom: 12 }}>
                <img src="/aristai-logo-full.webp" alt="AristAI" className="footer-logo-img" />
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="copyright">&copy; {new Date().getFullYear()} AristAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
