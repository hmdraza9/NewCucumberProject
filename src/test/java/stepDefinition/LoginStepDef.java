package stepDefinition;

import org.openqa.selenium.By;
import org.testng.Assert;

import basePackage.TestBase;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;


public class LoginStepDef extends TestBase {


	@Before
	public void beforeFunction() {
		System.out.println("I am in @Before");
		Assert.assertTrue(driver==null);
	}

	@After
	public void afterFunction() {
		System.out.println("I am in @After");
		driver.quit();
	}
	
	
	@Given("^User is on background page$")
	public void userOnBackgroundPage() {
		System.out.println("userOnBackgroundPage");
	}	
	
	@Given("^user is on login page$")
	public void userOnLoginPage() {
		System.out.println("userOnLoginPage");
		openTktBookUrl();//User is on background page
	}

	@Given("^user verifies the title of the page$")
	public void userValidatesTitle() {
		System.out.println("userValidatesTitle");
		Assert.assertTrue(driver.getTitle().trim().contains(tktBookTitle));
	}	

	@Given("^user enters username and password$")
	public void userEntersCreds() {
		System.out.println("userEntersCreds");
		driver.findElement(By.name("userName")).sendKeys("hmdraza9@gmail.com");
//		driver.findElement(By.name("password")).sendKeys("1q2w3e");
	}

	@Given("^user clicks on login button$")
	public void userClicksLoginButton() {
		System.out.println("userClicksLoginButton");
		driver.findElement(By.name("login")).click();
	}


	@Given("^user verifies the title of the home page$")
	public void userValidatesHomePageTitle() {
		System.out.println("userValidatesHomePageTitle");
		Assert.assertTrue(driver.getTitle().trim().contains(tktBookTitleHome.trim()));
	}	

	@Given("^user quits the browser session$")
	public void userQuitsBrowserSession() {
		System.out.println("userQuitsBrowserSession");
		closeBrowser();
	}
	
}
