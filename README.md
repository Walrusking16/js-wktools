# Javascript WKTools

Install via npm: `npm i js-wktools`

Non-Minified JS: `<script src="https://cdn.jsdelivr.net/npm/js-wktools@1.2.5/wktools.js"></script>`

Minified JS: `<script src="https://cdn.jsdelivr.net/npm/js-wktools@1.2.5/wktools.min.js"></script>`

## Document ready

You can call `$(functionhere)` to run the function when the document has loaded.

```javascript
function loaded(){
    console.log("I am now ready")
}

$(loaded)
```

You can also do this

```javascript
$(()=>{console.log("I am now ready")})
```

---

#### Each

This will run the function given on each element

```javascript
function dosomething(){
    console.log("Did something")
}
$("div").each(dosomething);
```

---

#### On

This will allow you to set an event listener on the element(s)

[List of Events](https://www.w3schools.com/jsref/dom_obj_event.asp)

```javascript
function clicked(){
    console.log("I was clicked")
}

$("div").on("click",clicked); // This will call the clicked function when you click on a div
```

---

#### CSS

This will allow you to set css on the element(s)

```javascript
$("div").css("color","red"); // This will set the color to red on
```

It can also accept an object.

```javascript
$("div").css({
    color: 'red',
    cursor: 'pointer'
}); // This will set the color and the cursor.
```

---

#### Add Class

This will add the class for the given element(s).

```javascript
$("div").addClass("red"); // This will add the red class if it does not have it
```

This will work with multiple classes.

```javascript
$("div").addClass("red blue"); // This will add the red and blue class if it does not have them
```

---

#### Remove Class

This will remove the class for the given element(s).

```javascript
$("div").removeClass("red"); // This will remove the red class if it has it
```

This will work with multiple classes.

```javascript
$("div").removeClass("red blue"); // This will remove the red and blue class if it has them
```

---

#### Has Class

This allows you to check if the class is on the element.

> This will only work on the first element, even if there is more than one element in the list.

```javascript
$("div").hasClass("red"); // This will return true if it has the red class or false if it doesnt
```

---

#### Toggle Class

This allows you to toggle the class on an element.

```javascript
$("div").toggleClass("red"); // If the div class does not have the red class it will be added or removed if it does have it
```

This accepts multiple classes seperated by a space

```javascript
$("div").toggleClass("red blue"); // This will toggle both the red and blue class
```

---

#### Attr

This allows you to get/set an attributes data.

##### JS
```javascript
$("#idhere").attr("attribute_name"); // Return attribute data

$("#idhere").attr("attribute_name","newvalue"); // Set attribute data to "newvalue"
```

---

#### Template

Anything wrapped in two curly brackets, is replaced by an html attribute of the same name.

In order to display any html you put inside of the new template you must put {{content}} somewhere in the template so it knows where to place it.

IE: {{author}} would look for an html attribute call author and replace it with the attribute data.

##### JS
```javascript
$("blog").template("<div class='blog'><h1>{{title}}</h1><h3>By: {{author}}</h3>{{content}}</div>");
```

##### HTML
```html
<blog author="Walrusking" title="Main Title">
    Blog content here
</blog>
```

##### Result
```html
<div class="blog">
    <h1>Main Title</h1>
    <h3>By: Walrusking</h3>
    "Blog content here"
</div>
```

---

#### Show

This will show the given element(s).

##### JS
```javascript
$("div").show();
```

---

#### Hide

This will hide the given element(s).

##### JS
```javascript
$("div").hide();
```

---

#### HTML

This allows you to set the innerHTML on an element(s).

##### JS
```javascript
$("div").html("<b>DIV</b>");
```

---

#### Data

This allows you to get/set a data attribute.

##### JS
```javascript
$("#idhere").data("data_name"); // Return data attribute

$("#idhere").data("data_name","newvalue"); // Set data attribute to "newvalue"
```

---

#### Val

This will return or set the value of the element.

> Only returns the first element

##### JS
```javascript
$("#idhere").val(); // Return the value

$("#idhere").val("newvalue"); // Set the value
```

---

#### Wait

This will cause the function called after it to wait until it runs.

> Time is in milliseconds

##### JS
```javascript
$("div").wait(1000).css("color","red"); // This will wait one second before changing the color to red
```

---

#### Loops

This will continue repeating forever.

##### JS
```javascript

function testPrint(){
    console.log("Looped");
}

$.loop(testPrint, 5000); // This will print "Looped" every 5 seconds
```

---

#### Before

This will insert an element before the target.

##### JS
```javascript
elem = document.createElement("h1");
elem.innerText = "Hello World";
$("#idhere").before(elem)
```

---

#### After

This will insert an element after the target.

##### JS
```javascript
elem = document.createElement("h1");
elem.innerText = "Hello World";
$("#idhere").after(elem)
```
