import s from './Home.module.css'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <>
      <section className={s.hero}>
        <div className="container">
          <p className={s.kicker}>Bienvenue</p>
          <h1 className={s.title}>Enhance your language, empower your future</h1>
          <p className={s.lede}>Coaching d’experts, préparation PSC, et simulations IA accessibles 24/7.</p>
          <div className={s.actions}>
            <Link className={s.btn} to="/training">Voir Training</Link>
            <Link className={s.btnGhost} to="/psc-prep">PSC Prep</Link>
          </div>
        </div>
      </section>

      <section className="container">
        <ul className={s.tiles}>
          <li><Link to="/training"><h3>Training</h3><p>Parcours personnalisés.</p></Link></li>
          <li><Link to="/coaching"><h3>Coaching</h3><p>Feedback clair, 1:1.</p></Link></li>
          <li><Link to="/ai-simulations"><h3>AI</h3><p>Pratique 24/7.</p></Link></li>
        </ul>
      </section>
    </>
  )
}
