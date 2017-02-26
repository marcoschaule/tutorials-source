---
title: Entities
date: 2017-02-24 11:00:00
layout: post
category:
- recipes
- html
banner: html
---



## Overview

* Entities are special text formats to represent special characters.
* They can be written with their name (if available) like `&entity_name;`
  or with their number like `&#entity_number;`. They always start with
  an `&` and end with an `;`.
* Entity names are case sensitive.
* Entities are actually part of the Standard Generalized Markup Language (SGML).
  
Example:
`&copy; or &#169;` produces &copy;.

## Best Practices

* _Do_ use entities whenever you are about to use special characters.
* _Do_ use the non-breaking hyphen (`&#8209;`) to use a hyphen
  character (`‑`) that won't break.
  
## Links

[w3schools.com](http://www.w3schools.com/html/html_entities.asp),
[selfhtml.org](https://wiki.selfhtml.org/wiki/XML/DTD/Entities),
[WikiPedia](https://en.wikipedia.org/wiki/SGML_entity),
[w3c.org](https://www.w3.org/TR/html4/sgml/entities.html)
[List of Entities](https://dev.w3.org/html5/html-author/charref)