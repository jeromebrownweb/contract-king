/**
 * Centralized debugging utility
 * Provides structured logging for development and production environments
 */

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';

export const debug = {
  /**
   * General purpose logging for development
   * @param {string} context - The context/component name
   * @param {string} message - The message to log
   * @param {any} data - Optional data to include
   */
  log: (context, message, data = null) => {
    if (isDevelopment) {
      const timestamp = new Date().toLocaleTimeString();
      console.log(`🔍 [${timestamp}] [${context}]`, message, data || '');
    }
  },

  /**
   * Error logging (shown in all environments)
   * @param {string} context - The context/component name
   * @param {Error|string} error - The error to log
   */
  error: (context, error) => {
    const timestamp = new Date().toLocaleTimeString();
    console.error(`❌ [${timestamp}] [${context}]`, error);
  },

  /**
   * Success logging for development
   * @param {string} context - The context/component name
   * @param {string} message - The success message
   */
  success: (context, message) => {
    if (isDevelopment) {
      const timestamp = new Date().toLocaleTimeString();
      console.log(`✅ [${timestamp}] [${context}]`, message);
    }
  },

  /**
   * Warning logging
   * @param {string} context - The context/component name
   * @param {string} message - The warning message
   */
  warn: (context, message) => {
    const timestamp = new Date().toLocaleTimeString();
    console.warn(`⚠️ [${timestamp}] [${context}]`, message);
  },

  /**
   * Component lifecycle logging for development
   * @param {string} componentName - Name of the component
   * @param {string} lifecycle - mount, unmount, update, etc.
   */
  component: (componentName, lifecycle) => {
    if (isDevelopment) {
      const timestamp = new Date().toLocaleTimeString();
      console.log(`🔄 [${timestamp}] [${componentName}]`, lifecycle);
    }
  }
};

/**
 * Error Handler Class for centralized error management
 */
export class ErrorHandler {
  constructor() {
    this.setupGlobalHandlers();
  }

  /**
   * Handle errors with context
   * @param {Error} error - The error object
   * @param {string} context - Where the error occurred
   */
  handleError(error, context = 'Unknown') {
    debug.error(context, error);
    
    // In development, show more details
    if (isDevelopment && error.stack) {
      console.error('Stack trace:', error.stack);
    }

    // In production, you might want to send to error reporting service
    if (isProduction) {
      // TODO: Send to error reporting service (Sentry, LogRocket, etc.)
    }
  }

  /**
   * Setup global error handlers for unhandled errors
   */
  setupGlobalHandlers() {
    // Only setup in browser environment
    if (typeof window !== 'undefined') {
      // Catch unhandled promise rejections
      window.addEventListener('unhandledrejection', (event) => {
        this.handleError(event.reason, 'Unhandled Promise Rejection');
        event.preventDefault(); // Prevent console error
      });

      // Catch global errors
      window.addEventListener('error', (event) => {
        this.handleError(event.error, 'Global Error');
      });
    }
  }

  /**
   * Check if an error is operational (expected) vs programmer error
   * @param {Error} error - The error to check
   * @returns {boolean} - Whether the error is operational
   */
  isTrustedError(error) {
    return error.isOperational === true;
  }
}

// Create singleton instance
export const errorHandler = new ErrorHandler();

export default debug;
