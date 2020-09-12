import {fn} from "../core/core";

fn.prototype.empty = () => {
	fn.prototype.this.forEach(element => {
		while(element.firstChild)
			element.removeChild(element.firstChild);
	});
	return fn.prototype;
}