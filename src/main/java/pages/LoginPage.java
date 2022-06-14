package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage extends BasePage{
	WebDriver driver;
	 public LoginPage(WebDriver driver) {
	  this.driver = driver;
	 }

	 // Element Library
	 @FindBy(how = How.XPATH, using = "//input[@id='username']")
	 WebElement UserName;
	 @FindBy(how = How.XPATH, using = "//input[@id='password']")
	 WebElement Password;
	 @FindBy(how = How.XPATH, using = "//button[@name='login']")
	 WebElement SignInButton;

	 // Methods to interact with the elements
	 public void enterUserName(String username) {
	  UserName.sendKeys(username);
	  try {
	   Thread.sleep(3000);
	  } catch (InterruptedException e) {
	   e.printStackTrace();
	  }
	 }
	 public void enterPassword(String password) {
		  Password.sendKeys(password);

		  try {
		   Thread.sleep(3000);
		  } catch (InterruptedException e) {
		   e.printStackTrace();
		  }
		 }

		 public void clickSignInButton() {
		  SignInButton.click();
		  try {
		   Thread.sleep(3000);
		  } catch (InterruptedException e) {
		   e.printStackTrace();
		  }
		 }

		 public String getPageTitle() {
			
		  return driver.getTitle();
		 }
		 public void clickOnBankAndCash() {
			 
		 }
		 public void cliskOnNewAccount() {
			 
		 }
		 public void enterAccountTitle() {
			 
		 }
		 public void enterDescription() {
			 
		 }
		 public void enterInitialBalance() {
			 
		 }
		 public void enterAccountNumber() {
			 
		 }
		 public void enterContactPerson() {
			 
		 }
		 public void enterPhone() {
			 
		 }
		 public void enterInternetBankingUrl() {
			 
		 }
		 public void clickOnNewAccount2() {
			 
		 }
		 public void validateAccountCreatedSuccessfully(){
			 
		 }
		 
		 


}
