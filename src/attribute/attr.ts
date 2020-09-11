import {fn} from "../core/core";

fn.prototype.attr = (...attArgs) => {
	if (attArgs[1] === undefined) {
		return fn.prototype.this[0].getAttribute(attArgs[0]);
	} else {
		fn.prototype.this[0].setAttribute(attArgs[0], attArgs[1]);
	}
	return fn.prototype;
}