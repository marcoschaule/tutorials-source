---
title: Inline and block elements
date: 2017-02-24 11:00:00
layout: post
category:
- recipes
- html
---



## Block elements

Block elements are elements, that create their own block area.
If you use such an element, the HTML and text within that block
will continue at the next line again.

Example
``` html
<p>This text will continue</p><p>at the next line.</p>
```

This produces:
```
This text will continue
at the next line.
```

The block feature can be overridden by CSS.  
Often used block elements are for example:

```
body, div, h1, h2, h3, h4, h5, h6, p, form, fieldset, table, tr ...
```

## Inline elements

Inline elements are the opposite of block elements, namely elements that exist
within a line and won't force a newline or break.

Example
``` html
<span>This text will not continue</span>
<span>at the next line.</span>
```

This produces:
```
This text will not continue at the next line.
```

The inline feature can be overridden by CSS.  
Often used inline elements are for example:

```
span, input, button ...
```

## The `br` element and other linebreaks

The break element is special, since it is an inline element but creates a linebreak.

Example
``` html
This text will continue<br />at the next line.
```

This produces:
```
This text will continue
at the next line.
```

By CSS, there are some more linebreak types assigned by the `display`
attribute like `inline-block`, `flex`, `table`, `table-cell` ...

Links:
[w3schools.com](http://www.w3schools.com/cssref/pr_class_display.asp)
[selfhtml.org](https://wiki.selfhtml.org/wiki/Display)
