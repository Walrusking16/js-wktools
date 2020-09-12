import {fn} from "../core/core";

fn.prototype.show = () => {
	if( fn.prototype.shouldDelay(() => {fn.prototype.show.apply(null)}))
		return fn.prototype;
	fn.prototype.this.forEach((element) => {
		if(element.style.display !== "none") return;
		// @ts-ignore
		if(element.getAttribute("current-display") !== null){
			element.style.display = element.getAttribute("current-display");
			element.removeAttribute("current-display");
		}
		else
			element.style.display = "block";
	});
	return fn.prototype;
}