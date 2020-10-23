window['$'] = function(...args) {
	if (typeof args[0] === 'function') {
		document.addEventListener('DOMContentLoaded', args[0]);
	} else if (typeof args[0] === 'string' || args[0] instanceof HTMLElement) {
		return cash.selector(args[0], true);
	}
}

export const cash = window['$'];

cash.selector = function(select, withFunctions: boolean = false){
	let results = null;
	if(typeof select === 'string'){
		results = document.querySelectorAll(select);
	}
	else if (select instanceof HTMLElement) {
		results = [select];
	}
	if(withFunctions) {
		return fn.apply(results);
	}
	return results;
}

export const fn = function(){
	fn.prototype.queue = [];
	fn.prototype.delayed = false;
	fn.prototype.this = this;
	return fn.prototype;
};