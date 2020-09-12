import {fn} from "./core";

fn.prototype.each = (callback) => {
	if( fn.prototype.shouldDelay(() => {fn.prototype.each.apply(null, callback)}))
		return fn.prototype;
	fn.prototype.this.forEach((element, i) => {
		const boundFn = callback.bind(element);
		boundFn(element, i);
	});
	return fn.prototype;
}