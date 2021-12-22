describe('Cypress', () => {
    it('is working', () => {
        expect(true).to.equal(true)
    })

    it('opens the app', () => {
        cy.visit('/');

    })
    it('Login', () => {
        cy.login();
    })

    it('Logout', () => {
        cy.get("#logout").click();
    })
    
})
