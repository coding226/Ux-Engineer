// eslint-disable-next-line no-undef
Cypress.Commands.add("login", (email, password) => {
    cy.get('input[id=email]').type("test@test.com")
    cy.get('input[type=password]').type('test@test.com{enter}')
});
