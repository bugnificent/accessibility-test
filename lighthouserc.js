module.exports = {
  ci: {
    collect: {
      staticDistDir: './', // Replace with the path to your built files
    },
    upload: {
      target: 'temporary-public-storage', // Use public storage
    },
  },
};

