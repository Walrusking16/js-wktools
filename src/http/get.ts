import {cash} from "../core/core";

cash.get = (url: string, success: Function, options: object = {async: true, beforeSend: null, onError: null, dataType: "json", headers: {}, debug: false}) => {
	// @ts-ignore
	let useAsync = options.async === undefined ? true: options.async;
	cash.ajax({
		requestType: "GET",
		url: url,
		onSuccess: success,
		async: useAsync,
		// @ts-ignore
		beforeSend: options.beforeSend,
		// @ts-ignore
		onError: options.onError,
		// @ts-ignore
		dataType: options.dataType,
		// @ts-ignore
		headers: options.headers,
		// @ts-ignore
		debug: options.debug,
	});
}