class ProductCompletionPage {

    getSuccessMessage(): Cypress.Chainable<string> {
        return cy.get('[data-test="complete-header"]').invoke('text');
    }
}

export default ProductCompletionPage;
