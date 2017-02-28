---
title: Position
date: 2017-02-24 11:00:00
layout: post
category:
- recipes
- css
---

This post describes the `position` property, which defines the position
of an element relative to its environment elements.
<!-- more -->

## The `position`

The `position` property

* defines how an element interacts with its environment.
* comes with the following values:
  * `static` (default)
  * `relative`
  * `fixed`
  * `absolute`
* can implicitly define the behaviour of child elements.

### Example of `static`

HTML markup:
```html
<div class="box-green" style="width: 400px; height: 50px; position: static;">
  <div class="box-blue" style="width: 200px; height: 25px; position: static;"></div>
  <div class="box-red" style="width: 300px; height: 25px; position: static;"></div>
</div>
```
Visible result:
<div class="tutorials-result">
  <div class="box-green" style="width: 400px; height: 50px; position: static;">
    <div class="box-blue" style="width: 200px; height: 25px; position: static;"></div>
    <div class="box-red" style="width: 300px; height: 25px; position: static;"></div>
  </div>
</div>

The value `static`
* is the default value for the position.
* does not change the flow and positioning of elements.
  All elements are displayed one after another.


### Example of `relative`

HTML markup (relative position === static position):
```html
<div class="box-green" style="width: 400px; height: 50px; position: static;">
  <div class="box-blue" style="width: 200px; height: 25px; position: static;"></div>
  <div class="box-red" style="width: 300px; height: 25px; position: relative;"></div>
</div>
```
Visible result:
<div class="tutorials-result">
  <div class="box-green" style="width: 400px; height: 50px; position: static;">
    <div class="box-blue" style="width: 200px; height: 25px; position: static;"></div>
    <div class="box-red" style="width: 300px; height: 25px; position: relative;"></div>
  </div>
</div>

HTML markup (element moved 10px from top relative to its static position):
```html
<div class="box-green" style="width: 400px; height: 50px; position: static;">
  <div class="box-blue" style="width: 200px; height: 25px; position: static;"></div>
  <div class="box-red" style="width: 300px; height: 25px; position: relative; top: 10px"></div>
</div>
```
Visible result:
<div class="tutorials-result">
  <div class="box-green" style="width: 400px; height: 50px; position: static;">
    <div class="box-blue" style="width: 200px; height: 25px; position: static;"></div>
    <div class="box-red" style="width: 300px; height: 25px; position: relative; top: 10px"></div>
  </div>
</div>

The value `relative`
* behaves almost as the value `static` if element is not moved.
* gives elements the ability to move _relative_ to their _static_ position.
* can implicitly control the behaviour of child elements when
  using properties like `z-index: <someValue>`, `position: absolute`,
  position-properties like `top`, `right`, `bottom` or `left` etc.


### Example of `absolute`

HTML markup (absolute position === static position):
```html
<div class="box-green" style="width: 400px; height: 50px; position: static;">
  <div class="box-blue" style="width: 200px; height: 25px; position: static;"></div>
  <div class="box-red" style="width: 300px; height: 25px; position: absolute;"></div>
</div>
```
Visible result:
<div class="tutorials-result">
  <div class="box-green" style="width: 400px; height: 50px; position: static;">
    <div class="box-blue" style="width: 200px; height: 25px; position: static;"></div>
    <div class="box-red" style="width: 300px; height: 25px; position: absolute;"></div>
  </div>
</div>

HTML markup (element moved 10px from top relative to its parent's relative position):
```html
<div class="box-green" style="width: 400px; height: 50px; position: static;">
  <div class="box-blue" style="width: 200px; height: 25px; position: static;"></div>
  <div class="box-red" style="width: 300px; height: 25px; position: absolute; top: 10px;"></div>
</div>
```
Visible result:
<div class="tutorials-result">
  <div class="box-green" style="width: 400px; height: 50px; position: static;">
    <div class="box-blue" style="width: 200px; height: 25px; position: static;"></div>
    <div class="box-red" style="width: 300px; height: 25px; position: absolute; top: 10px;"></div>
  </div>
</div>

_Note:_ The next parent is the result frame itself.

The value `absolute`
* behaves almost as the value `static` if element is not moved.
* gives elements the ability to move _relative_ to their next
  parent's _static_ position, that itself has `position: relative`.
  If no parent has `position: relative`, it is moved _relative_
  to the client window.
* can implicitly control the behaviour of child elements (like `relative`)
  when using properties like `z-index: <someValue>`, `position: absolute`,
  position-properties like `top`, `right`, `bottom` or `left` etc.


### Example of `fixed`

HTML markup:
```html
<div class="box-red" style="width: 300px; height: 25px; position: absolute; z-index: 100;"></div>
<div class="box-green scrollable" style="width: 800px; height: 100px; position: relative;">
  <div class="box-blue" style="width: 200px; height: 200px; position: static;"></div>
</div>
```
Visible result:
<div class="tutorials-result">
  <div class="box-red" style="width: 300px; height: 25px; position: absolute; z-index: 100;"></div>
  <div class="box-green scrollable" style="width: 800px; height: 100px; position: relative;">
    <div class="box-blue" style="width: 200px; height: 200px; position: static;"></div>
  </div>
</div>

_Note:_ This is just a simulation of the `fixed` position. Usually, an element
with a fixed position is relative to the client window.

The value `fixed`
* fixes elements on the client window, completely independent of the other elements.
* can be a container for other static, relative or absolute elements.
* can implicitly control the behaviour of child elements (like `relative`)
  when using properties like `z-index: <someValue>`, `position: absolute`,
  position-properties like `top`, `right`, `bottom` or `left` etc.
  

### Links

* [CSS Layout - The position Property](https://www.w3schools.com/css/css_positioning.asp) (w3school.com, english)
* [position](https://developer.mozilla.org/de/docs/Web/CSS/position) (MDN, english)
* [CSS/Eigenschaften/Positionierung/position](https://wiki.selfhtml.org/wiki/CSS/Eigenschaften/Positionierung/position) (SelfHTML, german)


## The positioning properties `top`, `right`, `bottom` and `left`
