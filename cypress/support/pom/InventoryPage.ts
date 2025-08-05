class InventoryPage {
    verifyInventoryPage() {
        cy.get('[data-test="title"]').should('contain', 'Products');
    }

    addProductByNameToCart(productName: string) {
        cy.get('.inventory_item').contains(productName).parent().find('.btn_inventory').click();
    }

    gotoProductCartPage() {
        cy.get('.shopping_cart_link').click();
    }

    verifyItemInCart(itemName: string) {
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1');    }
}

export default InventoryPage;