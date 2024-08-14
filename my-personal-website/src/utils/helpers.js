// src/utils/helpers.js

/**
 * Format a date into a readable string.
 * @param {Date} date - The date to format.
 * @param {string} locale - The locale to use for formatting.
 * @param {string} options - Options to customize the output.
 * @returns {string} - The formatted date string.
 */
export const formatDate = (date, locale = 'en-US', options = { year: 'numeric', month: 'long', day: 'numeric' }) => {
    return new Intl.DateTimeFormat(locale, options).format(new Date(date));
  };
  
  /**
   * Capitalize the first letter of a string.
   * @param {string} str - The string to capitalize.
   * @returns {string} - The capitalized string.
   */
  export const capitalizeFirstLetter = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  /**
   * Format a number as a currency string.
   * @param {number} amount - The amount to format.
   * @param {string} currency - The currency code (e.g., 'USD', 'EUR').
   * @returns {string} - The formatted currency string.
   */
  export const formatCurrency = (amount, currency = 'USD') => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
  };
  