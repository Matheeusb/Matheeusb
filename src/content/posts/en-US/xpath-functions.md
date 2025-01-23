In the world of automated testing, choosing reliable locators is fundamental to ensure script stability and efficiency. Among various options, using **Xpaths** remains a powerful tool, but to avoid fragility, it's essential to use the right functions. This article explores some of the most useful functions for creating robust Xpaths, reducing the likelihood of failures due to interface changes or element tree structure modifications. Get ready to transform your Xpaths into resilient and intelligent tools!

## ancestor::

The **ancestor::** function returns all ancestors of a node in the element tree, allowing navigation to elements higher up in the hierarchy.

```xpath
//ancestor::div[@class='container']
```

> Returns all **\<div>** elements that are ancestors of the **\<span>** element with the text "Login".

**In practice:** Useful for finding related elements that share a common hierarchy.

## contains()

The **contains()** function checks if an attribute or text contains a specific value.

```xpath
//button[contains(@class, 'submit')]
```

> Locates all buttons whose **class** attribute contains the word "Submit".

**In practice:** Excellent for locating elements when attribute values may vary slightly.

## count()

The **count()** function returns the number of nodes in a result set.

```xpath
count(//div[@class='item'])
```

> Counts the number of **\<div>** elements with the class "item".

**In practice:** Ideal for validating the quantity of elements in the element tree.

## descendant::

The **descendant::** function returns all descendants of a node in the element tree.

```xpath
//div[@id='menu']/descendant::a
```

> Locates all **\<a>** links that are descendants of the **\<div>** element with ID "menu".

**In practice:** Facilitates searching for deeply nested elements.

## following-sibling::

The **following-sibling::** function returns all sibling elements that appear after the current node.

```xpath
//h2[text()='Title']/following-sibling::p
```

> Locates all **\<p>** paragraphs that are siblings and come after the **\<h2>** with text "Title".

**In practice:** Useful for locating elements near another related element.

## last()

The **last()** function returns the last element in a result set.

```xpath
(//li[@class='item'])[last()]
```

> Locates the last item in a list of **\<li>** elements with the class "item".

**In practice:** Excellent for accessing the last element of a list or collection.

## normalize-space()

The **normalize-space()** function removes extra spaces at the beginning, end, and duplicates in the middle of text.

```xpath
//p[text()=normalize-space(' Welcome! ')]
```

> Locates a **\<p>** paragraph with text "Welcome!", ignoring extra spaces.

**In practice:** Useful for avoiding failures in cases where text content may vary in spaces.

## parent::

The **parent::** function returns the parent node of an element.

```xpath
//span[@class='icon']/parent::div
```

> Locates the **\<div>** element that is the parent of the **\<span>** element with class "icon".

**In practice:** Allows moving up in the element tree hierarchy to locate related elements.

## position()

The **position()** function returns the position of a node within a set.

```xpath
//div[@class='item'][position()=2]
```

> Locates the second **\<div>** element with the class "item".

**In practice:** Ideal for working with ordered lists or collections.

## starts-with()

The **starts-with()** function checks if an attribute or text value starts with a specific value.

```xpath
//input[starts-with(@id, 'user')]
```

> Locates all **\<input>** fields whose **id** attribute starts with "user".

**In practice:** Good for locating elements with common prefixes in IDs or classes.

## text()

The **text()** function selects the text content of an element.

```xpath
//h1[text()='Page Title']
```

> Locates an **\<h1>** heading with the exact text "Page Title".

**In practice:** Ideal for locating elements by their visible text.

## translate()

The **translate()** function replaces or removes characters in text.

```xpath
//input[translate(@placeholder, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'email']
```

> Locates **\<input>** fields whose **placeholder** attribute matches "email", ignoring case.

**In practice:** Useful for manipulating text values and handling case variations.

## Conclusion

In this article, we explored various functions that make Xpaths more robust and versatile, helping to handle the challenges of development and test automation. From locating elements at different hierarchical levels to manipulating text and identifying patterns, these functions are essential tools for creating more reliable and change-resistant selectors.

However, the XPath universe is vast, and there are many other functions that can be useful depending on the context. If you know other approaches or functions that you've used successfully, feel free to share in the comments! Exchanging experiences strengthens the community and helps us create increasingly better solutions.

I look forward to your suggestions and questions! 😊