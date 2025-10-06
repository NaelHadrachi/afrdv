import Page from '../components/Page.jsx'

export default function Coaching(){
  return (
    <Page title="Coaching" kicker="Expert guidance">
      <p>Accompagnement 1:1, plan d’action, accountability. On priorise la parole spontanée et la correction calme.</p>
      <div className="grid2">
        <article className="card"><h4>Diagnostic</h4><p>Évalue ton niveau et les écarts.</p></article>
        <article className="card"><h4>Plan 4 semaines</h4><p>Objectifs réalistes, jalons clairs.</p></article>
      </div>
    </Page>
  )
}
