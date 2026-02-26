# Created by prana at 26/02/2026
Feature: Login Feature

  Background:
    Given user navigates to the application login page

  Scenario: Successful Login
    And user enters username as "Admin"
    And user enters password as "admin123"
    And user clicks on the login button