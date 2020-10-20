import {cash} from "../core/core";

cash.rNum = (minLength: number = 0, maxLength: number = 9) => {
	if(minLength > maxLength) {
		maxLength = minLength;
		minLength = 0;
	}
	return Math.floor(Math.random() * (maxLength - minLength + 1) ) + minLength;
}