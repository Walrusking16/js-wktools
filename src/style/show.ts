import {fn} from "../core/core";

fn.prototype.show = () => {
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