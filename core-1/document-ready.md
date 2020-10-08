# Document Ready

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

