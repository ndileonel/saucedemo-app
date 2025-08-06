class ProductPage {

    getProductTitle(): Cypress.Chainable<string> {
        return cy.get('[data-test="inventory-item-name"]').invoke('text');
    }

    addProductByNameToCart(productName: string) {
        cy.contains('.inventory_details_desc_container', productName)
            .find('button')
            .click();
    }

    getItemInCart(): Cypress.Chainable<string> {
        return cy.get('.shopping_cart_link').invoke('text').then((text) => {
            return text.trim();
        });
    }

    verifyItemInCart(itemName: string) {
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1');
    }

    selectCheckout() {
        cy.get('.shopping_cart_link').click();
    }
}

export default ProductPage;