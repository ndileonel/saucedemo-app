import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
// Update the import path if necessary, or ensure the file exists at the specified location
import LoginPage from '../../support/pom/LoginPage';
import InventoryPage from '../../support/pom/InventoryPage';

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();


Given('the user is on the Swag Labs login page', () => {
    cy.visit('/');
    loginPage.verifyLoginPage();
});

When('the user logs in with valid credentials using username {string} and password {string}', (username: string, password: string) => {
    loginPage.loginUser(username, password);
});

Then("the user should be redirected to the inventory page", function () {
    inventoryPage.verifyInventoryPage();
});