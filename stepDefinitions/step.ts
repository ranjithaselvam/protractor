import { Given, When, Then } from 'cucumber'
import { browser, element, by } from 'protractor'


Given(/^Open the atmecs dashboard website$/, { timeout: 40000 }, async function () {
    console.log("Browser launching")
    browser.waitForAngularEnabled(true);
    console.log("entered url")
    await browser.get('http://10.10.10.231:8082/#/app/dashboard');
   await browser.manage().window().maximize()
  
});




When(/^Click the rest api test result link and select  the status as pass$/, { timeout: 60000 }, async function (){
    browser.manage().timeouts().implicitlyWait(60000);
    await element(by.css("a[href='#/reports/9546'] .media-box-heading")).click;
    await element(by.css("[name='status']")).click
    // const title=browser.getTitle
    // console.log(title)
   
});




Then(/^ verify the user got the status pass or not$/, { timeout: 40000 }, async function () {
    console.log("hi")
  var status= await element(by.css(".table.ng-table-rowselected.ng-scope.ng-table")).getText
  console.log(status)
});





