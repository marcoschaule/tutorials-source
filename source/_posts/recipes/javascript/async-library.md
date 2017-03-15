---
title: The Async Library
date: 2017-02-24 11:00:00
layout: post
category:
- Recipes
- JavaScript
---


## Overview

The [`Async`](https://caolan.github.io/async/docs.html)
library provides function to handle
asynchronous JavaScript for developers

* to avoid [Callback Hells](recipes/javascript/callbacks.html#Callback-Hell-or-Pyramid-of-Doom), and
* to handle asynchronous control flows
  like loops, series etc.

Although originally designed for use with Node.js,
it can also be used directly in the browser.


## Collection function

The most commonly used collection functions are
* the [`async.each`](recipes/javascript/async-library.html#The-async-each-function)
  function, and
* The [`async.eachSeries`](recipes/javascript/async-library.html#The-async-eachSeries-function)
  function.


### The `async.each` function

Features:
* The `async.each` loop calls all loop functions in parallel and
  fires the final callback when all functions are done.
* The final callback is optional.
* All functions are fired "at the same time",
  not waiting for one-another.
* If a callback is called with an error, the process aborts
  and calls the final callback if available.

Example:

```javascript
function myFunction1(myInnerCallback) { // called at the same time
  // do something ...
  myInnerCallback(null);
}
function myFunction2(myInnerCallback) { // called at the same time
  // do something ...
  myInnerCallback(null);
}
function myFunction3(myInnerCallback) { // called at the same time
  // do something ...
  myInnerCallback(null);
}

async.each([myFunction1, myFunction2, myFunction3],
  function myFinalCallback(objErr) {
    if (objErr) {
      // handle error if occurred
    }
    // ... continue
  });
```

As long as no function calls its callback with `myInnerCallback(anyErr)`,
the process continues. As soon as any error occurs, the whole process
aborts and the final callback is called with that very error.

Example:

```javascript
function myFunction1(myInnerCallback) {
  // do something ...
  myInnerCallback(anyErr);
}
function myFunction2(myInnerCallback) {
  // do something ...
  myInnerCallback(new Error('Some error occurred in function 2!')); // it aborts here
}
function myFunction3(myInnerCallback) {
  // do something ...
  myInnerCallback(null);
}

async.each([myFunction1, myFunction2, myFunction3],
  function myFinalCallback(objErr) {
    if (objErr) {
      // this logs an error with 'Some error occurred in function 2!'
      console.log(objErr);
    }
  });
```


### The `async.eachSeries` function

Features:
* The `async.eachSeries` loop calls all loop functions in series
  and fires the final callback when all functions are done.
* The final callback is optional.
* Each function is called when the previous has finished, they
  are called in the order provided by the array.
* If a callback is called with an error, the process aborts
  and calls the final callback if available.

Example:

```javascript
function myFunction1(myInnerCallback) { // called 1st
  // do something ...
  myInnerCallback(null);
}
function myFunction2(myInnerCallback) { // called 2nd
  // do something ...
  myInnerCallback(null);
}
function myFunction3(myInnerCallback) { // called 3rd
  // do something ...
  myInnerCallback(null);
}

async.eachSeries([myFunction1, myFunction2, myFunction3],
  function myFinalCallback(objErr) {
    if (objErr) {
      // handle error if occurred
    }
    // ... continue
  });
```

Apart from the non-parallel behavior, the `async.eachSeries` behaves exactly as the
`async.each`.


## Control flow function

### The `async.parallel` function

The `async.parallel` works similar to the `async.each` function:
* It calls all loop functions in parallel and
  fires the final callback when all functions are done.
* All functions are fired "at the same time",
  not waiting for one-another.
* The final callback is optional.
* If a callback is called with an error, the process aborts
  and calls the final callback if available.
* The difference to `async.each` is, that each callback can
  be called with additional result parameters for the
  final callback.

Example:

```javascript
function myFunction1(myInnerCallback) { // called at the same time
  // do something ...
  myInnerCallback(null, 'someString');
}
function myFunction2(myInnerCallback) { // called at the same time
  // do something ...
  myInnerCallback(null, 'someOtherString');
}
function myFunction3(myInnerCallback) { // called at the same time
  // do something ...
  myInnerCallback(null, 3);
}

async.parallel([myFunction1, myFunction2, myFunction3],
  function myFinalCallback(objErr, arrResults) {
    if (objErr) {
      // handle error if occurred
    }
    console.log(arrResults); // logs ['someString', 'someOtherString', 3]
  });
```

### The `async.series` function

The `async.series` works similar to the `async.eachSeries` function.
* It calls all loop functions in series and
  fires the final callback when all functions are done.
* All functions are fired one after another.
* The final callback is optional.
* If a callback is called with an error, the process aborts
  and calls the final callback if available.
* The difference to `async.eachSeries` is, that each callback can
  be called with additional result parameters for the
  final callback.

Example:

```javascript
function myFunction1(myInnerCallback) { // called 1st
  // do something ...
  myInnerCallback(null, 'someString');
}
function myFunction2(myInnerCallback) { // called 2nd
  // do something ...
  myInnerCallback(null, 'someOtherString');
}
function myFunction3(myInnerCallback) { // called 3rd
  // do something ...
  myInnerCallback(null, 3);
}

async.series([myFunction1, myFunction2, myFunction3],
  function myFinalCallback(objErr, arrResults) {
    if (objErr) {
      // handle error if occurred
    }
    console.log(arrResults); // logs ['someString', 'someOtherString', 3]
  });
```


### The `async.waterfall` function

The `async.waterfall` works similar to the `async.series` function:
* It calls all loop functions in series and
  fires the final callback when all functions are done.
* All functions are fired one after another.
* The final callback is optional.
* If a callback is called with an error, the process aborts
  and calls the final callback if available.
* The difference to `async.series` is, that each callback can
  be called with additional result parameters for the _next_ function.

Example:

```javascript
// called 1st
function myFunction1(myInnerCallback) { // called 1st
  // do something ...
  myInnerCallback(null, 'someValue');
}
// called 2nd
function myFunction2(strArgPrevious, myInnerCallback) {
  console.log(strArgPrevious); // logs 'someValue'
  // do something ...
  myInnerCallback(null, 'someValue1', 'someValue2');
}
// called 3rd
function myFunction3(strArgPrevious1, strArgPrevious2, myInnerCallback) {
  console.log(strArgPrevious1); // logs 'someValue1'
  console.log(strArgPrevious2); // logs 'someValue2'
  // do something ...
  myInnerCallback(null, 'someFinalValue');
}

async.waterfall([myFunction1, myFunction2, myFunction3],
  function myFinalCallback(objErr, strArgFinal) {
    if (objErr) {
      // handle error if occurred
    }
    console.log(strArgFinal); // logs 'someFinalValue'
  });
```


## Links

* [Async documentation](https://caolan.github.io/async/)
* [Async on GitHub](https://github.com/caolan/async)
