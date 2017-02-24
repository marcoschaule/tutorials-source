### HTML - Basics - Headings and paragraphs

#### Headings

* There are six headings HTML: `h1` to `h6`.
* They are block elements by default.
* The heading `h1` should be used only once per document.
  It is seen as the title of the document
* You can use other elements within a heading, even images,
  but don't expect search engines to understand them correctly.

Example:
``` html
<h1>Title of the document</h1>
<h2>Heading 2</h2>
...
<h6>Heading 6</h6>
```

Links:
[w3schools.com](http://www.w3schools.com/tags/tag_hn.asp),
[selfhtml.org](https://wiki.selfhtml.org/wiki/H1),
[WikiPedia](https://en.wikipedia.org/wiki/HTML_element#h1_tag),
[w3c.org](https://www.w3.org/TR/html5/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements)

#### Paragraphs

* Paragraphs `p` are areas of text.
* By default, they are block elements.
* Paragraphs create a carriage return when closed.
* You can force a linebreak with `br` within a paragraph
  without ending the `p` element.
* You can use other elements within a paragraph, but you
  should actually only use `span`s, `br`s, and text
  style items like `strong`, `em` etc.
  
Example:
``` html
<p>
  Qui primum illud sensit, reptatus de asino.
  <em>A iocus</em>
</p>
```

Links:
[w3schools.com](http://www.w3schools.com/tags/tag_p.asp),
[selfhtml.org](https://wiki.selfhtml.org/wiki/P),
[WikiPedia](https://en.wikipedia.org/wiki/HTML_element#p_tag),
[w3c.org](https://www.w3.org/TR/html5/grouping-content.html#the-p-element)

#### Best Practices

* _Do_ use headings for categorise your texts.
* _Do_ use paragraphs for text and text design elements only.
* _Don't_ use paragraphs for document structure.

#### Legend

* p = Paragraph
* h1 = heading 1 
* h2 = heading 2 
* h3 = heading 3 
* h4 = heading 4 
* h5 = heading 5 
* h6 = heading 6 