class LoginPage {

    getPageTitle(): Cypress.Chainable<string> {
        return cy.title();
    }

    loginUser(username: string, password: string) {
        cy.get('[data-test="username"]').type(username);
        cy.get('[data-test="password"]').type(password);
        cy.get('[data-test="login-button"]').click();
    }
}

export default LoginPage;