JavaScript Basics - Test
========================
  
  
Name: ___________________  
Termin: 6  
Datum: 09.03.2017  

Data types and variables
------------------------

1. Welche Datentypen sind primitive (skalare) Datentypen in JavaScript?
  * Der `Date`-Datentyp.
  * Der `number`-Datentyp.
  * Der `boolean`-Datentyp.
  * Der `function`-Datentyp.
  * Der `string`-Datentyp.
  * Der `Array`-Datentyp.
  
1. Welche Aussage ist korrekt? 
  * JavaScript arbeitet mit einem _block scope_ Wertebereich und ist eine synchrone Sprache.
  * JavaScript arbeitet mit einem _function scope_ Wertebereich und ist eine synchrone Sprache.
  * JavaScript arbeitet mit einem _block scope_ Wertebereich und ist eine asynchrone Sprache.
  * JavaScript arbeitet mit einem _function scope_ Wertebereich und ist eine asynchrone Sprache.

1. Welchen Wert hat `result`?
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
  * Es hat den Wert `result === undefined`.
  * Es hat den Wert `result === 1`.
  * Es hat den Wert `result === 2`.
  * Es hat den Wert `result === 3`.

1. Welchen Wert hat `result`?
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
  * Es hat den Wert `result === undefined`.
  * Es hat den Wert `result === 1`.
  * Es hat den Wert `result === 2`.
  * Es hat den Wert `result === 3`.

1. Welchen Wert hat `result`?
  ```javascript
  var given;
    
  function changeGiven() {
    given = 2;
  }
    
  result = given;
  given = 3;
  changeGiven();
  ```
  * Es hat den Wert `result === undefined`.
  * Es hat den Wert `result === 1`.
  * Es hat den Wert `result === 2`.
  * Es hat den Wert `result === 3`.
  
Functions
---------

1. Welche Funktionen werden ge`hoisted`?
  * Funktionen definiert mit `var myFunc = function() { /*...*/ };`.
  * Funktionen definiert mit `function() { /*...*/ }`.
  * Funktionen definiert mit `var myFunc = function myFunc() { /*...*/ };`.
  * Funktionen definiert mit `function myFunc() { /*...*/ }`.

1. Welche Aussage ist korrekt?
  * Eine Funktion ohne `return` gibt die zuletzt genutze Variable zurück.
  * Eine Funktion ohne `return` gibt `undefined` zurück.
  * Eine Funktion ohne `return` gibt `null` zurück.
  * Eine Funktion ohne `return` gibt nichts zurück.

1. Welchen Wert hat `result`?
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
  * Es hat den Wert `result === undefined`.
  * Es hat den Wert `result === 3`.
  * Es hat den Wert `result === 5`.
  * Es hat den Wert `result === 6`.