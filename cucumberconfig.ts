import {Config, browser} from "protractor";

export let config:Config = {
    // The address of a running selenium server.
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect:true,
    framework:'custom',
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
  
  