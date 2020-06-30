Feature: Write test case with the help of Cucumber with Protractor using Typescript


     Scenario: verify the dashboard navigation
          Given Open the atmecs dashboard website and check the default tab selection
          When  Click the rest api test result link and filter the status as pass 
          Then  verify the user got the all pass status
          


     Scenario: Verify resent run tab in main navigation
          Given Click recent run tab
          When  select the product and testcase
          Then  verify the status and detail.