---
title: The async framework
date: 2017-02-24 11:00:00
layout: post
category:
- Recipes
- JavaScript
---



## Overview

* The `asnyc` framework offers a repertoire of tools to
  handle asynchronous function calls.
* In general, if offers you a batch function and a final
  callback that is called when all batched functions are
  done.
* async can be used in Browser and Node.js apps. In the
  browser, you can include it via external script sources
  or using `import`. In Node.js, you use the `require`
  statement.

## The `async.each` function

* The `async.each` loop calls all loop functions in parallel and
  fires the final callback when all functions are done.
* A loop function is done when it has called its own
  callback with _no_ error.
* Each loop function can abort the loop by calling its
  callback _with_ an error object as first parameter.
  By doing this, the loop is cancelled and the final
  callback is immediately called with the very error object.
  The other loop functions are aborted, too.

Example `each` loop:
``` JavaScript
// when you have several async functions,
// each of them expecting a callback as only argument:
function fun1(callback) { /* ... */ }
function fun2(callback) { /* ... */ }
function fun3(callback) { /* ... */ }
// ...

// then you define your async each loop:
async.each([fun1, fun2, fun3, ...],
  function callbackFinal(objErr) {
    if (objErr) { /* ... */ }
  });
```

## The `async.eachSeries` function

* The `async.eachSeries` loop calls all loop functions in series and
  fires the final callback when all functions are done.
* A loop function is done when it has called its own
  callback with _no_ error.
* Each loop function can abort the loop by calling its
  callback _with_ an error object as first parameter.
  By doing this, the loop is cancelled and the final
  callback is immediately called with the very error object.
  The next loop functions are aborted, too.

Example `eachSeries` loop:
``` JavaScript
// when you have several async functions,
// each of them expecting a callback as only argument:
function fun1(callback) { /* ... */ callback(); }
function fun2(callback) { /* ... */ callback(); }
function fun3(callback) { /* ... */ callback(); }
// ...

// then you define your async each loop:
async.eachSeries([fun1, fun2, fun3, ...],
  function callbackFinal(objErr) {
    if (objErr) { /* ... */ }
  });
```

## The `async.waterfall` function

* The `async.waterfall` loop calls all loop functions in series and
  fires the final callback when all functions are done.
* A loop function is done when it has called its own
  callback with _no_ error.
* Each loop function can abort the loop by calling its
  callback _with_ an error object as first parameter.
  By doing this, the loop is cancelled and the final
  callback is immediately called with the very error object.
  The next loop functions are aborted, too.

Example `waterfall` loop:
``` JavaScript
// when you have several async functions,
// each of them expecting a callback as only argument:
function fun1(callback) {
  // do something ...
  callback(null, objResult1);
}
function fun2(objResult1, callback) {
  // do something ...
  callback(null, objResult1, objResult2);
}
function fun3(objResult1, objResult2, callback) {
  // do something ...
  callback(null, objResult3);
}
function fun4(objResult3, callback) {
  // do something ...
  callback(null, objResultFinal);
}

// then you define your async each loop:
async.waterfall([fun1, fun2, fun3, fun4],
  function callbackFinal(objErr, objResultFinal) {
    if (objErr) { /* ... */ }
    // do something with 'objResultFinal'
  });
```

Notes:
* Each loop function can abort the loop by calling the callback
  with an error: `callback(objSomeError, null);`
