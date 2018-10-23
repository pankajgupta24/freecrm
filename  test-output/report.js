$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "login test to free crm",
  "description": "",
  "id": "login-test-to-free-crm",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "free CRM login test",
  "description": "",
  "id": "login-test-to-free-crm;free-crm-login-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page  is free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters username",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user enters password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on logion button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user reaches homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 10365295023,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 10018317398,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_enters_username()"
});
formatter.result({
  "duration": 136964653,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_enters_password()"
});
formatter.result({
  "duration": 79851346,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_click_on_logion_button()"
});
formatter.result({
  "duration": 5646741892,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_reaches_homepage()"
});
formatter.result({
  "duration": 11326605,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "user create new contact",
  "description": "",
  "id": "login-test-to-free-crm;user-create-new-contact",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "user is already on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user mousehover  on new contact link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user click on new contact link",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user enters first name and lastname",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "verify new contact is created",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactCreation.user_is_already_on_homepage()"
});
formatter.result({
  "duration": 196520,
  "status": "passed"
});
formatter.match({
  "location": "ContactCreation.user_mousehover_on_new_contact_link()"
});
formatter.result({
  "duration": 34413,
  "status": "passed"
});
formatter.match({
  "location": "ContactCreation.user_click_on_new_contact_link()"
});
formatter.result({
  "duration": 44979,
  "status": "passed"
});
formatter.match({
  "location": "ContactCreation.user_enters_first_name_and_lastname()"
});
formatter.result({
  "duration": 45885,
  "status": "passed"
});
formatter.match({
  "location": "ContactCreation.user_clicks_on_save_button()"
});
formatter.result({
  "duration": 35923,
  "status": "passed"
});
formatter.match({
  "location": "ContactCreation.verify_new_contact_is_created()"
});
formatter.result({
  "duration": 72148,
  "status": "passed"
});
});