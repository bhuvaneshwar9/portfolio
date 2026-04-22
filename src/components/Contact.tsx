import { useEffect, useRef } from 'react'
import './Contact.css'

interface ContactLink {
  label: string
  value: string
  href: string
  icon: React.ReactNode
  gradient: string
}

const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    value: 'bhuvivangimalla9@gmail.com',
    href: 'mailto:bhuvivangimalla9@gmail.com',
    gradient: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/bhuvaneshwar9',
    href: 'https://github.com/bhuvaneshwar9',
    gradient: 'linear-gradient(135deg, #06b6d4, #67e8f9)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.4.6.1.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.08-.72.08-.72 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57C20.57 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/bhuvaneswarreddyv',
    href: 'https://www.linkedin.com/in/bhuvaneswarreddyv/',
    gradient: 'linear-gradient(135deg, #10b981, #34d399)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.02 8.5H5V24H.02V8.5zm7.5 0H12V11s.7-2.5 3.5-2.5C19 8.5 19 11.5 19 11.5V24h-5V13s0-2-2-2-2 2-2 2v11H7.52V8.5z" />
      </svg>
    ),
  },
]

export default function Contact() {
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
      { threshold: 0.1 }
    )

    const els = sectionRef.current?.querySelectorAll('.reveal')
    els?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="contact section" id="contact" ref={sectionRef}>
      {/* Background accent */}
      <div className="contact__orb" aria-hidden="true" />

      <div className="container">
        {/* Header */}
        <div className="contact__header reveal">
          <span className="section-label">Contact</span>
          <h2 className="section-heading">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-sub">
            Open to Data Engineer roles and interesting data infrastructure challenges.
            Reach out — I respond fast.
          </p>
        </div>

        {/* Link cards */}
        <div className="contact__cards">
          {contactLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="contact-card glass reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Icon */}
              <div
                className="contact-card__icon-wrap"
                style={{ background: link.gradient }}
                aria-hidden="true"
              >
                {link.icon}
              </div>

              {/* Text */}
              <div className="contact-card__text">
                <span className="contact-card__label">{link.label}</span>
                <span className="contact-card__value">{link.value}</span>
              </div>

              {/* Arrow */}
              <div className="contact-card__arrow" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
