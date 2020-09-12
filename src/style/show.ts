import {fn} from "../core/core";

fn.prototype.show = () => {
	if( fn.prototype.shouldDelay(() => {fn.prototype.show.apply(null)}))
		return fn.prototype;
	fn.prototype.this.forEach((element) => {
		element.style.display = "";
	});
	return fn.prototype;
}