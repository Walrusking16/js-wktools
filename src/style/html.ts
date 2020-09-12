import {fn} from "../core/core";

fn.prototype.html = (_html: string) => {
	if( fn.prototype.shouldDelay(() => {fn.prototype.html.apply(null, _html)}))
		return fn.prototype;
	fn.prototype.this.forEach((element) => {
		element.innerHTML = _html;
	});
	return fn.prototype;
}