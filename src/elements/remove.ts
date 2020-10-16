import {fn} from "../core/core";

fn.prototype.remove = () => {
	if( fn.prototype.shouldDelay(() => {fn.prototype.remove.apply(null)}))
		return fn.prototype;
	fn.prototype.this.forEach((elem)=>{
		elem.remove();
	});
	return null;
}