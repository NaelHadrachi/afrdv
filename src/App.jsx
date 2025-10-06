import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Programs from './pages/Programs.jsx'
import Extras from './pages/Extras.jsx'
import Story from './pages/Story.jsx'
import Contact from './pages/Contact.jsx'

export default function App(){
  return (
    <div className="site">
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/programs" element={<Programs/>}/>
          <Route path="/extras" element={<Extras/>}/>
          <Route path="/story" element={<Story/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}
