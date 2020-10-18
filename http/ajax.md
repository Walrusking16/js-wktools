# Ajax

This allows you to do ajax requests.

```javascript
$.ajax({
		requestType: "GET",
		url: "https://www.random.org/strings/?num=10&len=8&digits=on&upperalpha=on&loweralpha=on&unique=on&format=plain&rnd=new",
		onSuccess: function(data) {
			console.log(data)
		},
		onError: function(er,err) {
			console.log(er,err)
		},
		dataType: "text"
}); // This will print out random strings
```

* **requestType: String**
  * GET
  * POST
* **url: String**
* **data: Object/FormData**
* **async: Bool** Default: True
* **onSuccess: Function**
* **beforeSend: Function**
* **onError: Function**
* **dataType: String** Default: json
  * json
  * text
* **headers: Object**
* **debug: Bool** Default: false



