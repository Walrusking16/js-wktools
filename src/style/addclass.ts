import {fn} from "../core/core";

fn.prototype.addClass = (_classes: string) => {
	let classes = _classes.split(" ");
	fn.prototype.this.forEach((element) => {
		classes.forEach((_class) => {
			element.classList.add(_class);
		})
	});
	return fn.prototype;
}