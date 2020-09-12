import {fn} from "./core";

fn.prototype.on = (eventName: string, handler: void) => {
	if( fn.prototype.shouldDelay(() => {fn.prototype.on.apply(null, [eventName, handler])}))
		return fn.prototype;
	fn.prototype.this.forEach((element) => {
		element.addEventListener(eventName, handler);
	});
	return fn.prototype;
}