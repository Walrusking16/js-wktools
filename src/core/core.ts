window['$'] = function(...args) {
	if (typeof args[0] === 'function') {
		document.addEventListener('DOMContentLoaded', args[0]);
	} else if (typeof args[0] === 'string' || args[0] instanceof HTMLElement) {
		return fn.apply(cash.selector(args[0]));
	}
}

export const cash = window['$'];

cash.selector = function(select){
	let results = null;
	if(typeof select === 'string'){
		results = document.querySelectorAll(select);
	}
	else if (select instanceof HTMLElement) {
		results = [select];
	}
	return results;
}

export const fn = function(){
	fn.prototype.queue = [];
	fn.prototype.delayed = false;
	fn.prototype.this = this;
	return fn.prototype;
};