# Submit



This will allow you to set a click event.

```javascript
function clicked(){
    console.log("I was clicked")
}

$("#formname").submit(clicked); // This will call the clicked function when you submit the form
$("#formname").submit(clicked, false); // This will disable preventDefault
```

