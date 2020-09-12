import {fn} from "../core/core";

fn.prototype.empty = () => {
	if( fn.prototype.shouldDelay(() => {fn.prototype.empty.apply(null)}))
		return fn.prototype;
	fn.prototype.this.forEach(element => {
		while(element.firstChild)
			element.removeChild(element.firstChild);
	});
	return fn.prototype;
}