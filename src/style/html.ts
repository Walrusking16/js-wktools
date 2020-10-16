import {fn} from "../core/core";

fn.prototype.html = (_html: string) => {
	if(_html){
		if( fn.prototype.shouldDelay(() => {fn.prototype.html.apply(null, _html)}))
			return fn.prototype;
		fn.prototype.this[0].innerHTML = _html;
		return fn.prototype;
	} else {
		return fn.prototype.this[0].innerHTML;
	}
}