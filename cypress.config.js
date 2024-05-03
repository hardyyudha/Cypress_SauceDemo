const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;


module.exports = defineConfig({
  viewportHeight: 1024,
  viewportWidth: 1280,
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)]
      })
      on("file:preprocessor", bundler)
      addCucumberPreprocessorPlugin(on, config)

      return config
    },
    specPattern: ["cypress/e2e/*/*", "cypress/e2e/*"]
  },
});
