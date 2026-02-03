import { useState, useEffect } from 'react'

// Fallback config in case external config fails to load
const fallbackConfig = {
  siteName: "موقعك",
  logo: "/logo.jpg",
  navItems: [
    { id: 'home', label: 'الرئيسية' },
    { id: 'about', label: 'من نحن' },
    { id: 'menu', label: 'المنيو' },
    { id: 'instagram', label: 'إنستجرام' },
    { id: 'location', label: 'تواصل معنا' }
  ],
  seoDescription: "موقع رائع بتصميم جذاب ومحتوى متكامل",
  seoKeywords: "موقع, تصميم, محتوى, مشروع, احترافية",
  heroTitle: "موقعك",
  heroSubtitle: "كل شي فيه قابل للتعديل على ذوقك",
  heroTagline: "Everything can be customized to suit your preferences",
  floatingIcons: ['☕', '🥐', '🍰', '🧁', '🍪', '🥖', '🫖', '🍵'],
  aboutTitle: "عن موقعك",
  aboutText: "موقع رائع بلا شك، يتميز بتصميم جذاب ومحتوى متكامل.",
  menuTitle: "المنيو",
  menuSubtitle: "أدرج قائمة منتجاتك بسهوله",
  googleSheetUrl: "",
  instagramTitle: "تابعنا على إنستجرام",
  instagramWidgetId: "pWooJWP7qVqV9E4QA",
  locationTitle: "موقعنا",
  locationSubtitle: "زرنا واستمتع بتجربة فريدة",
  address: "ولاية إزكي، سلطنة عمان",
  workingHours: "يومياً من الساعة 8:00 صباحاً وحتى الساعة 11:00 مساءً.",
  phone: "+968 XXXX XXXX",
  mapUrl: "",
  footerTagline: "كل شي فيه قابل للتعديل",
  instagramUrl: "",
  tiktokUrl: "",
  facebookUrl: "",
  twitterUrl: "",
  youtubeUrl: "",
  whatsappNumber: "",
  primaryFont: "'Tajawal', 'Arial', sans-serif",
  secondaryFont: "'Poppins', 'Tajawal', sans-serif",
  colors: {
    cream: '#f5f1e8',
    beige: '#e8dcc8',
    brown: '#8b6f47',
    darkBrown: '#6b5439',
    burgundy: '#7d3c3c',
    darkBurgundy: '#5c2626',
    slate: '#7a8b99',
    lightGrey: '#f9f7f4'
  }
}

export const useConfig = () => {
  const [config, setConfig] = useState(fallbackConfig)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadConfig = async () => {
      try {
        const response = await fetch('/config.json')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const externalConfig = await response.json()
        setConfig(externalConfig)
        setError(null)
      } catch (err) {
        console.warn('Failed to load external config, using fallback:', err)
        setError(err.message)
        // Keep using fallback config
      } finally {
        setLoading(false)
      }
    }

    loadConfig()
  }, [])

  return { config, loading, error }
}

export default useConfig