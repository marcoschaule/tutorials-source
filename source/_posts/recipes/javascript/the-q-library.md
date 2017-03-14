---
title: Promises with the Q library
date: 2017-02-24 11:00:00
layout: post
category:
- Recipes
- JavaScript
---


## Overview

The Q promise library is one of the first libraries
for JavaScript. It implements the
[A+ Promise Standard](https://promisesaplus.com/).
Q is also partly implemented in AngularJS 1.x.


## Why to use promises

If a function cannot return a value or throw an exception
without blocking, it can return a promise instead.
A promise is an object that represents the return
value or the thrown exception that the function
may eventually provide.
A promise can also be used as a proxy for a remote
object to overcome latency.

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


## Handling promises


### Handlers in the `then` method

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
  

### The chain methods `then`, `fail` and `fin`

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

For example:

```javascript
somePromise
  .then(function someSuccessHandler1(){ /* handle success */ })
  .then(function someSuccessHandler2(){ /* handle success */ })
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


### Other chain methods

Additionally to the `then`, the `fail` and the `progress` methods, there are
the following methods available:

* `fin` to end a promise and to assure that unhandled exceptions 
  get rethrown and reported. This handler is called without any argument.
  On newer clients or in Node.js you could use `finally` instead of `fin`.
* `delay` to delay a chain for several milliseconds.
* and others ...

Example:

```javascript
somePromise
  .then(function someSuccessHandler1(){ /* handle success */ })
  .delay(5000) // delay processing for 5 seconds
  .then(function someSuccessHandler3(){ /* handle success */ })
  // ...
```



## Promise combinations


### The `Q.all` method

If you have an array of promises, you can call `Q.all()` to wait for all
of them to be resolved:

```javascript
var somePromise1 = Q.resolve('a');
var somePromise2 = Q.resolve('b');
var somePromise3 = Q.resolve('c');
var arrPromises  = [somePromise1, somePromise2, somePromise3];

Q.all(arrPromises)
  .then(function(arrResults) {
    console.log(arrResults[0]); // this logs 'a'
    console.log(arrResults[1]); // this logs 'b'
    console.log(arrResults[2]); // this logs 'c'
  })
  .fail(function() { /* handle any error */ })
  ;
```

If any of the promises is rejected, though,
the `then` is ignored and the `fail` is called immediately:

```javascript
var somePromise1 = Q.resolve('a');
var somePromise2 = Q.resolve('b');
var somePromise3 = Q.reject('c');
var arrPromises  = [somePromise1, somePromise2, somePromise3];

Q.all(arrPromises)
  .then(function(objResults) { /* ignored */ })
  .fail(function(anyErr) {
    console.log(anyErr); // this logs 'c'
  })
  ;
```


### The `Q.allSettled` method

If you want to wait for all promises to have either been resolved or
rejected, you can use the `Q.allSettled()` method:
  
```javascript
var somePromise1 = Q.resolve('a');
var somePromise2 = Q.resolve('b');
var somePromise3 = Q.reject('c');
var arrPromises  = [somePromise1, somePromise2, somePromise3];

Q.allSettled(arrPromises)
  .then(function(arrResults) {
    console.log(arrResults[0]); // this logs { value : 'a', state: 'resolved' }
    console.log(arrResults[1]); // this logs { value : 'b', state: 'resolved' }
    console.log(arrResults[2]); // this logs { reason: 'c', state: 'rejected' }
  })
  ;
  
```

This method does not call a `fail` or `catch` method. All Results - resolved
or rejected - are send to the `them` method. Furthermore, this function does
not work with objects, only with arrays.


### The `Q.any` method

In contrast, if you want to finish the promise if at least one has
been fulfilled, you can use the `Q.any()` method:

```javascript
var somePromise1 = Q.resolve('a');
var somePromise2 = Q.resolve('b');
var somePromise3 = Q.resolve('c');
var arrPromises  = [somePromise1, somePromise2, somePromise3];

Q.any(arrPromises)
  .then(function(strResult) { 
    console.log(strResult); // this logs 'a'
  })
  .fail(function(objErr) { /* is ignored */ })
  ;
```

If the first and the second are rejected:

```javascript
var somePromise1 = Q.reject('a');
var somePromise2 = Q.reject('b');
var somePromise3 = Q.resolve('c');
var arrPromises  = [somePromise1, somePromise2, somePromise3];

Q.any(arrPromises)
  .then(function(strResult) { 
    console.log(strResult); // this logs 'c'
  })
  .fail(function(objErr) { /* is ignored */ })
  ;
```

If all are rejected:

```javascript
var somePromise1 = Q.reject('a');
var somePromise2 = Q.reject('b');
var somePromise3 = Q.reject('c');
var arrPromises  = [somePromise1, somePromise2, somePromise3];

Q.any(arrPromises)
  .then(function(strResult) { /* is ignored */ })
  .fail(function(objErr) {
    // logs an error object telling it can't 
    // get fulfillment value from any promise
    console.log(objErr);
  })
  ;
```


### Promise sequences

Instead of using sequences with `then` like:

```javascript
Q(anyValueInitial)
  .then(someHandler1)
  .then(someHandler2)
  .then(someHandler3)
  // ...
```

one can use a `forEach` loop for a dynamic number of handlers:

```javascript
var arrHandlers    = [someHandler1, someHandler2, someHandler3];
var promiseCurrent = Q(anyValueInitial);

arrHandlers.forEach(function(handler) {
  // Each step the handler is applied to the
  // current promose, which results in the "next"
  // promise to be handled.
  promiseCurrent = promiseCurrent.then(handler);
});
```

Using the `reduce` array method, one can reduce the procedure even more:

```javascript
var arrHandlers = [someHandler1, someHandler2, someHandler3];

arrHandlers.reduce(function(promiseCurrent, handler) {
  // Each step the handler is applied to the
  // current promose, which then returns the
  // resulting promise.
  return promiseCurrent.then(handler);
}, Q(anyValueInitial));
```

And even that can be reduced:

```javascript
var arrHandlers = [someHandler1, someHandler2, someHandler3];
arrHandlers.reduce(Q.when, Q(anyValueInitial));
```

The `Q.when` method has the format
`Q.when = function(value, fulfilled, rejected, progressed)...`,
which means, that the value given the `Q.when` will be called by the 
`fulfilled` function, which itself returns the next promise.
So this is equal the previous example.


## Links

* [Promises/A+ Standard](https://promisesaplus.com/)
* [The Q Library](https://github.com/kriskowal/q)
