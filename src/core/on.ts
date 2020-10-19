import {fn} from "./core";

fn.prototype.on = (eventName: string, handler: Function) => {
	if( fn.prototype.shouldDelay(() => {fn.prototype.on.apply(null, [eventName, handler])}))
		return fn.prototype;
	fn.prototype.this.forEach((element) => {
		if (!Array.isArray(element.eventfunc)) {
			element.eventfunc = [];
		}

		if (!Array.isArray(element.eventfunc[eventName])) {
			element.eventfunc[eventName] = [];
		}

		element.addEventListener(eventName, handler);
		element.eventfunc[eventName].push(handler);
	});
	return fn.prototype;
}