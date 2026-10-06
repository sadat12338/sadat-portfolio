import { useState } from 'react'
import { navLinks, profile } from '../data'

export default function Navbar({ active }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#home" className="logo">{profile.name}</a>
        <button className="burger" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? '✕' : '☰'}
        </button>
        <nav className={open ? 'links open' : 'links'}>
          {navLinks.map((id) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} onClick={() => setOpen(false)}>
              {id}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
