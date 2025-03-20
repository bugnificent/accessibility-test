module.exports = {
  ci: {
    collect: {
      staticDistDir: './',
      numberOfRuns: 1,
      url: ["https://yusufasik.com"],
      settings: {
        throttlingMethod: "devtools",
        emulatedFormFactor: "desktop",
        screenEmulation: { mobile: false },
        disableStorageReset: true,
        waitForNetworkIdle: true,  // Wait for network idle
        maxWaitForFcp: 60000,      // Allow more time for FCP
        maxWaitForLoad: 120000     // Allow more time for load
      }
    },
    upload: {
      target: 'temporary-public-storage'
    }
  }
}

