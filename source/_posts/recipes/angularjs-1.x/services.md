---
title: AngularJS 1.x Services
date: 2017-03-16 15:40:00
layout: post
category:
- Recipes
- AngularJS 1.x
---


## Overview

An Angular **service** is a class/function that
* **contains variables and functions** to handle non-view
  related interactions (like HTTP calls),
* **are singletons**, meaning no matter how often they are
  injected, it is always the exact same instance, and
* **stores data in memory** as long as the page is not reloaded,
  which they should be used for instead of controllers,

Here an example of a service definition:
```javascript
angular
  .module('myModule')
  .factory('MyService', MyService);

function MyService(SomeOtherDependency) {
  var service = {};

  // some local variables that are not exposed
  // to this service injecting items
  var _objSomeLocalObject = {};
  var _numSomeLocalNumber = 5;

  // bind exposed export variables to the service 
  // to use them in this service injecting items
  service.exports              = {};
  service.exports.someVar      = 'someValue';
  service.exports.someOtherVar = 'someOtherValue';
  service.exports.someThirdVar = SomeOtherDependency.exports.someThirdVar;

  // bind exposed export functions to the service 
  // to use them in this service injecting items
  service.doSomething     = doSomething;
  service.doSomethingElse = doSomethingElse;

  // define the service functions;
  // they are bound via hoisting
  function doSomething() { /* do something */ }
  function doSomethingElse() { /* do something else */ }

  // define helper functions that are
  // not exposed to the other items
  function _helpWithSomething() { /* help with something */ }
  function _helpWithSomethingElse() { /* help with something else */ }

  // return the service object in the factory pattern
  return service;
}

// property injection
MyService.$inject = ['SomeOtherDependency'];
```

After defining a Service like that, it can be injected like:

```javascript
angular
  .module('myModule')
  .controller('MyController', function(MyService) {
    
  });
```


## Built-in Services

Built-in services are for instance:
* `$http` for HTTP interaction
* `$filter` for filtering within the code
* `$window` as a wrapper for the `window` object
* `$document` as a wrapper for the `window.document` object
* `$rootScope` for accessing the root scope object
* `$scope` for accessing current controller's scope
* `$timeout` as a wrapper for the `setTimeout` function
* `$q` as a wrapper for the `Q`-Library for promise handling
* etc.


## Links
* [Services](https://docs.angularjs.org/guide/services) (docs.angularjs.org)
* [AngularJS Services](https://www.w3schools.com/angular/angular_services.asp) (w3schools.com)
* [Services - John Papa's AngularJS Style Guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#services) (GitHub)
* [Services in AngularJS simplified with examples](https://www.airpair.com/javascript/posts/services-in-angularjs-simplified-with-examples) (airpair.com)
* [AngularJS Service / Factory Tutorial with Example](http://viralpatel.net/blogs/angularjs-service-factory-tutorial/) (viralpatel.net)
