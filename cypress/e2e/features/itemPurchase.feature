Feature: User can purchase item on Swag Labs website
  As a user
  I want to purchase an item on the Swag Labs site
  So that I can own it outright

  Background:
    Given the user is on the Swag Labs login page
    When the user logs in with valid credentials using username "standard_user" and password "secret_sauce"
    Then the user should be redirected to the inventory page

  Scenario: User purchases item from inventory page successfully
    When the user adds the "Sauce Labs Backpack" product to the cart
    And the user navigates to the cart page from the inventory page
    Then the cart should contain the selected product
    When the user proceeds to checkout and enters delivery information below:
      | first name | last name | postal code |
      | John       | Doe       | 12345       |
    And the user navigates to the product confirmation page
    Then the product confirmation page should display the following item information:
      | product name        | description          | price  |
      | Sauce Labs Backpack | streamlined Sly Pack | $29.99 |
    When the user confirms the order
    Then the user should see the product completion page

  Scenario: User purchases item from product page successfully
    When the user selects the "Sauce Labs Backpack" product from the inventory page
    And the user adds the product to the cart from the product page
    And the user navigates to the cart page from the product page
    Then the cart should contain the selected product
    When the user proceeds to checkout and enters delivery information below:
      | first name | last name | postal code |
      | John       | Doe       | 12345       |
    And the user navigates to the product confirmation page
    Then the product confirmation page should display the following item information:
      | product name        | description          | price  |
      | Sauce Labs Backpack | streamlined Sly Pack | $29.99 |
    When the user confirms the order
    Then the user should see the product completion page

  Scenario: User removes added item from cart page
    When the user adds the "Sauce Labs Backpack" product to the cart
    And the user navigates to the cart page from the inventory page
    Then the cart should contain the selected product

    When the user removes the product from the cart
    Then the cart should be empty





