import s from './Coaching.module.css'

export default function Coaching(){
  return (
    <div className="container">
      <header className={s.head}>
        <p className={s.kicker}>Expert guidance</p>
        <h1 className={s.title}>Coaching</h1>
        <p className={s.lede}>Accompagnement 1:1, plan d’action réaliste, feedback calme et précis.</p>
      </header>

      <div className={s.grid}>
        <article className={s.card}><h3>Diagnostic</h3><p>Photographie ton niveau : forces, écarts, priorités.</p></article>
        <article className={s.card}><h3>Plan 4 semaines</h3><p>Objectifs micro, jalons clairs, charge réaliste.</p></article>
      </div>
    </div>
  )
}
