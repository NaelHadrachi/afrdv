import s from './Reviews.module.css'

const DATA = [
  {n:'Chloe M.',t:'The lessons are clear and practical.'},
  {n:'Josiane D.J.',t:'One of my best decisions!'},
  {n:'Jeffrey N.',t:'Fast, efficient, real confidence.'},
  {n:'Amira T.',t:'Excellent support, great teachers.'},
  {n:'Kevin L.',t:'Flexible scheduling helped a lot.'},
  {n:'Sophia R.',t:'Interactive, enjoyable, and easy.'},
  {n:'Elias D.',t:'Clear structure, amazing results.'},
  {n:'Natalie V.',t:'Real boost in conversation skills.'},
  {n:'Ahmed S.',t:'I passed my government test.'},
  {n:'Laura B.',t:'Simply the best school I’ve attended.'},
]

export default function Reviews(){
  return (
    <div className="container">
      <header className={s.head}>
        <p className={s.kicker}>What Our Students Say</p>
        <h1 className={s.title}>Reviews</h1>
      </header>

      <ul className={s.list}>
        {DATA.map((r,i)=>(
          <li key={i} className={s.item}>
            <span className={s.stars}>★★★★★</span>
            <p className={s.quote}>“{r.t}”</p>
            <p className={s.author}>— {r.n}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
