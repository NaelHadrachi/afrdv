export default function Page({title, kicker, children, cta}){
  return (
    <section className="page">
      <header className="pagehead">
        {kicker && <p className="kicker">{kicker}</p>}
        <h1>{title}</h1>
        {cta}
      </header>
      <div className="pagebody">
        {children}
      </div>
    </section>
  )
}
