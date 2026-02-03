import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Navbar.css'

function Navbar({ config }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Detect active section
      const sections = ['home', 'about', 'menu', 'instagram', 'location']
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const navItems = config.navItems

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''} ${activeSection}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="logo" onClick={() => scrollToSection('home')}>
        <img src={config.logo} alt={config.siteName} className="logo-image" />
        <span>{config.siteName}</span>
      </div>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        {navItems.map((item) => (
          <li key={item.id}>
            <a 
              onClick={() => scrollToSection(item.id)}
              className={activeSection === item.id ? 'active' : ''}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>
    </motion.nav>
  )
}

export default Navbar
