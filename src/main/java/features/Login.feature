Feature: login test to free crm
Scenario Outline: free CRM login test

Given user is already on login page
When title of login page  is free CRM
Then user enters "<username>"
Then user enters "<password>"
Then user click on logion button
Then user reaches homepage

Examples:
		|username		| password|
		|pankajgupta24	| 9015pankaj|

#Scenario: user create new contact
#Given user is already on homepage
#When user mousehover  on new contact link
#Then user click on new contact link
#Then user enters first name and lastname
#Then user clicks on save button
#Then verify new contact is created