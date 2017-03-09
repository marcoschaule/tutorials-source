---
title: Scope and Hoisting
date: 2017-02-24 11:00:00
layout: post
category:
- Recipes
- JavaScript
---


## Scope and declaration

In JavaScript the scope can be global or local.
The global scope is `window` in DOM and `global`
in Node.js environments.
A local scope is a body of a function. If variable is not
in a function, its scope is the global scope.

When declaring a variable in JavaScript, it is declared in the current scope.
In the global scope (`window` or `global`), a variable is always added to the
scope as a property.
It means: `var a = 1;` is equal to `a = 1;` is equal to `window.a = 1;` in a
DOM environment (and with `global.a = 1;` in a Node.js environment, respectivly).

Take a look at the following example:

```javascript
/* the `global` scope */
// a is declared in global scope, so it is added to `window`
var a = 1;
// a is not declared in global scope, but it is still added to `window`
b = 2; 
  
/* a local function scope */
(function() {
  // c is not declared and is therefore added to `window`  
  c = 3;
  // d is declared locally and not added to `window`
  var d = 4;
})();
  
console.log('a: ' + a); // logs 1
console.log('window.a: ' + window.a); // logs 1
console.log('a === window.a: ' + (a === window.a)); // logs true
  
console.log('b: ' + b); // logs 2
console.log('window.b: ' + window.b); // logs 2
console.log('b === window.b: ' + (b === window.b)); // logs true
  
console.log('c: ' + c); // logs 3
console.log('window.c: ' + window.c); // logs 3
console.log('c === window.c: ' + (c === window.c)); // logs true
  
console.log('d: ' + d); // throws an error, since d is not even declared in the current scope
console.log('window.d: ' + window.d); // throws an error, since d is not even declared in the current scope
console.log(d === window.d); // throws an error, since d is not even declared in the current scope
```

_Note_: The exact same can be done by using it in a Node.js environment and by
replacing `window` with `global`.

## Variable Hoisting

In JavaScript, variables are hoisted when declared.
That means, whenever a variable is declared with `var` (or `let` in ECMAScript 6),
the compiler declares all
variables at the beginning of the current scope, no matter
where the variables are in the code.

The consequence is that variables can be used _before_ they
are declared in code.

The following two examples are equivalent:

```javascript
var x;
console.log(x); // logs undefined
```

and:

```javascript
console.log(x); // logs undefined
var x;
```

In contrast to these examples, the following one throws an error
since `x` is neither declared nor initialized:

```javascript
console.log(x); // throws an error
```

## Function hoisting

In JavaScript, functions are hoisted when declared.
That means, whenever a function is declared with `function` in
a _function expression_, the compiler declares all
functions at the beginning of the current scope, no matter
where the functions are in the code.

The consequence is that functions can be called _before_ they
are declared in code.

The following two examples are equivalent:

```javascript
someFunction();
function someFunction(){ /* do something ... */ }
```

and:

```javascript
function someFunction(){ /* do something ... */ }
someFunction();
```