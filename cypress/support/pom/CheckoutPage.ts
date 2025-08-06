class CheckoutPage {

    fillCheckoutForm(firstName: string, lastName: string, postalCode: string) {
        cy.get('[data-test="firstName"]').type(firstName);
        cy.get('[data-test="lastName"]').type(lastName);
        cy.get('[data-test="postalCode"]').type(postalCode);
        cy.get('[data-test="continue"]').click();
    }
}  

export default CheckoutPage;    