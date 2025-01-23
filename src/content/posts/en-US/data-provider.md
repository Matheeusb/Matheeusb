Writing automated tests is crucial to ensure software quality. However, creating tests for every possible scenario can be laborious and time-consuming. That's where TestNG's **DataProvider** comes in!

The _DataProvider_ is a powerful feature that allows you to dynamically provide test data for your automated tests. This means you can write a single test and run it with different data sets, significantly increasing test coverage without the need to write more code.

## In Practice

To exemplify the use of _DataProvider_, let's use a method that validates a person's age, which for educational purposes, must be between 18 and 100 years old.

```java
public boolean isValidAge(int age) {
    return age >= 18 && age <= 100;
}
```

To validate this method, we can use some testing techniques, such as **equivalence partitioning** and **boundary value analysis**, to have good code coverage. With this, we would need to build the following tests:

```java
import com.matheusbereta.entities.User;
import org.testng.Assert;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class UserTest {

    private User user;

    @BeforeClass
    void setUp() {
        user = new User();
    }

    @Test
    void shouldReturnFalseWhenAgeIs17() {
        Assert.assertFalse(user.isValidAge(17));
    }

    @Test
    void shouldReturnTrueWhenAgeIs18() {
        Assert.assertTrue(user.isValidAge(18));
    }

    @Test
    void shouldReturnTrueWhenAgeIs19() {
        Assert.assertTrue(user.isValidAge(19));
    }

    @Test
    void shouldReturnTrueWhenAgeIs50() {
        Assert.assertTrue(user.isValidAge(50));
    }

    @Test
    void shouldReturnTrueWhenAgeIs99() {
        Assert.assertTrue(user.isValidAge(99));
    }

    @Test
    void shouldReturnTrueWhenAgeIs100() {
        Assert.assertTrue(user.isValidAge(100));
    }

    @Test
    void shouldReturnFalseWhenAgeIs101() {
        Assert.assertFalse(user.isValidAge(101));
    }

}
```

Perfect, we have good test coverage! But what if we could reduce the number of tests, given that the assertions are only _assertTrue_ or _assertFalse_? This is where **DataProvider** comes in! Let's refactor these tests using this powerful TestNG feature.

```java
import com.matheusbereta.entities.User;
import org.testng.Assert;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

public class UserTest {

    @DataProvider(name = "validAgeData")
    public Object[][] validAgeData() {
        return new Object[][] {
                {18},
                {19},
                {50},
                {99},
                {100},
        };
    }

    @DataProvider(name = "invalidAgeData")
    public Object[][] invalidAgeData() {
        return new Object[][] {
                {17},
                {101},
        };
    }

    private User user;

    @BeforeClass
    void setUp() {
        user = new User();
    }

    @Test(dataProvider = "validAgeData")
    void shouldReturnTrueWhenAgeIsValid(int validAge) {
        Assert.assertTrue(user.isValidAge(validAge));
    }

    @Test(dataProvider = "invalidAgeData")
    void shouldReturnFalseWhenAgeIsInvalid(int invalidAge) {
        Assert.assertFalse(user.isValidAge(invalidAge));
    }

}
```

This way we have our code more organized, since using the **@DataProvider** annotation, we centralize all the data used in our tests and reuse the test scripts.

With this approach, we can also speed up the development of our tests, thinking first about the test data and then building the script.

Personally, I find the above approach ideal as it merges code reuse with test data organization, however, we can reduce this test class even further by adding the expected result as a test parameter:

```java
import com.matheusbereta.entities.User;
import org.testng.Assert;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

public class UserTest {

    @DataProvider(name = "ageData")
    public Object[][] ageData() {
        return new Object[][] {
                {17, false},
                {18, true},
                {19, true},
                {50, true},
                {99, true},
                {100, true},
                {101, false},
        };
    }

    private User user;

    @BeforeClass
    void setUp() {
        user = new User();
    }

    @Test(dataProvider = "ageData")
    void shouldReturnIfTheAgeIsValid(int age, boolean expectedResult) {
        Assert.assertEquals(user.isValidAge(age), expectedResult);
    }

}
```

Now we have only 1 _data provider_, 1 test, and **7 executions**!

## Oh, but I use JUnit, what now?!

Don't worry! _JUnit_ has a feature with the same objective, but with some differences in syntax and implementation, called **ParameterizedTest**. I'll write an article about it soon!

## Conclusion

I conclude that you need to use **DataProvider** urgently!

This feature is very powerful and will certainly add a lot to your tests. In fact, it can be used in any type or layer of testing: unit, integrated, _UI_, etc.

I'll leave [here the link](https://github.com/Matheeusb/selenium-ui-tests) to a UI testing project using _Selenium WebDriver_, where I use this DataProvider feature. 