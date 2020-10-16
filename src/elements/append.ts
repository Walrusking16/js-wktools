import {fn} from "../core/core";

fn.prototype.append = (element) => {
	if( fn.prototype.shouldDelay(() => {fn.prototype.append.apply(null, element)}))
		return fn.prototype;
	fn.prototype.this.forEach((elem)=>{
		elem.appendChild(element);
	});
	return null;
}