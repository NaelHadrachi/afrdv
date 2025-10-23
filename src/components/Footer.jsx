import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Section principale */}
        <div className="footer-main">
          <div className="footer-brand">
            <h3 className="footer-logo">A French Rendez-vous</h3>
            <p className="footer-description">
              Votre partenaire d'excellence pour la préparation aux examens 
              ministériels de français. Formation de qualité pour les 
              fonctionnaires depuis plus de 15 ans.
            </p>
            <div className="footer-contact">
              <a href="mailto:AFrenchRDV@gmail.com" className="contact-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                AFrenchRDV@gmail.com
              </a>
              <span className="contact-location">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Ottawa, Canada
              </span>
            </div>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4>Formations</h4>
              <ul>
                <li><Link to="/formations">Cours intensifs</Link></li>
                <li><Link to="/preparation">Préparation examens</Link></li>
                <li><Link to="/groupes">Cours en groupe</Link></li>
                <li><Link to="/individuels">Cours individuels</Link></li>
              </ul>
            </div>

            <div className="link-group">
              <h4>Ressources</h4>
              <ul>
                <li><Link to="/simulations">Simulations</Link></li>
                <li><Link to="/exercices">Exercices pratiques</Link></li>
                <li><Link to="/guides">Guides d'étude</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
              </ul>
            </div>

            <div className="link-group">
              <h4>Entreprise</h4>
              <ul>
                <li><Link to="/about">À propos</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/confidentialite">Confidentialité</Link></li>
                <li><Link to="/conditions">Conditions</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section basse */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <span>© {currentYear} A French Rendez-vous. Tous droits réservés.</span>
          </div>
          
          <div className="footer-social">
            <a href="#" aria-label="LinkedIn" className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.016 10.016 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}