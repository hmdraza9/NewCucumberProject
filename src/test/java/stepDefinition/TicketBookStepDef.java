package stepDefinition;

import org.junit.Assert;
import org.openqa.selenium.By;

import basePackage.TestBase;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TicketBookStepDef extends TestBase {

	String Url = "http://newtours.demoaut.com/";
	String tktConfirmTitle = "Flight Confirmation: Mercury Tours";
		
	@When("^user logs in with credentials$")
	public void userLogin() {
		driver.findElement(By.name("userName")).sendKeys("hmdraza9@gmail.com");
		driver.findElement(By.name("password")).sendKeys("1q2w3e");
		driver.findElement(By.name("login")).click();
	}
	
	@Then("^user books the ticket$")
	public void userBooksTicket() {
		driver.findElement(By.xpath("//*[@name='tripType' and @value='oneway']")).click();
		driver.findElement(By.xpath("//*[@name='servClass' and @value='Business']")).click();
		driver.findElement(By.name("findFlights")).click();
		driver.findElement(By.name("reserveFlights")).click();
		driver.findElement(By.name("buyFlights")).click();
	}


	@Then("^user get confirmation of ticket$")
	public void tktConfirm() {
		
		Assert.assertTrue(driver.getTitle().trim().contains(tktConfirmTitle.trim()));
	}//closeBrowser();
	

	@Then("^user quits the browser after ticket booking$")
	public void userQuitsBrowser() {
		closeBrowser();
	}
	
}
