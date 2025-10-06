import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Training from './pages/Training.jsx'
import Coaching from './pages/Coaching.jsx'
import Potential from './pages/Potential.jsx'
import Learning from './pages/Learning.jsx'
import PSC from './pages/PSC.jsx'
import AISim from './pages/AISim.jsx'
import Reviews from './sections/Reviews.jsx'
import Contact from './pages/Contact.jsx'
import './styles.css'

export default function App(){
  return (
    <div className="site">
      <Header/>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/training" element={<Training/>}/>
          <Route path="/coaching" element={<Coaching/>}/>
          <Route path="/potential" element={<Potential/>}/>
          <Route path="/learning" element={<Learning/>}/>
          <Route path="/psc-prep" element={<PSC/>}/>
          <Route path="/ai-simulations" element={<AISim/>}/>
          <Route path="/reviews" element={<Reviews/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}
