Feature: User can purchase item on Swag Labs website
  As a user
  I want to purchase an item on the Swag Labs site
  So that I can own it outright

Scenario: User purchases an item successfully
    Given the user is on the Swag Labs login page
    When the user logs in with valid credentials using username "standard_user" and password "secret_sauce"
    Then the user should be redirected to the inventory page

  