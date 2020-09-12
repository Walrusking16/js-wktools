import {fn} from "../core/core";

fn.prototype.attr = (...attArgs) => {
	if( fn.prototype.shouldDelay(() => {fn.prototype.attr.apply(null, attArgs)}))
		return fn.prototype;
	if (attArgs[1] === undefined) {
		return fn.prototype.this[0].getAttribute(attArgs[0]);
	} else {
		fn.prototype.this[0].setAttribute(attArgs[0], attArgs[1]);
	}
	return fn.prototype;
}