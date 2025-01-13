package runnerPackage;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/test/java/testCucuHandsOn"
		,glue= {"stepDefinition"},
		format = {"pretty", "html:test-output","json:json_output_/cucumber.json"},
		monochrome=true,
		dryRun=false
		)

public class CucuHandsonClass {

}