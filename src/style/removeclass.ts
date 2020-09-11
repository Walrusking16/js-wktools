import {fn} from "../core/core";

fn.prototype.removeClass = (_classes: string) => {
	let classes = _classes.split(" ");
	fn.prototype.this.forEach((element) => {
		classes.forEach((_class) => {
			element.classList.remove(_class);
		})
	});
	return fn.prototype;
}