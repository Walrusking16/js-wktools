# ToRGB

This will return the background or text color of the selected element as an rgb value.

| True | False |
| :--- | :--- |
| Background color | Text Color |

```javascript
$("button").toRGB(); // This will return {r: 239, g: 239, b: 239}
$("button").toRGB(true) // This will return {r: 0, g: 0, b: 0}
```

