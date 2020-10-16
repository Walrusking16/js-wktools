import {cash, fn} from "../core/core";

fn.prototype.toHex = (useColor: boolean = false) => {
	let color = fn.prototype.toRGB(useColor);
	return cash.toHex(color.r, color.g, color.b);
}