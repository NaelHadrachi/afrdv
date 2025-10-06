export default function Contact(){
  return (
    <section>
      <h2>Contact</h2>
      <p className="section-sub">Tell us your goal and we’ll build a plan.</p>
      <form className="card" onSubmit={(e)=>e.preventDefault()}>
        <label>Name<br/><input required placeholder="Your name"/></label>
        <label>Email<br/><input type="email" required placeholder="your@email.com"/></label>
        <label>Message<br/><textarea rows="5" placeholder="Your message"></textarea></label>
        <button className="cta" type="submit">Send</button>
      </form>
    </section>
  )
}
