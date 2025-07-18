/**
 * Form validation utilities
 * Provides consistent validation across the application
 */

/**
 * Validation rules for different field types
 */
const validationRules = {
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Please enter a valid email address'
  },
  cardNumber: {
    required: true,
    pattern: /^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/,
    message: 'Please enter a valid card number (16 digits)'
  },
  expiryDate: {
    required: true,
    pattern: /^(0[1-9]|1[0-2])\/\d{2}$/,
    message: 'Please enter expiry date in MM/YY format'
  },
  cvv: {
    required: true,
    pattern: /^\d{3,4}$/,
    message: 'Please enter a valid CVV (3-4 digits)'
  },
  title: {
    required: true,
    minLength: 1,
    maxLength: 100,
    message: 'Job title is required'
  },
  company: {
    required: true,
    minLength: 1,
    maxLength: 50,
    message: 'Company name is required'
  },
  location: {
    required: true,
    minLength: 1,
    message: 'Location is required'
  },
  dayRate: {
    required: true,
    pattern: /^\d+(\.\d{1,2})?$/,
    min: 1,
    message: 'Please enter a valid day rate'
  }
};

/**
 * Validate a single field
 * @param {string} fieldName - Name of the field to validate
 * @param {any} value - Value to validate
 * @returns {object} - Validation result {isValid, error}
 */
export const validateField = (fieldName, value) => {
  const rule = validationRules[fieldName];
  
  if (!rule) {
    return { isValid: true, error: null };
  }

  // Check required
  if (rule.required && (!value || value.toString().trim() === '')) {
    return { isValid: false, error: `${fieldName} is required` };
  }

  // Skip other validations if field is empty and not required
  if (!value && !rule.required) {
    return { isValid: true, error: null };
  }

  const stringValue = value.toString().trim();

  // Check pattern
  if (rule.pattern && !rule.pattern.test(stringValue)) {
    return { isValid: false, error: rule.message };
  }

  // Check min length
  if (rule.minLength && stringValue.length < rule.minLength) {
    return { isValid: false, error: rule.message };
  }

  // Check max length
  if (rule.maxLength && stringValue.length > rule.maxLength) {
    return { isValid: false, error: rule.message };
  }

  // Check minimum value for numbers
  if (rule.min && parseFloat(stringValue) < rule.min) {
    return { isValid: false, error: rule.message };
  }

  return { isValid: true, error: null };
};

/**
 * Validate multiple fields at once
 * @param {object} formData - Object containing field values
 * @param {string[]} fieldsToValidate - Array of field names to validate
 * @returns {object} - Validation result {isValid, errors}
 */
export const validateForm = (formData, fieldsToValidate = null) => {
  const errors = {};
  const fields = fieldsToValidate || Object.keys(formData);

  fields.forEach(fieldName => {
    const { isValid, error } = validateField(fieldName, formData[fieldName]);
    if (!isValid) {
      errors[fieldName] = error;
    }
  });

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

/**
 * Validate payment form specifically
 * @param {object} paymentData - Payment form data
 * @returns {object} - Validation result {isValid, errors}
 */
export const validatePaymentForm = (paymentData) => {
  return validateForm(paymentData, ['email', 'cardNumber', 'expiryDate', 'cvv']);
};

/**
 * Validate job posting form
 * @param {object} jobData - Job form data
 * @returns {object} - Validation result {isValid, errors}
 */
export const validateJobForm = (jobData) => {
  return validateForm(jobData, ['title', 'company', 'location', 'dayRate']);
};

/**
 * Create a custom validation error
 * @param {string} message - Error message
 * @param {string} field - Field name where error occurred
 * @returns {Error} - Custom validation error
 */
export const createValidationError = (message, field) => {
  const error = new Error(message);
  error.isOperational = true;
  error.field = field;
  error.type = 'ValidationError';
  return error;
};

export default {
  validateField,
  validateForm,
  validatePaymentForm,
  validateJobForm,
  createValidationError
};
