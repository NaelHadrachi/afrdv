import s from './AISimulations.module.css'

export default function AISimulations(){
  return (
    <div className="container">
      <header className={s.head}>
        <p className={s.kicker}>Practice 24/7</p>
        <h1 className={s.title}>AI Simulations</h1>
        <p className={s.lede}>Scénarios IA : ajuste le niveau, la vitesse et la complexité.</p>
      </header>

      <div className={s.grid3}>
        <article className={s.card}><h3>Role-play</h3><p>Manager, collègue, client…</p></article>
        <article className={s.card}><h3>Questions rapides</h3><p>Réponses spontanées et précises.</p></article>
        <article className={s.card}><h3>Shadowing</h3><p>Accent, rythme, intonation.</p></article>
      </div>
    </div>
  )
}
