import {fn} from "../core/core";

fn.prototype.toggleClass = (_classes: string) => {
	if( fn.prototype.shouldDelay(() => {fn.prototype.toggleClass.apply(null, _classes)}))
		return fn.prototype;
	let classes = _classes.split(" ");
	fn.prototype.this.forEach((element) => {
		classes.forEach((_class) => {
			element.classList.toggle(_class);
		})
	});
	return fn.prototype;
}