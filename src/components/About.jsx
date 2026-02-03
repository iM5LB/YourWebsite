import React from 'react'
import { motion } from 'framer-motion'
import './About.css'

function About({ config }) {
  return (
    <section id="about" className="section about">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {config.aboutTitle}
      </motion.h2>
      
      <div className="about-content">
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {config.aboutText.split('\n').map((line, index) => (
            <p key={index}>
              {line}
            </p>
          ))}
        </motion.div>
        
        <motion.div 
          className="about-image"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src={config.logo} alt={config.siteName} className="about-logo" />
        </motion.div>
      </div>
    </section>
  )
}

export default About
