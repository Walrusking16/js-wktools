import {fn} from "../core/core";

fn.prototype.before = (elem) => {
	if( fn.prototype.shouldDelay(() => {fn.prototype.before.apply(null, elem)}))
		return fn.prototype;
	fn.prototype.this[0].insertAdjacentElement('beforebegin', elem);
	return fn.prototype;
}