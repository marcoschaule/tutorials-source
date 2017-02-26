---
title: IDs and Classes
date: 2017-02-24 11:00:00
layout: post
category:
- recipes
- css
---

This post describes the basic functionality of (custom) `id`s and `class`es and the best
practices you should use when working with them.
<!-- more -->

## IDs

CSS `id`s
* are accessed by the hash (**#**) character in CSS.
* should be used in declarative (like `id="header"`) fashion.
* **identify exactly one** element within the whole web site.
* should be **used rarly** since an ID that that appears multiple times can cause problems.
* are the **faster method to find elements** in the DOM since they should be unique.
* are often used for the **structural elements** of a web site like headers, footers, sidebars etc.

Example:

```html
<!-- the text of this "div" -->
<div id="some-id">some text</div>
```

```css
/* gets the color "red" by css" */
#some-id {
  color: red;
}
```


## Classes

CSS `class`es
* are accessed by the dot (**.**) character in CSS.
* can be used in imperative (like `class="float-left center"`) and declarative fashion (
  like `class="post-preview"`) or in combination of both.
* **identify ore or multiple** elements at the same time.
* can be **often** since classes are not expected to be unique.
* are the **slower method to find elements** in the DOM since they are not expected to be unique.
* are often used for the **contextual elements** of a web site like like special headers, paragraphs etc.

Example:

```html
<!-- the text of this "div"s -->
<div class="some-class1">some text</div>
<div class="some-class2">some text</div>
<div class="some-class1 some-class2">some text</div>
```

```css
/* gets the color "red" in css for "some-class1" and */
/* the font weight of "bold" for "some-class2"; the */
/* last div even gets both properties */
.some-class1 {
  color: red;
}
.some-class2 {
  font-weight: bold;
}
```


## Best practices

* _Do_ give IDs and classes **expressive names** like `.top-heading` or `.float-left`
  in contrast to `.a` or `.b`. (You understand, Kevin?!?)
* _Do_ use `id`s in declarative style.
* _Do_ use **dash-case names** for classes and IDs!
* _Do_ use **IDs rarly** since their usage can lead to problems!
