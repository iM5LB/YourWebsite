import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import './Menu.css'

function Menu({ config }) {
  const [menuItems, setMenuItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(12)
  
  const SHEET_URL = config.googleSheetUrl

  useEffect(() => {
    fetchMenuFromSheet()
  }, [])

  const fetchMenuFromSheet = async () => {
    try {
      const response = await fetch(SHEET_URL)
      const csvText = await response.text()
      
      const rows = csvText.split('\n').map(row => {
        const values = []
        let currentValue = ''
        let insideQuotes = false
        
        for (let char of row) {
          if (char === '"') {
            insideQuotes = !insideQuotes
          } else if (char === ',' && !insideQuotes) {
            values.push(currentValue.trim())
            currentValue = ''
          } else {
            currentValue += char
          }
        }
        values.push(currentValue.trim())
        return values
      })

      const items = rows.slice(1)
        .filter(row => row[0] && row[0].length > 0)
        .map(row => {
          const category = row[3] || ''
          return {
            name: row[0] || '',
            description: row[1] || '',
            image: row[2] || '',
            category: category,
            price: row[4] || ''
          }
        })

      setMenuItems(items)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching menu:', error)
      setMenuItems([])
      setLoading(false)
    }
  }



  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(menuItems.map(item => item.category).filter(Boolean))]
    return ['all', ...uniqueCategories]
  }, [menuItems])

  const filteredItems = useMemo(() => {
    let filtered = menuItems

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory)
    }

    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    return filtered
  }, [menuItems, selectedCategory, searchTerm])

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage)
  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return filteredItems.slice(startIndex, startIndex + itemsPerPage)
  }, [filteredItems, currentPage, itemsPerPage])

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategory, searchTerm])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  if (loading) {
    return (
      <section id="menu" className="section menu">
        <div className="loading-spinner">
          <i className="fas fa-spinner fa-spin"></i>
          <p>جاري تحميل المنيو...</p>
        </div>
      </section>
    )
  }

  if (menuItems.length === 0) {
    return (
      <section id="menu" className="section menu">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {config.menuTitle}
        </motion.h2>
        <div className="empty-menu">
          <i className="fas fa-coffee"></i>
          <p>لا توجد عناصر في المنيو حالياً</p>
          <p className="small-text">يرجى إضافة عناصر في جدول Google Sheets</p>
        </div>
      </section>
    )
  }

  return (
    <section id="menu" className="section menu">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {config.menuTitle} <i className="fas fa-coffee" style={{marginLeft: '10px'}}></i>
      </motion.h2>
      <motion.p 
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {config.menuSubtitle}
      </motion.p>

      {/* Search Bar */}
      <motion.div 
        className="menu-search"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="search-container">
          <i className="fas fa-search search-icon"></i>
          <input
            type="text"
            placeholder="ابحث في المنيو..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          {searchTerm && (
            <button 
              className="clear-search"
              onClick={() => setSearchTerm('')}
            >
              <i className="fas fa-times"></i>
            </button>
          )}
        </div>
      </motion.div>

      {/* Category Filter */}
      <motion.div 
        className="menu-categories"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category === 'all' ? 'الكل' : category}
          </button>
        ))}
      </motion.div>

      {/* Results Info */}
      <motion.div 
        className="menu-info"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <p className="results-count">
          {filteredItems.length === 0 ? 'لا توجد نتائج' : 
           `عرض ${currentItems.length} من ${filteredItems.length} منتج`}
        </p>
      </motion.div>
      
      <motion.div 
        className="menu-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={`${selectedCategory}-${searchTerm}-${currentPage}`}
      >
        {currentItems.map((item, index) => (
          <motion.div 
            key={`${item.name}-${index}`} 
            className="menu-item"
            variants={itemVariants}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3 }
            }}
          >
            <div className="menu-image-container">
              {item.image ? (
                <img src={item.image} alt={item.name} className="menu-image" />
              ) : (
                <div className="menu-image-placeholder">
                  <div style={{fontSize: '2rem', color: 'blue', marginBottom: '10px'}}>
                    <i className="fa fa-star"></i>
                  </div>
                  <div style={{fontSize: '2rem', color: 'green', marginBottom: '10px'}}>
                    <i className="fas fa-heart"></i>
                  </div>
                  <div style={{fontSize: '1rem', marginTop: '10px', color: '#666'}}>
                    Category: {item.category}
                  </div>
                </div>
              )}
            </div>
            <div className="menu-item-content">
              {item.category && <span className="menu-category">{item.category}</span>}
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              {item.price && <div className="menu-price">{item.price} OMR</div>}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Pagination */}
      {totalPages > 1 && (
        <motion.div 
          className="pagination"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <button
            className="pagination-btn"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
          
          <div className="pagination-info">
            <span className="current-page">{currentPage}</span>
            <span className="page-separator">من</span>
            <span className="total-pages">{totalPages}</span>
          </div>
          
          <button
            className="pagination-btn"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
        </motion.div>
      )}

      {/* No Results */}
      {filteredItems.length === 0 && !loading && (
        <motion.div 
          className="no-results"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <i className="fas fa-search"></i>
          <h3>لا توجد نتائج</h3>
          <p>جرب البحث بكلمات مختلفة أو اختر فئة أخرى</p>
          {(searchTerm || selectedCategory !== 'all') && (
            <button 
              className="reset-filters-btn"
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('all')
              }}
            >
              إعادة تعيين الفلاتر
            </button>
          )}
        </motion.div>
      )}
    </section>
  )
}

export default Menu
