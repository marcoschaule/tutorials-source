---
title: AngularJS 1.x Controllers
date: 2017-03-16 14:56:00
layout: post
category:
- Recipes
- AngularJS 1.x
---


## Overview

An Angular **controller** is a class/function that
* **connects the Model with the View** via the so
  called ViewModel,
* itself **is unaware of the view**, meaning it
  doesn't "recognize" if there is one view,
  are two views or multiple views used with
  the controller.
* **is instantiated for each view** it is used with, and
* **can be tested separately** from the view and
  the model it uses.

Here an example of a controller definition:
```javascript
angular
  .module('myModule')
  .controller('MyController', MyController);

function MyController(UserService, SomeService) {
  var $ctrl = this;

  // some local variables that are
  // not exposed to the view
  var _objSomeLocalObject = {};
  var _numSomeLocalNumber = 5;

  // bind the service variables for
  // a view to access them
  $ctrl.objUser = UserService.exports;
  $ctrl.objSome = SomeService.exports;

  // bind the controller functions
  // for the view to call them
  $ctrl.doSomething     = doSomething;
  $ctrl.doSomethingElse = doSomethingElse;

  // define the controller functions;
  // they are bound via hoisting
  function doSomething() { /* do something */ }
  function doSomethingElse() { /* do something else */ }

  // define helper functions that are
  // not exposed to the view
  function _helpWithSomething() { /* help with something */ }
  function _helpWithSomethingElse() { /* help with something else */ }
}

// property injection
MyController.$inject = ['UserService', 'SomeService'];
```

After defining a controller like this, it can be used like:

```html
<div ng-controller="MyController as vm">
  <!-- ... -->
</div>
```

Or instead it can be used in the routing like:

```javascript
$routeProvider
  .when('/', {
    templateUrl: 'some-template.html',
    controller : 'MyController as vm'
  })
  // ...
  ;
```


## Links
* [Understanding Controllers](https://docs.angularjs.org/guide/controller) (docs.angularjs.org)
* [AngularJS Controllers](https://www.w3schools.com/angular/angular_controllers.asp) (w3schools.com)
* [Controllers - John Papa's AngularJS Style Guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#controllers) (GitHub)
* [AngularJS Controllers](http://bguiz.github.io/js-standards/angularjs/controllers/) (bguiz.github.io)
* [AngularJS - A Better Way to Implement a Base Controller](http://jasonwatmore.com/post/2014/03/25/angularjs-a-better-way-to-implement-a-base-controller) (jasonwatmore.com)