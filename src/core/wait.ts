import {fn} from "./core";

fn.prototype.wait = (time: number) => {
	fn.prototype.delayed = true;
	setTimeout(function(){
		fn.prototype.delayFinished();
	}, time);
	return fn.prototype;
};