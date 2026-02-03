import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus('')

    try {
      // EmailJS configuration
      const serviceId = 'YOUR_SERVICE_ID' // Replace with your EmailJS service ID
      const templateId = 'YOUR_TEMPLATE_ID' // Replace with your EmailJS template ID
      const publicKey = 'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'NWA CAFE', // Your business name
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Email sending failed:', error)
      setStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="section contact">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        تواصل معنا
      </motion.h2>
      <motion.p 
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        نحن هنا للإجابة على استفساراتك
      </motion.p>
      
      <motion.div 
        className="contact-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <form className="contact-form" onSubmit={handleSubmit}>
          {status === 'success' && (
            <div className="status-message success">
              <i className="fas fa-check-circle"></i>
              تم إرسال رسالتك بنجاح! سنرد عليك قريباً.
            </div>
          )}
          
          {status === 'error' && (
            <div className="status-message error">
              <i className="fas fa-exclamation-circle"></i>
              حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.
            </div>
          )}
          
          <div className="form-group">
            <label>الاسم</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required 
              placeholder="أدخل اسمك"
              disabled={isLoading}
            />
          </div>
          
          <div className="form-group">
            <label>البريد الإلكتروني</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required 
              placeholder="example@email.com"
              disabled={isLoading}
            />
          </div>
          
          <div className="form-group">
            <label>الرسالة</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              required 
              placeholder="اكتب رسالتك هنا..."
              disabled={isLoading}
            ></textarea>
          </div>
          
          <motion.button 
            type="submit" 
            className="btn btn-primary"
            whileHover={{ scale: isLoading ? 1 : 1.05 }}
            whileTap={{ scale: isLoading ? 1 : 0.95 }}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <i className="fas fa-spinner fa-spin"></i>
                جاري الإرسال...
              </>
            ) : (
              <>
                <i className="fas fa-paper-plane"></i>
                إرسال
              </>
            )}
          </motion.button>
        </form>
      </motion.div>
    </section>
  )
}

export default Contact
