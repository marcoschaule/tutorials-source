---
title: Promises
date: 2017-02-24 11:00:00
layout: post
category:
- Recipes
- JavaScript
---


## Overview

If a function cannot return a value or throw an exception
without blocking, it can return a promise instead.
A promise is an object that represents the return
value or the thrown exception that the function
may eventually provide.
A promise can also be used as a proxy for a remote
object to overcome latency.

There are multiple promise frameworks (including a native
ECMAScript 6 Promise library). The most important ones are:
 
* [Q](https://github.com/kriskowal/q) (also used in AngularJS 1.x as `$q`)
* [When](https://github.com/cujojs/when)
* [Bluebird](http://bluebirdjs.com/docs/getting-started.html)

To stick with the AngularJS 1.x idea, we continue with using the Q framework.


## Why to use promises

To avoid the
[Callback Hells](recipes/javascript/callbacks.html#Callback-Hell-or-Pyramid-of-Doom)
you can use promises to flatten the code structure.

Instead of writing:
```javascript
step1(function (value1) {
    // Do something with value1
    step2(value1, function(value2) {
      // Do something with value2
        step3(value2, function(value3) {
            // Do something with value3
            step4(value3, function(value4) {
                // Do something with value4
            });
        });
    });
});
```

You could write:
```javascript
Q.fcall(promisedStep1)
    .then(promisedStep2)
    .then(promisedStep3)
    .then(promisedStep4)
    // error function to be called in case of any error beforehand
    .fail(function(objErr) {
      // Handle any error from all above steps
    })
    // final function to be called in case the promises ended (successfully or not)
    .fin(function() {
      // Handle any postfix operations
    })
    .done();
```


## Handling promises

When receiving a promise, you can call the `then` method
to handle the resolved or rejected (or progressed) value:

```javascript
somePromise.then(
    
    // success handler
    function(anySuccess) { /* handle success */ },
    
    // error handler
    function(anyErr) { /* handle error */ },
    
    // progress handler
    function(anyProgress) { /* handle progress */ }
);
```

* The success handler is executed, if the promise `somePromise`
  has been resolved successfully.
* The error handler is executed, if the promise `somePromise`
  has been rejected with an error or if an error was thrown
  in any success handler beforehand.
* The progress handler is executed every time, a progress notification
  is fired from the promise `somePromise`.
  
Alternatively to the three handlers given to `then` method,
Q offers methods for each case individually:

```javascript
somePromise
  .then(function someSuccessHandler(){ /* handle success */ })
  .fail(function someErrorHandler(){ /* handle error */ })
  .progress(function someProgressHandler(){ /* handle progress */ })
  ;
```

* The `fail` method is shorthand for `then(null, someErrorHandler)`.
  On newer clients or in Node.js you could use `catch` instead of `fail`.
* The `progress` method is shorthand for `then(null, null, someProgressHandler)`.
  Anyway, this method is deprecated on version 2 and will be replaced by
  the `promise.observeEstimate` method.

Additionally to the `then`, the `fail` and the `progress` methods, there are
the following methods available:

* `fin` to end a promise and to assure that unhandled exceptions 
  get rethrown and reported. This handler is called without any argument.
  On newer clients or in Node.js you could use `finally` instead of `fin`.
* `delay` to delay a chain for several milliseconds.
* and others ...

For example:

```javascript
somePromise
  .then(function someSuccessHandler1(){ /* handle success */ })
  .then(function someSuccessHandler2(){ /* handle success */ })
  .delay(50000) // delay processing for 5 seconds
  .then(function someSuccessHandler3(){ /* handle success */ })
  .fail(function someErrorHandler(){ /* handle error */ })
  .progress(function someProgressHandler(){ /* handle progress */ })
  .fin(function someFinalHandler() { /* handle final steps */ })
  ;
```

* The `then` functions are called in order or definition, whereas the third
  `then` call is delayed for 5 seconds.
* If any `then` throws an error, the fail is immediately called, without waiting
  for the next `then` to finish.
* If any `then` or the promise `somePromise` is rejected, the fail is immediately
  called, without waiting for the next `then` to finish.
* The `fin` method is called at the end, after each `then` has been resolved
  of the `fail` has been fired because of an error.
  

## Creating a Promise

To create a promise, you can use multiple methods:


### Using Deferreds:
  
You can use a deferred object to create a promise on demand.
This deferred object can be returned and is either
fulfilled or rejected (at least one tick) later.

Using Node's file libary to load a file with promises
would look like the following:

```javascript
var fs = require('fs');

function readFilePromise(strFilePathAndName){
  var deferred = Q.defer();

  fs.readFile(strFilePathAndName, 'utf-8', function(objErr, strContent) {
    if (objErr) {
      deferred.reject(new Error(objErr));
    }
    deferred.resolve(strContent);
  });

  return deferred.promise;
}
```

Now this function can be called as a promise:

```javascript
readFilePromise
 .then(function(strContent) {
   // handle content
 });
```


### Using `Q.fcall` and `Q.fapply`:  

You can use the function `fcall` (_function call_) to - as the
name suggests - call a function or `fapply` respectively.
This method calls a given function, and retuns a promise, which is
* resolved, if the function returns a value, or
* rejected, if the function throws an error.

Success case:

```javascript
// create the promise by wrapping a function: 
var somePromise = Q.fcall(function () {
    return 'someString';
});

// then handle it like a promise:
somePromise
  .then(function(str) {
    // str === 'someString'
    // handle success
  })
  //...
  ;
```

Error case:

```javascript
// create the promise by wrapping a function: 
var somePromise = Q.fcall(function () {
    throw new Error('Some error happened!');
});

// then handle it like a promise:
somePromise
  .then() // is ignored
  .fail(function() {
    //handle error */
  })
  //...
```

Alternatives to `fcall` and  `fapply` are `nfcall` and `nfapply` respectively.
They are used to wrap _node function calls_ which use node-default callback
signatures like `function callback(objErr, objResult){}`.

### Promise combinations

If you have an array of promises, you can call `Q.all()` to wait for all
of them to be resolved:


```javascript
var arrPromises = [somePromise1, somePromise2, somePromise3];

Q.all(arrPromises)
  .then(function(arrResults) {
    // handle results
    // arrResults[0] is the resolved result if somePromise1
    // arrResults[1] is the resolved result if somePromise2
    // arrResults[2] is the resolved result if somePromise3
  })
  .fail(function() { /* handle any error */ })
  ;
  
```

If any of the promises is rejected, though,
the `then` is ignored and the `fail` is called immediately.
The exact same method works for objects, too:

```javascript
var arrPromises = {a: somePromise1, b: somePromise2, c: somePromise3};

Q.all(arrPromises)
  .then(function(objResults) {
    // handle results
    // objResults.a is the resolved result if somePromise1
    // objResults.b is the resolved result if somePromise2
    // objResults.c is the resolved result if somePromise3
  })
  .fail(function() { /* handle any error */ })
  ;
  
```

If you want to wait for all promises to have either been resolved or
rejected, you can use the `Q.allSettled()` method:
  
```javascript
var arrPromises = {a: somePromise1, b: somePromise2, c: somePromise3};

Q.allSettled(arrPromises)
  .then(function(objResults) {
    // handle results
    // objResults.a is the resolved result if somePromise1
    // objResults.b is the resolved result if somePromise2
    // objResults.c is the resolved result if somePromise3
  })
  .fail(function() { /* handly any error */ })
  ;
  
```

In contrast, if you want to finish the promise if at least one has
been fulfilled, you can use the `Q.any()` method:

```javascript
var arrPromises = {a: somePromise1, b: somePromise2, c: somePromise3};

Q.allSettled(arrPromises)
  .any(function(anyFirst) { /* handles the first result results */ })
  .fail(function() { /* handle errors if all are rejected */ })
  ;
  
```

To be continued...
