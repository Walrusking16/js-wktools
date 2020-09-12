import {fn} from "../core/core";

fn.prototype.hasClass = (_class: string) => {
	if( fn.prototype.shouldDelay(() => {fn.prototype.hasClass.apply(null, _class)}))
		return fn.prototype;
	return fn.prototype.this[0].classList.contains(_class);
}