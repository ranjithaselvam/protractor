"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const chai_1 = require("chai");
// import * as loctor from '../locators/loctor.json';
// any config=require("../locators/loctor.json")
cucumber_1.Given(/^User launch the chrome browser$/, { timeout: 40000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Step 1: Browser opening");
        protractor_1.browser.waitForAngularEnabled(true);
        protractor_1.browser.manage().window().maximize();
    });
});
cucumber_1.When(/^User opens URL "([^"]*)"$/, { timeout: 70000 }, function (url) {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get(url);
        protractor_1.browser.getCurrentUrl().then(function (url) {
            console.log(url),
                chai_1.expect(url).to.be.equals('http://10.10.10.231:8082/#/app/dashboard');
        });
    });
});
cucumber_1.Then(/^Page Title should be "([^"]*)"$/, { timeout: 70000 }, function (title) {
    return __awaiter(this, void 0, void 0, function* () {
        // let actualTitle= await browser.getTitle();
        // console.log("HI  :"+actualTitle);
        // expect(title).to.be.equals(actualTitle);
        console.log(title);
    });
});
cucumber_1.When(/^Click REST API TEST RESULT Link in dashboard$/, { timeout: 70000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.xpath("(//h4[@class='media-box-heading ng-binding'])[1]")).click();
    });
});
cucumber_1.When(/^Select status as pass$/, { timeout: 70000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.xpath("//select[@name='status']")).$("[value='PASS']").click();
    });
});
cucumber_1.Then(/^Able to get pass test cases$/, { timeout: 70000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        var status = yield protractor_1.element(protractor_1.by.css("#view-report-filter > div.slimScrollDiv > scrollable > table")).getText();
        console.log(status);
    });
});
cucumber_1.When(/^User click on toggle button$/, { timeout: 100000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.css("label.pull-right > span")).click();
        protractor_1.browser.sleep(10000);
    });
});
cucumber_1.Then(/^User can able to view total test run count$/, { timeout: 100000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        var test = yield protractor_1.element(protractor_1.by.xpath("//h4[.='10 TEST(S)']")).getText();
        console.log("total test :" + test);
    });
});
cucumber_1.Then(/^User can able to view pass test percentage$/, { timeout: 100000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        var pass = yield protractor_1.element(protractor_1.by.xpath("//div[6]//div[@class='panel-body text-center']")).getText();
        console.log("total test case Pass :" + pass);
    });
});
cucumber_1.Then(/^User can able to view fail test count$/, { timeout: 100000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        var fail = yield protractor_1.element(protractor_1.by.xpath("//div[7]//div[@class='panel-body text-center']")).getText();
        console.log("total test case Fail :" + fail);
    });
});
cucumber_1.Then(/^User can able to view skip test count$/, { timeout: 100000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        var skip = yield protractor_1.element(protractor_1.by.xpath("//div[8]//div[@class='panel-body text-center']")).getText();
        console.log("total test case Skip :" + skip);
    });
});
cucumber_1.When(/^Click on recent run$/, { timeout: 100000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.css("a[ng-href='#/recentruns/view'] > span")).click();
    });
});
cucumber_1.When(/^Select product$/, { timeout: 100000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.xpath("//tbody[1]/tr[1]/td[contains(.,'REST API TEST RESULT')]")).click();
    });
});
cucumber_1.When(/^Select test case$/, { timeout: 100000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.xpath("//td[contains(.,'downloadImageApiTest')]")).click();
    });
});
cucumber_1.Then(/^User can view the tesct case details$/, { timeout: 100000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        var status = yield protractor_1.element(protractor_1.by.css(".table-responsive")).getText();
        console.log("Status :" + status);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluaXRpb25zL2Rhc2hib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUdBLHVDQUE0QztBQUM1QywyQ0FBaUQ7QUFDakQsK0JBQTJCO0FBRTNCLHFEQUFxRDtBQUNyRCxnREFBZ0Q7QUFHaEQsZ0JBQUssQ0FBQyxrQ0FBa0MsRUFBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRTs7UUFDNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO1FBQ25DLG9CQUFPLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtJQUN4QyxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDRCQUE0QixFQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLFVBQWdCLEdBQUc7O1FBQ3JFLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFdkIsb0JBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxHQUFHO1lBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7Z0JBQzVELGFBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQywwQ0FBMEMsQ0FBQyxDQUFBO1FBQUEsQ0FBQyxDQUFDLENBQUM7SUFJM0UsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxrQ0FBa0MsRUFBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxVQUFnQixLQUFLOztRQUM3RSw2Q0FBNkM7UUFDN0Msb0NBQW9DO1FBQ3BDLDJDQUEyQztRQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUss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