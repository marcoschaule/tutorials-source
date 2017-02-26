---
title: Forms
date: 2017-02-24 11:00:00
layout: post
category:
- recipes
- html
banner: html
---



## Form tag

* Forms are the containers of form elements and field sets.
* Forms can be represented by JavaScript frameworks.
* The `action` attribute points to a server script, which
  is executed by the form on submit.
* The `method` attribute, which can be `GET` or `POST`,
  defines whether the form values are send to the executed
  script via the URL (`GET`) or in the request body (`POST`).
* The `name` attribute sets the name of the form. This makes
  it possible to use multiple forms with the same variable
  names if necessary. The name is used by the processing
  server script.
* The attribute `novalidate` exists since HTML5. It is used
  to deactivate the browser's validation of the form's elements.
  This is useful if you implement your own validation
  by using AngularJS for example.

``` html
<form name="..." action="..." method="GET|POST" novalidate>
  ...
</form>
```

Links:
* [w3schools](http://www.w3schools.com/tags/tag_form.asp)
* [selfhtml.org](https://wiki.selfhtml.org/wiki/Form)
* [w3c.org](https://www.w3.org/TR/html5/forms.html#the-form-element)

## Input fields

* There are plenty of input fields.
* Some of them are available since early HTML, some
  of them exist since HTML5.
* The `type` attribute defines the type of the input.
  Depending of the type, the visual representation
  of the input can change. Here are some of the most
  important types: `text`, `password`, `checkbox`,
  `radio`, `email`, `number`, `time`, `date`, `file`
  and `hidden`.
* The `name` attribute defines the variable name of
  the variable created for the script, the form data
  is send to.
* The `placeholder` attribute defines a default text
  for empty inputs. If on submit the field is still
  empty, the placeholder is _not_ used as the value.
* The `type="hidden"` input field can be used to add
  'hidden' variables to the form, the user cannot change.
  Anyway, the values can be found in the source.
* The `type="file"` input generates an additional button
  for the user to choose the file. It can become very
  complicated.
* Each input can have validation attributes, that are for
  example used by the browser to validate the `form` (if
  `novalidate` is not in the `form` tag). The validation
  attributes are: `maxlength`, `minlength`, `size`,
  `readonly`, `required`, `multiple`, `pattern`,
  `min`, `max`, `step`, `list`. Most of them are
  self-explanatory. Check the links to find further
  information.

List of form input fields:
``` html
// simple text input
<input type="text" name="..." value="..." />
 
// password input
<input type="password" name="..." value="..." />
 
// checkbox input
<input type="checkbox" name="..." value="..." />
 
// hidden input
<input type="hidden" name="..." value="..." />
 
// input for file upload
<input type="file" name="..." size="..." accept="..." />
 
// button input (old version of button)
<input type="button" name="..." />
 
// submit button input to submit a form (is also a button);
// the value defines the label text
<input type="submit" name="..." value="..." />
 
// reset button input to reset a form (is also a button);
// the value defines the label text
<input type="reset" name="..." value="..." />
 
// reset image button input to submit a form (an image button)
<input type="image" name="..." />
 
// number text input (HTML5)
<input type="number" name="..." value="..." />
 
// email text input (HTML5)
<input type="email" name="..." value="..." />
 
// time text input (HTML5)
<input type="time" name="..." value="..." />
 
// date text input (HTML5)
<input type="date" name="..." value="..." />
 
and some more ...
```

Besides the checkbox and radio inputs, the other inputs are
either text fields or buttons.

Links:
* [w3schools.com](http://www.w3schools.com/tags/tag_input.asp)
* [selfhtml.org](https://wiki.selfhtml.org/wiki/Input)
* [w3c.org](https://www.w3.org/TR/html5/forms.html#the-input-element)

## Buttons

* Besides the input buttons, you can create
  modern buttons with the `button` tag.
* Here a list of the most important (optional) `button` attributes:
  * `disabled` or `disabled="disabled"`
  * `name` defines a variable name the button adds to the form
  * `value` defines an initial value the button adds to the form
  * etc.
* There are more HTML5 attributes, but they aren't used quite often
  since on single page applications, JavaScript takes the control.

Examples:
```  html
// old style button with input field
// (the value field defines the label text)
<input type="button" name="..." value="..." />
 
// old style input button to submit a form
// (the value field defines the label text)
<input type="submit" name="..." value="..." />
 
// old style input button to reset a form
// (the value field defines the label text)
<input type="reset" name="..." value="..." />
 
// modern button
// (the type is optional here)
<button type="button" name="..." value="...">...</button>
```

Links:
* [w3schools.com](http://www.w3schools.com/tags/tag_button.asp)
* [selfhtml.org](https://wiki.selfhtml.org/wiki/Button)
* [w3c.org](https://www.w3.org/TR/html5/forms.html#the-button-element)

## Textarea

* The `textarea` as - as the name suggests - an area for text.
* The 'value' of the text area is the text within the area itself.
* Text areas 'store' text as unformatted. To use a format,
  you have to add the `editable` attribute to a `div`.
* The text area has plenty of attributes like `cols`, `rows`,
  `readonly`, `disabled` etc., but not many of them are useful.

Example:
``` html
<textarea name="...">...</textarea>
```

Links:
* [w3schools.com](http://www.w3schools.com/tags/tag_textarea.asp)
* [selfhtml.org](https://wiki.selfhtml.org/wiki/Button)
* [w3c.org](https://www.w3.org/TR/html5/forms.html#the-button-element)


## Labels

* Labels are captions for form fields.
* The label's `for` attribute is related to the form control's
  `id` attribute. Hence, a label can be related to only one control.
* Click actions with labels activate the related form element.
  (If you for example click on the label on an input field, the
  input field gets the cursor and is on focus. If you click on
  the label of a checkbox, the checkbox itself is toggled.)
* You can put the label above the form field, below the form field
  or you can wrap the form field by the label. To define the
  position of both, you should use CSS anyway.
  
Example:
``` html
// label above the input:
<label for="some-id">Some Text</label>
<input id="some-id" type="text" />
 
// label below the input:
<input id="some-id" type="checkbox" />
<label for="some-id">Some Text</label>
 
// label wrapping the input:
// (The span is actually not necessary, but makes it more readable.)
<label for="some-id">
  <span>Some Text</span>
  <input id="some-id" type="text" />
</label>
```

Links:
* [w3schools.com](http://www.w3schools.com/tags/tag_label.asp)
* [selfhtml.org](https://wiki.selfhtml.org/wiki/Label#label)
* [w3c.org](https://www.w3.org/TR/html5/forms.html#the-label-element)

## Field sets and legend

* Field sets collect form elements. They are used to group input and label
  or groups of inputs.
* You can design the presentation of form elements by using field sets.
* The `legend` tag adds a label to a field set. It is optional.

Example of grouping input and label:
``` html
<fieldset>
  <label for="some-id-1">Some Text 1</label>
  <input id="some-id-1" type="text" />
</fieldset>
<fieldset>
  <label for="some-id-2">Some Text 2</label>
  <input id="some-id-2" type="text" />
</fieldset>
```

Example of grouping inputs (with legend):
``` html
<fieldset>
  <legend>Heading of the group</legend>
  <label for="some-id-1">
    <span>Some Text 1</span>
    <input id="some-id-1" type="text" />
  </label>
  <label for="some-id-2">
    <span>Some Text 2</span>
    <input id="some-id-2" type="text" />
  </label>
</fieldset>
```

Links:
* [w3schools.com](http://www.w3schools.com/tags/tag_fieldset.asp)
* [selfhtml.org](https://wiki.selfhtml.org/wiki/Fieldset)
* [w3c.org](https://www.w3.org/TR/html5/forms.html#the-fieldset-element)

## Selects and options

* `select` elements (also known as drop downs if number of lines is 1)
  are fields from which you can select one (or more) values
  for a given variable name.
* Each value is represented by an `option` element within the `select`
  element.
* For multiple selections, one can press the CTRL/Command when clicking
  on the option. To do that, use the attribute `multiple` (without any
  value).
* Options can be grouped with `optgroup`, which gives them a label
  for the group, which is not selectable.

Example simple select:
``` html
<select name="someVariableName">
  <option value="choice1">choice 1</option>
  <option value="choice2">choice 2</option>
  <option value="choice3">choice 3</option>
</select>
```

Example (with label and option group):
``` html
<label>First name:
  <select name="names" size="6">
    <optgroup label="names starting with A">
      <option label="Anna">Anna</option>
      <option label="Achim">Achim</option>
      <option label="August">August</option>
    </optgroup>
    <optgroup label="names starting with B">
      <option label="Berta">Berta</option>
      <option label="Barbara">Barbara</option>
      <option label="Bernhard">Bernhard</option>
    </optgroup>
    <optgroup label="names starting with C">
      <option label="Caesar">Caesar</option>
      <option label="Christiane">Christiane</option>
      <option label="Christian">Christian</option>
    </optgroup>
  </select>
</label>
```
  

## Other form elements

There are other form elements
(like `datalist`, `keygen`, `output`, `progress`, `meter`)
won't be covered here.

Links:
* [w3schools.com](http://www.w3schools.com/html/html_forms.asp)
* [selfhtml.org](https://wiki.selfhtml.org/wiki/HTML/Formulare)
* [w3c.org](https://www.w3.org/TR/html5/forms.html)
