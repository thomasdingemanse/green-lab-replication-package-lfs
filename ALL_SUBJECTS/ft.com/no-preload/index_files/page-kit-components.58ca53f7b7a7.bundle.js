(window.webpackJsonp=window.webpackJsonp||[]).push([["page-kit-components"],{"2e1dcbec":function(e,t,n){"use strict";n.r(t),n.d(t,"loadFlags",(function(){return r})),n.d(t,"Flags",(function(){return a})),n.d(t,"init",(function(){return i}));var o=n("6f4bf588");function r(){return Object(o.loadDataEmbed)("page-kit-flags-embed")}class a{constructor(e){this.flags=Object.freeze(e)}get(e){return this.flags.hasOwnProperty(e)?this.flags[e]:void 0}getAll(){return this.flags}}const i=()=>{const e=r();return new a(e)}},"6f4bf588":function(e,t,n){"use strict";function o(e){const t=document.getElementById(e);let n={};if(t)try{n=JSON.parse(t.innerHTML)}catch(e){console.error("Data embed error",e)}return Object.freeze(n)}n.r(t),n.d(t,"loadDataEmbed",(function(){return o})),n.d(t,"init",(function(){}))},"9d24bbd0":function(e,t,n){"use strict";n.r(t),n.d(t,"init",(function(){return q}));var o=n("e8cff377");const r=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o.default.init(e.rootElement)};var a=n("21867433");var i={init:function(e){const t=e.querySelector("[data-o-header-search]"),n=t&&e.querySelectorAll(`[aria-controls="${t.id}"]`);if(null===n||0===n.length)return;const o=[],r=function(e,n){"open"===e?(o.push(n.currentTarget),t.querySelector('[name="q"]').focus()):o.length&&o.pop().focus()};for(let e=0,o=n.length;e<o;e++)new a.default(n[e],{target:t,callback:r})}};const c=[];function s(e){return-1!==c.indexOf(e)}function d(e,t){t&&e.classList.add("o-header__mega--animation"),e.setAttribute("aria-hidden","false"),e.setAttribute("aria-expanded","true"),e.dispatchEvent(new CustomEvent("oHeader.MegaMenuShow",{bubbles:!0})),c.push(e)}function u(e){e.classList.remove("o-header__mega--animation"),e.setAttribute("aria-hidden","true"),e.setAttribute("aria-expanded","false"),e.dispatchEvent(new CustomEvent("oHeader.MegaMenuHide",{bubbles:!0})),c.splice(c.indexOf(e),1)}var l={init:function(e){const t=Array.from(e.querySelectorAll("[data-o-header-mega]")),n=t.map(e=>e.parentNode);t.forEach(e=>{e.setAttribute("aria-hidden","true"),e.setAttribute("aria-expanded","false")}),n.forEach((e,n)=>function(e,t){let n;e.addEventListener("mouseenter",()=>{clearTimeout(n),s(t)||(n=setTimeout(()=>{c.length?(u(c[0]),d(t,!1)):d(t,!0)},300))}),document.addEventListener("keydown",e=>{const n=e.key||e.keyCode;"Escape"!==n&&"Esc"!==n&&27!==n||s(t)&&u(t)}),e.addEventListener("mouseleave",()=>{clearTimeout(n),n=setTimeout(()=>s(t)&&u(t),400)})}(e,t[n]))},show:d,hide:u};function f(e,t,n){let o;const r=e=>{27===e.keyCode&&t()},a=n=>{e.contains(n.target)||t()},i=()=>{clearTimeout(o)},c=()=>{window.innerWidth>=e.offsetWidth&&(o=setTimeout(t,1e3))},s=t=>{const n=t.relatedTarget||t.target;e.contains(n)||e.focus()},d=e=>{if(9===e.keyCode){const t=n[0],o=n[n.length-1];e.shiftKey||e.target!==o?e.shiftKey&&e.target===t&&(o.focus(),e.preventDefault()):(t.focus(),e.preventDefault())}};return{addEvents:()=>{e.addEventListener("mouseenter",i),e.addEventListener("mouseleave",c),document.addEventListener("click",a),document.addEventListener("touchstart",a),document.addEventListener("keydown",r),document.addEventListener("focusin",s),document.addEventListener("focusout",s),e.addEventListener("keydown",d)},removeEvents:()=>{clearTimeout(o),e.removeEventListener("mouseenter",i),e.removeEventListener("mouseleave",c),document.removeEventListener("click",a),document.removeEventListener("touchstart",a),document.removeEventListener("keydown",r),document.removeEventListener("focusin",s),document.removeEventListener("focusout",s),e.removeEventListener("keydown",d)},handleMouseleave:c}}function h(e,t,n){t?n.forEach(e=>{e.removeAttribute("tabindex")}):n.forEach(e=>{e.setAttribute("tabindex","-1")})}var m={init:function(){const e=document.body.querySelector("[data-o-header-drawer]");if(!e)return;const t=Array.from(e.querySelectorAll("a, button, input, select"));h(0,!1,t),function(e){const t=e.querySelectorAll('[id^="o-header-drawer-child-"]');Array.from(t).forEach(t=>{const n=e.querySelector(`[aria-controls="${t.id}"]`);t.setAttribute("aria-hidden","true"),new a.default(n,{target:t,callback:e=>{n.textContent=n.textContent.replace(/fewer|more/,"open"===e?"fewer":"more")}})})}(e),function(e,t){let n,o;function r(r,a){"close"===r?(h(e,!1,t),n.removeEvents(),o.focus()):(h(e,!0,t),setTimeout(n.addEvents,300),o=a.currentTarget,setTimeout(()=>{const t=e.querySelector("a, button, input, select");t?t.focus():e.focus()})),e.classList.toggle("o-header__drawer--closing","close"===r),e.classList.toggle("o-header__drawer--opening","open"===r)}Array.from(document.body.querySelectorAll(`[aria-controls="${e.id}"]`)).forEach(o=>{const i=new a.default(o,{target:e,callback:r});n||(n=f(e,i.toggle,t))}),e.tabIndex=-1}(e,t),setTimeout(()=>{e.removeAttribute("data-o-header-drawer--no-js"),e.setAttribute("data-o-header-drawer--js","true")})},handleCloseEvents:f},v=n("6d36580f");var p={init:function(e){const t=e.querySelector("[data-o-header-subnav]");if(null===t)return;const n=Array.from(t.getElementsByTagName("button")),o=t.querySelector("[data-o-header-subnav-wrapper]");let r;const a=o.clientWidth;function i(e){return e.className.match(/left|right/).pop()}function c(){r=o.scrollWidth,n.forEach(e=>{if("left"===i(e))e.disabled=0===o.scrollLeft;else{const t=r-a-o.scrollLeft;e.disabled=t<=1}})}function s(e){let t=100;if("left"===i(e.currentTarget))t=-1*(o.scrollLeft>t?t:o.scrollLeft);else{const e=r-a-o.scrollLeft;t=e>t?t:e}o.scrollLeft=o.scrollLeft+t,c()}o.addEventListener("scroll",v.throttle(c,100)),window.addEventListener("oViewport.resize",c),n.forEach(e=>{e.onclick=s}),function(){const e=o.querySelector("[aria-current]");if(e){const t=e.getBoundingClientRect().right;if(t>a){let e=t-a;e=e>a/2?t:a/2,o.scrollTo(e,0)}}c()}()}};var b={init:function(e){if(!e.hasAttribute("data-o-header--sticky"))return;let t,n,o,r;function a(){const o=window.pageYOffset||window.scrollY,a=o>t;if(e.classList.toggle("o-header--sticky-active",a),a!==r&&(r=a,e.dispatchEvent(new CustomEvent("oHeader.Sticky",{bubbles:!0,detail:{isActive:a}}))),Math.abs(o-n)>20){const t=n<o;e.classList.toggle("o-header--sticky-scroll-down",a&&t),e.classList.toggle("o-header--sticky-scroll-up",a&&!t)}n=o}function i(){window.removeEventListener("scroll",i),window.addEventListener("scroll",c),function e(){t=window.innerHeight/2,o=window.requestAnimationFrame(()=>{a(),e()})}()}const c=Object(v.debounce)((function(){o&&window.cancelAnimationFrame(o),window.removeEventListener("scroll",c),window.addEventListener("scroll",i)}),300);window.addEventListener("scroll",i),a()}};class g{constructor(e){e?"string"==typeof e&&(e=document.querySelector(e)):e=document.querySelector('[data-o-component="o-header"]'),e.hasAttribute("data-o-header--js")||(this.headerEl=e,i.init(this.headerEl),l.init(this.headerEl),m.init(this.headerEl),p.init(this.headerEl),b.init(this.headerEl),this.headerEl.removeAttribute("data-o-header--no-js"),this.headerEl.setAttribute("data-o-header--js",""))}static init(e){return e||(e=document.body),e instanceof HTMLElement||(e=document.querySelector(e)),/\bo-header\b/.test(e.getAttribute("data-o-component"))?new g(e):[].map.call(e.querySelectorAll('[data-o-component="o-header"]'),e=>{if(!e.hasAttribute("data-o-header--js"))return new g(e)}).filter(e=>void 0!==e)}}var E=g;const w=()=>{E.init(),document.removeEventListener("o.DOMContentLoaded",w)};"undefined"!=typeof document&&document.addEventListener("o.DOMContentLoaded",w);var y=E,L=n("3a8f0c89");const A=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=document.querySelectorAll(".o-header [data-n-topic-search], .o-header__drawer [data-n-topic-search]");t.forEach(t=>{new L.default(t,e)}),y.init(e.rootElement)};var k=n("62c6128b");n("3c7622ff");function S(){k.default.init()}function q(){let{headerOptions:e={},footerOptions:t={}}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};S(),A(e),r(t)}},c735c384:function(e,t,n){"use strict";n.r(t),n.d(t,"init",(function(){return a}));class o{constructor(e){this.appContext=Object.freeze(e.appContext)}get(e){return this.appContext.hasOwnProperty(e)?this.appContext[e]:void 0}getAll(){return this.appContext}}var r=n("6f4bf588");function a(){const e=Object(r.loadDataEmbed)("page-kit-app-context"),t=new o({appContext:e});return console.log("Page Kit app context:",t.getAll()),t}},f0b1d25f:function(e,t,n){}}]);
//# sourceMappingURL=page-kit-components.58ca53f7b7a7.bundle.js.map