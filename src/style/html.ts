import {fn} from "../core/core";

fn.prototype.html = (_html: string) => {
	if(_html && _html.length > 0){
		if( fn.prototype.shouldDelay(() => {fn.prototype.html.apply(null, _html)}))
			return fn.prototype;
		fn.prototype.this[0].innerHTML = _html;
		return fn.prototype;
	} else {
		return fn.prototype.this[0].innerHTML;
	}
}