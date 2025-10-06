import s from './Contact.module.css'

export default function Contact(){
  return (
    <div className="container">
      <header className={s.head}>
        <p className={s.kicker}>Tell us your goal</p>
        <h1 className={s.title}>Contact</h1>
      </header>

      <form className={s.form} onSubmit={(e)=>e.preventDefault()}>
        <label>Nom
          <input required placeholder="Votre nom"/>
        </label>
        <label>Email
          <input type="email" required placeholder="vous@email.com"/>
        </label>
        <label>Message
          <textarea rows="5" placeholder="Parlez-nous de votre objectif"></textarea>
        </label>
        <button className={s.btn} type="submit">Envoyer</button>
      </form>

      <p className={s.note}>Ou écrivez-nous : <a href="mailto:AFrenchRDV@gmail.com">AFrenchRDV@gmail.com</a></p>
    </div>
  )
}
