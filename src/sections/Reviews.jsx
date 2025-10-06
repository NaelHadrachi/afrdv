import { useEffect, useRef, useState } from 'react'

const REVIEWS = [
  {n:'Chloe M.',t:'“The lessons are clear and practical. I really enjoyed learning here!”'},
  {n:'Josiane D.J.',t:'“Joining A French Rendez-vous was one of my best decisions!”'},
  {n:'Jeffrey N.',t:'“Fast, efficient, and gives real speaking confidence.”'},
  {n:'Amira T.',t:'“Excellent support and great teachers. Highly recommended.”'},
  {n:'Kevin L.',t:'“Flexible scheduling really helped with my work-life balance.”'},
  {n:'Sophia R.',t:'“Interactive lessons made learning French enjoyable and easy.”'},
  {n:'Elias D.',t:'“Clear structure, helpful exercises, amazing results.”'},
  {n:'Natalie V.',t:'“A real boost in my French conversation skills!”'},
  {n:'Ahmed S.',t:'“Thanks to them I passed my government language test.”'},
  {n:'Laura B.',t:'“Simply the best language school I’ve attended.”'}
]

export default function Reviews(){
  const trackRef = useRef(null)
  const [idx, setIdx] = useState(0)
  const next = ()=> setIdx(i => (i+1) % REVIEWS.length)
  const prev = ()=> setIdx(i => (i-1+REVIEWS.length) % REVIEWS.length)

  useEffect(()=>{ const t = setInterval(next, 4500); return ()=>clearInterval(t) },[])
  useEffect(()=>{ if(trackRef.current){ trackRef.current.style.transform = `translateX(-${idx*100}%)` }},[idx])

  return (
    <div className="reviews">
      <div className="viewport" aria-live="polite">
        <div className="track" ref={trackRef}>
          {REVIEWS.map((r,i)=>(
            <article className="review" key={i}>
              <div className="g-badge">Google</div>
              <p className="stars">★★★★★</p>
              <p className="quote">{r.t}</p>
              <p className="author">— {r.n}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="controls">
        <button onClick={prev} aria-label="Précédent">←</button>
        <button onClick={next} aria-label="Suivant">→</button>
      </div>
    </div>
  )
}
