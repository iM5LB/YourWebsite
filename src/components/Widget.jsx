import { useEffect } from 'react'
import { motion } from 'framer-motion'
import ErrorBoundary from './ErrorBoundary'
import './Widget.css'
import './ErrorBoundary.css'

function Widget({ config }) {
  useEffect(() => {
    const widgetId = config?.socialFeedWidgetId || config?.instagramWidgetId;
    if (!widgetId) return;

    // Enhanced error handling for Elfsight widget
    const initializeWidget = () => {
      try {
        // Wait for Elfsight platform to be available
        if (window.eapps && window.eapps.ready) {
          window.eapps.ready(() => {
            removeElfsightBranding();
          });
        } else {
          // Fallback if eapps is not available
          setTimeout(removeElfsightBranding, 3000);
        }
      } catch (error) {
        console.warn('Widget initialization error:', error);
        // Still try to remove branding as fallback
        setTimeout(removeElfsightBranding, 3000);
      }
    };

    // Enhanced branding removal with better error handling
    const removeElfsightBranding = () => {
      try {
        // Remove by href with safer DOM manipulation
        const elfsightLinks = document.querySelectorAll('a[href*="elfsight.com"]');
        elfsightLinks.forEach(link => {
          try {
            if (link && link.parentNode && link.parentNode.contains(link)) {
              link.style.display = 'none';
              link.remove();
            }
          } catch (e) {
            // Ignore individual link removal errors
          }
        });

        // Remove by title with safer DOM manipulation
        const titleLinks = document.querySelectorAll('a[title*="Free Instagram"], a[title*="Social Feed"]');
        titleLinks.forEach(link => {
          try {
            if (link && link.parentNode && link.parentNode.contains(link)) {
              link.style.display = 'none';
              link.remove();
            }
          } catch (e) {
            // Ignore individual link removal errors
          }
        });

        // Hide any remaining branding elements
        const brandingElements = document.querySelectorAll('[class*="elfsight-branding"], [class*="eapps-link"]');
        brandingElements.forEach(element => {
          try {
            element.style.display = 'none';
          } catch (e) {
            // Ignore styling errors
          }
        });
      } catch (error) {
        console.warn('Branding removal error:', error);
      }
    };

    // Initialize with delay to ensure DOM is ready
    const timeout = setTimeout(initializeWidget, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [config?.socialFeedWidgetId, config?.instagramWidgetId]);

  // Error boundary for the widget
  const handleWidgetError = (error) => {
    console.warn('Widget error:', error);
    return null;
  };

  return (
    <section id="widget" className="section widget">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {config?.socialFeedTitle || config?.instagramTitle || 'تابعونا على وسائل التواصل'}
      </motion.h2>
      <motion.p 
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        
      </motion.p>

      <motion.div 
        className="widget-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="widget-feed">
          <div className="widget-wrapper" dir="ltr">
            <ErrorBoundary>
              {config?.socialFeedWidgetId || config?.instagramWidgetId ? (
                <div 
                  className={`elfsight-app-${config.socialFeedWidgetId || config.instagramWidgetId}`} 
                  data-elfsight-app-lazy
                  onError={handleWidgetError}
                ></div>
              ) : (
                <div className="widget-placeholder">
                  <i className="fas fa-cog"></i>
                  <p>يرجى تكوين معرف الويدجت في ملف التكوين</p>
                </div>
              )}
            </ErrorBoundary>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Widget