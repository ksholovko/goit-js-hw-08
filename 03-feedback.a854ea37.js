function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,p=function(){return l.Date.now()};function g(t,e,n){var r,o,i,f,u,a,c=0,l=!1,s=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=r,i=o;return r=o=void 0,c=e,f=t.apply(i,n)}function j(t){return c=t,u=setTimeout(O,e),l?y(t):f}function h(t){var n=t-a;return void 0===a||n>=e||n<0||s&&t-c>=i}function O(){var t=p();if(h(t))return T(t);u=setTimeout(O,function(t){var n=e-(t-a);return s?v(n,i-(t-c)):n}(t))}function T(t){return u=void 0,g&&r?y(t):(r=o=void 0,f)}function w(){var t=p(),n=h(t);if(r=arguments,o=this,a=t,n){if(void 0===u)return j(a);if(s)return u=setTimeout(O,e),y(a)}return void 0===u&&(u=setTimeout(O,e)),f}return e=m(e)||0,b(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(m(n.maxWait)||0,e):i,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=a=o=u=void 0},w.flush=function(){return void 0===u?f:T(p())},w}function b(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(b(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=b(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var n=i.test(t);return n||f.test(t)?u(t.slice(2),n?2:8):o.test(t)?NaN:+t}e=function(t,e,n){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(t,e,{leading:r,maxWait:e,trailing:o})};const y=document.querySelector(".feedback-form");let j={};y.addEventListener("input",t(e)((function(t){j[t.target.name]=t.target.value;const e=JSON.stringify(j);localStorage.setItem("feedback-form-state",e)}),500)),y.addEventListener("submit",(function(t){t.preventDefault(),t.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),console.log(j),j={}})),function(){const t=localStorage.getItem("feedback-form-state");if(!t)return;const e=JSON.parse(t);Object.entries(e).forEach((([t,e])=>{y[t].value=e})),j=e}();
//# sourceMappingURL=03-feedback.a854ea37.js.map