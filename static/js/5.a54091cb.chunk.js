(this.webpackJsonpspacexhomework=this.webpackJsonpspacexhomework||[]).push([[5],{70:function(e,t,n){e.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=(r(n(1)),n(6)),a=r(i),s=r(n(7)),u=r(n(8)),c=r(n(9)),l=r(n(10)),d=r(n(11)),f=r(n(14)),h=[],p=!1,v={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},m=function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(p=!0),p)return h=(0,d.default)(h,v),(0,l.default)(h,v.once),h},b=function(){h=(0,f.default)(),m()},y=function(){h.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")}))},g=function(e){return!0===e||"mobile"===e&&c.default.mobile()||"phone"===e&&c.default.phone()||"tablet"===e&&c.default.tablet()||"function"==typeof e&&!0===e()},w=function(e){v=o(v,e),h=(0,f.default)();var t=document.all&&!window.atob;return g(v.disable)||t?y():(v.disableMutationObserver||u.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),v.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",v.easing),document.querySelector("body").setAttribute("data-aos-duration",v.duration),document.querySelector("body").setAttribute("data-aos-delay",v.delay),"DOMContentLoaded"===v.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?m(!0):"load"===v.startEvent?window.addEventListener(v.startEvent,(function(){m(!0)})):document.addEventListener(v.startEvent,(function(){m(!0)})),window.addEventListener("resize",(0,s.default)(m,v.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(m,v.debounceDelay,!0)),window.addEventListener("scroll",(0,a.default)((function(){(0,l.default)(h,v.once)}),v.throttleDelay)),v.disableMutationObserver||u.default.ready("[data-aos]",b),h)};e.exports={init:w,refresh:m,refreshHard:b}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function r(t){var n=v,r=m;return v=m=void 0,x=t,y=e.apply(r,n)}function i(e){return x=e,g=setTimeout(l,t),R?r(e):y}function a(e){var n=t-(e-w);return j?k(n,b-(e-x)):n}function u(e){var n=e-w;return void 0===w||n>=t||n<0||j&&e-x>=b}function l(){var e=S();return u(e)?d(e):void(g=setTimeout(l,a(e)))}function d(e){return g=void 0,E&&v?r(e):(v=m=void 0,y)}function f(){void 0!==g&&clearTimeout(g),x=0,v=w=m=g=void 0}function h(){return void 0===g?y:d(S())}function p(){var e=S(),n=u(e);if(v=arguments,m=this,w=e,n){if(void 0===g)return i(w);if(j)return g=setTimeout(l,t),r(w)}return void 0===g&&(g=setTimeout(l,t)),y}var v,m,b,y,g,w,x=0,R=!1,j=!1,E=!0;if("function"!=typeof e)throw new TypeError(c);return t=s(t)||0,o(n)&&(R=!!n.leading,b=(j="maxWait"in n)?O(s(n.maxWait)||0,t):b,E="trailing"in n?!!n.trailing:E),p.cancel=f,p.flush=h,p}function r(e,t,r){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError(c);return o(r)&&(i="leading"in r?!!r.leading:i,a="trailing"in r?!!r.trailing:a),n(e,t,{leading:i,maxWait:t,trailing:a})}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==d}function s(e){if("number"==typeof e)return e;if(a(e))return l;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var n=p.test(e);return n||v.test(e)?m(e.slice(2),n?2:8):h.test(e)?l:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",l=NaN,d="[object Symbol]",f=/^\s+|\s+$/g,h=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,v=/^0o[0-7]+$/i,m=parseInt,b="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=b||y||Function("return this")(),w=Object.prototype.toString,O=Math.max,k=Math.min,S=function(){return g.Date.now()};e.exports=r}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=v,r=m;return v=m=void 0,x=t,y=e.apply(r,n)}function i(e){return x=e,g=setTimeout(l,t),R?o(e):y}function s(e){var n=t-(e-S);return j?O(n,b-(e-x)):n}function c(e){var n=e-S;return void 0===S||n>=t||n<0||j&&e-x>=b}function l(){var e=k();return c(e)?d(e):void(g=setTimeout(l,s(e)))}function d(e){return g=void 0,E&&v?o(e):(v=m=void 0,y)}function f(){void 0!==g&&clearTimeout(g),x=0,v=S=m=g=void 0}function h(){return void 0===g?y:d(k())}function p(){var e=k(),n=c(e);if(v=arguments,m=this,S=e,n){if(void 0===g)return i(S);if(j)return g=setTimeout(l,t),o(S)}return void 0===g&&(g=setTimeout(l,t)),y}var v,m,b,y,g,S,x=0,R=!1,j=!1,E=!0;if("function"!=typeof e)throw new TypeError(u);return t=a(t)||0,r(n)&&(R=!!n.leading,b=(j="maxWait"in n)?w(a(n.maxWait)||0,t):b,E="trailing"in n?!!n.trailing:E),p.cancel=f,p.flush=h,p}function r(e){var t="undefined"==typeof e?"undefined":s(e);return!!e&&("object"==t||"function"==t)}function o(e){return!!e&&"object"==("undefined"==typeof e?"undefined":s(e))}function i(e){return"symbol"==("undefined"==typeof e?"undefined":s(e))||o(e)&&g.call(e)==l}function a(e){if("number"==typeof e)return e;if(i(e))return c;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=h.test(e);return n||p.test(e)?v(e.slice(2),n?2:8):f.test(e)?c:+e}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u="Expected a function",c=NaN,l="[object Symbol]",d=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,p=/^0o[0-7]+$/i,v=parseInt,m="object"==("undefined"==typeof t?"undefined":s(t))&&t&&t.Object===Object&&t,b="object"==("undefined"==typeof self?"undefined":s(self))&&self&&self.Object===Object&&self,y=m||b||Function("return this")(),g=Object.prototype.toString,w=Math.max,O=Math.min,k=function(){return y.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,r=void 0;for(t=0;t<e.length;t+=1){if((r=e[t]).dataset&&r.dataset.aos)return!0;if(r.children&&n(r.children))return!0}return!1}function r(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function o(){return!!r()}function i(e,t){var n=window.document,o=new(r())(a);s=t,o.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function a(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),r=Array.prototype.slice.call(e.removedNodes);if(n(t.concat(r)))return s()}))}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){};t.default={isSupported:o,ready:i}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,u=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=function(){function e(){n(this,e)}return o(e,[{key:"phone",value:function(){var e=r();return!(!i.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=r();return!(!s.test(e)&&!u.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new c},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var r=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof r&&("false"===r||!n&&"true"!==r)&&e.node.classList.remove("aos-animate")},r=function(e,t){var r=window.pageYOffset,o=window.innerHeight;e.forEach((function(e,i){n(e,o+r,t)}))};t.default=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(12)),i=function(e,t){return e.forEach((function(e,n){e.node.classList.add("aos-init"),e.position=(0,o.default)(e.node,t.offset)})),e};t.default=i},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(13)),i=function(e,t){var n=0,r=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(r=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,o.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(r=t),n+r};t.default=i},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,(function(e){return{node:e}}))};t.default=n}])},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var r=n(1),o=n(6),i=n(2),a=n(9),s=n(18),u=n(14),c=n(25),l=function(e){function t(t,n){var r;return(r=e.call(this)||this).client=t,r.options=n,r.trackedProps=[],r.bindMethods(),r.setOptions(n),r}Object(o.a)(t,e);var n=t.prototype;return n.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},n.onSubscribe=function(){1===this.listeners.length&&(this.currentQuery.addObserver(this),d(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},n.onUnsubscribe=function(){this.listeners.length||this.destroy()},n.shouldFetchOnReconnect=function(){return e=this.currentQuery,!1!==(t=this.options).enabled&&("always"===t.refetchOnReconnect||!1!==t.refetchOnReconnect&&h(e,t));var e,t},n.shouldFetchOnWindowFocus=function(){return e=this.currentQuery,!1!==(t=this.options).enabled&&("always"===t.refetchOnWindowFocus||!1!==t.refetchOnWindowFocus&&h(e,t));var e,t},n.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},n.setOptions=function(e,t){var n=this.options,r=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(e),"undefined"!==typeof this.options.enabled&&"boolean"!==typeof this.options.enabled)throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=n.queryKey),this.updateQuery();var o=this.hasListeners();o&&f(this.currentQuery,r,this.options,n)&&this.executeFetch(),this.updateResult(t),!o||this.currentQuery===r&&this.options.enabled===n.enabled&&this.options.staleTime===n.staleTime||this.updateStaleTimeout(),!o||this.currentQuery===r&&this.options.enabled===n.enabled&&this.options.refetchInterval===n.refetchInterval||this.updateRefetchInterval()},n.getOptimisticResult=function(e){var t=this.client.defaultQueryObserverOptions(e),n=this.client.getQueryCache().build(this.client,t);return this.createResult(n,t)},n.getCurrentResult=function(){return this.currentResult},n.trackResult=function(e){var t=this,n={};return Object.keys(e).forEach((function(r){Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:function(){var n=r;return t.trackedProps.includes(n)||t.trackedProps.push(n),e[n]}})})),n},n.getNextResult=function(e){var t=this;return new Promise((function(n,r){var o=t.subscribe((function(t){t.isFetching||(o(),t.isError&&(null==e?void 0:e.throwOnError)?r(t.error):n(t))}))}))},n.getCurrentQuery=function(){return this.currentQuery},n.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},n.refetch=function(e){return this.fetch(e)},n.fetchOptimistic=function(e){var t=this,n=this.client.defaultQueryObserverOptions(e),r=this.client.getQueryCache().build(this.client,n);return r.fetch().then((function(){return t.createResult(r,n)}))},n.fetch=function(e){var t=this;return this.executeFetch(e).then((function(){return t.updateResult(),t.currentResult}))},n.executeFetch=function(e){this.updateQuery();var t=this.currentQuery.fetch(this.options,e);return(null==e?void 0:e.throwOnError)||(t=t.catch(i.h)),t},n.updateStaleTimeout=function(){var e=this;if(this.clearStaleTimeout(),!i.e&&!this.currentResult.isStale&&Object(i.f)(this.options.staleTime)){var t=Object(i.p)(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout((function(){e.currentResult.isStale||e.updateResult()}),t)}},n.updateRefetchInterval=function(){var e=this;this.clearRefetchInterval(),!i.e&&!1!==this.options.enabled&&Object(i.f)(this.options.refetchInterval)&&(this.refetchIntervalId=setInterval((function(){(e.options.refetchIntervalInBackground||s.a.isFocused())&&e.executeFetch()}),this.options.refetchInterval))},n.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval()},n.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},n.clearStaleTimeout=function(){clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0},n.clearRefetchInterval=function(){clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0},n.createResult=function(e,t){var n,r,o=this.currentQuery,a=this.options,s=this.currentResult,u=this.currentResultState,l=this.currentResultOptions,p=e!==o,v=p?e.state:this.currentQueryInitialState,m=p?this.currentResult:this.previousQueryResult,b=e.state,y=b.dataUpdatedAt,g=b.error,w=b.errorUpdatedAt,O=b.isFetching,k=b.status,S=!1,x=!1;if(t.optimisticResults){var R=this.hasListeners(),j=!R&&d(e,t),E=R&&f(e,o,t,a);(j||E)&&(O=!0,y||(k="loading"))}if(t.keepPreviousData&&!b.dataUpdateCount&&(null==m?void 0:m.isSuccess)&&"error"!==k)n=m.data,y=m.dataUpdatedAt,k=m.status,S=!0;else if(t.select&&"undefined"!==typeof b.data)if(s&&b.data===(null==u?void 0:u.data)&&t.select===(null==l?void 0:l.select))n=s.data;else try{n=t.select(b.data),!1!==t.structuralSharing&&(n=Object(i.l)(null==s?void 0:s.data,n))}catch(T){Object(c.a)().error(T),g=T,w=Date.now(),k="error"}else n=b.data;"undefined"!==typeof t.placeholderData&&"undefined"===typeof n&&"loading"===k&&("undefined"!==typeof(r=(null==s?void 0:s.isPlaceholderData)&&t.placeholderData===(null==l?void 0:l.placeholderData)?s.data:"function"===typeof t.placeholderData?t.placeholderData():t.placeholderData)&&(k="success",n=r,x=!0));return{status:k,isLoading:"loading"===k,isSuccess:"success"===k,isError:"error"===k,isIdle:"idle"===k,data:n,dataUpdatedAt:y,error:g,errorUpdatedAt:w,failureCount:b.fetchFailureCount,isFetched:b.dataUpdateCount>0||b.errorUpdateCount>0,isFetchedAfterMount:b.dataUpdateCount>v.dataUpdateCount||b.errorUpdateCount>v.errorUpdateCount,isFetching:O,isLoadingError:"error"===k&&0===b.dataUpdatedAt,isPlaceholderData:x,isPreviousData:S,isRefetchError:"error"===k&&0!==b.dataUpdatedAt,isStale:h(e,t),refetch:this.refetch,remove:this.remove}},n.shouldNotifyListeners=function(e,t){if(!t)return!0;if(e===t)return!1;var n=this.options,r=n.notifyOnChangeProps,o=n.notifyOnChangePropsExclusions;if(!r&&!o)return!0;if("tracked"===r&&!this.trackedProps.length)return!0;var i="tracked"===r?this.trackedProps:r;return Object.keys(e).some((function(n){var r=n,a=e[r]!==t[r],s=null==i?void 0:i.some((function(e){return e===n})),u=null==o?void 0:o.some((function(e){return e===n}));return a&&!u&&(!i||s)}))},n.updateResult=function(e){var t=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!Object(i.n)(this.currentResult,t)){var n={cache:!0};!1!==(null==e?void 0:e.listeners)&&this.shouldNotifyListeners(this.currentResult,t)&&(n.listeners=!0),this.notify(Object(r.a)({},n,e))}},n.updateQuery=function(){var e=this.client.getQueryCache().build(this.client,this.options);if(e!==this.currentQuery){var t=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==t||t.removeObserver(this),e.addObserver(this))}},n.onQueryUpdate=function(e){var t={};"success"===e.type?t.onSuccess=!0:"error"===e.type&&(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()},n.notify=function(e){var t=this;a.a.batch((function(){e.onSuccess?(null==t.options.onSuccess||t.options.onSuccess(t.currentResult.data),null==t.options.onSettled||t.options.onSettled(t.currentResult.data,null)):e.onError&&(null==t.options.onError||t.options.onError(t.currentResult.error),null==t.options.onSettled||t.options.onSettled(void 0,t.currentResult.error)),e.listeners&&t.listeners.forEach((function(e){e(t.currentResult)})),e.cache&&t.client.getQueryCache().notify(t.currentQuery)}))},t}(u.a);function d(e,t){return function(e,t){return!1!==t.enabled&&!e.state.dataUpdatedAt&&!("error"===e.state.status&&!1===t.retryOnMount)}(e,t)||function(e,t){return!1!==t.enabled&&e.state.dataUpdatedAt>0&&("always"===t.refetchOnMount||!1!==t.refetchOnMount&&h(e,t))}(e,t)}function f(e,t,n,r){return!1!==n.enabled&&(e!==t||!1===r.enabled)&&h(e,n)}function h(e,t){return e.isStaleByTime(t.staleTime)}var p=n(0),v=n.n(p);function m(){var e=!1;return{clearReset:function(){e=!1},reset:function(){e=!0},isReset:function(){return e}}}var b=v.a.createContext(m()),y=n(63);function g(e,t){var n=v.a.useRef(!1),r=v.a.useState(0)[1],o=Object(y.b)(),i=v.a.useContext(b),s=o.defaultQueryObserverOptions(e);s.optimisticResults=!0,s.onError&&(s.onError=a.a.batchCalls(s.onError)),s.onSuccess&&(s.onSuccess=a.a.batchCalls(s.onSuccess)),s.onSettled&&(s.onSettled=a.a.batchCalls(s.onSettled)),s.suspense&&"number"!==typeof s.staleTime&&(s.staleTime=1e3),(s.suspense||s.useErrorBoundary)&&(i.isReset()||(s.retryOnMount=!1));var u=v.a.useRef();u.current||(u.current=new t(o,s));var c=u.current.getOptimisticResult(s);if(v.a.useEffect((function(){n.current=!0,i.clearReset();var e=u.current.subscribe(a.a.batchCalls((function(){n.current&&r((function(e){return e+1}))})));return u.current.updateResult(),function(){n.current=!1,e()}}),[i]),v.a.useEffect((function(){u.current.setOptions(s,{listeners:!1})}),[s]),s.suspense&&c.isLoading)throw u.current.fetchOptimistic(s).then((function(e){var t=e.data;null==s.onSuccess||s.onSuccess(t),null==s.onSettled||s.onSettled(t,null)})).catch((function(e){i.clearReset(),null==s.onError||s.onError(e),null==s.onSettled||s.onSettled(void 0,e)}));if((s.suspense||s.useErrorBoundary)&&c.isError)throw c.error;return"tracked"===s.notifyOnChangeProps&&(c=u.current.trackResult(c)),c}function w(e,t,n){return g(Object(i.j)(e,t,n),l)}}}]);
//# sourceMappingURL=5.a54091cb.chunk.js.map