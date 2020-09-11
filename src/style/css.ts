import {fn} from "../core/core";

// @ts-ignore
fn.css = (...cssArgs) => {
	if (typeof cssArgs[0] === 'string') {
		const [property, value] = cssArgs;
		// @ts-ignore
		this.forEach((element) => {
			element.style[property] = value;
		});
	} else if (typeof cssArgs[0] === 'object') {
		// @ts-ignore
		const cssProps = Object.entries(cssArgs[0]);
		// @ts-ignore
		this.forEach((element) => {
			cssProps.forEach(([property, value]) => {
				element.style[property] = value;
			});
		});
	}
	return this;
}