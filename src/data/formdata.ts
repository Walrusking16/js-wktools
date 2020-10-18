import {cash} from "../core/core";

cash.formData = (args) => {
	let data = null;

	if (typeof(args) === "object") {
		data = new FormData();
		// @ts-ignore
		for (const [key, value] of Object.entries(args)) {
			data.append(key, value);
		}
	} else {
		data = new FormData(cash.selector("#"+args)[0]);
	}

	return data;
}