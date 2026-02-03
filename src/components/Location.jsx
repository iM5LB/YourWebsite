import { motion } from 'framer-motion'
import './Location.css'

function Location({ config }) {
  const infoItems = [
    {
      icon: "fa-map-marker-alt",
      title: "موقعنا",
      description: config.address
    },
    {
      icon: "fa-clock",
      title: "ساعات العمل",
      description: config.workingHours
    },
    {
      icon: "fa-phone",
      title: "اتصل بنا",
      description: config.phone
    }
  ]

  return (
    <section id="location" className="section location">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {config.locationTitle}
        <i className="fas fa-map-marker-alt" style={{marginRight: '10px'}}></i>
      </motion.h2>
      <motion.p 
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {config.locationSubtitle}
      </motion.p>
      
      <div className="location-content">
        <motion.div 
          className="location-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {infoItems.map((item, index) => (
            <motion.div 
              key={index}
              className="info-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ x: -10 }}
            >
              <div className="info-icon">
                <i className={`fas ${item.icon}`}></i>
              </div>
              <div className="info-text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="map-container"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {config?.mapUrl ? (
            <iframe
              src={config.mapUrl}
              width="100%"
              height="100%"
              style={{border: 0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${config?.siteName || 'Restaurant'} Location`}
              onError={(e) => {
                console.warn('Map loading error:', e);
                e.target.style.display = 'none';
              }}
            ></iframe>
          ) : (
            <div className="map-placeholder">
              <i className="fas fa-map-marked-alt"></i>
              <p>يرجى تكوين رابط الخريطة في ملف التكوين</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Location
