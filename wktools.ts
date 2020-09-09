const selectedElements = collection => {
	collection.each = (callback) => {
		collection.forEach((element, i) => {
			const boundFn = callback.bind(element);
			boundFn(element, i);
		});
		return collection;
	};
	collection.on = (eventName, handler) => {
		collection.forEach((element) => {
			element.addEventListener(eventName, handler);
		});
		return collection;
	};
	collection.css = (...cssArgs) => {
		if (typeof cssArgs[0] === 'string') {
			const [property, value] = cssArgs;
			collection.forEach((element) => {
				element.style[property] = value;
			});
		} else if (typeof cssArgs[0] === 'object') {
			// @ts-ignore
			const cssProps = Object.entries(cssArgs[0]);
			collection.forEach((element) => {
				cssProps.forEach(([property, value]) => {
					element.style[property] = value;
				});
			});
		}
		return collection;
	};
	collection.addClass = (_classes) => {
		let classes = _classes.split(" ");
		collection.forEach((element) => {
			classes.forEach((_class) => {
				element.classList.add(_class);
			})
		});
		return collection;
	};
	collection.removeClass = (_classes) => {
		let classes = _classes.split(" ");
		collection.forEach((element) => {
			classes.forEach((_class) => {
				element.classList.remove(_class);
			})
		});
		return collection;
	};
	collection.hasClass = (_class) => {
		return collection[0].classList.contains(_class);
	};
	collection.toggleClass = (_classes) => {
		let classes = _classes.split(" ");
		collection.forEach((element) => {
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
		return collection;
	};
	collection.attr = (...attArgs) => {
		if (attArgs[1] === undefined) {
			return collection[0].getAttribute(attArgs[0]);
		} else {
			collection[0].setAttribute(attArgs[0], attArgs[1]);
		}
		return collection;
	};
	collection.template = (template) => {
		const regex = /{{(.*?)}}/gm;
		collection.forEach((element) => {
			let newElem = document.createElement('div');
			let tempTemplate = template.slice();
			let parameters;

			while ((parameters = regex.exec(template)) !== null) {
				if (parameters.index === regex.lastIndex) {
					regex.lastIndex++;
				}
				parameters.forEach((match) => {
					// @ts-ignore
					let _param = $(element).attr(match);
					if(_param !== null){
						tempTemplate = tempTemplate.replace("{{" + match + "}}",_param);
					}
				});
			}

			if(tempTemplate.includes("{{content}}")){
				let newContent = "";
				for (let i = 0; i < element.children.length; i++) {
					newContent += element.children[i].outerHTML;
				}
				tempTemplate = tempTemplate.replace("{{content}}",newContent);
			} else {
				for (let i = 0; i < element.children.length; i++) {
					newElem.appendChild(element.children[i]);
				}
			}

			newElem.innerHTML = tempTemplate;

			// @ts-ignore
			element.replaceWith(...Array.from(newElem.childNodes));
		});
		return collection;
	};
	collection.show = () => {
		collection.forEach((element) => {
			if(element.style.display !== "none") return;
			// @ts-ignore
			if(element.getAttribute("current-display") !== null){
				element.style.display = element.getAttribute("current-display");
				element.removeAttribute("current-display");
			}
			else
				element.style.display = "block";
		});
		return collection;
	};
	collection.hide = () => {
		collection.forEach((element) => {
			element.setAttribute("current-display", element.style.display);
			element.style.display = "none";
		});
		return collection;
	};
	collection.html = (_html) => {
		collection.forEach((element) => {
			element.innerHTML = _html;
		});
		return collection;
	};
	collection.data = (...dataArgs) => {
		if (dataArgs[1] === undefined) {
			return collection[0].getAttribute("data-"+dataArgs[0]);
		} else {
			collection[0].setAttribute("data-"+dataArgs[0], dataArgs[1]);
		}
		return collection;
	};
	collection.val = (arg) => {
		if (arg === null)
			return collection[0].value;
		else
			collection[0].value = arg;
		return collection[0];
	};
};

const $ = (...args) => {
	if (typeof args[0] === 'function') {
		const func = args[0];
		document.addEventListener('DOMContentLoaded', func);
	} else if (typeof args[0] === 'string') {
		const _selector = args[0];
		const _collection = document.querySelectorAll(_selector);
		selectedElements(_collection);
		return _collection;
	} else if (args[0] instanceof HTMLElement) {
		const _collection = [args[0]];
		selectedElements(_collection);
		return _collection;
	}
};