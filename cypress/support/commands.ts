
Cypress.Commands.add('verifyPageTitle', (expectedTitle: string) => {
    cy.get('[data-test="title"]').invoke('text').should('contain', expectedTitle);
});