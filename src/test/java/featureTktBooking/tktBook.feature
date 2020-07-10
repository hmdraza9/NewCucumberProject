Feature: Ticket Booking at Demo Auto

Background: User is on demo page
	Given user is on login page	

Scenario: DemoAuto book ticket booking

When user logs in with credentials
Then user books the ticket
But here we are testing BUT annotation
Then user get confirmation of ticket
Then user quits the browser after ticket booking