class CartPage {

    getPageTitle(): Cypress.Chainable<string> {
        return cy.get('[data-test="title"]').invoke('text');
    }

    getItemInCart(): Cypress.Chainable<string> {
        return cy.get('.inventory_item_name').invoke('text').then((text) => {
            return text.trim();
        });
    }

    navigateToCheckout() {
        cy.get('[data-test="checkout"]').click();
    }
}

export default CartPage;