import { useEffect, useRef } from 'react'
import './About.css'

interface StatCard {
  value: string
  label: string
  icon: string
}

const stats: StatCard[] = [
  { value: '2', label: 'Live Projects', icon: '🚀' },
  { value: '5+', label: 'Technologies', icon: '⚡' },
  { value: 'Real', label: 'Data — not synthetic', icon: '🔬' },
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12 }
    )

    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-left')
    els?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="about section" id="about" ref={sectionRef}>
      <div className="container">
        <div className="about__grid">
          {/* Text column */}
          <div className="about__text reveal-left">
            <span className="section-label">About Me</span>
            <h2 className="section-heading">
              Turning raw streams into{' '}
              <span className="gradient-text">reliable insights</span>
            </h2>
            <p>
              I'm a Data Engineer passionate about building real-time data systems that are
              fast, reliable, and production-grade. My core stack is{' '}
              <strong>Python, FastAPI, and Pandas</strong> — used to design end-to-end
              pipelines from ingestion through transformation to serving.
            </p>
            <p>
              I've shipped two live data projects: a{' '}
              <strong>Medallion Architecture pipeline</strong> processing CoinGecko
              cryptocurrency data with z-score anomaly detection, and a{' '}
              <strong>Data Quality Platform</strong> that scrapes real product data and
              runs 5 automated quality checks — all deployed on Render with real traffic.
            </p>
            <p>
              I'm currently deepening my expertise in{' '}
              <strong>Databricks and Apache Spark</strong> through a hands-on F1 racing
              dataset course, building toward cloud-scale distributed processing. My
              interest extends to <strong>Delta Lake, PySpark, and Azure</strong> for
              enterprise data engineering.
            </p>
          </div>

          {/* Stats column */}
          <div className="about__stats">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="about__stat-card glass reveal"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <span className="about__stat-icon" aria-hidden="true">
                  {stat.icon}
                </span>
                <span className="about__stat-value gradient-text">{stat.value}</span>
                <span className="about__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
