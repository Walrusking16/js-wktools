import {fn} from "../core/core";

fn.prototype.html = (_html: string) => {
	fn.prototype.this.forEach((element) => {
		element.innerHTML = _html;
	});
	return fn.prototype;
}