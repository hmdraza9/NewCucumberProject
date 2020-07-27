package stepDefinition;

import org.junit.Assert;
import org.openqa.selenium.By;

import basePackage.TestBase;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class UserRegistrationStepDef extends TestBase{

	
	public static String registrationSuccessTest="";
	@When("^user clicks on Register button$")
	public void clickOnRegisterDemoAut() {
		System.out.println("I am in UserRegistrationStepDef class");
		driver.findElement(By.xpath("//table/tbody/tr[2]/td/table/tbody/tr/td[@class='mouseOut']/a[text()='REGISTER']")).click();
	}
	
	@Then("^user fills form including \"([^\"]*)\" and \\\"([^\\\"]*)\\\"$")
	public void userFillRegForm(String userName, String password) {
		driver.findElement(By.id("email")).sendKeys(userName);
		driver.findElement(By.name("password")).sendKeys(password);//confirmPassword
		driver.findElement(By.name("confirmPassword")).sendKeys(password);//confirmPassword
		driver.findElement(By.name("register")).click();
		String str = driver.findElement(By.xpath("//*[table/tbody/tr/td/table/tbody/tr[3]/td/p[3]/a/font/b]")).getText();
		Assert.assertTrue(str.contains(("Your user name is "+userName)));
	}
}


