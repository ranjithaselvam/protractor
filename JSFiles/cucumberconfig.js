"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    // The address of a running selenium server.
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../features/sample.feature'],
    //     //just maximizing window before testing
    // onPrepare: function(){
    //   browser.waitForAngularEnabled(true);
    //   browser.driver.manage().window().maximize();
    // } ,
    //     onComplete: () => {
    //       var reporter = require('cucumber-html-reporter');
    //       var options = {
    //         theme: 'bootstrap',
    //         jsonFile: './results.json',
    //         output: './results.html',
    //         reportSuiteAsScenarios: true,
    //         launchReport: true,
    //         metadata: {
    //             "App Version":"0.3.2",
    //             "Test Environment": "STAGING",
    //             "Browser": "Chrome  54.0.2840.98",
    //             "Platform": "Windows 10",
    //             "Parallel": "Scenarios",
    //             "Executed": "Remote"
    //         },
    //         outputs: './report/cucumber_report.html',
    //       };
    //        reporter.generate(options);
    //      },
    cucumberOpts: {
        // require step definitions
        require: [
            './stepDefinitions/step.js' // accepts a glob
        ],
        format: 'json:report/cucumber_report.json',
    },
    tags: "@OutlineScenario",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlcmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFVyxRQUFBLE1BQU0sR0FBVTtJQUN2Qiw0Q0FBNEM7SUFDNUMsbURBQW1EO0lBQ25ELGFBQWEsRUFBQyxJQUFJO0lBQ2xCLFNBQVMsRUFBQyxRQUFRO0lBQ2xCLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBRS9ELHVEQUF1RDtJQUN2RCxZQUFZLEVBQUU7UUFDWixXQUFXLEVBQUUsUUFBUTtLQUN0QjtJQUVELHVFQUF1RTtJQUN2RSwyQ0FBMkM7SUFDM0Msa0NBQWtDO0lBQ2xDLEtBQUssRUFBRSxDQUFDLDRCQUE0QixDQUFDO0lBSXpDLDhDQUE4QztJQUM5Qyx5QkFBeUI7SUFDekIseUNBQXlDO0lBQ3pDLGlEQUFpRDtJQUNqRCxNQUFNO0lBRU4sMEJBQTBCO0lBQzFCLDBEQUEwRDtJQUMxRCx3QkFBd0I7SUFDeEIsOEJBQThCO0lBQzlCLHNDQUFzQztJQUN0QyxvQ0FBb0M7SUFDcEMsd0NBQXdDO0lBQ3hDLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIscUNBQXFDO0lBQ3JDLDZDQUE2QztJQUM3QyxpREFBaUQ7SUFDakQsd0NBQXdDO0lBQ3hDLHVDQUF1QztJQUN2QyxtQ0FBbUM7SUFDbkMsYUFBYTtJQUNiLG9EQUFvRDtJQUNwRCxXQUFXO0lBQ1gscUNBQXFDO0lBQ3JDLFVBQVU7SUFLTixZQUFZLEVBQUU7UUFDViwyQkFBMkI7UUFDM0IsT0FBTyxFQUFFO1lBQ1AsMkJBQTJCLENBQUMsaUJBQWlCO1NBQzlDO1FBQ0QsTUFBTSxFQUFFLGtDQUFrQztLQUMzQztJQUNELElBQUksRUFBRSxrQkFBa0I7Q0FDekIsQ0FBQyJ9