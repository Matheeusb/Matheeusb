"What's the estimate for this demand?" This is certainly one of the phrases that developers like least, but it's part of our daily routine to provide business predictability on when development will be completed, and that's where the dreaded estimates come in!

## Why don't developers like to provide estimates for their deliveries?

Software development is a complex process with many details to be implemented, and this reason alone is enough for developers not to like giving estimates for their demands. As an aggravating factor, we can add lack of definitions and uncertainties, which can cause a considerable change in the estimates given. When it comes to mobile development, estimates need to cover some important variables, and in this article, I will help you map these variables and give better estimates!

## Premises

Before talking about all the technical aspects of mobile development, we need to take a step back and understand some basic points that any demand needs to have.

### Demand Refinement

It is essential to have a good understanding of what needs to be delivered, with business rules and acceptance criteria very well defined and aligned with business stakeholders (clients).

### Low Level of Uncertainties

It is very important that the demand has a low level of uncertainties, and even with the existing uncertainties mapped. Questions like: where user inputs will be recorded, or what user action points will be sent to Analytics, need to be mapped even before starting development and also understand the possible paths that can be taken to get an idea of the size of the uncertainty.

### Established Contracts

Here I will be a little more specific regarding the stack. It's amazing how much time is saved when you have an established communication contract between mobile and backend! In addition, when you have an established contract, it is possible to work in parallel and do the integration only at the end, this gives speed to the team and helps to isolate and identify problems earlier.

## Checklist for Mobile Estimates

Now we will talk specifically about mobile development! This checklist that I will present is generalist, that is, it serves for native, hybrid, and cross-platform mobile development. I divided this checklist into some categories to facilitate the "visualization" and mapping of each of the points.

### Screen(s) Complexity

-   **Components**: Check the quantity and variety of interface components, such as buttons, input fields, lists, and other interactive elements on the screens.
-   **Reactivities**: Consider how the screens react to user actions and the complexity of the underlying logic.
-   **State Management**: Evaluate how the different screen transitions and states affect development complexity.
-   **Internationalization**: Consider the need to support multiple languages and cultures, adapting the screens accordingly.
-   **Navigations**: Analyze the application's navigation structure, including the screen hierarchy and navigation flows.
-   **Responsiveness**: Check if the screens are responsive to different mobile device sizes and orientations.

### Integrations

-   **Endpoints Mapping**: Check the complexity and quantity of external service endpoints that need to be integrated into the mobile application.
-   **Device Resources Usage**: Evaluate how the application uses device resources, such as camera, GPS, accelerometer, and other sensors, and how this can impact development complexity.
-   **Analytics**: Consider the integration of analytics tools to collect application usage data and evaluate the implementation complexity.
-   **Logs**: Consider the need to implement logs to track events and errors in the mobile application and evaluate how this can influence the demand estimate.

### Architecture

-   **Business/Application Rules Mapping**: Evaluate the degree of complexity related to defining and mapping the business rules or application logic required for the mobile application to function.
-   **Error Handling**: Consider the management of errors and exceptions in the application, identifying the complexity associated with detecting and handling problems.
-   **Entities Mapping**: Check how data entities are mapped and structured in the application, considering the complexity of data modeling.
-   **Data Handling**: Evaluate how data is manipulated, processed, and stored in the application, considering the complexity of data handling operations.

### Tests

-   **Platforms**: Evaluate how many platforms (iOS, Android, etc.) will be targeted by the tests and how this affects the complexity of the testing phase.
-   **Screen Sizes**: Consider the need to test the application on different screen sizes and resolutions, considering the complexity of ensuring visual compatibility.
-   **OS Versions (APIs)**: Check how many different operating system versions (APIs) need to be supported and how this influences the complexity of the tests.
-   **Unit Tests**: Evaluate the complexity of creating unit tests for the different parts of the application code.
-   **Screen/Component Tests**: Consider performing specific tests for the application's screens and components, evaluating the complexity involved in this approach.
-   **Functional Tests**: Consider the need for comprehensive functional tests that validate the overall behavior of the application in different usage scenarios.

### Code Management and Deployment

-   **Versioning**: Evaluate how the version control system (e.g., Git) is configured and how branches are managed, considering the complexity of versioning strategies.
-   **PRs / Code Review (Tasks and Order)**: Consider how pull requests (PRs) are used to review and approve changes in the source code, including the complexity of tasks associated with PRs and the order in which they are handled.
-   **Acting within the Branch Model**: Check how the team operates within the branch model, such as GitFlow, and how this affects code organization and development.
-   **Availability of Artifacts for Testing**: Evaluate how builds and artifacts are made available for testing, considering the complexity of continuous integration (CI) and continuous delivery (CD).
-   **Availability of Artifacts for Production**: Consider how artifacts are deployed in production environments, considering the complexity of deployment and rollout strategies.
-   **App Store Release Time**: Consider the time required to submit and approve the application in app stores (Google Play Store, Apple App Store) and how this affects the project schedule.

## Conclusion

You can use this checklist as a basis for creating a checklist for your team, given that according to the context, stack, and processes, other items may arise.
I also strongly recommend, as a second step, to detect which items cause estimates to have larger sizes and think of alternatives to improve this, as it may possibly be a technical debt or a weak point in your app's architecture!

I hope this checklist helps you and your team! 🍻