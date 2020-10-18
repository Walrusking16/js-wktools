import {cash} from "../core/core";

cash.ajax = (options: object = {requestType: "GET", url: "", data: null, async: true, onSuccess: null, beforeSend: null, onError: null, dataType: "json", headers: {}, debug: false}) => {

	// @ts-ignore
	let data = options.data === undefined ? null: options.data;

	let request = new XMLHttpRequest();
	// @ts-ignore
	let useAsync = options.async === undefined ? true: options.async;
	// @ts-ignore
	request.open(options.requestType, options.url, useAsync);

	// @ts-ignore
	if(options.dataType === undefined)
		request.responseType = "json";
	else {
		// @ts-ignore
		request.responseType = options.dataType;
	}

	// @ts-ignore
	if(options.requestType == "POST") {
		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	}

	// @ts-ignore
	if (Array.isArray(options.headers) && options.headers.length > 0){
		// @ts-ignore
		for(let key in options.headers){
			// @ts-ignore
			request.setRequestHeader(key, options.headers[key])
		}
	}

	request.onreadystatechange = function() {
		if (this.readyState == 4) {
			if (this.status == 200) {
				let response = this.response;
				// @ts-ignore
				if(options.dataType !== undefined && options.dataType.toLowerCase() == "text")
					response = this.responseText;
				// @ts-ignore
				if (options.onSuccess !== undefined && options.onSuccess !== null) {
					// @ts-ignore
					options.onSuccess(response);
				}
			} else {
				// @ts-ignore
				if (options.onError !== undefined && options.onError !== null) {
					// @ts-ignore
					options.onError(this.status, request.statusText);
				}
			}
		}
	};

	// @ts-ignore
	if (options.beforeSend !== undefined && options.beforeSend !== null) {
		// @ts-ignore
		options.beforeSend();
	}

	if(data !== null){
		if(data instanceof FormData) {
			let ndata = ""
			let num = 0;
			// @ts-ignore
			for (const [key, value] of data.entries()) {
				if (num > 0)
					ndata += `&${key}=${value}`;
				else
					ndata += `${key}=${value}`;
				num++;
			}
			data = ndata;
		} else if(typeof data === "object") {
			let ndata = ""
			let num = 0;
			// @ts-ignore
			for (const [key, value] of Object.entries(data)) {
				if (num > 0)
					ndata += `&${key}=${value}`;
				else
					ndata += `${key}=${value}`;
				num++;
			}
			data = ndata;
		}
	}

	// @ts-ignore
	if(typeof options.debug === "boolean" && options.debug){
		// @ts-ignore
		console.log("Request Type: " +options.requestType);
		// @ts-ignore
		console.log("URL: " +options.url);
		// @ts-ignore
		console.log("Data Sent: " +data);
		// @ts-ignore
		console.log("Async: " +useAsync);
		// @ts-ignore
		console.log("onSuccess Function: " +options.onSuccess);
		// @ts-ignore
		console.log("beforeSend Function: " +options.beforeSend);
		// @ts-ignore
		console.log("onError Function: " +options.onError);
		// @ts-ignore
		console.log("Response Type: " +request.responseType);
		// @ts-ignore
		console.log("Response Headers: " +request.getAllResponseHeaders());
		// @ts-ignore
		console.log("Debug: " +options.debug);
	}

	request.send(data);
}