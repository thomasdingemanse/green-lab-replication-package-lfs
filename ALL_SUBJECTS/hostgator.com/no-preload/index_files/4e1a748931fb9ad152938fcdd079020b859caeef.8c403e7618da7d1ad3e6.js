(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+eav":function(t,e,n){var o=n("zWQs"),r=Math.max,i=Math.min;t.exports=function(t,e){return(t=o(t))<0?r(t+e,0):i(t,e)}},"/6KZ":function(t,e,n){var o=n("41F1"),r=n("TaGV"),i=n("8Xl/"),u=n("PPkd"),s=n("qA3Z"),a=function(t,e,n){var c,f,l,p=t&a.F,h=t&a.G,d=t&a.S,y=t&a.P,v=t&a.B,m=t&a.W,g=h?r:r[e]||(r[e]={}),b=g.prototype,w=h?o:d?o[e]:(o[e]||{}).prototype;for(c in h&&(n=e),n)(f=!p&&w&&void 0!==w[c])&&s(g,c)||(l=f?w[c]:n[c],g[c]=h&&"function"!=typeof w[c]?n[c]:v&&f?i(l,o):m&&w[c]==l?function(t){var e=function(e,n,o){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,o)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):y&&"function"==typeof l?i(Function.call,l):l,y&&((g.virtual||(g.virtual={}))[c]=l,t&a.R&&b&&!b[c]&&u(b,c,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},"/Lgp":function(t,e,n){var o=n("Qqke"),r=n("miGZ");t.exports=Object.keys||function(t){return o(t,r)}},"/Vl9":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"0HwX":function(t,e,n){var o=n("kBaS"),r=n("zJT+"),i=n("T/1i"),u=n("HbTz"),s=n("qA3Z"),a=n("UTwT"),c=Object.getOwnPropertyDescriptor;e.f=n("lBnu")?c:function(t,e){if(t=i(t),e=u(e,!0),a)try{return c(t,e)}catch(n){}if(s(t,e))return r(!o.f.call(t,e),t[e])}},"0Sp3":function(t,e,n){var o=n("67sl")("wks"),r=n("ct/D"),i=n("41F1").Symbol,u="function"==typeof i;(t.exports=function(t){return o[t]||(o[t]=u&&i[t]||(u?i:r)("Symbol."+t))}).store=o},"2lBV":function(t,e,n){"use strict";e.__esModule=!0;var o,r=n("yO+b"),i=(o=r)&&o.__esModule?o:{default:o};e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,i.default)(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}()},"37T1":function(t,e,n){"use strict";var o=n("z3wr"),r=n.n(o),i=n("r0ML"),u=n.n(i),s=n("U8ue"),a=n.n(s),c=n("T5ou"),f=u.a.createElement,l=function(t){var e=t.sectionClass,n=t.path,o=t.autoplay,u=t.loop,s=t.delay,l=t.playOnVisible,p=t.dimensions,h=t.dimensionsTablet,d=t.dimensionsLaptop,y=t.dimensionsDesktop,v=Object(i.useRef)(),m=Object(c.b)(v),g=Object(i.useState)(!1),b=g[0],w=g[1],S=Object(i.useState)(!0),x=S[0],O=S[1],_={loop:u,autoplay:o,path:n.startsWith("//assets.ctfassets.net")?n:"/static/cs/anim/".concat(n),rendererSettings:{preserveAspectRatio:"xMidYMid slice"}};return Object(i.useEffect)((function(){l&&w(!m)})),Object(i.useEffect)((function(){l||setTimeout((function(){O(!1)}),s)}),[]),f("div",{ref:v,className:r.a.dynamic([["4088717000",[p.width,p.height,p.offsetX,p.offsetY,h.width?"width: ".concat(h.width,";"):"",h.height?"height: ".concat(h.height,";"):"",h.offsetX||h.offsetY?"transform: translate(".concat(h.offsetX||0,"px, ").concat(h.offsetY||0,"px);"):"",d.width?"width: ".concat(d.width,";"):"",d.height?"height: ".concat(d.height,";"):"",d.offsetX||d.offsetY?"transform: translate(".concat(d.offsetX||0,"px, ").concat(d.offsetY||0,"px);"):"",y.width?"width: ".concat(y.width,";"):"",y.height?"height: ".concat(y.height,";"):"",y.offsetX||y.offsetY?"transform: translate(".concat(y.offsetX||0,"px, ").concat(y.offsetY||0,"px);"):""]]])+" "+"lottie ".concat(e)},f(r.a,{id:"4088717000",dynamic:[p.width,p.height,p.offsetX,p.offsetY,h.width?"width: ".concat(h.width,";"):"",h.height?"height: ".concat(h.height,";"):"",h.offsetX||h.offsetY?"transform: translate(".concat(h.offsetX||0,"px, ").concat(h.offsetY||0,"px);"):"",d.width?"width: ".concat(d.width,";"):"",d.height?"height: ".concat(d.height,";"):"",d.offsetX||d.offsetY?"transform: translate(".concat(d.offsetX||0,"px, ").concat(d.offsetY||0,"px);"):"",y.width?"width: ".concat(y.width,";"):"",y.height?"height: ".concat(y.height,";"):"",y.offsetX||y.offsetY?"transform: translate(".concat(y.offsetX||0,"px, ").concat(y.offsetY||0,"px);"):""]},[".lottie.__jsx-style-dynamic-selector{width:".concat(p.width,";height:").concat(p.height,";-webkit-transform:translate( ").concat(p.offsetX,"px, ").concat(p.offsetY,"px );-ms-transform:translate( ").concat(p.offsetX,"px, ").concat(p.offsetY,"px );transform:translate( ").concat(p.offsetX,"px, ").concat(p.offsetY,"px );}"),"@media (min-width:768px){.lottie.__jsx-style-dynamic-selector{".concat(h.width?"width: ".concat(h.width,";"):""," ").concat(h.height?"height: ".concat(h.height,";"):""," ").concat(h.offsetX||h.offsetY?"transform: translate(".concat(h.offsetX||0,"px, ").concat(h.offsetY||0,"px);"):"",";}}"),"@media (min-width:992px){.lottie.__jsx-style-dynamic-selector{".concat(d.width?"width: ".concat(d.width,";"):""," ").concat(d.height?"height: ".concat(d.height,";"):""," ").concat(d.offsetX||d.offsetY?"transform: translate(".concat(d.offsetX||0,"px, ").concat(d.offsetY||0,"px);"):"",";}}"),"@media (min-width:1200px){.lottie.__jsx-style-dynamic-selector{".concat(y.width?"width: ".concat(y.width,";"):""," ").concat(y.height?"height: ".concat(y.height,";"):""," ").concat(y.offsetX||y.offsetY?"transform: translate(".concat(y.offsetX||0,"px, ").concat(y.offsetY||0,"px);"):"",";}}")]),f(a.a,{options:_,isPaused:l&&"undefined"!==l?b:x}))};l.defaultProps={sectionClass:"",autoplay:!0,loop:!1,delay:0,dimensions:{width:"100%",height:"100%",offsetX:0,offsetY:0},dimensionsTablet:{width:"",height:"",offsetX:0,offsetY:0},dimensionsLaptop:{width:"",height:""},dimensionsDesktop:{width:"",height:""}},e.a=l},"3cwG":function(t,e,n){var o=n("dCrc"),r=n("GCLZ");n("qNvu")("getPrototypeOf",(function(){return function(t){return r(o(t))}}))},"41F1":function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},"4Xtu":function(t,e,n){n("YlUf")("asyncIterator")},"5BpW":function(t,e,n){t.exports=n("PPkd")},"5gKE":function(t,e,n){var o=n("41F1").document;t.exports=o&&o.documentElement},"67sl":function(t,e,n){var o=n("TaGV"),r=n("41F1"),i=r["__core-js_shared__"]||(r["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:o.version,mode:n("gtwY")?"pure":"global",copyright:"\xa9 2020 Denis Pushkarev (zloirock.ru)"})},"6wgB":function(t,e,n){var o=n("g2rQ");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},"7oj+":function(t,e,n){t.exports={default:n("GyeN"),__esModule:!0}},"8Xl/":function(t,e,n){var o=n("HD3J");t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,r){return t.call(e,n,o,r)}}return function(){return t.apply(e,arguments)}}},"ADe/":function(t,e,n){var o=n("fGh/");t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},AFnJ:function(t,e,n){n("CAwg"),t.exports=n("TaGV").Object.assign},CAwg:function(t,e,n){var o=n("/6KZ");o(o.S+o.F,"Object",{assign:n("tbIA")})},Cs9m:function(t,e,n){"use strict";var o=n("o3C2"),r=n("TTxG"),i=n("N9zW"),u=n("T/1i");t.exports=n("gMWQ")(Array,"Array",(function(t,e){this._t=u(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,r(1)):r(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},"Dkg+":function(t,e,n){"use strict";e.__esModule=!0;var o,r=n("wv3L"),i=(o=r)&&o.__esModule?o:{default:o};e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"===typeof e?"undefined":(0,i.default)(e))&&"function"!==typeof e?t:e}},E6Ca:function(t,e,n){var o=n("/6KZ");o(o.S,"Object",{setPrototypeOf:n("WbNG").set})},"G+Zn":function(t,e,n){var o=n("ADe/"),r=n("n6P+"),i=n("miGZ"),u=n("Q5TA")("IE_PROTO"),s=function(){},a=function(){var t,e=n("m/Uw")("iframe"),o=i.length;for(e.style.display="none",n("5gKE").appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;o--;)delete a.prototype[i[o]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(s.prototype=o(t),n=new s,s.prototype=null,n[u]=t):n=a(),void 0===e?n:r(n,e)}},GCLZ:function(t,e,n){var o=n("qA3Z"),r=n("dCrc"),i=n("Q5TA")("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),o(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},Gjrs:function(t,e,n){"use strict";e.__esModule=!0;var o=u(n("rIjD")),r=u(n("7oj+")),i=u(n("wv3L"));function u(t){return t&&t.__esModule?t:{default:t}}e.default=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+("undefined"===typeof e?"undefined":(0,i.default)(e)));t.prototype=(0,r.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(o.default?(0,o.default)(t,e):t.__proto__=e)}},GyeN:function(t,e,n){n("XmXP");var o=n("TaGV").Object;t.exports=function(t,e){return o.create(t,e)}},HD3J:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},HbTz:function(t,e,n){var o=n("fGh/");t.exports=function(t,e){if(!o(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!o(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},IH2s:function(t,e,n){var o=n("/6KZ");o(o.S+o.F*!n("lBnu"),"Object",{defineProperty:n("eOWL").f})},Jh4J:function(t,e,n){var o=n("g2rQ");t.exports=Array.isArray||function(t){return"Array"==o(t)}},KELd:function(t,e,n){n("MRte"),n("iKhv"),n("4Xtu"),n("UvcN"),t.exports=n("TaGV").Symbol},Kdq7:function(t,e,n){var o=n("zWQs"),r=n("Xj5l");t.exports=function(t){return function(e,n){var i,u,s=String(r(e)),a=o(n),c=s.length;return a<0||a>=c?t?"":void 0:(i=s.charCodeAt(a))<55296||i>56319||a+1===c||(u=s.charCodeAt(a+1))<56320||u>57343?t?s.charAt(a):i:t?s.slice(a,a+2):u-56320+(i-55296<<10)+65536}}},KyLU:function(t,e,n){t.exports={default:n("KELd"),__esModule:!0}},Kz1y:function(t,e,n){"use strict";e.__esModule=!0;var o,r=n("PSh9"),i=(o=r)&&o.__esModule?o:{default:o};e.default=i.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}},LPDj:function(t,e,n){n("E6Ca"),t.exports=n("TaGV").Object.setPrototypeOf},MRte:function(t,e,n){"use strict";var o=n("41F1"),r=n("qA3Z"),i=n("lBnu"),u=n("/6KZ"),s=n("5BpW"),a=n("hYpR").KEY,c=n("/Vl9"),f=n("67sl"),l=n("sWB5"),p=n("ct/D"),h=n("0Sp3"),d=n("eTWF"),y=n("YlUf"),v=n("T4P6"),m=n("Jh4J"),g=n("ADe/"),b=n("fGh/"),w=n("dCrc"),S=n("T/1i"),x=n("HbTz"),O=n("zJT+"),_=n("G+Zn"),T=n("dn9X"),j=n("0HwX"),P=n("phsM"),k=n("eOWL"),L=n("/Lgp"),M=j.f,E=k.f,A=T.f,G=o.Symbol,C=o.JSON,D=C&&C.stringify,W=h("_hidden"),X=h("toPrimitive"),Y={}.propertyIsEnumerable,F=f("symbol-registry"),B=f("symbols"),N=f("op-symbols"),Z=Object.prototype,R="function"==typeof G&&!!P.f,V=o.QObject,z=!V||!V.prototype||!V.prototype.findChild,I=i&&c((function(){return 7!=_(E({},"a",{get:function(){return E(this,"a",{value:7}).a}})).a}))?function(t,e,n){var o=M(Z,e);o&&delete Z[e],E(t,e,n),o&&t!==Z&&E(Z,e,o)}:E,q=function(t){var e=B[t]=_(G.prototype);return e._k=t,e},K=R&&"symbol"==typeof G.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof G},U=function(t,e,n){return t===Z&&U(N,e,n),g(t),e=x(e,!0),g(n),r(B,e)?(n.enumerable?(r(t,W)&&t[W][e]&&(t[W][e]=!1),n=_(n,{enumerable:O(0,!1)})):(r(t,W)||E(t,W,O(1,{})),t[W][e]=!0),I(t,e,n)):E(t,e,n)},J=function(t,e){g(t);for(var n,o=v(e=S(e)),r=0,i=o.length;i>r;)U(t,n=o[r++],e[n]);return t},Q=function(t){var e=Y.call(this,t=x(t,!0));return!(this===Z&&r(B,t)&&!r(N,t))&&(!(e||!r(this,t)||!r(B,t)||r(this,W)&&this[W][t])||e)},H=function(t,e){if(t=S(t),e=x(e,!0),t!==Z||!r(B,e)||r(N,e)){var n=M(t,e);return!n||!r(B,e)||r(t,W)&&t[W][e]||(n.enumerable=!0),n}},$=function(t){for(var e,n=A(S(t)),o=[],i=0;n.length>i;)r(B,e=n[i++])||e==W||e==a||o.push(e);return o},tt=function(t){for(var e,n=t===Z,o=A(n?N:S(t)),i=[],u=0;o.length>u;)!r(B,e=o[u++])||n&&!r(Z,e)||i.push(B[e]);return i};R||(s((G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===Z&&e.call(N,n),r(this,W)&&r(this[W],t)&&(this[W][t]=!1),I(this,t,O(1,n))};return i&&z&&I(Z,t,{configurable:!0,set:e}),q(t)}).prototype,"toString",(function(){return this._k})),j.f=H,k.f=U,n("sqS1").f=T.f=$,n("kBaS").f=Q,P.f=tt,i&&!n("gtwY")&&s(Z,"propertyIsEnumerable",Q,!0),d.f=function(t){return q(h(t))}),u(u.G+u.W+u.F*!R,{Symbol:G});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)h(et[nt++]);for(var ot=L(h.store),rt=0;ot.length>rt;)y(ot[rt++]);u(u.S+u.F*!R,"Symbol",{for:function(t){return r(F,t+="")?F[t]:F[t]=G(t)},keyFor:function(t){if(!K(t))throw TypeError(t+" is not a symbol!");for(var e in F)if(F[e]===t)return e},useSetter:function(){z=!0},useSimple:function(){z=!1}}),u(u.S+u.F*!R,"Object",{create:function(t,e){return void 0===e?_(t):J(_(t),e)},defineProperty:U,defineProperties:J,getOwnPropertyDescriptor:H,getOwnPropertyNames:$,getOwnPropertySymbols:tt});var it=c((function(){P.f(1)}));u(u.S+u.F*it,"Object",{getOwnPropertySymbols:function(t){return P.f(w(t))}}),C&&u(u.S+u.F*(!R||c((function(){var t=G();return"[null]"!=D([t])||"{}"!=D({a:t})||"{}"!=D(Object(t))}))),"JSON",{stringify:function(t){for(var e,n,o=[t],r=1;arguments.length>r;)o.push(arguments[r++]);if(n=e=o[1],(b(e)||void 0!==t)&&!K(t))return m(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!K(e))return e}),o[1]=e,D.apply(C,o)}}),G.prototype[X]||n("PPkd")(G.prototype,X,G.prototype.valueOf),l(G,"Symbol"),l(Math,"Math",!0),l(o.JSON,"JSON",!0)},N9zW:function(t,e){t.exports={}},PPkd:function(t,e,n){var o=n("eOWL"),r=n("zJT+");t.exports=n("lBnu")?function(t,e,n){return o.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},PSh9:function(t,e,n){t.exports={default:n("AFnJ"),__esModule:!0}},Q5TA:function(t,e,n){var o=n("67sl")("keys"),r=n("ct/D");t.exports=function(t){return o[t]||(o[t]=r(t))}},Qqke:function(t,e,n){var o=n("qA3Z"),r=n("T/1i"),i=n("zeFm")(!1),u=n("Q5TA")("IE_PROTO");t.exports=function(t,e){var n,s=r(t),a=0,c=[];for(n in s)n!=u&&o(s,n)&&c.push(n);for(;e.length>a;)o(s,n=e[a++])&&(~i(c,n)||c.push(n));return c}},"T/1i":function(t,e,n){var o=n("6wgB"),r=n("Xj5l");t.exports=function(t){return o(r(t))}},T4P6:function(t,e,n){var o=n("/Lgp"),r=n("phsM"),i=n("kBaS");t.exports=function(t){var e=o(t),n=r.f;if(n)for(var u,s=n(t),a=i.f,c=0;s.length>c;)a.call(t,u=s[c++])&&e.push(u);return e}},T5ou:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u}));var o=n("aNYv"),r=n("r0ML"),i=function(t){var e=null;if(document.querySelector(t)){var n=document.querySelector(t).getBoundingClientRect();e=n.bottom>0&&n.top<window.innerHeight}return e},u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0px",n=Object(r.useState)(),i=n[0],u=n[1];return Object(r.useEffect)((function(){var n=new IntersectionObserver((function(t){var e=Object(o.a)(t,1)[0];u(e.isIntersecting)}),{rootMargin:e,threshold:.5});return t.current&&n.observe(t.current),function(){n.unobserve(t.current)}}),[]),i}},TTxG:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},TaGV:function(t,e){var n=t.exports={version:"2.6.12"};"number"==typeof __e&&(__e=n)},U8ue:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=p(n("Kz1y")),r=p(n("YUSd")),i=p(n("Zv/C")),u=p(n("2lBV")),s=p(n("Dkg+")),a=p(n("Gjrs")),c=p(n("r0ML")),f=p(n("W0B4")),l=p(n("c3D3"));function p(t){return t&&t.__esModule?t:{default:t}}var h=function(t){function e(){var t,n,o,u;(0,i.default)(this,e);for(var a=arguments.length,c=Array(a),f=0;f<a;f++)c[f]=arguments[f];return n=o=(0,s.default)(this,(t=e.__proto__||(0,r.default)(e)).call.apply(t,[this].concat(c))),o.handleClickToPause=function(){o.anim.isPaused?o.anim.play():o.anim.pause()},u=n,(0,s.default)(o,u)}return(0,a.default)(e,t),(0,u.default)(e,[{key:"componentDidMount",value:function(){var t=this.props,e=t.options,n=t.eventListeners,r=e.loop,i=e.autoplay,u=e.animationData,s=e.rendererSettings,a=e.segments;this.options={container:this.el,renderer:"svg",loop:!1!==r,autoplay:!1!==i,segments:!1!==a,animationData:u,rendererSettings:s},this.options=(0,o.default)({},this.options,e),this.anim=l.default.loadAnimation(this.options),this.registerEvents(n)}},{key:"componentWillUpdate",value:function(t){this.options.animationData!==t.options.animationData&&(this.deRegisterEvents(this.props.eventListeners),this.destroy(),this.options=(0,o.default)({},this.options,t.options),this.anim=l.default.loadAnimation(this.options),this.registerEvents(t.eventListeners))}},{key:"componentDidUpdate",value:function(){this.props.isStopped?this.stop():this.props.segments?this.playSegments():this.play(),this.pause(),this.setSpeed(),this.setDirection()}},{key:"componentWillUnmount",value:function(){this.deRegisterEvents(this.props.eventListeners),this.destroy(),this.options.animationData=null,this.anim=null}},{key:"setSpeed",value:function(){this.anim.setSpeed(this.props.speed)}},{key:"setDirection",value:function(){this.anim.setDirection(this.props.direction)}},{key:"play",value:function(){this.anim.play()}},{key:"playSegments",value:function(){this.anim.playSegments(this.props.segments)}},{key:"stop",value:function(){this.anim.stop()}},{key:"pause",value:function(){this.props.isPaused&&!this.anim.isPaused?this.anim.pause():!this.props.isPaused&&this.anim.isPaused&&this.anim.pause()}},{key:"destroy",value:function(){this.anim.destroy()}},{key:"registerEvents",value:function(t){var e=this;t.forEach((function(t){e.anim.addEventListener(t.eventName,t.callback)}))}},{key:"deRegisterEvents",value:function(t){var e=this;t.forEach((function(t){e.anim.removeEventListener(t.eventName,t.callback)}))}},{key:"render",value:function(){var t=this,e=this.props,n=e.width,r=e.height,i=e.ariaRole,u=e.ariaLabel,s=e.isClickToPauseDisabled,a=e.title,f=function(t){return"number"===typeof t?t+"px":t||"100%"},l=(0,o.default)({width:f(n),height:f(r),overflow:"hidden",margin:"0 auto",outline:"none"},this.props.style),p=s?function(){return null}:this.handleClickToPause;return c.default.createElement("div",{ref:function(e){t.el=e},style:l,onClick:p,title:a,role:i,"aria-label":u,tabIndex:"0"})}}]),e}(c.default.Component);e.default=h,h.propTypes={eventListeners:f.default.arrayOf(f.default.object),options:f.default.object.isRequired,height:f.default.oneOfType([f.default.string,f.default.number]),width:f.default.oneOfType([f.default.string,f.default.number]),isStopped:f.default.bool,isPaused:f.default.bool,speed:f.default.number,segments:f.default.arrayOf(f.default.number),direction:f.default.number,ariaRole:f.default.string,ariaLabel:f.default.string,isClickToPauseDisabled:f.default.bool,title:f.default.string},h.defaultProps={eventListeners:[],isStopped:!1,isPaused:!1,speed:1,ariaRole:"button",ariaLabel:"animation",isClickToPauseDisabled:!1,title:""}},UTwT:function(t,e,n){t.exports=!n("lBnu")&&!n("/Vl9")((function(){return 7!=Object.defineProperty(n("m/Uw")("div"),"a",{get:function(){return 7}}).a}))},UvcN:function(t,e,n){n("YlUf")("observable")},WbNG:function(t,e,n){var o=n("fGh/"),r=n("ADe/"),i=function(t,e){if(r(t),!o(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,o){try{(o=n("8Xl/")(Function.call,n("0HwX").f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(r){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:o(t,n),t}}({},!1):void 0),check:i}},WwSA:function(t,e,n){"use strict";var o=n("Kdq7")(!0);n("gMWQ")(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=o(e,n),this._i+=t.length,{value:t,done:!1})}))},Xj5l:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},XmXP:function(t,e,n){var o=n("/6KZ");o(o.S,"Object",{create:n("G+Zn")})},YUSd:function(t,e,n){t.exports={default:n("n+bS"),__esModule:!0}},YlUf:function(t,e,n){var o=n("41F1"),r=n("TaGV"),i=n("gtwY"),u=n("eTWF"),s=n("eOWL").f;t.exports=function(t){var e=r.Symbol||(r.Symbol=i?{}:o.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:u.f(t)})}},"Zv/C":function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},bztI:function(t,e,n){n("IH2s");var o=n("TaGV").Object;t.exports=function(t,e,n){return o.defineProperty(t,e,n)}},"ct/D":function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36))}},dCrc:function(t,e,n){var o=n("Xj5l");t.exports=function(t){return Object(o(t))}},dR8c:function(t,e,n){"use strict";var o=n("G+Zn"),r=n("zJT+"),i=n("sWB5"),u={};n("PPkd")(u,n("0Sp3")("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=o(u,{next:r(1,n)}),i(t,e+" Iterator")}},dn9X:function(t,e,n){var o=n("T/1i"),r=n("sqS1").f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return r(t)}catch(e){return u.slice()}}(t):r(o(t))}},eOWL:function(t,e,n){var o=n("ADe/"),r=n("UTwT"),i=n("HbTz"),u=Object.defineProperty;e.f=n("lBnu")?Object.defineProperty:function(t,e,n){if(o(t),e=i(e,!0),o(n),r)try{return u(t,e,n)}catch(s){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},eR4j:function(t,e,n){t.exports={default:n("gSCB"),__esModule:!0}},eTWF:function(t,e,n){e.f=n("0Sp3")},"fGh/":function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},g2rQ:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},gMWQ:function(t,e,n){"use strict";var o=n("gtwY"),r=n("/6KZ"),i=n("5BpW"),u=n("PPkd"),s=n("N9zW"),a=n("dR8c"),c=n("sWB5"),f=n("GCLZ"),l=n("0Sp3")("iterator"),p=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,e,n,d,y,v,m){a(n,e,d);var g,b,w,S=function(t){if(!p&&t in T)return T[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},x=e+" Iterator",O="values"==y,_=!1,T=t.prototype,j=T[l]||T["@@iterator"]||y&&T[y],P=j||S(y),k=y?O?S("entries"):P:void 0,L="Array"==e&&T.entries||j;if(L&&(w=f(L.call(new t)))!==Object.prototype&&w.next&&(c(w,x,!0),o||"function"==typeof w[l]||u(w,l,h)),O&&j&&"values"!==j.name&&(_=!0,P=function(){return j.call(this)}),o&&!m||!p&&!_&&T[l]||u(T,l,P),s[e]=P,s[x]=h,y)if(g={values:O?P:S("values"),keys:v?P:S("keys"),entries:k},m)for(b in g)b in T||i(T,b,g[b]);else r(r.P+r.F*(p||_),e,g);return g}},gSCB:function(t,e,n){n("WwSA"),n("k/kI"),t.exports=n("eTWF").f("iterator")},gou2:function(t,e,n){var o=n("zWQs"),r=Math.min;t.exports=function(t){return t>0?r(o(t),9007199254740991):0}},gtwY:function(t,e){t.exports=!0},hYpR:function(t,e,n){var o=n("ct/D")("meta"),r=n("fGh/"),i=n("qA3Z"),u=n("eOWL").f,s=0,a=Object.isExtensible||function(){return!0},c=!n("/Vl9")((function(){return a(Object.preventExtensions({}))})),f=function(t){u(t,o,{value:{i:"O"+ ++s,w:{}}})},l=t.exports={KEY:o,NEED:!1,fastKey:function(t,e){if(!r(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,o)){if(!a(t))return"F";if(!e)return"E";f(t)}return t[o].i},getWeak:function(t,e){if(!i(t,o)){if(!a(t))return!0;if(!e)return!1;f(t)}return t[o].w},onFreeze:function(t){return c&&l.NEED&&a(t)&&!i(t,o)&&f(t),t}}},iKhv:function(t,e){},"k/kI":function(t,e,n){n("Cs9m");for(var o=n("41F1"),r=n("PPkd"),i=n("N9zW"),u=n("0Sp3")("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),a=0;a<s.length;a++){var c=s[a],f=o[c],l=f&&f.prototype;l&&!l[u]&&r(l,u,c),i[c]=i.Array}},kBaS:function(t,e){e.f={}.propertyIsEnumerable},lBnu:function(t,e,n){t.exports=!n("/Vl9")((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},"m/Uw":function(t,e,n){var o=n("fGh/"),r=n("41F1").document,i=o(r)&&o(r.createElement);t.exports=function(t){return i?r.createElement(t):{}}},miGZ:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"n+bS":function(t,e,n){n("3cwG"),t.exports=n("TaGV").Object.getPrototypeOf},"n6P+":function(t,e,n){var o=n("eOWL"),r=n("ADe/"),i=n("/Lgp");t.exports=n("lBnu")?Object.defineProperties:function(t,e){r(t);for(var n,u=i(e),s=u.length,a=0;s>a;)o.f(t,n=u[a++],e[n]);return t}},o3C2:function(t,e){t.exports=function(){}},phsM:function(t,e){e.f=Object.getOwnPropertySymbols},qA3Z:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},qNvu:function(t,e,n){var o=n("/6KZ"),r=n("TaGV"),i=n("/Vl9");t.exports=function(t,e){var n=(r.Object||{})[t]||Object[t],u={};u[t]=e(n),o(o.S+o.F*i((function(){n(1)})),"Object",u)}},rIjD:function(t,e,n){t.exports={default:n("LPDj"),__esModule:!0}},sWB5:function(t,e,n){var o=n("eOWL").f,r=n("qA3Z"),i=n("0Sp3")("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,i)&&o(t,i,{configurable:!0,value:e})}},sqS1:function(t,e,n){var o=n("Qqke"),r=n("miGZ").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return o(t,r)}},tbIA:function(t,e,n){"use strict";var o=n("lBnu"),r=n("/Lgp"),i=n("phsM"),u=n("kBaS"),s=n("dCrc"),a=n("6wgB"),c=Object.assign;t.exports=!c||n("/Vl9")((function(){var t={},e={},n=Symbol(),o="abcdefghijklmnopqrst";return t[n]=7,o.split("").forEach((function(t){e[t]=t})),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=o}))?function(t,e){for(var n=s(t),c=arguments.length,f=1,l=i.f,p=u.f;c>f;)for(var h,d=a(arguments[f++]),y=l?r(d).concat(l(d)):r(d),v=y.length,m=0;v>m;)h=y[m++],o&&!p.call(d,h)||(n[h]=d[h]);return n}:c},wv3L:function(t,e,n){"use strict";e.__esModule=!0;var o=u(n("eR4j")),r=u(n("KyLU")),i="function"===typeof r.default&&"symbol"===typeof o.default?function(t){return typeof t}:function(t){return t&&"function"===typeof r.default&&t.constructor===r.default&&t!==r.default.prototype?"symbol":typeof t};function u(t){return t&&t.__esModule?t:{default:t}}e.default="function"===typeof r.default&&"symbol"===i(o.default)?function(t){return"undefined"===typeof t?"undefined":i(t)}:function(t){return t&&"function"===typeof r.default&&t.constructor===r.default&&t!==r.default.prototype?"symbol":"undefined"===typeof t?"undefined":i(t)}},"yO+b":function(t,e,n){t.exports={default:n("bztI"),__esModule:!0}},"zJT+":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},zWQs:function(t,e){var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)}},zeFm:function(t,e,n){var o=n("T/1i"),r=n("gou2"),i=n("+eav");t.exports=function(t){return function(e,n,u){var s,a=o(e),c=r(a.length),f=i(u,c);if(t&&n!=n){for(;c>f;)if((s=a[f++])!=s)return!0}else for(;c>f;f++)if((t||f in a)&&a[f]===n)return t||f||0;return!t&&-1}}}}]);