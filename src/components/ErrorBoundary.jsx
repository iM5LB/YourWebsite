import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.warn('Widget error caught:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="widget-error-fallback">
          <div className="error-content">
            <i className="fas fa-exclamation-triangle"></i>
            <p>حدث خطأ في تحميل المحتوى</p>
            <button 
              onClick={() => this.setState({ hasError: false, error: null })}
              className="retry-button"
            >
              إعادة المحاولة
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary