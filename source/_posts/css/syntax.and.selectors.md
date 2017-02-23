---
title: Blog
date: 2017-02-23 21:29:20
layout: post
---

# Syntax and Selectors
## Overview

* The CSS syntax is quite simple. It always starts with the **Selector**,
  followed by curly braces and within the braces block, you have
  property-value-lists like `<property>:<value>;`,
  separated by a colon and ended by a semicolon.
* You can use as many selectors as necessary to identify an element,
  although you should limit them to a maximum of four.
* Class selectors start with a dot (`.<className> { ... }`),
  whereas id selectors start with an hash (`#<idName> { ... }`).
  Tag selectors have no prefix (`<tagName> { ... }`).
* Besides the default definition syntax, there are also pseudo-selectors
  like `<selector>:fist-child()`, added to a selector by colon (or
  double-colon). These selectors can even more precisely select specific
  elements.
* There are other syntax elements like **Media Queries**.
  Media queries are used for responsive design and device adjustments.

### Examples

``` css
/* example of simple selection: */
div.some-class-name {
  width: 100%;
  height: 50%;
}

/* example of multiple selectors: */
#head .nav-wrapper .nav-element .heading {
  margin: 0;
  padding: 1rem;
  float: left;
}

/* example of pseudo-selectors: */
.nav-element:nth-child(2n+1) {
  background-color: gray;
}

/* example of media queries: */
@media only screen and (max-width: 500px) {
  body {
    background-color: lightblue;
  }
}
```

## Best Practices

* _Do_ use dash-case names for classes and IDs!
* _Do_ use a maximum of four selectors per definition! More than four can
  slow down the parsing performance of the browser.
