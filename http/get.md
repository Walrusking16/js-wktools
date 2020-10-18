# Get

This allows you to do a get request on any site.

{% tabs %}
{% tab title="JavaScript" %}
```javascript
$.get("urlhere", (data) => {console.log(data);}) // Standard get request
```
{% endtab %}

{% tab title="Options" %}
```javascript
$.get("urlhere", (data) => {console.log(data);}, {async: false}) // This will disable async

$.get("urlhere", (data) => {console.log(data);}, {dataType: "text"}) // This will print the data as text, default is "json"
```
{% endtab %}
{% endtabs %}

## Options

| Name | Values |
| :--- | :--- |
| async | **true**, false |
| dataType | **json**, text |
| headers | \["HeaderName", "HeaderValue"\] |

