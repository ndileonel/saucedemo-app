class ProductCompletionPage {

    verifyCompletionMessage() {
        cy.get('[data-test="compete-header"]').should('have.text', 'Thank you for your order!');
    }
}

export default ProductCompletionPage;
