Feature: Ticket Booking at Demo Auto

Scenario: DemoAuto book ticket booking

Given user is on login page
When user logs in with credentials
Then user books the ticket
Then user get confirmation of ticket
Then user quits the browser after ticket booking
