import s from './PSCPrep.module.css'

export default function PSCPrep(){
  return (
    <div className="container">
      <header className={s.head}>
        <p className={s.kicker}>SLE A/B/C</p>
        <h1 className={s.title}>PSC Preparation</h1>
        <p className={s.lede}>Simulations ciblées, timing réel, feedback structuré. +10 % d’heures offertes si tu dois repasser.</p>
      </header>

      <div className={s.grid3}>
        <article className={s.card}><h3>Oral</h3><p>Mises en situation — clarté, précision, spontanéité.</p></article>
        <article className={s.card}><h3>Écrit</h3><p>Organisation, style neutre, erreurs fréquentes.</p></article>
        <article className={s.card}><h3>Écoute</h3><p>Stratégies d’anticipation, prise de notes.</p></article>
      </div>
    </div>
  )
}
