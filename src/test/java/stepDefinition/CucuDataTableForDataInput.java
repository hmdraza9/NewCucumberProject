package stepDefinition;

import java.util.List;

import org.openqa.selenium.WebDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class CucuDataTableForDataInput {

	WebDriver driver = null;
	
	
	@Given("^I am on Home Page of Website$")
	public void loadPage(DataTable arg1) throws Throwable {
		
		List<List<String>> data = arg1.raw();

    	

    	System.out.println("Data.get(0).get(0): "+data.get(0).get(0));
    	System.out.println("data.get(1).get(0): "+data.get(1).get(0));
    	
	}//Then I'm taken to Home Page
	
	
	@Then("^I'm taken to Home Page$")
	public void loginPage(DataTable arg2) {
		List<List<String>> data2 = arg2.raw();
    	System.out.println("Data2.get(0).get(0): "+data2.get(0).get(0));
    	System.out.println("data2.get(1).get(0): "+data2.get(1).get(0));
    	System.out.println("Data2.get(2).get(0): "+data2.get(2).get(0));
    	System.out.println("data2.get(3).get(0): "+data2.get(3).get(0));
    	System.out.println("Data2.get(4).get(0): "+data2.get(4).get(0));
    	System.out.println("data2.get(5).get(0): "+data2.get(5).get(0));
    	System.out.println("Data2.get(6).get(0): "+data2.get(6).get(0));
    	System.out.println("Data2.get(7).get(0): "+data2.get(7).get(0));
    	System.out.println("Data2.get(8).get(0): "+data2.get(8).get(0));
    	System.out.println("Data2.get(9).get(0): "+data2.get(9).get(0));
    	System.out.println("Data2.get(10).get(0): "+data2.get(10).get(0));
	}
	
	
}
