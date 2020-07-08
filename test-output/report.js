$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("userRegistration.feature");
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
  "duration": 5324047700,
  "status": "passed"
});
formatter.match({
  "location": "UserRegistration.clickOnRegisterDemoAut()"
});
formatter.result({
  "duration": 968205200,
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
  "duration": 3304753500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.userQuitsBrowserSession()"
});
formatter.result({
  "duration": 637474000,
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
  "duration": 5162937100,
  "status": "passed"
});
formatter.match({
  "location": "UserRegistration.clickOnRegisterDemoAut()"
});
formatter.result({
  "duration": 1057306200,
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
  "duration": 3158943200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.userQuitsBrowserSession()"
});
formatter.result({
  "duration": 627820200,
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
  "duration": 5165554600,
  "status": "passed"
});
formatter.match({
  "location": "UserRegistration.clickOnRegisterDemoAut()"
});
formatter.result({
  "duration": 929491300,
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
  "duration": 3131838400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.userQuitsBrowserSession()"
});
formatter.result({
  "duration": 691501300,
  "status": "passed"
});
});