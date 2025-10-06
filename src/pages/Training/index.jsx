import s from './Training.module.css'

export default function Training(){
  return (
    <div className="container">
      <header className={s.head}>
        <p className={s.kicker}>Programs</p>
        <h1 className={s.title}>Training</h1>
        <p className={s.lede}>Trois parcours simples. Choisis le rythme qui convient à ton objectif.</p>
      </header>

      <div className={s.grid}>
        <article className={s.card}><h3>Essentiel</h3><p>2 séances/sem • Grammaire + oral de base • Devoirs guidés</p></article>
        <article className={s.card}><h3>PSC Focus</h3><p>Prépa SLE A/B/C • Simulations • Écoute • Rédaction</p></article>
        <article className={s.card}><h3>Intensif</h3><p>4 séances/sem • Objectif certification • Suivi hebdo</p></article>
      </div>
    </div>
  )
}
