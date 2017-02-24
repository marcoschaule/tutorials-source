---
title: Padding
date: 2017-02-24 11:00:00
layout: post
category:
- recipes
- css
---



## Overview

* The padding is the outer distance to other elements.
* Backgrounds and borders are not extended by the padding.
* Margins work in inline and block elements on all four sides.

The example:

```html
<div style="background-color: lightblue;">
  <div style="background-color: lightgreen; padding: 20px; text-align: center;">Margin of 20 pxs</div>
</div>
```

Produces the result:

<div style="background-color: lightblue;">
  <div style="background-color: lightgreen; padding: 20px; text-align: center;">Margin of 20 pxs</div>
</div>



## Short notations for paddings:

* **Single side notation**:  
  Use `padding-top: 10px;`, `padding-right: 10px;`,
  `padding-bottom: 10px;` or `padding-left: 10px;` if you
  want to change the padding of a side _without_
  changing the other paddings.  
  (general: `padding-<side>: <value><unit>;`)
  
* **Two sides notation**:  
  Use `padding: 10px 20px;` as short notation. Here, `top` and
  `bottom` get a padding of `10px` and `left` and `right` get
  a padding of `20px`.   
  (general: `padding: <topAndBottomValue><unit> <leftAndRightValue><unit>;`)
  
* **Three side notation**:  
  Use `padding: 10px 20px 30px;` as short notation. Here, `top` and
  gets a padding of `10px`, `left` and `right` get a padding of `20px`
  and `bottom` gets a padding of `30px`.  
  (general: `padding: <topValue><unit> <leftAndRightValue><unit> <bottomValue><unit>;`)
  
* **Four side notation**:  
  Use `padding: 10px 20px 30px;` as short notation. Here, `top` and
  gets a padding of `10px`, `left` and `right` get a padding of `20px`
  and `bottom` gets a padding of `30px`.  
  (general: `margin: <topValue><unit> <leftAndRightValue><unit> <bottomValue><unit>;`)



## Best Practices

* _Do_ use short notations whenever possible.
