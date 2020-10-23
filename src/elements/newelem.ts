import {fn} from "../core/core";

fn.prototype.clone = () => {
	if( fn.prototype.shouldDelay(() => {fn.prototype.clone.apply(null)}))
		return fn.prototype;
	return fn.prototype.this[0].cloneNode(true);
}