import {cash} from "../core/core";

cash.ajax = (options: object = {requestType: "GET", url: "", data: null, async: true, onSuccess: null, beforeSend: null, onError: null, dataType: "json", headers: {}, debug: false}) => {

	// @ts-ignore
	let data = options.data === undefined ? null: options.data;

	// @ts-ignore
	if(typeof options.debug === "boolean" && options.debug){
		// @ts-ignore
		console.log("requestType: " +options.requestType);
		// @ts-ignore
		console.log("url: " +options.url);
		// @ts-ignore
		console.log("data: " +options.data);
		// @ts-ignore
		console.log("async: " +options.async);
		// @ts-ignore
		console.log("onSuccess: " +options.onSuccess);
		// @ts-ignore
		console.log("beforeSend: " +options.beforeSend);
		// @ts-ignore
		console.log("onError: " +options.onError);
		// @ts-ignore
		console.log("dataType: " +options.dataType);
		// @ts-ignore
		console.log("headers: " +options.headers);
		// @ts-ignore
		console.log("debug: " +options.debug);
	}

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

	request.send(data);
}