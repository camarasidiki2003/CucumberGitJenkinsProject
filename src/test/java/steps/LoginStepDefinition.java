package steps;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pages.BankAndCashPage;
import pages.BasePage;
import pages.LoginPage;

public class LoginStepDefinition extends BasePage {
	LoginPage loginPage;
	BankAndCashPage bankAndCashPage;

	@Given("^User is on Techfios login page$")
	public void user_is_on_Techfios_login_page() {
		initDriver();
		driver.get("http://www.techfios.com/billing/?ng=admin/s");

	}

	@When("^User enters username as \"([^\"]*)\"$")
	public void user_enters_username_as(String username) {
		loginPage = PageFactory.initElements(driver, LoginPage.class);
		loginPage.enterUserName(username);

	}

	@When("^User enters password as \"([^\"]*)\"$")
	public void user_enters_password_as(String password) {
		loginPage = PageFactory.initElements(driver, LoginPage.class);
		loginPage.enterPassword(password);
	}

	@When("^User clicks signin button$")
	public void user_clicks_signin_button() {
		loginPage = PageFactory.initElements(driver, LoginPage.class);
		loginPage.clickSignInButton();
	}

	@Then("^User should land on dashboard page$")
	public void user_should_land_on_dashboard_page() {
		Assert.assertEquals("Dashboard- iBilling", loginPage.getPageTitle());
	}
	@When("^User clicks on bankCash$")
	public void user_clicks_on_bankCash()  {
		bankAndCashPage = PageFactory.initElements(driver, BankAndCashPage.class);
		bankAndCashPage.clickOnBankAndCashMenu();  
	}

	@When("^User clicks on newAccount$")
	public void user_clicks_on_newAccount()  {
		bankAndCashPage = PageFactory.initElements(driver, BankAndCashPage.class);
		bankAndCashPage.clickOnNewAccountMenu();
	}

	@When("^User enters accountTitle in accounts page as \"([^\"]*)\"$")
	public void user_enters_accountTitle_in_accounts_page_as(String accountTitle) {
		bankAndCashPage.insertAccountTitle(accountTitle);  
	}

	@When("^User enters description in accounts page as \"([^\"]*)\"$")
	public void user_enters_description_in_accounts_page_as(String description) {
	  bankAndCashPage.insertDescription(description); 
	}

	@When("^User enters initialBalance in accounts page as \"([^\"]*)\"$")
	public void user_enters_initialBalance_in_accounts_page_as(String initialBalance) {
	    bankAndCashPage.insertInitialBalance(initialBalance);
	}

	@When("^User enters accountNumber in accounts page as \"([^\"]*)\"$")
	public void user_enters_accountNumber_in_accounts_page_as(String accountNumber) {
	   bankAndCashPage.insertAccountNumber(accountNumber);
	}

	@When("^User enters contactPerson in accounts page as \"([^\"]*)\"$")
	public void user_enters_contactPerson_in_accounts_page_as(String contactPerson) {
	   bankAndCashPage.insertContactPerson(contactPerson);
	}


@When("^User enters Phone in accounts page as \"([^\"]*)\"$")
public void user_enters_Phone_in_accounts_page_as(String phone) {
    bankAndCashPage.insertPhone(phone);
}

@When("^User enters internetBankingURL in accounts page as \"([^\"]*)\"$")
public void user_enters_internetBankingURL_in_accounts_page_as(String internetBankingURL) throws Throwable {
    bankAndCashPage.insertinternetyBankingUrl(internetBankingURL);
}
@When("^User clicks on submit$")
public void user_clicks_on_submit() throws InterruptedException {
   bankAndCashPage = PageFactory.initElements(driver, BankAndCashPage.class);
   Thread.sleep(3000);
   bankAndCashPage.clickOnSubmitButton(); 
   
}
public String getPageTitle() {
	
	  return driver.getTitle();
	 }
  @Then("^User should be able to validate account created successfully$")
  public void user_should_be_able_to_validate_account_created_successfully() {
	  try {
		Thread.sleep(3000);
	} catch (InterruptedException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
   Assert.assertEquals("Accounts- iBilling", getPageTitle());
	  
 
  
  }
 
 

}