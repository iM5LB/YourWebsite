import './Footer.css'

function Footer({ config }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo-container">
              <img 
                src={config.logo} 
                alt={config.siteName} 
                className="footer-logo-img"
                loading="lazy"
                decoding="async"
              />
              <div className="brand-text">
                <h3 className="footer-logo">{config.siteName}</h3>
                <p className="footer-tagline">{config.footerTagline}</p>
              </div>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>الصفحات</h4>
              <ul>
                <li><a href="#about">من نحن</a></li>
                <li><a href="#menu">المنيو</a></li>
                <li><a href="#instagram">انستغرام</a></li>
                <li><a href="#location">الموقع</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>تابعنا</h4>
              <div className="social-links">
                {config.instagramUrl && (
                  <a href={config.instagramUrl} target="_blank" rel="noopener noreferrer" className="social-link instagram-link">
                    <i className="fab fa-instagram"></i>
                    <span>Instagram</span>
                  </a>
                )}
                {config.tiktokUrl && (
                  <a href={config.tiktokUrl} target="_blank" rel="noopener noreferrer" className="social-link tiktok-link">
                    <i className="fab fa-tiktok"></i>
                    <span>TikTok</span>
                  </a>
                )}
                {config.facebookUrl && (
                  <a href={config.facebookUrl} target="_blank" rel="noopener noreferrer" className="social-link facebook-link">
                    <i className="fab fa-facebook"></i>
                    <span>Facebook</span>
                  </a>
                )}
                {config.twitterUrl && (
                  <a href={config.twitterUrl} target="_blank" rel="noopener noreferrer" className="social-link twitter-link">
                    <i className="fab fa-twitter"></i>
                    <span>Twitter</span>
                  </a>
                )}
                {config.youtubeUrl && (
                  <a href={config.youtubeUrl} target="_blank" rel="noopener noreferrer" className="social-link youtube-link">
                    <i className="fab fa-youtube"></i>
                    <span>YouTube</span>
                  </a>
                )}
                {config.whatsappNumber && (
                  <a href={`https://wa.me/${config.whatsappNumber.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="social-link whatsapp-link">
                    <i className="fab fa-whatsapp"></i>
                    <span>WhatsApp</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} {config.siteName}. جميع الحقوق محفوظة.</p>
          <div className="developer-credit">
            <p>
              مطور الموقع{' '}
              <a 
                href="https://im5lb.github.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="developer-link"
              >
                iM5LB
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
