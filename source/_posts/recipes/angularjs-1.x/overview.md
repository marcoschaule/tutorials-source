---
title: Overview
date: 2017-03-13 19:12:00
layout: post
category:
- Recipes
- AngularJS 1.x
---

## AngularJS Features

The main features of AngularJS 1.x are:

<div class="row">
  <div class="col-md-4">
    <ul>
      <li><a title="Template" href="recipes/angularjs-1.x/overview.html#Template">Template</a></li>
      <li><a title="Expressions" href="recipes/angularjs-1.x/overview.html#Expressions">Expressions</a></li>
      <li><a title="Model" href="recipes/angularjs-1.x/overview.html#Model">Model</a></li>
      <li><a title="View" href="recipes/angularjs-1.x/overview.html#View">View</a></li>
      <li><a title="Scope" href="recipes/angularjs-1.x/overview.html#Scope">Scope</a></li>
    </ul>
  </div>
  <div class="col-md-4">
    <ul>
      <li><a title="Module" href="recipes/angularjs-1.x/overview.html#Module">Module</a></li>
      <li><a title="Controller" href="recipes/angularjs-1.x/overview.html#Controller">Controller</a></li>
      <li><a title="Service" href="recipes/angularjs-1.x/overview.html#Service">Service</a></li>
      <li><a title="Filter" href="recipes/angularjs-1.x/overview.html#Filter">Filter</a></li>
      <li><a title="Directive" href="recipes/angularjs-1.x/overview.html#Directive">Directive</a></li>
    </ul>
  </div>
  <div class="col-md-4">
    <ul>
      <li><a title="Component" href="recipes/angularjs-1.x/overview.html#Component">Component</a></li>
      <li><a title="Compiler" href="recipes/angularjs-1.x/overview.html#Compiler">Compiler</a></li>
      <li><a title="Linker" href="recipes/angularjs-1.x/overview.html#Linker">Linker</a></li>
      <li><a title="Injector" href="recipes/angularjs-1.x/overview.html#Injector">Injector</a></li>
    </ul>
  </div>
</div>


### Template

A template is an HTML file with additional markup.
For example:

```html
<body>
  <div ng-if="someVar === true">
    {{someOtherVar}}
  </div>
</body>
```


### Expressions

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


### Model

The model is an object that consists of the data
to be displayed in the view and to be interacted
by the user. For example:

```javascript
var objUser = {
  strUsername: 'JonDoe',
  strEmail: 'jondoe@email.web'
};
```

### View

A view is a DOM part that represents the template
combined with the model to create the result the
user sees on screen.

<iframe
  class="runnable-example-frame"
  src="https://docs.angularjs.org/examples/example-guide-concepts-3/index.html"
  name="example-guide-concepts-3">
</iframe>


### Scope

A view is a DOM part that represents the template
combined with the model to create the result the
user sees on screen.

For example in the controller:
```javascript
vm.objUser = {
  strUsername: 'JonDoe',
  strEmail: 'jondoe@email.web'
};
```

and in the template:
```html
<div>
  <span>Username:</span>
  <span>{{ vm.objUser.strUsername }}</span>
</div>
<div>
  <span>Email:</span>
  <span>{{ vm.objUser.strEmail }}</span>
</div>
```

The variable `vm` stands for **View Model** and
represents the controller itself. It lives on the
scope variable `$scope.vm === vm`.


### Module

A module is a function that represents a container
to encapsulate different parts of the application.
For example:

```javascript
// creating a module:
angular.module('myModule', [ /* dependencies */ ]);

// accessing a module (to add features):
angular.module('myModule')/* add features */;
```


### Controller

A controller is a function to interact with the
model and the view. For example:
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
<div>
  <button ng-click="vm.someFunction()">Do Something</button>
</div>
```


### Service

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

Build-in services are for example:  
`$scope`, `$rootScope`, `$location`, `$q`, `$timeout`, `$window`, `$document`,
`$http`, `$httpBackend` etc.


### Filter

A filter is a function to format values
of expressions.

```html
<ul>
  <!-- "currency" is a build-in filter -->
  <li ng-repeat="objPayment in arrPayments">
    {{ objPayment.numAmound | currency }}
  </li>
</ul>
<ul>
  <!-- "someFilter" is a custom filter -->
  <li ng-repeat="objUser in arrUsers">
    {{ objUser.strUsername | someFilter }}
  </li>
</ul>
```

Build-in filters are:  
`currency`, `date`, `filter`, `json`, `limitTo`,
`lowercase`, `number`, `orderBy`, `uppercase`


### Directive

A directive is a function that extends HTML
with custom elements and attributes, which
should be used for DOM manipulations.

Example of using build-in directives in the template:
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

Build-in directives are for example:  
`ng-app`, `ng-controller`, `ng-if`, `ng-show`, `ng-hide`,
`ng-bind`, `ng-bind-html`, `ng-model`, `ng-click`, `ng-blur`,
but also `textarea`, `select` etc. 

### Component

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


### Compiler

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


### Linker

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


### Injector

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


## AngularJS principles

* MVVM Pattern
* Dependency Injection
* Two-Way Data Binding
* Interpolation

