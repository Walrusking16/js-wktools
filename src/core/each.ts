import {fn} from "./core";

fn.prototype.each = (callback) => {
	fn.prototype.this.forEach((element, i) => {
		const boundFn = callback.bind(element);
		boundFn(element, i);
	});
	return fn.prototype;
}