module.exports = {
  ci: {
    collect: {
      staticDistDir: './',
      "numberOfRuns": 1,
      "url": ["https://yusufasik.com"],
      "settings": {
        "throttlingMethod": "devtools",
        "emulatedFormFactor": "desktop",
        "screenEmulation": { "mobile": false },
        "disableStorageReset": true,
        "waitForNetworkIdle": true,  // Add this to ensure the page waits for network idle
        "maxWaitForFcp": 60000,  // Increase this to allow more time for the page to load
        "maxWaitForLoad": 120000
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
