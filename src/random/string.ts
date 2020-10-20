import {cash} from "../core/core";

cash.rStr = (length: number = 6) => {
	let charArray = [];
	for (let i=0; i < length; i++){
		charArray.push(Math.random().toString(36).substring(2).split("")[0]);
	}
	return charArray.join("");
}