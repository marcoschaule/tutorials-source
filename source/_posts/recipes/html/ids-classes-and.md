---
title: IDs and Classes
date: 2017-02-24 11:00:00
layout: post
category:
- recipes
- html
---



## Classes
### Overview

* You can give each body tag one or more classes.

  ``` html
  <div class="some-div-class">...</div>
  <span class="some-span-class">...</span>
  <p class="some-p-class">...</p>
  <h1 class="some-h1-class">...</h1>
  <table class="some-table-class">...</table>
  ...
  ```

* Classes are separated by an empty space.

  ``` html
  <div class="class-name-1 class-name-2"></div>
  ```

* Class names can be descriptive or imperative.
  Use the one that satisfies the need of the context.  
  
  ``` html
  <!-- imperative: -->
  <div class="margin-top-1rem width-100-percent"></div>
  <!-- descriptive: -->
  <div class="area-with-margin-full-size"></div>
  ```

### Best practices

* _Do_ use dash-case for class names!

  ``` html
  <div class="some-class-1 some-class-2">...</div>
  ```

Links:
[w3schools.com](http://www.w3schools.com/tags/att_class.asp)
[selfhtml.org](https://wiki.selfhtml.org/wiki/Class#class)
[w3c.org](https://www.w3.org/TR/2011/WD-html5-20110525/elements.html#classes)

## IDs
### Overview

* IDs give body elements a way to _identify_ them.
* Use them for elements close to the body element or special unique elements
  within the body.
* You can only use one ID name. An ID cannot have two names separated by space.

### Best Practices

* _Don't_ use simple ID names!
  Using simple id names can increase the likelihood of redundant id name usage:
  
  ``` html
  // This ID could alreay exist somewhere else in the file.
  // Try to avoid such simple names. Not good practice.
  <div id="container"></div>
  ```

* _Don't_ use the same ID multiple times!
  If multiple IDs with the same name are in use,
  * JavaScript (and jQuery and others) use only the first one found in the document when selecting,
  * whereas CSS on the other hand uses all instances of the ID for CSS styles.  
  
  Example:
  ``` html
  // Only the first is used in JavaScript scripts,
  // but both are addressed in CSS styles.
  <div id="my-custom-container">... content 1 ...</div>
  <div id="my-custom-container">... content 2 ...</div>
  ```

* _Do_ use prefixes! 
  * By using prefixes, you can confine your IDs from IDs of other libraries, frameworks etc.
  * By using prefixes, you can immediately identify the ID as associated with your application.
  
* _Don't_ use empty spaces in IDs!
  * By using empty spaces, you don't give an element two IDs, instead you give the
    element an ID name with an empty space.
  
Links:
[w3schools.com](http://www.w3schools.com/tags/att_id.asp)
[selfhtml.org](https://wiki.selfhtml.org/wiki/HTML/Universalattribute#id)
[w3c.org](https://www.w3.org/TR/2011/WD-html5-20110525/elements.html#the-id-attribute)
[Ensuring that id attributes are unique on a Web page](https://www.w3.org/TR/WCAG20-TECHS/H93.html)