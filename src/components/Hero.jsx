import React from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

function Hero({ config }) {
  const floatingVariants = {
    animate: (i) => ({
      y: [0, -30, 0],
      rotate: [0, 15, -10, 0],
      x: [0, 10, -5, 0],
      transition: {
        duration: 8 + i,
        repeat: Infinity,
        delay: i * 0.5
      }
    })
  }

  return (
    <section id="home" className="hero">
      {config.floatingIcons.map((icon, index) => (
        <motion.div
          key={index}
          className={`floating-item item${index + 1}`}
          custom={index}
          animate="animate"
          variants={floatingVariants}
        >
          {icon}
        </motion.div>
      ))}
      
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {config.heroTitle}
        </motion.h1>
        <motion.h2 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {config.heroSubtitle}
        </motion.h2>
        <motion.p 
          className="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {config.heroTagline}
        </motion.p>
        <motion.div 
          className="cta-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a href="#menu" className="btn btn-primary">
            <i className="fas fa-coffee"></i>
            المنيو
          </a>
          <a href="#location" className="btn btn-secondary">
            <i className="fas fa-map-marker-alt"></i>
            زرنا الآن
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
