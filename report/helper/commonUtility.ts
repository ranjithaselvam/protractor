 
 import { ElementFinder, element, by, browser, ExpectedConditions, WebElement, protractor } from "protractor";
 export class ElementHelper {

    locatortype(locator: string) {
        var elementObj: ElementFinder;
        var arrayLocator: string[] = locator.split(":", 2);
        switch (arrayLocator[0]) {
            // Find by xpath
            case "Id":
                elementObj = element(by.id(arrayLocator[1]));
                break;
            case "Css":
                elementObj = element(by.css(arrayLocator[1]));
                break;
            case "Name":
                elementObj = element(by.name(arrayLocator[1]));
                break;
            case "PARTIALLINK":
                elementObj = element(by.partialLinkText(arrayLocator[1]));
                break;
            case "LINK":
                elementObj = element(by.linkText(arrayLocator[1]));
                break;
            case "TAGNAME":
                elementObj = element(by.tagName(arrayLocator[1]));
                break;
            case "Model":
                elementObj = element(by.model(arrayLocator[1]))
                break;
            case "Xpath":
                    elementObj = element(by.xpath(arrayLocator[1]))
                    break;
            case "BIND":
                elementObj = element(by.exactBinding(arrayLocator[1]))
                break;
            case "ButtonText":
                elementObj = element(by.buttonText(arrayLocator[1]))
                break;
            case "Repeater":
                elementObj = element(by.repeater(arrayLocator[1]))
                break;
            case "Option":
                elementObj = element(by.options(arrayLocator[1]))
                break;
            default:
                elementObj = element(by.xpath(arrayLocator[1]))
        }
        return elementObj;
    }
 
 // get text of the limit//
 getText(locator: string) {
    return this.locatortype(locator).getText().then(function (text: string) {

        return text
    })

}


// send keys and enter !!
typeAndEnter(locator: string) {
    var elementObj: ElementFinder;
    elementObj = this.locatortype(locator);
    elementObj.isDisplayed().then(function () {
        elementObj.isEnabled().then(function () {
            elementObj.clear().then(function () {
                elementObj.sendKeys(protractor.Key.ENTER)
            })
        })


    })

}



// click on the element
clickOnElement(locator: string) {
    var elementObj: ElementFinder;
    elementObj = this.locatortype(locator)
    elementObj.isDisplayed().then(function () {
        elementObj.isEnabled().then(function () {
            elementObj.click();

        })
    })
}




getTtitle(title: string) {


    return browser.getTitle().then(function (titleTxt: string) {
        return titleTxt


    })
}

 }