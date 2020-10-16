import {cash} from "../core/core";

cash.post = (url: string, data, options: object = {async: true, headers: {}}) => {
	let request = new XMLHttpRequest();
	// @ts-ignore
	let useAsync = options.async;
	request.open('POST', url, useAsync);

	// @ts-ignore
	if (Array.isArray(options.headers) && options.headers.length > 0){
		// @ts-ignore
		for(let key in options.headers){
			// @ts-ignore
			request.setRequestHeader(key, options.headers[key])
		}
	}
	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

	request.send(data);
}