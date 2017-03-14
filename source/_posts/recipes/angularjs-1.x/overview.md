---
title: Overview
date: 2017-03-13 19:12:00
layout: post
category:
- Recipes
- AngularJS 1.x
---


## AngularJS 1.x principles

* Dependency Injection
* Two-Way Data Binding
* MVVM Pattern

## AngularJS 1.x features

* **Template**:  
  A template is an HTML file with additional markup like  
  `<div ng-if="someVar === true"></div>`.

* **Model**:  
  The model is an object that consists of the data to be displayed in the view and to be interacted by the user.

* **View**:  
  A view is a DOM part that represents the template combined with the model to create the result the user sees on screen.

* **Scope**:  
  The scope object that represents the context where the model is stored for other features to access the model.

* **Module**:  
  A module is a function that represents a container to encapsulate different parts of the application.
  
* **Controller**:  
  A controller is a function to interact with the model
  and the view.

* **Services**:  
  A service is a function that represents a container for
  stateful (session) data and for non-view interactions.
  Services are Singletons.

* **Filters**:  
  A filter is a function to format values of expressions.

* **Directives**:  
  A directive is a function that extends HTML with custom elements and attributes, which should be used for DOM manipulations.

* **Component**:  
  A component is an extended representation of a controller and a directive combined, but it shouldn't be used for DOM manipulations.

* Expressions
* Compiler
* Injector
* Router