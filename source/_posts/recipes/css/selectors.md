---
title: Selectors
date: 2017-02-24 11:00:00
layout: post
category:
- recipes
- css
---

This post describes the basic usage of CSS selectors and the most
commonly used variants.
<!-- more --> 

## Most important selectors

* The **all selector** and the **tag/element selectors**:

  ```css
  /* give every element in the whole website the color red */
  * {
    color: red;
  }
  /* give every h1 the color red */
  h1 {
    color: red;
  }
  ```

* The **id selectors**:

  ```css
  /* give the h1 with the id "some-heading" the color red */
  h1#some-heading {
    color: red;
  }
  /* give all elements with the id "some-heading" the color red */
  #some-heading {
    color: red;
  }
  ```

* The **class selectors**:

  ```css
  /* give the h1 with the class "some-headings" the color red */
  h1.some-headings {
    color: red;
  }
  /* give all elements with the class "some-headings" the color red */
  .some-headings {
    color: red;
  }
  ```

* Using **pseudo selectors**:

  ```css
  /* give the first h1 (of its parent) the color red */
  h1:first-child {
    color: red;
  }
  /* give all first elements (of their parents) the color red */
  :first-child {
    color: red;
  }
  ```

* Some of the **relational selectors**:

  ```css
  /* give all anchors "a" and all headings "h1" the color red */
  h1, a {
    color: red;
  }
  /* give all anchors "a" the color red, of which the any parent is an h1 */
  h1 a {
    color: red;
  }
  /* give all anchors "a" the color red, of which the direct parent is an h1 */
  h1 > a {
    color: red;
  }
  /* give all anchors "a" the color red, which come immediately after an h1 */
  h1 + a {
    color: red;
  }
  /* give all anchors "a" the color red, which come after an h1 - immediately or not */
  h1 ~ a {
    color: red;
  }
  ```


### Links
* [w3school.com - CSS Selectors](https://www.w3schools.com/cssref/css_selectors.asp) (english)
* [MDN - CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) (english)
* [selfhtml.org - CSS/Selektoren](https://wiki.selfhtml.org/wiki/CSS/Selektoren) (german)


## Best Practices

* _Do_ use dash-case names for classes and IDs!
* _Do_ use a maximum of four selectors per definition! More than four can
  slow down the parsing performance of the browser.
