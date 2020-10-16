import {fn} from "../core/core";

fn.prototype.text = (_text: string) => {
	if(_text){
		if( fn.prototype.shouldDelay(() => {fn.prototype.text.apply(null, _text)}))
			return fn.prototype;
		fn.prototype.this[0].innerText = _text;
		return fn.prototype;
	} else {
		return fn.prototype.this[0].innerText;
	}
}