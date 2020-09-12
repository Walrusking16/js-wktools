import {fn} from "./core";

fn.prototype.delayFinished = () => {
	fn.prototype.delayed = false;
	if( typeof(fn.prototype.queue[0]) == "function" ){
		fn.prototype.queue[0]();
		fn.prototype.queue.splice(0,1);
	}
	if( fn.prototype.queue.length > 0 )
		fn.prototype.delayed = true;
};