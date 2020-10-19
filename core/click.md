# Click

This will allow you to set a click event.

```javascript
function clicked(){
    console.log("I was clicked")
}

$("div").click(clicked); // This will call the clicked function when you click on a div

$("div").click(clicked, true); // This will all preventDefault
```



