import {fn} from "./core";

fn.prototype.off = (eventName: string) => {
	if( fn.prototype.shouldDelay(() => {fn.prototype.off.apply(null, [eventName])}))
		return fn.prototype;
	fn.prototype.this.forEach((element) => {
		element.removeEventListener(eventName);
	});
	return fn.prototype;
}