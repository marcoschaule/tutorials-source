---
title: AngularJS 1.x Features
date: 2017-03-13 19:12:00
layout: post
category:
- Recipes
- AngularJS 1.x
---

## Overview

The main features of AngularJS 1.x are:

<div class="row">
  <div class="col-md-4">
    <ul>
      <li><a title="Template" href="recipes/angularjs-1.x/angular-1.x-features.html#Template">Template</a></li>
      <li><a title="Expressions" href="recipes/angularjs-1.x/angular-1.x-features.html#Expressions">Expressions</a></li>
      <li><a title="Model" href="recipes/angularjs-1.x/angular-1.x-features.html#Model">Model</a></li>
      <li><a title="View" href="recipes/angularjs-1.x/angular-1.x-features.html#View">View</a></li>
      <li><a title="Scope" href="recipes/angularjs-1.x/angular-1.x-features.html#Scope">Scope</a></li>
    </ul>
  </div>
  <div class="col-md-4">
    <ul>
      <li><a title="Module" href="recipes/angularjs-1.x/angular-1.x-features.html#Module">Module</a></li>
      <li><a title="Controller" href="recipes/angularjs-1.x/angular-1.x-features.html#Controller">Controller</a></li>
      <li><a title="Service" href="recipes/angularjs-1.x/angular-1.x-features.html#Service">Service</a></li>
      <li><a title="Filter" href="recipes/angularjs-1.x/angular-1.x-features.html#Filter">Filter</a></li>
      <li><a title="Directive" href="recipes/angularjs-1.x/angular-1.x-features.html#Directive">Directive</a></li>
    </ul>
  </div>
  <div class="col-md-4">
    <ul>
      <li><a title="Component" href="recipes/angularjs-1.x/angular-1.x-features.html#Component">Component</a></li>
      <li><a title="Compiler" href="recipes/angularjs-1.x/angular-1.x-features.html#Compiler">Compiler</a></li>
      <li><a title="Linker" href="recipes/angularjs-1.x/angular-1.x-features.html#Linker">Linker</a></li>
      <li><a title="Injector" href="recipes/angularjs-1.x/angular-1.x-features.html#Injector">Injector</a></li>
    </ul>
  </div>
</div>


## Template

A template is an HTML file with additional markup.
For example:

```html
<script type="text/ng-template" id="someTemplate.html">
  <div ng-if="someVar === true">
    {{someOtherVar}}
  </div>
</script>
```


## Expressions

An expression are JavaScript-like code snippets to access
scope variables and functions within a template.
For example:

```html
<!-- "someValue | someFilter" is a content expression -->
<div>{{ someValue | someFilter }}</div>

<!-- "someThing === true" is an attribute expression -->
<div ng-if="someThing === true"></div>

<!-- "someFunction()" is an attribute expression -->
<button ng-click="someFunction()"></button>
```


## Model

The model is an object that consists of the data
to be displayed in the view and to be interacted
by the user. For example:

```javascript
var objUser = {
  strUsername: 'JonDoe',
  strEmail: 'jondoe@email.web'
};
```

## View

A view is a DOM part that represents the template
combined with the model to create the result the
user sees on screen.

<iframe
  class="runnable-example-frame"
  src="https://docs.angularjs.org/examples/example-guide-concepts-3/index.html"
  name="example-guide-concepts-3">
</iframe>


## Module

A module is a function that represents a container
to encapsulate different parts of the application.
For example:

```javascript
// creating a module:
angular.module('myModule', [ /* dependencies */ ]);

// accessing a module (to add features):
angular.module('myModule')/* add features */;
```


## Controller

A controller is a function to interact with the
model and the view.
For example:

```javascript
angular.module('myModule').controller('MyController', function() {
  var vm = this;
  
  // some controller properties:
  vm.objUser = {
    strUsername: 'JonDoe',
    strEmail: 'jondoe@email.web'
  };
  
  // some controller methods:
  vm.someFunction = function() {
    // do something
  };
});
```

Functions can be called in the template like:
```html
<div ng-controller="MyController as vm">
  <button ng-click="vm.someFunction()">Do Something</button>
</div>
```

_Note:_ Please be aware of the `<ControllerName> as <ViewModelName>`
instantiation. This is necessary, if you use `var vm = this` within
the controller.
The variable `vm` stands for **View Model** and
represents the controller instance itself. It lives on the
scope variable `$scope.vm === vm`.


## Scope

The scope is the influence area of a controller, in which
model data can be changed and controller functions can be called.
 
For example somwhere in the controller `MyController`:
```javascript
vm.objUser = {
  strUsername: 'JonDoe',
  strEmail: 'jondoe@email.web'
};
```

and in the template:
```html
<!-- here the scope of "MyController" starts -->
<div ng-controller="MyController as vm">
  <div>
    <span>Username:</span>
    <span>{{ vm.objUser.strUsername }}</span>
  </div>
  <div>
    <span>Email:</span>
    <span>{{ vm.objUser.strEmail }}</span>
  </div>
</div>
<!-- here the scope of "MyController" ends -->
```


## Service

A service is a function that represents a
container for stateful (session) data and
for non-view interactions.
For example:

```javascript
angular.module('myModule').factory('MyService', function($http) {
  var service = {};
  
  // some service properties:
  service.objSomeProperty = {
    someProperty: 'value'
  };
  
  // some service methods:
  service.someFunction = function() {
    $http.get('/some/route').then(/* handle response or error */);
  };
  
  return service;
});
```

Built-in services are for example:  
`$scope`, `$rootScope`, `$location`, `$q`, `$timeout`, `$window`, `$document`,
`$http`, `$httpBackend` etc.


## Filter

A filter is a function to format values
of expressions.

```html
<ul>
  <!-- "currency" is a build-in filter -->
  <li ng-repeat="objPayment in arrPayments">
    {{ objPayment.numAmount | currency }}
  </li>
</ul>
<ul>
  <!-- "someFilter" is a custom filter -->
  <li ng-repeat="objUser in arrUsers">
    {{ objUser.strUsername | someFilter }}
  </li>
</ul>
```

Built-in filters are:  
`currency`, `date`, `filter`, `json`, `limitTo`,
`lowercase`, `number`, `orderBy`, `uppercase`


## Directive

A directive is a function that extends HTML
with custom elements and attributes, which
should be used for DOM manipulations.

For example:
```html
<ul>
  <!-- "ng-repeat" is a build-in directive -->
  <li ng-repeat="objUser in arrUsers">
    <!-- "ng-model" is a build-in directive, -->
    <!-- "<user />" is a custom directive -->
    <user ng-model="objUser" />
  </li>
</ul>
```

Built-in directives are for example:  
`ng-app`, `ng-controller`, `ng-if`, `ng-show`, `ng-hide`,
`ng-bind`, `ng-bind-html`, `ng-model`, `ng-click`, `ng-blur`,
but also `textarea`, `select` etc. 

## Component

A component is an extended representation of
a controller, template and a directive combined,
but it should not be used for DOM manipulations.
For example:

```javascript
// the component's controller
angular.module('myModule').controller('SomeController', function() {
  // do some controller setup
});

// the component itself
angular.module('myModule').component('myComponent', {
  templateUrl: 'someTemplate.html', // the component's template
  controller: SomeController, // the controller
  bindings: {
    someBinding1: '<', // bind a value one-way in
    someBinding2: '>', // bind a value one-way out
    someBinding3: '=', // bind a value two-way
    someBinding4: '@', // bind a value by copying it
    someBinding5: '&'  // bind an executable expression
  },
  // ...
});
```


## Compiler

The compiler is an Angular function for parsing the template
and for instantiating template directives and expressions.
The compiler returns the link function.
For example:

```javascript
var numAmount    = 100;
var isAmountOkay = true;
var strHTML      = '<div ng-if="isAmountOkay">{{ numAmount | currency }}</div>';
var linkFunc     = $compile(strHTML);
```


## Linker

The linker is an Angular function for linking the compiled
template with the scope model data together to create the view.
For example:

```javascript
var numAmount    = 100;
var isAmountOkay = true;
var objScopeData = { isAmountOkay: isAmountOkay, numAmount: numAmount };
var strHTML      = '<div ng-if="isAmountOkay">{{ numAmount | currency }}</div>';
var linkFunc     = $compile(strHTML);
var elForView    = linkFunc(objScopeData);

// add the element to the scope
getElementById('someID').appendChild(elForView);
```


## Injector

The Injector is a function with the job to inject dependencies where-ever
it is used in the code. For controllers, services, directives etc. the
constructor function takes over that job.
For example:

```javascript
// injection in the controller:
angular.module('myModule').controller('MyController', function(SomeService) {
  // SomeService is now injected
});

// somewhere in the code:
var SomeService = $injector.get('SomeService');
```


## Links
* [AngularJS - Conceptual Overview](https://docs.angularjs.org/guide/concepts) (docs.angularjs.org)
* [5 Awesome AngularJS Features](https://code.tutsplus.com/tutorials/5-awesome-angularjs-features--net-25651) (code.tutsplus.com)


## Notes
* Used Angular version: v1.6.3