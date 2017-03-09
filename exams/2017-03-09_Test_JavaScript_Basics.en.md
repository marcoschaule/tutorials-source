JavaScript Basics - Test
========================
  
  
Name: ___________________  
Course #: 6  
Date: 09.03.2017  

Data types and variables
------------------------

1. Which data types are primitives:
  * the `Date` type
  * the `number` type
  * the `boolean` type
  * the `function` type
  * the `string` type
  * the `Array` type
  
1. Which expression is correct?
  * JavaScript has a block scope and is synchronous.
  * JavaScript has a function scope and is synchronous.
  * JavaScript has a block scope and is asynchronous.
  * JavaScript has a function scope and is asynchronous.

1. Which value does `result` have?
  ```javascript
  var given;
    
  given = 1;
  function changeGiven() {
    given = 2;
  }
  given = 3;
  result = given;
  changeGiven();
  ```
  * It has `result === undefined`.
  * It has `result === 1`.
  * It has `result === 2`.
  * It has `result === 3`.

1. Which value does `result` have?
  ```javascript
  var given;
    
  given = 1;
  function changeGiven() {
    given = 2;
  }
  given = 3;
  changeGiven();
  result = given;
  ```
  * It has `result === undefined`.
  * It has `result === 1`.
  * It has `result === 2`.
  * It has `result === 3`.

1. Which value does `result` have?
  ```javascript
  var given;
    
  function changeGiven() {
    given = 2;
  }
    
  result = given;
  given = 3;
  changeGiven();
  ```
  * It has `result === undefined`.
  * It has `result === 1`.
  * It has `result === 2`.
  * It has `result === 3`.
  
Functions
---------

1. Which functions are hoisted?
  * Functions defined with `var myFunc = function() { /*...*/ };`.
  * Functions defined with `function() { /*...*/ }`.
  * Functions defined with `var myFunc = function myFunc() { /*...*/ };`.
  * Functions defined with `function myFunc() { /*...*/ }`.

1. Which expression is correct?
  * A function without `return` value returns the last used value.
  * A function without `return` value returns `undefined`.
  * A function without `return` value returns `null`.
  * A function without `return` value returns nothing.

1. Which value does `result` have?
  ```javascript
  var obj;
    
  obj = {
    value: 3,
    increase: function() {
      this.value += 1;
      return this;
    }
  };
    
  var result = obj
    .increase()
    .increase()
    .increase()
    .value;
  ```
  * It has `result === undefined`.
  * It has `result === 3`.
  * It has `result === 5`.
  * It has `result === 6`.