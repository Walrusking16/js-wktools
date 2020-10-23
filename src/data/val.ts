import {fn} from "../core/core";

fn.prototype.val = (arg) => {
	if( fn.prototype.shouldDelay(() => {fn.prototype.val.apply(null, arg)}))
		return fn.prototype;
	if (arg === undefined)
		return fn.prototype.this[0].value;
	else
		fn.prototype.this[0].value = arg;
	return fn.prototype;
}