import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import Home from './pages/Home'
import Training from './pages/Training'
import Coaching from './pages/Coaching'
import Potential from './pages/Potential'
import Learning from './pages/Learning'
import PSCPrep from './pages/PSCPrep'
import AISimulations from './pages/AISimulations'
import Reviews from './pages/Reviews'
import Contact from './pages/Contact'

export default function App(){
  return (
    <div className="site">
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/training" element={<Training/>}/>
          <Route path="/coaching" element={<Coaching/>}/>
          <Route path="/potential" element={<Potential/>}/>
          <Route path="/learning" element={<Learning/>}/>
          <Route path="/psc-prep" element={<PSCPrep/>}/>
          <Route path="/ai-simulations" element={<AISimulations/>}/>
          <Route path="/reviews" element={<Reviews/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}
