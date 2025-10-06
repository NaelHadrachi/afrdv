import Reviews from '../sections/Reviews.jsx'

export default function Home(){
  return (
    <>
      <section className="hero">
        <div className="txt">
          <h1>Enhance your language, empower your future</h1>
          <p>Top training programs to succeed. <b>Click here to level up!</b></p>
          <div className="actions">
            <a className="cta" href="#training">Explore Programs</a>
            <a href="/contact">Book a Call</a>
          </div>
        </div>
        <img src="/hero.jpg" alt="Office perspective"/>
      </section>

      <section className="commit">
        <h2>AI-Powered Oral SLE Simulations</h2>
        <p className="section-sub">We commit to standing by your side.</p>
        <div className="promise">
          <article>
            <h3>Our commitment to your success (EN)</h3>
            <p>
              At <b>A French Rendez-vous</b>, we believe in an honest, rigorous, learner-centered approach.
              Your success depends on your motivation and dedication—but it also depends on us, and we take this responsibility very seriously.
            </p>
            <p>
              If you need to retake the test without reaching your target level, <b>we’ll add 10% more preparation hours at no cost</b>.
              It’s our way to show how much we believe in our method—and in you.
            </p>
          </article>
          <article>
            <h3>Notre engagement pour votre réussite (FR)</h3>
            <p>
              Nous nous engageons à vos côtés. Votre réussite dépend de votre motivation et de votre investissement —
              mais aussi de nous, et nous prenons cette responsabilité très au sérieux.
            </p>
            <p>
              <b>Si vous devez vous représenter sans avoir atteint le niveau visé, nous offrons 10 % d’heures supplémentaires</b>
              pour vous aider à rebondir et réussir.
            </p>
          </article>
        </div>
        <small className="note">*Exemple : pour 30 h, 3 h offertes si vous devez repasser.</small>
      </section>

      <section id="training">
        <h2>Training</h2>
        <p className="section-sub">Personalized Training — online or in person.</p>
        <div className="grid">
          <article className="card">
            <h3>Personalized Training</h3>
            <p>Our programs adapt to your needs and learning style.</p>
          </article>
          <article className="card">
            <h3>Expert Coaching</h3>
            <p>Certified language coaches support your progress with proven strategies.</p>
          </article>
          <article className="card">
            <h3>Unleash Your Potential</h3>
            <p>Develop confidence, fluency and professional language skills in record time.</p>
          </article>
        </div>
      </section>

      <section id="coaching">
        <h2>Coaching</h2>
        <p className="section-sub">One-on-one guidance to keep you consistent and confident.</p>
        <div className="grid">
          <article className="card">
            <h3>Learning by Speaking</h3>
            <p>We prioritize real-world conversations and practical oral interaction.</p>
          </article>
          <article className="card">
            <h3>PSC Test Preparation</h3>
            <p>Targeted simulation sessions for government language exams.</p>
          </article>
          <article className="card">
            <h3>AI-Powered Simulations</h3>
            <p>Practice anytime with exclusive AI tools to strengthen your oral agility.</p>
          </article>
        </div>
      </section>

      <section id="potential"><h2>Potential</h2><p className="section-sub">Unlock your potential with clear steps and measurable milestones.</p></section>
      <section id="learning"><h2>Learning</h2><p className="section-sub">Learn faster by speaking more — guided by structured drills.</p></section>
      <section id="psc"><h2>PSC Prep</h2><p className="section-sub">SLE A/B/C simulations focused on oral delivery and accuracy.</p></section>
      <section id="ai"><h2>AI Simulations</h2><p className="section-sub">On-demand practice with scenario-based prompts.</p></section>

      <section id="reviews">
        <h2>What Our Students Say</h2>
        <p className="section-sub">Google Reviews</p>
        <Reviews/>
      </section>
    </>
  )
}
