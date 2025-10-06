export default function Footer(){
  const y = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footrow">
        <span>© {y} A French Rendez-vous</span>
        <span>Ottawa, Canada — <a href="mailto:AFrenchRDV@gmail.com">AFrenchRDV@gmail.com</a></span>
      </div>
    </footer>
  )
}
