import {fn} from "../core/core";

fn.prototype.find = (selector : string) => {
	if( fn.prototype.shouldDelay(() => {fn.prototype.find.apply(null, selector)}))
		return fn.prototype;

		let elem = fn.prototype.this[0]

		fn.prototype.this = elem.querySelectorAll(selector);
	return fn.prototype;
}