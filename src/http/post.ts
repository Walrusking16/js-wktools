import {cash} from "../core/core";

cash.post = (url: string, data, success: Function = null, options: object = {async: true, onSuccess: null, beforeSend: null, onError: null, headers: {}, debug: false}) => {
	// @ts-ignore
	let useAsync = options.async === undefined ? true: options.async;
	cash.ajax({
		requestType: "POST",
		url: url,
		data: data,
		// @ts-ignore
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