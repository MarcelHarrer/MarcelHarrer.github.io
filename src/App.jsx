import { useEffect, useRef } from 'react'
import './App.css'

function App() {
  const heroRef = useRef(null)
  const workRef = useRef(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-content">
          <span className="nav-logo">MH</span>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="https://github.com/MarcelHarrer" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" ref={heroRef}>
        <div className="hero-content fade-in">
          <h1 className="hero-title">Marcel Harrer</h1>
          <p className="hero-subtitle">Mathematician. AI Researcher. Problem Solver.</p>
          <div className="hero-cta">
            <a
              href="https://drive.google.com/file/d/1I31Hsx53Jy21qD8ZLql9QzyorGNz9II6/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View CV
            </a>
            <a href="#work" className="btn-secondary">See my work</a>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section className="work" id="work" ref={workRef}>
        <div className="section-content">
          <h2 className="section-title fade-in">Selected Projects</h2>

          <div className="project-showcase">
            <a
              href="https://github.com/MarcelHarrer/agent-lawyer-public"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card fade-in"
            >
              <div className="project-header">
                <span className="project-tag">AI / Legal Tech</span>
                <span className="project-arrow">&#8594;</span>
              </div>
              <h3 className="project-title">Agent Lawyer</h3>
              <p className="project-description">
                An AI-powered legal assistant for Austrian law. Combines advanced
                retrieval systems with large language models to provide accurate,
                sourced legal information.
              </p>
              <div className="project-tech">
                <span>Python</span>
                <span>LangChain</span>
                <span>RAG</span>
              </div>
            </a>

            <a
              href="https://github.com/MarcelHarrer/car_sales_flask"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card fade-in"
            >
              <div className="project-header">
                <span className="project-tag">Full-Stack</span>
                <span className="project-arrow">&#8594;</span>
              </div>
              <h3 className="project-title">Car Sales Platform</h3>
              <p className="project-description">
                A complete web application for car dealership management.
                Features inventory tracking, customer management, and
                a clean, intuitive interface.
              </p>
              <div className="project-tech">
                <span>Flask</span>
                <span>PostgreSQL</span>
                <span>REST API</span>
              </div>
            </a>
          </div>

          <div className="github-cta fade-in">
            <a
              href="https://github.com/MarcelHarrer"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              View all projects on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">Marcel Harrer</p>
          <div className="footer-links">
            <a href="https://github.com/MarcelHarrer" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
