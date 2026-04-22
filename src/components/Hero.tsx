import { useState, useEffect, useRef } from 'react'
import './Hero.css'

const ROLES = [
  'Building Data Pipelines',
  'Processing Real-time Data',
  'Designing Data Quality Systems',
]

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const currentRole = ROLES[roleIndex]

    const tick = () => {
      if (!isDeleting) {
        const next = currentRole.slice(0, displayText.length + 1)
        setDisplayText(next)
        if (next === currentRole) {
          timeoutRef.current = setTimeout(() => setIsDeleting(true), 1800)
          return
        }
        timeoutRef.current = setTimeout(tick, 90)
      } else {
        const next = currentRole.slice(0, displayText.length - 1)
        setDisplayText(next)
        if (next === '') {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % ROLES.length)
          return
        }
        timeoutRef.current = setTimeout(tick, 48)
      }
    }

    timeoutRef.current = setTimeout(tick, isDeleting ? 48 : 90)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [displayText, isDeleting, roleIndex])

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home">
      {/* Animated background orbs */}
      <div className="hero__orb hero__orb--violet" aria-hidden="true" />
      <div className="hero__orb hero__orb--cyan" aria-hidden="true" />
      <div className="hero__orb hero__orb--purple" aria-hidden="true" />

      {/* Star field */}
      <div className="hero__stars" aria-hidden="true">
        {Array.from({ length: 60 }).map((_, i) => (
          <span
            key={i}
            className="hero__star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      <div className="hero__content">
        {/* Code label */}
        <div className="hero__label">
          <span className="hero__label-text">&lt; Data Engineer /&gt;</span>
        </div>

        {/* Main heading */}
        <h1 className="hero__title">
          <span className="hero__title-hi">Hi, I'm </span>
          <span className="hero__title-name gradient-text">Bhuvaneshwar</span>
        </h1>

        {/* Typewriter */}
        <div className="hero__typewriter" aria-live="polite">
          <span className="hero__typewriter-text">{displayText}</span>
          <span className="hero__cursor" aria-hidden="true">|</span>
        </div>

        {/* Tagline */}
        <p className="hero__tagline">
          I build scalable data infrastructure that turns raw streams into insights.
        </p>

        {/* CTA Buttons */}
        <div className="hero__actions">
          <a href="#projects" className="btn btn-primary" onClick={scrollToProjects}>
            View My Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="https://github.com/bhuvaneshwar9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.4.6.1.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.08-.72.08-.72 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57C20.57 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-indicator" aria-hidden="true">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  )
}
