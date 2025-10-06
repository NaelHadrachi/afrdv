export default function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer>
      <div className="footer-inner">
        <div>© {year} A French Rendez-vous — All rights reserved</div>
        <div>Ottawa, Canada • <a href="mailto:AFrenchRDV@gmail.com">AFrenchRDV@gmail.com</a></div>
      </div>
    </footer>
  )
}
