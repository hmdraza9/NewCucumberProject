package runnerPackage;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="C:/workspace/CucumberTest/src/test/java/featuresPackage"
		,glue= {"stepDefinition"},
		format = {"pretty", "html:test-output","json:json_output_/cucumber.json"},
		monochrome=true,
		dryRun=false
		)

public class MyRunnerClassTest {

}
