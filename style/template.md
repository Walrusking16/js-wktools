# Template

Anything wrapped in two curly brackets, is replaced by an html attribute of the same name.

In order to display any html you put inside of the new template you must put  somewhere in the template so it knows where to place it.

IE:  would look for an html attribute call author and replace it with the attribute data.

**JS**

```javascript
$("blog").template("<div class='blog'><h1>{{title}}</h1><h3>By: {{author}}</h3>{{content}}</div>");
```

**HTML**

```markup
<blog author="Walrusking" title="Main Title">
    Blog content here
</blog>
```

**Result**

```markup
<div class="blog">
    <h1>Main Title</h1>
    <h3>By: Walrusking</h3>
    "Blog content here"
</div>
```

