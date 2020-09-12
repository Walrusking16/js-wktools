import {fn} from "../core/core";

fn.prototype.removeClass = (_classes: string) => {
	if( fn.prototype.shouldDelay(() => {fn.prototype.removeClass.apply(null, _classes)}))
		return fn.prototype;
	let classes = _classes.split(" ");
	fn.prototype.this.forEach((element) => {
		classes.forEach((_class) => {
			element.classList.remove(_class);
		})
	});
	return fn.prototype;
}