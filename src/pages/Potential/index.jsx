import s from './Potential.module.css'

export default function Potential(){
  return (
    <div className="container">
      <header className={s.head}>
        <p className={s.kicker}>Confidence & impact</p>
        <h1 className={s.title}>Potential</h1>
        <p className={s.lede}>Automatismes, lexique pro, aisance en situation réelle.</p>
      </header>

      <ol className={s.steps}>
        <li>Micro-drills quotidiens</li>
        <li>Scénarios métier</li>
        <li>Feedback ciblé</li>
      </ol>
    </div>
  )
}
