import {fn} from "../core/core";

fn.prototype.val = (arg) => {
	if (arg === null)
		return fn.prototype.this[0].value;
	else
		fn.prototype.this[0].value = arg;
	return fn.prototype;
}