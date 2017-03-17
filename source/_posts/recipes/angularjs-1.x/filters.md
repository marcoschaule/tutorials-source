---
title: AngularJS 1.x Filters
date: 2017-03-17 11:10:00
layout: post
category:
- Recipes
- AngularJS 1.x
---


## Overview

An Angular **filter** is a function that
* **can be used in expressions** to transform the value of the expression,
* **can be used in items** via the `$filter` service to transform values, and
* **can be chained and extended** with attributes.

Here an example of a filter definition:
```javascript
angular
  .module('myModule')
  .controller('myFilter', myFilter);

function myFilter(SomeService) {
  var filter;

  // define the filter function to be returned
  filter = function(anyInput, anyArgument) {
    var anyOutput = anyInput;
    // do something with "strInput"
    if (anyArgument) {
      // do something with "anyArgument"
    }
    return anyOutput;
  };
  
  return filter;
}

// property injection
myFilter.$inject = ['SomeService'];
```

After defining a filter like this, it can be used like:
```html
<div>{{ someExpression | myFilter }}</div>
```

Using an argument with a filter can be done like:
```html
<div>{{ someExpression | myFilter:anyArgument }}</div>
```

Multiple filters can be chained:
```html
<div>{{ someExpression | someFilter1 | someFilter2 }}</div>
```

Multiple arguments can be used like:
```html
<div>{{ someExpression | someFilter1 | someFilter2:arg1:arg2:arg3 }}</div>
```


## Built-in filters

Built-in filters are for instance:
* `currency` to transform a number to be a valid currency string
* `date` to transform a number/date to be a valid date
* `filter` to filter by text
* `json` to transform an object to JSON
* `limitTo` to limit numbers up and down
* `lowercase` to transform text to pure lowercase text
* `number` to transform a string to a valid number
* `orderBy` to order a list by a specific field
* `uppercase` to transform text to pure uppercase text


## Links
* [Filters](https://docs.angularjs.org/guide/filter) (docs.angularjs.org)
* [AngularJS Services](https://www.w3schools.com/angular/angular_filters.asp) (w3schools.com)
* [Services - John Papa's AngularJS Style Guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#filters) (GitHub)
