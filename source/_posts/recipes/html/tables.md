### HTML - Basics - Tables

#### Overview

Tables should be used to display data in two-dimensional lists.
Do not use tables to structure you web page.
 
This HTML:
``` html
<table>
  <tr>
    <td>Item 1</td>
    <td>Item 2</td>
    <td>Item 3</td>
  </tr>
  <tr>
    <td>Item 4</td>
    <td>Item 5</td>
    <td>Item 6</td>
  </tr>
</table>
```

produces that result:
```
  Item 1    Item 2    Item 3
  Item 4    Item 5    Item 6
```

#### Table data width and height without CSS

* To define the widths of cols without CSS, use the `width` attribute.
* If you use n cols (table data elements), you only to define only n-1
  element widths. The last width is automatically set.
* You only have to define the table datas of one row. The rest of the
  table will align to the widths.
* Of course you can set the height of tables with the height attribute,
  but try to avoid that.

Example:
``` html
<table>
  <tr>
    <td width="25%">Item 1</td>
    <td width="50%">Item 2</td>
    <td>Item 3</td>
  </tr>
  <tr>
    <td>Item 4</td>
    <td>Item 5</td>
    <td>Item 6</td>
  </tr>
</table>
```

#### Table head, body and foot

You can specify the head, the foot and the body of a table.
``` html
<table>
    <thead>
        <tr>
          <th>head</th>
        </tr>
    </thead>
    <tfoot>
        <tr>
          <td>foot</td>
        </tr>
    </tfoot>
    <tbody>
        <tr>
          <td>body</td>
        </tr>
    </tbody>
</table>
```

#### Best Practices

* _Do_ use CSS to style the tables. Avoid design attributes.
* _Do_ use tables only for spreadsheet data, not for web page design.
* _Don't_ use col groups. Design widths with CSS.

#### Legend and Links

Legend:
* tr = table row
* th = table heading
* td = table data
* thead = table head
* tbody = table body
* tbody = table body

Links:
[w3schools.com](http://www.w3schools.com/tags/tag_table.asp),
[WikiPedia](https://en.wikipedia.org/wiki/HTML_element#table_tag),
[selfhtml.org](https://wiki.selfhtml.org/wiki/Table),
[w3c.org](https://www.w3.org/TR/html5/tabular-data.html)