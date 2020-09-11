import {fn} from "../core/core";

fn.prototype.hide = () => {
	fn.prototype.this.forEach((element) => {
		element.setAttribute("current-display", element.style.display);
		element.style.display = "none";
	});
	return fn.prototype;
}