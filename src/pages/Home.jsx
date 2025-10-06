import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <>
      <section className="hero">
        <div>
          <p className="kicker">Bienvenue</p>
          <h1>Enhance your language,<br/>empower your future</h1>
          <p className="lede">Top training programs to succeed — coaching d’experts, préparation PSC, et simulations IA.</p>
          <div className="row">
            <Link className="btn" to="/training">Voir Training</Link>
            <Link className="btn ghost" to="/psc-prep">PSC Prep</Link>
          </div>
        </div>
      </section>

      <section className="grid3">
        <Link to="/training" className="card">
          <h3>Training</h3>
          <p>Parcours personnalisés, objectifs mesurables.</p>
        </Link>
        <Link to="/coaching" className="card">
          <h3>Coaching</h3>
          <p>Coachs certifiés, feedback concret.</p>
        </Link>
        <Link to="/ai-simulations" className="card">
          <h3>AI Simulations</h3>
          <p>Pratique orale à la demande, 24/7.</p>
        </Link>
      </section>
    </>
  )
}
