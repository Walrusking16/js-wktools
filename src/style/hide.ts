import {fn} from "../core/core";

fn.prototype.hide = () => {
	if( fn.prototype.shouldDelay(() => {fn.prototype.hide.apply(null)}))
		return fn.prototype;
	fn.prototype.this.forEach((element) => {
		element.setAttribute("current-display", element.style.display);
		element.style.display = "none";
	});
	return fn.prototype;
}