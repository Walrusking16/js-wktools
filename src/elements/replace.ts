import {fn} from "../core/core";

fn.prototype.replace = (html: string) => {
	fn.prototype.this.forEach(element => {
		element.outerHTML = html;
	});
	return fn.prototype;
}