import {cash} from "./core";

cash.loop = (func, delay: number) => {
	setTimeout(function(){
		func();
		cash.loop.apply(null, [func,delay]);
	}, delay);
}