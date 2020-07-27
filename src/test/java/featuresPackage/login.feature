Feature: Demo Auto login feature


Background: User is on background page
Given User is on background page

Scenario: DemoAuto login scenario with before and after :: 1

Given user is on login page
When user verifies the title of the page
Then user enters username and password
Then user clicks on login button
Then user verifies the title of the home page
Then user quits the browser session

Scenario Outline: User print DemoAuto :: 2

Given user is on login page
When user verifies the title of the page
Then user enters username and password
Then user clicks on login button
Then user verifies the title of the home page
Then user quits the browser session
Then user print following "<string>"

Examples:
	|string|
	|String 1|
	|String 2|
	|String 3|
	|String 4|
	|String 5|
	|String 6|

Scenario: DemoAuto login scenario with before and after :: 3

Given user is on login page
When user verifies the title of the page
Then user enters username and password
Then user clicks on login button
Then user verifies the title of the home page
Then user quits the browser session

Scenario: DemoAuto login scenario with before and after :: 4

Given user is on login page
When user verifies the title of the page
Then user enters username and password
Then user clicks on login button
Then user verifies the title of the home page
Then user quits the browser session

Scenario: DemoAuto login scenario with before and after :: 5

Given user is on login page
When user verifies the title of the page
Then user enters username and password
Then user clicks on login button
Then user verifies the title of the home page
Then user quits the browser session

Scenario: DemoAuto login scenario with before and after :: 6

Given user is on login page
When user verifies the title of the page
Then user enters username and password
Then user clicks on login button
Then user verifies the title of the home page
Then user quits the browser session

Scenario: DemoAuto login scenario with before and after :: 7

Given user is on login page
When user verifies the title of the page
Then user enters username and password
Then user clicks on login button
Then user verifies the title of the home page
Then user quits the browser session

Scenario: DemoAuto login scenario with before and after :: 8

Given user is on login page
When user verifies the title of the page
Then user enters username and password
Then user clicks on login button
Then user verifies the title of the home page
Then user quits the browser session