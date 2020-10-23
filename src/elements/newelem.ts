import {cash, fn} from "../core/core";

cash.newElem = (type: string) => {
	return cash.selector(document.createElement(type), true);
}