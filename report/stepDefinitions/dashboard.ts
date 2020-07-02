


import { Given, When, Then } from 'cucumber'
import { browser, element, by } from 'protractor'
import {expect} from 'chai'

// import * as loctor from '../locators/loctor.json';
// any config=require("../locators/loctor.json")


Given(/^User launch the chrome browser$/,{ timeout: 40000 }, async function (){
	console.log("Step 1: Browser opening")
    browser.waitForAngularEnabled(true);
    browser.manage().window().maximize()
});

When(/^User opens URL "([^"]*)"$/,{ timeout: 70000 }, async function (url) {
    await browser.get(url);

    browser.getCurrentUrl().then(function(url) {console.log(url),
    expect(url).to.be.equals('http://10.10.10.231:8082/#/app/dashboard')});
  
    
    
});

Then(/^Page Title should be "([^"]*)"$/,{ timeout: 70000 }, async function (title){
    // let actualTitle= await browser.getTitle();
    // console.log("HI  :"+actualTitle);
    // expect(title).to.be.equals(actualTitle);
    console.log(title)
});


When(/^Click REST API TEST RESULT Link in dashboard$/, { timeout: 70000 }, async function () {
    
    await element(by.xpath("(//h4[@class='media-box-heading ng-binding'])[1]")).click();
    
});

When(/^Select status as pass$/,{ timeout: 70000 }, async function () {
    await  element(by.xpath("//select[@name='status']")).$("[value='PASS']").click();
});

Then(/^Able to get pass test cases$/,{ timeout: 70000 }, async function () {

	var status= await element(by.css("#view-report-filter > div.slimScrollDiv > scrollable > table")).getText();
    console.log(status)
});

When(/^User click on toggle button$/,{ timeout: 100000 }, async function () {
    await element(by.css("label.pull-right > span")).click();
    browser.sleep(10000)
});



Then(/^User can able to view total test run count$/,{ timeout: 100000 }, async function () {
	var test=	await element(by.xpath("//h4[.='10 TEST(S)']")).getText();
console.log("total test :"+test)
});

Then(/^User can able to view pass test percentage$/, { timeout: 100000 }, async function () {
	var pass=await element(by.xpath("//div[6]//div[@class='panel-body text-center']")).getText();
console.log("total test case Pass :"+pass)
});

Then(/^User can able to view fail test count$/, { timeout: 100000 }, async function () {
	var fail=await element(by.xpath("//div[7]//div[@class='panel-body text-center']")).getText();
console.log("total test case Fail :"+fail)
});

Then(/^User can able to view skip test count$/, { timeout: 100000 }, async function () {
	var skip=await element(by.xpath("//div[8]//div[@class='panel-body text-center']")).getText();
console.log("total test case Skip :"+skip)
});

When(/^Click on recent run$/,  { timeout: 100000 }, async function () {
    await element(by.css("a[ng-href='#/recentruns/view'] > span")).click();
});

When(/^Select product$/,  { timeout: 100000 }, async function () {
    await element(by.xpath("//tbody[1]/tr[1]/td[contains(.,'REST API TEST RESULT')]")).click();
    
});
When(/^Select test case$/,  { timeout: 100000 }, async function () {
   
    await element(by.xpath("//td[contains(.,'downloadImageApiTest')]")).click();
});

Then(/^User can view the tesct case details$/,  { timeout: 100000 }, async function () {
 var status=   await element(by.css(".table-responsive")).getText();
	console.log("Status :"+status);
});





