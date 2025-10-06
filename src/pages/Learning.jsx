import Page from '../components/Page.jsx'

export default function Learning(){
  return (
    <Page title="Learning" kicker="Learning by speaking">
      <p>On apprend en parlant : interactions guidées, reformulations, et mémos ultra courts à revoir.</p>
      <div className="grid2">
        <article className="card"><h4>Drills oraux</h4><p>Répéter → intégrer → fluidifier.</p></article>
        <article className="card"><h4>Mini-lectures</h4><p>Compréhension + extraction d’idées clés.</p></article>
      </div>
    </Page>
  )
}
