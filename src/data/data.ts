import {fn} from "../core/core";

fn.prototype.data = (...dataArgs) => {
	if (dataArgs[1] === undefined) {
		return fn.prototype.this[0].getAttribute("data-"+dataArgs[0]);
	} else {
		fn.prototype.this[0].setAttribute("data-"+dataArgs[0], dataArgs[1]);
	}
	return fn.prototype;
}