$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/smartBearSoftwareLogin.feature");
formatter.feature({
  "name": "Validate SmartBearSoftware Login features",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"http://secure.smartbearsoftware.com/samples/testcomplete12/WebOrders/login.aspx\"",
  "keyword": "Given "
});
formatter.match({
  "location": "SmartBearSoftwareLoginSteps.userIsOn(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate \"Web Orders\" menu items",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "user enters username as \"Tester\"",
  "keyword": "When "
});
formatter.match({
  "location": "SmartBearSoftwareLoginSteps.userEntersUsernameAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password as \"test\"",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSoftwareLoginSteps.userEntersPasswordAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSoftwareLoginSteps.userClicksOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be routed to \"http://secure.smartbearsoftware.com/samples/testcomplete12/weborders/\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SmartBearSoftwareLoginSteps.userShouldBeRoutedTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate below menu items are displayed",
  "rows": [
    {
      "cells": [
        "View all orders",
        "View all products",
        "Order"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSoftwareLoginSteps.validateBelowMenuItemsAreDisplayed(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"http://secure.smartbearsoftware.com/samples/testcomplete12/WebOrders/login.aspx\"",
  "keyword": "Given "
});
formatter.match({
  "location": "SmartBearSoftwareLoginSteps.userIsOn(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate \"Check All\" and \"Uncheck All\" links",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "user enters username as \"Tester\"",
  "keyword": "When "
});
formatter.match({
  "location": "SmartBearSoftwareLoginSteps.userEntersUsernameAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password as \"test\"",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSoftwareLoginSteps.userEntersPasswordAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSoftwareLoginSteps.userClicksOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be routed to \"http://secure.smartbearsoftware.com/samples/testcomplete12/weborders/\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SmartBearSoftwareLoginSteps.userShouldBeRoutedTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Check All\" button",
  "keyword": "When "
});
formatter.match({
  "location": "SmartBearSoftwareLoginSteps.userClicksOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "all rows should be checked",
  "keyword": "Then "
});
formatter.match({
  "location": "SmartBearSoftwareLoginSteps.allRowsShouldBeChecked()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Uncheck All\" button",
  "keyword": "When "
});
formatter.match({
  "location": "SmartBearSoftwareLoginSteps.userClicksOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "all rows should be unchecked",
  "keyword": "Then "
});
formatter.match({
  "location": "SmartBearSoftwareLoginSteps.allRowsShouldBeUnchecked()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"http://secure.smartbearsoftware.com/samples/testcomplete12/WebOrders/login.aspx\"",
  "keyword": "Given "
});
formatter.match({
  "location": "SmartBearSoftwareLoginSteps.userIsOn(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate adding new order",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "user is on \"http://secure.smartbearsoftware.com/samples/testcomplete12/WebOrders/login.aspx\"",
  "keyword": "Given "
});
formatter.match({
  "location": "SmartBearSoftwareLoginSteps.userIsOn(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username as \"Tester\"",
  "keyword": "When "
});
formatter.match({
  "location": "SmartBearSoftwareLoginSteps.userEntersUsernameAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password as \"test\"",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSoftwareLoginSteps.userEntersPasswordAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSoftwareLoginSteps.userClicksOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be routed to \"http://secure.smartbearsoftware.com/samples/testcomplete12/weborders/\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SmartBearSoftwareLoginSteps.userShouldBeRoutedTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Order\" menu item",
  "keyword": "When "
});
formatter.match({
  "location": "SmartBearSoftwareLoginSteps.userClicksOnMenuItem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects \"FamilyAlbum\" as product",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSoftwareLoginSteps.userSelectsAsProduct(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters 2 as quantity",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSoftwareLoginSteps.userEntersAsQuantity(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters all address information",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSoftwareLoginSteps.userEntersAllAddressInformation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters all payment information",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSoftwareLoginSteps.userEntersAllPaymentInformation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Process\" button",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSoftwareLoginSteps.userClicksOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"View all orders\" menu item",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSoftwareLoginSteps.userClicksOnMenuItem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see their order displayed in the \"List of All Orders\" table",
  "keyword": "Then "
});
formatter.match({
  "location": "SmartBearSoftwareLoginSteps.userShouldSeeTheirOrderDisplayedInTheTable(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate all information entered displayed correct with the order",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSoftwareLoginSteps.validateAllInformationEnteredDisplayedCorrectWithTheOrder()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"http://secure.smartbearsoftware.com/samples/testcomplete12/WebOrders/login.aspx\"",
  "keyword": "Given "
});
formatter.match({
  "location": "SmartBearSoftwareLoginSteps.userIsOn(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate \"Delete Selected\" button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "user is on \"http://secure.smartbearsoftware.com/samples/testcomplete12/WebOrders/login.aspx\"",
  "keyword": "Given "
});
formatter.match({
  "location": "SmartBearSoftwareLoginSteps.userIsOn(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username as \"Tester\"",
  "keyword": "When "
});
formatter.match({
  "location": "SmartBearSoftwareLoginSteps.userEntersUsernameAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password as \"test\"",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSoftwareLoginSteps.userEntersPasswordAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSoftwareLoginSteps.userClicksOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be routed to \"http://secure.smartbearsoftware.com/samples/testcomplete12/weborders/\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SmartBearSoftwareLoginSteps.userShouldBeRoutedTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Check All\" button",
  "keyword": "When "
});
formatter.match({
  "location": "SmartBearSoftwareLoginSteps.userClicksOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Delete Selected\" button",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSoftwareLoginSteps.userClicksOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate all orders are deleted from the \"List of All Orders\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SmartBearSoftwareLoginSteps.validateAllOrdersAreDeletedFromThe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate user sees \"List of orders is empty. In order to add new order use this link.\" message",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSoftwareLoginSteps.validateUserSeesMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});