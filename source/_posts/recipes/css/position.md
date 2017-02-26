---
title: Position
date: 2017-02-24 11:00:00
layout: post
category:
- recipes
- css
---

This post describes the `position` property, which defines the location
of an element relative to its environment elements.
<!-- more -->

## Overview

The `position` property

* defines how an element interacts with its environment.
* comes with the following values:
  * static (default)
  * relative
  * fixed
  * absolute
* can define an element as relation for a child element (later).

### Examples

* **Example of `position: static;`**: 

  Example:
  ```html
  <div class="example s150 red relative">
    <div class="example s100 blue static">some blue text ...</div>
    <div class="example s100 green static">some green text ...</div>
  </div>
  ```

  Result:
  <div class="tutorials-result">
    <div class="example s150 red relative">
      <div class="example s100 blue static">some blue text ...</div>
      <div class="example s100 green static">some green text ...</div>
    </div>
  </div>
  
  Explanation:
  * The `static` value is the default value.
  * Static positioned elements are not affected by the
    `top`, `bottom`, `left`, and `right` properties.

* **Example of `position: relative;`**: 

  Example with `left: 10px;`:
  ```html
  <div id="outer" style="position: relative; background-color: lightblue;">
    <div id="normal" style="position: static; background-color: lightcoral;">some text ...</div>
    <div id="relative" style="position: relative; background-color: lightgreen; left: 10px;">some text ...</div>
  </div>
  ```

  Result:
  <div class="tutorials-result">
    <div id="outer" style="position: relative; background-color: lightblue;">
      <div id="normal" style="position: static; background-color: lightcoral;">some text ...</div>
      <div id="relative" style="position: relative; background-color: lightgreen; left: 10px;">some text ...</div>
    </div>
  </div>

  Example with `top: 10px;`:
  ```html
  <div id="outer" style="position: relative; background-color: lightblue;">
    <div id="normal" style="position: static; background-color: lightcoral;">some text ...</div>
    <div id="relative" style="position: relative; background-color: lightgreen; top: 10px;">some text ...</div>
  </div>
  ```

  Result:
  <div class="tutorials-result">
    <div id="outer" style="position: relative; background-color: lightblue;">
      <div id="normal" style="position: static; background-color: lightcoral;">some text ...</div>
      <div id="relative" style="position: relative; background-color: lightgreen; top: 10px;">some text ...</div>
    </div>
  </div>
  
  Explanation:
    * The `relative` value works like the `static` value, but 
      relative positioned elements are affected by the
      `top`, `bottom`, `left`, and `right` properties.
    * When one of these four properties is changed, the element
      moves according to its actual position independent of
      the parent.

* **Example of `position: absolute;`**: 

  Example with `left: 10px;`:
  ```html
  <div id="outer" style="position: relative; background-color: lightblue;">
    <div id="normal" style="position: static; background-color: lightcoral;">some text ...</div>
    <div id="absolute" style="position: absolute; background-color: lightgreen; left: 10px;">some text ...</div>
  </div>
  ```

  Result:
  <div class="tutorials-result">
    <div id="outer" style="position: relative; background-color: lightblue;">
      <div id="normal" style="position: static; background-color: lightcoral;">some text ...</div>
      <div id="absolute" style="position: absolute; background-color: lightgreen; left: 10px;">some text ...</div>
    </div>
  </div>

  Example with `top: 10px;`:
  ```html
  <div id="outer" style="position: relative; background-color: lightblue;">
    <div id="normal" style="position: static; background-color: lightcoral;">some text ...</div>
    <div id="absolute" style="position: absolute; background-color: lightgreen; top: 10px;">some text ...</div>
  </div>
  ```

  Result:
  <div class="tutorials-result">
    <div id="outer" style="position: relative; background-color: lightblue;">
      <div id="normal" style="position: static; background-color: lightcoral;">some text ...</div>
      <div id="absolute" style="position: absolute; background-color: lightgreen; top: 10px;">some text ...</div>
    </div>
  </div>
  
  Explanation:
      * The `absolute` value positions the element relative to its next
        non-static parent element when changing one or more of the
        `top`, `bottom`, `left`, and `right` properties.
      * When one of these four properties is changed, the element
        moves according to its next non-static parent position.
  
* **Example of `position: absolute;`**: 

  Example with `left: 10px;`:
  ```html
  <div id="outer" style="position: relative; background-color: lightblue;">
    <div id="normal" style="position: static; background-color: lightcoral;">some text ...</div>
    <div id="absolute" style="position: absolute; background-color: lightgreen; left: 10px;">some text ...</div>
  </div>
  ```

  Result:
  <div class="tutorials-result">
    <div id="outer" style="position: relative; background-color: lightblue;">
      <div id="normal" style="position: static; background-color: lightcoral;">some text ...</div>
      <div id="absolute" style="position: absolute; background-color: lightgreen; left: 10px;">some text ...</div>
    </div>
  </div>
