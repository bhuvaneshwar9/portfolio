import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__text">
          <span className="footer__name">Bhuvaneshwar</span>
          {' · '}
          Built with{' '}
          <span className="footer__tech">React</span>
          {' & '}
          <span className="footer__tech">TypeScript</span>
          {' · '}
          {year}
        </p>
        <p className="footer__sub">Data Engineer — turning raw bytes into reliable gold</p>
      </div>
    </footer>
  )
}
