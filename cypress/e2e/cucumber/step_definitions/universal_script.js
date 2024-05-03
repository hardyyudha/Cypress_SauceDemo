import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"

Given("User access url", () => {
    cy.visit(Cypress.env("url_link"))
})
When("User input {string} on {string} field", (user_input, field_input) => {
    if(user_input == "username" && field_input == "email"){
        cy.get('[data-test="username"]').type(Cypress.env("valid_user"))
    } else if(user_input == "password" && field_input == "password"){
        cy.get('[data-test="password"]').type(Cypress.env("valid_pass"))
    }
})
When("User click {string} button", (button_name) => {
    cy.contains(button_name).click()
})
Then("User logged in", () => {
    cy.url().should('eq', Cypress.env("valid_assertion"))
})