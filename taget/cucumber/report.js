$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Deposit.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: camarasidiki2003@gmail.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario Outline: User should be able to login with valid credentials"
    },
    {
      "line": 5,
      "value": "#Given User is on the techfios login page"
    },
    {
      "line": 6,
      "value": "#When User enters the \"\u003cusername\u003e\""
    },
    {
      "line": 7,
      "value": "#When User enters the \"password\""
    },
    {
      "line": 8,
      "value": "#When User clicks signin button"
    },
    {
      "line": 9,
      "value": "#Then User should land on Dashboard page"
    },
    {
      "line": 10,
      "value": "#When User clicks on \"bankCash\""
    },
    {
      "line": 11,
      "value": "#When User clicks on \"newAccount\""
    },
    {
      "line": 12,
      "value": "#When User enters \"accountTitle\" in accounts page"
    },
    {
      "line": 13,
      "value": "#When User enters \"description\" in accounts page"
    },
    {
      "line": 14,
      "value": "#When User enters \"initialBalance\" in accounts page"
    },
    {
      "line": 15,
      "value": "#When User enters \"accountNumber\" in accounts page"
    },
    {
      "line": 16,
      "value": "#When User enters \"contactPerson\" in accounts page"
    },
    {
      "line": 17,
      "value": "#When User enters \"Phone\" in accounts page"
    },
    {
      "line": 18,
      "value": "#When User enters \"accountTitle\" in accounts page"
    },
    {
      "line": 19,
      "value": "#When User enters \"internetBankingURL\" in accounts page"
    },
    {
      "line": 20,
      "value": "#When User clicks on \"newAccount\""
    },
    {
      "line": 21,
      "value": "#Then User should be able to validate account created successfully"
    }
  ],
  "line": 23,
  "name": "Making Deposit at the bank with Techfios.com",
  "description": "",
  "id": "making-deposit-at-the-bank-with-techfios.com",
  "keyword": "Feature",
  "tags": [
    {
      "line": 22,
      "name": "@Regression"
    },
    {
      "line": 22,
      "name": "@Deposit"
    }
  ]
});
formatter.scenario({
  "line": 26,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "making-deposit-at-the-bank-with-techfios.com;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@Secenario1"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "User is on Techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "User enters username as \"demo@techfios.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User enters password as \"abc123\"",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "User clicks signin button",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "User clicks on bankCash",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "User clicks on newAccount",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User enters accountTitle in accounts page as \"Saving Account\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "User enters description in accounts page as \"This is where I keep my left over\"",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "User enters initialBalance in accounts page as \"75000\"",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "User enters accountNumber in accounts page as \"1452358763\"",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "User enters contactPerson in accounts page as \"Bintou Camus\"",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "User enters Phone in accounts page as \"2142142142\"",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "User enters internetBankingURL in accounts page as \"https://techfios.com/billing/?ng\u003daccounts/list\"",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "User clicks on submit",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Techfios_login_page()"
});
formatter.result({
  "duration": 3152509200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_as(String)"
});
formatter.result({
  "duration": 3127547000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.user_enters_password_as(String)"
});
formatter.result({
  "duration": 3081913300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_signin_button()"
});
formatter.result({
  "duration": 4154886200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_land_on_dashboard_page()"
});
formatter.result({
  "duration": 12829500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_bankCash()"
});
formatter.result({
  "duration": 95862400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_newAccount()"
});
formatter.result({
  "duration": 528361200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Saving Account",
      "offset": 46
    }
  ],
  "location": "LoginStepDefinition.user_enters_accountTitle_in_accounts_page_as(String)"
});
formatter.result({
  "duration": 84668700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is where I keep my left over",
      "offset": 45
    }
  ],
  "location": "LoginStepDefinition.user_enters_description_in_accounts_page_as(String)"
});
formatter.result({
  "duration": 106893300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "75000",
      "offset": 48
    }
  ],
  "location": "LoginStepDefinition.user_enters_initialBalance_in_accounts_page_as(String)"
});
formatter.result({
  "duration": 73894700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1452358763",
      "offset": 47
    }
  ],
  "location": "LoginStepDefinition.user_enters_accountNumber_in_accounts_page_as(String)"
});
formatter.result({
  "duration": 78805200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bintou Camus",
      "offset": 47
    }
  ],
  "location": "LoginStepDefinition.user_enters_contactPerson_in_accounts_page_as(String)"
});
formatter.result({
  "duration": 82773300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2142142142",
      "offset": 39
    }
  ],
  "location": "LoginStepDefinition.user_enters_Phone_in_accounts_page_as(String)"
});
formatter.result({
  "duration": 79625300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://techfios.com/billing/?ng\u003daccounts/list",
      "offset": 52
    }
  ],
  "location": "LoginStepDefinition.user_enters_internetBankingURL_in_accounts_page_as(String)"
});
formatter.result({
  "duration": 131984000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_submit()"
});
formatter.result({
  "duration": 8068035700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 3006472500,
  "status": "passed"
});
});