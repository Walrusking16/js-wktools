import {fn} from "./core";

fn.prototype.on = (eventName: string, handler: void) => {
	fn.prototype.this.forEach((element) => {
		element.addEventListener(eventName, handler);
	});
	return fn.prototype;
}