---
title: Hoisting
date: 2017-02-24 11:00:00
layout: post
category:
- Recipes
- JavaScript
---


## Overview

In JavaScript, variables and functions can be **hoisted**. Hoisting means,
that variable and function declarations are put into memory during the
compile phase, but stay exactly where you typed them in your coding.
The consequence is that
**variables and functions exist and can be used before they are declared** in the
current execution context and all sub contexts.


## Variable Hoisting

Variables are hoisted by declaring them with `var` (or `let` in ECMAScript 6)
somewhere in the current execution context.


### Examples:

* **Declaration without initialization**:
  ```javascript
  console.log(x); // logs undefined
  var x; // declaration
  ```
* **Declaration with initialization**:
  ```javascript
  x = 4; // initialization
  console.log(x); // logs 4
  var x; // declaration
  ```
* **No declaration**:  
  In contrast to the previous examples, the following one throws an error
  since `x` is neither declared nor initialized:
  ```javascript
  console.log(x); // throws an error
  ```

## Function hoisting

Functions are hoisted by using the
[function expression](recipes/javascript/functions.html)
somewhere in the current execution context.


### Examples:

* **Function expression (hoisting)**:
  ```javascript
  someFunction(); // logs 'it works'
  function someFunction(){  // function expression
    console.log('it works');
  }
  ```
* **Function declaration (no hoisting)**:
  ```javascript
  someFunction(); // throws an error
  var someFunction = function(){ // function declaration
    console.log('it works');
  };
  ```

## Best Practices

* _Do_ declare the variables at the beginning of the
  current scope to avoid errors.
* _Do_ try to avoid hoisting in general since it can
  lead to unexpected behavior.
  
