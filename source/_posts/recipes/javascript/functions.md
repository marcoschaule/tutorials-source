---
title: Functions
date: 2017-02-24 11:00:00
layout: post
category:
- Recipes
- JavaScript
---


## Function Expression vs. Declaration

In JavaScript, a function can be created as:
* a **function expression** like `function someFunc() {}` or
* a **function declaration** like `var someFunc = function() {};`.

The main difference between these two possibilities is that
function expressions can be [hoisted](recipes/javascript/hoisting.html)
in the current [scope](recipes/javascript/scope.html),
whereas function declarations cannot.


## First-Class Objects

In JavaScript, functions are first-class objects. That means, a function
* is an instance of the `Object` type,
* has a `prototype` object,
* has a link back to its constructor method,
* can have properties,
* can be stored in a variable,
* can be passed as a parameter to another function and
* can be returned from another function.

In Detail:

* **A function is an instance of an `Object` type:**
  ```javascript
  // this logs true
  console.log(function(){} instanceof Object);
  ```
* **A function has a `prototype` object:**
  ```javascript
  // this logs the function's prototype
  console.log((function(){}).prototype);
  ```
* **A function has a link back to its constructor method:**
  ```javascript
  function myFunc() {}
  
  // this logs 'function myFunc() {}', so the function itself
  console.log(myFunc.prototype.constructor);
  ```
* **A function can have properties:**
  ```javascript
  function myFunc() {}
  myFunc.someProp = 'someValue';

  // this logs 'someValue'
  console.log(myFunc.someProp);
  ```
* **A function can be stored in a variable:**
  ```javascript
  var myFunc = function(){};
  
  // this logs 'function(){}'
  console.log(myFunc);
  ```
* **A function can be passed as a parameter to another function:**
  ```javascript
  var myFunc1 = function(){};
  var myFunc2 = function(someFunc) {
    console.log(someFunc);
  };
  
  // this logs 'function(){}'
  myFunc2(myFunc1);
  ```
* **A function can be returned from another function:**
  ```javascript
  var myFunc = function() {
    return function(){};
  };
  
  // this logs 'function(){}'
  console.log(myFunc());
  ```
