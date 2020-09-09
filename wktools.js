var selectedElements = function (collection) {
    collection.each = function (callback) {
        collection.forEach(function (element, i) {
            var boundFn = callback.bind(element);
            boundFn(element, i);
        });
        return collection;
    };
    collection.on = function (eventName, handler) {
        collection.forEach(function (element) {
            element.addEventListener(eventName, handler);
        });
        return collection;
    };
    collection.css = function () {
        var cssArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            cssArgs[_i] = arguments[_i];
        }
        if (typeof cssArgs[0] === 'string') {
            var property_1 = cssArgs[0], value_1 = cssArgs[1];
            collection.forEach(function (element) {
                element.style[property_1] = value_1;
            });
        }
        else if (typeof cssArgs[0] === 'object') {
            var cssProps_1 = Object.entries(cssArgs[0]);
            collection.forEach(function (element) {
                cssProps_1.forEach(function (_a) {
                    var property = _a[0], value = _a[1];
                    element.style[property] = value;
                });
            });
        }
        return collection;
    };
    collection.addClass = function (_classes) {
        var classes = _classes.split(" ");
        collection.forEach(function (element) {
            classes.forEach(function (_class) {
                element.classList.add(_class);
            });
        });
        return collection;
    };
    collection.removeClass = function (_classes) {
        var classes = _classes.split(" ");
        collection.forEach(function (element) {
            classes.forEach(function (_class) {
                element.classList.remove(_class);
            });
        });
        return collection;
    };
    collection.hasClass = function (_class) {
        return collection[0].classList.contains(_class);
    };
    collection.toggleClass = function (_classes) {
        var classes = _classes.split(" ");
        collection.forEach(function (element) {
            classes.forEach(function (_class) {
                if ($(element).hasClass(_class)) {
                    $(element).removeClass(_class);
                }
                else {
                    $(element).addClass(_class);
                }
            });
        });
        return collection;
    };
    collection.attr = function () {
        var attArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            attArgs[_i] = arguments[_i];
        }
        if (attArgs[1] === undefined) {
            return collection[0].getAttribute(attArgs[0]);
        }
        else {
            collection[0].setAttribute(attArgs[0], attArgs[1]);
        }
        return collection;
    };
    collection.template = function (template) {
        var regex = /{{(.*?)}}/gm;
        collection.forEach(function (element) {
            var newElem = document.createElement('div');
            var tempTemplate = template.slice();
            var parameters;
            while ((parameters = regex.exec(template)) !== null) {
                if (parameters.index === regex.lastIndex) {
                    regex.lastIndex++;
                }
                parameters.forEach(function (match) {
                    var _param = $(element).attr(match);
                    if (_param !== null) {
                        tempTemplate = tempTemplate.replace("{{" + match + "}}", _param);
                    }
                });
            }
            if (tempTemplate.includes("{{content}}")) {
                var newContent = "";
                for (var i = 0; i < element.children.length; i++) {
                    newContent += element.children[i].outerHTML;
                }
                tempTemplate = tempTemplate.replace("{{content}}", newContent);
            }
            else {
                for (var i = 0; i < element.children.length; i++) {
                    newElem.appendChild(element.children[i]);
                }
            }
            newElem.innerHTML = tempTemplate;
            element.replaceWith.apply(element, Array.from(newElem.childNodes));
        });
        return collection;
    };
    collection.show = function () {
        collection.forEach(function (element) {
            if (element.style.display !== "none")
                return;
            if (element.getAttribute("current-display") !== null) {
                element.style.display = element.getAttribute("current-display");
                element.removeAttribute("current-display");
            }
            else
                element.style.display = "block";
        });
        return collection;
    };
    collection.hide = function () {
        collection.forEach(function (element) {
            element.setAttribute("current-display", element.style.display);
            element.style.display = "none";
        });
        return collection;
    };
    collection.html = function (_html) {
        collection.forEach(function (element) {
            element.innerHTML = _html;
        });
        return collection;
    };
    collection.data = function () {
        var dataArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            dataArgs[_i] = arguments[_i];
        }
        if (dataArgs[1] === undefined) {
            return collection[0].getAttribute("data-" + dataArgs[0]);
        }
        else {
            collection[0].setAttribute("data-" + dataArgs[0], dataArgs[1]);
        }
        return collection;
    };
    collection.val = function (arg) {
        if (arg === null)
            return collection[0].value;
        else
            collection[0].value = arg;
        return collection[0];
    };
};
var $ = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (typeof args[0] === 'function') {
        var func = args[0];
        document.addEventListener('DOMContentLoaded', func);
    }
    else if (typeof args[0] === 'string') {
        var _selector = args[0];
        var _collection = document.querySelectorAll(_selector);
        selectedElements(_collection);
        return _collection;
    }
    else if (args[0] instanceof HTMLElement) {
        var _collection = [args[0]];
        selectedElements(_collection);
        return _collection;
    }
};
