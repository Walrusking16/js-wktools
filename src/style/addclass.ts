import {fn} from "../core/core";

fn.prototype.addClass = (_classes: string) => {
	if( fn.prototype.shouldDelay(() => {fn.prototype.addClass.apply(null, _classes)}))
		return fn.prototype;
	let classes = _classes.split(" ");
	fn.prototype.this.forEach((element) => {
		classes.forEach((_class) => {
			element.classList.add(_class);
		})
	});
	return fn.prototype;
}