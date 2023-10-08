const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'choo2p',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      module.exports = defineConfig({
        e2e: {
          setupNodeEvents(on, config) {
            {
              "reporter"; "mochawesome",
                "reporterOptions";
              {
                "reportDir"; "cypress/report/mochawesome-report",
                  "overwrite"; true,
                    "html"; true,
                      "json"; false,
                        "timestamp"; "mmddyyyy_HHMMss"
              }
            }
          },
        },
      });

    },
  },
})
