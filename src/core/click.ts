import {fn} from "./core";

fn.prototype.click = (handler: Function, preventDefault: boolean = false) => {
	if( fn.prototype.shouldDelay(() => {fn.prototype.click.apply(null, [handler, preventDefault])}))
		return fn.prototype;

	fn.prototype.on("click", (event) => {
		handler(event);

		if(preventDefault)
			event.preventDefault();
	});
	return fn.prototype;
}