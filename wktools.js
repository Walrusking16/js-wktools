!function(t){var e={};function o(p){if(e[p])return e[p].exports;var r=e[p]={i:p,l:!1,exports:{}};return t[p].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=e,o.d=function(t,e,p){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:p})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var p=Object.create(null);if(o.r(p),Object.defineProperty(p,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(p,r,function(e){return t[e]}.bind(null,r));return p},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";o.r(e),window.$=function(...t){if("function"==typeof t[0])document.addEventListener("DOMContentLoaded",t[0]);else{if("string"==typeof t[0]){const e=document.querySelectorAll(t[0]);return r.apply(e)}if(t[0]instanceof HTMLElement){const e=[t[0]];return r.apply(e)}}};const p=window.$,r=function(){return r.prototype.queue=[],r.prototype.delayed=!1,r.prototype.this=this,r.prototype};r.prototype.each=t=>(r.prototype.shouldDelay(()=>{r.prototype.each.apply(null,t)})||r.prototype.this.forEach((e,o)=>{t.bind(e)(e,o)}),r.prototype),r.prototype.on=(t,e)=>(r.prototype.shouldDelay(()=>{r.prototype.on.apply(null,[t,e])})||r.prototype.this.forEach(o=>{o.addEventListener(t,e)}),r.prototype),r.prototype.wait=t=>(r.prototype.delayed=!0,setTimeout((function(){r.prototype.delayFinished()}),t),r.prototype),r.prototype.delay=t=>{r.prototype.queue.push(t)},r.prototype.shouldDelay=t=>(r.prototype.delayed&&r.prototype.delay(t),r.prototype.delayed),r.prototype.delayFinished=()=>{r.prototype.delayed=!1,"function"==typeof r.prototype.queue[0]&&(r.prototype.queue[0](),r.prototype.queue.splice(0,1)),r.prototype.queue.length>0&&(r.prototype.delayed=!0)},p.loop=(t,e)=>{setTimeout((function(){t(),p.loop.apply(null,[t,e])}),e)},r.prototype.attr=(...t)=>r.prototype.shouldDelay(()=>{r.prototype.attr.apply(null,t)})?r.prototype:void 0===t[1]?r.prototype.this[0].getAttribute(t[0]):(r.prototype.this[0].setAttribute(t[0],t[1]),r.prototype),r.prototype.data=(...t)=>r.prototype.shouldDelay(()=>{r.prototype.data.apply(null,t)})?r.prototype:void 0===t[1]?r.prototype.this[0].getAttribute("data-"+t[0]):(r.prototype.this[0].setAttribute("data-"+t[0],t[1]),r.prototype),r.prototype.val=t=>r.prototype.shouldDelay(()=>{r.prototype.attr.val(null,t)})?r.prototype:null===t?r.prototype.this[0].value:(r.prototype.this[0].value=t,r.prototype),r.prototype.css=(...t)=>{if(r.prototype.shouldDelay(()=>{r.prototype.css.apply(null,t)}))return r.prototype;if("string"==typeof t[0]){const[e,o]=t;r.prototype.this.forEach(t=>{t.style[e]=o})}else if("object"==typeof t[0]){const e=Object.entries(t[0]);r.prototype.this.forEach(t=>{e.forEach(([e,o])=>{t.style[e]=o})})}return r.prototype},r.prototype.template=t=>{if(r.prototype.shouldDelay(()=>{r.prototype.template.apply(null,t)}))return r.prototype;const e=/{{(.*?)}}/gm;return r.prototype.this.forEach(o=>{let p,r=document.createElement("div"),l=t.slice();for(;null!==(p=e.exec(t));)p.index===e.lastIndex&&e.lastIndex++,p.forEach(t=>{let e=$(o).attr(t);null!==e&&(l=l.replace("{{"+t+"}}",e))});if(l.includes("{{content}}")){let t="";for(let e=0;e<o.children.length;e++)t+=o.children[e].outerHTML;l=l.replace("{{content}}",t)}else for(let t=0;t<o.children.length;t++)r.appendChild(o.children[t]);r.innerHTML=l,o.replaceWith(...Array.from(r.childNodes))}),r.prototype},r.prototype.show=()=>(r.prototype.shouldDelay(()=>{r.prototype.show.apply(null)})||r.prototype.this.forEach(t=>{"none"===t.style.display&&(null!==t.getAttribute("current-display")?(t.style.display=t.getAttribute("current-display"),t.removeAttribute("current-display")):t.style.display="block")}),r.prototype),r.prototype.hide=()=>(r.prototype.shouldDelay(()=>{r.prototype.hide.apply(null)})||r.prototype.this.forEach(t=>{t.setAttribute("current-display",t.style.display),t.style.display="none"}),r.prototype),r.prototype.addClass=t=>{if(r.prototype.shouldDelay(()=>{r.prototype.addClass.apply(null,t)}))return r.prototype;let e=t.split(" ");return r.prototype.this.forEach(t=>{e.forEach(e=>{t.classList.add(e)})}),r.prototype},r.prototype.removeClass=t=>{if(r.prototype.shouldDelay(()=>{r.prototype.removeClass.apply(null,t)}))return r.prototype;let e=t.split(" ");return r.prototype.this.forEach(t=>{e.forEach(e=>{t.classList.remove(e)})}),r.prototype},r.prototype.hasClass=t=>r.prototype.shouldDelay(()=>{r.prototype.hasClass.apply(null,t)})?r.prototype:r.prototype.this[0].classList.contains(t),r.prototype.toggleClass=t=>{if(r.prototype.shouldDelay(()=>{r.prototype.toggleClass.apply(null,t)}))return r.prototype;let e=t.split(" ");return r.prototype.this.forEach(t=>{e.forEach(e=>{$(t).hasClass(e)?$(t).removeClass(e):$(t).addClass(e)})}),r.prototype},r.prototype.html=t=>(r.prototype.shouldDelay(()=>{r.prototype.html.apply(null,t)})||r.prototype.this.forEach(e=>{e.innerHTML=t}),r.prototype)}]);