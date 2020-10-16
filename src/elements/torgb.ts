import {fn} from "../core/core";

fn.prototype.toRGB = (useColor: boolean = false) => {
	let color = useColor ? "color" : "background-color";
	let result = window.getComputedStyle(fn.prototype.this[0], null).getPropertyValue(color).split("(")[1].split(")")[0].split(", ");
	return result ? {
		r: parseInt(result[0]),
		g: parseInt(result[1]),
		b: parseInt(result[2])
	} : null;
}