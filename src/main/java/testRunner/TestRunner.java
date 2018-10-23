package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/main/java/features",
		glue="stepDef",
		format={"pretty","html: test-output"},
		monochrome = true, 
		strict = true,
		dryRun = true
		)
public class TestRunner {

}
