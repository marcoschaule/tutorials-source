### HTML - Basics - Head and body tags

#### `head` tags

These are the most important head tags:

##### `head` tag itself

It wraps the head itself.

``` html
<head>...</head>
```

Links:
[w3schools.com](http://www.w3schools.com/tags/tag_head.asp),
[selfhtml.org](https://wiki.selfhtml.org/wiki/HTML/Kopfdaten/meta),
[WikiPedia](https://en.wikipedia.org/wiki/HTML_element#head_tag),
[w3c.org](https://www.w3.org/TR/html5/document-metadata.html#the-head-element)

##### `title` tag
  
It gives the web page a title, which appears as the
browser's tab and the bookmark title.  

``` html
<title>Some Title Text</title>
```

Links:
[w3schools.com](http://www.w3schools.com/tags/tag_title.asp),
[selfhtml.org](https://wiki.selfhtml.org/wiki/Title),
[WikiPedia](https://en.wikipedia.org/wiki/HTML_element#title_tag),
[w3c.org](https://www.w3.org/TR/html5/document-metadata.html#the-title-element)

##### `meta` tag

It adds meta information to the html page.

``` html 
<meta ...></meta> or
<meta ... /> (XHTML4) or
<meta ... > (HTML5)
```

Important `meta` tags:

``` html 
// defines the charset for the webpage for HTML5
<meta charset="UTF-8">
// defines the charset for the webpage for HTML 4.x
<meta http-equiv="content-type" content="text/html; charset=utf-8">
 
// defines a description for the webpage which
// will be used in search engines
<meta name="description" content="Free Web tutorials">
 
// defines keywords including the keyword language
// which will be registered within search engines
<meta name="keywords" lang="en" content="HTML,CSS,XML,JavaScript">
 
// defines the author of the web page
<meta name="author" content="John Doe">
 
// defines the device content and scale 
<meta name="viewport" content="width=device-width, initial-scale=1.0">
 
// defines the date of last update of the page
<meta name="date" content="2010-05-15T08:49:37+02:00">
```

Links:
[w3schools.com](http://www.w3schools.com/tags/tag_meta.asp),
[selfhtml.org](https://wiki.selfhtml.org/wiki/Meta),
[WikiPedia](https://en.wikipedia.org/wiki/Meta_element),
[w3c.org](https://www.w3.org/TR/html5/document-metadata.html#the-meta-element)

##### The charset

To define the encoding of the file, you can use
* the _BOM_ (_Byte Order Mark_), which would be found at
  the beginning of a file,
* the HTTP Header of the file or
* the `meta` tag of the HTML file.

The `meta` tag is overridden by the HTTP header, and the header
is overridden by the BOM.

Links:
[Encoding](https://en.wikipedia.org/wiki/Character_encoding),
[Byte Order Mark](https://en.wikipedia.org/wiki/Byte_order_mark),
[selfhtml.org](https://wiki.selfhtml.org/wiki/HTML/Kopfdaten/meta#Zeichencodierung),
[w3c.org](https://www.w3.org/TR/encoding/),


##### `base` tag
  
It defines the base root path, from which all files are
included, so that they won't need to prefix their
paths with the root anymore.

``` html 
<base href="/some/prefix/path" target="..."></base> or
<base href="/some/prefix/path" target="..." /> (XHTML4)
<base href="/some/prefix/path" target="..."> (HTML5)
```

If you for example had several file includes:
``` html 
// in head:
<link href="/build/dev/styles/style1.css">
// in body:
<img src="/build/dev/images/image1.jpg">
<img src="/build/dev/images/image2.jpg">
<img src="/build/dev/images/image3.jpg">
<script src="/build/dev/scripts/script1.js">
```

You could use a base tag:
``` html 
// In head:
<base href="/build/dev">
// In body:
```

Which would result in the file includes:
``` html 
// in head:
<link href="/styles/style1.css">
// in body:
<img src="/images/image1.jpg">
<img src="/images/image2.jpg">
<img src="/images/image3.jpg">
<script src="/scripts/script1.js">
```

Links:
[w3schools.com](http://www.w3schools.com/tags/tag_base.asp),
[selfhtml.org](https://wiki.selfhtml.org/wiki/Base),
[WikiPedia](https://en.wikipedia.org/wiki/HTML_element#base_tag),
[w3c.org](https://www.w3.org/TR/html5/document-metadata.html#the-base-element)

##### `link` tag
  
It defines a link to another file like CSS styles.

``` html 
<link rel="stylesheet" type="text/css" href="/some/path/to/file.css"></link> or
<link rel="stylesheet" type="text/css" href="/some/path/to/file.css" /> (XHTML4) or
<link rel="stylesheet" type="text/css" href="/some/path/to/file.css"> (HTML5)
```

Links:
[w3schools.com](http://www.w3schools.com/tags/tag_link.asp),
[selfhtml.org](https://wiki.selfhtml.org/wiki/HTML/Kopfdaten/link),
[WikiPedia](https://en.wikipedia.org/wiki/HTML_element#link_tag),
[w3c.org](https://www.w3.org/TR/html5/document-metadata.html#the-link-element)

##### `style` tag
  
It defines inline styles (which is _not_ loaded from external files).

``` html 
<style>
  h1 { color:red; }
  p { color:blue; }
</style>
```

Links:
[w3schools.com](http://www.w3schools.com/tags/tag_style.asp),
[selfhtml.org](https://wiki.selfhtml.org/wiki/HTML/Kopfdaten/style),
[WikiPedia](https://en.wikipedia.org/wiki/HTML_element#style_tag),
[w3c.org](https://www.w3.org/TR/html5/document-metadata.html#the-style-element)

##### `script` tag
  
It loads a script in header if necessary;
`script`s should be loaded at the end of the body tag if possible.

``` html
// inline script tag:
<script type="text/javascript">... someJavaScript ...</script>
 // source script tag:
<script type="text/javascript" src="/some/path/to/file.js"></script>
```

Links:
[w3schools.com](http://www.w3schools.com/tags/tag_script.asp),
[selfhtml.org](https://wiki.selfhtml.org/wiki/Script),
[WikiPedia](https://en.wikipedia.org/wiki/HTML_element#script_tag),
[w3c.org](https://www.w3.org/TR/html5/scripting-1.html#the-script-element)

#### `body` tags

##### `body` tag

It wraps all the body tags.

``` html
<body></body>
```

Links:
[w3schools.com](http://www.w3schools.com/tags/tag_body.asp),
[selfhtml.org](https://wiki.selfhtml.org/wiki/Body),
[WikiPedia](https://en.wikipedia.org/wiki/HTML_element#body_tag),
[w3c.org](https://www.w3.org/TR/html5/sections.html#the-body-element)
  
##### All the other tags

Within the `body`, you can use all non-head tags, which
will be presented in the following.

#### Best Practices

* _Do_ use a `title` tag for the HTML document to be valid.
* _Do_ put the `style` and `link` tags into the `head`.
* _Do_ put the `script` tags at the end of the `body` for the scripts
  to load then the whole web page was loaded.
* _Do_ pre-loading `script` tags into the `head` for them to load before
  the body of the web page loads.
* _Do_ put the charset meta tag as the first element into the `head` tag.
* _Do_ use the `base` tag when using HTML5 routing (by Angular for example).
