If you are a software developer, you have probably heard about conventional commits. If you haven't heard about it yet, don't waste time, [check it out here!](https://conventionalcommits.org/)

In summary, conventional commits is a commit message writing pattern, following a specific structure to facilitate and improve communication between developers, in addition to helping maintain an organized repository history.

Now, imagine having a pattern with similar goals for comments (or discussions) made in pull requests! I present to you conventional comments, which is based on Google's engineering best practices written for code reviewers!

## How to use

Conventional comments presents a writing pattern with labels and decorations that help define the purpose of the comment made. The structure is as follows:

```
<label> [decorations]: <subject> 

[discussion]
```

- **label**: Label that indicates the type/category of the comment.
- **subject**: Main comment message.
- **decorations** (optional): Decoration labels for comments.
- **discussion** (optional): Supporting message that may contain context, reasoning, references, or any information explaining why the comment was made.

## Why use it?

Several reasons make me in favor of using conventional comments:

### Standardization

Having standardized comments improves team communication, brings clarity about what is being discussed, and increases productivity over time of practice usage. In the conventional comments documentation, you can find several labels and decorations, but it's also interesting for the team to define their own standards.

### Criticality

Through labels and decorations, it's possible to define how critical that point raised is, even facilitating the decision to mark the pull request with request changes or approve it.

### Elevate the team's technical level

When writing comments with this structure, the developer ends up practicing some important skills, as it is necessary to express yourself clearly (soft skill) and also present the reason for your comment (hard skill).

## Links

- [Conventional Comments](https://conventionalcomments.org/)
- [Google's Engineering Practices documentation](https://github.com/google/eng-practices/blob/master/review/reviewer/comments.md)
- [Conventional Comments Gitlab](https://gitlab.com/conventionalcomments/conventional-comments-button?source=post_page-----54f1e5f4dfe6--------------------------------) 