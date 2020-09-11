import {fn} from "../core/core";

fn.prototype.toggleClass = (_classes: string) => {
	let classes = _classes.split(" ");
	fn.prototype.this.forEach((element) => {
		classes.forEach((_class) => {
			// @ts-ignore
			if($(element).hasClass(_class)){
				// @ts-ignore
				$(element).removeClass(_class);
			}
			else{
				// @ts-ignore
				$(element).addClass(_class);
			}
		})
	});
	return fn.prototype;
}