(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{q9CF:function(t,e,r){"use strict";r.d(e,"a",(function(){return J}));var n=r("mrSG"),a=r("q1tI"),o=r("2OET"),i=r("N3fz"),s=r("7LaZ"),l=r("Mu++"),c=r("EuEu"),m=r("KuiD");function u(t,e){return Object.keys(t).reduce((function(r,a){return r[a]=Object(n.__assign)({timeZone:e},t[a]),r}),{})}function f(t,e){return Object.keys(Object(n.__assign)(Object(n.__assign)({},t),e)).reduce((function(r,a){return r[a]=Object(n.__assign)(Object(n.__assign)({},t[a]||{}),e[a]||{}),r}),{})}function g(t,e){if(!e)return t;var r=l.a.formats;return Object(n.__assign)(Object(n.__assign)(Object(n.__assign)({},r),t),{date:f(u(r.date,e),u(t.date||{},e)),time:f(u(r.time,e),u(t.time||{},e))})}function d(t,e,r,a,o){var i=t.locale,l=t.formats,u=t.messages,f=t.defaultLocale,d=t.defaultFormats,b=t.onError,p=t.timeZone,v=t.defaultRichTextElements;void 0===r&&(r={id:""});var y=r.id,h=r.defaultMessage;Object(s.a)(!!y,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var _=String(y),O=u&&Object.prototype.hasOwnProperty.call(u,_)&&u[_];if(Array.isArray(O)&&1===O.length&&O[0].type===m.a.literal)return O[0].value;if(!a&&O&&"string"===typeof O&&!v)return O.replace(/'\{(.*?)\}'/gi,"{$1}");if(a=Object(n.__assign)(Object(n.__assign)({},v),a||{}),l=g(l,p),d=g(d,p),!O){if((!h||i&&i.toLowerCase()!==f.toLowerCase())&&b(new c.f(r,i)),h)try{return e.getMessageFormat(h,f,d,o).format(a)}catch(j){return b(new c.d('Error formatting default message for: "'+_+'", rendering default message verbatim',i,r,j)),"string"===typeof h?h:_}return _}try{return e.getMessageFormat(O,i,l,Object(n.__assign)({formatters:e},o||{})).format(a)}catch(j){b(new c.d('Error formatting message: "'+_+'", using '+(h?"default message":"id")+" as fallback.",i,r,j))}if(h)try{return e.getMessageFormat(h,f,d,o).format(a)}catch(j){b(new c.d('Error formatting the default message for: "'+_+'", rendering message verbatim',i,r,j))}return"string"===typeof O?O:"string"===typeof h?h:_}var b=r("1VXf"),p=["localeMatcher","style","currency","currencyDisplay","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem"];function v(t,e,r){var n=t.locale,a=t.formats,o=t.onError;void 0===r&&(r={});var i=r.format,s=i&&Object(b.e)(a,"number",i,o)||{};return e(n,Object(b.d)(r,p,s))}function y(t,e,r,n){void 0===n&&(n={});try{return v(t,e,n).format(r)}catch(a){t.onError(new c.a(c.b.FORMAT_ERROR,"Error formatting number.",a))}return String(r)}function h(t,e,r,n){void 0===n&&(n={});try{return v(t,e,n).formatToParts(r)}catch(a){t.onError(new c.a(c.b.FORMAT_ERROR,"Error formatting number.",a))}return[]}var _=r("BqEn"),O=["numeric","style"];function j(t,e,r,n,a){void 0===a&&(a={}),n||(n="second"),Intl.RelativeTimeFormat||t.onError(new _.b('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n',_.a.MISSING_INTL_API));try{return function(t,e,r){var n=t.locale,a=t.formats,o=t.onError;void 0===r&&(r={});var i=r.format,s=!!i&&Object(b.e)(a,"relative",i,o)||{};return e(n,Object(b.d)(r,O,s))}(t,e,a).format(r,n)}catch(o){t.onError(new c.d("Error formatting relative time.",o))}return String(r)}var E=["localeMatcher","formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem"];function R(t,e,r,a){var o=t.locale,i=t.formats,s=t.onError,l=t.timeZone;void 0===a&&(a={});var c=a.format,m=Object(n.__assign)(Object(n.__assign)({},l&&{timeZone:l}),c&&Object(b.e)(i,e,c,s)),u=Object(b.d)(a,E,m);return"time"!==e||u.hour||u.minute||u.second||u.timeStyle||u.dateStyle||(u=Object(n.__assign)(Object(n.__assign)({},u),{hour:"numeric",minute:"numeric"})),r(o,u)}function T(t,e){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var a=r[0],o=r[1],i=void 0===o?{}:o,s="string"===typeof a?new Date(a||0):a;try{return R(t,"date",e,i).format(s)}catch(l){t.onError(new c.a(c.b.FORMAT_ERROR,"Error formatting date.",l))}return String(s)}function w(t,e){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var a=r[0],o=r[1],i=void 0===o?{}:o,s="string"===typeof a?new Date(a||0):a;try{return R(t,"time",e,i).format(s)}catch(l){t.onError(new c.a(c.b.FORMAT_ERROR,"Error formatting time.",l))}return String(s)}function F(t,e){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var a=r[0],o=r[1],i=r[2],s=void 0===i?{}:i,l=t.timeZone,m=t.locale,u=t.onError,f=Object(b.d)(s,E,l?{timeZone:l}:{});try{return e(m,f).formatRange(a,o)}catch(g){u(new c.a(c.b.FORMAT_ERROR,"Error formatting date time range.",g))}return String(a)}function I(t,e){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var a=r[0],o=r[1],i=void 0===o?{}:o,s="string"===typeof a?new Date(a||0):a;try{return R(t,"date",e,i).formatToParts(s)}catch(l){t.onError(new c.a(c.b.FORMAT_ERROR,"Error formatting date.",l))}return[]}function D(t,e){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var a=r[0],o=r[1],i=void 0===o?{}:o,s="string"===typeof a?new Date(a||0):a;try{return R(t,"time",e,i).formatToParts(s)}catch(l){t.onError(new c.a(c.b.FORMAT_ERROR,"Error formatting time.",l))}return[]}var S=["localeMatcher","type"];function M(t,e,r,n){var a=t.locale,o=t.onError;void 0===n&&(n={}),Intl.PluralRules||o(new _.b('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',_.a.MISSING_INTL_API));var i=Object(b.d)(n,S);try{return e(a,i).select(r)}catch(s){o(new c.d("Error formatting plural.",s))}return"other"}var N=["localeMatcher","type","style"],L=Date.now();function P(t,e,r,n){void 0===n&&(n={});var a=A(t,e,r,n).reduce((function(t,e){var r=e.value;return"string"!==typeof r?t.push(r):"string"===typeof t[t.length-1]?t[t.length-1]+=r:t.push(r),t}),[]);return 1===a.length?a[0]:a}function A(t,e,r,a){var o=t.locale,i=t.onError;void 0===a&&(a={}),Intl.ListFormat||i(new _.b('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n',_.a.MISSING_INTL_API));var s=Object(b.d)(a,N);try{var l={},m=r.map((function(t,e){if("object"===typeof t){var r=function(t){return L+"_"+t+"_"+L}(e);return l[r]=t,r}return String(t)}));return e(o,s).formatToParts(m).map((function(t){return"literal"===t.type?t:Object(n.__assign)(Object(n.__assign)({},t),{value:l[t.value]||t.value})}))}catch(u){i(new c.a(c.b.FORMAT_ERROR,"Error formatting list.",u))}return r}var x=["localeMatcher","style","type","fallback"];function C(t,e,r,n){var a=t.locale,o=t.onError;Intl.DisplayNames||o(new _.b('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n',_.a.MISSING_INTL_API));var i=Object(b.d)(n,x);try{return e(a,i).of(r)}catch(s){o(new c.a(c.b.FORMAT_ERROR,"Error formatting display name.",s))}}function k(t){var e;t.defaultRichTextElements&&"string"===typeof((e=t.messages||{})?e[Object.keys(e)[0]]:void 0)&&console.warn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution')}var Z=r("/d+U");function G(t){return{locale:t.locale,timeZone:t.timeZone,formats:t.formats,textComponent:t.textComponent,messages:t.messages,defaultLocale:t.defaultLocale,defaultFormats:t.defaultFormats,onError:t.onError,wrapRichTextChunksInFragment:t.wrapRichTextChunksInFragment,defaultRichTextElements:t.defaultRichTextElements}}function q(t){return t?Object.keys(t).reduce((function(e,r){var n=t[r];return e[r]=Object(Z.c)(n)?Object(i.b)(n):n,e}),{}):t}var U=function(t,e,r,o){for(var i=[],s=4;s<arguments.length;s++)i[s-4]=arguments[s];var l=q(o),c=d.apply(void 0,Object(n.__spreadArray)([t,e,r,l],i));return Array.isArray(c)?a.Children.toArray(c):c},J=function(t,e){var r=t.defaultRichTextElements,a=Object(n.__rest)(t,["defaultRichTextElements"]),o=q(r),s=function(t,e){var r=Object(b.b)(e),a=Object(n.__assign)(Object(n.__assign)({},b.a),t),o=a.locale,i=a.defaultLocale,s=a.onError;return o?!Intl.NumberFormat.supportedLocalesOf(o).length&&s?s(new c.e('Missing locale data for locale: "'+o+'" in Intl.NumberFormat. Using default locale: "'+i+'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details')):!Intl.DateTimeFormat.supportedLocalesOf(o).length&&s&&s(new c.e('Missing locale data for locale: "'+o+'" in Intl.DateTimeFormat. Using default locale: "'+i+'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details')):(s&&s(new c.c('"locale" was not configured, using "'+i+'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details')),a.locale=a.defaultLocale||"en"),k(a),Object(n.__assign)(Object(n.__assign)({},a),{formatters:r,formatNumber:y.bind(null,a,r.getNumberFormat),formatNumberToParts:h.bind(null,a,r.getNumberFormat),formatRelativeTime:j.bind(null,a,r.getRelativeTimeFormat),formatDate:T.bind(null,a,r.getDateTimeFormat),formatDateToParts:I.bind(null,a,r.getDateTimeFormat),formatTime:w.bind(null,a,r.getDateTimeFormat),formatDateTimeRange:F.bind(null,a,r.getDateTimeFormat),formatTimeToParts:D.bind(null,a,r.getDateTimeFormat),formatPlural:M.bind(null,a,r.getPluralRules),formatMessage:d.bind(null,a,r),formatList:P.bind(null,a,r.getListFormat),formatListToParts:A.bind(null,a,r.getListFormat),formatDisplayName:C.bind(null,a,r.getDisplayNames)})}(Object(n.__assign)(Object(n.__assign)(Object(n.__assign)({},i.a),a),{defaultRichTextElements:o}),e);return Object(n.__assign)(Object(n.__assign)({},s),{formatMessage:U.bind(null,{locale:s.locale,timeZone:s.timeZone,formats:s.formats,defaultLocale:s.defaultLocale,defaultFormats:s.defaultFormats,messages:s.messages,onError:s.onError,defaultRichTextElements:o},s.formatters)})},z=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.cache=Object(b.c)(),e.state={cache:e.cache,intl:J(G(e.props),e.cache),prevConfig:G(e.props)},e}return Object(n.__extends)(e,t),e.getDerivedStateFromProps=function(t,e){var r=e.prevConfig,n=e.cache,a=G(t);return Object(i.d)(r,a)?null:{intl:J(a,n),prevConfig:a}},e.prototype.render=function(){return Object(i.c)(this.state.intl),a.createElement(o.b,{value:this.state.intl},this.props.children)},e.displayName="IntlProvider",e.defaultProps=i.a,e}(a.PureComponent);e.b=z}}]);
//# sourceMappingURL=58e370716906736de417af730b2605b6614a2ac3.40f8365431cbf695c49b.js.map