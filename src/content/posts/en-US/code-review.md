Code review is one of the most important stages (if not the most) within the software development process. The code review process helps identify bugs and anti-patterns; however, for this process to be truly effective, there are some practices and automations that can help!

## Brother Review

If you consider yourself a professional developer and approve pull requests (or merge requests) after simply scrolling through your colleague's code or without even looking at what the change request is about, we need to talk!

But let's continue and change this immediately!

## Types of Code Review

I believe that success in practicing code review is primarily achieved by dividing it into two approaches:

- Automated Code Review
- Manual Code Review

## Automated Code Review

Automated code review serves as a first filter. But how do you know what can be part of the automated code review and how to do it? Here are some examples of steps that can be part of the automated code review:

- Build
- Tests
- Code Coverage
- Linter
- Security Validations
- Commit Standards

These are some examples of jobs that can be executed the moment the pull request is opened and only allowing the merge after all these steps have been successfully completed!

> Ah, but what's the advantage of building all these jobs?

Agility, reliability, and mainly, stopping wasting time with already defined standards. For example, if the team has defined that the application's code coverage should be at least 80%, why make the pull request reviewer worry about evaluating if this requirement was met? For this specific case, we have tools like [Coveralls](https://coveralls.io/) and [Codecov](https://about.codecov.io/).

The point is, automate all static code validations and focus on what the machine cannot do (or at least not yet).

## Manual Code Review

Now speaking of manual code review, in the scenario where the automated code review has already occurred when the pull request was opened (aka pipeline), what should the developer (reviewer) focus on?

- Architecture Standards
- Good Coding Practices
- Quality of Tests
- Correct Use of Resources and Components

Do you know the 80/20 principle? I strongly believe that in this context, manual code review is the most valuable 20% of this process and can even help find some bugs before the software goes to the functional/integrated testing stage.

> Ah, so only a more senior developer or a tech lead should do the manual code review then? NO!

## Everyone Should Review Pull Requests!

From trainees to specialists, everyone should participate in code reviews, and for this to work, we need documentation:

- Application Architecture Documentation
- Business Rules Documentation of the Feature
- Prototype (in case of UI)

There is a high possibility that the more experienced developer already knows some things without the need to access the documentation (mainly about the application's architecture), but with the necessary documentation, a junior developer can participate in this process smoothly, even raising questions that no one has asked yet!

The review, besides being an inspection process, is also a learning tool, a way to share experiences, and to mature the team! Encourage all developers on your team to practice code review daily; the result of this practice, when well executed, brings many gains to the team and the product.