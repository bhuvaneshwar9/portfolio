import { useEffect, useRef } from 'react'
import { projects } from '../data/projects'
import type { Project } from '../types'
import './Projects.css'

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <article
      className="project-card glass reveal"
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* Gradient banner */}
      <div
        className="project-card__banner"
        style={{ background: project.gradient }}
        aria-hidden="true"
      >
        <span className="project-card__icon">{project.icon}</span>
        <div className="project-card__banner-glow" />
      </div>

      {/* Body */}
      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>

        {/* Tags */}
        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-card__tag">
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="project-card__actions">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__btn project-card__btn--outline"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.4.6.1.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.08-.72.08-.72 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57C20.57 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
            </svg>
            GitHub ↗
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__btn project-card__btn--primary"
            >
              ⚡ Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
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
      { threshold: 0.08 }
    )

    const els = sectionRef.current?.querySelectorAll('.reveal')
    els?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="projects section" id="projects" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="projects__header reveal">
          <span className="section-label">Projects</span>
          <h2 className="section-heading">
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p className="section-sub">
            Real-world data engineering projects — live deployments, real data, real
            pipelines.
          </p>
        </div>

        {/* Grid */}
        <div className="projects__grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  )
}
