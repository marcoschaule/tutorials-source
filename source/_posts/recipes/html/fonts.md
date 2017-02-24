---
title: Fonts
date: 2017-02-24 11:00:00
layout: post
category:
- recipes
- html
---



## Overview

* To use non-default fonts in the page, you can either
  download and include them locally, or you can use
  so called Content Delivery Networks (CDNs) to load
  them from external source.
* External sources are
  [fontsquirrel.com](https://www.fontsquirrel.com/) or
  [Google Fonts](https://fonts.google.com/). From here
  you can either include the fonts into your files or
  download them. Another source are platforms like
  [dafont.com](http://www.dafont.com). Here you can only
  download very fancy fonts.
* Fonts come in different formats. These formats are
  SVG Fonts/Shapes, TrueType Fonts (TTF),
  OpenType Fonts (OTF), The Web Open Font Format (WOFF)
  The Web Open Font Format (WOFF 2.0) and
  Embedded OpenType Fonts (EOT).
* If you want scalable high quality fonts, use SVG if
  possible. Usually you have to inlcude most or even all
  fonts anyway (depending on legacy support), since different
  clients use different formats. (= Chaos)
  
Links:
* [w3schools.com](http://www.w3schools.com/css/css3_fonts.asp)
* [drweb.de](https://www.drweb.de/magazin/webfont-formate-beschaffenheit-einsatzmoeglichkeiten-im-webdesign/)

Font resource links:
* [Google Fonts](https://fonts.google.com/)
* [fontsquirrel.com](https://www.fontsquirrel.com/)
* [dafont.com](http://www.dafont.com)
 
## Using Google Fonts

* By using Google Fonts you can use a CDN to include any desired
  font via `head` links, `head` `style`s or via CSS import.
* Also, you can include multiple font weights or even multiple fonts
  at the same time, which saves HTTP-requests and time.
* Loading too many fonts can notably slow down your web page loading
  and parsing process.
  
Example for including two fonts as `head` link and style:
``` html
// head import link
<link href="https://fonts.googleapis.com/css?family=Open+Sans|PT+Sans" rel="stylesheet">
 
// head CSS import style:
<style>@import url('https://fonts.googleapis.com/css?family=Open+Sans|PT+Sans');</style>
```

Example for including in CSS:
``` CSS
@import url('https://fonts.googleapis.com/css?family=Open+Sans|PT+Sans');
```

Example of usage in CSS:
``` CSS
font-family: 'Open Sans', sans-serif;
font-family: 'PT Sans', sans-serif;
```

## Best Practices

* _Do_ include maximum three fonts for your web site.
  Too many fonts slow down your site.
* _Do_ load as many font information at once as possible.
  Too many HTTP calls slow down the page load.
* _Do_ use Content Deliver Networks whenever possible.
  Loading the fonts yourself slows down the loading process.
  Also you will have to manage all fonts by yourself. And
  a CDN is more likely to be available than your system.
