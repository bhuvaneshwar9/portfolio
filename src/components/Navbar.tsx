import { useState, useEffect } from 'react'
import './Navbar.css'

interface NavbarProps {
  menuOpen: boolean
  setMenuOpen: (v: boolean) => void
}

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ menuOpen, setMenuOpen }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <a href="#home" className="navbar__logo" onClick={handleLinkClick}>
          <span className="navbar__logo-box">BK</span>
          <span className="navbar__logo-name">Bhuvaneshwar</span>
        </a>

        {/* Desktop links */}
        <ul className="navbar__links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="navbar__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="navbar__mobile-link"
            onClick={handleLinkClick}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
