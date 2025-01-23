First, I would like to bring some context and motivations! Thinking about the combination of Java programming language and the Appium mobile testing framework, we arrive at [java-client](https://github.com/appium/java-client).

## 1st motivation:

The `java-client`, up to version 7.6.0, provided the `TouchAction` class, which allowed performing various touch actions with good customization. From version 8.0.0, the `TouchAction` class was deprecated.

```java
Dimension dimension = driver.manage().window().getSize();
int startX = (int)(dimension.width * 0.5); 
int startY = (int)(dimension.height * 0.9); 
int endX = (int)(dimension.width * 0.2); 
int endY = (int)(dimension.height * 0.1);

TouchAction touch = new TouchAction(driver);

touch.press(PointOption.point(startX, startY))
   .waitAction(WaitOptions.waitOptions(Duration.ofSeconds(1)))
   .moveTo(PointOption.point(endX, endY))
   .release()
   .perform();
```
## 2nd motivation:

The same _scroll_ action can be performed using the `Sequence` class and other classes from Selenium's `interactions` package. The problem with this implementation is its verbosity and how manual this automation is, meaning it's necessary to declare each step of finger movement to perform a _scroll_.

```java
Dimension dimension = driver.manage().window().getSize();

Point start = new Point((int)(dimension.width * 0.5), (int)(dimension.height * 0.9));
Point end = new Point((int)(dimension.width * 0.2), (int)(dimension.height * 0.1));

Sequence scroll = new Sequence(FINGER, 1)
    .addAction(FINGER.createPointerMove(ofMillis(0), viewport(), start.getX(), start.getY()))
    .addAction(FINGER.createPointerDown(LEFT.asArg()))
    .addAction(FINGER.createPointerMove(ofMillis(duration), viewport(), end.getX(), end.getY()))
    .addAction(FINGER.createPointerUp(LEFT.asArg()));
        
driver.perform(Arrays.asList(scroll));
```
## 3rd motivation:

The _drivers_, UiAutomator2 (Android) and XCUITest (iOS), provide several custom command extensions to execute specific scenarios. These commands have good documentation and script customization, besides being native to the drivers. Following the _scroll_ case, the scripts for Android and iOS look like this:

```java
// Android
driver.executeScript("mobile: scrollGesture", ImmutableMap.of("direction", "down", "percent", 1.0));

//iOS
driver.executeScript("mobile: scroll", ImmutableMap.of("direction", "down"));
```

## Now, why use Appium Mobile Actions?

Appium aims to provide UI automation support for many different stacks (mobile, desktop, web, etc.), and even within the stack, like mobile, it's possible to perform tests for Android and iOS platforms within the same test project, which is one of its main uses, if not the main one.

This versatility of Appium (especially after Appium 2) comes from being driver and plugin-oriented, and then, connecting with the third motivation, we can use command extensions for Android and iOS.

But thinking about a test project that validates an Android and iOS app, we would always have to check which is the target platform of the test before executing a _script_, and that's where **Appium Mobile Actions** comes in!

The library already does this validation and executes the correct _script_ for each platform.

```java
AppiumActions actions = new AppiumActions(driver);

actions.gesture.scroll(Direction.DOWN, 0.8);
```

## Argument Variations

Some _scripts_ have several ways of being built, passing different arguments and strategies, and the lib already anticipates these variations and delivers customized methods.

```java
boolean removeApp(String appId);
boolean removeApp(String appId, int timeout);
boolean removeApp(String appId, boolean keepData);
boolean removeApp(String appId, int timeout, boolean keepData);

void installApp(String appPath);
void installApp(String appPath, boolean checkVersion);
void installApp(String appPath, int timeout);
void installApp(String appPath, boolean checkVersion, int timeout);
```

## Complete Documentation

Both the Android driver (UiAutomator2) as well as iOS (XCUITest), deliver very rich documentation and I made sure to make this evident in the library. It's also clear in the documentation which parameters are available on each platform.

```java
/**
 * Terminates the app on the iOS device with a specified timeout.
 *
 * @param driver  the AppiumDriver instance to interact with the device.
 * @param appId   the bundleId of the app to be terminated.
 * @param timeout the timeout in seconds after which the app will be terminated. <b>Currently not supported on the iOS platform.</b>
 * @see <a href="https://github.com/appium/appium-xcuitest-driver/blob/master/docs/reference/execute-methods.md#mobile-terminateapp">XCUITest - terminateApp</a>
 */
@Override
public void terminateApp(AppiumDriver driver, String appId, int timeout) {
    driver.executeScript("mobile: terminateApp", Map.of("bundleId", appId));
}
```

## Features and Roadmap

In the first version of the lib, it delivers 19 scripts with several variations according to the arguments. At this moment, Android and iOS _drivers_ deliver **more than 90 scripts each** and all are in the library's _roadmap_, they will be implemented according to prioritization through [issues](https://github.com/appiumactions/appium-mobile-actions-java/issues).

## Open Source

The idea is to build together with the community of software and quality engineers who use Appium with Java to facilitate the automation of these actions that usually cause headaches during the construction of automated test _scripts_. Feel invited to [contribute](https://github.com/appiumactions/appium-mobile-actions-java/blob/main/CONTRIBUTING.md)! 