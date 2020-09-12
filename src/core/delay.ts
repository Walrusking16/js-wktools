import {fn} from "./core";

fn.prototype.delay = (func) => {
	fn.prototype.queue.push(func);
};

fn.prototype.shouldDelay = (func) => {
	if( fn.prototype.delayed ){
		fn.prototype.delay(func);
	}
	return fn.prototype.delayed;
}