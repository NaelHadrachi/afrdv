import { NavLink, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./Header.css";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);

  // Fermer le menu mobile lorsqu'on clique un lien
  useEffect(() => {
    const el = navRef.current;
    if (!el) return;
    const onClick = (e) => {
      const a = e.target.closest("a");
      if (a) setMobileOpen(false);
    };
    el.addEventListener("click", onClick);
    return () => el.removeEventListener("click", onClick);
  }, []);

  return (
    <header className="header">
      <div className="nav-bar">
        <div className="nav-inner container">
          {/* Brand */}
          <Link to="/" className="brand" aria-label="Accueil – A French Rendez-vous">
            <span className="logo">AFR</span>
            <div className="brand-text">
              <b>A French Rendez-vous</b>
            </div>
          </Link>

          {/* Navigation desktop */}
          <nav ref={navRef} className="desktop-nav">
            <ul className="nav">
              <li className="nav-item">
                <NavLink to="/" end className="nav-link">Home</NavLink>
              </li>

              <li className="nav-item has-dropdown">
                <button className="nav-link" aria-haspopup="true">
                  Our Approach
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 10l5 5 5-5z"/>
                  </svg>
                </button>
                <ul className="dropdown-menu">
                  <li><NavLink to="/platform" className="dropdown-link">Learning Platform</NavLink></li>
                  <li><NavLink to="/pedagogy" className="dropdown-link">Teaching Method</NavLink></li>
                  <li><NavLink to="/ai" className="dropdown-link">AI in Learning</NavLink></li>
                </ul>
              </li>

              <li className="nav-item has-dropdown">
                <button className="nav-link" aria-haspopup="true">
                  Learn French
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 10l5 5 5-5z"/>
                  </svg>
                </button>
                <ul className="dropdown-menu">
                  <li><NavLink to="/learning-path" className="dropdown-link">Learning Path</NavLink></li>
                  <li><NavLink to="/psc-prep" className="dropdown-link">PSC Preparation</NavLink></li>
                  <li><NavLink to="/delf" className="dropdown-link">DELF / DALF</NavLink></li>
                  <li><NavLink to="/tef" className="dropdown-link">TEF / TCF</NavLink></li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink to="/oral-assessment" className="nav-link">Oral Assessment</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/faq" className="nav-link">FAQ</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">Contact</NavLink>
              </li>
            </ul>
          </nav>

          {/* CTA Section */}
          <div className="header-actions">
            <Link to="/login" className="login-btn">Student Access</Link>
          </div>

          {/* Burger mobile */}
          <button
            className={`hamburger ${mobileOpen ? "active" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Navigation mobile */}
      <nav ref={navRef} className={`mobile-nav ${mobileOpen ? "active" : ""}`}>
        <div className="mobile-nav-content">
          <ul className="mobile-nav-list">
            <li><NavLink to="/" end onClick={() => setMobileOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/platform" onClick={() => setMobileOpen(false)}>Learning Platform</NavLink></li>
            <li><NavLink to="/pedagogy" onClick={() => setMobileOpen(false)}>Teaching Method</NavLink></li>
            <li><NavLink to="/learning-path" onClick={() => setMobileOpen(false)}>Learning Path</NavLink></li>
            <li><NavLink to="/psc-prep" onClick={() => setMobileOpen(false)}>PSC Preparation</NavLink></li>
            <li><NavLink to="/oral-assessment" onClick={() => setMobileOpen(false)}>Oral Assessment</NavLink></li>
            <li><NavLink to="/faq" onClick={() => setMobileOpen(false)}>FAQ</NavLink></li>
            <li><NavLink to="/contact" onClick={() => setMobileOpen(false)}>Contact</NavLink></li>
            <li><NavLink to="/login" onClick={() => setMobileOpen(false)} className="mobile-login">Student Access</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}