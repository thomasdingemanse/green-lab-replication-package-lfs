(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{hkcL:function(e,t,n){"use strict";var r=n("q1tI"),a=n("TSYQ"),o=n.n(a),c=n("quNz"),i="NONE",u="RIGHT",l="LEFT",d="BOTH";t.a=function(e){var t=e.className,n=void 0===t?"":t,a=e.children,s=Object(r.useRef)(null),f=Object(r.useState)(i),b=f[0],v=f[1],m=function(){if(s.current){var e=i,t=s.current,n=t.scrollWidth,r=t.offsetWidth,a=t.scrollLeft,o=a>30,c=n-r-a>30;c&&o?e=d:c?e=u:o&&(e=l),e!==b&&v(e)}};Object(r.useEffect)((function(){m();var e=s.current;if(e)return e.addEventListener("scroll",m),window.addEventListener("resize",m),function(){e.removeEventListener("scroll",m),window.removeEventListener("resize",m)}}));var O=b===d||b===l,p=b===d||b===u,j="absolute top-0 h-full w-14 transition-opacity -mt-px from-white pointer-events-none z-10",h=o()(j,"left-0 bg-gradient-to-r -ml-px",{"opacity-0":!O,"opacity-1":O}),x=o()(j,"right-0 bg-gradient-to-l -mr-px",{"opacity-0":!p,"opacity-1":p});return Object(c.f)("div",{className:"relative w-full overflow-hidden ".concat(n)},Object(c.f)("span",{className:h,"aria-hidden":!0}),Object(c.f)("div",{className:"no-scrollbar-horizontal flex overflow-auto",ref:s},a),Object(c.f)("span",{className:x,"aria-hidden":!0}))}},i8Ci:function(e,t,n){"use strict";n.d(t,"a",(function(){return ne})),n.d(t,"c",(function(){return X})),n.d(t,"b",(function(){return B}));var r=n("q1tI"),a=n.n(r);n("17x9");function o(){return!("undefined"===typeof window||!window.document||!window.document.createElement)}var c=o()?r.useLayoutEffect:r.useEffect;function i(){}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){void 0===t&&(t={});var n;return n=u({descendants:[],registerDescendant:i,unregisterDescendant:i},t),Object(r.createContext)(n)}function d(e,t,n){var a=function(){var e=Object(r.useState)(Object.create(null))[1];return Object(r.useCallback)((function(){e(Object.create(null))}),[])}(),o=Object(r.useContext)(t),i=o.registerDescendant,l=o.unregisterDescendant,d=o.descendants,s=null!=n?n:d.findIndex((function(t){return t.element===e.element})),f=function(e){var t=Object(r.useRef)(null);return Object(r.useEffect)((function(){t.current=e}),[e]),t.current}(d),b=d.some((function(e,t){var n;return e.element!==(null==f||null==(n=f[t])?void 0:n.element)}));return c((function(){return e.element||a(),i(u({},e,{index:s})),function(){return l(e.element)}}),[a,s,i,b,l].concat(Object.values(e))),s}function s(){return Object(r.useState)([])}function f(e){var t=e.context,n=e.children,a=e.items,o=e.set,c=Object(r.useCallback)((function(e){var t=e.element,n=e.index,r=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["element","index"]);t&&o((function(e){var a;if(null!=n)a=[].concat(e,[u({},r,{element:t,index:n})]);else if(0===e.length)a=[].concat(e,[u({},r,{element:t,index:0})]);else if(e.find((function(e){return e.element===t})))a=e;else{var o=e.findIndex((function(e){return!(!e.element||!t)&&Boolean(e.element.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_PRECEDING)})),c=u({},r,{element:t,index:o});a=-1===o?[].concat(e,[c]):[].concat(e.slice(0,o),[c],e.slice(o))}return a.map((function(e,t){return u({},e,{index:t})}))}))}),[]),i=Object(r.useCallback)((function(e){e&&o((function(t){return t.filter((function(t){return e!==t.element}))}))}),[]);return Object(r.createElement)(t.Provider,{value:Object(r.useMemo)((function(){return{descendants:a,registerDescendant:c,unregisterDescendant:i}}),[a,c,i])},n)}function b(){return!("undefined"===typeof window||!window.document||!window.document.createElement)}function v(e){var t=function(e){return b()?e?e.ownerDocument:document:null}(e);return t?t.defaultView||window:null}function m(e,t){var n;return(null==(n=function(e){var t=v(e);return t?t.getComputedStyle(e,null):null}(e))?void 0:n.getPropertyValue(t))||null}var O=b()?r.useLayoutEffect:r.useEffect;function p(e,t){return Object(r.createContext)(t)}function j(e){return!(!e||"[object Function]"!={}.toString.call(e))}function h(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).join("--")}function x(){}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"===typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function g(e,t){if(null!=e)if(j(e))e(t);else try{e.current=t}catch(n){throw new Error('Cannot assign value "'+t+'" to ref "'+e+'"')}}function E(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(r.useCallback)((function(e){for(var n,r=y(t);!(n=r()).done;){g(n.value,e)}}),t)}function I(e,t){return function(n){if(e&&e(n),!n.defaultPrevented)return t(n)}}function N(){return!("undefined"===typeof window||!window.document||!window.document.createElement)}var k=N()?r.useLayoutEffect:r.useEffect,C=!1,A=0,R=function(){return++A};function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function D(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var T,L,P=l(),z=l(),U=p(0,{});!function(e){e.Auto="auto",e.Manual="manual"}(T||(T={})),function(e){e.Horizontal="horizontal",e.Vertical="vertical"}(L||(L={}));var F=Object(r.forwardRef)((function(e,t){var n,a=e.as,o=void 0===a?"div":a,c=e.children,i=e.defaultIndex,u=e.orientation,l=void 0===u?L.Horizontal:u,d=e.index,b=void 0===d?void 0:d,v=e.keyboardActivation,m=void 0===v?T.Auto:v,O=e.onChange,p=e.readOnly,w=void 0!==p&&p,y=D(e,["as","children","defaultIndex","orientation","index","keyboardActivation","onChange","readOnly"]),g=Object(r.useRef)(null!=b),E=function(e){var t=e||(C?R():null),n=Object(r.useState)(t),a=n[0],o=n[1];return k((function(){null===a&&o(R())}),[]),Object(r.useEffect)((function(){!1===C&&(C=!0)}),[]),null!=a?String(a):void 0}(y.id),I=null!=(n=y.id)?n:h("tabs",E),N=Object(r.useRef)(!1),A=Object(r.useRef)(null),z=Object(r.useRef)(!1),F=function(e,t){var n=Object(r.useRef)(null!=e),a=Object(r.useState)(t),o=a[0],c=a[1],i=Object(r.useCallback)((function(e){n.current||c(e)}),[]);return[n.current?e:o,i]}(b,null!=i?i:0),H=F[0],K=F[1],M=Object(r.useState)(-1),_=M[0],q=M[1],B=s(),W=B[0],V=B[1],J=Object(r.useMemo)((function(){return{focusedIndex:_,id:I,isControlled:g.current,isRTL:z,keyboardActivation:m,onFocusPanel:function(){A.current&&j(A.current.focus)&&A.current.focus()},onSelectTab:w?x:function(e){N.current=!0,O&&O(e),K(e)},onSelectTabWithKeyboard:w?x:function(e){switch(N.current=!0,m){case T.Manual:var t=W[e]&&W[e].element;return void(t&&j(t.focus)&&t.focus());case T.Auto:default:return O&&O(e),void K(e)}},orientation:l,selectedIndex:H,selectedPanelRef:A,setFocusedIndex:q,setSelectedIndex:K,userInteractedRef:N}}),[_,I,m,O,l,w,H,K,W]);return Object(r.createElement)(f,{context:P,items:W,set:V},Object(r.createElement)(U.Provider,{value:J},Object(r.createElement)(o,S({},y,{ref:t,"data-reach-tabs":"","data-orientation":l,id:y.id}),j(c)?c({focusedIndex:_,id:I,selectedIndex:H}):c)))}));var H=Object(r.forwardRef)((function(e,t){var n,a=e.children,o=e.as,c=void 0===o?"div":o,i=e.onKeyDown,u=D(e,["children","as","onKeyDown"]),l=Object(r.useContext)(U),d=l.focusedIndex,s=l.isControlled,f=l.isRTL,b=l.keyboardActivation,v=l.onSelectTabWithKeyboard,p=l.orientation,j=l.selectedIndex,h=l.setSelectedIndex,x=(n=P,Object(r.useContext)(n).descendants),w=Object(r.useRef)(null),y=E(t,w);Object(r.useEffect)((function(){w.current&&(w.current.ownerDocument&&"rtl"===w.current.ownerDocument.dir||"rtl"===m(w.current,"direction"))&&(f.current=!0)}),[f]);var g=I(i,function(e,t){var n=Object(r.useContext)(e).descendants,a=t.callback,o=t.currentIndex,c=t.filter,i=t.key,u=void 0===i?"index":i,l=t.orientation,d=void 0===l?"vertical":l,s=t.rotate,f=void 0===s||s,b=t.rtl,v=void 0!==b&&b;return function(e){if(["ArrowDown","ArrowUp","ArrowLeft","ArrowRight","PageUp","PageDown","Home","End"].includes(e.key)){var t=null!=o?o:-1,r=c?n.filter(c):n;if(c&&(t=r.findIndex((function(e){return e.index===o}))),r.length)switch(e.key){case"ArrowDown":if("vertical"===d||"both"===d){e.preventDefault();var i=h();a("option"===u?i:i[u])}break;case"ArrowUp":if("vertical"===d||"both"===d){e.preventDefault();var l=x();a("option"===u?l:l[u])}break;case"ArrowLeft":if("horizontal"===d||"both"===d){e.preventDefault();var s=(v?h:x)();a("option"===u?s:s[u])}break;case"ArrowRight":if("horizontal"===d||"both"===d){e.preventDefault();var b=(v?x:h)();a("option"===u?b:b[u])}break;case"PageUp":e.preventDefault();var m=(e.ctrlKey?x:w)();a("option"===u?m:m[u]);break;case"Home":e.preventDefault();var O=w();a("option"===u?O:O[u]);break;case"PageDown":e.preventDefault();var p=(e.ctrlKey?h:y)();a("option"===u?p:p[u]);break;case"End":e.preventDefault();var j=y();a("option"===u?j:j[u])}}function h(){return t===r.length-1?f?w():r[t]:r[(t+1)%r.length]}function x(){return 0===t?f?y():r[t]:r[(t-1+r.length)%r.length]}function w(){return r[0]}function y(){return r[r.length-1]}}}(P,{currentIndex:b===T.Manual?d:j,orientation:p,rotate:!0,callback:v,filter:function(e){return!e.disabled},rtl:f.current}));return O((function(){var e,t;if(!s&&("true"===(t=null==(e=x[j])?void 0:e.disabled)||function(e){return"boolean"===typeof e}(t)&&t)){var n=x.find((function(e){return!e.disabled}));n&&h(n.index)}}),[x,s,j,h]),Object(r.createElement)(c,S({role:"tablist","aria-orientation":p},u,{"data-reach-tab-list":"",ref:y,onKeyDown:g}),r.Children.map(a,(function(e,t){return function(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),o=2;o<n;o++)a[o-2]=arguments[o];return Object(r.isValidElement)(e)?r.cloneElement.apply(void 0,[e,t].concat(a)):e}(e,{isSelected:t===j})})))}));var K=Object(r.memo)(H);var M=Object(r.forwardRef)((function(e,t){e.isSelected;var n=e.children,a=e.as,o=void 0===a?"button":a,c=e.index,i=e.disabled,u=e.onBlur,l=e.onFocus,s=D(e,["isSelected","children","as","index","disabled","onBlur","onFocus"]),f=Object(r.useContext)(U),b=f.id,v=f.onSelectTab,m=f.orientation,O=f.selectedIndex,p=f.userInteractedRef,x=f.setFocusedIndex,w=Object(r.useRef)(null),y=E(t,w),g=d({element:w.current,disabled:!!i},P,c),N="button"===o&&null==s.type?"button":s.type,k=g===O;return function(e,t){var n=Object(r.useRef)(!1);Object(r.useEffect)((function(){n.current?e():n.current=!0}),t)}((function(){k&&w.current&&p.current&&(p.current=!1,j(w.current.focus)&&w.current.focus())}),[k,p]),Object(r.createElement)(o,S({"aria-controls":h(b,"panel",g),"aria-disabled":i,"aria-selected":k,role:"tab",tabIndex:k?0:-1},s,{ref:y,"data-reach-tab":"","data-orientation":m,"data-selected":k?"":void 0,disabled:i,id:h(b,"tab",g),onClick:function(){v(g)},onFocus:I(l,(function(){x(g)})),onBlur:I(u,(function(){x(-1)})),type:N}),n)}));var _=Object(r.forwardRef)((function(e,t){var n=e.children,a=e.as,o=void 0===a?"div":a,c=D(e,["children","as"]),i=E(Object(r.useRef)(),t),u=s(),l=u[0],d=u[1];return Object(r.createElement)(f,{context:z,items:l,set:d},Object(r.createElement)(o,S({},c,{ref:i,"data-reach-tab-panels":""}),n))}));var q=Object(r.memo)(_);var B=Object(r.forwardRef)((function(e,t){var n=e.children;e["aria-label"];var a=e.as,o=void 0===a?"div":a,c=D(e,["children","aria-label","as"]),i=Object(r.useContext)(U),u=i.selectedPanelRef,l=i.selectedIndex,s=i.id,f=Object(r.useRef)(null),b=d({element:f.current},z),v=h(s,"panel",b),m=b===l,O=Object(r.useRef)(!1),p=!!O.current&&!m;Object(r.useEffect)((function(){O.current=!0}),[]);var j=E(t,f,m?u:null);return Object(r.createElement)(o,S({"aria-labelledby":h(s,"tab",b),hidden:p,role:"tabpanel",tabIndex:m?0:-1},c,{ref:j,"data-reach-tab-panel":"",id:v}),n)}));var W=n("HALo"),V=n("xvhg"),J=n("dhJC"),G=n("hkcL"),Q=n("ZWqC"),Y=n("INdA"),Z=n("quNz"),$=function(e){var t=e.imageUrl,n=e.text,r=e.className,a=void 0===r?"":r,o=e.altText,c=void 0===o?"":o,i=Object(J.a)(e,["imageUrl","text","className","altText"]);return Object(Z.f)("div",Object(W.a)({className:"md:flex items-center ".concat(a)},i),Object(Z.f)("img",{src:t,alt:c,className:"h-6 mb-2 md:mb-0 md:mr-2 md:inline-block"}),Object(Z.f)(Y.e,{size:"m",className:"md:inline-block text-gray-500"},n))},X=function(e){var t=e.children,n=e.onChange,r=void 0===n?Q.C:n,o=e.sponsorLabelImgUrl,c=e.sponsorLabelText,i=e.className,u=void 0===i?"":i,l=e.sponsorLabelAltText,d=e.tabs,s=e.initialTabIndex,f=void 0===s?0:s,b=Object(J.a)(e,["children","onChange","sponsorLabelImgUrl","sponsorLabelText","className","sponsorLabelAltText","tabs","initialTabIndex"]),v=c&&o,m=a.a.useState(f),O=Object(V.a)(m,2),p=O[0],j=O[1];return Object(Z.f)("div",Object(W.a)({className:u},b),Object(Z.f)(F,{index:p,className:"tabs",onChange:function(e){j(e),r(e)},keyboardActivation:"manual"},Object(Z.f)(G.a,{className:"tabs-overflow-container"},Object(Z.f)(K,{className:"flex flex-nowrap w-full"},d)),v&&Object(Z.f)($,{imageUrl:o,text:c,altText:l,className:"mt-8 md:mt-12 xl:mt-16 mb-6"}),Object(Z.f)(q,null,t)))},ee=n("TSYQ"),te=n.n(ee),ne=function(e){var t=e.description,n=e.children,r=te()("group outline-inside text-gray-500 hover:text-gray-700 focus:text-gray-700 transition-colors pr-3 pl-3 first:pl-0 last:pr-0 relative",{"md:pr-4 md:pl-4 xl:pr-5 xl:pl-5":!t,"md:pr-5 md:pl-5 xl:pr-6 xl:pl-6":t}),a=te()("relative tab-text pb-3",{"md:pb-4":t});return Object(Z.f)(M,{className:r},Object(Z.f)("div",{className:a},Object(Z.f)(Y.a,{size:"m",className:"whitespace-nowrap out"},n),t&&Object(Z.f)(Y.e,{size:"m",className:"text-left"},t)))}}}]);
//# sourceMappingURL=82656b9ba144dab9ca997a98d35f47c9a002909d.ca6984cbdeac3d0debdd.js.map