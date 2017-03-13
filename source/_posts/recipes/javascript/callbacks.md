---
title: Callbacks
date: 2017-02-24 11:00:00
layout: post
category:
- Recipes
- JavaScript
---



## Overview

JavaScript is an asynchronous language, that means, that some
native functions in javascript are executed outside of the
current context. For them not to _block_ the rest of the application,
JavaScript uses the so called **Event Loop**. This loop registers
all function calls that are asynchronous and fires an event when
they are done. The event again calls the so called **callback**.
So in JavaScript, a **callback** is a function with ane important purpose:
to be called when an expected execution context of an asynchronous function
has finished.

Here is a list of asynchronous functions you can
use in javascript in a DOM environment:
* `setInterval`,
* `setTimeout`,
* `XMLHttpRequest`,
* `WebSocket`,
* `Worker`,
* `requestAnimationFrame`,
* some HTML5 APIs such as the File API, Web Database API etc.,
* technologies that support `onload`,
* and many others ...

Each function calling one of the functions above becomes
asynchronous itself. And each function calling that function becomes
asynchronous itself, too, and so on.

Let's first take a look at a normal, synchronous function call:

```javascript
var str, getString, isString;

getString = function() {
  return 'someString';
}

isString = function(str) {
  return ('string' === typeof str);
}

// this works since there is not asynchronous function involved
str = getString();
// this logs true
console.log(isString(str));
```

In this code, the functions return simple values. This behavior is
synchronous. You can use them the expected way.
Let's now look at a function, which itself calls an asynchronous
function, which makes itself asynchronous:

```javascript
var str, getString, isString;

getString = function() {
  var str;
  setTimeout(function(){ // 'setTimeout' works asynchronous
    str = 'someString';
  });
  return str;
}

isString = function(str) {
  return ('string' === typeof str);
}

// this doesn't work since the function returns the string before
// the 'setTimeout' is fired (the next tick of the event loop)
str = getString(); 
// this logs false, since it is undefined
console.log(isString(str));
```

Ignoring the fact that `getString` is now asynchronous and threating
it the common synchronous way, the code fails. To solve this problem,
you can use callbacks. Callbacks are called at the end of an executing
context:

```javascript
var str, getString, isString;

getString = function(myCallback) { // function now has a callback function as a argument
  var str;
  setTimeout(function(){ // 'setTimeout' works asynchronously now
    str = 'someString';
    myCallback(null, str); // the callback is called instead of a return value
  });
  // no return value necessary any more
  // return str;
}

isString = function(str) {
  return ('string' === typeof str);
}

// now we call the 'getString' function and give it a callback;
// within this callback, we can now have the string available
getString(function(err, str){
  // this logs true since the string is available here
  console.log(isString(str));
}); 
```

To be more precise, the function given to the 'getString' function
is the callback definition (as a anonymous function expression):

```javascript
getString(function(err, str){
  // ...
}); 
```

Here the callback is finally executed with the first error argument as `null`
and the second result string argument as `'someString'`:

```javascript
myCallback(null, str);
```


## Callsbacks as the last argument

Whenever possible you should use callbacks as the last argument. For instance:

```javascript
// here is the callback the last argument
function someFunction(arg1, arg2, callback) {
  // some code here ...
}
```


## Error as the callback's first argument

When calling callbacks, you should call them with the first
argument being a possible error, followed by any other argument. For instance:

```javascript
// here is the callback the last argument
function someFunction(arg1, arg2, callback) {
  var objErr, objResult;
  
  // some code here ...
  if (errorHappened) {
    objErr = new Error('Some error happened!');
    return callback(objErr, null);
  }
  
  // some more code here ...
  objResult = { some: 'result' };
  // some more code here ...
  return callback(null, objResult);
}
```


## Callback Hell or Pyramid of Doom

When working with callbacks, you can run into so called
**callback hells** or **Pyramid of Doom**.
The callback hell is the nested calling of callbacks.

For instance:

```javascript
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

To avoid callbacks, there are several methods. One of them to call the
following function by name within the current function:

```javascript
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

If you don't [hoist](recipes/javascript/hoisting.html) the functions, you
will have to define the functions in order of them getting called.

Another way to avoid callback hell are
* the `async` framework,
* **Promises**,
* Reactice Programmen with **RxJS**, and
* Fibers and Futures.


## Callbacks in loops

If you have to deal with asynchronous functions in loops, it gets a little bit
tricky. Since the loop doesn't wait until the function has finished, the functions
in a loop are all fired and forgotten, ignoring any possible return value.

In the following (quite large) example, there are three asynchronous functions
that are called within a loop. The loop takes the result from each function and
adds it into a array of results. Finally, the array of results is logged, but it is
empty. How can that be?

Take a look:

```javascript
var doSomethingAsync1, doSomethingAsync2, doSomethingAsync2,
    arrDoFuncs, arrResults;

doSomethingAsync1 = function(callback) {
  setTimeout(function(){
    callback(null, 'someResult1AsString');
  });
};
doSomethingAsync2 = function(callback) {
  setTimeout(function(){
    callback(null, 'someResult2AsString');
  });
};
doSomethingAsync3 = function(callback) {
  setTimeout(function(){
    callback(null, 'someResult3AsString');
  });
};

arrDoFuncs = [doSomethingAsync1, doSomethingAsync2, doSomethingAsync3];
arrResults = [];

for (var i = 0; i < arrDoFuncs.length; i += 1) {
  var doSomethingAsyncCurrent = arrDoFuncs[i];
  doSomethingAsyncCurrent(function(objErr, strResult){
    arrResults.push(strResult);
  });
}

// this logs '[]', an empty array
console.log(arrResults);
```

The reason why the `arrResults` is empty, is because the loop fires each function
and continues, but the callback of the function is each fired later - when the loop
_and_ the logging have finished.

To compensate that behavior, you need to use a common callback, which checks for each
call whether all callbacks have finished.

Here the improved example:

```javascript
var doSomethingAsync1, doSomethingAsync2, doSomethingAsync2,
    commonCallback, arrDoFuncs, arrResults;

doSomethingAsync1 = function(callback) {
  setTimeout(function(){
    callback(null, 'someResult1AsString');
  });
};
doSomethingAsync2 = function(callback) {
  setTimeout(function(){
    callback(null, 'someResult2AsString');
  });
};
doSomethingAsync3 = function(callback) {
  setTimeout(function(){
    callback(null, 'someResult3AsString');
  });
};

arrDoFuncs = [doSomethingAsync1, doSomethingAsync2, doSomethingAsync3];
arrResults = [];

// add the callback that is used by each loop iteration
commonCallback = function(objErr, strResult) {
  arrResults.push(strResult);

  if (arrResults.length >= arrDoFuncs.length) {
    // this logs the finalized array
    console.log(arrResults);
  }
}

for (var i = 0; i < arrDoFuncs.length; i += 1) {
  var doSomethingAsyncCurrent = arrDoFuncs[i];
  doSomethingAsyncCurrent(commonCallback);
}
```

As you can see, the order of application as well as the order of the
code is destroyed, but the code works now. To put the code in order
for developers to read it from top to bottom, you can use the
[function hoisting](recipes/javascript/hoisting.html).

Here the final version of the example:

```javascript
var doSomethingAsync1, doSomethingAsync2, doSomethingAsync2,
    /* commonCallback */, arrDoFuncs, arrResults;

doSomethingAsync1 = function(callback) {
  setTimeout(function(){
    callback(null, 'someResult1AsString');
  });
};
doSomethingAsync2 = function(callback) {
  setTimeout(function(){
    callback(null, 'someResult2AsString');
  });
};
doSomethingAsync3 = function(callback) {
  setTimeout(function(){
    callback(null, 'someResult3AsString');
  });
};

arrDoFuncs = [doSomethingAsync1, doSomethingAsync2, doSomethingAsync3];
arrResults = [];

for (var i = 0; i < arrDoFuncs.length; i += 1) {
  var doSomethingAsyncCurrent = arrDoFuncs[i];
  doSomethingAsyncCurrent(commonCallback);
}

function commonCallback(objErr, strResult) {
  arrResults.push(strResult);

  if (arrResults.length >= arrDoFuncs.length) {
    // this logs the finalized array
    console.log(arrResults);
  }
}
```

The code still shifts to the left, but at least it reads from top to bottom.
The shifting is something you can't avoid that behavior in JavaScript.


## Links:

* [JavaScript Declarations are hoisted (w3scools.com)](http://www.w3schools.com/js/js_hoisting.asp)
* [Hoisting (MDN)](https://developer.mozilla.org/de/docs/Glossary/Hoisting)
* [Variable and function hoisting](http://adripofjavascript.com/blog/drips/variable-and-function-hoisting)


## Best Practices

* _Do_ write the callback as the last argument of an async function
  definition.
* _Do_ use **one** callback if possible.
* _Do_ set the first callback parameter to be the error object!
* _Do_ avoid function hoisting whenever possible.
