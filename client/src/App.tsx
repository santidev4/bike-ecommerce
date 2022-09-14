import Footer from './components/Footer'
import Nav from './components/Nav'
import Home from './pages/Home'
import Bikes from './pages/Bikes'
import Auth from './pages/Auth'
import Contact from './pages/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Accesories from './pages/Accesories'
import Admin from './pages/Admin'

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/bikes' element={<Bikes />} />
            <Route path='/accesories' element={<Accesories />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/auth' element={<Auth />} />
            <Route path='/admin' element={<Admin />} />
          
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
