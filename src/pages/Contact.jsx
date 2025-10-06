import Page from '../components/Page.jsx'

export default function Contact(){
  return (
    <Page title="Contact" kicker="Tell us your goal">
      <form className="form" onSubmit={(e)=>e.preventDefault()}>
        <label>Nom
          <input required placeholder="Votre nom"/>
        </label>
        <label>Email
          <input type="email" required placeholder="vous@email.com"/>
        </label>
        <label>Message
          <textarea rows="5" placeholder="Parlez-nous de votre objectif"></textarea>
        </label>
        <button className="btn">Envoyer</button>
      </form>
      <p className="muted">Ou écrivez-nous directement : <a href="mailto:AFrenchRDV@gmail.com">AFrenchRDV@gmail.com</a></p>
    </Page>
  )
}
