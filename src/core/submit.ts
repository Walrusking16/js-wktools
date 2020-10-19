import {fn} from "./core";

fn.prototype.submit = (handler: Function, preventDefault: boolean = true) => {
	if( fn.prototype.shouldDelay(() => {fn.prototype.submit.apply(null, [handler, preventDefault])}))
		return fn.prototype;

	fn.prototype.on("submit", (event) => {
		handler(event);

		if(preventDefault)
			event.preventDefault();
	});
	return fn.prototype;
}