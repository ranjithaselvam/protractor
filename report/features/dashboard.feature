


Feature: Main navigation

   Scenario: Dashboard
      Given User launch the chrome browser
      When  User opens URL "http://10.10.10.231:8082/#/app/dashboard"
      Then  Page Title should be "ATMECS - Falcon Test Repotrs"
      And   Click REST API TEST RESULT Link in dashboard
      And   Select status as pass
      Then  Able to get pass test cases
      When  User click on toggle button
      Then  User can able to view total test run count
      Then  User can able to view pass test percentage
      Then  User can able to view fail test count
      Then  User can able to view skip test count


   Scenario: Recent run
      When Click on recent run
      And Select product
      And Select test case
      Then User can view the tesct case details

