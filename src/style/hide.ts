import {fn} from "../core/core";

fn.prototype.hide = () => {
	if( fn.prototype.shouldDelay(() => {fn.prototype.hide.apply(null)}))
		return fn.prototype;
	fn.prototype.this.forEach((element) => {
		element.style.display = "none";
	});
	return fn.prototype;
}