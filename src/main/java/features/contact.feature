Feature: contact creation in free crm application
Scenario Outline: free CRM login test with contact creation

Given user is already on login page
When title of login page  is free CRM
Then user enters "<username>" and "<password>"
Then user click on logion button
Then user reaches homepage
Then user click on new contact button
Then user populate "<firstname>" and "<lastname>" and "<position>"
Then user closes the browser

Examples:
		| username		| password	|firstname	| lastname	| position	|
		| pankajgupta24	| 9015pankaj|pankaj		| kumar		|QA			|
		| admin			|admin		|amdocs		|pune		|dev		|