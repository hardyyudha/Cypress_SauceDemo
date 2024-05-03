describe('Cart', () => {
    beforeEach('User Login', () => {
        cy.visit('http://saucedemo.com')
        cy.get('[data-test="username"]').type(Cypress.env("valid_user"))
        cy.get('[data-test="password"]').type(Cypress.env("valid_pass"))
        cy.get('[data-test="login-button"]').click()
        let dataCart = Cypress.env('cart_data')
        let dataCart_length = dataCart.length
        cy.log('Data Cart Length: ' + dataCart_length)
        for (let i = 0; i < dataCart_length; i++) {
            cy.contains(dataCart[i]).parent().parent().find('button').contains('Add to cart').click()
        }
        cy.get('[data-test="shopping-cart-link"]').click()
    })
    it('Validate Data', () => {
        let dataCart = Cypress.env('cart_data')
        for (let i = 0; i < dataCart.length; i++) {
            cy.contains(dataCart[i]).should('be.visible')
        }
        cy.get('[data-test="shopping-cart-badge"]').contains(dataCart.length)
    })
    it.only('Remove Data', () => {
        let dataCart = Cypress.env('cart_data')
        for (let i = 0; i < dataCart.length; i++) {
            cy.contains(dataCart[i]).parent().parent().find('button').contains('Remove').click()
        }
        cy.get('[data-test="shopping-cart-badge"]').should('not.exist')
    })
})