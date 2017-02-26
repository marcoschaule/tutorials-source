---
title: Heights and widths
date: 2017-02-26 11:00:00
layout: post
category:
- recipes
- css
---

This post is about `height`s and `width`s of elements. It also mentions
the `overflow` attribute that can change the `size` of elements.
<!-- more -->

## Overview

* Heights and widths of elements are used to define how wide and long
  they are on the screen.
* You can define heights and widths in percentage, pixels, rem etc.
* Using `rem` makes your web page scalable, since you relate the size
  to a root element, usually the body font size. (`rem = root em`, the word
  `em` come from the typographical expectation of the size of a capital M,
  hence `em` = expected size of M.)
* If width and height are equal, you can use the `size` property for both.

### Examples

HTML element:
```html
<div class="some-class">
  <p>Some text ...</p>
</div>
```

CSS definition:
```css
.some-class {
  width: 10rem;
  padding: 5px;
  background-color: lightgray;
  border: 1px solid green;
}
```

Result:
<style>
.some-class {
  width: 10rem;
  padding: 5px;
  background-color: lightgray;
  border: 1px solid gray;
}
</style>
<div class="tutorials-result">
  <div class="some-class">
    <p>Some text ...</p>
  </div>
</div>

## Dependencies

* Sizes generally are depending on the element's parent element.
* If using `%` as unit, the child element defines its size depending
  on the parent's size.
* If using `rem` or `em`, the child element defines its size depending
  on the root font size or the parent element's font size respectively.
* Using `px` or other independent unites makes elements independent of
  parent elements.
* Elements with independent sizes - if bigger than parent - can only
  overlap their parents if `overflow` is `visible`.

Examples of depending elements:

HTML element:
```html
// the outer div is 200px wide
// the inner div is 100px wide
<div class="outer">
  <div class="inner">Text</div>
</div>
```

CSS definition:
```css
.outer {
  width: 200px;
}
.inner {
  width: 50%;
}
```

Examples of independent elements:

HTML element:
```html
// the outer div is 200px wide
// the inner div is 400px wide
<div class="outer">
  <div class="inner">Text</div>
</div>
```

CSS definition:
```css
.outer {
  width: 200px;
}
.inner {
  width: 400px;
}
```

## Best Practices

* _Do_ use relative sizes (`%`, `rem` or `em`) whenever possible.
