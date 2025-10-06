import Page from '../components/Page.jsx'

export default function Training(){
  return (
    <Page title="Training" kicker="Programs">
      <ul className="list">
        <li>
          <h4>Essentiel</h4>
          <p>2 séances/sem • Grammaire + oral de base • Devoirs guidés</p>
        </li>
        <li>
          <h4>PSC Focus</h4>
          <p>Prépa SLE A/B/C • Simulations ciblées • Écoute + rédaction</p>
        </li>
        <li>
          <h4>Intensif</h4>
          <p>4 séances/sem • Objectif certification rapide • Suivi hebdo</p>
        </li>
      </ul>
    </Page>
  )
}
