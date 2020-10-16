import {fn} from "./core";

fn.prototype.off = (eventName: string) => {
	if( fn.prototype.shouldDelay(() => {fn.prototype.off.apply(null, [eventName])}))
		return fn.prototype;
	fn.prototype.this.forEach((element) => {
		if (!Array.isArray(element.eventfunc)) {
			return fn.prototype;
		}

		if (!Array.isArray(element.eventfunc[eventName])) {
			return fn.prototype;
		}
		element.eventfunc[eventName].forEach((handler) => {
			element.removeEventListener(eventName, handler);
		})
	});
	return fn.prototype;
}