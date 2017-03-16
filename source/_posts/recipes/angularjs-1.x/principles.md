---
title: AngularJS 1.x Principles
date: 2017-03-15 17:23:00
layout: post
category:
- Recipes
- AngularJS 1.x
---


## Dependency Injection

**Dependency Injection (DI)** is a software design pattern
that deals with how components get hold of their dependencies.

In Angular, dependencies are items (services, values, filters etc.)
encapsulated in modules, either the same or another one:

* After adding an item to a module, every other item can inject
  that item.
* After adding module A to another module B, the items of module A
  can be injected into items of module B.

Example of using dependency injection:
```javascript
// via "Inline Implicit Annotation":
angular.module('myModule')
    .controller('MyController', function($scope, SomeService) {
  // ...
});

// via "Inline Array Annotation" (to protect against minification):
angular.module('myModule').controller('MyController',
    ['$scope', 'SomeService', function($scope, SomeService) {
  // ...
}]);

// via "$inject Property Annotation":
var MyController = function($scope, SomeService) {
  // ...
}
MyController.$inject = ['$scope', 'SomeService'];
angular.module('myModule').controller('MyController', MyController);

// by using the "$injector" injection:
var MyController = function($injector) {
  var $scope      = $injector.get('$scope');
  var SomeService = $injector.get('SomeService');
  // ...
}
MyController.$inject = ['$injector'];
angular.module('myModule').controller('MyController', MyController);
```

_Note:_ the `$injector` can be helpful if you face
circular dependency injections. By injecting the
dependencies in item functions, you can avoid the
endless loops.


### Strict Dependency Injection

You can add an `ng-strict-di` directive on
the same element as `ng-app` to opt into strict DI mode:

```html
<!doctype html>
<html ng-app="myApp" ng-strict-di>
<body>
  I can add: {{ 1 + 2 }}.
  <script src="angular.js"></script>
</body>
</html>
```

Strict mode throws an error whenever a
service tries to use implicit annotations.
If you're using manual bootstrapping,
you can also use strict Dependency Injection by providing
`strictDi: true` in the optional config argument:

```javascript
angular.bootstrap(document, ['myApp'], {
  strictDi: true
});
```


### Links
* [Dependency Injection](https://docs.angularjs.org/guide/di) (docs.angularjs.org)


## Two-Way Data Binding

The **(Two-Way) Data Binding** represents the interaction between
the model and the view.
To remember, the model is nothing but
data and the view is the compiled template.
Whenever the model
changes, the view is updated, and whenever the view changes,
the model is updated, hence _Two-Way_.
You can think of the view as simply an instant projection of
the model.

This behavior is realized by the so called **`$digest` Loop**


### Links
* [Data Binding](https://docs.angularjs.org/guide/databinding) (docs.angularjs.org)


## The `$digest` Loop

Angular's **`$digest` Loop** is the pendant to JavaScript's
Event Loop:
Every UI-Element in a scope, a `$watch`er is
added to a watch list.
And every time a model variable in a scope changes,
Angular runs the Digest Loop to check whether another
model variable has to be updated accordingly.

The check for changes, Angular uses a pattern called
**Dirty Checking**.
Dirty checking means checking for a value that has changed.
If this leads to an update of another value, the loop does
that. Then the loop dirty checks again, whether the change
of the updated value leads to another change, and so on.

Usually, after dirty checking 10 times, the digest loop
aborts throwing an exception.


### Links
* [The Digest Loop and $apply](https://www.ng-book.com/p/The-Digest-Loop-and-apply/) (ng-book.com)
* [Understanding Angular’s $apply() and $digest()](https://www.sitepoint.com/understanding-angulars-apply-digest/) (sitepoint.com)
* [Understanding the Digest Cycle](https://www.thinkful.com/projects/understanding-the-digest-cycle-528/) (thinkful.com)
* [Notes On AngularJS Scope Life-Cycle](http://onehungrymind.com/notes-on-angularjs-scope-life-cycle/) (onehungrymind.com)


## MVVM Pattern

The **Model-View-ViewModel Pattern (MVVM)** is a special
version of the MVC Pattern. The ViewModel in the MVVM
is the idea of self-organizing two-way bound data,
which makes the view and the model completely independent
from the controller.

The pattern does not imply that there is no controller
at all, it just wants the model data independent. Since
the model data is usually stored in a service, the
controller just connects this very data with the
view and the model. It does not store any data, it does
not manipulate any data, nor does it control any data.

Next to connecting the ModelView with services (and
maybe other sources),
the controller has the job the react on events from the
view to fire additional view events if necessary, and to
encapsulate the ViewModel within a limited scope.


### Links
* [Angular JS Tutorial – MVC and MVVM Design Patterns](https://dzone.com/articles/angularjs-tutorial-lesson-1) (dzone.com)
* [Model-View-ViewModel (MVVM) Explained](https://www.codeproject.com/Articles/100175/Model-View-ViewModel-MVVM-Explained) (codeproject.com)


## Interpolation

**Interpolation** is a process happening during the compilation. It is
nothing but replacing the variable names in expressions by their
model representation.

For example, a template part like
```html
<a ng-href="img/{{vm.objUser.strUsername}}.jpg">
  Hello {{vm.objUser.strUsername}}!
  (Email: {{vm.objUser.strEmail}})
</a>
```

with a model representation like
```javascript
vm.objUser = {
  strUsername: 'jondoe',
  strEmail   : 'jondoe@email.web'
};
```

will be interpolated to
```html
<a ng-href="img/jondoe.jpg">
  Hello jondoe!
  (Email: jondoe@email.web)
</a>
```

Additionally, the compiler adds watchers to the
interpolation to update the values whenever the
model changes.


### Links

* [Interpolation and data-binding](https://docs.angularjs.org/guide/interpolation) (docs.angularjs.org)


## Notes
* considered Angular version: v1.6.3