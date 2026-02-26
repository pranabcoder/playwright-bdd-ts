# Created by prana at 26/02/2026
Feature: Search functionality testing for dashboard view

  Background:
    Given user navigates to the application login page
    And user enters username as "Admin"
    And user enters password as "admin123"
    And user clicks on the login button

  @smoke
  Scenario Outline: Search functionality testing
    Given user searches the option name as <optionName>
    And user will reloads the entire page
#    Then user should see the option details for <optionName>
    Examples:
      | optionName |
      | admin      |