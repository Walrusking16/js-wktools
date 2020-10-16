import {cash} from "./core";

cash.toHex = (r: number, g: number, b: number) => {
	let toHex = [r,g,b].map(function(x){
		let c = x.toString(16);
		return (c.length === 1) ? "0"+c : c;
	});
	return "#" + toHex.join("");
}