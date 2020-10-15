import {cash} from "../core/core";

cash.get = (url: string, success: Function, options: object = {async: true, dataType: "json", headers: {}}) => {
	let request = new XMLHttpRequest();
	// @ts-ignore
	let useAsync = options.async;
	request.open('GET', url, useAsync);

	// @ts-ignore
	if(options.dataType === undefined || options.dataType.toLowerCase() == "json")
		request.responseType = "json";

	// @ts-ignore
	if (Array.isArray(options.headers) && options.headers.length > 0){
		// @ts-ignore
		for(let key in options.headers){
			// @ts-ignore
			request.setRequestHeader(key, options.headers[key])
		}
	}

	request.onload = function() {
		if (this.status >= 200 && this.status < 400){
			let response = this.response;
			// @ts-ignore
			if(options.dataType.toLowerCase() == "text")
				response = this.responseText;
			success(response);
		} else {
			console.error(request.statusText);
		}
	};

	request.send();
}