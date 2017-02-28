---
title: units
date: 2017-02-27 12:35:53
layout: post
category:
- recipes
- css
---

This post introduces the CSS units like `px`, `em`, `rem` etc.
<!-- more -->


## Overview

Units (or lengths)

* can be **absolute**: `px`, `pt`, `cm`, `mm`.
* can be **relative**: `em`, `rem`, `%`.
* are used for **positions and sizes** of window elements.


## The `px` unit

The absolute length `px`

* is relative to the viewing device. For low-dpi devices, `1px` is one
  device pixel (dot) of the display. For printers and high resolution
  screens `1px` implies multiple device pixels.
* is used to position elements absolutely on screen or paper.


### Example with `px`:

HTML markup:
```html
<!-- width and height are independent sizes -->
<div style="width: 200px; height: 50px;"></div>
```
Visible result:
<div class="tutorials-result">
  <div class="box-green" style="width: 200px; height: 50px;"></div>
</div>


## The `%` unit
 
The relative length `%`

* is relative to the size of the immediate parent element if static.
* is relative to the size of the next parent element with a non-static
  position if itself is non-static.
  (see table below)
* is used for dynamic sizes. For example, the size `width: 50%` defines,
  that the element's width is always 50% of the parent, even when
  resizing.


### Example with `%`:

HTML markup:
```html
<div style="width: 80%; height: 50px;"></div>
```
Visible result:
<div class="tutorials-result">
  <div class="box-green" style="width: 80%; height: 50px;"></div>
</div>


## The `em` unit

The relative length `em`

* is relative to the font size of the parent element.
* makes the element scalable depending on the parent element's font size.
* comes from the typographical expectation of the size of a capital M,
  hence `em` = expected size of M.


### Example with `em`

HTML markup:
```html
<!-- The parent element has a font size of 10px, so 1em = 10px. -->
<!-- Hence the width of 20em of the inner element is actually 200px, -->
<!-- and for the height accordingly. -->
<div style="width: 400px; height: 100px; font-size: 10px;">
  <div style="width: 20em; height: 10em;"></div>
</div>
```
Visible result:
<div class="tutorials-result">
  <div class="box-green" style="width: 400px; height: 100px; font-size: 10px;">
    <div class="box-red" style="width: 20em; height: 5em;"></div>
  </div>
</div>


## The `rem` unit

The relative length `rem` 

* is relative to font size of the root element (`body`).
* makes the element scalable depending on the root font size.
* is the current common standard developers use for lengths.
* stands for **root `em`**.


### Example with `rem`

HTML markup:
```html
<!-- The body element has a font size of 15px, so 1em = 30px. -->
<!-- Hence the width of 20em of the inner element is actually 300px, -->
<!-- and for the height accordingly. -->
<body style="font-size: 15px">
  <div style="width: 400px; height: 100px;">
    <div style="width: 20rem; height: 10rem;"></div>
  </div>
</body>
```
Visible result:
<div class="tutorials-result">
  <div class="box-green" style="width: 400px; height: 100px; font-size: 15px;">
    <div class="box-red" style="width: 20em; height: 5em;"></div>
  </div>
</div>


### Links

* [CSS Units](https://www.w3schools.com/cssref/css_units.asp) (w3school.com, english)
* [CSS Lengths](https://developer.mozilla.org/de/docs/Web/CSS/length) (MDN, english)
* [CSS/Wertetypen/Zahlen, Maße und Maßeinheiten](https://wiki.selfhtml.org/wiki/CSS/Wertetypen/Zahlen,_Ma%C3%9Fe_und_Ma%C3%9Feinheiten) (SelfHTML, german)


## Maximum and Minimum in Width and Height

... coming coon ...


## Best practices

* _Do_ use **relative units** as much as possible.
* _Do_ use **`rem` oder `em`** for the page to be scalable.
