Feature: Write test case with the help of Cucumber with Protractor using Javascript


     Scenario: verify the dashboard navigation
          Given Open the atmecs dashboard website
          When  Click the rest api test result link and select  the status as pass
          Then  verify the user got the status pass or not
          


     Scenario: Verify resent run tab in main navigation
          Given Click recent run tab
          When  select the product and testcase
          Then  verify the status and detail.