import {fn} from "../core/core";

fn.prototype.clone = () => {
	return fn.prototype.this[0].cloneNode(true);
}