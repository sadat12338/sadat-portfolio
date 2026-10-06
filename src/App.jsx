import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { navLinks } from './data'

export default function App() {
  const [active, setActive] = useState('home')

  // Highlights the navbar link of the section currently on screen
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    navLinks.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <Navbar active={active} />
      <main>
        <Hero /><About /><Skills /><Services />
        <Projects /><Education /><Contact />
      </main>
      <Footer />
    </>
  )
}
