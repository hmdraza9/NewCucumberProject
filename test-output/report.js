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
