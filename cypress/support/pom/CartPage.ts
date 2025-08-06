class CartPage {

    getItemInCart(): Cypress.Chainable<string> {
        return cy.get('.inventory_item_name').invoke('text').then((text) => {
            return text.trim();
        });
    }

    navigateToCheckout() {
        cy.get('[data-test="checkout"]').click();
    }

    removeProductFromCart() {
        cy.get('.item_pricebar').find('button').click();
    }

    verifyEmpty() {
        cy.get('[data-test="item-quantity"]').should('not.exist');
    }
}

export default CartPage;