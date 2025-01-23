"What's the estimate for this demand?" This is certainly one of the phrases developers like least, but giving business predictability about when development will be completed is part of our daily routine, and that's where the dreaded estimates come in!

## Why don't developers like to provide estimates for their deliverables?

Software development is a complex process with various details to be implemented, and this reason alone is enough for developers to dislike giving estimates for their demands. As an aggravating factor, we can add lack of definitions and uncertainties, which can cause considerable changes in the given estimates. When it comes to mobile development, estimates need to consider some important variables, and in this article, I'll help you map these variables and provide better estimates!

## Prerequisites

Before we talk about all the technical aspects of mobile development, we need to take a step back and understand some basic points that any demand needs to have.

### Demand Refinement

It's essential to have a good understanding of what needs to be delivered, with well-defined business rules and acceptance criteria aligned with business stakeholders (clients).

### Low Level of Uncertainties

It's very important that the demand has a low level of uncertainties, and even existing uncertainties should be mapped. Questions such as: where user inputs will be recorded, or which user action points will be sent to Analytics, need to be mapped before development begins, and also understand the possible paths that can be taken to get a dimension of the uncertainty size.

### Established Contracts

Here I'll be a bit more specific regarding the stack. It's amazing how much time is saved when you have an established communication contract between mobile and backend! Additionally, when you have an established contract, it's possible to work in parallel and do the integration only at the end, this gives speed to the team and helps isolate and identify problems earlier.

## Mobile Estimates Checklist

Now we'll talk specifically about mobile development! This checklist I'm going to present is generalist, meaning it works for native, hybrid, and cross-platform mobile development. I divided this checklist into some categories to facilitate the "visualization" and mapping of each point.

### Screen(s) Complexity

- **Components**: Check the quantity and variety of interface components, such as buttons, input fields, lists, and other interactive elements on the screens.
- **Reactivities**: Consider how screens react to user actions and the complexity of the underlying logic.
- **State Management**: Evaluate how different screen transitions and states affect development complexity.
- **Internationalization**: Consider the need to support various languages and cultures, adapting screens as appropriate.
- **Navigations**: Analyze the application's navigation structure, including screen hierarchy and navigation flows.
- **Responsiveness**: Check if screens are responsive to different mobile device sizes and orientations.

### Integrations

- **Endpoint Mapping**: Check the complexity and quantity of external service endpoints that need to be integrated into the mobile application.
- **Device Resource Usage**: Evaluate how the application uses device resources, such as camera, GPS, accelerometer, and other sensors, and how this can impact development complexity.
- **Analytics**: Consider the integration of analysis tools to collect application usage data and evaluate implementation complexity.
- **Logs**: Consider the need to implement logs to track events and errors in the mobile application and evaluate how this can influence demand estimation.

### Architecture

- **Business/Application Rules Mapping**: Evaluate the degree of complexity related to defining and mapping business rules or application logic necessary for mobile application operation.
- **Error Handling**: Consider error and exception management in the application, identifying complexity associated with problem detection and handling.
- **Entity Mapping**: Check how data entities are mapped and structured in the application, considering data modeling complexity.
- **Data Processing**: Evaluate how data is manipulated, processed, and stored in the application, considering the complexity of data processing operations.

### Testing

- **Platforms**: Evaluate how many platforms (iOS, Android, etc.) will be targeted for testing and how this affects the complexity of the testing phase.
- **Screen Sizes**: Consider the need to test the application on different screen sizes and resolutions, taking into account the complexity of ensuring visual compatibility.
- **OS Versions (APIs)**: Check how many different operating system versions (APIs) need to be supported and how this influences testing complexity.
- **Unit Tests**: Evaluate the complexity of creating unit tests for different parts of the application code.
- **Screen/Component Tests**: Consider performing specific tests for application screens and components, evaluating the complexity involved in this approach.
- **Functional Tests**: Consider the need for comprehensive functional tests that validate the general behavior of the application in different usage scenarios.

### Code Management and Deployment

- **Versioning**: Evaluate how the version control system (e.g., Git) is configured and how branches are managed, considering the complexity of versioning strategies.
- **PRs / Code Review (Tasks and their order)**: Consider how pull requests (PRs) are used to review and approve source code changes, including the complexity of PR-associated tasks and the order in which they are handled.
- **Operation within Branch Model**: Check how the team operates within the branch model, such as GitFlow, and how this affects code organization and development.
- **Artifact Availability for Testing**: Evaluate how builds and artifacts are made available for testing, considering the complexity of continuous integration (CI) and continuous delivery (CD).
- **Artifact Availability for Production**: Consider how artifacts are deployed in production environments, considering deployment complexity and rollout strategies.
- **Store Release Time**: Consider the time needed to submit and approve the application in app stores (Google Play Store, Apple App Store) and how this affects the project timeline.

## Conclusion

You can use this checklist as a basis to create a checklist for your team, given that according to context, stack, and processes, other items may arise.
I also strongly recommend, as a second step, detecting which items cause estimates to have larger sizes and thinking about alternatives to improve this, given that it might possibly be technical debt or a fragile point in your app's architecture!

I hope this checklist helps you and your team! 🍻
 
