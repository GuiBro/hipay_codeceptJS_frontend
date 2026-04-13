Feature: Fraud Management Page Display
  As a QA analyst
  I want to verify the contact form and the anti-fraud rules slider
  To ensure the page is functional and handles errors correctly

  Background:
    Given I am on the fraud management page

  Scenario: Error message on incomplete contact form
    When I request a tool demo
    And I fill the contact form with incomplete details
    And I submit the contact form
    Then I should see a contact input error message

  Scenario: Navigation throught anti-fraud rules slider
    When I scroll to the anti-fraud rules section
    Then I should see and navigate through all anti-fraud rules