describe('Add Cart', () => {
    beforeEach('User Login', () => {
        cy.visit('http://saucedemo.com')
        cy.get('[data-test="username"]').type(Cypress.env("valid_user"))
        cy.get('[data-test="password"]').type(Cypress.env("valid_pass"))
        cy.get('[data-test="login-button"]').click()
    })
    it('ID 1 - Add Cart', () => {
        let dataCart = Cypress.env('cart_data')
        let dataCart_length = dataCart.length
        cy.log('Data Cart Length: ' + dataCart_length)
        for (let i = 0; i < dataCart_length; i++) {
            cy.contains(dataCart[i]).parent().parent().find('button').contains('Add to cart').click()
        }
        cy.get('[data-test="shopping-cart-badge"]').contains(dataCart_length)
    })
    it('ID 2 - Remove Cart', () => {
        let dataCart = Cypress.env('cart_data')
        let dataCart_length = dataCart.length
        cy.log('Data Cart Length: ' + dataCart_length)
        for (let i = 0; i < dataCart_length; i++) {
            cy.contains(dataCart[i]).parent().parent().find('button').contains('Add to cart').click()
        }
        for (let i = 0; i < dataCart_length; i++) {
            cy.contains(dataCart[i]).parent().parent().find('button').contains('Remove').click()
        }
        cy.get('[data-test="shopping-cart-badge"]').should('not.exist')
    })
})