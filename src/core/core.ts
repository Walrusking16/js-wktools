window['$'] = function(...args) {
	if (typeof args[0] === 'function') {
		document.addEventListener('DOMContentLoaded', args[0]);
	} else if (typeof args[0] === 'string') {
		const _collection = document.querySelectorAll(args[0]);
		return fn.apply(_collection);
	} else if (args[0] instanceof HTMLElement) {
		const _collection = [args[0]];
		return fn.apply(_collection);
	}
}

export const cash = window['$'];

export const fn = function(){
	fn.prototype.queue = [];
	fn.prototype.delayed = false;
	fn.prototype.this = this;
	return fn.prototype;
};