---
title: Margin
date: 2017-02-24 11:00:00
layout: post
category:
- recipes
- css
---



## Overview

* The margin is the outer distance to other elements.
* Backgrounds and borders are not extended by the margin.
* Margins work in block elements on all four sides,
  in inline elements only left and right;

The example:

```html
<div style="background-color: lightblue;">
  <div style="background-color: lightgreen; margin: 20px; text-align: center;">margin of 20 pxs</div>
</div>
```

Produces the result:

<div style="background-color: lightblue;">
  <div style="background-color: lightgreen; margin: 20px; text-align: center;">margin of 20 pxs</div>
</div>



## Short notations for margins:

* **Single side notation**:  
  Use `margin-top: 10px;`, `margin-right: 10px;`,
  `margin-bottom: 10px;` or `margin-left: 10px;` if you
  want to change the margin of a side _without_
  changing the other margins.  
  (general: `margin-<side>: <value><unit>;`)
  
* **Two sides notation**:  
  Use `margin: 10px 20px;` as short notation. Here, `top` and
  `bottom` get a margin of `10px` and `left` and `right` get
  a margin of `20px`.   
  (general: `margin: <topAndBottomValue><unit> <leftAndRightValue><unit>;`)
  
* **Three side notation**:  
  Use `margin: 10px 20px 30px;` as short notation. Here, `top` and
  gets a margin of `10px`, `left` and `right` get a margin of `20px`
  and `bottom` gets a margin of `30px`.  
  (general: `margin: <topValue><unit> <leftAndRightValue><unit> <bottomValue><unit>;`)
  
* **Four side notation**:  
  Use `margin: 10px 20px 30px;` as short notation. Here, `top` and
  gets a margin of `10px`, `left` and `right` get a margin of `20px`
  and `bottom` gets a margin of `30px`.  
  (general: `margin: <topValue><unit> <leftAndRightValue><unit> <bottomValue><unit>;`)



## Line height as alternative

* You can use `line-height` if you want to align text vertically.
* Use the line height if you don't know the height of the inner element,
  but the total height of the ohter element.

The example:

```html
<div style="background-color: lightblue;">
  <div style="background-color: lightgreen; margin: 20px 0; text-align: center;">margin of 20 pxs</div>
</div>
```

Produces the result:

<div style="background-color: lightblue;">
  <div style="background-color: lightgreen; margin: 20px 0; text-align: center;">margin of 20 pxs</div>
</div>

If you instead use the line height:

```html
<div style="background-color: lightblue; text-align: center;">
  <span style="background-color: lightgreen; line-height: 50px; text-align: center;">Line height if 50 pxs</span>
</div>
```

Produces the result:

<div style="background-color: lightblue; text-align: center;">
  <span style="background-color: lightgreen; line-height: 50px; text-align: center;">Line height if 50 pxs</span>
</div>



## Center divs

* To center divs, most of the time you have to use the `margin: auto;`
  variant if you don't know exactly the outer width or if the outer width
  is dynamic.
  
The example:

```html
<div style="background-color: lightblue; text-align: center;">
  <div style="background-color: lightgreen; width: 100px;">inner div</div>
</div>
```

Produces the result:

<div style="background-color: lightblue; text-align: center;">
  <div style="background-color: lightgreen; width: 100px;">inner div</div>
</div>

As you can see, the `text-align` property cannot center the inner div.
You need to do the following:

```html
<div style="background-color: lightblue;">
  <div style="background-color: lightgreen; width: 100px; margin: 0 auto;">inner div</div>
</div>
```

Which produces the result:

<div style="background-color: lightblue;">
  <div style="background-color: lightgreen; width: 100px; margin: 0 auto;">inner div</div>
</div>

Now the text is not centered any more, but that can be reproduced with
`text-align: center` in the inner or outer div.



## Best Practices

* _Do_ use short notations whenever possible.
* _Do_ align divs in center with `margin: <leftAndRightValue> auto;`
* _Do_ use the `line-height` property to vertically align in the middle.
