import {fn} from "../core/core";

fn.prototype.replace = (html: string) => {
	if( fn.prototype.shouldDelay(() => {fn.prototype.replace.apply(null, html)}))
		return fn.prototype;
	fn.prototype.this.forEach(element => {
		element.outerHTML = html;
	});
	return fn.prototype;
}