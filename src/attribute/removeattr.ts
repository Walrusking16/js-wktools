import {fn} from "../core/core";

fn.prototype.removeAttr = (attr) => {
	if( fn.prototype.shouldDelay(() => {fn.prototype.removeAttr.apply(null, attr)}))
		return fn.prototype;
	fn.prototype.this[0].removeAttribute(attr);
	return fn.prototype;
}