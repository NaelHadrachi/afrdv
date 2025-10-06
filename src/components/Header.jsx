import { NavLink, Link } from 'react-router-dom'

export default function Header(){
  return (
    <header className="header">
      <div className="topline">
        <span>📞 <a href="tel:+16132081075">613 208-1075</a></span>
        <span>📧 <a href="mailto:AFrenchRDV@gmail.com">AFrenchRDV@gmail.com</a></span>
      </div>

      <nav className="nav">
        <Link to="/" className="brand">
          <span className="logo">AF</span>
          <div className="brandtext">
            <b>A French Rendez-vous</b>
            <small>Enhance your language, empower your future</small>
          </div>
        </Link>

        <div className="links">
          <NavLink to="/training">Training</NavLink>
          <NavLink to="/coaching">Coaching</NavLink>
          <NavLink to="/potential">Potential</NavLink>
          <NavLink to="/learning">Learning</NavLink>
          <NavLink to="/psc-prep">PSC Prep</NavLink>
          <NavLink to="/ai-simulations">AI</NavLink>
          <NavLink to="/reviews">Reviews</NavLink>
          <NavLink to="/contact" className="btn">Contact</NavLink>
        </div>
      </nav>
    </header>
  )
}
