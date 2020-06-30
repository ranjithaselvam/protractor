import { Given, When, Then } from 'cucumber'
import { browser, element, by } from 'protractor'


Given(/^Open the atmecs dashboard website and check the default tab selection$/, { timeout: 40000 }, async function () {
    console.log("Browser launching")
    browser.waitForAngularEnabled(true);
    console.log("entered url")
    await browser.get('http://10.10.10.231:8082/#/app/dashboard');
   await browser.manage().window().maximize()
  
});




When(/^Click the rest api test result link and filter the status as pass $/, { timeout: 40000 }, async function (){
    browser.manage().timeouts().implicitlyWait(10000);
    await element(by.xpath("//h4[.='REST API TEST RESULT']")).click;
    await element(by.css("[name='status']")).click
    // const title=browser.getTitle
    // console.log(title)
   
});




Then(/^ verify the user got the all pass status$/, { timeout: 40000 }, async function () {
    console.log("hi")
  var status= await element(by.css(".table.ng-table-rowselected.ng-scope.ng-table")).getText
  console.log(status)
});






Given(/^Click recent run tab$/, { timeout: 40000 }, async function () {
 await element(by.css("a[ng-href='#/recentruns/view'] > span")).click
  
});

When(/^select the product and testcase$/, { timeout: 40000 }, async function () {
 await element(by.css("tbody > tr:nth-of-type(1) > [data-title='\'Product Name\'']")).click
 await element(by.xpath("//td[contains(.,'deleteProjectApiTest')]")).click
});

Then(/^verify the status and detail.$/, { timeout: 40000 }, async function () {
var statusDetail=	await element(by.css(".p-t-5")).getText
console.log(statusDetail)
});
