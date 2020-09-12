import {fn} from "../core/core";

fn.prototype.children = () => {
	if( fn.prototype.shouldDelay(() => {fn.prototype.children.apply(null)}))
		return fn.prototype;
	fn.prototype.this = fn.prototype.this[0].children;
	return fn.prototype;
}