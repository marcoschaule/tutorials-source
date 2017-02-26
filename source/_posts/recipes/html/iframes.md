---
title: iFrames
date: 2017-02-24 11:00:00
layout: post
category:
- recipes
- html
---



## Overview

* `iframe`s are elements to embed external web pages into a parent one.
* iFrames are potentially dangerous, but can be used safely if
  implemented following security advices.
* iFrames have a `src` attribute, over which they can load local and external
  sources via URL into the frame.
* iFrames have a `name` attribute, which can be used to change the
  iFrame's content dynamically.
* iFrames should be styled via CSS.
* In HTML5, the iFrame's `sandbox` attribute was introduced. With this attribute,
  you can define the security settings for the iFrame. The settings can be:
  * (no value): applies all restrictions
  * `allow-forms`: re-enables form submission
  * `allow-pointer-lock`: re-enables APIs
  * `allow-popups`: re-enables popups
  * `allow-same-origin`: allows the iframe content to be treated as being
    from the same origin
  * `allow-scripts`: re-enables scripts
  * `allow-top-navigation`: allows the iframe content to navigate its
    top-level browsing context

Example of iFrame:
``` html
<iframe src="demo_iframe_sandbox_form.htm"></iframe>
```

Example of iFrame with sandbox enabled:
``` html
<iframe src="demo_iframe_sandbox_form.htm" sandbox="allow-forms"></iframe>
```

Links:
* [w3schools.com](http://www.w3schools.com/html/html_iframe.asp)
* [selfhtml.org](https://wiki.selfhtml.org/wiki/Iframe#iframe)
* [w3c.org](https://www.w3.org/TR/2011/WD-html5-20110525/the-iframe-element.html)
* [caniuse.com](http://caniuse.com/#search=sandbox)

## Best Practices and Code Conventions