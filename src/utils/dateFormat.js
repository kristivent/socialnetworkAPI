module.exports = (/** @type {string | number | Date} */ timestamp) => {
    // Format the timestamp
    return new Date(timestamp).toLocaleString();
  };