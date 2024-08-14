// src/utils/validations.js

/**
 * Validate an email address.
 * @param {string} email - The email address to validate.
 * @returns {boolean} - True if valid, otherwise false.
 */
export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  /**
   * Validate a phone number (simple example).
   * @param {string} phone - The phone number to validate.
   * @returns {boolean} - True if valid, otherwise false.
   */
  export const validatePhoneNumber = (phone) => {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/; // E.164 format
    return phoneRegex.test(phone);
  };
  
  /**
   * Validate required fields in a form.
   * @param {object} fields - An object with field names as keys and values to validate.
   * @returns {object} - An object with field names and error messages.
   */
  export const validateRequiredFields = (fields) => {
    const errors = {};
    for (const [key, value] of Object.entries(fields)) {
      if (!value || value.trim() === '') {
        errors[key] = `${key} is required.`;
      }
    }
    return errors;
  };
  