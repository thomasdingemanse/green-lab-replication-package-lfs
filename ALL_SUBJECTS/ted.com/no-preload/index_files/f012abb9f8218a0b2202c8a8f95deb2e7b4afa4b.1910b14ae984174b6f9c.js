(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"2uUO":function(e,t,n){"use strict";var r=n("q1tI"),u=n("i8i4");n("17x9");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var a=["as","style"],o=Object(r.forwardRef)((function(e,t){var n=e.as,u=void 0===n?"span":n,o=e.style,i=void 0===o?{}:o,l=function(e,t){if(null==e)return{};var n,r,u={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(u[n]=e[n]);return u}(e,a);return Object(r.createElement)(u,c({ref:t,style:c({border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"},i)},l))}));function i(e){return"undefined"!==typeof window&&window.document&&window.document.createElement?e?e.ownerDocument:document:null}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function s(e,t){if(null!=e)if(function(e){return!(!e||"[object Function]"!={}.toString.call(e))}(e))e(t);else try{e.current=t}catch(n){throw new Error('Cannot assign value "'+t+'" to ref "'+e+'"')}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var b,v=["as","children","type"],m={polite:-1,assertive:-1},p={polite:{},assertive:{}},O={polite:null,assertive:null},j=Object(r.forwardRef)((function(e,t){var n=e.as,u=void 0===n?"div":n,c=e.children,a=e.type,o=void 0===a?"polite":a,l=function(e,t){if(null==e)return{};var n,r,u={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(u[n]=e[n]);return u}(e,v),b=Object(r.useRef)(null),m=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(r.useCallback)((function(e){for(var n,r=f(t);!(n=r()).done;)s(n.value,e)}),t)}(t,b),p=Object(r.useMemo)((function(){return Object(r.createElement)(u,d({},l,{ref:m,"data-reach-alert":!0}),c)}),[c,l]);return function(e,t,n){var u=function(e){var t=Object(r.useRef)(null);return Object(r.useEffect)((function(){t.current=e}),[e]),t.current}(e),c=Object(r.useRef)(null),a=Object(r.useRef)(!1);Object(r.useEffect)((function(){var r=i(n.current);a.current?u!==e?(c.current&&c.current.unmount(),c.current=y(e,r),c.current.mount(t)):c.current&&c.current.update(t):(a.current=!0,c.current=y(e,r),c.current.mount(t))}),[t,e,u,n]),Object(r.useEffect)((function(){return function(){c.current&&c.current.unmount()}}),[])}(o,p,b),p}));function y(e,t){var n=++m[e];return{mount:function r(u){if(O[e])p[e][n]=u,w();else{var c=t.createElement("div");c.setAttribute("data-reach-live-"+e,"true"),O[e]=c,t.body.appendChild(O[e]),r(u)}},update:function(t){p[e][n]=t,w()},unmount:function(){delete p[e][n],w()}}}function w(){null!=b&&window.clearTimeout(b),b=window.setTimeout((function(){Object.keys(p).forEach((function(e){var t=e;O[t]&&Object(u.render)(Object(r.createElement)(o,{as:"div"},Object(r.createElement)("div",{role:"assertive"===t?"alert":"status","aria-live":t},Object.keys(p[t]).map((function(e){return Object(r.cloneElement)(p[t][e],{key:e,ref:null})})))),O[t])}))}),500)}t.a=j},"3cjB":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("q1tI");function u(){return!("undefined"===typeof window||!window.document||!window.document.createElement)}var c=u()?r.useLayoutEffect:r.useEffect;var a=n("i8i4"),o=function(e){var t=e.children,n=e.type,u=void 0===n?"reach-portal":n,o=e.containerRef,i=Object(r.useRef)(null),l=Object(r.useRef)(null),f=function(){var e=Object(r.useState)(Object.create(null))[1];return Object(r.useCallback)((function(){e(Object.create(null))}),[])}();return c((function(){if(i.current){var e=i.current.ownerDocument,t=(null==o?void 0:o.current)||e.body;return l.current=null==e?void 0:e.createElement(u),t.appendChild(l.current),f(),function(){l.current&&t&&t.removeChild(l.current)}}}),[u,f,o]),l.current?Object(a.createPortal)(t,l.current):Object(r.createElement)("span",{ref:i})};t.b=o},JbWz:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e.Info="INFO",e.Error="ERROR"}(r||(r={}))},knJi:function(e,t,n){"use strict";n.d(t,"a",(function(){return y})),n.d(t,"b",(function(){return w}));var r=n("q1tI"),u=n.n(r),c=n("sdp5"),a=n("3tXg"),o=n("3cjB"),i=n("TSYQ"),l=n.n(i),f=n("2uUO"),s=n("sy41"),d=n("JbWz"),b=n("quNz"),v=function(e){var t=e.message,n=e.variant,r=void 0===n?d.a.Info:n,u=e.onDismiss,c=r===d.a.Info,a=r===d.a.Error,o=l()("mt-2 flex items-start justify-between rounded-md p-4",{"bg-blue-500 text-white":c,"bg-red-300 text-black":a});return Object(b.f)("div",{className:o},Object(b.f)(f.a,null,t),Object(b.f)("div",{className:"h-3"},Object(b.f)("button",{type:"button",className:"-translate-y-1 transform","aria-label":"Dismiss alert",onClick:u},Object(b.f)(s.e,{iconName:"x",className:"text-2xl"}))))},m=function(e){var t=e.alerts,n=e.setAlerts;return Object(b.f)(o.b,null,Object(b.f)("div",{className:"fixed bottom-4 left-4 z-50 w-11/12 sm:pr-4 md:w-1/3 lg:w-1/4"},Object(b.f)(c.a,{initial:!0},t.map((function(e,t){return Object(b.f)(a.a.div,{key:e.key,initial:{opacity:0,y:"100%"},animate:{opacity:1,y:0},exit:{opacity:0,y:"100%"}},Object(b.f)(v,{message:e.message,variant:e.variant,onDismiss:function(){return n((function(e){return e.filter((function(e,n){return n!==t}))}))}}))})))))},p=n("xvhg"),O=u.a.createContext(null),j=0;function y(e){var t=e.children,n=u.a.useState([]),r=Object(p.a)(n,2),c=r[0],a=r[1],o=u.a.useCallback((function(e){var t=e.message,n=e.variant;j+=1,a((function(e){return e.concat([{message:t,variant:n,key:j}])}))}),[]);return u.a.useEffect((function(){var e=setTimeout((function(){a((function(e){return e.slice(1)}))}),3e3);return function(){clearTimeout(e)}}),[c]),Object(b.f)(O.Provider,{value:o},t,Object(b.f)(m,{alerts:c,setAlerts:a}))}function w(){var e=u.a.useContext(O);if(null==e)throw new Error('Called "useSendAlert()" from outside a ToasterProvider');return e}}}]);
//# sourceMappingURL=f012abb9f8218a0b2202c8a8f95deb2e7b4afa4b.1910b14ae984174b6f9c.js.map