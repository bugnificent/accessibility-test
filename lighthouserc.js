module.exports = {
  ci: {
    collect: {
      staticDistDir: './',
      exclude: ['**/access-report-axe.html'],// Replace with the path to your built files
    },
    upload: {
      target: 'temporary-public-storage', // Use public storage
    },
  },
};

