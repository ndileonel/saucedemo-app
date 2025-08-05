class ProductConfirmationPage {

    verifyOrderDetails(itemName: string, description: string, totalPrice: string) {
        cy.get('[data-test="inventory-item-name"]').should('have.text', itemName);
        cy.get('[data-test="inventory-item-desc"]').should('contain', description);
        cy.get('[data-test="inventory-item-price"]').should('contain', totalPrice);
    }

    confirmOrder() {
        cy.get('[data-test="finish"]').click();
    }   
}



export default ProductConfirmationPage;