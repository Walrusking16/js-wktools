import {fn} from "../core/core";

fn.prototype.children = () => {
	fn.prototype.this = fn.prototype.this[0].children;
	return fn.prototype;
}