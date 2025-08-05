class InventoryPage {

    getPageTitle(): Cypress.Chainable<string> {
        return cy.get('[data-test="title"]').invoke('text');
    }

    addProductByNameToCart(productName: string) {
        cy.contains('.inventory_item', productName)
            .find('button')
            .click();
    }

    gotoProductCartPage() {
        cy.get('.shopping_cart_link').click();
    }

    verifyItemInCart(itemName: string) {
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1');
    }
}

export default InventoryPage;