---
title: AngularJS 1.x Directives
date: 2017-03-17 11:53:00
layout: post
category:
- Recipes
- AngularJS 1.x
---


## Overview

An Angular **directive** is a class/function that
* **teach HTML new tricks**,
* **are used in HTML** as elements, attributes, class names or comments,
* should be used to **manipulate the DOM**,
* should be used to **handle events and watchers**
* etc.

Here an example of a directive definition:
```javascript
angular
  .module('myModule')
  .directive('myDirective', myDirective);
  // "myDirective" in name = "my-directive" in HTML

function myDirective(SomeService) {
  var directive;
  
  // ***
  
  // define the directive definition object
  directive = {};
  
  // directive's template with scope vars if necessary
  directive.template = '<div ng-if="objArg1.isTrue">{{ strArg2 }}</div>';
  // or directive's template URL, which contains the template
  directive.templateUrl = '/some/path/to/some-template.html';

  // directive's scope (can be inherited, isolated or null)
  directive.scope = {
    objArg1: '=arg1', // two-way variable binding of arg1    
    strArg2: '@arg2', // copy value of arg2
    expArg3: '&arg3', // reference to expression in arg3
  };
  
  // directive's controller if necessary
  directive.controller = 'MyController';
  
  // directive replaced?
  // replace = replacing the directive element
  // completely by the the template
  directive.replace = true;
    
  // directive transcluded?
  // transclution = copying the inner HTML
  // of the directive element into the template
  directive.transclude = true;
  
  // directive's target striction
  // "A" = attribute of an element like '<div my-directive=""></div>'
  // "E" = element itself like '<my-directive some-other-attribues=""></my-directive>'
  // "C" = class name of element like '<div class="my-directive other-classes"'></div>'
  // "M" = comment before element like '<!-- my-directive --><div></div>'
  directive.restrict = 'A'; // also combinations are possible like 'AEC' 
  
  // directive's linker function
  directive.link = someLinkFunction;
  
  // directive's compiler function
  directive.compile = someCompilerFunction;
  
  // ... and others
  // ***
  
  // directive's methods
  function someLinkFunction(scope, elem, attrs) { /* link something */ }
  function someCompilerFunction(objTemplateElem, objTemplateAttrs) { /* cmopile something */ }
  
  // directive's helpers
  function _someHelperFunction1() { /* help with something */ }
  function _someHelperFunction2() { /* help with something */ }
  
  // ***
  
  return directive;
}

// property injection
myDirective.$inject = ['SomeService'];
```

After defining a directive like this, it can be used like this:
```html
<my-directive
  arg1="{ some: 'object' }"
  arg2="'someString'"
  arg3="someExpressionThatCallsAFunction()"
</my-directive>
```

or this:
```html
<div
  my-directive
  arg1="{ some: 'object' }"
  arg2="'someString'"
  arg3="someExpressionThatCallsAFunction()"
</div>
```

or this:
```html
<div
  class="my-directive"
  arg1="{ some: 'object' }"
  arg2="'someString'"
  arg3="someExpressionThatCallsAFunction()"
</div>
```

or this:
```html
<!-- my-directive -->
<div
  arg1="{ some: 'object' }"
  arg2="'someString'"
  arg3="someExpressionThatCallsAFunction()"
</div>
```


## Built-in directives

Built-in directives are for instance:
* `ng-repeat="<expression>"` to repeat the element it is used with
* `ng-click="<expression>"` to execute the given expression when element is clicked 
* `ng-if="<expression>"` to parse the inner HTML of the element if the expression is true
* `ng-show="<expression>"` to show the inner HTML of the element if the expression is true
* `ng-hide="<expression>"` to hide the inner HTML of the element if the expression is true
* `ng-class="{ someClass: someBool }"` to enable a class if `someBool` is true
* and many more ...


## Links
* [Filters](https://docs.angularjs.org/guide/directive) (docs.angularjs.org)
* [AngularJS Services](https://www.w3schools.com/angular/angular_directives.asp) (w3schools.com)
* [Services - John Papa's AngularJS Style Guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#directives) (GitHub)
