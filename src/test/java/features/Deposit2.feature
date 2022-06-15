#Author: camarasidiki2003@gmail.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario Outline: User should be able to login with valid credentials 
	#Given User is on the techfios login page 
	#When User enters the "<username>" 
	#When User enters the "password" 
	#When User clicks signin button
	#Then User should land on Dashboard page 
	#When User clicks on "bankCash" 
	#When User clicks on "newAccount" 
	#When User enters "accountTitle" in accounts page 
	#When User enters "description" in accounts page 
	#When User enters "initialBalance" in accounts page 
	#When User enters "accountNumber" in accounts page 
	#When User enters "contactPerson" in accounts page 
	#When User enters "Phone" in accounts page 
	#When User enters "accountTitle" in accounts page 
	#When User enters "internetBankingURL" in accounts page 
	#When User clicks on "newAccount" 
	#Then User should be able to validate account created successfully
@Regression @Deposit
Feature: Making Deposit at the bank with Techfios.com

@Secenario1
Scenario: User should be able to login with valid credentials 
    Given User is on Techfios login page
    When User enters username as "demo@techfios.com"
    When User enters password as "abc123"
    When User clicks signin button
    Then User should land on dashboard page 
    When User clicks on bankCash 
	  When User clicks on newAccount 
	  When User enters accountTitle in accounts page as "Saving Account"
	  When User enters description in accounts page as "This is where I keep my left over" 
    When User enters initialBalance in accounts page as "75000"
	  When User enters accountNumber in accounts page as "1452358763"
	  When User enters contactPerson in accounts page as "Bintou Camus"
	  When User enters Phone in accounts page as "2142142142"
	  When User enters internetBankingURL in accounts page as "https://techfios.com/billing/?ng=accounts/list"
	  When User clicks on submit
	  Then User should be able to validate account created successfully
    

