Feature: Searching for Cats?
  I should be able to search for cats

  Scenario: Searching for cats
    Given I am on google.com
    When I search for "cats"
    Then I should see "8 results"

   