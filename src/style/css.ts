import {fn} from "../core/core";

fn.prototype.css = (...cssArgs) => {
	if (typeof cssArgs[0] === 'string') {
		const [property, value] = cssArgs;
		fn.prototype.this.forEach((element) => {
			element.style[property] = value;
		});
	} else if (typeof cssArgs[0] === 'object') {
		// @ts-ignore
		const cssProps = Object.entries(cssArgs[0]);
		fn.prototype.this.forEach((element) => {
			cssProps.forEach(([property, value]) => {
				element.style[property] = value;
			});
		});
	}
	return fn.prototype;
}