import {fn} from "../core/core";

fn.prototype.id = (arg = null) => {
	if( fn.prototype.shouldDelay(() => {fn.prototype.id.apply(null, arg)}))
		return fn.prototype;
	if (arg === null)
		return fn.prototype.this[0].id;
	else
		fn.prototype.this[0].id = arg;
	return fn.prototype;
}