import { useEffect, useRef } from 'react'
import { skillCategories } from '../data/skills'
import type { SkillCategory } from '../types'
import './Skills.css'

function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

function SkillCard({ category, delay }: { category: SkillCategory; delay: number }) {
  return (
    <div
      className="skill-card glass reveal"
      style={{
        transitionDelay: `${delay}s`,
        '--card-color': category.color,
        '--card-color-bg': hexToRgba(category.color, 0.08),
        '--card-color-border': hexToRgba(category.color, 0.25),
      } as React.CSSProperties}
    >
      {/* Header */}
      <div className="skill-card__header">
        <span
          className="skill-card__dot"
          style={{ background: category.color }}
          aria-hidden="true"
        />
        <h3 className="skill-card__name">{category.name}</h3>
      </div>

      {/* Pills */}
      <div className="skill-card__pills">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="skill-card__pill"
            style={{
              background: hexToRgba(category.color, 0.1),
              color: category.color,
              borderColor: hexToRgba(category.color, 0.2),
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
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
    <section className="skills section" id="skills" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="skills__header reveal">
          <span className="section-label">Skills</span>
          <h2 className="section-heading">
            Skills &amp;{' '}
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-sub">
            A focused toolkit for building data pipelines, quality systems, and backend
            APIs from scratch to production.
          </p>
        </div>

        {/* Grid */}
        <div className="skills__grid">
          {skillCategories.map((category, i) => (
            <SkillCard key={category.name} category={category} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
