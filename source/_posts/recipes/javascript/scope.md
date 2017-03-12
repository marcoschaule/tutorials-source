---
title: Scope
subtitle: Test
date: 2017-02-24 11:00:00
layout: post
category:
- Recipes
- JavaScript
---


## Local and global scope

In JavaScript the scope can be global or local:
* The **global scope** is `window` in DOM and `global`
in Node.js environments.
* The **local scope** is a body of a `function`. 

When declaring a variable in JavaScript, it is declared in the current scope.
In the global scope (`window` or `global`), a variable is always added to the
scope as a property.
In the global scope that means: `var a = 1;` is equal to `a = 1;` is equal to `window.a = 1;` in a
DOM environment (and with `global.a = 1;` in a Node.js environment, respectivly).

Take a look at the following examples:

* **Declaration and initialization in the global scope**:  
  In the global scope, the variable declaration adds the variable
  to the `window` object/scope as property:

  ```javascript
  /* the `global` scope */
  var a; // declaration
  a = 1; // initialization
    
  console.log(a); // logs 1
  console.log(this.a); // logs 1 (`this` is `window`)
  console.log(window.a); // logs 1
  console.log(a === window.a); // logs true
  ```

* **Initialization in the global scope, no declaration**:  
  Also, in the global scope, the initialization _without_ declaration
  adds the variable to the `window` object/scope as a property, too:

  ```javascript
  /* the `global` scope */
  // var a; // no declaration
  a = 1; // initialization
    
  console.log(a); // logs 1
  console.log(this.a); // logs 1 (`this` is `window`)
  console.log(window.a); // logs 1
  console.log(a === window.a); // logs true
  ```

* **Declaration and initialization in a local function scope scope**:  
  If a variable is declared in a local function scope,
  the compiler throws an error when this very variable is
  accessed outside the scope:

  ```javascript
  /* a `local` scope */
  function localScopeFunction() {
    var a; // declaration
    a = 1; // initialization  
  };

  localScopeFunction();
    
  console.log(a); // throws an error
  console.log(this.a); // logs undefined (`this` is `window`)
  console.log(window.a); // logs undefined
  console.log(a === window.a); // throws an error
  ```

* If, on the other hand, the variable is initialized but _not_ declared
  in a local function scope, it is _still_ added to the global
  scope (`window` or `global`) as a property:

  ```javascript
  /* a `local` scope */
  function localScopeFunction() {
    // var a; // no declaration
    a = 1; // initialization
  }

  localScopeFunction();
    
  console.log(a); // logs 1
  console.log(this.a); // logs 1 (`this` is `window`)
  console.log(window.a); // logs 1
  console.log(a === window.a); // logs true
  ```

* In the local scope itself, the variable declaration doesn't add the variable
  to any object or scope as a property, but makes it available within
  that scope:

  ```javascript
  /* a `local` scope */
  function localScopeFunction() {
    var a; // declaration
    a = 1; // initialization  
      
    console.log(a); // logs 1
    console.log(this.a); // logs undefined (`this` is not `window` any more)
    console.log(window.a); // logs undefined
    console.log(a === window.a); // logs false
  }

  localScopeFunction();
  ```

_Note_: All the examples above can be done
the exact same way by using `global`
in a Node.js environment instead of `window`.

## The Immediately Invoked Function Expression (IIFE)

To create a local scope and to avoid working on the globale scope, you can use a so
called **Immediately Invoked Function Expression (IIFE)**. Here is how you build
such a function:

1. Create an anonymous function expression, since it will be a function for your code
  to have a local scope:

  ```javascript
  function(){}
  ```

1. Wrap the function with brackets, since anonymous functions can't exist without being
  assigned in JavaScript:

  ```javascript
  (function(){})
  ```

1. Call the anonymous function expression like every other function:

  ```javascript
  (function(){})();
  ```

1. Finally, start coding:

  ```javascript
  (function(){
    // code here...
  })();
  ```


## Best Practices

* _Do_ always declare a variable. If not, the variable is added to the global scope object,
  which can lead to unpredicted results.
* _Do_ use a
