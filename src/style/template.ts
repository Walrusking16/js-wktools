import {fn} from "../core/core";

fn.prototype.template = (template: string) => {
	if( fn.prototype.shouldDelay(() => {fn.prototype.template.apply(null, template)}))
		return fn.prototype;
	const regex = /{{(.*?)}}/gm;
	fn.prototype.this.forEach((element) => {
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
		// @ts-ignore
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
	return fn.prototype;
}