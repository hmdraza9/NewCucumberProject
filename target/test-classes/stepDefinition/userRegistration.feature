Feature: New users register for flight ticket booking

Scenario Outline: User registration at DemoAuto

Given user is on login page
When user clicks on Register button
Then user fills form including "<userName>" and "<password>"
And user quits the browser session

	Examples:
		|userName		|password	|
		|test1@test.com	|Test1@123	|
		|test2@test.com	|Test2@123	|
		|test3@test.com	|Test3@123	|