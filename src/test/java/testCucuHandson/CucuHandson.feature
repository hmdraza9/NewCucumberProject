Feature: Opening multiple pages
 
Scenario: :
Given I am on Home Page of Website
|http://google.com/|
|http://facebook.com/|
Then I'm taken to Home Page
|[http://googly.com/],[http://googly.com/]|
|http://facebooky.com/|
|http://twitter.com|
|http://mogli.com|
|http://hi5.com|
|http://selenimhq.org|
|0http://telangana.com|
|1http://telangana.com|
|2http://telangana.com|
|3http://telangana.com|
|4http://telangana.com|