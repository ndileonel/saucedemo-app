import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import type { DataTable } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from '../../support/pom/LoginPage';
import InventoryPage from '../../support/pom/InventoryPage';
import CheckoutPage from '../../support/pom/CheckoutPage';
import CartPage from '../../support/pom/CartPage';
import ProductConfirmationPage from '../../support/pom/ProductConfirmationPage';
import ProductCompletionPage from '../../support/pom/ProductCompletionPage';
import ProductPage from '../../support/pom/ProductPage';

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();
const productConfirmationPage = new ProductConfirmationPage();
const productCompletionPage = new ProductCompletionPage();
const productPage = new ProductPage();

let productName: string;

Given('the user is on the Swag Labs login page', () => {
    cy.visit('/');
    loginPage.getPageTitle().then((title) => {
        expect(title).to.contain('Swag Labs');
    });
});

When('the user logs in with valid credentials using username {string} and password {string}', (username: string, password: string) => {
    loginPage.loginUser(username, password);
});

Then("the user should be redirected to the inventory page", function () {
    cy.verifyPageTitle('Products');
});

When('the user adds the {string} product to the cart', (prodName: string) => {
    inventoryPage.addProductByNameToCart(prodName);
    productName = prodName; // Store the product name for later use
});

When("the user navigates to the cart page from the inventory page", function () {
    inventoryPage.gotoProductCartPage();
});

Then("the cart should contain the selected product", function () {
    cartPage.getItemInCart().then((text) => {
        const trimmed = text.trim();
        expect(trimmed).to.equal(productName);
    })
});

When("the user proceeds to checkout and enters delivery information below:", function (dataTable: DataTable) {
    cartPage.navigateToCheckout();
    cy.verifyPageTitle('Checkout: Your Information');
    const { ['first name']: firstName, ['last name']: lastName, ['postal code']: postalCode } = dataTable.hashes()[0];
    checkoutPage.fillCheckoutForm(firstName, lastName, postalCode);
});

Then("the product confirmation page should display the following item information:", function (dataTable: DataTable) {
    const { ['product name']: itemName, ['description']: description, ['price']: totalPrice } = dataTable.hashes()[0];
    productConfirmationPage.verifyOrderDetails(itemName, description, totalPrice);
});

Then("the user navigates to the product confirmation page", function () {
    cy.verifyPageTitle('Checkout: Overview');
});

When("the user confirms the order", function () {
    productConfirmationPage.confirmOrder();
});

Then("the user should see the product completion page", function () {
    cy.verifyPageTitle('Checkout: Complete!');
    productCompletionPage.getSuccessMessage().then((message) => {
        expect(message).to.contain('Thank you for your order!');
    });
});

When("the user selects the {string} product from the inventory page", function (prodName: string) {
    inventoryPage.selectProductByName(prodName);
    productName = prodName;
});

When("the user adds the product to the cart from the product page", function () {
    productPage.addProductByNameToCart(productName);
    productPage.verifyItemInCart(productName);
});

When("the user navigates to the cart page from the product page", function () {
    inventoryPage.gotoProductCartPage();
});

When("the user removes the product from the cart", function () {
    cartPage.removeProductFromCart();
});

Then("the cart should be empty", function () {
    cartPage.verifyEmpty();
});