import { Link, NavLink } from 'react-router-dom'

export default function Header(){
  return (
    <header>
      <div className="topbar">
        <div className="wrap">
          <span>📞 Nous appeler : <a href="tel:+16132081075">613 208-1075</a></span>
          <span>📧 Courriel : <a href="mailto:AFrenchRDV@gmail.com">AFrenchRDV@gmail.com</a></span>
        </div>
      </div>

      <nav className="nav">
        <Link to="/" className="brand">
          <span className="brand-badge">AF</span>
          <span className="brand-title">
            <b>A French Rendez-vous</b>
            <small>Enhance your language, empower your future</small>
          </span>
        </Link>

        <div className="menu">
          <NavLink to="/" end>Accueil</NavLink>
          <a href="#training">Training</a>
          <a href="#coaching">Coaching</a>
          <a href="#potential">Potential</a>
          <a href="#learning">Learning</a>
          <a href="#psc">PSC Prep</a>
          <a href="#ai">AI Simulations</a>
          <a href="#reviews" className="cta">Reviews</a>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </nav>
    </header>
  )
}
