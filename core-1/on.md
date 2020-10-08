# On

This will allow you to set an event listener on the element\(s\)

[List of Events](https://www.w3schools.com/jsref/dom_obj_event.asp)

```javascript
function clicked(){
    console.log("I was clicked")
}

$("div").on("click",clicked); // This will call the clicked function when you click on a div
```

