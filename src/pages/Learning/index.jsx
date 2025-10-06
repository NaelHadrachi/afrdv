import s from './Learning.module.css'

export default function Learning(){
  return (
    <div className="container">
      <header className={s.head}>
        <p className={s.kicker}>Learning by speaking</p>
        <h1 className={s.title}>Learning</h1>
        <p className={s.lede}>On apprend en parlant : interactions guidées, reformulations, mémos courts.</p>
      </header>

      <div className={s.grid}>
        <article className={s.card}><h3>Drills oraux</h3><p>Vitesse – clarté – précision.</p></article>
        <article className={s.card}><h3>Mini-lectures</h3><p>Compréhension + extraction d’idées clés.</p></article>
      </div>
    </div>
  )
}
