$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Demo Auto login feature",
  "description": "",
  "id": "demo-auto-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "DemoAuto login scenario",
  "description": "",
  "id": "demo-auto-login-feature;demoauto-login-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user verifies the title of the page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user verifies the title of the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user quits the browser session",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.userOnLoginPage()"
});
formatter.result({
  "duration": 6633166200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.userValidatesTitle()"
});
formatter.result({
  "duration": 21950000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.userEntersCreds()"
});
formatter.result({
  "duration": 342568000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.userClicksLoginButton()"
});
formatter.result({
  "duration": 3001466700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.userValidatesHomePageTitle()"
});
formatter.result({
  "duration": 6333700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.userQuitsBrowserSession()"
});
formatter.result({
  "duration": 559349200,
  "status": "passed"
});
formatter.uri("tktBook.feature");
formatter.feature({
  "line": 1,
  "name": "Ticket Booking at Demo Auto",
  "description": "",
  "id": "ticket-booking-at-demo-auto",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "DemoAuto book ticket booking",
  "description": "",
  "id": "ticket-booking-at-demo-auto;demoauto-book-ticket-booking",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user logs in with credentials",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user books the ticket",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user get confirmation of ticket",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user quits the browser after ticket booking",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.userOnLoginPage()"
});
formatter.result({
  "duration": 5300528800,
  "status": "passed"
});
formatter.match({
  "location": "TicketBookStepDef.userLogin()"
});
formatter.result({
  "duration": 3132531400,
  "status": "passed"
});
formatter.match({
  "location": "TicketBookStepDef.userBooksTicket()"
});
formatter.result({
  "duration": 3267264400,
  "status": "passed"
});
formatter.match({
  "location": "TicketBookStepDef.tktConfirm()"
});
formatter.result({
  "duration": 22549300,
  "status": "passed"
});
formatter.match({
  "location": "TicketBookStepDef.userQuitsBrowser()"
});
formatter.result({
  "duration": 561982600,
  "status": "passed"
});
formatter.uri("userRegistration.feature");
formatter.feature({
  "line": 1,
  "name": "New users register for flight ticket booking",
  "description": "",
  "id": "new-users-register-for-flight-ticket-booking",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User registration at DemoAuto",
  "description": "",
  "id": "new-users-register-for-flight-ticket-booking;user-registration-at-demoauto",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user clicks on Register button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user fills form including \"\u003cuserName\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user quits the browser session",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "new-users-register-for-flight-ticket-booking;user-registration-at-demoauto;",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 11,
      "id": "new-users-register-for-flight-ticket-booking;user-registration-at-demoauto;;1"
    },
    {
      "cells": [
        "test1@test.com",
        "Test1@123"
      ],
      "line": 12,
      "id": "new-users-register-for-flight-ticket-booking;user-registration-at-demoauto;;2"
    },
    {
      "cells": [
        "test2@test.com",
        "Test2@123"
      ],
      "line": 13,
      "id": "new-users-register-for-flight-ticket-booking;user-registration-at-demoauto;;3"
    },
    {
      "cells": [
        "test3@test.com",
        "Test3@123"
      ],
      "line": 14,
      "id": "new-users-register-for-flight-ticket-booking;user-registration-at-demoauto;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "User registration at DemoAuto",
  "description": "",
  "id": "new-users-register-for-flight-ticket-booking;user-registration-at-demoauto;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user clicks on Register button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user fills form including \"test1@test.com\" and \"Test1@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user quits the browser session",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.userOnLoginPage()"
});
formatter.result({
  "duration": 5319066100,
  "status": "passed"
});
formatter.match({
  "location": "UserRegistration.clickOnRegisterDemoAut()"
});
formatter.result({
  "duration": 963775200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test1@test.com",
      "offset": 27
    },
    {
      "val": "Test1@123",
      "offset": 48
    }
  ],
  "location": "UserRegistration.userFillRegForm(String,String)"
});
formatter.result({
  "duration": 3494655000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.userQuitsBrowserSession()"
});
formatter.result({
  "duration": 564951100,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User registration at DemoAuto",
  "description": "",
  "id": "new-users-register-for-flight-ticket-booking;user-registration-at-demoauto;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user clicks on Register button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user fills form including \"test2@test.com\" and \"Test2@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user quits the browser session",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.userOnLoginPage()"
});
formatter.result({
  "duration": 5217095700,
  "status": "passed"
});
formatter.match({
  "location": "UserRegistration.clickOnRegisterDemoAut()"
});
formatter.result({
  "duration": 955128600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test2@test.com",
      "offset": 27
    },
    {
      "val": "Test2@123",
      "offset": 48
    }
  ],
  "location": "UserRegistration.userFillRegForm(String,String)"
});
formatter.result({
  "duration": 3444364700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.userQuitsBrowserSession()"
});
formatter.result({
  "duration": 544482500,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User registration at DemoAuto",
  "description": "",
  "id": "new-users-register-for-flight-ticket-booking;user-registration-at-demoauto;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user clicks on Register button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user fills form including \"test3@test.com\" and \"Test3@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user quits the browser session",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.userOnLoginPage()"
});
formatter.result({
  "duration": 5355893600,
  "status": "passed"
});
formatter.match({
  "location": "UserRegistration.clickOnRegisterDemoAut()"
});
formatter.result({
  "duration": 960089000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test3@test.com",
      "offset": 27
    },
    {
      "val": "Test3@123",
      "offset": 48
    }
  ],
  "location": "UserRegistration.userFillRegForm(String,String)"
});
formatter.result({
  "duration": 3327480600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.userQuitsBrowserSession()"
});
formatter.result({
  "duration": 548438500,
  "status": "passed"
});
});