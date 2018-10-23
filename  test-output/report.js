$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "login test to free crm",
  "description": "",
  "id": "login-test-to-free-crm",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "free CRM login test",
  "description": "",
  "id": "login-test-to-free-crm;free-crm-login-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
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
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user click on logion button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user reaches homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user closes the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "login-test-to-free-crm;free-crm-login-test;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "login-test-to-free-crm;free-crm-login-test;;1"
    },
    {
      "cells": [
        "pankajgupta24",
        "9015pankaj"
      ],
      "line": 13,
      "id": "login-test-to-free-crm;free-crm-login-test;;2"
    },
    {
      "cells": [
        "admin",
        "admin"
      ],
      "line": 14,
      "id": "login-test-to-free-crm;free-crm-login-test;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "free CRM login test",
  "description": "",
  "id": "login-test-to-free-crm;free-crm-login-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "user enters \"pankajgupta24\" and \"9015pankaj\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user click on logion button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user reaches homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user closes the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_is_already_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDef.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "pankajgupta24",
      "offset": 13
    },
    {
      "val": "9015pankaj",
      "offset": 33
    }
  ],
  "location": "LoginStepDef.user_enters_username(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDef.user_click_on_logion_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDef.user_reaches_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDef.user_closes_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 14,
  "name": "free CRM login test",
  "description": "",
  "id": "login-test-to-free-crm;free-crm-login-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "user enters \"admin\" and \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user click on logion button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user reaches homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user closes the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_is_already_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDef.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 13
    },
    {
      "val": "admin",
      "offset": 25
    }
  ],
  "location": "LoginStepDef.user_enters_username(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDef.user_click_on_logion_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDef.user_reaches_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDef.user_closes_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("contact.feature");
formatter.feature({
  "line": 1,
  "name": "contact creation in free crm application",
  "description": "",
  "id": "contact-creation-in-free-crm-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "free CRM login test with contact creation",
  "description": "",
  "id": "contact-creation-in-free-crm-application;free-crm-login-test-with-contact-creation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
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
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user click on logion button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user reaches homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user click on new contact button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user populate \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user closes the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "contact-creation-in-free-crm-application;free-crm-login-test-with-contact-creation;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 14,
      "id": "contact-creation-in-free-crm-application;free-crm-login-test-with-contact-creation;;1"
    },
    {
      "cells": [
        "pankajgupta24",
        "9015pankaj",
        "pankaj",
        "kumar",
        "QA"
      ],
      "line": 15,
      "id": "contact-creation-in-free-crm-application;free-crm-login-test-with-contact-creation;;2"
    },
    {
      "cells": [
        "admin",
        "admin",
        "amdocs",
        "pune",
        "dev"
      ],
      "line": 16,
      "id": "contact-creation-in-free-crm-application;free-crm-login-test-with-contact-creation;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "free CRM login test with contact creation",
  "description": "",
  "id": "contact-creation-in-free-crm-application;free-crm-login-test-with-contact-creation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "user enters \"pankajgupta24\" and \"9015pankaj\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user click on logion button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user reaches homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user click on new contact button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user populate \"pankaj\" and \"kumar\" and \"QA\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user closes the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_is_already_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDef.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "pankajgupta24",
      "offset": 13
    },
    {
      "val": "9015pankaj",
      "offset": 33
    }
  ],
  "location": "LoginStepDef.user_enters_username(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDef.user_click_on_logion_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDef.user_reaches_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LoginStepDef.user_closes_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "free CRM login test with contact creation",
  "description": "",
  "id": "contact-creation-in-free-crm-application;free-crm-login-test-with-contact-creation;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "user enters \"admin\" and \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user click on logion button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user reaches homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user click on new contact button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user populate \"amdocs\" and \"pune\" and \"dev\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user closes the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_is_already_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDef.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 13
    },
    {
      "val": "admin",
      "offset": 25
    }
  ],
  "location": "LoginStepDef.user_enters_username(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDef.user_click_on_logion_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDef.user_reaches_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LoginStepDef.user_closes_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});