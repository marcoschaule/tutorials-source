---
title: Heights and widths
date: 2017-02-26 11:00:00
layout: post
category:
- recipes
- css
---

This post is about `height`s and `width`s of elements. It also mentions
the `overflow` attribute that can change the size of elements.
<!-- more -->

## Overview

The size elements `height` and `width`

* **define the size** of an element on screen.
* can be defined with **relative or absolute** units.

### How to tame an element's `width` or `height` by a parent:

| Current element's position | any parent element needs to be   |
|----------------------------|-----------------------------------|
| static                     | static, relative, absolute, fixed |
| relative                   | static, relative, absolute, fixed |
| absolute                   | relative, absolute, fixed         |
| fixed                      | _not possible_                    |


### Example of `width` and `height` in `px`:

HTML markup:
```html
<!-- width and height are independent sizes -->
<div style="width: 200px; height: 50px;"></div>
```
Visible result:
<div class="tutorials-result">
  <div class="box-green" style="width: 200px; height: 50px;"></div>
</div>


### Example of `width` and `height` in `%` without parent element:

HTML markup:
```html
<!-- Here is no parent element, hence the width is relative to the result frame. -->
<div style="width: 80%; height: 50px;"></div>
```
Visible result:
<div class="tutorials-result">
  <div class="box-green" style="width: 80%; height: 50px;"></div>
</div>


### Example of `width` and `height` in `%` with static parent element:

HTML markup:
```html
<!-- The inner element and the parent element are both static. -->
<!-- Hence the inner element is relative to the immediate parent in size. -->
<div style="width: 400px; height: 100px;">
  <div style="width: 50%; height: 50%;"></div>
</div>
```
Visible result:
<div class="tutorials-result">
  <div class="box-green" style="width: 400px; height: 100px;">
    <div class="box-red" style="width: 50%; height: 50%;"></div>
  </div>
</div>


### Example of `width` and `height` in `%` with static parent element:

HTML markup:
```html
<!-- The inner element is absolute and the parent element is static. -->
<!-- Here the inner element takes the sizes of the frame as base. -->
<div style="width: 400px; height: 100px; position: static;">
  <div style="width: 80%; height: 100%; position: absolute;"></div>
</div>
```
Visible result:
<div class="tutorials-result">
  <div class="box-green" style="width: 400px; height: 100px; position: static;">
    <div class="box-red" style="width: 80%; height: 100%; position: absolute;"></div>
  </div>
</div>


## Overflow

The `overflow` property

* **limits** the `width` or `height` of an element if `overflow` is `hidden`.
* sets the maximum of `width` and `height` as the size of the maximum of
  the parent if the child's sizes are overflowing.  
  _Warning:_ This is **not** represented by the element's property when
  accessed via JavaScript.


### Example of `width` and `height` without limit:

HTML markup:
```html
<div style="width: 200px; height: 100px;">
  <div style="width: 400px; height: 50px;"></div>
</div>
```
Visible result:
<div class="tutorials-result">
  <div class="box-green" style="width: 200px; height: 100px;">
    <div class="box-red" style="width: 400px; height: 50px;"></div>
  </div>
</div>


### Example of `width` and `height` with limit:

HTML markup:
```html
<div style="width: 200px; height: 100px; overflow: hidden;">
  <div style="width: 400px; height: 50px;"></div>
</div>
```
Visible result:
<div class="tutorials-result">
  <div class="box-green" style="width: 200px; height: 100px; overflow: hidden;">
    <div class="box-red" style="width: 400px; height: 50px;"></div>
  </div>
</div>


### Links

* [CSS Height and Width](https://www.w3schools.com/css/css_dimension.asp) (w3school.com, english)
* [width](https://developer.mozilla.org/en-US/docs/Web/CSS/width) (MDN, english)
* [height](https://developer.mozilla.org/en-US/docs/Web/CSS/height) (MDN, english)
* [CSS/Wertetypen/Zahlen, Maße und Maßeinheiten](https://wiki.selfhtml.org/wiki/CSS/Wertetypen/Zahlen,_Ma%C3%9Fe_und_Ma%C3%9Feinheiten) (SelfHTML, german)


## Best Practices

* _Do_ use relative units for `width` and `height` if possible.
