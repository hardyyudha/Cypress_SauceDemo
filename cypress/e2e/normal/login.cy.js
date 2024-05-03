describe('Test Scenario - Login', () => {
  beforeEach('URL Visit', () => {
    cy.visit('http://saucedemo.com')
  })
  it('ID 1 - Valid User', () => {
    cy.get('[data-test="username"]').type(Cypress.env("valid_user"))
    cy.get('[data-test="password"]').type(Cypress.env("valid_pass"))
    cy.get('[data-test="login-button"]').click()
    cy.url().should('eq',Cypress.env("valid_assertion"))
  })
  it('ID 2 - Invalid Username', () => {
    cy.get('[data-test="username"]').type(Cypress.env("invalid_user"))
    cy.get('[data-test="password"]').type(Cypress.env("valid_pass"))
    cy.get('[data-test="login-button"]').click()
    cy.get(Cypress.env("invalid_assertion")).should('be.visible')
  })
  it('ID 3 - Invalid Password', () => {
    cy.get('[data-test="username"]').type(Cypress.env("valid_user"))
    cy.get('[data-test="password"]').type(Cypress.env("invalid_pass"))
    cy.get('[data-test="login-button"]').click()
    cy.get(Cypress.env("invalid_assertion")).should('be.visible')
  })
})

