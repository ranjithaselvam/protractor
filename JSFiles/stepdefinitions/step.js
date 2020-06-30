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
cucumber_1.Given(/^Open the atmecs dashboard website$/, { timeout: 40000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Browser launching");
        protractor_1.browser.waitForAngularEnabled(true);
        console.log("entered url");
        yield protractor_1.browser.get('http://10.10.10.231:8082/#/app/dashboard');
        yield protractor_1.browser.manage().window().maximize();
    });
});
cucumber_1.When(/^Click the rest api test result link and select  the status as pass$/, { timeout: 60000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.manage().timeouts().implicitlyWait(60000);
        yield protractor_1.element(protractor_1.by.css("a[href='#/reports/9546'] .media-box-heading")).click;
        yield protractor_1.element(protractor_1.by.css("[name='status']")).click;
        // const title=browser.getTitle
        // console.log(title)
    });
});
cucumber_1.Then(/^ verify the user got the status pass or not$/, { timeout: 40000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("hi");
        var status = yield protractor_1.element(protractor_1.by.css(".table.ng-table-rowselected.ng-scope.ng-table")).getText;
        console.log(status);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBEZWZpbml0aW9ucy9zdGVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTRDO0FBQzVDLDJDQUFpRDtBQUdqRCxnQkFBSyxDQUFDLHFDQUFxQyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFOztRQUM3RCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUE7UUFDaEMsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQzFCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsMENBQTBDLENBQUMsQ0FBQztRQUMvRCxNQUFNLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUE7SUFFN0MsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUtILGVBQUksQ0FBQyxzRUFBc0UsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRTs7UUFDN0Ysb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEQsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsNkNBQTZDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUMzRSxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFBO1FBQzlDLCtCQUErQjtRQUMvQixxQkFBcUI7SUFFekIsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUtILGVBQUksQ0FBQywrQ0FBK0MsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRTs7UUFDdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNuQixJQUFJLE1BQU0sR0FBRSxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFBO1FBQzFGLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDckIsQ0FBQztDQUFBLENBQUMsQ0FBQyJ9