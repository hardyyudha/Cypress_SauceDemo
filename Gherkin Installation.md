# Cypress with Gherkin

## Installation
- Masuk ke dalam terminal VSCode
- Jalankan dua perintah berikut
  ```
  sudo npm i -D cypress @bahmutov/cypress-esbuild-preprocessor esbuild --save-dev
  sudo npm install @badeball/cypress-cucumber-preprocessor
  ```
- Saat instalasi sudah selesai, masuk ke dalam file `cypress.config.js`, lalu sesuaikan dengan script berikut:
  ```
    const { defineConfig } = require("cypress");
    const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
    const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
    const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

    module.exports = defineConfig({
    viewportHeight: 1024,
    viewportWidth: 1280,
    chromeWebSecurity: false,
    experimentalStudio: true,
    e2e: {
        async setupNodeEvents(on, config) {
        // implement node event listeners here
            const bundler = createBundler({
                plugins: [createEsbuildPlugin(config)]
            })
            on("file:preprocessor", bundler)
            await addCucumberPreprocessorPlugin(on, config)
        
            return config
        },
        specPattern: "nama_folder_untuk_gherkin_feature/*.feature",
        baseUrl: 'http://localhost:8080/'
      }, 
    });
  ```
- Masuk ke dalam file `package.json`, lalu tambahkan script berikut:
  ```
  "cypress-cucumber-preprocessor": {
        "stepDefinitions": "nama_folder_untuk_step_definition/*.{js,ts}"
    }
  ```
