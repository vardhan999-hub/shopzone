/**
 * Formats a number as a USD price string.
 * @param {number} price
 * @returns {string} e.g. "$12.99"
 */
export const formatPrice = (price) => `$${price.toFixed(2)}`
