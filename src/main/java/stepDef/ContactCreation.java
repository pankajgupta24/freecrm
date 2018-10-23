package stepDef;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class ContactCreation {
	
	WebDriver driver;
	
	@Given("^user is already on login page$")
	public void user_is_already_on_login_page() {
	    System.setProperty("webdriver.chrome.driver", "C:\\Users\\paku0817\\Documents\\tool\\chromedriver.exe");
	   driver= new ChromeDriver();
	   driver.get("https://www.freecrm.com/index.html");
	   
	}

	@When("^title of login page  is free CRM$")
	public void title_of_login_page_is_free_CRM() throws InterruptedException  {
	    String title=driver.getTitle();
	    System.out.println(title);
	    Assert.assertEquals("#1 Free CRM software in the cloud for sales and service", title);
	    Thread.sleep(10000);
	    System.out.println("first when completed");  
	}
	
	@Then("^user enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username(String username, String password) {
	   driver.findElement(By.xpath("//input[contains(@name,'username')]")).sendKeys(username);
	   driver.findElement(By.xpath("//input[contains(@name,'password')]")).sendKeys(password);
	}
	
	@Then("^user click on logion button$")
	public void user_click_on_logion_button()  {
		driver.findElement(By.xpath("//input[contains(@value,'Login')]")).click();   
	}
	
	@Then("^user reaches homepage$")
	public void user_reaches_homepage()  {
	   String homepage=driver.getTitle();
	   System.out.println(homepage);   
	}
	
	@Then("^user click on new contact button$")
	public void user_click_on_new_contact_button() {
	   
	}

	@Then("^user populate \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_populate_and_and(String arg1, String arg2, String arg3)  {
	    
	}

}
