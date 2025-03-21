module.exports = {
   ci: {
     collect: {
       staticDistDir: './',
     },
     upload: {
      target: 'lhci',
      serverBaseUrl: 'http://localhost:9001',
      token: 'e5575684-3498-4048-802f-dadfdea743e6', // could also use LHCI_TOKEN variable instead
     },
   }
}

