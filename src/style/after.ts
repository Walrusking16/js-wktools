import {fn} from "../core/core";

fn.prototype.after = (elem) => {
	if( fn.prototype.shouldDelay(() => {fn.prototype.after.apply(null, elem)}))
		return fn.prototype;
	fn.prototype.this[0].insertAdjacentElement('afterend', elem);
	return fn.prototype;
}