import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Header from './components/header'
import About from './pages/about'
import Contact from './pages/contact'
import Footer from './components/footer'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  )
}