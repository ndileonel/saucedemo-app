class InventoryPage {

    addProductByNameToCart(productName: string) {
        cy.contains('.inventory_item', productName)
            .find('button')
            .click();
    }

    gotoProductCartPage() {
        cy.get('.shopping_cart_link').click();
    }

    selectProductByName(prodName: string) {
        cy.contains('[data-test="inventory-item-name"]', prodName)
            .click();
    }

    verifyItemInCart(itemName: string) {
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1');
    }
}

export default InventoryPage;