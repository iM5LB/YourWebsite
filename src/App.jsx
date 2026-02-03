import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Widget from './components/Widget'
import Location from './components/Location'
import Footer from './components/Footer'
import useConfig from './hooks/useConfig'
import './App.css'

function App() {
  const { config, loading, error } = useConfig()

  useEffect(() => {
    if (!loading && config) {
      // Update page title dynamically
      document.title = `${config.siteName} | ${config.heroSubtitle}`
      
      // Update meta description
      let metaDescription = document.querySelector('meta[name="description"]')
      if (!metaDescription) {
        metaDescription = document.createElement('meta')
        metaDescription.name = 'description'
        document.head.appendChild(metaDescription)
      }
      metaDescription.content = config.seoDescription
      
      // Update meta keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]')
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta')
        metaKeywords.name = 'keywords'
        document.head.appendChild(metaKeywords)
      }
      metaKeywords.content = config.seoKeywords
      
      // Apply font configuration
      document.documentElement.style.setProperty('--primary-font', config.primaryFont)
      document.documentElement.style.setProperty('--secondary-font', config.secondaryFont)
      
      // Apply color configuration
      if (config.colors) {
        Object.entries(config.colors).forEach(([key, value]) => {
          const cssVarName = `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`
          document.documentElement.style.setProperty(cssVarName, value)
        })
      }
    }
  }, [config, loading])

  if (loading) {
    return (
      <div className="app loading">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>جاري التحميل...</p>
        </div>
      </div>
    )
  }

  if (error) {
    console.warn('Config loading error:', error)
  }

  return (
    <div className="app">
      <Navbar config={config} />
      <Hero config={config} />
      <About config={config} />
      <Menu config={config} />
      <Widget config={config} />
      <Location config={config} />
      <Footer config={config} />
    </div>
  )
}

export default App