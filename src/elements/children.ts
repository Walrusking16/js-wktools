import {fn} from "../core/core";

fn.prototype.children = () => {
	return fn.prototype.this[0].children;
}