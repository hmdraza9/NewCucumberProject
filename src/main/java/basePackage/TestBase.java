package basePackage;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class TestBase {



	public static WebDriver driver;
	public static ChromeOptions co;
	public static String tktBookUrl = "http://newtours.demoaut.com/";
	public static String tktBookTitle = "Welcome: Mercury Tours";
	public static String tktBookTitleHome = "Find a Flight: Mercury Tours";
	public static String tktConfirmTitle = "Flight Confirmation: Mercury Tours";
	

	
	public static void openTktBookUrl(){
		System.setProperty("webdriver.chrome.driver", "C:/Users/Abdul Hamid Raza/Documents/all-drivers/chromedriver.exe");
		co = new ChromeOptions();
//		co.addArguments("--headless");
		co.addArguments("start-maximized");
		co.addArguments("--disable-infobars");
//		co.addArguments("--incognito");
		driver = new ChromeDriver(co);
		driver.get(tktBookUrl);
	}
	
	public static void closeBrowser() {
		driver.quit();
	}
	
}
