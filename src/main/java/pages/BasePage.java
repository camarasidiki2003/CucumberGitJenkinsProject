package pages;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

public class BasePage {
	public static WebDriver driver;

	 public static void initDriver() {
	  System.setProperty("webdriver.chrome.driver", "drivers\\chromedriver.exe");
	  driver = new ChromeDriver();
	  driver.manage().window().maximize();
	  driver.manage().deleteAllCookies();
	  driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
	  driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	  driver.get("http://www.techfios.com/billing/?ng=admin/s");

	 }
	 public void takeScreenshot(WebDriver driver)  {  
		  TakesScreenshot ts = (TakesScreenshot)driver;
		  File sourceFile = ts.getScreenshotAs(OutputType.FILE); 
		  String currentDirectory = System.getProperty("user.dir");  
		  SimpleDateFormat formatter = new SimpleDateFormat("MMddyy_HHmmss");
		  Date date = new Date();
		  String label = formatter.format(date);  
		  try {
		   FileUtils.copyFile(sourceFile, new File( currentDirectory + "/screenshot/" + label + ".png"));
		  } catch (IOException e) {
		   e.printStackTrace();
		  }  
		 }
	 public void selectFromDropdown(WebElement element, String visibleText) {

			Select sel = new Select(element);
			sel.selectByVisibleText(visibleText);

		}

		public int generateRandomNo(int boundaryNo) {

			Random rnd = new Random();
			int generatedNo = rnd.nextInt(boundaryNo);
			return generatedNo;

		}


}
