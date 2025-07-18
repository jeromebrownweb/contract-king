import React from 'react';
import debug, { errorHandler } from '../../utils/debug';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to our centralized error handler
    debug.error('ErrorBoundary', 'React component error caught', { error, errorInfo });
    errorHandler.handleError(error, 'React Component Error');
    
    // Update state with error details for debugging
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="error-boundary">
          <div className="error-boundary-card">
            <h2>🚨 Something went wrong</h2>
            <p>We're sorry, but something unexpected happened.</p>
            
            {process.env.NODE_ENV === 'development' && (
              <details style={{ whiteSpace: 'pre-wrap', marginTop: '20px' }}>
                <summary>Error Details (Development Only)</summary>
                <div style={{ 
                  background: '#f5f5f5', 
                  padding: '10px', 
                  margin: '10px 0',
                  borderRadius: '4px',
                  fontSize: '12px',
                  fontFamily: 'monospace'
                }}>
                  <strong>Error:</strong> {this.state.error && this.state.error.toString()}
                  <br />
                  <strong>Stack:</strong> {this.state.errorInfo.componentStack}
                </div>
              </details>
            )}
            
            <button 
              onClick={() => window.location.reload()} 
              className="white-btn"
              style={{ marginTop: '20px' }}
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
