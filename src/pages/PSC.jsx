import Page from '../components/Page.jsx'

export default function PSC(){
  return (
    <Page title="PSC Preparation" kicker="SLE A/B/C">
      <p>Simulations ciblées, timing réel, feedback structuré. Notre engagement : <b>+10 % d’heures offertes</b> si tu dois repasser.</p>
      <div className="grid3">
        <article className="card"><h4>Oral</h4><p>Mises en situation, clarté, précision.</p></article>
        <article className="card"><h4>Écrit</h4><p>Organisation, corrections clés.</p></article>
        <article className="card"><h4>Écoute</h4><p>Stratégies d’anticipation & prise de notes.</p></article>
      </div>
    </Page>
  )
}
