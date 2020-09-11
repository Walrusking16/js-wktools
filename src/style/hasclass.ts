import {fn} from "../core/core";

fn.prototype.hasClass = (_class: string) => {
	return fn.prototype.this[0].classList.contains(_class);
}