---
title: Anchors and links
date: 2017-02-24 11:00:00
layout: post
category:
- recipes
- html
banner: html
---

This post is about `anchor`s and links, which are anchors with a hyper
reference attribute (`href`).
<!-- more -->

## Anchors

Anchors are references within the document. They can be navigated to
by using the `#`-sign in the URL address.
 
When defining an anchor like:
``` html
<a name="some-anchor-name">Some anchor title</a>
```

You can navigate to that part of the document by writing in the address bar:
```
http://some-url.bla/some-folder/some-file.html#some-anchor-name
```

The document then jumps to the anchor automatically.

References:
[w3schools.com](http://www.w3schools.com/tags/tag_a.asp),
[WikiPedia](https://en.wikipedia.org/wiki/HTML_element#a_tag),
[selfhtml.org](https://wiki.selfhtml.org/wiki/HTML/Textauszeichnung/a),
[w3c.org](https://www.w3.org/TR/html5/links.html)

## Links

Links are anchors that refer to other pages or external websites:
``` html
<a href="/some/local/page">Some local page</a>
<a href="http://some/external/website">Some external website</a>
```

You can also define where the anchor opens the hyper reference:
``` html
// opens reference in the current window:
<a href="..." target="_self">Some link</a>
 
// opens reference in a new window/tab:
<a href="..." target="_blank">Some link</a>
 
// opens reference in the parent window (if current is a child window):
<a href="..." target="_parent">Some link</a>
 
// opens reference in the top window (if current is a child window):
<a href="..." target="_top">Some link</a>
 
// opens reference in the iframe with the name "someIframeName":
<a href="..." target="someIframeName">Some link</a>
<iframe name="someIframeName" />
```

References:
[w3schools.com](http://www.w3schools.com/tags/tag_a.asp),
[WikiPedia](https://en.wikipedia.org/wiki/HTML_element#a_tag),
[selfhtml.org](https://wiki.selfhtml.org/wiki/HTML/Textauszeichnung/a),
[w3c.org](https://www.w3.org/TR/html5/links.html)

## Legend

* a = anchor
* href = hyper reference
