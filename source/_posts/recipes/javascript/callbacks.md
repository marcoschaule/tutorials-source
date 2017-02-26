---
title: Callbacks
date: 2017-02-24 11:00:00
layout: post
category:
- recipes
- html
---



## Overview

* Callbacks are used to execute an action after a current function
  has finished.
* Callbacks should always be the last argument of a function
  definition.
* Callbacks, by default, are called with the first parameter being
  an error object, followed by any other parameter.

Example of callbacks:
``` javascript
// define the function:
function someFunction(callback) {
  // ... do something ...

  // in case of an error like objErr = { message: 'Some error occured!' }
  callback(objErr);

  // or in case of success
  callback(null, objSuccess);
}

// call the function:
someFunction(function(objErr, objResult) {
  if (objErr) {
    console.error(objErr);
    return;
  }

  // do something with objResult
  objResult ...
});

```

## Callback hell

* When working with callbacks, you can run into callback hells.
  The callback hell is the nested calling of callbacks.

``` javascript
function someFunction(callback1) {
  // do something ...
  callback1(function(callback2) {
    // do something ...
    callback2(function(callback3) {
      // do something ...
      callback3(function(callback4) {
        // do something ...
        // ...
      });
    });
  });
}
```

* To avoid that, there are several methods. Using simple callbacks,
  you can do:

``` javascript
// define the functions to call each other:
function someFunction() {
  // do something ...
  callback1();
}
function callback1() {
  // do something ...
  callback2();
}
function callback2() {
  // do something ...
  callback2();
}
function callback3() {
  // do something ...
  callback4();
}
// ...
```

* You can call functions before they are defined because of the so called
  _function hoisting_.
* Only functions defined in function expression (not
  via assignment to a variable) can be hoisted.
* Try to avoid function hoisting, since it can lead to problems.
* Another possibility to avoid callback hell are the `async` framework,
  Promises, RxJS, Fibers, Futures etc. They are explained in the next
  chapter.

Example:
```javascript
// this works:
function f1() { f2(); }
function f2() {}

// this doesn't work:
var f1 = function() { f2(); }; // => error, f2 undefined
var f2 = function() {};

// And this doesn't work either:
var f1 = function f1() { f2(); }; // => error, f2 undefined
var f2 = function f2() {};
```

Links:
* [JavaScript Declarations are hoisted (w3scools.com)](http://www.w3schools.com/js/js_hoisting.asp)
* [Hoisting (MDN)](https://developer.mozilla.org/de/docs/Glossary/Hoisting)
* [Variable and function hoisting](http://adripofjavascript.com/blog/drips/variable-and-function-hoisting)

## Callbacks in loops

## Best Practices

* _Do_ write the callback as the last argument of an async function
  definition.
* _Do_ use **one** callback if possible.
* _Do_ set the first callback parameter to be the error object!
* _Do_ avoid function hoisting whenever possible.
