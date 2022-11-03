!function(e){function t(e){Object.defineProperty(this,e,{enumerable:!0,get:function(){return this[v][e]}})}function r(e){if("undefined"!=typeof System&&System.isModule?System.isModule(e):"[object Module]"===Object.prototype.toString.call(e))return e;var t={default:e,__useDefault:e};if(e&&e.__esModule)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return new o(t)}function o(e){Object.defineProperty(this,v,{value:e}),Object.keys(e).forEach(t,this)}function n(e){return"@node/"===e.substr(0,6)?c(e,r(m(e.substr(6))),{}):p[e]}function u(e){var t=n(e);if(!t)throw new Error('Module "'+e+'" expected, but not contained in build.');if(t.module)return t.module;var r=t.linkRecord;return i(t,r),a(t,r,[]),t.module}function i(e,t){if(!t.depLoads){t.declare&&d(e,t),t.depLoads=[];for(var r=0;r<t.deps.length;r++){var o=n(t.deps[r]);t.depLoads.push(o),o.linkRecord&&i(o,o.linkRecord);var u=t.setters&&t.setters[r];u&&(u(o.module||o.linkRecord.moduleObj),o.importerSetters.push(u))}return e}}function d(t,r){var o=r.moduleObj,n=t.importerSetters,u=!1,i=r.declare.call(e,function(e,t){if(!u){if("object"==typeof e)for(var r in e)"__useDefault"!==r&&(o[r]=e[r]);else o[e]=t;u=!0;for(var i=0;i<n.length;i++)n[i](o);return u=!1,t}},{id:t.key});"function"!=typeof i?(r.setters=i.setters,r.execute=i.execute):(r.setters=[],r.execute=i)}function l(e,t,r){return p[e]={key:e,module:void 0,importerSetters:[],linkRecord:{deps:t,depLoads:void 0,declare:r,setters:void 0,execute:void 0,moduleObj:{}}}}function f(e,t,r,o){var n={};return p[e]={key:e,module:void 0,importerSetters:[],linkRecord:{deps:t,depLoads:void 0,declare:void 0,execute:o,executingRequire:r,moduleObj:{default:n,__useDefault:n},setters:void 0}}}function s(e,t,r){return function(o){for(var n=0;n<e.length;n++)if(e[n]===o){var u,i=t[n],d=i.linkRecord;return u=d?-1===r.indexOf(i)?a(i,d,r):d.moduleObj:i.module,"__useDefault"in u?u.__useDefault:u}}}function a(t,r,n){if(n.push(t),t.module)return t.module;var u;if(r.setters){for(var i=0;i<r.deps.length;i++){var d=r.depLoads[i],l=d.linkRecord;l&&-1===n.indexOf(d)&&(u=a(d,l,l.setters?n:[]))}r.execute.call(y)}else{var f={id:t.key},c=r.moduleObj;Object.defineProperty(f,"exports",{configurable:!0,set:function(e){c.default=c.__useDefault=e},get:function(){return c.__useDefault}});var p=s(r.deps,r.depLoads,n);if(!r.executingRequire)for(var i=0;i<r.deps.length;i++)p(r.deps[i]);var v=r.execute.call(e,p,c.__useDefault,f);void 0!==v?c.default=c.__useDefault=v:f.exports!==c.__useDefault&&(c.default=c.__useDefault=f.exports);var m=c.__useDefault;if(m&&m.__esModule)for(var b in m)Object.hasOwnProperty.call(m,b)&&(c[b]=m[b])}var f=t.module=new o(r.moduleObj);if(!r.setters)for(var i=0;i<t.importerSetters.length;i++)t.importerSetters[i](f);return f}function c(e,t){return p[e]={key:e,module:t,importerSetters:[],linkRecord:void 0}}var p={},v="undefined"!=typeof Symbol?Symbol():"@@baseObject";o.prototype=Object.create(null),"undefined"!=typeof Symbol&&Symbol.toStringTag&&(o.prototype[Symbol.toStringTag]="Module");var m="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&"undefined"!=typeof require.resolve&&"undefined"!=typeof process&&process.platform&&require,y={};return Object.freeze&&Object.freeze(y),function(e,t,n,i){return function(d){d(function(d){var s={_nodeRequire:m,register:l,registerDynamic:f,registry:{get:function(e){return p[e].module},set:c},newModule:function(e){return new o(e)}};c("@empty",new o({}));for(var a=0;a<t.length;a++)c(t[a],r(arguments[a],{}));i(s);var v=u(e[0]);if(e.length>1)for(var a=1;a<e.length;a++)u(e[a]);return n?v.__useDefault:(v instanceof o&&Object.defineProperty(v,"__esModule",{value:!0}),v)})}}}("undefined"!=typeof self?self:"undefined"!=typeof global?global:this)

(["a"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.registerDynamic("b", [], true, function ($__require, exports, module) {
	var global = this || self,
	    GLOBAL = global;
	/*! picturefill - v3.0.2 - 2016-02-12
  * https://scottjehl.github.io/picturefill/
  * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
  */
	/*! Gecko-Picture - v1.0
  * https://github.com/scottjehl/picturefill/tree/3.0/src/plugins/gecko-picture
  * Firefox's early picture implementation (prior to FF41) is static and does
  * not react to viewport changes. This tiny module fixes this.
  */
	(function (window) {
		/*jshint eqnull:true */
		var ua = navigator.userAgent;

		if (window.HTMLPictureElement && /ecko/.test(ua) && ua.match(/rv\:(\d+)/) && RegExp.$1 < 45) {
			addEventListener("resize", function () {
				var timer;

				var dummySrc = document.createElement("source");

				var fixRespimg = function (img) {
					var source, sizes;
					var picture = img.parentNode;

					if (picture.nodeName.toUpperCase() === "PICTURE") {
						source = dummySrc.cloneNode();

						picture.insertBefore(source, picture.firstElementChild);
						setTimeout(function () {
							picture.removeChild(source);
						});
					} else if (!img._pfLastSize || img.offsetWidth > img._pfLastSize) {
						img._pfLastSize = img.offsetWidth;
						sizes = img.sizes;
						img.sizes += ",100vw";
						setTimeout(function () {
							img.sizes = sizes;
						});
					}
				};

				var findPictureImgs = function () {
					var i;
					var imgs = document.querySelectorAll("picture > img, img[srcset][sizes]");
					for (i = 0; i < imgs.length; i++) {
						fixRespimg(imgs[i]);
					}
				};
				var onResize = function () {
					clearTimeout(timer);
					timer = setTimeout(findPictureImgs, 99);
				};
				var mq = window.matchMedia && matchMedia("(orientation: landscape)");
				var init = function () {
					onResize();

					if (mq && mq.addListener) {
						mq.addListener(onResize);
					}
				};

				dummySrc.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

				if (/^[c|i]|d$/.test(document.readyState || "")) {
					init();
				} else {
					document.addEventListener("DOMContentLoaded", init);
				}

				return onResize;
			}());
		}
	})(window);

	/*! Picturefill - v3.0.2
  * http://scottjehl.github.io/picturefill
  * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt;
  *  License: MIT
  */

	(function (window, document, undefined) {
		// Enable strict mode
		"use strict";

		// HTML shim|v it for old IE (IE9 will still need the HTML video tag workaround)

		document.createElement("picture");

		var warn, eminpx, alwaysCheckWDescriptor, evalId;
		// local object for method references and testing exposure
		var pf = {};
		var isSupportTestReady = false;
		var noop = function () {};
		var image = document.createElement("img");
		var getImgAttr = image.getAttribute;
		var setImgAttr = image.setAttribute;
		var removeImgAttr = image.removeAttribute;
		var docElem = document.documentElement;
		var types = {};
		var cfg = {
			//resource selection:
			algorithm: ""
		};
		var srcAttr = "data-pfsrc";
		var srcsetAttr = srcAttr + "set";
		// ua sniffing is done for undetectable img loading features,
		// to do some non crucial perf optimizations
		var ua = navigator.userAgent;
		var supportAbort = /rident/.test(ua) || /ecko/.test(ua) && ua.match(/rv\:(\d+)/) && RegExp.$1 > 35;
		var curSrcProp = "currentSrc";
		var regWDesc = /\s+\+?\d+(e\d+)?w/;
		var regSize = /(\([^)]+\))?\s*(.+)/;
		var setOptions = window.picturefillCFG;
		/**
   * Shortcut property for https://w3c.github.io/webappsec/specs/mixedcontent/#restricts-mixed-content ( for easy overriding in tests )
   */
		// baseStyle also used by getEmValue (i.e.: width: 1em is important)
		var baseStyle = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)";
		var fsCss = "font-size:100%!important;";
		var isVwDirty = true;

		var cssCache = {};
		var sizeLengthCache = {};
		var DPR = window.devicePixelRatio;
		var units = {
			px: 1,
			"in": 96
		};
		var anchor = document.createElement("a");
		/**
   * alreadyRun flag used for setOptions. is it true setOptions will reevaluate
   * @type {boolean}
   */
		var alreadyRun = false;

		// Reusable, non-"g" Regexes

		// (Don't use \s, to avoid matching non-breaking space.)
		var regexLeadingSpaces = /^[ \t\n\r\u000c]+/,
		    regexLeadingCommasOrSpaces = /^[, \t\n\r\u000c]+/,
		    regexLeadingNotSpaces = /^[^ \t\n\r\u000c]+/,
		    regexTrailingCommas = /[,]+$/,
		    regexNonNegativeInteger = /^\d+$/,


		// ( Positive or negative or unsigned integers or decimals, without or without exponents.
		// Must include at least one digit.
		// According to spec tests any decimal point must be followed by a digit.
		// No leading plus sign is allowed.)
		// https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number
		regexFloatingPoint = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;

		var on = function (obj, evt, fn, capture) {
			if (obj.addEventListener) {
				obj.addEventListener(evt, fn, capture || false);
			} else if (obj.attachEvent) {
				obj.attachEvent("on" + evt, fn);
			}
		};

		/**
   * simple memoize function:
   */

		var memoize = function (fn) {
			var cache = {};
			return function (input) {
				if (!(input in cache)) {
					cache[input] = fn(input);
				}
				return cache[input];
			};
		};

		// UTILITY FUNCTIONS

		// Manual is faster than RegEx
		// http://jsperf.com/whitespace-character/5
		function isSpace(c) {
			return c === "\u0020" || // space
			c === "\u0009" || // horizontal tab
			c === "\u000A" || // new line
			c === "\u000C" || // form feed
			c === "\u000D"; // carriage return
		}

		/**
   * gets a mediaquery and returns a boolean or gets a css length and returns a number
   * @param css mediaqueries or css length
   * @returns {boolean|number}
   *
   * based on: https://gist.github.com/jonathantneal/db4f77009b155f083738
   */
		var evalCSS = function () {

			var regLength = /^([\d\.]+)(em|vw|px)$/;
			var replace = function () {
				var args = arguments,
				    index = 0,
				    string = args[0];
				while (++index in args) {
					string = string.replace(args[index], args[++index]);
				}
				return string;
			};

			var buildStr = memoize(function (css) {

				return "return " + replace((css || "").toLowerCase(),
				// interpret `and`
				/\band\b/g, "&&",

				// interpret `,`
				/,/g, "||",

				// interpret `min-` as >=
				/min-([a-z-\s]+):/g, "e.$1>=",

				// interpret `max-` as <=
				/max-([a-z-\s]+):/g, "e.$1<=",

				//calc value
				/calc([^)]+)/g, "($1)",

				// interpret css values
				/(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)",
				//make eval less evil
				/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/ig, "") + ";";
			});

			return function (css, length) {
				var parsedLength;
				if (!(css in cssCache)) {
					cssCache[css] = false;
					if (length && (parsedLength = css.match(regLength))) {
						cssCache[css] = parsedLength[1] * units[parsedLength[2]];
					} else {
						/*jshint evil:true */
						try {
							cssCache[css] = new Function("e", buildStr(css))(units);
						} catch (e) {}
						/*jshint evil:false */
					}
				}
				return cssCache[css];
			};
		}();

		var setResolution = function (candidate, sizesattr) {
			if (candidate.w) {
				// h = means height: || descriptor.type === 'h' do not handle yet...
				candidate.cWidth = pf.calcListLength(sizesattr || "100vw");
				candidate.res = candidate.w / candidate.cWidth;
			} else {
				candidate.res = candidate.d;
			}
			return candidate;
		};

		/**
   *
   * @param opt
   */
		var picturefill = function (opt) {

			if (!isSupportTestReady) {
				return;
			}

			var elements, i, plen;

			var options = opt || {};

			if (options.elements && options.elements.nodeType === 1) {
				if (options.elements.nodeName.toUpperCase() === "IMG") {
					options.elements = [options.elements];
				} else {
					options.context = options.elements;
					options.elements = null;
				}
			}

			elements = options.elements || pf.qsa(options.context || document, options.reevaluate || options.reselect ? pf.sel : pf.selShort);

			if (plen = elements.length) {

				pf.setupRun(options);
				alreadyRun = true;

				// Loop through all elements
				for (i = 0; i < plen; i++) {
					pf.fillImg(elements[i], options);
				}

				pf.teardownRun(options);
			}
		};

		/**
   * outputs a warning for the developer
   * @param {message}
   * @type {Function}
   */
		warn = window.console && console.warn ? function (message) {
			console.warn(message);
		} : noop;

		if (!(curSrcProp in image)) {
			curSrcProp = "src";
		}

		// Add support for standard mime types.
		types["image/jpeg"] = true;
		types["image/gif"] = true;
		types["image/png"] = true;

		function detectTypeSupport(type, typeUri) {
			// based on Modernizr's lossless img-webp test
			// note: asynchronous
			var image = new window.Image();
			image.onerror = function () {
				types[type] = false;
				picturefill();
			};
			image.onload = function () {
				types[type] = image.width === 1;
				picturefill();
			};
			image.src = typeUri;
			return "pending";
		}

		// test svg support
		types["image/svg+xml"] = document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");

		/**
   * updates the internal vW property with the current viewport width in px
   */
		function updateMetrics() {

			isVwDirty = false;
			DPR = window.devicePixelRatio;
			cssCache = {};
			sizeLengthCache = {};

			pf.DPR = DPR || 1;

			units.width = Math.max(window.innerWidth || 0, docElem.clientWidth);
			units.height = Math.max(window.innerHeight || 0, docElem.clientHeight);

			units.vw = units.width / 100;
			units.vh = units.height / 100;

			evalId = [units.height, units.width, DPR].join("-");

			units.em = pf.getEmValue();
			units.rem = units.em;
		}

		function chooseLowRes(lowerValue, higherValue, dprValue, isCached) {
			var bonusFactor, tooMuch, bonus, meanDensity;

			//experimental
			if (cfg.algorithm === "saveData") {
				if (lowerValue > 2.7) {
					meanDensity = dprValue + 1;
				} else {
					tooMuch = higherValue - dprValue;
					bonusFactor = Math.pow(lowerValue - 0.6, 1.5);

					bonus = tooMuch * bonusFactor;

					if (isCached) {
						bonus += 0.1 * bonusFactor;
					}

					meanDensity = lowerValue + bonus;
				}
			} else {
				meanDensity = dprValue > 1 ? Math.sqrt(lowerValue * higherValue) : lowerValue;
			}

			return meanDensity > dprValue;
		}

		function applyBestCandidate(img) {
			var srcSetCandidates;
			var matchingSet = pf.getSet(img);
			var evaluated = false;
			if (matchingSet !== "pending") {
				evaluated = evalId;
				if (matchingSet) {
					srcSetCandidates = pf.setRes(matchingSet);
					pf.applySetCandidate(srcSetCandidates, img);
				}
			}
			img[pf.ns].evaled = evaluated;
		}

		function ascendingSort(a, b) {
			return a.res - b.res;
		}

		function setSrcToCur(img, src, set) {
			var candidate;
			if (!set && src) {
				set = img[pf.ns].sets;
				set = set && set[set.length - 1];
			}

			candidate = getCandidateForSrc(src, set);

			if (candidate) {
				src = pf.makeUrl(src);
				img[pf.ns].curSrc = src;
				img[pf.ns].curCan = candidate;

				if (!candidate.res) {
					setResolution(candidate, candidate.set.sizes);
				}
			}
			return candidate;
		}

		function getCandidateForSrc(src, set) {
			var i, candidate, candidates;
			if (src && set) {
				candidates = pf.parseSet(set);
				src = pf.makeUrl(src);
				for (i = 0; i < candidates.length; i++) {
					if (src === pf.makeUrl(candidates[i].url)) {
						candidate = candidates[i];
						break;
					}
				}
			}
			return candidate;
		}

		function getAllSourceElements(picture, candidates) {
			var i, len, source, srcset;

			// SPEC mismatch intended for size and perf:
			// actually only source elements preceding the img should be used
			// also note: don't use qsa here, because IE8 sometimes doesn't like source as the key part in a selector
			var sources = picture.getElementsByTagName("source");

			for (i = 0, len = sources.length; i < len; i++) {
				source = sources[i];
				source[pf.ns] = true;
				srcset = source.getAttribute("srcset");

				// if source does not have a srcset attribute, skip
				if (srcset) {
					candidates.push({
						srcset: srcset,
						media: source.getAttribute("media"),
						type: source.getAttribute("type"),
						sizes: source.getAttribute("sizes")
					});
				}
			}
		}

		/**
   * Srcset Parser
   * By Alex Bell |  MIT License
   *
   * @returns Array [{url: _, d: _, w: _, h:_, set:_(????)}, ...]
   *
   * Based super duper closely on the reference algorithm at:
   * https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-srcset-attribute
   */

		// 1. Let input be the value passed to this algorithm.
		// (TO-DO : Explain what "set" argument is here. Maybe choose a more
		// descriptive & more searchable name.  Since passing the "set" in really has
		// nothing to do with parsing proper, I would prefer this assignment eventually
		// go in an external fn.)
		function parseSrcset(input, set) {

			function collectCharacters(regEx) {
				var chars,
				    match = regEx.exec(input.substring(pos));
				if (match) {
					chars = match[0];
					pos += chars.length;
					return chars;
				}
			}

			var inputLength = input.length,
			    url,
			    descriptors,
			    currentDescriptor,
			    state,
			    c,


			// 2. Let position be a pointer into input, initially pointing at the start
			//    of the string.
			pos = 0,


			// 3. Let candidates be an initially empty source set.
			candidates = [];

			/**
   * Adds descriptor properties to a candidate, pushes to the candidates array
   * @return undefined
   */
			// (Declared outside of the while loop so that it's only created once.
			// (This fn is defined before it is used, in order to pass JSHINT.
			// Unfortunately this breaks the sequencing of the spec comments. :/ )
			function parseDescriptors() {

				// 9. Descriptor parser: Let error be no.
				var pError = false,


				// 10. Let width be absent.
				// 11. Let density be absent.
				// 12. Let future-compat-h be absent. (We're implementing it now as h)
				w,
				    d,
				    h,
				    i,
				    candidate = {},
				    desc,
				    lastChar,
				    value,
				    intVal,
				    floatVal;

				// 13. For each descriptor in descriptors, run the appropriate set of steps
				// from the following list:
				for (i = 0; i < descriptors.length; i++) {
					desc = descriptors[i];

					lastChar = desc[desc.length - 1];
					value = desc.substring(0, desc.length - 1);
					intVal = parseInt(value, 10);
					floatVal = parseFloat(value);

					// If the descriptor consists of a valid non-negative integer followed by
					// a U+0077 LATIN SMALL LETTER W character
					if (regexNonNegativeInteger.test(value) && lastChar === "w") {

						// If width and density are not both absent, then let error be yes.
						if (w || d) {
							pError = true;
						}

						// Apply the rules for parsing non-negative integers to the descriptor.
						// If the result is zero, let error be yes.
						// Otherwise, let width be the result.
						if (intVal === 0) {
							pError = true;
						} else {
							w = intVal;
						}

						// If the descriptor consists of a valid floating-point number followed by
						// a U+0078 LATIN SMALL LETTER X character
					} else if (regexFloatingPoint.test(value) && lastChar === "x") {

						// If width, density and future-compat-h are not all absent, then let error
						// be yes.
						if (w || d || h) {
							pError = true;
						}

						// Apply the rules for parsing floating-point number values to the descriptor.
						// If the result is less than zero, let error be yes. Otherwise, let density
						// be the result.
						if (floatVal < 0) {
							pError = true;
						} else {
							d = floatVal;
						}

						// If the descriptor consists of a valid non-negative integer followed by
						// a U+0068 LATIN SMALL LETTER H character
					} else if (regexNonNegativeInteger.test(value) && lastChar === "h") {

						// If height and density are not both absent, then let error be yes.
						if (h || d) {
							pError = true;
						}

						// Apply the rules for parsing non-negative integers to the descriptor.
						// If the result is zero, let error be yes. Otherwise, let future-compat-h
						// be the result.
						if (intVal === 0) {
							pError = true;
						} else {
							h = intVal;
						}

						// Anything else, Let error be yes.
					} else {
						pError = true;
					}
				} // (close step 13 for loop)

				// 15. If error is still no, then append a new image source to candidates whose
				// URL is url, associated with a width width if not absent and a pixel
				// density density if not absent. Otherwise, there is a parse error.
				if (!pError) {
					candidate.url = url;

					if (w) {
						candidate.w = w;
					}
					if (d) {
						candidate.d = d;
					}
					if (h) {
						candidate.h = h;
					}
					if (!h && !d && !w) {
						candidate.d = 1;
					}
					if (candidate.d === 1) {
						set.has1x = true;
					}
					candidate.set = set;

					candidates.push(candidate);
				}
			} // (close parseDescriptors fn)

			/**
   * Tokenizes descriptor properties prior to parsing
   * Returns undefined.
   * (Again, this fn is defined before it is used, in order to pass JSHINT.
   * Unfortunately this breaks the logical sequencing of the spec comments. :/ )
   */
			function tokenize() {

				// 8.1. Descriptor tokeniser: Skip whitespace
				collectCharacters(regexLeadingSpaces);

				// 8.2. Let current descriptor be the empty string.
				currentDescriptor = "";

				// 8.3. Let state be in descriptor.
				state = "in descriptor";

				while (true) {

					// 8.4. Let c be the character at position.
					c = input.charAt(pos);

					//  Do the following depending on the value of state.
					//  For the purpose of this step, "EOF" is a special character representing
					//  that position is past the end of input.

					// In descriptor
					if (state === "in descriptor") {
						// Do the following, depending on the value of c:

						// Space character
						// If current descriptor is not empty, append current descriptor to
						// descriptors and let current descriptor be the empty string.
						// Set state to after descriptor.
						if (isSpace(c)) {
							if (currentDescriptor) {
								descriptors.push(currentDescriptor);
								currentDescriptor = "";
								state = "after descriptor";
							}

							// U+002C COMMA (,)
							// Advance position to the next character in input. If current descriptor
							// is not empty, append current descriptor to descriptors. Jump to the step
							// labeled descriptor parser.
						} else if (c === ",") {
							pos += 1;
							if (currentDescriptor) {
								descriptors.push(currentDescriptor);
							}
							parseDescriptors();
							return;

							// U+0028 LEFT PARENTHESIS (()
							// Append c to current descriptor. Set state to in parens.
						} else if (c === "\u0028") {
							currentDescriptor = currentDescriptor + c;
							state = "in parens";

							// EOF
							// If current descriptor is not empty, append current descriptor to
							// descriptors. Jump to the step labeled descriptor parser.
						} else if (c === "") {
							if (currentDescriptor) {
								descriptors.push(currentDescriptor);
							}
							parseDescriptors();
							return;

							// Anything else
							// Append c to current descriptor.
						} else {
							currentDescriptor = currentDescriptor + c;
						}
						// (end "in descriptor"

						// In parens
					} else if (state === "in parens") {

						// U+0029 RIGHT PARENTHESIS ())
						// Append c to current descriptor. Set state to in descriptor.
						if (c === ")") {
							currentDescriptor = currentDescriptor + c;
							state = "in descriptor";

							// EOF
							// Append current descriptor to descriptors. Jump to the step labeled
							// descriptor parser.
						} else if (c === "") {
							descriptors.push(currentDescriptor);
							parseDescriptors();
							return;

							// Anything else
							// Append c to current descriptor.
						} else {
							currentDescriptor = currentDescriptor + c;
						}

						// After descriptor
					} else if (state === "after descriptor") {

						// Do the following, depending on the value of c:
						// Space character: Stay in this state.
						if (isSpace(c)) {

							// EOF: Jump to the step labeled descriptor parser.
						} else if (c === "") {
							parseDescriptors();
							return;

							// Anything else
							// Set state to in descriptor. Set position to the previous character in input.
						} else {
							state = "in descriptor";
							pos -= 1;
						}
					}

					// Advance position to the next character in input.
					pos += 1;

					// Repeat this step.
				} // (close while true loop)
			}

			// 4. Splitting loop: Collect a sequence of characters that are space
			//    characters or U+002C COMMA characters. If any U+002C COMMA characters
			//    were collected, that is a parse error.
			while (true) {
				collectCharacters(regexLeadingCommasOrSpaces);

				// 5. If position is past the end of input, return candidates and abort these steps.
				if (pos >= inputLength) {
					return candidates; // (we're done, this is the sole return path)
				}

				// 6. Collect a sequence of characters that are not space characters,
				//    and let that be url.
				url = collectCharacters(regexLeadingNotSpaces);

				// 7. Let descriptors be a new empty list.
				descriptors = [];

				// 8. If url ends with a U+002C COMMA character (,), follow these substeps:
				//		(1). Remove all trailing U+002C COMMA characters from url. If this removed
				//         more than one character, that is a parse error.
				if (url.slice(-1) === ",") {
					url = url.replace(regexTrailingCommas, "");
					// (Jump ahead to step 9 to skip tokenization and just push the candidate).
					parseDescriptors();

					//	Otherwise, follow these substeps:
				} else {
					tokenize();
				} // (close else of step 8)

				// 16. Return to the step labeled splitting loop.
			} // (Close of big while loop.)
		}

		/*
   * Sizes Parser
   *
   * By Alex Bell |  MIT License
   *
   * Non-strict but accurate and lightweight JS Parser for the string value <img sizes="here">
   *
   * Reference algorithm at:
   * https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-sizes-attribute
   *
   * Most comments are copied in directly from the spec
   * (except for comments in parens).
   *
   * Grammar is:
   * <source-size-list> = <source-size># [ , <source-size-value> ]? | <source-size-value>
   * <source-size> = <media-condition> <source-size-value>
   * <source-size-value> = <length>
   * http://www.w3.org/html/wg/drafts/html/master/embedded-content.html#attr-img-sizes
   *
   * E.g. "(max-width: 30em) 100vw, (max-width: 50em) 70vw, 100vw"
   * or "(min-width: 30em), calc(30vw - 15px)" or just "30vw"
   *
   * Returns the first valid <css-length> with a media condition that evaluates to true,
   * or "100vw" if all valid media conditions evaluate to false.
   *
   */

		function parseSizes(strValue) {

			// (Percentage CSS lengths are not allowed in this case, to avoid confusion:
			// https://html.spec.whatwg.org/multipage/embedded-content.html#valid-source-size-list
			// CSS allows a single optional plus or minus sign:
			// http://www.w3.org/TR/CSS2/syndata.html#numbers
			// CSS is ASCII case-insensitive:
			// http://www.w3.org/TR/CSS2/syndata.html#characters )
			// Spec allows exponential notation for <number> type:
			// http://dev.w3.org/csswg/css-values/#numbers
			var regexCssLengthWithUnits = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i;

			// (This is a quick and lenient test. Because of optional unlimited-depth internal
			// grouping parens and strict spacing rules, this could get very complicated.)
			var regexCssCalc = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;

			var i;
			var unparsedSizesList;
			var unparsedSizesListLength;
			var unparsedSize;
			var lastComponentValue;
			var size;

			// UTILITY FUNCTIONS

			//  (Toy CSS parser. The goals here are:
			//  1) expansive test coverage without the weight of a full CSS parser.
			//  2) Avoiding regex wherever convenient.
			//  Quick tests: http://jsfiddle.net/gtntL4gr/3/
			//  Returns an array of arrays.)
			function parseComponentValues(str) {
				var chrctr;
				var component = "";
				var componentArray = [];
				var listArray = [];
				var parenDepth = 0;
				var pos = 0;
				var inComment = false;

				function pushComponent() {
					if (component) {
						componentArray.push(component);
						component = "";
					}
				}

				function pushComponentArray() {
					if (componentArray[0]) {
						listArray.push(componentArray);
						componentArray = [];
					}
				}

				// (Loop forwards from the beginning of the string.)
				while (true) {
					chrctr = str.charAt(pos);

					if (chrctr === "") {
						// ( End of string reached.)
						pushComponent();
						pushComponentArray();
						return listArray;
					} else if (inComment) {
						if (chrctr === "*" && str[pos + 1] === "/") {
							// (At end of a comment.)
							inComment = false;
							pos += 2;
							pushComponent();
							continue;
						} else {
							pos += 1; // (Skip all characters inside comments.)
							continue;
						}
					} else if (isSpace(chrctr)) {
						// (If previous character in loop was also a space, or if
						// at the beginning of the string, do not add space char to
						// component.)
						if (str.charAt(pos - 1) && isSpace(str.charAt(pos - 1)) || !component) {
							pos += 1;
							continue;
						} else if (parenDepth === 0) {
							pushComponent();
							pos += 1;
							continue;
						} else {
							// (Replace any space character with a plain space for legibility.)
							chrctr = " ";
						}
					} else if (chrctr === "(") {
						parenDepth += 1;
					} else if (chrctr === ")") {
						parenDepth -= 1;
					} else if (chrctr === ",") {
						pushComponent();
						pushComponentArray();
						pos += 1;
						continue;
					} else if (chrctr === "/" && str.charAt(pos + 1) === "*") {
						inComment = true;
						pos += 2;
						continue;
					}

					component = component + chrctr;
					pos += 1;
				}
			}

			function isValidNonNegativeSourceSizeValue(s) {
				if (regexCssLengthWithUnits.test(s) && parseFloat(s) >= 0) {
					return true;
				}
				if (regexCssCalc.test(s)) {
					return true;
				}
				// ( http://www.w3.org/TR/CSS2/syndata.html#numbers says:
				// "-0 is equivalent to 0 and is not a negative number." which means that
				// unitless zero and unitless negative zero must be accepted as special cases.)
				if (s === "0" || s === "-0" || s === "+0") {
					return true;
				}
				return false;
			}

			// When asked to parse a sizes attribute from an element, parse a
			// comma-separated list of component values from the value of the element's
			// sizes attribute (or the empty string, if the attribute is absent), and let
			// unparsed sizes list be the result.
			// http://dev.w3.org/csswg/css-syntax/#parse-comma-separated-list-of-component-values

			unparsedSizesList = parseComponentValues(strValue);
			unparsedSizesListLength = unparsedSizesList.length;

			// For each unparsed size in unparsed sizes list:
			for (i = 0; i < unparsedSizesListLength; i++) {
				unparsedSize = unparsedSizesList[i];

				// 1. Remove all consecutive <whitespace-token>s from the end of unparsed size.
				// ( parseComponentValues() already omits spaces outside of parens. )

				// If unparsed size is now empty, that is a parse error; continue to the next
				// iteration of this algorithm.
				// ( parseComponentValues() won't push an empty array. )

				// 2. If the last component value in unparsed size is a valid non-negative
				// <source-size-value>, let size be its value and remove the component value
				// from unparsed size. Any CSS function other than the calc() function is
				// invalid. Otherwise, there is a parse error; continue to the next iteration
				// of this algorithm.
				// http://dev.w3.org/csswg/css-syntax/#parse-component-value
				lastComponentValue = unparsedSize[unparsedSize.length - 1];

				if (isValidNonNegativeSourceSizeValue(lastComponentValue)) {
					size = lastComponentValue;
					unparsedSize.pop();
				} else {
					continue;
				}

				// 3. Remove all consecutive <whitespace-token>s from the end of unparsed
				// size. If unparsed size is now empty, return size and exit this algorithm.
				// If this was not the last item in unparsed sizes list, that is a parse error.
				if (unparsedSize.length === 0) {
					return size;
				}

				// 4. Parse the remaining component values in unparsed size as a
				// <media-condition>. If it does not parse correctly, or it does parse
				// correctly but the <media-condition> evaluates to false, continue to the
				// next iteration of this algorithm.
				// (Parsing all possible compound media conditions in JS is heavy, complicated,
				// and the payoff is unclear. Is there ever an situation where the
				// media condition parses incorrectly but still somehow evaluates to true?
				// Can we just rely on the browser/polyfill to do it?)
				unparsedSize = unparsedSize.join(" ");
				if (!pf.matchesMedia(unparsedSize)) {
					continue;
				}

				// 5. Return size and exit this algorithm.
				return size;
			}

			// If the above algorithm exhausts unparsed sizes list without returning a
			// size value, return 100vw.
			return "100vw";
		}

		// namespace
		pf.ns = ("pf" + new Date().getTime()).substr(0, 9);

		// srcset support test
		pf.supSrcset = "srcset" in image;
		pf.supSizes = "sizes" in image;
		pf.supPicture = !!window.HTMLPictureElement;

		// UC browser does claim to support srcset and picture, but not sizes,
		// this extended test reveals the browser does support nothing
		if (pf.supSrcset && pf.supPicture && !pf.supSizes) {
			(function (image2) {
				image.srcset = "data:,a";
				image2.src = "data:,a";
				pf.supSrcset = image.complete === image2.complete;
				pf.supPicture = pf.supSrcset && pf.supPicture;
			})(document.createElement("img"));
		}

		// Safari9 has basic support for sizes, but does't expose the `sizes` idl attribute
		if (pf.supSrcset && !pf.supSizes) {

			(function () {
				var width2 = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==";
				var width1 = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
				var img = document.createElement("img");
				var test = function () {
					var width = img.width;

					if (width === 2) {
						pf.supSizes = true;
					}

					alwaysCheckWDescriptor = pf.supSrcset && !pf.supSizes;

					isSupportTestReady = true;
					// force async
					setTimeout(picturefill);
				};

				img.onload = test;
				img.onerror = test;
				img.setAttribute("sizes", "9px");

				img.srcset = width1 + " 1w," + width2 + " 9w";
				img.src = width1;
			})();
		} else {
			isSupportTestReady = true;
		}

		// using pf.qsa instead of dom traversing does scale much better,
		// especially on sites mixing responsive and non-responsive images
		pf.selShort = "picture>img,img[srcset]";
		pf.sel = pf.selShort;
		pf.cfg = cfg;

		/**
   * Shortcut property for `devicePixelRatio` ( for easy overriding in tests )
   */
		pf.DPR = DPR || 1;
		pf.u = units;

		// container of supported mime types that one might need to qualify before using
		pf.types = types;

		pf.setSize = noop;

		/**
   * Gets a string and returns the absolute URL
   * @param src
   * @returns {String} absolute URL
   */

		pf.makeUrl = memoize(function (src) {
			anchor.href = src;
			return anchor.href;
		});

		/**
   * Gets a DOM element or document and a selctor and returns the found matches
   * Can be extended with jQuery/Sizzle for IE7 support
   * @param context
   * @param sel
   * @returns {NodeList|Array}
   */
		pf.qsa = function (context, sel) {
			return "querySelector" in context ? context.querySelectorAll(sel) : [];
		};

		/**
   * Shortcut method for matchMedia ( for easy overriding in tests )
   * wether native or pf.mMQ is used will be decided lazy on first call
   * @returns {boolean}
   */
		pf.matchesMedia = function () {
			if (window.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches) {
				pf.matchesMedia = function (media) {
					return !media || matchMedia(media).matches;
				};
			} else {
				pf.matchesMedia = pf.mMQ;
			}

			return pf.matchesMedia.apply(this, arguments);
		};

		/**
   * A simplified matchMedia implementation for IE8 and IE9
   * handles only min-width/max-width with px or em values
   * @param media
   * @returns {boolean}
   */
		pf.mMQ = function (media) {
			return media ? evalCSS(media) : true;
		};

		/**
   * Returns the calculated length in css pixel from the given sourceSizeValue
   * http://dev.w3.org/csswg/css-values-3/#length-value
   * intended Spec mismatches:
   * * Does not check for invalid use of CSS functions
   * * Does handle a computed length of 0 the same as a negative and therefore invalid value
   * @param sourceSizeValue
   * @returns {Number}
   */
		pf.calcLength = function (sourceSizeValue) {

			var value = evalCSS(sourceSizeValue, true) || false;
			if (value < 0) {
				value = false;
			}

			return value;
		};

		/**
   * Takes a type string and checks if its supported
   */

		pf.supportsType = function (type) {
			return type ? types[type] : true;
		};

		/**
   * Parses a sourceSize into mediaCondition (media) and sourceSizeValue (length)
   * @param sourceSizeStr
   * @returns {*}
   */
		pf.parseSize = memoize(function (sourceSizeStr) {
			var match = (sourceSizeStr || "").match(regSize);
			return {
				media: match && match[1],
				length: match && match[2]
			};
		});

		pf.parseSet = function (set) {
			if (!set.cands) {
				set.cands = parseSrcset(set.srcset, set);
			}
			return set.cands;
		};

		/**
   * returns 1em in css px for html/body default size
   * function taken from respondjs
   * @returns {*|number}
   */
		pf.getEmValue = function () {
			var body;
			if (!eminpx && (body = document.body)) {
				var div = document.createElement("div"),
				    originalHTMLCSS = docElem.style.cssText,
				    originalBodyCSS = body.style.cssText;

				div.style.cssText = baseStyle;

				// 1em in a media query is the value of the default font size of the browser
				// reset docElem and body to ensure the correct value is returned
				docElem.style.cssText = fsCss;
				body.style.cssText = fsCss;

				body.appendChild(div);
				eminpx = div.offsetWidth;
				body.removeChild(div);

				//also update eminpx before returning
				eminpx = parseFloat(eminpx, 10);

				// restore the original values
				docElem.style.cssText = originalHTMLCSS;
				body.style.cssText = originalBodyCSS;
			}
			return eminpx || 16;
		};

		/**
   * Takes a string of sizes and returns the width in pixels as a number
   */
		pf.calcListLength = function (sourceSizeListStr) {
			// Split up source size list, ie ( max-width: 30em ) 100%, ( max-width: 50em ) 50%, 33%
			//
			//                           or (min-width:30em) calc(30% - 15px)
			if (!(sourceSizeListStr in sizeLengthCache) || cfg.uT) {
				var winningLength = pf.calcLength(parseSizes(sourceSizeListStr));

				sizeLengthCache[sourceSizeListStr] = !winningLength ? units.width : winningLength;
			}

			return sizeLengthCache[sourceSizeListStr];
		};

		/**
   * Takes a candidate object with a srcset property in the form of url/
   * ex. "images/pic-medium.png 1x, images/pic-medium-2x.png 2x" or
   *     "images/pic-medium.png 400w, images/pic-medium-2x.png 800w" or
   *     "images/pic-small.png"
   * Get an array of image candidates in the form of
   *      {url: "/foo/bar.png", resolution: 1}
   * where resolution is http://dev.w3.org/csswg/css-values-3/#resolution-value
   * If sizes is specified, res is calculated
   */
		pf.setRes = function (set) {
			var candidates;
			if (set) {

				candidates = pf.parseSet(set);

				for (var i = 0, len = candidates.length; i < len; i++) {
					setResolution(candidates[i], set.sizes);
				}
			}
			return candidates;
		};

		pf.setRes.res = setResolution;

		pf.applySetCandidate = function (candidates, img) {
			if (!candidates.length) {
				return;
			}
			var candidate, i, j, length, bestCandidate, curSrc, curCan, candidateSrc, abortCurSrc;

			var imageData = img[pf.ns];
			var dpr = pf.DPR;

			curSrc = imageData.curSrc || img[curSrcProp];

			curCan = imageData.curCan || setSrcToCur(img, curSrc, candidates[0].set);

			// if we have a current source, we might either become lazy or give this source some advantage
			if (curCan && curCan.set === candidates[0].set) {

				// if browser can abort image request and the image has a higher pixel density than needed
				// and this image isn't downloaded yet, we skip next part and try to save bandwidth
				abortCurSrc = supportAbort && !img.complete && curCan.res - 0.1 > dpr;

				if (!abortCurSrc) {
					curCan.cached = true;

					// if current candidate is "best", "better" or "okay",
					// set it to bestCandidate
					if (curCan.res >= dpr) {
						bestCandidate = curCan;
					}
				}
			}

			if (!bestCandidate) {

				candidates.sort(ascendingSort);

				length = candidates.length;
				bestCandidate = candidates[length - 1];

				for (i = 0; i < length; i++) {
					candidate = candidates[i];
					if (candidate.res >= dpr) {
						j = i - 1;

						// we have found the perfect candidate,
						// but let's improve this a little bit with some assumptions ;-)
						if (candidates[j] && (abortCurSrc || curSrc !== pf.makeUrl(candidate.url)) && chooseLowRes(candidates[j].res, candidate.res, dpr, candidates[j].cached)) {

							bestCandidate = candidates[j];
						} else {
							bestCandidate = candidate;
						}
						break;
					}
				}
			}

			if (bestCandidate) {

				candidateSrc = pf.makeUrl(bestCandidate.url);

				imageData.curSrc = candidateSrc;
				imageData.curCan = bestCandidate;

				if (candidateSrc !== curSrc) {
					pf.setSrc(img, bestCandidate);
				}
				pf.setSize(img);
			}
		};

		pf.setSrc = function (img, bestCandidate) {
			var origWidth;
			img.src = bestCandidate.url;

			// although this is a specific Safari issue, we don't want to take too much different code paths
			if (bestCandidate.set.type === "image/svg+xml") {
				origWidth = img.style.width;
				img.style.width = img.offsetWidth + 1 + "px";

				// next line only should trigger a repaint
				// if... is only done to trick dead code removal
				if (img.offsetWidth + 1) {
					img.style.width = origWidth;
				}
			}
		};

		pf.getSet = function (img) {
			var i, set, supportsType;
			var match = false;
			var sets = img[pf.ns].sets;

			for (i = 0; i < sets.length && !match; i++) {
				set = sets[i];

				if (!set.srcset || !pf.matchesMedia(set.media) || !(supportsType = pf.supportsType(set.type))) {
					continue;
				}

				if (supportsType === "pending") {
					set = supportsType;
				}

				match = set;
				break;
			}

			return match;
		};

		pf.parseSets = function (element, parent, options) {
			var srcsetAttribute, imageSet, isWDescripor, srcsetParsed;

			var hasPicture = parent && parent.nodeName.toUpperCase() === "PICTURE";
			var imageData = element[pf.ns];

			if (imageData.src === undefined || options.src) {
				imageData.src = getImgAttr.call(element, "src");
				if (imageData.src) {
					setImgAttr.call(element, srcAttr, imageData.src);
				} else {
					removeImgAttr.call(element, srcAttr);
				}
			}

			if (imageData.srcset === undefined || options.srcset || !pf.supSrcset || element.srcset) {
				srcsetAttribute = getImgAttr.call(element, "srcset");
				imageData.srcset = srcsetAttribute;
				srcsetParsed = true;
			}

			imageData.sets = [];

			if (hasPicture) {
				imageData.pic = true;
				getAllSourceElements(parent, imageData.sets);
			}

			if (imageData.srcset) {
				imageSet = {
					srcset: imageData.srcset,
					sizes: getImgAttr.call(element, "sizes")
				};

				imageData.sets.push(imageSet);

				isWDescripor = (alwaysCheckWDescriptor || imageData.src) && regWDesc.test(imageData.srcset || "");

				// add normal src as candidate, if source has no w descriptor
				if (!isWDescripor && imageData.src && !getCandidateForSrc(imageData.src, imageSet) && !imageSet.has1x) {
					imageSet.srcset += ", " + imageData.src;
					imageSet.cands.push({
						url: imageData.src,
						d: 1,
						set: imageSet
					});
				}
			} else if (imageData.src) {
				imageData.sets.push({
					srcset: imageData.src,
					sizes: null
				});
			}

			imageData.curCan = null;
			imageData.curSrc = undefined;

			// if img has picture or the srcset was removed or has a srcset and does not support srcset at all
			// or has a w descriptor (and does not support sizes) set support to false to evaluate
			imageData.supported = !(hasPicture || imageSet && !pf.supSrcset || isWDescripor && !pf.supSizes);

			if (srcsetParsed && pf.supSrcset && !imageData.supported) {
				if (srcsetAttribute) {
					setImgAttr.call(element, srcsetAttr, srcsetAttribute);
					element.srcset = "";
				} else {
					removeImgAttr.call(element, srcsetAttr);
				}
			}

			if (imageData.supported && !imageData.srcset && (!imageData.src && element.src || element.src !== pf.makeUrl(imageData.src))) {
				if (imageData.src === null) {
					element.removeAttribute("src");
				} else {
					element.src = imageData.src;
				}
			}

			imageData.parsed = true;
		};

		pf.fillImg = function (element, options) {
			var imageData;
			var extreme = options.reselect || options.reevaluate;

			// expando for caching data on the img
			if (!element[pf.ns]) {
				element[pf.ns] = {};
			}

			imageData = element[pf.ns];

			// if the element has already been evaluated, skip it
			// unless `options.reevaluate` is set to true ( this, for example,
			// is set to true when running `picturefill` on `resize` ).
			if (!extreme && imageData.evaled === evalId) {
				return;
			}

			if (!imageData.parsed || options.reevaluate) {
				pf.parseSets(element, element.parentNode, options);
			}

			if (!imageData.supported) {
				applyBestCandidate(element);
			} else {
				imageData.evaled = evalId;
			}
		};

		pf.setupRun = function () {
			if (!alreadyRun || isVwDirty || DPR !== window.devicePixelRatio) {
				updateMetrics();
			}
		};

		// If picture is supported, well, that's awesome.
		if (pf.supPicture) {
			picturefill = noop;
			pf.fillImg = noop;
		} else {

			// Set up picture polyfill by polling the document
			(function () {
				var isDomReady;
				var regReady = window.attachEvent ? /d$|^c/ : /d$|^c|^i/;

				var run = function () {
					var readyState = document.readyState || "";

					timerId = setTimeout(run, readyState === "loading" ? 200 : 999);
					if (document.body) {
						pf.fillImgs();
						isDomReady = isDomReady || regReady.test(readyState);
						if (isDomReady) {
							clearTimeout(timerId);
						}
					}
				};

				var timerId = setTimeout(run, document.body ? 9 : 99);

				// Also attach picturefill on resize and readystatechange
				// http://modernjavascript.blogspot.com/2013/08/building-better-debounce.html
				var debounce = function (func, wait) {
					var timeout, timestamp;
					var later = function () {
						var last = new Date() - timestamp;

						if (last < wait) {
							timeout = setTimeout(later, wait - last);
						} else {
							timeout = null;
							func();
						}
					};

					return function () {
						timestamp = new Date();

						if (!timeout) {
							timeout = setTimeout(later, wait);
						}
					};
				};
				var lastClientWidth = docElem.clientHeight;
				var onResize = function () {
					isVwDirty = Math.max(window.innerWidth || 0, docElem.clientWidth) !== units.width || docElem.clientHeight !== lastClientWidth;
					lastClientWidth = docElem.clientHeight;
					if (isVwDirty) {
						pf.fillImgs();
					}
				};

				on(window, "resize", debounce(onResize, 99));
				on(document, "readystatechange", run);
			})();
		}

		pf.picturefill = picturefill;
		//use this internally for easy monkey patching/performance testing
		pf.fillImgs = picturefill;
		pf.teardownRun = noop;

		/* expose methods for testing */
		picturefill._ = pf;

		window.picturefillCFG = {
			pf: pf,
			push: function (args) {
				var name = args.shift();
				if (typeof pf[name] === "function") {
					pf[name].apply(pf, args);
				} else {
					cfg[name] = args[0];
					if (alreadyRun) {
						pf.fillImgs({ reselect: true });
					}
				}
			}
		};

		while (setOptions && setOptions.length) {
			window.picturefillCFG.push(setOptions.shift());
		}

		/* expose picturefill */
		window.picturefill = picturefill;

		/* expose picturefill */
		if (typeof module === "object" && typeof module.exports === "object") {
			// CommonJS, just export
			module.exports = picturefill;
		} else if (typeof undefined === "function" && define.amd) {
			// AMD support
			define("picturefill", function () {
				return picturefill;
			});
		}

		// IE8 evals this sync, so it must be the last thing we do
		if (!pf.supPicture) {
			types["image/webp"] = detectTypeSupport("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==");
		}
	})(window, document);
});
$__System.registerDynamic("c", ["d"], true, function ($__require, exports, module) {
    var process = $__require("d");
    var global = this || self,
        GLOBAL = global;
    /* eslint-env browser,amd,node */
    //
    // usertiming.js
    //
    // A polyfill for UserTiming (http://www.w3.org/TR/user-timing/)
    //
    // Copyright 2013 Nic Jansma
    // http://nicj.net
    //
    // https://github.com/nicjansma/usertiming.js
    //
    // Licensed under the MIT license
    //
    (function (window) {
        "use strict";

        // allow running in Node.js environment

        if (typeof window === "undefined") {
            window = {};
        }

        // prepare base perf object
        if (typeof window.performance === "undefined") {
            window.performance = {};
        }

        // We need to keep a global reference to the window.performance object to
        // prevent any added properties from being garbage-collected in Safari 8.
        // https://bugs.webkit.org/show_bug.cgi?id=137407
        window._perfRefForUserTimingPolyfill = window.performance;

        //
        // Note what we shimmed
        //
        window.performance.userTimingJsNow = false;
        window.performance.userTimingJsNowPrefixed = false;
        window.performance.userTimingJsUserTiming = false;
        window.performance.userTimingJsUserTimingPrefixed = false;
        window.performance.userTimingJsPerformanceTimeline = false;
        window.performance.userTimingJsPerformanceTimelinePrefixed = false;

        // for prefixed support
        var prefixes = [];
        var methods = [];
        var methodTest = null;
        var i, j;

        //
        // window.performance.now() shim
        //  http://www.w3.org/TR/hr-time/
        //
        if (typeof window.performance.now !== "function") {
            window.performance.userTimingJsNow = true;

            // copy prefixed version over if it exists
            methods = ["webkitNow", "msNow", "mozNow"];

            for (i = 0; i < methods.length; i++) {
                if (typeof window.performance[methods[i]] === "function") {
                    window.performance.now = window.performance[methods[i]];

                    window.performance.userTimingJsNowPrefixed = true;

                    break;
                }
            }

            //
            // now() should be a DOMHighResTimeStamp, which is defined as being a time relative
            // to navigationStart of the PerformanceTiming (PT) interface.  If this browser supports
            // PT, use that as our relative start.  Otherwise, use "now" as the start and all other
            // now() calls will be relative to our initialization.
            //

            var nowOffset = +new Date();
            if (window.performance.timing && window.performance.timing.navigationStart) {
                nowOffset = window.performance.timing.navigationStart;
            } else if (typeof process !== "undefined" && typeof process.hrtime === "function") {
                nowOffset = process.hrtime();
                window.performance.now = function () {
                    var time = process.hrtime(nowOffset);
                    return time[0] * 1e3 + time[1] * 1e-6;
                };
            }

            if (typeof window.performance.now !== "function") {
                // No browser support, fall back to Date.now
                if (Date.now) {
                    window.performance.now = function () {
                        return Date.now() - nowOffset;
                    };
                } else {
                    // no Date.now support, get the time from new Date()
                    window.performance.now = function () {
                        return +new Date() - nowOffset;
                    };
                }
            }
        }

        //
        // PerformanceTimeline (PT) shims
        //  http://www.w3.org/TR/performance-timeline/
        //

        /**
         * Adds an object to our internal Performance Timeline array.
         *
         * Will be blank if the environment supports PT.
         */
        var addToPerformanceTimeline = function () {};

        /**
         * Clears the specified entry types from our timeline array.
         *
         * Will be blank if the environment supports PT.
         */
        var clearEntriesFromPerformanceTimeline = function () {};

        // performance timeline array
        var performanceTimeline = [];

        // whether or not the timeline will require sort on getEntries()
        var performanceTimelineRequiresSort = false;

        // whether or not ResourceTiming is natively supported but UserTiming is
        // not (eg Firefox 35)
        var hasNativeGetEntriesButNotUserTiming = false;

        //
        // If getEntries() and mark() aren't defined, we'll assume
        // we have to shim at least some PT functions.
        //
        if (typeof window.performance.getEntries !== "function" || typeof window.performance.mark !== "function") {

            if (typeof window.performance.getEntries === "function" && typeof window.performance.mark !== "function") {
                hasNativeGetEntriesButNotUserTiming = true;
            }

            window.performance.userTimingJsPerformanceTimeline = true;

            // copy prefixed version over if it exists
            prefixes = ["webkit", "moz"];
            methods = ["getEntries", "getEntriesByName", "getEntriesByType"];

            for (i = 0; i < methods.length; i++) {
                for (j = 0; j < prefixes.length; j++) {
                    // prefixed method will likely have an upper-case first letter
                    methodTest = prefixes[j] + methods[i].substr(0, 1).toUpperCase() + methods[i].substr(1);

                    if (typeof window.performance[methodTest] === "function") {
                        window.performance[methods[i]] = window.performance[methodTest];

                        window.performance.userTimingJsPerformanceTimelinePrefixed = true;
                    }
                }
            }

            /**
             * Adds an object to our internal Performance Timeline array.
             *
             * @param {Object} obj PerformanceEntry
             */
            addToPerformanceTimeline = function (obj) {
                performanceTimeline.push(obj);

                //
                // If we insert a measure, its startTime may be out of order
                // from the rest of the entries because the use can use any
                // mark as the start time.  If so, note we have to sort it before
                // returning getEntries();
                //
                if (obj.entryType === "measure") {
                    performanceTimelineRequiresSort = true;
                }
            };

            /**
             * Ensures our PT array is in the correct sorted order (by startTime)
             */
            var ensurePerformanceTimelineOrder = function () {
                if (!performanceTimelineRequiresSort) {
                    return;
                }

                //
                // Measures, which may be in this list, may enter the list in
                // an unsorted order. For example:
                //
                //  1. measure("a")
                //  2. mark("start_mark")
                //  3. measure("b", "start_mark")
                //  4. measure("c")
                //  5. getEntries()
                //
                // When calling #5, we should return [a,c,b] because technically the start time
                // of c is "0" (navigationStart), which will occur before b's start time due to the mark.
                //
                performanceTimeline.sort(function (a, b) {
                    return a.startTime - b.startTime;
                });

                performanceTimelineRequiresSort = false;
            };

            /**
             * Clears the specified entry types from our timeline array.
             *
             * @param {string} entryType Entry type (eg "mark" or "measure")
             * @param {string} [name] Entry name (optional)
             */
            clearEntriesFromPerformanceTimeline = function (entryType, name) {
                // clear all entries from the perf timeline
                i = 0;
                while (i < performanceTimeline.length) {
                    if (performanceTimeline[i].entryType !== entryType) {
                        // unmatched entry type
                        i++;
                        continue;
                    }

                    if (typeof name !== "undefined" && performanceTimeline[i].name !== name) {
                        // unmatched name
                        i++;
                        continue;
                    }

                    // this entry matches our criteria, remove just it
                    performanceTimeline.splice(i, 1);
                }
            };

            if (typeof window.performance.getEntries !== "function" || hasNativeGetEntriesButNotUserTiming) {
                var origGetEntries = window.performance.getEntries;

                /**
                 * Gets all entries from the Performance Timeline.
                 * http://www.w3.org/TR/performance-timeline/#dom-performance-getentries
                 *
                 * NOTE: This will only ever return marks and measures.
                 *
                 * @returns {PerformanceEntry[]} Array of PerformanceEntrys
                 */
                window.performance.getEntries = function () {
                    ensurePerformanceTimelineOrder();

                    // get a copy of all of our entries
                    var entries = performanceTimeline.slice(0);

                    // if there was a native version of getEntries, add that
                    if (hasNativeGetEntriesButNotUserTiming && origGetEntries) {
                        // merge in native
                        Array.prototype.push.apply(entries, origGetEntries.call(window.performance));

                        // sort by startTime
                        entries.sort(function (a, b) {
                            return a.startTime - b.startTime;
                        });
                    }

                    return entries;
                };
            }

            if (typeof window.performance.getEntriesByType !== "function" || hasNativeGetEntriesButNotUserTiming) {
                var origGetEntriesByType = window.performance.getEntriesByType;

                /**
                 * Gets all entries from the Performance Timeline of the specified type.
                 * http://www.w3.org/TR/performance-timeline/#dom-performance-getentriesbytype
                 *
                 * NOTE: This will only work for marks and measures.
                 *
                 * @param {string} entryType Entry type (eg "mark" or "measure")
                 *
                 * @returns {PerformanceEntry[]} Array of PerformanceEntrys
                 */
                window.performance.getEntriesByType = function (entryType) {
                    // we only support marks/measures
                    if (typeof entryType === "undefined" || entryType !== "mark" && entryType !== "measure") {

                        if (hasNativeGetEntriesButNotUserTiming && origGetEntriesByType) {
                            // native version exists, forward
                            return origGetEntriesByType.call(window.performance, entryType);
                        }

                        return [];
                    }

                    // see note in ensurePerformanceTimelineOrder() on why this is required
                    if (entryType === "measure") {
                        ensurePerformanceTimelineOrder();
                    }

                    // find all entries of entryType
                    var entries = [];
                    for (i = 0; i < performanceTimeline.length; i++) {
                        if (performanceTimeline[i].entryType === entryType) {
                            entries.push(performanceTimeline[i]);
                        }
                    }

                    return entries;
                };
            }

            if (typeof window.performance.getEntriesByName !== "function" || hasNativeGetEntriesButNotUserTiming) {
                var origGetEntriesByName = window.performance.getEntriesByName;

                /**
                 * Gets all entries from the Performance Timeline of the specified
                 * name, and optionally, type.
                 * http://www.w3.org/TR/performance-timeline/#dom-performance-getentriesbyname
                 *
                 * NOTE: This will only work for marks and measures.
                 *
                 * @param {string} name Entry name
                 * @param {string} [entryType] Entry type (eg "mark" or "measure")
                 *
                 * @returns {PerformanceEntry[]} Array of PerformanceEntrys
                 */
                window.performance.getEntriesByName = function (name, entryType) {
                    if (entryType && entryType !== "mark" && entryType !== "measure") {
                        if (hasNativeGetEntriesButNotUserTiming && origGetEntriesByName) {
                            // native version exists, forward
                            return origGetEntriesByName.call(window.performance, name, entryType);
                        }

                        return [];
                    }

                    // see note in ensurePerformanceTimelineOrder() on why this is required
                    if (typeof entryType !== "undefined" && entryType === "measure") {
                        ensurePerformanceTimelineOrder();
                    }

                    // find all entries of the name and (optionally) type
                    var entries = [];
                    for (i = 0; i < performanceTimeline.length; i++) {
                        if (typeof entryType !== "undefined" && performanceTimeline[i].entryType !== entryType) {
                            continue;
                        }

                        if (performanceTimeline[i].name === name) {
                            entries.push(performanceTimeline[i]);
                        }
                    }

                    if (hasNativeGetEntriesButNotUserTiming && origGetEntriesByName) {
                        // merge in native
                        Array.prototype.push.apply(entries, origGetEntriesByName.call(window.performance, name, entryType));

                        // sort by startTime
                        entries.sort(function (a, b) {
                            return a.startTime - b.startTime;
                        });
                    }

                    return entries;
                };
            }
        }

        //
        // UserTiming support
        //
        if (typeof window.performance.mark !== "function") {
            window.performance.userTimingJsUserTiming = true;

            // copy prefixed version over if it exists
            prefixes = ["webkit", "moz", "ms"];
            methods = ["mark", "measure", "clearMarks", "clearMeasures"];

            for (i = 0; i < methods.length; i++) {
                for (j = 0; j < prefixes.length; j++) {
                    // prefixed method will likely have an upper-case first letter
                    methodTest = prefixes[j] + methods[i].substr(0, 1).toUpperCase() + methods[i].substr(1);

                    if (typeof window.performance[methodTest] === "function") {
                        window.performance[methods[i]] = window.performance[methodTest];

                        window.performance.userTimingJsUserTimingPrefixed = true;
                    }
                }
            }

            // only used for measure(), to quickly see the latest timestamp of a mark
            var marks = {};

            if (typeof window.performance.mark !== "function") {
                /**
                 * UserTiming mark
                 * http://www.w3.org/TR/user-timing/#dom-performance-mark
                 *
                 * @param {string} markName Mark name
                 */
                window.performance.mark = function (markName) {
                    var now = window.performance.now();

                    // mark name is required
                    if (typeof markName === "undefined") {
                        throw new SyntaxError("Mark name must be specified");
                    }

                    // mark name can't be a NT timestamp
                    if (window.performance.timing && markName in window.performance.timing) {
                        throw new SyntaxError("Mark name is not allowed");
                    }

                    if (!marks[markName]) {
                        marks[markName] = [];
                    }

                    marks[markName].push(now);

                    // add to perf timeline as well
                    addToPerformanceTimeline({
                        entryType: "mark",
                        name: markName,
                        startTime: now,
                        duration: 0
                    });
                };
            }

            if (typeof window.performance.clearMarks !== "function") {
                /**
                 * UserTiming clear marks
                 * http://www.w3.org/TR/user-timing/#dom-performance-clearmarks
                 *
                 * @param {string} markName Mark name
                 */
                window.performance.clearMarks = function (markName) {
                    if (!markName) {
                        // clear all marks
                        marks = {};
                    } else {
                        marks[markName] = [];
                    }

                    clearEntriesFromPerformanceTimeline("mark", markName);
                };
            }

            if (typeof window.performance.measure !== "function") {
                /**
                 * UserTiming measure
                 * http://www.w3.org/TR/user-timing/#dom-performance-measure
                 *
                 * @param {string} measureName Measure name
                 * @param {string} [startMark] Start mark name
                 * @param {string} [endMark] End mark name
                 */
                window.performance.measure = function (measureName, startMark, endMark) {
                    var now = window.performance.now();

                    if (typeof measureName === "undefined") {
                        throw new SyntaxError("Measure must be specified");
                    }

                    // if there isn't a startMark, we measure from navigationStart to now
                    if (!startMark) {
                        // add to perf timeline as well
                        addToPerformanceTimeline({
                            entryType: "measure",
                            name: measureName,
                            startTime: 0,
                            duration: now
                        });

                        return;
                    }

                    //
                    // If there is a startMark, check for it first in the NavigationTiming interface,
                    // then check our own marks.
                    //
                    var startMarkTime = 0;
                    if (window.performance.timing && startMark in window.performance.timing) {
                        // mark cannot have a timing of 0
                        if (startMark !== "navigationStart" && window.performance.timing[startMark] === 0) {
                            throw new Error(startMark + " has a timing of 0");
                        }

                        // time is the offset of this mark to navigationStart's time
                        startMarkTime = window.performance.timing[startMark] - window.performance.timing.navigationStart;
                    } else if (startMark in marks) {
                        startMarkTime = marks[startMark][marks[startMark].length - 1];
                    } else {
                        throw new Error(startMark + " mark not found");
                    }

                    //
                    // If there is a endMark, check for it first in the NavigationTiming interface,
                    // then check our own marks.
                    //
                    var endMarkTime = now;

                    if (endMark) {
                        endMarkTime = 0;

                        if (window.performance.timing && endMark in window.performance.timing) {
                            // mark cannot have a timing of 0
                            if (endMark !== "navigationStart" && window.performance.timing[endMark] === 0) {
                                throw new Error(endMark + " has a timing of 0");
                            }

                            // time is the offset of this mark to navigationStart's time
                            endMarkTime = window.performance.timing[endMark] - window.performance.timing.navigationStart;
                        } else if (endMark in marks) {
                            endMarkTime = marks[endMark][marks[endMark].length - 1];
                        } else {
                            throw new Error(endMark + " mark not found");
                        }
                    }

                    // add to our measure array
                    var duration = endMarkTime - startMarkTime;

                    // add to perf timeline as well
                    addToPerformanceTimeline({
                        entryType: "measure",
                        name: measureName,
                        startTime: startMarkTime,
                        duration: duration
                    });
                };
            }

            if (typeof window.performance.clearMeasures !== "function") {
                /**
                 * UserTiming clear measures
                 * http://www.w3.org/TR/user-timing/#dom-performance-clearmeasures
                 *
                 * @param {string} measureName Measure name
                 */
                window.performance.clearMeasures = function (measureName) {
                    clearEntriesFromPerformanceTimeline("measure", measureName);
                };
            }
        }

        //
        // Export UserTiming to the appropriate location.
        //
        // When included directly via a script tag in the browser, we're good as we've been
        // updating the window.performance object.
        //
        if (typeof undefined === "function" && define.amd) {
            //
            // AMD / RequireJS
            //
            define([], function () {
                return window.performance;
            });
        } else if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
            //
            // Node.js
            //
            module.exports = window.performance;
        }
    })(typeof window !== "undefined" ? window : undefined);
});
$__System.registerDynamic('e', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  (function (self) {
    'use strict';

    if (self.fetch) {
      return;
    }

    var support = {
      searchParams: 'URLSearchParams' in self,
      iterable: 'Symbol' in self && 'iterator' in Symbol,
      blob: 'FileReader' in self && 'Blob' in self && function () {
        try {
          new Blob();
          return true;
        } catch (e) {
          return false;
        }
      }(),
      formData: 'FormData' in self,
      arrayBuffer: 'ArrayBuffer' in self
    };

    if (support.arrayBuffer) {
      var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];

      var isDataView = function (obj) {
        return obj && DataView.prototype.isPrototypeOf(obj);
      };

      var isArrayBufferView = ArrayBuffer.isView || function (obj) {
        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
      };
    }

    function normalizeName(name) {
      if (typeof name !== 'string') {
        name = String(name);
      }
      if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
        throw new TypeError('Invalid character in header field name');
      }
      return name.toLowerCase();
    }

    function normalizeValue(value) {
      if (typeof value !== 'string') {
        value = String(value);
      }
      return value;
    }

    // Build a destructive iterator for the value list
    function iteratorFor(items) {
      var iterator = {
        next: function () {
          var value = items.shift();
          return { done: value === undefined, value: value };
        }
      };

      if (support.iterable) {
        iterator[Symbol.iterator] = function () {
          return iterator;
        };
      }

      return iterator;
    }

    function Headers(headers) {
      this.map = {};

      if (headers instanceof Headers) {
        headers.forEach(function (value, name) {
          this.append(name, value);
        }, this);
      } else if (Array.isArray(headers)) {
        headers.forEach(function (header) {
          this.append(header[0], header[1]);
        }, this);
      } else if (headers) {
        Object.getOwnPropertyNames(headers).forEach(function (name) {
          this.append(name, headers[name]);
        }, this);
      }
    }

    Headers.prototype.append = function (name, value) {
      name = normalizeName(name);
      value = normalizeValue(value);
      var oldValue = this.map[name];
      this.map[name] = oldValue ? oldValue + ',' + value : value;
    };

    Headers.prototype['delete'] = function (name) {
      delete this.map[normalizeName(name)];
    };

    Headers.prototype.get = function (name) {
      name = normalizeName(name);
      return this.has(name) ? this.map[name] : null;
    };

    Headers.prototype.has = function (name) {
      return this.map.hasOwnProperty(normalizeName(name));
    };

    Headers.prototype.set = function (name, value) {
      this.map[normalizeName(name)] = normalizeValue(value);
    };

    Headers.prototype.forEach = function (callback, thisArg) {
      for (var name in this.map) {
        if (this.map.hasOwnProperty(name)) {
          callback.call(thisArg, this.map[name], name, this);
        }
      }
    };

    Headers.prototype.keys = function () {
      var items = [];
      this.forEach(function (value, name) {
        items.push(name);
      });
      return iteratorFor(items);
    };

    Headers.prototype.values = function () {
      var items = [];
      this.forEach(function (value) {
        items.push(value);
      });
      return iteratorFor(items);
    };

    Headers.prototype.entries = function () {
      var items = [];
      this.forEach(function (value, name) {
        items.push([name, value]);
      });
      return iteratorFor(items);
    };

    if (support.iterable) {
      Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
    }

    function consumed(body) {
      if (body.bodyUsed) {
        return Promise.reject(new TypeError('Already read'));
      }
      body.bodyUsed = true;
    }

    function fileReaderReady(reader) {
      return new Promise(function (resolve, reject) {
        reader.onload = function () {
          resolve(reader.result);
        };
        reader.onerror = function () {
          reject(reader.error);
        };
      });
    }

    function readBlobAsArrayBuffer(blob) {
      var reader = new FileReader();
      var promise = fileReaderReady(reader);
      reader.readAsArrayBuffer(blob);
      return promise;
    }

    function readBlobAsText(blob) {
      var reader = new FileReader();
      var promise = fileReaderReady(reader);
      reader.readAsText(blob);
      return promise;
    }

    function readArrayBufferAsText(buf) {
      var view = new Uint8Array(buf);
      var chars = new Array(view.length);

      for (var i = 0; i < view.length; i++) {
        chars[i] = String.fromCharCode(view[i]);
      }
      return chars.join('');
    }

    function bufferClone(buf) {
      if (buf.slice) {
        return buf.slice(0);
      } else {
        var view = new Uint8Array(buf.byteLength);
        view.set(new Uint8Array(buf));
        return view.buffer;
      }
    }

    function Body() {
      this.bodyUsed = false;

      this._initBody = function (body) {
        this._bodyInit = body;
        if (!body) {
          this._bodyText = '';
        } else if (typeof body === 'string') {
          this._bodyText = body;
        } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
          this._bodyBlob = body;
        } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
          this._bodyFormData = body;
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this._bodyText = body.toString();
        } else if (support.arrayBuffer && support.blob && isDataView(body)) {
          this._bodyArrayBuffer = bufferClone(body.buffer);
          // IE 10-11 can't handle a DataView body.
          this._bodyInit = new Blob([this._bodyArrayBuffer]);
        } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
          this._bodyArrayBuffer = bufferClone(body);
        } else {
          throw new Error('unsupported BodyInit type');
        }

        if (!this.headers.get('content-type')) {
          if (typeof body === 'string') {
            this.headers.set('content-type', 'text/plain;charset=UTF-8');
          } else if (this._bodyBlob && this._bodyBlob.type) {
            this.headers.set('content-type', this._bodyBlob.type);
          } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
            this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
          }
        }
      };

      if (support.blob) {
        this.blob = function () {
          var rejected = consumed(this);
          if (rejected) {
            return rejected;
          }

          if (this._bodyBlob) {
            return Promise.resolve(this._bodyBlob);
          } else if (this._bodyArrayBuffer) {
            return Promise.resolve(new Blob([this._bodyArrayBuffer]));
          } else if (this._bodyFormData) {
            throw new Error('could not read FormData body as blob');
          } else {
            return Promise.resolve(new Blob([this._bodyText]));
          }
        };

        this.arrayBuffer = function () {
          if (this._bodyArrayBuffer) {
            return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
          } else {
            return this.blob().then(readBlobAsArrayBuffer);
          }
        };
      }

      this.text = function () {
        var rejected = consumed(this);
        if (rejected) {
          return rejected;
        }

        if (this._bodyBlob) {
          return readBlobAsText(this._bodyBlob);
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as text');
        } else {
          return Promise.resolve(this._bodyText);
        }
      };

      if (support.formData) {
        this.formData = function () {
          return this.text().then(decode);
        };
      }

      this.json = function () {
        return this.text().then(JSON.parse);
      };

      return this;
    }

    // HTTP methods whose capitalization should be normalized
    var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

    function normalizeMethod(method) {
      var upcased = method.toUpperCase();
      return methods.indexOf(upcased) > -1 ? upcased : method;
    }

    function Request(input, options) {
      options = options || {};
      var body = options.body;

      if (input instanceof Request) {
        if (input.bodyUsed) {
          throw new TypeError('Already read');
        }
        this.url = input.url;
        this.credentials = input.credentials;
        if (!options.headers) {
          this.headers = new Headers(input.headers);
        }
        this.method = input.method;
        this.mode = input.mode;
        if (!body && input._bodyInit != null) {
          body = input._bodyInit;
          input.bodyUsed = true;
        }
      } else {
        this.url = String(input);
      }

      this.credentials = options.credentials || this.credentials || 'omit';
      if (options.headers || !this.headers) {
        this.headers = new Headers(options.headers);
      }
      this.method = normalizeMethod(options.method || this.method || 'GET');
      this.mode = options.mode || this.mode || null;
      this.referrer = null;

      if ((this.method === 'GET' || this.method === 'HEAD') && body) {
        throw new TypeError('Body not allowed for GET or HEAD requests');
      }
      this._initBody(body);
    }

    Request.prototype.clone = function () {
      return new Request(this, { body: this._bodyInit });
    };

    function decode(body) {
      var form = new FormData();
      body.trim().split('&').forEach(function (bytes) {
        if (bytes) {
          var split = bytes.split('=');
          var name = split.shift().replace(/\+/g, ' ');
          var value = split.join('=').replace(/\+/g, ' ');
          form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
      });
      return form;
    }

    function parseHeaders(rawHeaders) {
      var headers = new Headers();
      rawHeaders.split(/\r?\n/).forEach(function (line) {
        var parts = line.split(':');
        var key = parts.shift().trim();
        if (key) {
          var value = parts.join(':').trim();
          headers.append(key, value);
        }
      });
      return headers;
    }

    Body.call(Request.prototype);

    function Response(bodyInit, options) {
      if (!options) {
        options = {};
      }

      this.type = 'default';
      this.status = 'status' in options ? options.status : 200;
      this.ok = this.status >= 200 && this.status < 300;
      this.statusText = 'statusText' in options ? options.statusText : 'OK';
      this.headers = new Headers(options.headers);
      this.url = options.url || '';
      this._initBody(bodyInit);
    }

    Body.call(Response.prototype);

    Response.prototype.clone = function () {
      return new Response(this._bodyInit, {
        status: this.status,
        statusText: this.statusText,
        headers: new Headers(this.headers),
        url: this.url
      });
    };

    Response.error = function () {
      var response = new Response(null, { status: 0, statusText: '' });
      response.type = 'error';
      return response;
    };

    var redirectStatuses = [301, 302, 303, 307, 308];

    Response.redirect = function (url, status) {
      if (redirectStatuses.indexOf(status) === -1) {
        throw new RangeError('Invalid status code');
      }

      return new Response(null, { status: status, headers: { location: url } });
    };

    self.Headers = Headers;
    self.Request = Request;
    self.Response = Response;

    self.fetch = function (input, init) {
      return new Promise(function (resolve, reject) {
        var request = new Request(input, init);
        var xhr = new XMLHttpRequest();

        xhr.onload = function () {
          var options = {
            status: xhr.status,
            statusText: xhr.statusText,
            headers: parseHeaders(xhr.getAllResponseHeaders() || '')
          };
          options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
          var body = 'response' in xhr ? xhr.response : xhr.responseText;
          resolve(new Response(body, options));
        };

        xhr.onerror = function () {
          reject(new TypeError('Network request failed'));
        };

        xhr.ontimeout = function () {
          reject(new TypeError('Network request failed'));
        };

        xhr.open(request.method, request.url, true);

        if (request.credentials === 'include') {
          xhr.withCredentials = true;
        }

        if ('responseType' in xhr && support.blob) {
          xhr.responseType = 'blob';
        }

        request.headers.forEach(function (value, name) {
          xhr.setRequestHeader(name, value);
        });

        xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
      });
    };
    self.fetch.polyfill = true;
  })(typeof self !== 'undefined' ? self : exports);
});
$__System.registerDynamic('f', ['10', '11', '12', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // all enumerable object keys, includes symbols
  var getKeys = $__require('10');
  var gOPS = $__require('11');
  var pIE = $__require('12');
  module.exports = function (it) {
    var result = getKeys(it);
    var getSymbols = gOPS.f;
    if (getSymbols) {
      var symbols = getSymbols(it);
      var isEnum = pIE.f;
      var i = 0;
      var key;
      while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
    }return result;
  };
});
$__System.registerDynamic('13', ['14', '15', '16', '17', '18', '19', '1a', '1b', '1c', '1d', '1e', '1f', '20', 'f', '21', '22', '23', '24', '25', '26', '27', '28', '29', '2a', '10', '2b', '12', '11', '2c', '2d', 'd'], true, function ($__require, exports, module) {
  'use strict';
  // ECMAScript 6 symbols shim

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var global = $__require('14');
  var has = $__require('15');
  var DESCRIPTORS = $__require('16');
  var $export = $__require('17');
  var redefine = $__require('18');
  var META = $__require('19').KEY;
  var $fails = $__require('1a');
  var shared = $__require('1b');
  var setToStringTag = $__require('1c');
  var uid = $__require('1d');
  var wks = $__require('1e');
  var wksExt = $__require('1f');
  var wksDefine = $__require('20');
  var enumKeys = $__require('f');
  var isArray = $__require('21');
  var anObject = $__require('22');
  var isObject = $__require('23');
  var toIObject = $__require('24');
  var toPrimitive = $__require('25');
  var createDesc = $__require('26');
  var _create = $__require('27');
  var gOPNExt = $__require('28');
  var $GOPD = $__require('29');
  var $DP = $__require('2a');
  var $keys = $__require('10');
  var gOPD = $GOPD.f;
  var dP = $DP.f;
  var gOPN = gOPNExt.f;
  var $Symbol = global.Symbol;
  var $JSON = global.JSON;
  var _stringify = $JSON && $JSON.stringify;
  var PROTOTYPE = 'prototype';
  var HIDDEN = wks('_hidden');
  var TO_PRIMITIVE = wks('toPrimitive');
  var isEnum = {}.propertyIsEnumerable;
  var SymbolRegistry = shared('symbol-registry');
  var AllSymbols = shared('symbols');
  var OPSymbols = shared('op-symbols');
  var ObjectProto = Object[PROTOTYPE];
  var USE_NATIVE = typeof $Symbol == 'function';
  var QObject = global.QObject;
  // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
  var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

  // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
  var setSymbolDesc = DESCRIPTORS && $fails(function () {
    return _create(dP({}, 'a', {
      get: function () {
        return dP(this, 'a', { value: 7 }).a;
      }
    })).a != 7;
  }) ? function (it, key, D) {
    var protoDesc = gOPD(ObjectProto, key);
    if (protoDesc) delete ObjectProto[key];
    dP(it, key, D);
    if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
  } : dP;

  var wrap = function (tag) {
    var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
    sym._k = tag;
    return sym;
  };

  var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    return it instanceof $Symbol;
  };

  var $defineProperty = function defineProperty(it, key, D) {
    if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
    anObject(it);
    key = toPrimitive(key, true);
    anObject(D);
    if (has(AllSymbols, key)) {
      if (!D.enumerable) {
        if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
        it[HIDDEN][key] = true;
      } else {
        if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
        D = _create(D, { enumerable: createDesc(0, false) });
      }return setSymbolDesc(it, key, D);
    }return dP(it, key, D);
  };
  var $defineProperties = function defineProperties(it, P) {
    anObject(it);
    var keys = enumKeys(P = toIObject(P));
    var i = 0;
    var l = keys.length;
    var key;
    while (l > i) $defineProperty(it, key = keys[i++], P[key]);
    return it;
  };
  var $create = function create(it, P) {
    return P === undefined ? _create(it) : $defineProperties(_create(it), P);
  };
  var $propertyIsEnumerable = function propertyIsEnumerable(key) {
    var E = isEnum.call(this, key = toPrimitive(key, true));
    if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
    return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
  };
  var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
    it = toIObject(it);
    key = toPrimitive(key, true);
    if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
    var D = gOPD(it, key);
    if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
    return D;
  };
  var $getOwnPropertyNames = function getOwnPropertyNames(it) {
    var names = gOPN(toIObject(it));
    var result = [];
    var i = 0;
    var key;
    while (names.length > i) {
      if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
    }return result;
  };
  var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
    var IS_OP = it === ObjectProto;
    var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
    var result = [];
    var i = 0;
    var key;
    while (names.length > i) {
      if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
    }return result;
  };

  // 19.4.1.1 Symbol([description])
  if (!USE_NATIVE) {
    $Symbol = function Symbol() {
      if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
      var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
      var $set = function (value) {
        if (this === ObjectProto) $set.call(OPSymbols, value);
        if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
        setSymbolDesc(this, tag, createDesc(1, value));
      };
      if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
      return wrap(tag);
    };
    redefine($Symbol[PROTOTYPE], 'toString', function toString() {
      return this._k;
    });

    $GOPD.f = $getOwnPropertyDescriptor;
    $DP.f = $defineProperty;
    $__require('2b').f = gOPNExt.f = $getOwnPropertyNames;
    $__require('12').f = $propertyIsEnumerable;
    $__require('11').f = $getOwnPropertySymbols;

    if (DESCRIPTORS && !$__require('2c')) {
      redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
    }

    wksExt.f = function (name) {
      return wrap(wks(name));
    };
  }

  $export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

  for (var es6Symbols =
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) wks(es6Symbols[j++]);

  for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

  $export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
    // 19.4.2.1 Symbol.for(key)
    'for': function (key) {
      return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
    },
    // 19.4.2.5 Symbol.keyFor(sym)
    keyFor: function keyFor(sym) {
      if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
      for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
    },
    useSetter: function () {
      setter = true;
    },
    useSimple: function () {
      setter = false;
    }
  });

  $export($export.S + $export.F * !USE_NATIVE, 'Object', {
    // 19.1.2.2 Object.create(O [, Properties])
    create: $create,
    // 19.1.2.4 Object.defineProperty(O, P, Attributes)
    defineProperty: $defineProperty,
    // 19.1.2.3 Object.defineProperties(O, Properties)
    defineProperties: $defineProperties,
    // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
    // 19.1.2.7 Object.getOwnPropertyNames(O)
    getOwnPropertyNames: $getOwnPropertyNames,
    // 19.1.2.8 Object.getOwnPropertySymbols(O)
    getOwnPropertySymbols: $getOwnPropertySymbols
  });

  // 24.3.2 JSON.stringify(value [, replacer [, space]])
  $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
    var S = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    // WebKit converts symbol values to JSON as null
    // V8 throws on boxed symbols
    return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
  })), 'JSON', {
    stringify: function stringify(it) {
      var args = [it];
      var i = 1;
      var replacer, $replacer;
      while (arguments.length > i) args.push(arguments[i++]);
      $replacer = replacer = args[1];
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return _stringify.apply($JSON, args);
    }
  });

  // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
  $Symbol[PROTOTYPE][TO_PRIMITIVE] || $__require('2d')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
  // 19.4.3.5 Symbol.prototype[@@toStringTag]
  setToStringTag($Symbol, 'Symbol');
  // 20.2.1.9 Math[@@toStringTag]
  setToStringTag(Math, 'Math', true);
  // 24.3.3 JSON[@@toStringTag]
  setToStringTag(global.JSON, 'JSON', true);
});
$__System.registerDynamic('2e', ['17', '27', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
  $export($export.S, 'Object', { create: $__require('27') });
});
$__System.registerDynamic('2f', ['17', '16', '2a', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
  $export($export.S + $export.F * !$__require('16'), 'Object', { defineProperty: $__require('2a').f });
});
$__System.registerDynamic('30', ['17', '16', '31', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
  $export($export.S + $export.F * !$__require('16'), 'Object', { defineProperties: $__require('31') });
});
$__System.registerDynamic('32', ['24', '29', '33', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  var toIObject = $__require('24');
  var $getOwnPropertyDescriptor = $__require('29').f;

  $__require('33')('getOwnPropertyDescriptor', function () {
    return function getOwnPropertyDescriptor(it, key) {
      return $getOwnPropertyDescriptor(toIObject(it), key);
    };
  });
});
$__System.registerDynamic('34', ['35', '36', '33', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 19.1.2.9 Object.getPrototypeOf(O)
  var toObject = $__require('35');
  var $getPrototypeOf = $__require('36');

  $__require('33')('getPrototypeOf', function () {
    return function getPrototypeOf(it) {
      return $getPrototypeOf(toObject(it));
    };
  });
});
$__System.registerDynamic('37', ['35', '10', '33', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 19.1.2.14 Object.keys(O)
  var toObject = $__require('35');
  var $keys = $__require('10');

  $__require('33')('keys', function () {
    return function keys(it) {
      return $keys(toObject(it));
    };
  });
});
$__System.registerDynamic('28', ['24', '2b', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
  var toIObject = $__require('24');
  var gOPN = $__require('2b').f;
  var toString = {}.toString;

  var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

  var getWindowNames = function (it) {
    try {
      return gOPN(it);
    } catch (e) {
      return windowNames.slice();
    }
  };

  module.exports.f = function getOwnPropertyNames(it) {
    return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
  };
});
$__System.registerDynamic('38', ['33', '28', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  $__require('33')('getOwnPropertyNames', function () {
    return $__require('28').f;
  });
});
$__System.registerDynamic('39', ['23', '19', '33', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 19.1.2.5 Object.freeze(O)
  var isObject = $__require('23');
  var meta = $__require('19').onFreeze;

  $__require('33')('freeze', function ($freeze) {
    return function freeze(it) {
      return $freeze && isObject(it) ? $freeze(meta(it)) : it;
    };
  });
});
$__System.registerDynamic('3a', ['23', '19', '33', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 19.1.2.17 Object.seal(O)
  var isObject = $__require('23');
  var meta = $__require('19').onFreeze;

  $__require('33')('seal', function ($seal) {
    return function seal(it) {
      return $seal && isObject(it) ? $seal(meta(it)) : it;
    };
  });
});
$__System.registerDynamic('3b', ['23', '19', '33', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 19.1.2.15 Object.preventExtensions(O)
  var isObject = $__require('23');
  var meta = $__require('19').onFreeze;

  $__require('33')('preventExtensions', function ($preventExtensions) {
    return function preventExtensions(it) {
      return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
    };
  });
});
$__System.registerDynamic('3c', ['23', '33', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 19.1.2.12 Object.isFrozen(O)
  var isObject = $__require('23');

  $__require('33')('isFrozen', function ($isFrozen) {
    return function isFrozen(it) {
      return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
    };
  });
});
$__System.registerDynamic('3d', ['23', '33', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 19.1.2.13 Object.isSealed(O)
  var isObject = $__require('23');

  $__require('33')('isSealed', function ($isSealed) {
    return function isSealed(it) {
      return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
    };
  });
});
$__System.registerDynamic('33', ['17', '3e', '1a', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // most Object methods by ES6 should accept primitives
  var $export = $__require('17');
  var core = $__require('3e');
  var fails = $__require('1a');
  module.exports = function (KEY, exec) {
    var fn = (core.Object || {})[KEY] || Object[KEY];
    var exp = {};
    exp[KEY] = exec(fn);
    $export($export.S + $export.F * fails(function () {
      fn(1);
    }), 'Object', exp);
  };
});
$__System.registerDynamic('3f', ['23', '33', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 19.1.2.11 Object.isExtensible(O)
  var isObject = $__require('23');

  $__require('33')('isExtensible', function ($isExtensible) {
    return function isExtensible(it) {
      return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
    };
  });
});
$__System.registerDynamic('40', ['17', '41', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 19.1.3.1 Object.assign(target, source)
  var $export = $__require('17');

  $export($export.S + $export.F, 'Object', { assign: $__require('41') });
});
$__System.registerDynamic('42', ['17', '43', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 19.1.3.10 Object.is(value1, value2)
  var $export = $__require('17');
  $export($export.S, 'Object', { is: $__require('43') });
});
$__System.registerDynamic('44', ['17', '45', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 19.1.3.19 Object.setPrototypeOf(O, proto)
  var $export = $__require('17');
  $export($export.S, 'Object', { setPrototypeOf: $__require('45').set });
});
$__System.registerDynamic('46', ['47', '1e', '18', 'd'], true, function ($__require, exports, module) {
  'use strict';
  // 19.1.3.6 Object.prototype.toString()

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var classof = $__require('47');
  var test = {};
  test[$__require('1e')('toStringTag')] = 'z';
  if (test + '' != '[object z]') {
    $__require('18')(Object.prototype, 'toString', function toString() {
      return '[object ' + classof(this) + ']';
    }, true);
  }
});
$__System.registerDynamic('48', ['17', '49', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
  var $export = $__require('17');

  $export($export.P, 'Function', { bind: $__require('49') });
});
$__System.registerDynamic('4a', ['2a', '16', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var dP = $__require('2a').f;
  var FProto = Function.prototype;
  var nameRE = /^\s*function ([^ (]*)/;
  var NAME = 'name';

  // 19.2.4.2 name
  NAME in FProto || $__require('16') && dP(FProto, NAME, {
    configurable: true,
    get: function () {
      try {
        return ('' + this).match(nameRE)[1];
      } catch (e) {
        return '';
      }
    }
  });
});
$__System.registerDynamic('4b', ['23', '36', '1e', '2a', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var isObject = $__require('23');
  var getPrototypeOf = $__require('36');
  var HAS_INSTANCE = $__require('1e')('hasInstance');
  var FunctionProto = Function.prototype;
  // 19.2.3.6 Function.prototype[@@hasInstance](V)
  if (!(HAS_INSTANCE in FunctionProto)) $__require('2a').f(FunctionProto, HAS_INSTANCE, { value: function (O) {
      if (typeof this != 'function' || !isObject(O)) return false;
      if (!isObject(this.prototype)) return O instanceof this;
      // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
      while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
      return false;
    } });
});
$__System.registerDynamic('4c', ['17', '4d', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var $parseInt = $__require('4d');
  // 18.2.5 parseInt(string, radix)
  $export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });
});
$__System.registerDynamic('4e', ['17', '4f', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var $parseFloat = $__require('4f');
  // 18.2.4 parseFloat(string)
  $export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });
});
$__System.registerDynamic('50', ['14', '15', '51', '52', '25', '1a', '2b', '29', '2a', '53', '27', '16', '18', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var global = $__require('14');
  var has = $__require('15');
  var cof = $__require('51');
  var inheritIfRequired = $__require('52');
  var toPrimitive = $__require('25');
  var fails = $__require('1a');
  var gOPN = $__require('2b').f;
  var gOPD = $__require('29').f;
  var dP = $__require('2a').f;
  var $trim = $__require('53').trim;
  var NUMBER = 'Number';
  var $Number = global[NUMBER];
  var Base = $Number;
  var proto = $Number.prototype;
  // Opera ~12 has broken Object#toString
  var BROKEN_COF = cof($__require('27')(proto)) == NUMBER;
  var TRIM = 'trim' in String.prototype;

  // 7.1.3 ToNumber(argument)
  var toNumber = function (argument) {
    var it = toPrimitive(argument, false);
    if (typeof it == 'string' && it.length > 2) {
      it = TRIM ? it.trim() : $trim(it, 3);
      var first = it.charCodeAt(0);
      var third, radix, maxCode;
      if (first === 43 || first === 45) {
        third = it.charCodeAt(2);
        if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
      } else if (first === 48) {
        switch (it.charCodeAt(1)) {
          case 66:case 98:
            radix = 2;maxCode = 49;break; // fast equal /^0b[01]+$/i
          case 79:case 111:
            radix = 8;maxCode = 55;break; // fast equal /^0o[0-7]+$/i
          default:
            return +it;
        }
        for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
          code = digits.charCodeAt(i);
          // parseInt parses a string to a first unavailable symbol
          // but ToNumber should return NaN if a string contains unavailable symbols
          if (code < 48 || code > maxCode) return NaN;
        }return parseInt(digits, radix);
      }
    }return +it;
  };

  if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
    $Number = function Number(value) {
      var it = arguments.length < 1 ? 0 : value;
      var that = this;
      return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () {
        proto.valueOf.call(that);
      }) : cof(that) != NUMBER) ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
    };
    for (var keys = $__require('16') ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger').split(','), j = 0, key; keys.length > j; j++) {
      if (has(Base, key = keys[j]) && !has($Number, key)) {
        dP($Number, key, gOPD(Base, key));
      }
    }
    $Number.prototype = proto;
    proto.constructor = $Number;
    $__require('18')(global, NUMBER, $Number);
  }
});
$__System.registerDynamic('54', ['17', '55', '56', '57', '1a', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var toInteger = $__require('55');
  var aNumberValue = $__require('56');
  var repeat = $__require('57');
  var $toFixed = 1.0.toFixed;
  var floor = Math.floor;
  var data = [0, 0, 0, 0, 0, 0];
  var ERROR = 'Number.toFixed: incorrect invocation!';
  var ZERO = '0';

  var multiply = function (n, c) {
    var i = -1;
    var c2 = c;
    while (++i < 6) {
      c2 += n * data[i];
      data[i] = c2 % 1e7;
      c2 = floor(c2 / 1e7);
    }
  };
  var divide = function (n) {
    var i = 6;
    var c = 0;
    while (--i >= 0) {
      c += data[i];
      data[i] = floor(c / n);
      c = c % n * 1e7;
    }
  };
  var numToString = function () {
    var i = 6;
    var s = '';
    while (--i >= 0) {
      if (s !== '' || i === 0 || data[i] !== 0) {
        var t = String(data[i]);
        s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
      }
    }return s;
  };
  var pow = function (x, n, acc) {
    return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
  };
  var log = function (x) {
    var n = 0;
    var x2 = x;
    while (x2 >= 4096) {
      n += 12;
      x2 /= 4096;
    }
    while (x2 >= 2) {
      n += 1;
      x2 /= 2;
    }return n;
  };

  $export($export.P + $export.F * (!!$toFixed && (0.00008.toFixed(3) !== '0.000' || 0.9.toFixed(0) !== '1' || 1.255.toFixed(2) !== '1.25' || 1000000000000000128.0.toFixed(0) !== '1000000000000000128') || !$__require('1a')(function () {
    // V8 ~ Android 4.3-
    $toFixed.call({});
  })), 'Number', {
    toFixed: function toFixed(fractionDigits) {
      var x = aNumberValue(this, ERROR);
      var f = toInteger(fractionDigits);
      var s = '';
      var m = ZERO;
      var e, z, j, k;
      if (f < 0 || f > 20) throw RangeError(ERROR);
      // eslint-disable-next-line no-self-compare
      if (x != x) return 'NaN';
      if (x <= -1e21 || x >= 1e21) return String(x);
      if (x < 0) {
        s = '-';
        x = -x;
      }
      if (x > 1e-21) {
        e = log(x * pow(2, 69, 1)) - 69;
        z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
        z *= 0x10000000000000;
        e = 52 - e;
        if (e > 0) {
          multiply(0, z);
          j = f;
          while (j >= 7) {
            multiply(1e7, 0);
            j -= 7;
          }
          multiply(pow(10, j, 1), 0);
          j = e - 1;
          while (j >= 23) {
            divide(1 << 23);
            j -= 23;
          }
          divide(1 << j);
          multiply(1, 1);
          divide(2);
          m = numToString();
        } else {
          multiply(0, z);
          multiply(1 << -e, 0);
          m = numToString() + repeat.call(ZERO, f);
        }
      }
      if (f > 0) {
        k = m.length;
        m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
      } else {
        m = s + m;
      }return m;
    }
  });
});
$__System.registerDynamic('56', ['51', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var cof = $__require('51');
  module.exports = function (it, msg) {
    if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
    return +it;
  };
});
$__System.registerDynamic('58', ['17', '1a', '56', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var $fails = $__require('1a');
  var aNumberValue = $__require('56');
  var $toPrecision = 1.0.toPrecision;

  $export($export.P + $export.F * ($fails(function () {
    // IE7-
    return $toPrecision.call(1, undefined) !== '1';
  }) || !$fails(function () {
    // V8 ~ Android 4.3-
    $toPrecision.call({});
  })), 'Number', {
    toPrecision: function toPrecision(precision) {
      var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
      return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
    }
  });
});
$__System.registerDynamic('59', ['17', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 20.1.2.1 Number.EPSILON
  var $export = $__require('17');

  $export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });
});
$__System.registerDynamic('5a', ['17', '14', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 20.1.2.2 Number.isFinite(number)
  var $export = $__require('17');
  var _isFinite = $__require('14').isFinite;

  $export($export.S, 'Number', {
    isFinite: function isFinite(it) {
      return typeof it == 'number' && _isFinite(it);
    }
  });
});
$__System.registerDynamic('5b', ['17', '5c', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 20.1.2.3 Number.isInteger(number)
  var $export = $__require('17');

  $export($export.S, 'Number', { isInteger: $__require('5c') });
});
$__System.registerDynamic('5d', ['17', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 20.1.2.4 Number.isNaN(number)
  var $export = $__require('17');

  $export($export.S, 'Number', {
    isNaN: function isNaN(number) {
      // eslint-disable-next-line no-self-compare
      return number != number;
    }
  });
});
$__System.registerDynamic('5c', ['23', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 20.1.2.3 Number.isInteger(number)
  var isObject = $__require('23');
  var floor = Math.floor;
  module.exports = function isInteger(it) {
    return !isObject(it) && isFinite(it) && floor(it) === it;
  };
});
$__System.registerDynamic('5e', ['17', '5c', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 20.1.2.5 Number.isSafeInteger(number)
  var $export = $__require('17');
  var isInteger = $__require('5c');
  var abs = Math.abs;

  $export($export.S, 'Number', {
    isSafeInteger: function isSafeInteger(number) {
      return isInteger(number) && abs(number) <= 0x1fffffffffffff;
    }
  });
});
$__System.registerDynamic('5f', ['17', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 20.1.2.6 Number.MAX_SAFE_INTEGER
  var $export = $__require('17');

  $export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });
});
$__System.registerDynamic('60', ['17', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 20.1.2.10 Number.MIN_SAFE_INTEGER
  var $export = $__require('17');

  $export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });
});
$__System.registerDynamic('4f', ['14', '53', '61', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $parseFloat = $__require('14').parseFloat;
  var $trim = $__require('53').trim;

  module.exports = 1 / $parseFloat($__require('61') + '-0') !== -Infinity ? function parseFloat(str) {
    var string = $trim(String(str), 3);
    var result = $parseFloat(string);
    return result === 0 && string.charAt(0) == '-' ? -0 : result;
  } : $parseFloat;
});
$__System.registerDynamic('62', ['17', '4f', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var $parseFloat = $__require('4f');
  // 20.1.2.12 Number.parseFloat(string)
  $export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });
});
$__System.registerDynamic('4d', ['14', '53', '61', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $parseInt = $__require('14').parseInt;
  var $trim = $__require('53').trim;
  var ws = $__require('61');
  var hex = /^[-+]?0[xX]/;

  module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
    var string = $trim(String(str), 3);
    return $parseInt(string, radix >>> 0 || (hex.test(string) ? 16 : 10));
  } : $parseInt;
});
$__System.registerDynamic('63', ['17', '4d', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var $parseInt = $__require('4d');
  // 20.1.2.13 Number.parseInt(string, radix)
  $export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });
});
$__System.registerDynamic('64', ['17', '65', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 20.2.2.3 Math.acosh(x)
  var $export = $__require('17');
  var log1p = $__require('65');
  var sqrt = Math.sqrt;
  var $acosh = Math.acosh;

  $export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN
  && $acosh(Infinity) == Infinity), 'Math', {
    acosh: function acosh(x) {
      return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? Math.log(x) + Math.LN2 : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
    }
  });
});
$__System.registerDynamic('66', ['17', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 20.2.2.5 Math.asinh(x)
  var $export = $__require('17');
  var $asinh = Math.asinh;

  function asinh(x) {
    return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
  }

  // Tor Browser bug: Math.asinh(0) -> -0
  $export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });
});
$__System.registerDynamic('67', ['17', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 20.2.2.7 Math.atanh(x)
  var $export = $__require('17');
  var $atanh = Math.atanh;

  // Tor Browser bug: Math.atanh(-0) -> 0
  $export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
    atanh: function atanh(x) {
      return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
    }
  });
});
$__System.registerDynamic('68', ['17', '69', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 20.2.2.9 Math.cbrt(x)
  var $export = $__require('17');
  var sign = $__require('69');

  $export($export.S, 'Math', {
    cbrt: function cbrt(x) {
      return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
    }
  });
});
$__System.registerDynamic('6a', ['17', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 20.2.2.11 Math.clz32(x)
  var $export = $__require('17');

  $export($export.S, 'Math', {
    clz32: function clz32(x) {
      return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
    }
  });
});
$__System.registerDynamic('6b', ['17', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 20.2.2.12 Math.cosh(x)
  var $export = $__require('17');
  var exp = Math.exp;

  $export($export.S, 'Math', {
    cosh: function cosh(x) {
      return (exp(x = +x) + exp(-x)) / 2;
    }
  });
});
$__System.registerDynamic('6c', ['17', '6d', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 20.2.2.14 Math.expm1(x)
  var $export = $__require('17');
  var $expm1 = $__require('6d');

  $export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });
});
$__System.registerDynamic('6e', ['17', '6f', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 20.2.2.16 Math.fround(x)
  var $export = $__require('17');

  $export($export.S, 'Math', { fround: $__require('6f') });
});
$__System.registerDynamic('70', ['17', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
  var $export = $__require('17');
  var abs = Math.abs;

  $export($export.S, 'Math', {
    hypot: function hypot(value1, value2) {
      // eslint-disable-line no-unused-vars
      var sum = 0;
      var i = 0;
      var aLen = arguments.length;
      var larg = 0;
      var arg, div;
      while (i < aLen) {
        arg = abs(arguments[i++]);
        if (larg < arg) {
          div = larg / arg;
          sum = sum * div * div + 1;
          larg = arg;
        } else if (arg > 0) {
          div = arg / larg;
          sum += div * div;
        } else sum += arg;
      }
      return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
    }
  });
});
$__System.registerDynamic('71', ['17', '1a', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 20.2.2.18 Math.imul(x, y)
  var $export = $__require('17');
  var $imul = Math.imul;

  // some WebKit versions fails with big numbers, some has wrong arity
  $export($export.S + $export.F * $__require('1a')(function () {
    return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
  }), 'Math', {
    imul: function imul(x, y) {
      var UINT16 = 0xffff;
      var xn = +x;
      var yn = +y;
      var xl = UINT16 & xn;
      var yl = UINT16 & yn;
      return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
    }
  });
});
$__System.registerDynamic('72', ['17', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 20.2.2.21 Math.log10(x)
  var $export = $__require('17');

  $export($export.S, 'Math', {
    log10: function log10(x) {
      return Math.log(x) * Math.LOG10E;
    }
  });
});
$__System.registerDynamic("65", ["d"], true, function ($__require, exports, module) {
  var process = $__require("d");
  var global = this || self,
      GLOBAL = global;
  // 20.2.2.20 Math.log1p(x)
  module.exports = Math.log1p || function log1p(x) {
    return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
  };
});
$__System.registerDynamic('73', ['17', '65', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 20.2.2.20 Math.log1p(x)
  var $export = $__require('17');

  $export($export.S, 'Math', { log1p: $__require('65') });
});
$__System.registerDynamic('74', ['17', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 20.2.2.22 Math.log2(x)
  var $export = $__require('17');

  $export($export.S, 'Math', {
    log2: function log2(x) {
      return Math.log(x) / Math.LN2;
    }
  });
});
$__System.registerDynamic('75', ['17', '69', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 20.2.2.28 Math.sign(x)
  var $export = $__require('17');

  $export($export.S, 'Math', { sign: $__require('69') });
});
$__System.registerDynamic('76', ['17', '6d', '1a', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 20.2.2.30 Math.sinh(x)
  var $export = $__require('17');
  var expm1 = $__require('6d');
  var exp = Math.exp;

  // V8 near Chromium 38 has a problem with very small numbers
  $export($export.S + $export.F * $__require('1a')(function () {
    return !Math.sinh(-2e-17) != -2e-17;
  }), 'Math', {
    sinh: function sinh(x) {
      return Math.abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
    }
  });
});
$__System.registerDynamic("6d", ["d"], true, function ($__require, exports, module) {
  var process = $__require("d");
  var global = this || self,
      GLOBAL = global;
  // 20.2.2.14 Math.expm1(x)
  var $expm1 = Math.expm1;
  module.exports = !$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17 ? function expm1(x) {
    return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
  } : $expm1;
});
$__System.registerDynamic('77', ['17', '6d', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 20.2.2.33 Math.tanh(x)
  var $export = $__require('17');
  var expm1 = $__require('6d');
  var exp = Math.exp;

  $export($export.S, 'Math', {
    tanh: function tanh(x) {
      var a = expm1(x = +x);
      var b = expm1(-x);
      return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
    }
  });
});
$__System.registerDynamic('78', ['17', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 20.2.2.34 Math.trunc(x)
  var $export = $__require('17');

  $export($export.S, 'Math', {
    trunc: function trunc(it) {
      return (it > 0 ? Math.floor : Math.ceil)(it);
    }
  });
});
$__System.registerDynamic('79', ['17', '7a', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var toAbsoluteIndex = $__require('7a');
  var fromCharCode = String.fromCharCode;
  var $fromCodePoint = String.fromCodePoint;

  // length should be 1, old FF problem
  $export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
    // 21.1.2.2 String.fromCodePoint(...codePoints)
    fromCodePoint: function fromCodePoint(x) {
      // eslint-disable-line no-unused-vars
      var res = [];
      var aLen = arguments.length;
      var i = 0;
      var code;
      while (aLen > i) {
        code = +arguments[i++];
        if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
        res.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00));
      }return res.join('');
    }
  });
});
$__System.registerDynamic('7b', ['17', '24', '7c', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var toIObject = $__require('24');
  var toLength = $__require('7c');

  $export($export.S, 'String', {
    // 21.1.2.4 String.raw(callSite, ...substitutions)
    raw: function raw(callSite) {
      var tpl = toIObject(callSite.raw);
      var len = toLength(tpl.length);
      var aLen = arguments.length;
      var res = [];
      var i = 0;
      while (len > i) {
        res.push(String(tpl[i++]));
        if (i < aLen) res.push(String(arguments[i]));
      }return res.join('');
    }
  });
});
$__System.registerDynamic('7d', ['53', 'd'], true, function ($__require, exports, module) {
  'use strict';
  // 21.1.3.25 String.prototype.trim()

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  $__require('53')('trim', function ($trim) {
    return function trim() {
      return $trim(this, 3);
    };
  });
});
$__System.registerDynamic('7e', ['7f', '80', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $at = $__require('7f')(true);

  // 21.1.3.27 String.prototype[@@iterator]()
  $__require('80')(String, 'String', function (iterated) {
    this._t = String(iterated); // target
    this._i = 0; // next index
    // 21.1.5.2.1 %StringIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var index = this._i;
    var point;
    if (index >= O.length) return { value: undefined, done: true };
    point = $at(O, index);
    this._i += point.length;
    return { value: point, done: false };
  });
});
$__System.registerDynamic('81', ['17', '7f', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var $at = $__require('7f')(false);
  $export($export.P, 'String', {
    // 21.1.3.3 String.prototype.codePointAt(pos)
    codePointAt: function codePointAt(pos) {
      return $at(this, pos);
    }
  });
});
$__System.registerDynamic('82', ['17', '7c', '83', '84', 'd'], true, function ($__require, exports, module) {
  // 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var toLength = $__require('7c');
  var context = $__require('83');
  var ENDS_WITH = 'endsWith';
  var $endsWith = ''[ENDS_WITH];

  $export($export.P + $export.F * $__require('84')(ENDS_WITH), 'String', {
    endsWith: function endsWith(searchString /* , endPosition = @length */) {
      var that = context(this, searchString, ENDS_WITH);
      var endPosition = arguments.length > 1 ? arguments[1] : undefined;
      var len = toLength(that.length);
      var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
      var search = String(searchString);
      return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
    }
  });
});
$__System.registerDynamic('85', ['17', '83', '84', 'd'], true, function ($__require, exports, module) {
  // 21.1.3.7 String.prototype.includes(searchString, position = 0)
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var context = $__require('83');
  var INCLUDES = 'includes';

  $export($export.P + $export.F * $__require('84')(INCLUDES), 'String', {
    includes: function includes(searchString /* , position = 0 */) {
      return !!~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
});
$__System.registerDynamic('86', ['17', '57', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');

  $export($export.P, 'String', {
    // 21.1.3.13 String.prototype.repeat(count)
    repeat: $__require('57')
  });
});
$__System.registerDynamic('83', ['87', '88', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // helper for String#{startsWith, endsWith, includes}
  var isRegExp = $__require('87');
  var defined = $__require('88');

  module.exports = function (that, searchString, NAME) {
    if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
    return String(defined(that));
  };
});
$__System.registerDynamic('84', ['1e', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var MATCH = $__require('1e')('match');
  module.exports = function (KEY) {
    var re = /./;
    try {
      '/./'[KEY](re);
    } catch (e) {
      try {
        re[MATCH] = false;
        return !'/./'[KEY](re);
      } catch (f) {/* empty */}
    }return true;
  };
});
$__System.registerDynamic('89', ['17', '7c', '83', '84', 'd'], true, function ($__require, exports, module) {
  // 21.1.3.18 String.prototype.startsWith(searchString [, position ])
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var toLength = $__require('7c');
  var context = $__require('83');
  var STARTS_WITH = 'startsWith';
  var $startsWith = ''[STARTS_WITH];

  $export($export.P + $export.F * $__require('84')(STARTS_WITH), 'String', {
    startsWith: function startsWith(searchString /* , position = 0 */) {
      var that = context(this, searchString, STARTS_WITH);
      var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
      var search = String(searchString);
      return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
    }
  });
});
$__System.registerDynamic('8a', ['8b', 'd'], true, function ($__require, exports, module) {
  'use strict';
  // B.2.3.2 String.prototype.anchor(name)

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  $__require('8b')('anchor', function (createHTML) {
    return function anchor(name) {
      return createHTML(this, 'a', 'name', name);
    };
  });
});
$__System.registerDynamic('8c', ['8b', 'd'], true, function ($__require, exports, module) {
  'use strict';
  // B.2.3.3 String.prototype.big()

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  $__require('8b')('big', function (createHTML) {
    return function big() {
      return createHTML(this, 'big', '', '');
    };
  });
});
$__System.registerDynamic('8d', ['8b', 'd'], true, function ($__require, exports, module) {
  'use strict';
  // B.2.3.4 String.prototype.blink()

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  $__require('8b')('blink', function (createHTML) {
    return function blink() {
      return createHTML(this, 'blink', '', '');
    };
  });
});
$__System.registerDynamic('8e', ['8b', 'd'], true, function ($__require, exports, module) {
  'use strict';
  // B.2.3.5 String.prototype.bold()

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  $__require('8b')('bold', function (createHTML) {
    return function bold() {
      return createHTML(this, 'b', '', '');
    };
  });
});
$__System.registerDynamic('8f', ['8b', 'd'], true, function ($__require, exports, module) {
  'use strict';
  // B.2.3.6 String.prototype.fixed()

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  $__require('8b')('fixed', function (createHTML) {
    return function fixed() {
      return createHTML(this, 'tt', '', '');
    };
  });
});
$__System.registerDynamic('90', ['8b', 'd'], true, function ($__require, exports, module) {
  'use strict';
  // B.2.3.7 String.prototype.fontcolor(color)

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  $__require('8b')('fontcolor', function (createHTML) {
    return function fontcolor(color) {
      return createHTML(this, 'font', 'color', color);
    };
  });
});
$__System.registerDynamic('91', ['8b', 'd'], true, function ($__require, exports, module) {
  'use strict';
  // B.2.3.8 String.prototype.fontsize(size)

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  $__require('8b')('fontsize', function (createHTML) {
    return function fontsize(size) {
      return createHTML(this, 'font', 'size', size);
    };
  });
});
$__System.registerDynamic('92', ['8b', 'd'], true, function ($__require, exports, module) {
  'use strict';
  // B.2.3.9 String.prototype.italics()

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  $__require('8b')('italics', function (createHTML) {
    return function italics() {
      return createHTML(this, 'i', '', '');
    };
  });
});
$__System.registerDynamic('93', ['8b', 'd'], true, function ($__require, exports, module) {
  'use strict';
  // B.2.3.10 String.prototype.link(url)

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  $__require('8b')('link', function (createHTML) {
    return function link(url) {
      return createHTML(this, 'a', 'href', url);
    };
  });
});
$__System.registerDynamic('94', ['8b', 'd'], true, function ($__require, exports, module) {
  'use strict';
  // B.2.3.11 String.prototype.small()

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  $__require('8b')('small', function (createHTML) {
    return function small() {
      return createHTML(this, 'small', '', '');
    };
  });
});
$__System.registerDynamic('95', ['8b', 'd'], true, function ($__require, exports, module) {
  'use strict';
  // B.2.3.12 String.prototype.strike()

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  $__require('8b')('strike', function (createHTML) {
    return function strike() {
      return createHTML(this, 'strike', '', '');
    };
  });
});
$__System.registerDynamic('96', ['8b', 'd'], true, function ($__require, exports, module) {
  'use strict';
  // B.2.3.13 String.prototype.sub()

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  $__require('8b')('sub', function (createHTML) {
    return function sub() {
      return createHTML(this, 'sub', '', '');
    };
  });
});
$__System.registerDynamic('8b', ['17', '1a', '88', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var fails = $__require('1a');
  var defined = $__require('88');
  var quot = /"/g;
  // B.2.3.2.1 CreateHTML(string, tag, attribute, value)
  var createHTML = function (string, tag, attribute, value) {
    var S = String(defined(string));
    var p1 = '<' + tag;
    if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
    return p1 + '>' + S + '</' + tag + '>';
  };
  module.exports = function (NAME, exec) {
    var O = {};
    O[NAME] = exec(createHTML);
    $export($export.P + $export.F * fails(function () {
      var test = ''[NAME]('"');
      return test !== test.toLowerCase() || test.split('"').length > 3;
    }), 'String', O);
  };
});
$__System.registerDynamic('97', ['8b', 'd'], true, function ($__require, exports, module) {
  'use strict';
  // B.2.3.14 String.prototype.sup()

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  $__require('8b')('sup', function (createHTML) {
    return function sup() {
      return createHTML(this, 'sup', '', '');
    };
  });
});
$__System.registerDynamic('98', ['17', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 20.3.3.1 / 15.9.4.4 Date.now()
  var $export = $__require('17');

  $export($export.S, 'Date', { now: function () {
      return new Date().getTime();
    } });
});
$__System.registerDynamic('99', ['17', '35', '25', '1a', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var toObject = $__require('35');
  var toPrimitive = $__require('25');

  $export($export.P + $export.F * $__require('1a')(function () {
    return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({ toISOString: function () {
        return 1;
      } }) !== 1;
  }), 'Date', {
    // eslint-disable-next-line no-unused-vars
    toJSON: function toJSON(key) {
      var O = toObject(this);
      var pv = toPrimitive(O);
      return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
    }
  });
});
$__System.registerDynamic('9a', ['1a', 'd'], true, function ($__require, exports, module) {
  'use strict';
  // 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var fails = $__require('1a');
  var getTime = Date.prototype.getTime;
  var $toISOString = Date.prototype.toISOString;

  var lz = function (num) {
    return num > 9 ? num : '0' + num;
  };

  // PhantomJS / old WebKit has a broken implementations
  module.exports = fails(function () {
    return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
  }) || !fails(function () {
    $toISOString.call(new Date(NaN));
  }) ? function toISOString() {
    if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
    var d = this;
    var y = d.getUTCFullYear();
    var m = d.getUTCMilliseconds();
    var s = y < 0 ? '-' : y > 9999 ? '+' : '';
    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) + '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) + 'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) + ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
  } : $toISOString;
});
$__System.registerDynamic('9b', ['17', '9a', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
  var $export = $__require('17');
  var toISOString = $__require('9a');

  // PhantomJS / old WebKit has a broken implementations
  $export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
    toISOString: toISOString
  });
});
$__System.registerDynamic('9c', ['18', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var DateProto = Date.prototype;
  var INVALID_DATE = 'Invalid Date';
  var TO_STRING = 'toString';
  var $toString = DateProto[TO_STRING];
  var getTime = DateProto.getTime;
  if (new Date(NaN) + '' != INVALID_DATE) {
    $__require('18')(DateProto, TO_STRING, function toString() {
      var value = getTime.call(this);
      // eslint-disable-next-line no-self-compare
      return value === value ? $toString.call(this) : INVALID_DATE;
    });
  }
});
$__System.registerDynamic('9d', ['22', '25', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var anObject = $__require('22');
  var toPrimitive = $__require('25');
  var NUMBER = 'number';

  module.exports = function (hint) {
    if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
    return toPrimitive(anObject(this), hint != NUMBER);
  };
});
$__System.registerDynamic('9e', ['1e', '2d', '9d', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var TO_PRIMITIVE = $__require('1e')('toPrimitive');
  var proto = Date.prototype;

  if (!(TO_PRIMITIVE in proto)) $__require('2d')(proto, TO_PRIMITIVE, $__require('9d'));
});
$__System.registerDynamic('9f', ['17', '21', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
  var $export = $__require('17');

  $export($export.S, 'Array', { isArray: $__require('21') });
});
$__System.registerDynamic('a0', ['a1', '17', '35', 'a2', 'a3', '7c', 'a4', 'a5', 'a6', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var ctx = $__require('a1');
  var $export = $__require('17');
  var toObject = $__require('35');
  var call = $__require('a2');
  var isArrayIter = $__require('a3');
  var toLength = $__require('7c');
  var createProperty = $__require('a4');
  var getIterFn = $__require('a5');

  $export($export.S + $export.F * !$__require('a6')(function (iter) {
    Array.from(iter);
  }), 'Array', {
    // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
    from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
      var O = toObject(arrayLike);
      var C = typeof this == 'function' ? this : Array;
      var aLen = arguments.length;
      var mapfn = aLen > 1 ? arguments[1] : undefined;
      var mapping = mapfn !== undefined;
      var index = 0;
      var iterFn = getIterFn(O);
      var length, result, step, iterator;
      if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
      // if object isn't iterable or it's array with default iterator - use simple case
      if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
        for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
          createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
        }
      } else {
        length = toLength(O.length);
        for (result = new C(length); length > index; index++) {
          createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
        }
      }
      result.length = index;
      return result;
    }
  });
});
$__System.registerDynamic('a7', ['17', 'a4', '1a', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var createProperty = $__require('a4');

  // WebKit Array.of isn't generic
  $export($export.S + $export.F * $__require('1a')(function () {
    function F() {/* empty */}
    return !(Array.of.call(F) instanceof F);
  }), 'Array', {
    // 22.1.2.3 Array.of( ...items)
    of: function of() /* ...args */{
      var index = 0;
      var aLen = arguments.length;
      var result = new (typeof this == 'function' ? this : Array)(aLen);
      while (aLen > index) createProperty(result, index, arguments[index++]);
      result.length = aLen;
      return result;
    }
  });
});
$__System.registerDynamic('a8', ['17', '24', 'a9', 'aa', 'd'], true, function ($__require, exports, module) {
  'use strict';
  // 22.1.3.13 Array.prototype.join(separator)

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var toIObject = $__require('24');
  var arrayJoin = [].join;

  // fallback for not array-like strings
  $export($export.P + $export.F * ($__require('a9') != Object || !$__require('aa')(arrayJoin)), 'Array', {
    join: function join(separator) {
      return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
    }
  });
});
$__System.registerDynamic('ab', ['17', 'ac', '51', '7a', '7c', '1a', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var html = $__require('ac');
  var cof = $__require('51');
  var toAbsoluteIndex = $__require('7a');
  var toLength = $__require('7c');
  var arraySlice = [].slice;

  // fallback for not array-like ES3 strings and DOM objects
  $export($export.P + $export.F * $__require('1a')(function () {
    if (html) arraySlice.call(html);
  }), 'Array', {
    slice: function slice(begin, end) {
      var len = toLength(this.length);
      var klass = cof(this);
      end = end === undefined ? len : end;
      if (klass == 'Array') return arraySlice.call(this, begin, end);
      var start = toAbsoluteIndex(begin, len);
      var upTo = toAbsoluteIndex(end, len);
      var size = toLength(upTo - start);
      var cloned = new Array(size);
      var i = 0;
      for (; i < size; i++) cloned[i] = klass == 'String' ? this.charAt(start + i) : this[start + i];
      return cloned;
    }
  });
});
$__System.registerDynamic('ad', ['17', 'ae', '35', '1a', 'aa', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var aFunction = $__require('ae');
  var toObject = $__require('35');
  var fails = $__require('1a');
  var $sort = [].sort;
  var test = [1, 2, 3];

  $export($export.P + $export.F * (fails(function () {
    // IE8-
    test.sort(undefined);
  }) || !fails(function () {
    // V8 bug
    test.sort(null);
    // Old WebKit
  }) || !$__require('aa')($sort)), 'Array', {
    // 22.1.3.25 Array.prototype.sort(comparefn)
    sort: function sort(comparefn) {
      return comparefn === undefined ? $sort.call(toObject(this)) : $sort.call(toObject(this), aFunction(comparefn));
    }
  });
});
$__System.registerDynamic('af', ['17', 'b0', 'aa', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var $forEach = $__require('b0')(0);
  var STRICT = $__require('aa')([].forEach, true);

  $export($export.P + $export.F * !STRICT, 'Array', {
    // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
    forEach: function forEach(callbackfn /* , thisArg */) {
      return $forEach(this, callbackfn, arguments[1]);
    }
  });
});
$__System.registerDynamic('b1', ['17', 'b0', 'aa', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var $map = $__require('b0')(1);

  $export($export.P + $export.F * !$__require('aa')([].map, true), 'Array', {
    // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
    map: function map(callbackfn /* , thisArg */) {
      return $map(this, callbackfn, arguments[1]);
    }
  });
});
$__System.registerDynamic('b2', ['17', 'b0', 'aa', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var $filter = $__require('b0')(2);

  $export($export.P + $export.F * !$__require('aa')([].filter, true), 'Array', {
    // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
    filter: function filter(callbackfn /* , thisArg */) {
      return $filter(this, callbackfn, arguments[1]);
    }
  });
});
$__System.registerDynamic('b3', ['17', 'b0', 'aa', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var $some = $__require('b0')(3);

  $export($export.P + $export.F * !$__require('aa')([].some, true), 'Array', {
    // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
    some: function some(callbackfn /* , thisArg */) {
      return $some(this, callbackfn, arguments[1]);
    }
  });
});
$__System.registerDynamic('b4', ['17', 'b0', 'aa', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var $every = $__require('b0')(4);

  $export($export.P + $export.F * !$__require('aa')([].every, true), 'Array', {
    // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
    every: function every(callbackfn /* , thisArg */) {
      return $every(this, callbackfn, arguments[1]);
    }
  });
});
$__System.registerDynamic('b5', ['17', 'b6', 'aa', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var $reduce = $__require('b6');

  $export($export.P + $export.F * !$__require('aa')([].reduce, true), 'Array', {
    // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
    reduce: function reduce(callbackfn /* , initialValue */) {
      return $reduce(this, callbackfn, arguments.length, arguments[1], false);
    }
  });
});
$__System.registerDynamic('b6', ['ae', '35', 'a9', '7c', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var aFunction = $__require('ae');
  var toObject = $__require('35');
  var IObject = $__require('a9');
  var toLength = $__require('7c');

  module.exports = function (that, callbackfn, aLen, memo, isRight) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IObject(O);
    var length = toLength(O.length);
    var index = isRight ? length - 1 : 0;
    var i = isRight ? -1 : 1;
    if (aLen < 2) for (;;) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (isRight ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (; isRight ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
});
$__System.registerDynamic('b7', ['17', 'b6', 'aa', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var $reduce = $__require('b6');

  $export($export.P + $export.F * !$__require('aa')([].reduceRight, true), 'Array', {
    // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
    reduceRight: function reduceRight(callbackfn /* , initialValue */) {
      return $reduce(this, callbackfn, arguments.length, arguments[1], true);
    }
  });
});
$__System.registerDynamic('b8', ['17', 'b9', 'aa', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var $indexOf = $__require('b9')(false);
  var $native = [].indexOf;
  var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

  $export($export.P + $export.F * (NEGATIVE_ZERO || !$__require('aa')($native)), 'Array', {
    // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
    indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
      return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments[1]);
    }
  });
});
$__System.registerDynamic('aa', ['1a', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var fails = $__require('1a');

  module.exports = function (method, arg) {
    return !!method && fails(function () {
      // eslint-disable-next-line no-useless-call
      arg ? method.call(null, function () {/* empty */}, 1) : method.call(null);
    });
  };
});
$__System.registerDynamic('ba', ['17', '24', '55', '7c', 'aa', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var toIObject = $__require('24');
  var toInteger = $__require('55');
  var toLength = $__require('7c');
  var $native = [].lastIndexOf;
  var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

  $export($export.P + $export.F * (NEGATIVE_ZERO || !$__require('aa')($native)), 'Array', {
    // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
      // convert -0 to +0
      if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
      var O = toIObject(this);
      var length = toLength(O.length);
      var index = length - 1;
      if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
      if (index < 0) index = length + index;
      for (; index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
      return -1;
    }
  });
});
$__System.registerDynamic('bb', ['17', 'bc', 'bd', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
  var $export = $__require('17');

  $export($export.P, 'Array', { copyWithin: $__require('bc') });

  $__require('bd')('copyWithin');
});
$__System.registerDynamic('be', ['17', 'bf', 'bd', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
  var $export = $__require('17');

  $export($export.P, 'Array', { fill: $__require('bf') });

  $__require('bd')('fill');
});
$__System.registerDynamic('c0', ['17', 'b0', 'bd', 'd'], true, function ($__require, exports, module) {
  'use strict';
  // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var $find = $__require('b0')(5);
  var KEY = 'find';
  var forced = true;
  // Shouldn't skip holes
  if (KEY in []) Array(1)[KEY](function () {
    forced = false;
  });
  $export($export.P + $export.F * forced, 'Array', {
    find: function find(callbackfn /* , that = undefined */) {
      return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  $__require('bd')(KEY);
});
$__System.registerDynamic('c1', ['17', 'b0', 'bd', 'd'], true, function ($__require, exports, module) {
  'use strict';
  // 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var $find = $__require('b0')(6);
  var KEY = 'findIndex';
  var forced = true;
  // Shouldn't skip holes
  if (KEY in []) Array(1)[KEY](function () {
    forced = false;
  });
  $export($export.P + $export.F * forced, 'Array', {
    findIndex: function findIndex(callbackfn /* , that = undefined */) {
      return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  $__require('bd')(KEY);
});
$__System.registerDynamic('c2', ['c3', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  $__require('c3')('Array');
});
$__System.registerDynamic('c4', ['14', '52', '2a', '2b', '87', 'c5', '16', '1a', '1e', '18', 'c3', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var global = $__require('14');
  var inheritIfRequired = $__require('52');
  var dP = $__require('2a').f;
  var gOPN = $__require('2b').f;
  var isRegExp = $__require('87');
  var $flags = $__require('c5');
  var $RegExp = global.RegExp;
  var Base = $RegExp;
  var proto = $RegExp.prototype;
  var re1 = /a/g;
  var re2 = /a/g;
  // "new" creates a new object, old webkit buggy here
  var CORRECT_NEW = new $RegExp(re1) !== re1;

  if ($__require('16') && (!CORRECT_NEW || $__require('1a')(function () {
    re2[$__require('1e')('match')] = false;
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
  }))) {
    $RegExp = function RegExp(p, f) {
      var tiRE = this instanceof $RegExp;
      var piRE = isRegExp(p);
      var fiU = f === undefined;
      return !tiRE && piRE && p.constructor === $RegExp && fiU ? p : inheritIfRequired(CORRECT_NEW ? new Base(piRE && !fiU ? p.source : p, f) : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f), tiRE ? this : proto, $RegExp);
    };
    var proxy = function (key) {
      key in $RegExp || dP($RegExp, key, {
        configurable: true,
        get: function () {
          return Base[key];
        },
        set: function (it) {
          Base[key] = it;
        }
      });
    };
    for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
    proto.constructor = $RegExp;
    $RegExp.prototype = proto;
    $__require('18')(global, 'RegExp', $RegExp);
  }

  $__require('c3')('RegExp');
});
$__System.registerDynamic('c6', ['c7', '22', 'c5', '16', '18', '1a', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  $__require('c7');
  var anObject = $__require('22');
  var $flags = $__require('c5');
  var DESCRIPTORS = $__require('16');
  var TO_STRING = 'toString';
  var $toString = /./[TO_STRING];

  var define = function (fn) {
    $__require('18')(RegExp.prototype, TO_STRING, fn, true);
  };

  // 21.2.5.14 RegExp.prototype.toString()
  if ($__require('1a')(function () {
    return $toString.call({ source: 'a', flags: 'b' }) != '/a/b';
  })) {
    define(function toString() {
      var R = anObject(this);
      return '/'.concat(R.source, '/', 'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
    });
    // FF44- RegExp#toString has a wrong name
  } else if ($toString.name != TO_STRING) {
    define(function toString() {
      return $toString.call(this);
    });
  }
});
$__System.registerDynamic('c7', ['16', '2a', 'c5', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 21.2.5.3 get RegExp.prototype.flags()
  if ($__require('16') && /./g.flags != 'g') $__require('2a').f(RegExp.prototype, 'flags', {
    configurable: true,
    get: $__require('c5')
  });
});
$__System.registerDynamic('c8', ['22', '7c', 'c9', 'ca', 'cb', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var anObject = $__require('22');
  var toLength = $__require('7c');
  var advanceStringIndex = $__require('c9');
  var regExpExec = $__require('ca');

  // @@match logic
  $__require('cb')('match', 1, function (defined, MATCH, $match, maybeCallNative) {
    return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }];
  });
});
$__System.registerDynamic('cc', ['22', '35', '7c', '55', 'c9', 'ca', 'cb', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var anObject = $__require('22');
  var toObject = $__require('35');
  var toLength = $__require('7c');
  var toInteger = $__require('55');
  var advanceStringIndex = $__require('c9');
  var regExpExec = $__require('ca');
  var max = Math.max;
  var min = Math.min;
  var floor = Math.floor;
  var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

  var maybeToString = function (it) {
    return it === undefined ? it : String(it);
  };

  // @@replace logic
  $__require('cb')('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
    return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
    function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
      var tailPos = position + matched.length;
      var m = captures.length;
      var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
      if (namedCaptures !== undefined) {
        namedCaptures = toObject(namedCaptures);
        symbols = SUBSTITUTION_SYMBOLS;
      }
      return $replace.call(replacement, symbols, function (match, ch) {
        var capture;
        switch (ch.charAt(0)) {
          case '$':
            return '$';
          case '&':
            return matched;
          case '`':
            return str.slice(0, position);
          case "'":
            return str.slice(tailPos);
          case '<':
            capture = namedCaptures[ch.slice(1, -1)];
            break;
          default:
            // \d\d?
            var n = +ch;
            if (n === 0) return match;
            if (n > m) {
              var f = floor(n / 10);
              if (f === 0) return match;
              if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
              return match;
            }
            capture = captures[n - 1];
        }
        return capture === undefined ? '' : capture;
      });
    }
  });
});
$__System.registerDynamic("43", ["d"], true, function ($__require, exports, module) {
  var process = $__require("d");
  var global = this || self,
      GLOBAL = global;
  // 7.2.9 SameValue(x, y)
  module.exports = Object.is || function is(x, y) {
    // eslint-disable-next-line no-self-compare
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  };
});
$__System.registerDynamic('cd', ['22', '43', 'ca', 'cb', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var anObject = $__require('22');
  var sameValue = $__require('43');
  var regExpExec = $__require('ca');

  // @@search logic
  $__require('cb')('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
    return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative($search, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }];
  });
});
$__System.registerDynamic('c9', ['7f', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var at = $__require('7f')(true);

  // `AdvanceStringIndex` abstract operation
  // https://tc39.github.io/ecma262/#sec-advancestringindex
  module.exports = function (S, index, unicode) {
    return index + (unicode ? at(S, index).length : 1);
  };
});
$__System.registerDynamic('ca', ['47', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var classof = $__require('47');
  var builtinExec = RegExp.prototype.exec;

  // `RegExpExec` abstract operation
  // https://tc39.github.io/ecma262/#sec-regexpexec
  module.exports = function (R, S) {
    var exec = R.exec;
    if (typeof exec === 'function') {
      var result = exec.call(R, S);
      if (typeof result !== 'object') {
        throw new TypeError('RegExp exec method returned something other than an Object or null');
      }
      return result;
    }
    if (classof(R) !== 'RegExp') {
      throw new TypeError('RegExp#exec called on incompatible receiver');
    }
    return builtinExec.call(R, S);
  };
});
$__System.registerDynamic('ce', ['cf', '17', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var regexpExec = $__require('cf');
  $__require('17')({
    target: 'RegExp',
    proto: true,
    forced: regexpExec !== /./.exec
  }, {
    exec: regexpExec
  });
});
$__System.registerDynamic('cf', ['c5', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var regexpFlags = $__require('c5');

  var nativeExec = RegExp.prototype.exec;
  // This always refers to the native implementation, because the
  // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
  // which loads this file before patching the method.
  var nativeReplace = String.prototype.replace;

  var patchedExec = nativeExec;

  var LAST_INDEX = 'lastIndex';

  var UPDATES_LAST_INDEX_WRONG = function () {
    var re1 = /a/,
        re2 = /b*/g;
    nativeExec.call(re1, 'a');
    nativeExec.call(re2, 'a');
    return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
  }();

  // nonparticipating capturing group, copied from es5-shim's String#split patch.
  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

  if (PATCH) {
    patchedExec = function exec(str) {
      var re = this;
      var lastIndex, reCopy, match, i;

      if (NPCG_INCLUDED) {
        reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
      }
      if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

      match = nativeExec.call(re, str);

      if (UPDATES_LAST_INDEX_WRONG && match) {
        re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
      }
      if (NPCG_INCLUDED && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
        // eslint-disable-next-line no-loop-func
        nativeReplace.call(match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }

      return match;
    };
  }

  module.exports = patchedExec;
});
$__System.registerDynamic('cb', ['ce', '18', '2d', '1a', '88', '1e', 'cf', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  $__require('ce');
  var redefine = $__require('18');
  var hide = $__require('2d');
  var fails = $__require('1a');
  var defined = $__require('88');
  var wks = $__require('1e');
  var regexpExec = $__require('cf');

  var SPECIES = wks('species');

  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
    // #replace needs built-in support for named groups.
    // #match works fine because it just return the exec results, even if it has
    // a "grops" property.
    var re = /./;
    re.exec = function () {
      var result = [];
      result.groups = { a: '7' };
      return result;
    };
    return ''.replace(re, '$<a>') !== '7';
  });

  var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = function () {
    // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
    var re = /(?:)/;
    var originalExec = re.exec;
    re.exec = function () {
      return originalExec.apply(this, arguments);
    };
    var result = 'ab'.split(re);
    return result.length === 2 && result[0] === 'a' && result[1] === 'b';
  }();

  module.exports = function (KEY, length, exec) {
    var SYMBOL = wks(KEY);

    var DELEGATES_TO_SYMBOL = !fails(function () {
      // String methods call symbol-named RegEp methods
      var O = {};
      O[SYMBOL] = function () {
        return 7;
      };
      return ''[KEY](O) != 7;
    });

    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
      // Symbol-named RegExp methods call .exec
      var execCalled = false;
      var re = /a/;
      re.exec = function () {
        execCalled = true;return null;
      };
      if (KEY === 'split') {
        // RegExp[@@split] doesn't call the regex's exec method, but first creates
        // a new one. We need to return the patched regex when creating the new one.
        re.constructor = {};
        re.constructor[SPECIES] = function () {
          return re;
        };
      }
      re[SYMBOL]('');
      return !execCalled;
    }) : undefined;

    if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS || KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
      var nativeRegExpMethod = /./[SYMBOL];
      var fns = exec(defined, SYMBOL, ''[KEY], function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      });
      var strfn = fns[0];
      var rxfn = fns[1];

      redefine(String.prototype, KEY, strfn);
      hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) {
        return rxfn.call(string, this, arg);
      }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) {
        return rxfn.call(string, this);
      });
    }
  };
});
$__System.registerDynamic('d0', ['87', '22', 'd1', 'c9', '7c', 'ca', 'cf', '1a', 'cb', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var isRegExp = $__require('87');
  var anObject = $__require('22');
  var speciesConstructor = $__require('d1');
  var advanceStringIndex = $__require('c9');
  var toLength = $__require('7c');
  var callRegExpExec = $__require('ca');
  var regexpExec = $__require('cf');
  var fails = $__require('1a');
  var $min = Math.min;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX = 'lastIndex';
  var MAX_UINT32 = 0xffffffff;

  // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
  var SUPPORTS_Y = !fails(function () {
    RegExp(MAX_UINT32, 'y');
  });

  // @@split logic
  $__require('cb')('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
    var internalSplit;
    if ('abbc'[$SPLIT](/(b)*/)[1] == 'c' || 'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || 'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || '.'[$SPLIT](/()()/)[LENGTH] > 1 || ''[$SPLIT](/.?/)[LENGTH]) {
      // based on es5-shim implementation, need to rework it
      internalSplit = function (separator, limit) {
        var string = String(this);
        if (separator === undefined && limit === 0) return [];
        // If `separator` is not a regex, use native split
        if (!isRegExp(separator)) return $split.call(string, separator, limit);
        var output = [];
        var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
        var lastLastIndex = 0;
        var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
        // Make `global` and avoid `lastIndex` issues by working with a copy
        var separatorCopy = new RegExp(separator.source, flags + 'g');
        var match, lastIndex, lastLength;
        while (match = regexpExec.call(separatorCopy, string)) {
          lastIndex = separatorCopy[LAST_INDEX];
          if (lastIndex > lastLastIndex) {
            output.push(string.slice(lastLastIndex, match.index));
            if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
            lastLength = match[0][LENGTH];
            lastLastIndex = lastIndex;
            if (output[LENGTH] >= splitLimit) break;
          }
          if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
        }
        if (lastLastIndex === string[LENGTH]) {
          if (lastLength || !separatorCopy.test('')) output.push('');
        } else output.push(string.slice(lastLastIndex));
        return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
      };
      // Chakra, V8
    } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
      internalSplit = function (separator, limit) {
        return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
      };
    } else {
      internalSplit = $split;
    }

    return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (z === null || (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }];
  });
});
$__System.registerDynamic('d2', ['2c', '14', 'a1', '47', '17', '23', 'ae', 'd3', 'd4', 'd1', 'd5', 'd6', 'd7', 'd8', 'd9', 'da', '1e', 'db', '1c', 'c3', '3e', 'a6', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var LIBRARY = $__require('2c');
  var global = $__require('14');
  var ctx = $__require('a1');
  var classof = $__require('47');
  var $export = $__require('17');
  var isObject = $__require('23');
  var aFunction = $__require('ae');
  var anInstance = $__require('d3');
  var forOf = $__require('d4');
  var speciesConstructor = $__require('d1');
  var task = $__require('d5').set;
  var microtask = $__require('d6')();
  var newPromiseCapabilityModule = $__require('d7');
  var perform = $__require('d8');
  var userAgent = $__require('d9');
  var promiseResolve = $__require('da');
  var PROMISE = 'Promise';
  var TypeError = global.TypeError;
  var process = global.process;
  var versions = process && process.versions;
  var v8 = versions && versions.v8 || '';
  var $Promise = global[PROMISE];
  var isNode = classof(process) == 'process';
  var empty = function () {/* empty */};
  var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
  var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

  var USE_NATIVE = !!function () {
    try {
      // correct subclassing with @@species support
      var promise = $Promise.resolve(1);
      var FakePromise = (promise.constructor = {})[$__require('1e')('species')] = function (exec) {
        exec(empty, empty);
      };
      // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
      return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0 && userAgent.indexOf('Chrome/66') === -1;
    } catch (e) {/* empty */}
  }();

  // helpers
  var isThenable = function (it) {
    var then;
    return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
  };
  var notify = function (promise, isReject) {
    if (promise._n) return;
    promise._n = true;
    var chain = promise._c;
    microtask(function () {
      var value = promise._v;
      var ok = promise._s == 1;
      var i = 0;
      var run = function (reaction) {
        var handler = ok ? reaction.ok : reaction.fail;
        var resolve = reaction.resolve;
        var reject = reaction.reject;
        var domain = reaction.domain;
        var result, then, exited;
        try {
          if (handler) {
            if (!ok) {
              if (promise._h == 2) onHandleUnhandled(promise);
              promise._h = 1;
            }
            if (handler === true) result = value;else {
              if (domain) domain.enter();
              result = handler(value); // may throw
              if (domain) {
                domain.exit();
                exited = true;
              }
            }
            if (result === reaction.promise) {
              reject(TypeError('Promise-chain cycle'));
            } else if (then = isThenable(result)) {
              then.call(result, resolve, reject);
            } else resolve(result);
          } else reject(value);
        } catch (e) {
          if (domain && !exited) domain.exit();
          reject(e);
        }
      };
      while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
      promise._c = [];
      promise._n = false;
      if (isReject && !promise._h) onUnhandled(promise);
    });
  };
  var onUnhandled = function (promise) {
    task.call(global, function () {
      var value = promise._v;
      var unhandled = isUnhandled(promise);
      var result, handler, console;
      if (unhandled) {
        result = perform(function () {
          if (isNode) {
            process.emit('unhandledRejection', value, promise);
          } else if (handler = global.onunhandledrejection) {
            handler({ promise: promise, reason: value });
          } else if ((console = global.console) && console.error) {
            console.error('Unhandled promise rejection', value);
          }
        });
        // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
        promise._h = isNode || isUnhandled(promise) ? 2 : 1;
      }promise._a = undefined;
      if (unhandled && result.e) throw result.v;
    });
  };
  var isUnhandled = function (promise) {
    return promise._h !== 1 && (promise._a || promise._c).length === 0;
  };
  var onHandleUnhandled = function (promise) {
    task.call(global, function () {
      var handler;
      if (isNode) {
        process.emit('rejectionHandled', promise);
      } else if (handler = global.onrejectionhandled) {
        handler({ promise: promise, reason: promise._v });
      }
    });
  };
  var $reject = function (value) {
    var promise = this;
    if (promise._d) return;
    promise._d = true;
    promise = promise._w || promise; // unwrap
    promise._v = value;
    promise._s = 2;
    if (!promise._a) promise._a = promise._c.slice();
    notify(promise, true);
  };
  var $resolve = function (value) {
    var promise = this;
    var then;
    if (promise._d) return;
    promise._d = true;
    promise = promise._w || promise; // unwrap
    try {
      if (promise === value) throw TypeError("Promise can't be resolved itself");
      if (then = isThenable(value)) {
        microtask(function () {
          var wrapper = { _w: promise, _d: false }; // wrap
          try {
            then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
          } catch (e) {
            $reject.call(wrapper, e);
          }
        });
      } else {
        promise._v = value;
        promise._s = 1;
        notify(promise, false);
      }
    } catch (e) {
      $reject.call({ _w: promise, _d: false }, e); // wrap
    }
  };

  // constructor polyfill
  if (!USE_NATIVE) {
    // 25.4.3.1 Promise(executor)
    $Promise = function Promise(executor) {
      anInstance(this, $Promise, PROMISE, '_h');
      aFunction(executor);
      Internal.call(this);
      try {
        executor(ctx($resolve, this, 1), ctx($reject, this, 1));
      } catch (err) {
        $reject.call(this, err);
      }
    };
    // eslint-disable-next-line no-unused-vars
    Internal = function Promise(executor) {
      this._c = []; // <- awaiting reactions
      this._a = undefined; // <- checked in isUnhandled reactions
      this._s = 0; // <- state
      this._d = false; // <- done
      this._v = undefined; // <- value
      this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
      this._n = false; // <- notify
    };
    Internal.prototype = $__require('db')($Promise.prototype, {
      // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
      then: function then(onFulfilled, onRejected) {
        var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
        reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
        reaction.fail = typeof onRejected == 'function' && onRejected;
        reaction.domain = isNode ? process.domain : undefined;
        this._c.push(reaction);
        if (this._a) this._a.push(reaction);
        if (this._s) notify(this, false);
        return reaction.promise;
      },
      // 25.4.5.1 Promise.prototype.catch(onRejected)
      'catch': function (onRejected) {
        return this.then(undefined, onRejected);
      }
    });
    OwnPromiseCapability = function () {
      var promise = new Internal();
      this.promise = promise;
      this.resolve = ctx($resolve, promise, 1);
      this.reject = ctx($reject, promise, 1);
    };
    newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
      return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
    };
  }

  $export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
  $__require('1c')($Promise, PROMISE);
  $__require('c3')(PROMISE);
  Wrapper = $__require('3e')[PROMISE];

  // statics
  $export($export.S + $export.F * !USE_NATIVE, PROMISE, {
    // 25.4.4.5 Promise.reject(r)
    reject: function reject(r) {
      var capability = newPromiseCapability(this);
      var $$reject = capability.reject;
      $$reject(r);
      return capability.promise;
    }
  });
  $export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
    // 25.4.4.6 Promise.resolve(x)
    resolve: function resolve(x) {
      return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
    }
  });
  $export($export.S + $export.F * !(USE_NATIVE && $__require('a6')(function (iter) {
    $Promise.all(iter)['catch'](empty);
  })), PROMISE, {
    // 25.4.4.1 Promise.all(iterable)
    all: function all(iterable) {
      var C = this;
      var capability = newPromiseCapability(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = perform(function () {
        var values = [];
        var index = 0;
        var remaining = 1;
        forOf(iterable, false, function (promise) {
          var $index = index++;
          var alreadyCalled = false;
          values.push(undefined);
          remaining++;
          C.resolve(promise).then(function (value) {
            if (alreadyCalled) return;
            alreadyCalled = true;
            values[$index] = value;
            --remaining || resolve(values);
          }, reject);
        });
        --remaining || resolve(values);
      });
      if (result.e) reject(result.v);
      return capability.promise;
    },
    // 25.4.4.4 Promise.race(iterable)
    race: function race(iterable) {
      var C = this;
      var capability = newPromiseCapability(C);
      var reject = capability.reject;
      var result = perform(function () {
        forOf(iterable, false, function (promise) {
          C.resolve(promise).then(capability.resolve, reject);
        });
      });
      if (result.e) reject(result.v);
      return capability.promise;
    }
  });
});
$__System.registerDynamic('dc', ['dd', 'de', 'df', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var weak = $__require('dd');
  var validate = $__require('de');
  var WEAK_SET = 'WeakSet';

  // 23.4 WeakSet Objects
  $__require('df')(WEAK_SET, function (get) {
    return function WeakSet() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  }, {
    // 23.4.3.1 WeakSet.prototype.add(value)
    add: function add(value) {
      return weak.def(validate(this, WEAK_SET), value, true);
    }
  }, weak, false, true);
});
$__System.registerDynamic('e0', ['17', 'e1', 'e2', '22', '7a', '7c', '23', '14', 'd1', '1a', 'c3', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var $typed = $__require('e1');
  var buffer = $__require('e2');
  var anObject = $__require('22');
  var toAbsoluteIndex = $__require('7a');
  var toLength = $__require('7c');
  var isObject = $__require('23');
  var ArrayBuffer = $__require('14').ArrayBuffer;
  var speciesConstructor = $__require('d1');
  var $ArrayBuffer = buffer.ArrayBuffer;
  var $DataView = buffer.DataView;
  var $isView = $typed.ABV && ArrayBuffer.isView;
  var $slice = $ArrayBuffer.prototype.slice;
  var VIEW = $typed.VIEW;
  var ARRAY_BUFFER = 'ArrayBuffer';

  $export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

  $export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
    // 24.1.3.1 ArrayBuffer.isView(arg)
    isView: function isView(it) {
      return $isView && $isView(it) || isObject(it) && VIEW in it;
    }
  });

  $export($export.P + $export.U + $export.F * $__require('1a')(function () {
    return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
  }), ARRAY_BUFFER, {
    // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
    slice: function slice(start, end) {
      if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
      var len = anObject(this).byteLength;
      var first = toAbsoluteIndex(start, len);
      var fin = toAbsoluteIndex(end === undefined ? len : end, len);
      var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
      var viewS = new $DataView(this);
      var viewT = new $DataView(result);
      var index = 0;
      while (first < fin) {
        viewT.setUint8(index++, viewS.getUint8(first++));
      }return result;
    }
  });

  $__require('c3')(ARRAY_BUFFER);
});
$__System.registerDynamic('e3', ['17', 'e1', 'e2', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  $export($export.G + $export.W + $export.F * !$__require('e1').ABV, {
    DataView: $__require('e2').DataView
  });
});
$__System.registerDynamic('e4', ['e5', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  $__require('e5')('Int8', 1, function (init) {
    return function Int8Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });
});
$__System.registerDynamic('e6', ['e5', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  $__require('e5')('Uint8', 1, function (init) {
    return function Uint8Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });
});
$__System.registerDynamic('e7', ['e5', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  $__require('e5')('Uint8', 1, function (init) {
    return function Uint8ClampedArray(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  }, true);
});
$__System.registerDynamic('e8', ['e5', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  $__require('e5')('Int16', 2, function (init) {
    return function Int16Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });
});
$__System.registerDynamic('e9', ['e5', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  $__require('e5')('Uint16', 2, function (init) {
    return function Uint16Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });
});
$__System.registerDynamic('ea', ['e5', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  $__require('e5')('Int32', 4, function (init) {
    return function Int32Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });
});
$__System.registerDynamic('eb', ['e5', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  $__require('e5')('Uint32', 4, function (init) {
    return function Uint32Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });
});
$__System.registerDynamic('ec', ['e5', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  $__require('e5')('Float32', 4, function (init) {
    return function Float32Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });
});
$__System.registerDynamic('e1', ['14', '2d', '1d', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var global = $__require('14');
  var hide = $__require('2d');
  var uid = $__require('1d');
  var TYPED = uid('typed_array');
  var VIEW = uid('view');
  var ABV = !!(global.ArrayBuffer && global.DataView);
  var CONSTR = ABV;
  var i = 0;
  var l = 9;
  var Typed;

  var TypedArrayConstructors = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(',');

  while (i < l) {
    if (Typed = global[TypedArrayConstructors[i++]]) {
      hide(Typed.prototype, TYPED, true);
      hide(Typed.prototype, VIEW, true);
    } else CONSTR = false;
  }

  module.exports = {
    ABV: ABV,
    CONSTR: CONSTR,
    TYPED: TYPED,
    VIEW: VIEW
  };
});
$__System.registerDynamic('e2', ['14', '16', '2c', 'e1', '2d', 'db', '1a', 'd3', '55', '7c', 'ed', '2b', '2a', 'bf', '1c', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var global = $__require('14');
  var DESCRIPTORS = $__require('16');
  var LIBRARY = $__require('2c');
  var $typed = $__require('e1');
  var hide = $__require('2d');
  var redefineAll = $__require('db');
  var fails = $__require('1a');
  var anInstance = $__require('d3');
  var toInteger = $__require('55');
  var toLength = $__require('7c');
  var toIndex = $__require('ed');
  var gOPN = $__require('2b').f;
  var dP = $__require('2a').f;
  var arrayFill = $__require('bf');
  var setToStringTag = $__require('1c');
  var ARRAY_BUFFER = 'ArrayBuffer';
  var DATA_VIEW = 'DataView';
  var PROTOTYPE = 'prototype';
  var WRONG_LENGTH = 'Wrong length!';
  var WRONG_INDEX = 'Wrong index!';
  var $ArrayBuffer = global[ARRAY_BUFFER];
  var $DataView = global[DATA_VIEW];
  var Math = global.Math;
  var RangeError = global.RangeError;
  // eslint-disable-next-line no-shadow-restricted-names
  var Infinity = global.Infinity;
  var BaseBuffer = $ArrayBuffer;
  var abs = Math.abs;
  var pow = Math.pow;
  var floor = Math.floor;
  var log = Math.log;
  var LN2 = Math.LN2;
  var BUFFER = 'buffer';
  var BYTE_LENGTH = 'byteLength';
  var BYTE_OFFSET = 'byteOffset';
  var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
  var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
  var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

  // IEEE754 conversions based on https://github.com/feross/ieee754
  function packIEEE754(value, mLen, nBytes) {
    var buffer = new Array(nBytes);
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
    var i = 0;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    var e, m, c;
    value = abs(value);
    // eslint-disable-next-line no-self-compare
    if (value != value || value === Infinity) {
      // eslint-disable-next-line no-self-compare
      m = value != value ? 1 : 0;
      e = eMax;
    } else {
      e = floor(log(value) / LN2);
      if (value * (c = pow(2, -e)) < 1) {
        e--;
        c *= 2;
      }
      if (e + eBias >= 1) {
        value += rt / c;
      } else {
        value += rt * pow(2, 1 - eBias);
      }
      if (value * c >= 2) {
        e++;
        c /= 2;
      }
      if (e + eBias >= eMax) {
        m = 0;
        e = eMax;
      } else if (e + eBias >= 1) {
        m = (value * c - 1) * pow(2, mLen);
        e = e + eBias;
      } else {
        m = value * pow(2, eBias - 1) * pow(2, mLen);
        e = 0;
      }
    }
    for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
    buffer[--i] |= s * 128;
    return buffer;
  }
  function unpackIEEE754(buffer, mLen, nBytes) {
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = eLen - 7;
    var i = nBytes - 1;
    var s = buffer[i--];
    var e = s & 127;
    var m;
    s >>= 7;
    for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
    if (e === 0) {
      e = 1 - eBias;
    } else if (e === eMax) {
      return m ? NaN : s ? -Infinity : Infinity;
    } else {
      m = m + pow(2, mLen);
      e = e - eBias;
    }return (s ? -1 : 1) * m * pow(2, e - mLen);
  }

  function unpackI32(bytes) {
    return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
  }
  function packI8(it) {
    return [it & 0xff];
  }
  function packI16(it) {
    return [it & 0xff, it >> 8 & 0xff];
  }
  function packI32(it) {
    return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
  }
  function packF64(it) {
    return packIEEE754(it, 52, 8);
  }
  function packF32(it) {
    return packIEEE754(it, 23, 4);
  }

  function addGetter(C, key, internal) {
    dP(C[PROTOTYPE], key, { get: function () {
        return this[internal];
      } });
  }

  function get(view, bytes, index, isLittleEndian) {
    var numIndex = +index;
    var intIndex = toIndex(numIndex);
    if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
    var store = view[$BUFFER]._b;
    var start = intIndex + view[$OFFSET];
    var pack = store.slice(start, start + bytes);
    return isLittleEndian ? pack : pack.reverse();
  }
  function set(view, bytes, index, conversion, value, isLittleEndian) {
    var numIndex = +index;
    var intIndex = toIndex(numIndex);
    if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
    var store = view[$BUFFER]._b;
    var start = intIndex + view[$OFFSET];
    var pack = conversion(+value);
    for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
  }

  if (!$typed.ABV) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
      var byteLength = toIndex(length);
      this._b = arrayFill.call(new Array(byteLength), 0);
      this[$LENGTH] = byteLength;
    };

    $DataView = function DataView(buffer, byteOffset, byteLength) {
      anInstance(this, $DataView, DATA_VIEW);
      anInstance(buffer, $ArrayBuffer, DATA_VIEW);
      var bufferLength = buffer[$LENGTH];
      var offset = toInteger(byteOffset);
      if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
      byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
      if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
      this[$BUFFER] = buffer;
      this[$OFFSET] = offset;
      this[$LENGTH] = byteLength;
    };

    if (DESCRIPTORS) {
      addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
      addGetter($DataView, BUFFER, '_b');
      addGetter($DataView, BYTE_LENGTH, '_l');
      addGetter($DataView, BYTE_OFFSET, '_o');
    }

    redefineAll($DataView[PROTOTYPE], {
      getInt8: function getInt8(byteOffset) {
        return get(this, 1, byteOffset)[0] << 24 >> 24;
      },
      getUint8: function getUint8(byteOffset) {
        return get(this, 1, byteOffset)[0];
      },
      getInt16: function getInt16(byteOffset /* , littleEndian */) {
        var bytes = get(this, 2, byteOffset, arguments[1]);
        return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
      },
      getUint16: function getUint16(byteOffset /* , littleEndian */) {
        var bytes = get(this, 2, byteOffset, arguments[1]);
        return bytes[1] << 8 | bytes[0];
      },
      getInt32: function getInt32(byteOffset /* , littleEndian */) {
        return unpackI32(get(this, 4, byteOffset, arguments[1]));
      },
      getUint32: function getUint32(byteOffset /* , littleEndian */) {
        return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
      },
      getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
        return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
      },
      getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
        return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
      },
      setInt8: function setInt8(byteOffset, value) {
        set(this, 1, byteOffset, packI8, value);
      },
      setUint8: function setUint8(byteOffset, value) {
        set(this, 1, byteOffset, packI8, value);
      },
      setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
        set(this, 2, byteOffset, packI16, value, arguments[2]);
      },
      setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
        set(this, 2, byteOffset, packI16, value, arguments[2]);
      },
      setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
        set(this, 4, byteOffset, packI32, value, arguments[2]);
      },
      setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
        set(this, 4, byteOffset, packI32, value, arguments[2]);
      },
      setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
        set(this, 4, byteOffset, packF32, value, arguments[2]);
      },
      setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
        set(this, 8, byteOffset, packF64, value, arguments[2]);
      }
    });
  } else {
    if (!fails(function () {
      $ArrayBuffer(1);
    }) || !fails(function () {
      new $ArrayBuffer(-1); // eslint-disable-line no-new
    }) || fails(function () {
      new $ArrayBuffer(); // eslint-disable-line no-new
      new $ArrayBuffer(1.5); // eslint-disable-line no-new
      new $ArrayBuffer(NaN); // eslint-disable-line no-new
      return $ArrayBuffer.name != ARRAY_BUFFER;
    })) {
      $ArrayBuffer = function ArrayBuffer(length) {
        anInstance(this, $ArrayBuffer);
        return new BaseBuffer(toIndex(length));
      };
      var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
      for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
        if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
      }
      if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
    }
    // iOS Safari 7.x bug
    var view = new $DataView(new $ArrayBuffer(2));
    var $setInt8 = $DataView[PROTOTYPE].setInt8;
    view.setInt8(0, 2147483648);
    view.setInt8(1, 2147483649);
    if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
      setInt8: function setInt8(byteOffset, value) {
        $setInt8.call(this, byteOffset, value << 24 >> 24);
      },
      setUint8: function setUint8(byteOffset, value) {
        $setInt8.call(this, byteOffset, value << 24 >> 24);
      }
    }, true);
  }
  setToStringTag($ArrayBuffer, ARRAY_BUFFER);
  setToStringTag($DataView, DATA_VIEW);
  hide($DataView[PROTOTYPE], $typed.VIEW, true);
  exports[ARRAY_BUFFER] = $ArrayBuffer;
  exports[DATA_VIEW] = $DataView;
});
$__System.registerDynamic('ed', ['55', '7c', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // https://tc39.github.io/ecma262/#sec-toindex
  var toInteger = $__require('55');
  var toLength = $__require('7c');
  module.exports = function (it) {
    if (it === undefined) return 0;
    var number = toInteger(it);
    var length = toLength(number);
    if (number !== length) throw RangeError('Wrong length!');
    return length;
  };
});
$__System.registerDynamic('bf', ['35', '7a', '7c', 'd'], true, function ($__require, exports, module) {
  // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var toObject = $__require('35');
  var toAbsoluteIndex = $__require('7a');
  var toLength = $__require('7c');
  module.exports = function fill(value /* , start = 0, end = @length */) {
    var O = toObject(this);
    var length = toLength(O.length);
    var aLen = arguments.length;
    var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
    var end = aLen > 2 ? arguments[2] : undefined;
    var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
    while (endPos > index) O[index++] = value;
    return O;
  };
});
$__System.registerDynamic('bc', ['35', '7a', '7c', 'd'], true, function ($__require, exports, module) {
  // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var toObject = $__require('35');
  var toAbsoluteIndex = $__require('7a');
  var toLength = $__require('7c');

  module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var to = toAbsoluteIndex(target, len);
    var from = toAbsoluteIndex(start, len);
    var end = arguments.length > 2 ? arguments[2] : undefined;
    var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
    var inc = 1;
    if (from < to && to < from + count) {
      inc = -1;
      from += count - 1;
      to += count - 1;
    }
    while (count-- > 0) {
      if (from in O) O[to] = O[from];else delete O[to];
      to += inc;
      from += inc;
    }return O;
  };
});
$__System.registerDynamic('e5', ['16', '2c', '14', '1a', '17', 'e1', 'e2', 'a1', 'd3', '26', '2d', 'db', '55', '7c', 'ed', '7a', '25', '15', '47', '23', '35', 'a3', '27', '36', '2b', 'a5', '1d', '1e', 'b0', 'b9', 'd1', 'ee', 'ef', 'a6', 'c3', 'bf', 'bc', '2a', '29', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  if ($__require('16')) {
    var LIBRARY = $__require('2c');
    var global = $__require('14');
    var fails = $__require('1a');
    var $export = $__require('17');
    var $typed = $__require('e1');
    var $buffer = $__require('e2');
    var ctx = $__require('a1');
    var anInstance = $__require('d3');
    var propertyDesc = $__require('26');
    var hide = $__require('2d');
    var redefineAll = $__require('db');
    var toInteger = $__require('55');
    var toLength = $__require('7c');
    var toIndex = $__require('ed');
    var toAbsoluteIndex = $__require('7a');
    var toPrimitive = $__require('25');
    var has = $__require('15');
    var classof = $__require('47');
    var isObject = $__require('23');
    var toObject = $__require('35');
    var isArrayIter = $__require('a3');
    var create = $__require('27');
    var getPrototypeOf = $__require('36');
    var gOPN = $__require('2b').f;
    var getIterFn = $__require('a5');
    var uid = $__require('1d');
    var wks = $__require('1e');
    var createArrayMethod = $__require('b0');
    var createArrayIncludes = $__require('b9');
    var speciesConstructor = $__require('d1');
    var ArrayIterators = $__require('ee');
    var Iterators = $__require('ef');
    var $iterDetect = $__require('a6');
    var setSpecies = $__require('c3');
    var arrayFill = $__require('bf');
    var arrayCopyWithin = $__require('bc');
    var $DP = $__require('2a');
    var $GOPD = $__require('29');
    var dP = $DP.f;
    var gOPD = $GOPD.f;
    var RangeError = global.RangeError;
    var TypeError = global.TypeError;
    var Uint8Array = global.Uint8Array;
    var ARRAY_BUFFER = 'ArrayBuffer';
    var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
    var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
    var PROTOTYPE = 'prototype';
    var ArrayProto = Array[PROTOTYPE];
    var $ArrayBuffer = $buffer.ArrayBuffer;
    var $DataView = $buffer.DataView;
    var arrayForEach = createArrayMethod(0);
    var arrayFilter = createArrayMethod(2);
    var arraySome = createArrayMethod(3);
    var arrayEvery = createArrayMethod(4);
    var arrayFind = createArrayMethod(5);
    var arrayFindIndex = createArrayMethod(6);
    var arrayIncludes = createArrayIncludes(true);
    var arrayIndexOf = createArrayIncludes(false);
    var arrayValues = ArrayIterators.values;
    var arrayKeys = ArrayIterators.keys;
    var arrayEntries = ArrayIterators.entries;
    var arrayLastIndexOf = ArrayProto.lastIndexOf;
    var arrayReduce = ArrayProto.reduce;
    var arrayReduceRight = ArrayProto.reduceRight;
    var arrayJoin = ArrayProto.join;
    var arraySort = ArrayProto.sort;
    var arraySlice = ArrayProto.slice;
    var arrayToString = ArrayProto.toString;
    var arrayToLocaleString = ArrayProto.toLocaleString;
    var ITERATOR = wks('iterator');
    var TAG = wks('toStringTag');
    var TYPED_CONSTRUCTOR = uid('typed_constructor');
    var DEF_CONSTRUCTOR = uid('def_constructor');
    var ALL_CONSTRUCTORS = $typed.CONSTR;
    var TYPED_ARRAY = $typed.TYPED;
    var VIEW = $typed.VIEW;
    var WRONG_LENGTH = 'Wrong length!';

    var $map = createArrayMethod(1, function (O, length) {
      return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
    });

    var LITTLE_ENDIAN = fails(function () {
      // eslint-disable-next-line no-undef
      return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
    });

    var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
      new Uint8Array(1).set({});
    });

    var toOffset = function (it, BYTES) {
      var offset = toInteger(it);
      if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
      return offset;
    };

    var validate = function (it) {
      if (isObject(it) && TYPED_ARRAY in it) return it;
      throw TypeError(it + ' is not a typed array!');
    };

    var allocate = function (C, length) {
      if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
        throw TypeError('It is not a typed array constructor!');
      }return new C(length);
    };

    var speciesFromList = function (O, list) {
      return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
    };

    var fromList = function (C, list) {
      var index = 0;
      var length = list.length;
      var result = allocate(C, length);
      while (length > index) result[index] = list[index++];
      return result;
    };

    var addGetter = function (it, key, internal) {
      dP(it, key, { get: function () {
          return this._d[internal];
        } });
    };

    var $from = function from(source /* , mapfn, thisArg */) {
      var O = toObject(source);
      var aLen = arguments.length;
      var mapfn = aLen > 1 ? arguments[1] : undefined;
      var mapping = mapfn !== undefined;
      var iterFn = getIterFn(O);
      var i, length, values, result, step, iterator;
      if (iterFn != undefined && !isArrayIter(iterFn)) {
        for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
          values.push(step.value);
        }O = values;
      }
      if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
      for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
        result[i] = mapping ? mapfn(O[i], i) : O[i];
      }
      return result;
    };

    var $of = function of() /* ...items */{
      var index = 0;
      var length = arguments.length;
      var result = allocate(this, length);
      while (length > index) result[index] = arguments[index++];
      return result;
    };

    // iOS Safari 6.x fails here
    var TO_LOCALE_BUG = !!Uint8Array && fails(function () {
      arrayToLocaleString.call(new Uint8Array(1));
    });

    var $toLocaleString = function toLocaleString() {
      return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
    };

    var proto = {
      copyWithin: function copyWithin(target, start /* , end */) {
        return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
      },
      every: function every(callbackfn /* , thisArg */) {
        return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      },
      fill: function fill(value /* , start, end */) {
        // eslint-disable-line no-unused-vars
        return arrayFill.apply(validate(this), arguments);
      },
      filter: function filter(callbackfn /* , thisArg */) {
        return speciesFromList(this, arrayFilter(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined));
      },
      find: function find(predicate /* , thisArg */) {
        return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
      },
      findIndex: function findIndex(predicate /* , thisArg */) {
        return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
      },
      forEach: function forEach(callbackfn /* , thisArg */) {
        arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      },
      indexOf: function indexOf(searchElement /* , fromIndex */) {
        return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
      },
      includes: function includes(searchElement /* , fromIndex */) {
        return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
      },
      join: function join(separator) {
        // eslint-disable-line no-unused-vars
        return arrayJoin.apply(validate(this), arguments);
      },
      lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) {
        // eslint-disable-line no-unused-vars
        return arrayLastIndexOf.apply(validate(this), arguments);
      },
      map: function map(mapfn /* , thisArg */) {
        return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
      },
      reduce: function reduce(callbackfn /* , initialValue */) {
        // eslint-disable-line no-unused-vars
        return arrayReduce.apply(validate(this), arguments);
      },
      reduceRight: function reduceRight(callbackfn /* , initialValue */) {
        // eslint-disable-line no-unused-vars
        return arrayReduceRight.apply(validate(this), arguments);
      },
      reverse: function reverse() {
        var that = this;
        var length = validate(that).length;
        var middle = Math.floor(length / 2);
        var index = 0;
        var value;
        while (index < middle) {
          value = that[index];
          that[index++] = that[--length];
          that[length] = value;
        }return that;
      },
      some: function some(callbackfn /* , thisArg */) {
        return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      },
      sort: function sort(comparefn) {
        return arraySort.call(validate(this), comparefn);
      },
      subarray: function subarray(begin, end) {
        var O = validate(this);
        var length = O.length;
        var $begin = toAbsoluteIndex(begin, length);
        return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(O.buffer, O.byteOffset + $begin * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin));
      }
    };

    var $slice = function slice(start, end) {
      return speciesFromList(this, arraySlice.call(validate(this), start, end));
    };

    var $set = function set(arrayLike /* , offset */) {
      validate(this);
      var offset = toOffset(arguments[1], 1);
      var length = this.length;
      var src = toObject(arrayLike);
      var len = toLength(src.length);
      var index = 0;
      if (len + offset > length) throw RangeError(WRONG_LENGTH);
      while (index < len) this[offset + index] = src[index++];
    };

    var $iterators = {
      entries: function entries() {
        return arrayEntries.call(validate(this));
      },
      keys: function keys() {
        return arrayKeys.call(validate(this));
      },
      values: function values() {
        return arrayValues.call(validate(this));
      }
    };

    var isTAIndex = function (target, key) {
      return isObject(target) && target[TYPED_ARRAY] && typeof key != 'symbol' && key in target && String(+key) == String(key);
    };
    var $getDesc = function getOwnPropertyDescriptor(target, key) {
      return isTAIndex(target, key = toPrimitive(key, true)) ? propertyDesc(2, target[key]) : gOPD(target, key);
    };
    var $setDesc = function defineProperty(target, key, desc) {
      if (isTAIndex(target, key = toPrimitive(key, true)) && isObject(desc) && has(desc, 'value') && !has(desc, 'get') && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable && (!has(desc, 'writable') || desc.writable) && (!has(desc, 'enumerable') || desc.enumerable)) {
        target[key] = desc.value;
        return target;
      }return dP(target, key, desc);
    };

    if (!ALL_CONSTRUCTORS) {
      $GOPD.f = $getDesc;
      $DP.f = $setDesc;
    }

    $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
      getOwnPropertyDescriptor: $getDesc,
      defineProperty: $setDesc
    });

    if (fails(function () {
      arrayToString.call({});
    })) {
      arrayToString = arrayToLocaleString = function toString() {
        return arrayJoin.call(this);
      };
    }

    var $TypedArrayPrototype$ = redefineAll({}, proto);
    redefineAll($TypedArrayPrototype$, $iterators);
    hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
    redefineAll($TypedArrayPrototype$, {
      slice: $slice,
      set: $set,
      constructor: function () {/* noop */},
      toString: arrayToString,
      toLocaleString: $toLocaleString
    });
    addGetter($TypedArrayPrototype$, 'buffer', 'b');
    addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
    addGetter($TypedArrayPrototype$, 'byteLength', 'l');
    addGetter($TypedArrayPrototype$, 'length', 'e');
    dP($TypedArrayPrototype$, TAG, {
      get: function () {
        return this[TYPED_ARRAY];
      }
    });

    // eslint-disable-next-line max-statements
    module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
      CLAMPED = !!CLAMPED;
      var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
      var GETTER = 'get' + KEY;
      var SETTER = 'set' + KEY;
      var TypedArray = global[NAME];
      var Base = TypedArray || {};
      var TAC = TypedArray && getPrototypeOf(TypedArray);
      var FORCED = !TypedArray || !$typed.ABV;
      var O = {};
      var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
      var getter = function (that, index) {
        var data = that._d;
        return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
      };
      var setter = function (that, index, value) {
        var data = that._d;
        if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
        data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
      };
      var addElement = function (that, index) {
        dP(that, index, {
          get: function () {
            return getter(this, index);
          },
          set: function (value) {
            return setter(this, index, value);
          },
          enumerable: true
        });
      };
      if (FORCED) {
        TypedArray = wrapper(function (that, data, $offset, $length) {
          anInstance(that, TypedArray, NAME, '_d');
          var index = 0;
          var offset = 0;
          var buffer, byteLength, length, klass;
          if (!isObject(data)) {
            length = toIndex(data);
            byteLength = length * BYTES;
            buffer = new $ArrayBuffer(byteLength);
          } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
            buffer = data;
            offset = toOffset($offset, BYTES);
            var $len = data.byteLength;
            if ($length === undefined) {
              if ($len % BYTES) throw RangeError(WRONG_LENGTH);
              byteLength = $len - offset;
              if (byteLength < 0) throw RangeError(WRONG_LENGTH);
            } else {
              byteLength = toLength($length) * BYTES;
              if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
            }
            length = byteLength / BYTES;
          } else if (TYPED_ARRAY in data) {
            return fromList(TypedArray, data);
          } else {
            return $from.call(TypedArray, data);
          }
          hide(that, '_d', {
            b: buffer,
            o: offset,
            l: byteLength,
            e: length,
            v: new $DataView(buffer)
          });
          while (index < length) addElement(that, index++);
        });
        TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
        hide(TypedArrayPrototype, 'constructor', TypedArray);
      } else if (!fails(function () {
        TypedArray(1);
      }) || !fails(function () {
        new TypedArray(-1); // eslint-disable-line no-new
      }) || !$iterDetect(function (iter) {
        new TypedArray(); // eslint-disable-line no-new
        new TypedArray(null); // eslint-disable-line no-new
        new TypedArray(1.5); // eslint-disable-line no-new
        new TypedArray(iter); // eslint-disable-line no-new
      }, true)) {
        TypedArray = wrapper(function (that, data, $offset, $length) {
          anInstance(that, TypedArray, NAME);
          var klass;
          // `ws` module bug, temporarily remove validation length for Uint8Array
          // https://github.com/websockets/ws/pull/645
          if (!isObject(data)) return new Base(toIndex(data));
          if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
            return $length !== undefined ? new Base(data, toOffset($offset, BYTES), $length) : $offset !== undefined ? new Base(data, toOffset($offset, BYTES)) : new Base(data);
          }
          if (TYPED_ARRAY in data) return fromList(TypedArray, data);
          return $from.call(TypedArray, data);
        });
        arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
          if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
        });
        TypedArray[PROTOTYPE] = TypedArrayPrototype;
        if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
      }
      var $nativeIterator = TypedArrayPrototype[ITERATOR];
      var CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
      var $iterator = $iterators.values;
      hide(TypedArray, TYPED_CONSTRUCTOR, true);
      hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
      hide(TypedArrayPrototype, VIEW, true);
      hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

      if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
        dP(TypedArrayPrototype, TAG, {
          get: function () {
            return NAME;
          }
        });
      }

      O[NAME] = TypedArray;

      $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

      $export($export.S, NAME, {
        BYTES_PER_ELEMENT: BYTES
      });

      $export($export.S + $export.F * fails(function () {
        Base.of.call(TypedArray, 1);
      }), NAME, {
        from: $from,
        of: $of
      });

      if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

      $export($export.P, NAME, proto);

      setSpecies(NAME);

      $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

      $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

      if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

      $export($export.P + $export.F * fails(function () {
        new TypedArray(1).slice();
      }), NAME, { slice: $slice });

      $export($export.P + $export.F * (fails(function () {
        return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
      }) || !fails(function () {
        TypedArrayPrototype.toLocaleString.call([1, 2]);
      })), NAME, { toLocaleString: $toLocaleString });

      Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
      if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
    };
  } else module.exports = function () {/* empty */};
});
$__System.registerDynamic('f0', ['e5', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  $__require('e5')('Float64', 8, function (init) {
    return function Float64Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });
});
$__System.registerDynamic('f1', ['17', 'ae', '22', '14', '1a', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
  var $export = $__require('17');
  var aFunction = $__require('ae');
  var anObject = $__require('22');
  var rApply = ($__require('14').Reflect || {}).apply;
  var fApply = Function.apply;
  // MS Edge argumentsList argument is optional
  $export($export.S + $export.F * !$__require('1a')(function () {
    rApply(function () {/* empty */});
  }), 'Reflect', {
    apply: function apply(target, thisArgument, argumentsList) {
      var T = aFunction(target);
      var L = anObject(argumentsList);
      return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
    }
  });
});
$__System.registerDynamic('49', ['ae', '23', 'f2', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var aFunction = $__require('ae');
  var isObject = $__require('23');
  var invoke = $__require('f2');
  var arraySlice = [].slice;
  var factories = {};

  var construct = function (F, len, args) {
    if (!(len in factories)) {
      for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
      // eslint-disable-next-line no-new-func
      factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
    }return factories[len](F, args);
  };

  module.exports = Function.bind || function bind(that /* , ...args */) {
    var fn = aFunction(this);
    var partArgs = arraySlice.call(arguments, 1);
    var bound = function () /* args... */{
      var args = partArgs.concat(arraySlice.call(arguments));
      return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
    };
    if (isObject(fn.prototype)) bound.prototype = fn.prototype;
    return bound;
  };
});
$__System.registerDynamic('f3', ['17', '27', 'ae', '22', '23', '1a', '49', '14', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
  var $export = $__require('17');
  var create = $__require('27');
  var aFunction = $__require('ae');
  var anObject = $__require('22');
  var isObject = $__require('23');
  var fails = $__require('1a');
  var bind = $__require('49');
  var rConstruct = ($__require('14').Reflect || {}).construct;

  // MS Edge supports only 2 arguments and argumentsList argument is optional
  // FF Nightly sets third argument as `new.target`, but does not create `this` from it
  var NEW_TARGET_BUG = fails(function () {
    function F() {/* empty */}
    return !(rConstruct(function () {/* empty */}, [], F) instanceof F);
  });
  var ARGS_BUG = !fails(function () {
    rConstruct(function () {/* empty */});
  });

  $export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
    construct: function construct(Target, args /* , newTarget */) {
      aFunction(Target);
      anObject(args);
      var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
      if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
      if (Target == newTarget) {
        // w/o altered newTarget, optimization for 0-4 arguments
        switch (args.length) {
          case 0:
            return new Target();
          case 1:
            return new Target(args[0]);
          case 2:
            return new Target(args[0], args[1]);
          case 3:
            return new Target(args[0], args[1], args[2]);
          case 4:
            return new Target(args[0], args[1], args[2], args[3]);
        }
        // w/o altered newTarget, lot of arguments case
        var $args = [null];
        $args.push.apply($args, args);
        return new (bind.apply(Target, $args))();
      }
      // with altered newTarget, not support built-in constructors
      var proto = newTarget.prototype;
      var instance = create(isObject(proto) ? proto : Object.prototype);
      var result = Function.apply.call(Target, instance, args);
      return isObject(result) ? result : instance;
    }
  });
});
$__System.registerDynamic('f4', ['2a', '17', '22', '25', '1a', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
  var dP = $__require('2a');
  var $export = $__require('17');
  var anObject = $__require('22');
  var toPrimitive = $__require('25');

  // MS Edge has broken Reflect.defineProperty - throwing instead of returning false
  $export($export.S + $export.F * $__require('1a')(function () {
    // eslint-disable-next-line no-undef
    Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
  }), 'Reflect', {
    defineProperty: function defineProperty(target, propertyKey, attributes) {
      anObject(target);
      propertyKey = toPrimitive(propertyKey, true);
      anObject(attributes);
      try {
        dP.f(target, propertyKey, attributes);
        return true;
      } catch (e) {
        return false;
      }
    }
  });
});
$__System.registerDynamic('f5', ['17', '29', '22', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 26.1.4 Reflect.deleteProperty(target, propertyKey)
  var $export = $__require('17');
  var gOPD = $__require('29').f;
  var anObject = $__require('22');

  $export($export.S, 'Reflect', {
    deleteProperty: function deleteProperty(target, propertyKey) {
      var desc = gOPD(anObject(target), propertyKey);
      return desc && !desc.configurable ? false : delete target[propertyKey];
    }
  });
});
$__System.registerDynamic('f6', ['17', '22', 'f7', 'd'], true, function ($__require, exports, module) {
  'use strict';
  // 26.1.5 Reflect.enumerate(target)

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var anObject = $__require('22');
  var Enumerate = function (iterated) {
    this._t = anObject(iterated); // target
    this._i = 0; // next index
    var keys = this._k = []; // keys
    var key;
    for (key in iterated) keys.push(key);
  };
  $__require('f7')(Enumerate, 'Object', function () {
    var that = this;
    var keys = that._k;
    var key;
    do {
      if (that._i >= keys.length) return { value: undefined, done: true };
    } while (!((key = keys[that._i++]) in that._t));
    return { value: key, done: false };
  });

  $export($export.S, 'Reflect', {
    enumerate: function enumerate(target) {
      return new Enumerate(target);
    }
  });
});
$__System.registerDynamic('f8', ['29', '36', '15', '17', '23', '22', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 26.1.6 Reflect.get(target, propertyKey [, receiver])
  var gOPD = $__require('29');
  var getPrototypeOf = $__require('36');
  var has = $__require('15');
  var $export = $__require('17');
  var isObject = $__require('23');
  var anObject = $__require('22');

  function get(target, propertyKey /* , receiver */) {
    var receiver = arguments.length < 3 ? target : arguments[2];
    var desc, proto;
    if (anObject(target) === receiver) return target[propertyKey];
    if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value') ? desc.value : desc.get !== undefined ? desc.get.call(receiver) : undefined;
    if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
  }

  $export($export.S, 'Reflect', { get: get });
});
$__System.registerDynamic('f9', ['29', '17', '22', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
  var gOPD = $__require('29');
  var $export = $__require('17');
  var anObject = $__require('22');

  $export($export.S, 'Reflect', {
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
      return gOPD.f(anObject(target), propertyKey);
    }
  });
});
$__System.registerDynamic('fa', ['17', '36', '22', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 26.1.8 Reflect.getPrototypeOf(target)
  var $export = $__require('17');
  var getProto = $__require('36');
  var anObject = $__require('22');

  $export($export.S, 'Reflect', {
    getPrototypeOf: function getPrototypeOf(target) {
      return getProto(anObject(target));
    }
  });
});
$__System.registerDynamic('fb', ['17', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 26.1.9 Reflect.has(target, propertyKey)
  var $export = $__require('17');

  $export($export.S, 'Reflect', {
    has: function has(target, propertyKey) {
      return propertyKey in target;
    }
  });
});
$__System.registerDynamic('fc', ['17', '22', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 26.1.10 Reflect.isExtensible(target)
  var $export = $__require('17');
  var anObject = $__require('22');
  var $isExtensible = Object.isExtensible;

  $export($export.S, 'Reflect', {
    isExtensible: function isExtensible(target) {
      anObject(target);
      return $isExtensible ? $isExtensible(target) : true;
    }
  });
});
$__System.registerDynamic('fd', ['17', 'fe', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 26.1.11 Reflect.ownKeys(target)
  var $export = $__require('17');

  $export($export.S, 'Reflect', { ownKeys: $__require('fe') });
});
$__System.registerDynamic('ff', ['17', '22', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 26.1.12 Reflect.preventExtensions(target)
  var $export = $__require('17');
  var anObject = $__require('22');
  var $preventExtensions = Object.preventExtensions;

  $export($export.S, 'Reflect', {
    preventExtensions: function preventExtensions(target) {
      anObject(target);
      try {
        if ($preventExtensions) $preventExtensions(target);
        return true;
      } catch (e) {
        return false;
      }
    }
  });
});
$__System.registerDynamic('100', ['2a', '29', '36', '15', '17', '26', '22', '23', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
  var dP = $__require('2a');
  var gOPD = $__require('29');
  var getPrototypeOf = $__require('36');
  var has = $__require('15');
  var $export = $__require('17');
  var createDesc = $__require('26');
  var anObject = $__require('22');
  var isObject = $__require('23');

  function set(target, propertyKey, V /* , receiver */) {
    var receiver = arguments.length < 4 ? target : arguments[3];
    var ownDesc = gOPD.f(anObject(target), propertyKey);
    var existingDescriptor, proto;
    if (!ownDesc) {
      if (isObject(proto = getPrototypeOf(target))) {
        return set(proto, propertyKey, V, receiver);
      }
      ownDesc = createDesc(0);
    }
    if (has(ownDesc, 'value')) {
      if (ownDesc.writable === false || !isObject(receiver)) return false;
      if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
        if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
        existingDescriptor.value = V;
        dP.f(receiver, propertyKey, existingDescriptor);
      } else dP.f(receiver, propertyKey, createDesc(0, V));
      return true;
    }
    return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
  }

  $export($export.S, 'Reflect', { set: set });
});
$__System.registerDynamic('101', ['17', '45', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 26.1.14 Reflect.setPrototypeOf(target, proto)
  var $export = $__require('17');
  var setProto = $__require('45');

  if (setProto) $export($export.S, 'Reflect', {
    setPrototypeOf: function setPrototypeOf(target, proto) {
      setProto.check(target, proto);
      try {
        setProto.set(target, proto);
        return true;
      } catch (e) {
        return false;
      }
    }
  });
});
$__System.registerDynamic('102', ['17', 'b9', 'bd', 'd'], true, function ($__require, exports, module) {
  'use strict';
  // https://github.com/tc39/Array.prototype.includes

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var $includes = $__require('b9')(true);

  $export($export.P, 'Array', {
    includes: function includes(el /* , fromIndex = 0 */) {
      return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  $__require('bd')('includes');
});
$__System.registerDynamic('103', ['17', '104', '35', '7c', 'ae', '105', 'bd', 'd'], true, function ($__require, exports, module) {
  'use strict';
  // https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var flattenIntoArray = $__require('104');
  var toObject = $__require('35');
  var toLength = $__require('7c');
  var aFunction = $__require('ae');
  var arraySpeciesCreate = $__require('105');

  $export($export.P, 'Array', {
    flatMap: function flatMap(callbackfn /* , thisArg */) {
      var O = toObject(this);
      var sourceLen, A;
      aFunction(callbackfn);
      sourceLen = toLength(O.length);
      A = arraySpeciesCreate(O, 0);
      flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
      return A;
    }
  });

  $__require('bd')('flatMap');
});
$__System.registerDynamic('104', ['21', '23', '7c', 'a1', '1e', 'd'], true, function ($__require, exports, module) {
  'use strict';
  // https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var isArray = $__require('21');
  var isObject = $__require('23');
  var toLength = $__require('7c');
  var ctx = $__require('a1');
  var IS_CONCAT_SPREADABLE = $__require('1e')('isConcatSpreadable');

  function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
    var targetIndex = start;
    var sourceIndex = 0;
    var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
    var element, spreadable;

    while (sourceIndex < sourceLen) {
      if (sourceIndex in source) {
        element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

        spreadable = false;
        if (isObject(element)) {
          spreadable = element[IS_CONCAT_SPREADABLE];
          spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
        }

        if (spreadable && depth > 0) {
          targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
        } else {
          if (targetIndex >= 0x1fffffffffffff) throw TypeError();
          target[targetIndex] = element;
        }

        targetIndex++;
      }
      sourceIndex++;
    }
    return targetIndex;
  }

  module.exports = flattenIntoArray;
});
$__System.registerDynamic('106', ['17', '104', '35', '7c', '55', '105', 'bd', 'd'], true, function ($__require, exports, module) {
  'use strict';
  // https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var flattenIntoArray = $__require('104');
  var toObject = $__require('35');
  var toLength = $__require('7c');
  var toInteger = $__require('55');
  var arraySpeciesCreate = $__require('105');

  $export($export.P, 'Array', {
    flatten: function flatten() /* depthArg = 1 */{
      var depthArg = arguments[0];
      var O = toObject(this);
      var sourceLen = toLength(O.length);
      var A = arraySpeciesCreate(O, 0);
      flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
      return A;
    }
  });

  $__require('bd')('flatten');
});
$__System.registerDynamic('7f', ['55', '88', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var toInteger = $__require('55');
  var defined = $__require('88');
  // true  -> String#at
  // false -> String#codePointAt
  module.exports = function (TO_STRING) {
    return function (that, pos) {
      var s = String(defined(that));
      var i = toInteger(pos);
      var l = s.length;
      var a, b;
      if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };
});
$__System.registerDynamic('107', ['17', '7f', 'd'], true, function ($__require, exports, module) {
  'use strict';
  // https://github.com/mathiasbynens/String.prototype.at

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var $at = $__require('7f')(true);

  $export($export.P, 'String', {
    at: function at(pos) {
      return $at(this, pos);
    }
  });
});
$__System.registerDynamic('108', ['17', '109', 'd9', 'd'], true, function ($__require, exports, module) {
  'use strict';
  // https://github.com/tc39/proposal-string-pad-start-end

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var $pad = $__require('109');
  var userAgent = $__require('d9');

  // https://github.com/zloirock/core-js/issues/280
  var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

  $export($export.P + $export.F * WEBKIT_BUG, 'String', {
    padStart: function padStart(maxLength /* , fillString = ' ' */) {
      return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
    }
  });
});
$__System.registerDynamic('57', ['55', '88', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var toInteger = $__require('55');
  var defined = $__require('88');

  module.exports = function repeat(count) {
    var str = String(defined(this));
    var res = '';
    var n = toInteger(count);
    if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
    for (; n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
    return res;
  };
});
$__System.registerDynamic('109', ['7c', '57', '88', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // https://github.com/tc39/proposal-string-pad-start-end
  var toLength = $__require('7c');
  var repeat = $__require('57');
  var defined = $__require('88');

  module.exports = function (that, maxLength, fillString, left) {
    var S = String(defined(that));
    var stringLength = S.length;
    var fillStr = fillString === undefined ? ' ' : String(fillString);
    var intMaxLength = toLength(maxLength);
    if (intMaxLength <= stringLength || fillStr == '') return S;
    var fillLen = intMaxLength - stringLength;
    var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
    if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
    return left ? stringFiller + S : S + stringFiller;
  };
});
$__System.registerDynamic('10a', ['17', '109', 'd9', 'd'], true, function ($__require, exports, module) {
  'use strict';
  // https://github.com/tc39/proposal-string-pad-start-end

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var $pad = $__require('109');
  var userAgent = $__require('d9');

  // https://github.com/zloirock/core-js/issues/280
  var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

  $export($export.P + $export.F * WEBKIT_BUG, 'String', {
    padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
      return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
    }
  });
});
$__System.registerDynamic('10b', ['53', 'd'], true, function ($__require, exports, module) {
  'use strict';
  // https://github.com/sebmarkbage/ecmascript-string-left-right-trim

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  $__require('53')('trimLeft', function ($trim) {
    return function trimLeft() {
      return $trim(this, 1);
    };
  }, 'trimStart');
});
$__System.registerDynamic('61', ['d'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';
});
$__System.registerDynamic('53', ['17', '88', '1a', '61', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var defined = $__require('88');
  var fails = $__require('1a');
  var spaces = $__require('61');
  var space = '[' + spaces + ']';
  var non = '\u200b\u0085';
  var ltrim = RegExp('^' + space + space + '*');
  var rtrim = RegExp(space + space + '*$');

  var exporter = function (KEY, exec, ALIAS) {
    var exp = {};
    var FORCE = fails(function () {
      return !!spaces[KEY]() || non[KEY]() != non;
    });
    var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
    if (ALIAS) exp[ALIAS] = fn;
    $export($export.P + $export.F * FORCE, 'String', exp);
  };

  // 1 -> String#trimLeft
  // 2 -> String#trimRight
  // 3 -> String#trim
  var trim = exporter.trim = function (string, TYPE) {
    string = String(defined(string));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };

  module.exports = exporter;
});
$__System.registerDynamic('10c', ['53', 'd'], true, function ($__require, exports, module) {
  'use strict';
  // https://github.com/sebmarkbage/ecmascript-string-left-right-trim

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  $__require('53')('trimRight', function ($trim) {
    return function trimRight() {
      return $trim(this, 2);
    };
  }, 'trimEnd');
});
$__System.registerDynamic('87', ['23', '51', '1e', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 7.2.8 IsRegExp(argument)
  var isObject = $__require('23');
  var cof = $__require('51');
  var MATCH = $__require('1e')('match');
  module.exports = function (it) {
    var isRegExp;
    return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
  };
});
$__System.registerDynamic('c5', ['22', 'd'], true, function ($__require, exports, module) {
  'use strict';
  // 21.2.5.3 get RegExp.prototype.flags

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var anObject = $__require('22');
  module.exports = function () {
    var that = anObject(this);
    var result = '';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.unicode) result += 'u';
    if (that.sticky) result += 'y';
    return result;
  };
});
$__System.registerDynamic('10d', ['17', '88', '7c', '87', 'c5', 'f7', 'd'], true, function ($__require, exports, module) {
  'use strict';
  // https://tc39.github.io/String.prototype.matchAll/

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var defined = $__require('88');
  var toLength = $__require('7c');
  var isRegExp = $__require('87');
  var getFlags = $__require('c5');
  var RegExpProto = RegExp.prototype;

  var $RegExpStringIterator = function (regexp, string) {
    this._r = regexp;
    this._s = string;
  };

  $__require('f7')($RegExpStringIterator, 'RegExp String', function next() {
    var match = this._r.exec(this._s);
    return { value: match, done: match === null };
  });

  $export($export.P, 'String', {
    matchAll: function matchAll(regexp) {
      defined(this);
      if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');
      var S = String(this);
      var flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);
      var rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
      rx.lastIndex = toLength(regexp.lastIndex);
      return new $RegExpStringIterator(rx, S);
    }
  });
});
$__System.registerDynamic('10e', ['20', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  $__require('20')('asyncIterator');
});
$__System.registerDynamic('1f', ['1e', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  exports.f = $__require('1e');
});
$__System.registerDynamic('20', ['14', '3e', '2c', '1f', '2a', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var global = $__require('14');
  var core = $__require('3e');
  var LIBRARY = $__require('2c');
  var wksExt = $__require('1f');
  var defineProperty = $__require('2a').f;
  module.exports = function (name) {
    var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
    if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
  };
});
$__System.registerDynamic('10f', ['20', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  $__require('20')('observable');
});
$__System.registerDynamic('2b', ['110', '111', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
  var $keys = $__require('110');
  var hiddenKeys = $__require('111').concat('length', 'prototype');

  exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return $keys(O, hiddenKeys);
  };
});
$__System.registerDynamic('fe', ['2b', '11', '22', '14', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // all object keys, includes non-enumerable and symbols
  var gOPN = $__require('2b');
  var gOPS = $__require('11');
  var anObject = $__require('22');
  var Reflect = $__require('14').Reflect;
  module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
    var keys = gOPN.f(anObject(it));
    var getSymbols = gOPS.f;
    return getSymbols ? keys.concat(getSymbols(it)) : keys;
  };
});
$__System.registerDynamic('a4', ['2a', '26', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $defineProperty = $__require('2a');
  var createDesc = $__require('26');

  module.exports = function (object, index, value) {
    if (index in object) $defineProperty.f(object, index, createDesc(0, value));else object[index] = value;
  };
});
$__System.registerDynamic('112', ['17', 'fe', '24', '29', 'a4', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // https://github.com/tc39/proposal-object-getownpropertydescriptors
  var $export = $__require('17');
  var ownKeys = $__require('fe');
  var toIObject = $__require('24');
  var gOPD = $__require('29');
  var createProperty = $__require('a4');

  $export($export.S, 'Object', {
    getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
      var O = toIObject(object);
      var getDesc = gOPD.f;
      var keys = ownKeys(O);
      var result = {};
      var i = 0;
      var key, desc;
      while (keys.length > i) {
        desc = getDesc(O, key = keys[i++]);
        if (desc !== undefined) createProperty(result, key, desc);
      }
      return result;
    }
  });
});
$__System.registerDynamic('113', ['17', '114', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // https://github.com/tc39/proposal-object-values-entries
  var $export = $__require('17');
  var $values = $__require('114')(false);

  $export($export.S, 'Object', {
    values: function values(it) {
      return $values(it);
    }
  });
});
$__System.registerDynamic('114', ['10', '24', '12', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var getKeys = $__require('10');
  var toIObject = $__require('24');
  var isEnum = $__require('12').f;
  module.exports = function (isEntries) {
    return function (it) {
      var O = toIObject(it);
      var keys = getKeys(O);
      var length = keys.length;
      var i = 0;
      var result = [];
      var key;
      while (length > i) if (isEnum.call(O, key = keys[i++])) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }return result;
    };
  };
});
$__System.registerDynamic('115', ['17', '114', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // https://github.com/tc39/proposal-object-values-entries
  var $export = $__require('17');
  var $entries = $__require('114')(true);

  $export($export.S, 'Object', {
    entries: function entries(it) {
      return $entries(it);
    }
  });
});
$__System.registerDynamic('116', ['17', '35', 'ae', '2a', '16', '117', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var toObject = $__require('35');
  var aFunction = $__require('ae');
  var $defineProperty = $__require('2a');

  // B.2.2.2 Object.prototype.__defineGetter__(P, getter)
  $__require('16') && $export($export.P + $__require('117'), 'Object', {
    __defineGetter__: function __defineGetter__(P, getter) {
      $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
    }
  });
});
$__System.registerDynamic('118', ['17', '35', 'ae', '2a', '16', '117', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var toObject = $__require('35');
  var aFunction = $__require('ae');
  var $defineProperty = $__require('2a');

  // B.2.2.3 Object.prototype.__defineSetter__(P, setter)
  $__require('16') && $export($export.P + $__require('117'), 'Object', {
    __defineSetter__: function __defineSetter__(P, setter) {
      $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
    }
  });
});
$__System.registerDynamic('119', ['17', '35', '25', '36', '29', '16', '117', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var toObject = $__require('35');
  var toPrimitive = $__require('25');
  var getPrototypeOf = $__require('36');
  var getOwnPropertyDescriptor = $__require('29').f;

  // B.2.2.4 Object.prototype.__lookupGetter__(P)
  $__require('16') && $export($export.P + $__require('117'), 'Object', {
    __lookupGetter__: function __lookupGetter__(P) {
      var O = toObject(this);
      var K = toPrimitive(P, true);
      var D;
      do {
        if (D = getOwnPropertyDescriptor(O, K)) return D.get;
      } while (O = getPrototypeOf(O));
    }
  });
});
$__System.registerDynamic('117', ['2c', '1a', '14', 'd'], true, function ($__require, exports, module) {
  'use strict';
  // Forced replacement prototype accessors methods

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require('2c') || !$__require('1a')(function () {
    var K = Math.random();
    // In FF throws only define methods
    // eslint-disable-next-line no-undef, no-useless-call
    __defineSetter__.call(null, K, function () {/* empty */});
    delete $__require('14')[K];
  });
});
$__System.registerDynamic('11a', ['17', '35', '25', '36', '29', '16', '117', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var toObject = $__require('35');
  var toPrimitive = $__require('25');
  var getPrototypeOf = $__require('36');
  var getOwnPropertyDescriptor = $__require('29').f;

  // B.2.2.5 Object.prototype.__lookupSetter__(P)
  $__require('16') && $export($export.P + $__require('117'), 'Object', {
    __lookupSetter__: function __lookupSetter__(P) {
      var O = toObject(this);
      var K = toPrimitive(P, true);
      var D;
      do {
        if (D = getOwnPropertyDescriptor(O, K)) return D.set;
      } while (O = getPrototypeOf(O));
    }
  });
});
$__System.registerDynamic('11b', ['17', '11c', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // https://github.com/DavidBruant/Map-Set.prototype.toJSON
  var $export = $__require('17');

  $export($export.P + $export.R, 'Map', { toJSON: $__require('11c')('Map') });
});
$__System.registerDynamic('11c', ['47', '11d', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // https://github.com/DavidBruant/Map-Set.prototype.toJSON
  var classof = $__require('47');
  var from = $__require('11d');
  module.exports = function (NAME) {
    return function toJSON() {
      if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
      return from(this);
    };
  };
});
$__System.registerDynamic('11e', ['17', '11c', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // https://github.com/DavidBruant/Map-Set.prototype.toJSON
  var $export = $__require('17');

  $export($export.P + $export.R, 'Set', { toJSON: $__require('11c')('Set') });
});
$__System.registerDynamic('11f', ['120', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
  $__require('120')('Map');
});
$__System.registerDynamic('121', ['120', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
  $__require('120')('Set');
});
$__System.registerDynamic('122', ['120', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
  $__require('120')('WeakMap');
});
$__System.registerDynamic('120', ['17', 'd'], true, function ($__require, exports, module) {
  'use strict';
  // https://tc39.github.io/proposal-setmap-offrom/

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');

  module.exports = function (COLLECTION) {
    $export($export.S, COLLECTION, { of: function of() {
        var length = arguments.length;
        var A = new Array(length);
        while (length--) A[length] = arguments[length];
        return new this(A);
      } });
  };
});
$__System.registerDynamic('123', ['120', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
  $__require('120')('WeakSet');
});
$__System.registerDynamic('124', ['125', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
  $__require('125')('Map');
});
$__System.registerDynamic('126', ['125', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
  $__require('125')('Set');
});
$__System.registerDynamic('127', ['125', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
  $__require('125')('WeakMap');
});
$__System.registerDynamic('125', ['17', 'ae', 'a1', 'd4', 'd'], true, function ($__require, exports, module) {
  'use strict';
  // https://tc39.github.io/proposal-setmap-offrom/

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var aFunction = $__require('ae');
  var ctx = $__require('a1');
  var forOf = $__require('d4');

  module.exports = function (COLLECTION) {
    $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
        var mapFn = arguments[1];
        var mapping, A, n, cb;
        aFunction(this);
        mapping = mapFn !== undefined;
        if (mapping) aFunction(mapFn);
        if (source == undefined) return new this();
        A = [];
        if (mapping) {
          n = 0;
          cb = ctx(mapFn, arguments[2], 2);
          forOf(source, false, function (nextItem) {
            A.push(cb(nextItem, n++));
          });
        } else {
          forOf(source, false, A.push, A);
        }
        return new this(A);
      } });
  };
});
$__System.registerDynamic('128', ['125', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
  $__require('125')('WeakSet');
});
$__System.registerDynamic('129', ['17', '14', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // https://github.com/tc39/proposal-global
  var $export = $__require('17');

  $export($export.G, { global: $__require('14') });
});
$__System.registerDynamic('12a', ['17', '14', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // https://github.com/tc39/proposal-global
  var $export = $__require('17');

  $export($export.S, 'System', { global: $__require('14') });
});
$__System.registerDynamic('12b', ['17', '51', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // https://github.com/ljharb/proposal-is-error
  var $export = $__require('17');
  var cof = $__require('51');

  $export($export.S, 'Error', {
    isError: function isError(it) {
      return cof(it) === 'Error';
    }
  });
});
$__System.registerDynamic('12c', ['17', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // https://rwaldron.github.io/proposal-math-extensions/
  var $export = $__require('17');

  $export($export.S, 'Math', {
    clamp: function clamp(x, lower, upper) {
      return Math.min(upper, Math.max(lower, x));
    }
  });
});
$__System.registerDynamic('12d', ['17', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // https://rwaldron.github.io/proposal-math-extensions/
  var $export = $__require('17');

  $export($export.S, 'Math', { DEG_PER_RAD: Math.PI / 180 });
});
$__System.registerDynamic('12e', ['17', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // https://rwaldron.github.io/proposal-math-extensions/
  var $export = $__require('17');
  var RAD_PER_DEG = 180 / Math.PI;

  $export($export.S, 'Math', {
    degrees: function degrees(radians) {
      return radians * RAD_PER_DEG;
    }
  });
});
$__System.registerDynamic("69", ["d"], true, function ($__require, exports, module) {
  var process = $__require("d");
  var global = this || self,
      GLOBAL = global;
  // 20.2.2.28 Math.sign(x)
  module.exports = Math.sign || function sign(x) {
    // eslint-disable-next-line no-self-compare
    return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
  };
});
$__System.registerDynamic('6f', ['69', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 20.2.2.16 Math.fround(x)
  var sign = $__require('69');
  var pow = Math.pow;
  var EPSILON = pow(2, -52);
  var EPSILON32 = pow(2, -23);
  var MAX32 = pow(2, 127) * (2 - EPSILON32);
  var MIN32 = pow(2, -126);

  var roundTiesToEven = function (n) {
    return n + 1 / EPSILON - 1 / EPSILON;
  };

  module.exports = Math.fround || function fround(x) {
    var $abs = Math.abs(x);
    var $sign = sign(x);
    var a, result;
    if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
    a = (1 + EPSILON32 / EPSILON) * $abs;
    result = a - (a - $abs);
    // eslint-disable-next-line no-self-compare
    if (result > MAX32 || result != result) return $sign * Infinity;
    return $sign * result;
  };
});
$__System.registerDynamic('12f', ['17', '130', '6f', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // https://rwaldron.github.io/proposal-math-extensions/
  var $export = $__require('17');
  var scale = $__require('130');
  var fround = $__require('6f');

  $export($export.S, 'Math', {
    fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {
      return fround(scale(x, inLow, inHigh, outLow, outHigh));
    }
  });
});
$__System.registerDynamic('131', ['17', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // https://gist.github.com/BrendanEich/4294d5c212a6d2254703
  var $export = $__require('17');

  $export($export.S, 'Math', {
    iaddh: function iaddh(x0, x1, y0, y1) {
      var $x0 = x0 >>> 0;
      var $x1 = x1 >>> 0;
      var $y0 = y0 >>> 0;
      return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
    }
  });
});
$__System.registerDynamic('132', ['17', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // https://gist.github.com/BrendanEich/4294d5c212a6d2254703
  var $export = $__require('17');

  $export($export.S, 'Math', {
    isubh: function isubh(x0, x1, y0, y1) {
      var $x0 = x0 >>> 0;
      var $x1 = x1 >>> 0;
      var $y0 = y0 >>> 0;
      return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
    }
  });
});
$__System.registerDynamic('133', ['17', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // https://gist.github.com/BrendanEich/4294d5c212a6d2254703
  var $export = $__require('17');

  $export($export.S, 'Math', {
    imulh: function imulh(u, v) {
      var UINT16 = 0xffff;
      var $u = +u;
      var $v = +v;
      var u0 = $u & UINT16;
      var v0 = $v & UINT16;
      var u1 = $u >> 16;
      var v1 = $v >> 16;
      var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
      return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
    }
  });
});
$__System.registerDynamic('134', ['17', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // https://rwaldron.github.io/proposal-math-extensions/
  var $export = $__require('17');

  $export($export.S, 'Math', { RAD_PER_DEG: 180 / Math.PI });
});
$__System.registerDynamic('135', ['17', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // https://rwaldron.github.io/proposal-math-extensions/
  var $export = $__require('17');
  var DEG_PER_RAD = Math.PI / 180;

  $export($export.S, 'Math', {
    radians: function radians(degrees) {
      return degrees * DEG_PER_RAD;
    }
  });
});
$__System.registerDynamic("130", ["d"], true, function ($__require, exports, module) {
  var process = $__require("d");
  var global = this || self,
      GLOBAL = global;
  // https://rwaldron.github.io/proposal-math-extensions/
  module.exports = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {
    if (arguments.length === 0
    // eslint-disable-next-line no-self-compare
    || x != x
    // eslint-disable-next-line no-self-compare
    || inLow != inLow
    // eslint-disable-next-line no-self-compare
    || inHigh != inHigh
    // eslint-disable-next-line no-self-compare
    || outLow != outLow
    // eslint-disable-next-line no-self-compare
    || outHigh != outHigh) return NaN;
    if (x === Infinity || x === -Infinity) return x;
    return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
  };
});
$__System.registerDynamic('136', ['17', '130', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // https://rwaldron.github.io/proposal-math-extensions/
  var $export = $__require('17');

  $export($export.S, 'Math', { scale: $__require('130') });
});
$__System.registerDynamic('137', ['17', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // https://gist.github.com/BrendanEich/4294d5c212a6d2254703
  var $export = $__require('17');

  $export($export.S, 'Math', {
    umulh: function umulh(u, v) {
      var UINT16 = 0xffff;
      var $u = +u;
      var $v = +v;
      var u0 = $u & UINT16;
      var v0 = $v & UINT16;
      var u1 = $u >>> 16;
      var v1 = $v >>> 16;
      var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
      return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
    }
  });
});
$__System.registerDynamic('138', ['17', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // http://jfbastien.github.io/papers/Math.signbit.html
  var $export = $__require('17');

  $export($export.S, 'Math', { signbit: function signbit(x) {
      // eslint-disable-next-line no-self-compare
      return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;
    } });
});
$__System.registerDynamic('d1', ['22', 'ae', '1e', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 7.3.20 SpeciesConstructor(O, defaultConstructor)
  var anObject = $__require('22');
  var aFunction = $__require('ae');
  var SPECIES = $__require('1e')('species');
  module.exports = function (O, D) {
    var C = anObject(O).constructor;
    var S;
    return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
  };
});
$__System.registerDynamic('da', ['22', '23', 'd7', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var anObject = $__require('22');
  var isObject = $__require('23');
  var newPromiseCapability = $__require('d7');

  module.exports = function (C, x) {
    anObject(C);
    if (isObject(x) && x.constructor === C) return x;
    var promiseCapability = newPromiseCapability.f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
  };
});
$__System.registerDynamic('139', ['17', '3e', '14', 'd1', 'da', 'd'], true, function ($__require, exports, module) {
  // https://github.com/tc39/proposal-promise-finally
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var core = $__require('3e');
  var global = $__require('14');
  var speciesConstructor = $__require('d1');
  var promiseResolve = $__require('da');

  $export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
      var C = speciesConstructor(this, core.Promise || global.Promise);
      var isFunction = typeof onFinally == 'function';
      return this.then(isFunction ? function (x) {
        return promiseResolve(C, onFinally()).then(function () {
          return x;
        });
      } : onFinally, isFunction ? function (e) {
        return promiseResolve(C, onFinally()).then(function () {
          throw e;
        });
      } : onFinally);
    } });
});
$__System.registerDynamic('d7', ['ae', 'd'], true, function ($__require, exports, module) {
  'use strict';
  // 25.4.1.5 NewPromiseCapability(C)

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var aFunction = $__require('ae');

  function PromiseCapability(C) {
    var resolve, reject;
    this.promise = new C(function ($$resolve, $$reject) {
      if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
      resolve = $$resolve;
      reject = $$reject;
    });
    this.resolve = aFunction(resolve);
    this.reject = aFunction(reject);
  }

  module.exports.f = function (C) {
    return new PromiseCapability(C);
  };
});
$__System.registerDynamic("d8", ["d"], true, function ($__require, exports, module) {
  var process = $__require("d");
  var global = this || self,
      GLOBAL = global;
  module.exports = function (exec) {
    try {
      return { e: false, v: exec() };
    } catch (e) {
      return { e: true, v: e };
    }
  };
});
$__System.registerDynamic('13a', ['17', 'd7', 'd8', 'd'], true, function ($__require, exports, module) {
  'use strict';
  // https://github.com/tc39/proposal-promise-try

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var newPromiseCapability = $__require('d7');
  var perform = $__require('d8');

  $export($export.S, 'Promise', { 'try': function (callbackfn) {
      var promiseCapability = newPromiseCapability.f(this);
      var result = perform(callbackfn);
      (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
      return promiseCapability.promise;
    } });
});
$__System.registerDynamic('13b', ['13c', '22', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var metadata = $__require('13c');
  var anObject = $__require('22');
  var toMetaKey = metadata.key;
  var ordinaryDefineOwnMetadata = metadata.set;

  metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
      ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
    } });
});
$__System.registerDynamic('13d', ['13c', '22', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var metadata = $__require('13c');
  var anObject = $__require('22');
  var toMetaKey = metadata.key;
  var getOrCreateMetadataMap = metadata.map;
  var store = metadata.store;

  metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
      var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
      var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
      if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
      if (metadataMap.size) return true;
      var targetMetadata = store.get(target);
      targetMetadata['delete'](targetKey);
      return !!targetMetadata.size || store['delete'](target);
    } });
});
$__System.registerDynamic('13e', ['13c', '22', '36', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var metadata = $__require('13c');
  var anObject = $__require('22');
  var getPrototypeOf = $__require('36');
  var ordinaryHasOwnMetadata = metadata.has;
  var ordinaryGetOwnMetadata = metadata.get;
  var toMetaKey = metadata.key;

  var ordinaryGetMetadata = function (MetadataKey, O, P) {
    var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
    if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
    var parent = getPrototypeOf(O);
    return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
  };

  metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
      return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
    } });
});
$__System.registerDynamic('13f', ['140', 'de', 'df', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var strong = $__require('140');
  var validate = $__require('de');
  var SET = 'Set';

  // 23.2 Set Objects
  module.exports = $__require('df')(SET, function (get) {
    return function Set() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  }, {
    // 23.2.3.1 Set.prototype.add(value)
    add: function add(value) {
      return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
    }
  }, strong);
});
$__System.registerDynamic('11d', ['d4', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var forOf = $__require('d4');

  module.exports = function (iter, ITERATOR) {
    var result = [];
    forOf(iter, false, result.push, result, ITERATOR);
    return result;
  };
});
$__System.registerDynamic('141', ['13f', '11d', '13c', '22', '36', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var Set = $__require('13f');
  var from = $__require('11d');
  var metadata = $__require('13c');
  var anObject = $__require('22');
  var getPrototypeOf = $__require('36');
  var ordinaryOwnMetadataKeys = metadata.keys;
  var toMetaKey = metadata.key;

  var ordinaryMetadataKeys = function (O, P) {
    var oKeys = ordinaryOwnMetadataKeys(O, P);
    var parent = getPrototypeOf(O);
    if (parent === null) return oKeys;
    var pKeys = ordinaryMetadataKeys(parent, P);
    return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
  };

  metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
      return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
    } });
});
$__System.registerDynamic('142', ['13c', '22', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var metadata = $__require('13c');
  var anObject = $__require('22');
  var ordinaryGetOwnMetadata = metadata.get;
  var toMetaKey = metadata.key;

  metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
      return ordinaryGetOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
    } });
});
$__System.registerDynamic('143', ['13c', '22', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var metadata = $__require('13c');
  var anObject = $__require('22');
  var ordinaryOwnMetadataKeys = metadata.keys;
  var toMetaKey = metadata.key;

  metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
      return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
    } });
});
$__System.registerDynamic('144', ['13c', '22', '36', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var metadata = $__require('13c');
  var anObject = $__require('22');
  var getPrototypeOf = $__require('36');
  var ordinaryHasOwnMetadata = metadata.has;
  var toMetaKey = metadata.key;

  var ordinaryHasMetadata = function (MetadataKey, O, P) {
    var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
    if (hasOwn) return true;
    var parent = getPrototypeOf(O);
    return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
  };

  metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
      return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
    } });
});
$__System.registerDynamic('145', ['13c', '22', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var metadata = $__require('13c');
  var anObject = $__require('22');
  var ordinaryHasOwnMetadata = metadata.has;
  var toMetaKey = metadata.key;

  metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
      return ordinaryHasOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
    } });
});
$__System.registerDynamic('140', ['2a', '27', 'db', 'a1', 'd3', 'd4', '80', '146', 'c3', '16', '19', 'de', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var dP = $__require('2a').f;
  var create = $__require('27');
  var redefineAll = $__require('db');
  var ctx = $__require('a1');
  var anInstance = $__require('d3');
  var forOf = $__require('d4');
  var $iterDefine = $__require('80');
  var step = $__require('146');
  var setSpecies = $__require('c3');
  var DESCRIPTORS = $__require('16');
  var fastKey = $__require('19').fastKey;
  var validate = $__require('de');
  var SIZE = DESCRIPTORS ? '_s' : 'size';

  var getEntry = function (that, key) {
    // fast case
    var index = fastKey(key);
    var entry;
    if (index !== 'F') return that._i[index];
    // frozen object case
    for (entry = that._f; entry; entry = entry.n) {
      if (entry.k == key) return entry;
    }
  };

  module.exports = {
    getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
      var C = wrapper(function (that, iterable) {
        anInstance(that, C, NAME, '_i');
        that._t = NAME; // collection type
        that._i = create(null); // index
        that._f = undefined; // first entry
        that._l = undefined; // last entry
        that[SIZE] = 0; // size
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
      });
      redefineAll(C.prototype, {
        // 23.1.3.1 Map.prototype.clear()
        // 23.2.3.2 Set.prototype.clear()
        clear: function clear() {
          for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
            entry.r = true;
            if (entry.p) entry.p = entry.p.n = undefined;
            delete data[entry.i];
          }
          that._f = that._l = undefined;
          that[SIZE] = 0;
        },
        // 23.1.3.3 Map.prototype.delete(key)
        // 23.2.3.4 Set.prototype.delete(value)
        'delete': function (key) {
          var that = validate(this, NAME);
          var entry = getEntry(that, key);
          if (entry) {
            var next = entry.n;
            var prev = entry.p;
            delete that._i[entry.i];
            entry.r = true;
            if (prev) prev.n = next;
            if (next) next.p = prev;
            if (that._f == entry) that._f = next;
            if (that._l == entry) that._l = prev;
            that[SIZE]--;
          }return !!entry;
        },
        // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
        // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
        forEach: function forEach(callbackfn /* , that = undefined */) {
          validate(this, NAME);
          var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
          var entry;
          while (entry = entry ? entry.n : this._f) {
            f(entry.v, entry.k, this);
            // revert to the last existing entry
            while (entry && entry.r) entry = entry.p;
          }
        },
        // 23.1.3.7 Map.prototype.has(key)
        // 23.2.3.7 Set.prototype.has(value)
        has: function has(key) {
          return !!getEntry(validate(this, NAME), key);
        }
      });
      if (DESCRIPTORS) dP(C.prototype, 'size', {
        get: function () {
          return validate(this, NAME)[SIZE];
        }
      });
      return C;
    },
    def: function (that, key, value) {
      var entry = getEntry(that, key);
      var prev, index;
      // change existing entry
      if (entry) {
        entry.v = value;
        // create new entry
      } else {
        that._l = entry = {
          i: index = fastKey(key, true), // <- index
          k: key, // <- key
          v: value, // <- value
          p: prev = that._l, // <- previous entry
          n: undefined, // <- next entry
          r: false // <- removed
        };
        if (!that._f) that._f = entry;
        if (prev) prev.n = entry;
        that[SIZE]++;
        // add to index
        if (index !== 'F') that._i[index] = entry;
      }return that;
    },
    getEntry: getEntry,
    setStrong: function (C, NAME, IS_MAP) {
      // add .keys, .values, .entries, [@@iterator]
      // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
      $iterDefine(C, NAME, function (iterated, kind) {
        this._t = validate(iterated, NAME); // target
        this._k = kind; // kind
        this._l = undefined; // previous
      }, function () {
        var that = this;
        var kind = that._k;
        var entry = that._l;
        // revert to the last existing entry
        while (entry && entry.r) entry = entry.p;
        // get next entry
        if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
          // or finish the iteration
          that._t = undefined;
          return step(1);
        }
        // return step by kind
        if (kind == 'keys') return step(0, entry.k);
        if (kind == 'values') return step(0, entry.v);
        return step(0, [entry.k, entry.v]);
      }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

      // add [@@species], 23.1.2.2, 23.2.2.2
      setSpecies(NAME);
    }
  };
});
$__System.registerDynamic('147', ['140', 'de', 'df', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var strong = $__require('140');
  var validate = $__require('de');
  var MAP = 'Map';

  // 23.1 Map Objects
  module.exports = $__require('df')(MAP, function (get) {
    return function Map() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  }, {
    // 23.1.3.6 Map.prototype.get(key)
    get: function get(key) {
      var entry = strong.getEntry(validate(this, MAP), key);
      return entry && entry.v;
    },
    // 23.1.3.9 Map.prototype.set(key, value)
    set: function set(key, value) {
      return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
    }
  }, strong, true);
});
$__System.registerDynamic("11", ["d"], true, function ($__require, exports, module) {
  var process = $__require("d");
  var global = this || self,
      GLOBAL = global;
  exports.f = Object.getOwnPropertySymbols;
});
$__System.registerDynamic('41', ['10', '11', '12', '35', 'a9', '1a', 'd'], true, function ($__require, exports, module) {
  'use strict';
  // 19.1.2.1 Object.assign(target, source, ...)

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var getKeys = $__require('10');
  var gOPS = $__require('11');
  var pIE = $__require('12');
  var toObject = $__require('35');
  var IObject = $__require('a9');
  var $assign = Object.assign;

  // should work with symbols and should have deterministic property order (V8 bug)
  module.exports = !$assign || $__require('1a')(function () {
    var A = {};
    var B = {};
    // eslint-disable-next-line no-undef
    var S = Symbol();
    var K = 'abcdefghijklmnopqrst';
    A[S] = 7;
    K.split('').forEach(function (k) {
      B[k] = k;
    });
    return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
  }) ? function assign(target, source) {
    // eslint-disable-line no-unused-vars
    var T = toObject(target);
    var aLen = arguments.length;
    var index = 1;
    var getSymbols = gOPS.f;
    var isEnum = pIE.f;
    while (aLen > index) {
      var S = IObject(arguments[index++]);
      var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
      var length = keys.length;
      var j = 0;
      var key;
      while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
    }return T;
  } : $assign;
});
$__System.registerDynamic('21', ['51', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 7.2.2 IsArray(argument)
  var cof = $__require('51');
  module.exports = Array.isArray || function isArray(arg) {
    return cof(arg) == 'Array';
  };
});
$__System.registerDynamic('148', ['23', '21', '1e', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var isObject = $__require('23');
  var isArray = $__require('21');
  var SPECIES = $__require('1e')('species');

  module.exports = function (original) {
    var C;
    if (isArray(original)) {
      C = original.constructor;
      // cross-realm fallback
      if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
      if (isObject(C)) {
        C = C[SPECIES];
        if (C === null) C = undefined;
      }
    }return C === undefined ? Array : C;
  };
});
$__System.registerDynamic('105', ['148', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 9.4.2.3 ArraySpeciesCreate(originalArray, length)
  var speciesConstructor = $__require('148');

  module.exports = function (original, length) {
    return new (speciesConstructor(original))(length);
  };
});
$__System.registerDynamic('b0', ['a1', 'a9', '35', '7c', '105', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 0 -> Array#forEach
  // 1 -> Array#map
  // 2 -> Array#filter
  // 3 -> Array#some
  // 4 -> Array#every
  // 5 -> Array#find
  // 6 -> Array#findIndex
  var ctx = $__require('a1');
  var IObject = $__require('a9');
  var toObject = $__require('35');
  var toLength = $__require('7c');
  var asc = $__require('105');
  module.exports = function (TYPE, $create) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    var create = $create || asc;
    return function ($this, callbackfn, that) {
      var O = toObject($this);
      var self = IObject(O);
      var f = ctx(callbackfn, that, 3);
      var length = toLength(self.length);
      var index = 0;
      var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
      var val, res;
      for (; length > index; index++) if (NO_HOLES || index in self) {
        val = self[index];
        res = f(val, index, O);
        if (TYPE) {
          if (IS_MAP) result[index] = res; // map
          else if (res) switch (TYPE) {
              case 3:
                return true; // some
              case 5:
                return val; // find
              case 6:
                return index; // findIndex
              case 2:
                result.push(val); // filter
            } else if (IS_EVERY) return false; // every
        }
      }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
    };
  };
});
$__System.registerDynamic('dd', ['db', '19', '22', '23', 'd3', 'd4', 'b0', '15', 'de', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var redefineAll = $__require('db');
  var getWeak = $__require('19').getWeak;
  var anObject = $__require('22');
  var isObject = $__require('23');
  var anInstance = $__require('d3');
  var forOf = $__require('d4');
  var createArrayMethod = $__require('b0');
  var $has = $__require('15');
  var validate = $__require('de');
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var id = 0;

  // fallback for uncaught frozen keys
  var uncaughtFrozenStore = function (that) {
    return that._l || (that._l = new UncaughtFrozenStore());
  };
  var UncaughtFrozenStore = function () {
    this.a = [];
  };
  var findUncaughtFrozen = function (store, key) {
    return arrayFind(store.a, function (it) {
      return it[0] === key;
    });
  };
  UncaughtFrozenStore.prototype = {
    get: function (key) {
      var entry = findUncaughtFrozen(this, key);
      if (entry) return entry[1];
    },
    has: function (key) {
      return !!findUncaughtFrozen(this, key);
    },
    set: function (key, value) {
      var entry = findUncaughtFrozen(this, key);
      if (entry) entry[1] = value;else this.a.push([key, value]);
    },
    'delete': function (key) {
      var index = arrayFindIndex(this.a, function (it) {
        return it[0] === key;
      });
      if (~index) this.a.splice(index, 1);
      return !!~index;
    }
  };

  module.exports = {
    getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
      var C = wrapper(function (that, iterable) {
        anInstance(that, C, NAME, '_i');
        that._t = NAME; // collection type
        that._i = id++; // collection id
        that._l = undefined; // leak store for uncaught frozen objects
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
      });
      redefineAll(C.prototype, {
        // 23.3.3.2 WeakMap.prototype.delete(key)
        // 23.4.3.3 WeakSet.prototype.delete(value)
        'delete': function (key) {
          if (!isObject(key)) return false;
          var data = getWeak(key);
          if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
          return data && $has(data, this._i) && delete data[this._i];
        },
        // 23.3.3.4 WeakMap.prototype.has(key)
        // 23.4.3.4 WeakSet.prototype.has(value)
        has: function has(key) {
          if (!isObject(key)) return false;
          var data = getWeak(key);
          if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
          return data && $has(data, this._i);
        }
      });
      return C;
    },
    def: function (that, key, value) {
      var data = getWeak(anObject(key), true);
      if (data === true) uncaughtFrozenStore(that).set(key, value);else data[that._i] = value;
      return that;
    },
    ufstore: uncaughtFrozenStore
  };
});
$__System.registerDynamic('de', ['23', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var isObject = $__require('23');
  module.exports = function (it, TYPE) {
    if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
    return it;
  };
});
$__System.registerDynamic('19', ['1d', '23', '15', '2a', '1a', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var META = $__require('1d')('meta');
  var isObject = $__require('23');
  var has = $__require('15');
  var setDesc = $__require('2a').f;
  var id = 0;
  var isExtensible = Object.isExtensible || function () {
    return true;
  };
  var FREEZE = !$__require('1a')(function () {
    return isExtensible(Object.preventExtensions({}));
  });
  var setMeta = function (it) {
    setDesc(it, META, { value: {
        i: 'O' + ++id, // object ID
        w: {} // weak collections IDs
      } });
  };
  var fastKey = function (it, create) {
    // return primitive with prefix
    if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!has(it, META)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return 'F';
      // not necessary to add metadata
      if (!create) return 'E';
      // add missing metadata
      setMeta(it);
      // return object ID
    }return it[META].i;
  };
  var getWeak = function (it, create) {
    if (!has(it, META)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return true;
      // not necessary to add metadata
      if (!create) return false;
      // add missing metadata
      setMeta(it);
      // return hash weak collections IDs
    }return it[META].w;
  };
  // add metadata on freeze-family methods calling
  var onFreeze = function (it) {
    if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
    return it;
  };
  var meta = module.exports = {
    KEY: META,
    NEED: false,
    fastKey: fastKey,
    getWeak: getWeak,
    onFreeze: onFreeze
  };
});
$__System.registerDynamic('a6', ['1e', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var ITERATOR = $__require('1e')('iterator');
  var SAFE_CLOSING = false;

  try {
    var riter = [7][ITERATOR]();
    riter['return'] = function () {
      SAFE_CLOSING = true;
    };
    // eslint-disable-next-line no-throw-literal
    Array.from(riter, function () {
      throw 2;
    });
  } catch (e) {/* empty */}

  module.exports = function (exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING) return false;
    var safe = false;
    try {
      var arr = [7];
      var iter = arr[ITERATOR]();
      iter.next = function () {
        return { done: safe = true };
      };
      arr[ITERATOR] = function () {
        return iter;
      };
      exec(arr);
    } catch (e) {/* empty */}
    return safe;
  };
});
$__System.registerDynamic("12", ["d"], true, function ($__require, exports, module) {
  var process = $__require("d");
  var global = this || self,
      GLOBAL = global;
  exports.f = {}.propertyIsEnumerable;
});
$__System.registerDynamic('29', ['12', '26', '24', '25', '15', '149', '16', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var pIE = $__require('12');
  var createDesc = $__require('26');
  var toIObject = $__require('24');
  var toPrimitive = $__require('25');
  var has = $__require('15');
  var IE8_DOM_DEFINE = $__require('149');
  var gOPD = Object.getOwnPropertyDescriptor;

  exports.f = $__require('16') ? gOPD : function getOwnPropertyDescriptor(O, P) {
    O = toIObject(O);
    P = toPrimitive(P, true);
    if (IE8_DOM_DEFINE) try {
      return gOPD(O, P);
    } catch (e) {/* empty */}
    if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
  };
});
$__System.registerDynamic('45', ['23', '22', 'a1', '29', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // Works with __proto__ only. Old v8 can't work with null proto objects.
  /* eslint-disable no-proto */
  var isObject = $__require('23');
  var anObject = $__require('22');
  var check = function (O, proto) {
    anObject(O);
    if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
  };
  module.exports = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = $__require('a1')(Function.call, $__require('29').f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) {
        buggy = true;
      }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
    check: check
  };
});
$__System.registerDynamic('52', ['23', '45', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var isObject = $__require('23');
  var setPrototypeOf = $__require('45').set;
  module.exports = function (that, target, C) {
    var S = target.constructor;
    var P;
    if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
      setPrototypeOf(that, P);
    }return that;
  };
});
$__System.registerDynamic('df', ['14', '17', '18', 'db', '19', 'd4', 'd3', '23', '1a', 'a6', '1c', '52', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var global = $__require('14');
  var $export = $__require('17');
  var redefine = $__require('18');
  var redefineAll = $__require('db');
  var meta = $__require('19');
  var forOf = $__require('d4');
  var anInstance = $__require('d3');
  var isObject = $__require('23');
  var fails = $__require('1a');
  var $iterDetect = $__require('a6');
  var setToStringTag = $__require('1c');
  var inheritIfRequired = $__require('52');

  module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
    var Base = global[NAME];
    var C = Base;
    var ADDER = IS_MAP ? 'set' : 'add';
    var proto = C && C.prototype;
    var O = {};
    var fixMethod = function (KEY) {
      var fn = proto[KEY];
      redefine(proto, KEY, KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) {
        fn.call(this, a === 0 ? 0 : a);return this;
      } : function set(a, b) {
        fn.call(this, a === 0 ? 0 : a, b);return this;
      });
    };
    if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
      new C().entries().next();
    }))) {
      // create collection constructor
      C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
      redefineAll(C.prototype, methods);
      meta.NEED = true;
    } else {
      var instance = new C();
      // early implementations not supports chaining
      var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
      var THROWS_ON_PRIMITIVES = fails(function () {
        instance.has(1);
      });
      // most early implementations doesn't supports iterables, most modern - not close it correctly
      var ACCEPT_ITERABLES = $iterDetect(function (iter) {
        new C(iter);
      }); // eslint-disable-line no-new
      // for early implementations -0 and +0 not the same
      var BUGGY_ZERO = !IS_WEAK && fails(function () {
        // V8 ~ Chromium 42- fails only with 5+ elements
        var $instance = new C();
        var index = 5;
        while (index--) $instance[ADDER](index, index);
        return !$instance.has(-0);
      });
      if (!ACCEPT_ITERABLES) {
        C = wrapper(function (target, iterable) {
          anInstance(target, C, NAME);
          var that = inheritIfRequired(new Base(), target, C);
          if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
          return that;
        });
        C.prototype = proto;
        proto.constructor = C;
      }
      if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
        fixMethod('delete');
        fixMethod('has');
        IS_MAP && fixMethod('get');
      }
      if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
      // weak collections should not contains .clear method
      if (IS_WEAK && proto.clear) delete proto.clear;
    }

    setToStringTag(C, NAME);

    O[NAME] = C;
    $export($export.G + $export.W + $export.F * (C != Base), O);

    if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

    return C;
  };
});
$__System.registerDynamic('14a', ['14', 'b0', '18', '19', '41', 'dd', '23', 'de', 'df', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var global = $__require('14');
  var each = $__require('b0')(0);
  var redefine = $__require('18');
  var meta = $__require('19');
  var assign = $__require('41');
  var weak = $__require('dd');
  var isObject = $__require('23');
  var validate = $__require('de');
  var NATIVE_WEAK_MAP = $__require('de');
  var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
  var WEAK_MAP = 'WeakMap';
  var getWeak = meta.getWeak;
  var isExtensible = Object.isExtensible;
  var uncaughtFrozenStore = weak.ufstore;
  var InternalMap;

  var wrapper = function (get) {
    return function WeakMap() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  };

  var methods = {
    // 23.3.3.3 WeakMap.prototype.get(key)
    get: function get(key) {
      if (isObject(key)) {
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
        return data ? data[this._i] : undefined;
      }
    },
    // 23.3.3.5 WeakMap.prototype.set(key, value)
    set: function set(key, value) {
      return weak.def(validate(this, WEAK_MAP), key, value);
    }
  };

  // 23.3 WeakMap Objects
  var $WeakMap = module.exports = $__require('df')(WEAK_MAP, wrapper, methods, weak, true, true);

  // IE11 WeakMap frozen keys fix
  if (NATIVE_WEAK_MAP && IS_IE11) {
    InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
    assign(InternalMap.prototype, methods);
    meta.NEED = true;
    each(['delete', 'has', 'get', 'set'], function (key) {
      var proto = $WeakMap.prototype;
      var method = proto[key];
      redefine(proto, key, function (a, b) {
        // store frozen objects on internal weakmap shim
        if (isObject(a) && !isExtensible(a)) {
          if (!this._f) this._f = new InternalMap();
          var result = this._f[key](a, b);
          return key == 'set' ? this : result;
          // store all the rest on native weakmap
        }return method.call(this, a, b);
      });
    });
  }
});
$__System.registerDynamic('13c', ['147', '17', '1b', '14a', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var Map = $__require('147');
  var $export = $__require('17');
  var shared = $__require('1b')('metadata');
  var store = shared.store || (shared.store = new ($__require('14a'))());

  var getOrCreateMetadataMap = function (target, targetKey, create) {
    var targetMetadata = store.get(target);
    if (!targetMetadata) {
      if (!create) return undefined;
      store.set(target, targetMetadata = new Map());
    }
    var keyMetadata = targetMetadata.get(targetKey);
    if (!keyMetadata) {
      if (!create) return undefined;
      targetMetadata.set(targetKey, keyMetadata = new Map());
    }return keyMetadata;
  };
  var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
    var metadataMap = getOrCreateMetadataMap(O, P, false);
    return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
  };
  var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
    var metadataMap = getOrCreateMetadataMap(O, P, false);
    return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
  };
  var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
    getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
  };
  var ordinaryOwnMetadataKeys = function (target, targetKey) {
    var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
    var keys = [];
    if (metadataMap) metadataMap.forEach(function (_, key) {
      keys.push(key);
    });
    return keys;
  };
  var toMetaKey = function (it) {
    return it === undefined || typeof it == 'symbol' ? it : String(it);
  };
  var exp = function (O) {
    $export($export.S, 'Reflect', O);
  };

  module.exports = {
    store: store,
    map: getOrCreateMetadataMap,
    has: ordinaryHasOwnMetadata,
    get: ordinaryGetOwnMetadata,
    set: ordinaryDefineOwnMetadata,
    keys: ordinaryOwnMetadataKeys,
    key: toMetaKey,
    exp: exp
  };
});
$__System.registerDynamic('14b', ['13c', '22', 'ae', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $metadata = $__require('13c');
  var anObject = $__require('22');
  var aFunction = $__require('ae');
  var toMetaKey = $metadata.key;
  var ordinaryDefineOwnMetadata = $metadata.set;

  $metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
      return function decorator(target, targetKey) {
        ordinaryDefineOwnMetadata(metadataKey, metadataValue, (targetKey !== undefined ? anObject : aFunction)(target), toMetaKey(targetKey));
      };
    } });
});
$__System.registerDynamic('14c', ['17', 'd6', '14', '51', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
  var $export = $__require('17');
  var microtask = $__require('d6')();
  var process = $__require('14').process;
  var isNode = $__require('51')(process) == 'process';

  $export($export.G, {
    asap: function asap(fn) {
      var domain = isNode && process.domain;
      microtask(domain ? domain.bind(fn) : fn);
    }
  });
});
$__System.registerDynamic('d6', ['14', 'd5', '51', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var global = $__require('14');
  var macrotask = $__require('d5').set;
  var Observer = global.MutationObserver || global.WebKitMutationObserver;
  var process = global.process;
  var Promise = global.Promise;
  var isNode = $__require('51')(process) == 'process';

  module.exports = function () {
    var head, last, notify;

    var flush = function () {
      var parent, fn;
      if (isNode && (parent = process.domain)) parent.exit();
      while (head) {
        fn = head.fn;
        head = head.next;
        try {
          fn();
        } catch (e) {
          if (head) notify();else last = undefined;
          throw e;
        }
      }last = undefined;
      if (parent) parent.enter();
    };

    // Node.js
    if (isNode) {
      notify = function () {
        process.nextTick(flush);
      };
      // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
    } else if (Observer && !(global.navigator && global.navigator.standalone)) {
      var toggle = true;
      var node = document.createTextNode('');
      new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
      notify = function () {
        node.data = toggle = !toggle;
      };
      // environments with maybe non-completely correct, but existent Promise
    } else if (Promise && Promise.resolve) {
      // Promise.resolve without an argument throws an error in LG WebOS 2
      var promise = Promise.resolve(undefined);
      notify = function () {
        promise.then(flush);
      };
      // for other environments - macrotask based on:
      // - setImmediate
      // - MessageChannel
      // - window.postMessag
      // - onreadystatechange
      // - setTimeout
    } else {
      notify = function () {
        // strange IE + webpack dev server bug - use .call(global)
        macrotask.call(global, flush);
      };
    }

    return function (fn) {
      var task = { fn: fn, next: undefined };
      if (last) last.next = task;
      if (!head) {
        head = task;
        notify();
      }last = task;
    };
  };
});
$__System.registerDynamic('d3', ['d'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  module.exports = function (it, Constructor, name, forbiddenField) {
    if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
      throw TypeError(name + ': incorrect invocation!');
    }return it;
  };
});
$__System.registerDynamic('db', ['18', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var redefine = $__require('18');
  module.exports = function (target, src, safe) {
    for (var key in src) redefine(target, key, src[key], safe);
    return target;
  };
});
$__System.registerDynamic('a2', ['22', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // call something on iterator step with safe closing on error
  var anObject = $__require('22');
  module.exports = function (iterator, fn, value, entries) {
    try {
      return entries ? fn(anObject(value)[0], value[1]) : fn(value);
      // 7.4.6 IteratorClose(iterator, completion)
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined) anObject(ret.call(iterator));
      throw e;
    }
  };
});
$__System.registerDynamic('a3', ['ef', '1e', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // check on default Array iterator
  var Iterators = $__require('ef');
  var ITERATOR = $__require('1e')('iterator');
  var ArrayProto = Array.prototype;

  module.exports = function (it) {
    return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
  };
});
$__System.registerDynamic('47', ['51', '1e', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // getting tag from 19.1.3.6 Object.prototype.toString()
  var cof = $__require('51');
  var TAG = $__require('1e')('toStringTag');
  // ES3 wrong here
  var ARG = cof(function () {
    return arguments;
  }()) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (e) {/* empty */}
  };

  module.exports = function (it) {
    var O, T, B;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };
});
$__System.registerDynamic('a5', ['47', '1e', 'ef', '3e', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var classof = $__require('47');
  var ITERATOR = $__require('1e')('iterator');
  var Iterators = $__require('ef');
  module.exports = $__require('3e').getIteratorMethod = function (it) {
    if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
  };
});
$__System.registerDynamic('d4', ['a1', 'a2', 'a3', '22', '7c', 'a5', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var ctx = $__require('a1');
  var call = $__require('a2');
  var isArrayIter = $__require('a3');
  var anObject = $__require('22');
  var toLength = $__require('7c');
  var getIterFn = $__require('a5');
  var BREAK = {};
  var RETURN = {};
  var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
    var iterFn = ITERATOR ? function () {
      return iterable;
    } : getIterFn(iterable);
    var f = ctx(fn, that, entries ? 2 : 1);
    var index = 0;
    var length, step, iterator, result;
    if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
    // fast case for arrays with default iterator
    if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
      result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
      if (result === BREAK || result === RETURN) return result;
    } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
      result = call(iterator, f, step.value, entries);
      if (result === BREAK || result === RETURN) return result;
    }
  };
  exports.BREAK = BREAK;
  exports.RETURN = RETURN;
});
$__System.registerDynamic('c3', ['14', '2a', '16', '1e', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var global = $__require('14');
  var dP = $__require('2a');
  var DESCRIPTORS = $__require('16');
  var SPECIES = $__require('1e')('species');

  module.exports = function (KEY) {
    var C = global[KEY];
    if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
      configurable: true,
      get: function () {
        return this;
      }
    });
  };
});
$__System.registerDynamic('14d', ['17', '14', '3e', 'd6', '1e', 'ae', '22', 'd3', 'db', '2d', 'd4', 'c3', 'd'], true, function ($__require, exports, module) {
  'use strict';
  // https://github.com/zenparsing/es-observable

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var global = $__require('14');
  var core = $__require('3e');
  var microtask = $__require('d6')();
  var OBSERVABLE = $__require('1e')('observable');
  var aFunction = $__require('ae');
  var anObject = $__require('22');
  var anInstance = $__require('d3');
  var redefineAll = $__require('db');
  var hide = $__require('2d');
  var forOf = $__require('d4');
  var RETURN = forOf.RETURN;

  var getMethod = function (fn) {
    return fn == null ? undefined : aFunction(fn);
  };

  var cleanupSubscription = function (subscription) {
    var cleanup = subscription._c;
    if (cleanup) {
      subscription._c = undefined;
      cleanup();
    }
  };

  var subscriptionClosed = function (subscription) {
    return subscription._o === undefined;
  };

  var closeSubscription = function (subscription) {
    if (!subscriptionClosed(subscription)) {
      subscription._o = undefined;
      cleanupSubscription(subscription);
    }
  };

  var Subscription = function (observer, subscriber) {
    anObject(observer);
    this._c = undefined;
    this._o = observer;
    observer = new SubscriptionObserver(this);
    try {
      var cleanup = subscriber(observer);
      var subscription = cleanup;
      if (cleanup != null) {
        if (typeof cleanup.unsubscribe === 'function') cleanup = function () {
          subscription.unsubscribe();
        };else aFunction(cleanup);
        this._c = cleanup;
      }
    } catch (e) {
      observer.error(e);
      return;
    }if (subscriptionClosed(this)) cleanupSubscription(this);
  };

  Subscription.prototype = redefineAll({}, {
    unsubscribe: function unsubscribe() {
      closeSubscription(this);
    }
  });

  var SubscriptionObserver = function (subscription) {
    this._s = subscription;
  };

  SubscriptionObserver.prototype = redefineAll({}, {
    next: function next(value) {
      var subscription = this._s;
      if (!subscriptionClosed(subscription)) {
        var observer = subscription._o;
        try {
          var m = getMethod(observer.next);
          if (m) return m.call(observer, value);
        } catch (e) {
          try {
            closeSubscription(subscription);
          } finally {
            throw e;
          }
        }
      }
    },
    error: function error(value) {
      var subscription = this._s;
      if (subscriptionClosed(subscription)) throw value;
      var observer = subscription._o;
      subscription._o = undefined;
      try {
        var m = getMethod(observer.error);
        if (!m) throw value;
        value = m.call(observer, value);
      } catch (e) {
        try {
          cleanupSubscription(subscription);
        } finally {
          throw e;
        }
      }cleanupSubscription(subscription);
      return value;
    },
    complete: function complete(value) {
      var subscription = this._s;
      if (!subscriptionClosed(subscription)) {
        var observer = subscription._o;
        subscription._o = undefined;
        try {
          var m = getMethod(observer.complete);
          value = m ? m.call(observer, value) : undefined;
        } catch (e) {
          try {
            cleanupSubscription(subscription);
          } finally {
            throw e;
          }
        }cleanupSubscription(subscription);
        return value;
      }
    }
  });

  var $Observable = function Observable(subscriber) {
    anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
  };

  redefineAll($Observable.prototype, {
    subscribe: function subscribe(observer) {
      return new Subscription(observer, this._f);
    },
    forEach: function forEach(fn) {
      var that = this;
      return new (core.Promise || global.Promise)(function (resolve, reject) {
        aFunction(fn);
        var subscription = that.subscribe({
          next: function (value) {
            try {
              return fn(value);
            } catch (e) {
              reject(e);
              subscription.unsubscribe();
            }
          },
          error: reject,
          complete: resolve
        });
      });
    }
  });

  redefineAll($Observable, {
    from: function from(x) {
      var C = typeof this === 'function' ? this : $Observable;
      var method = getMethod(anObject(x)[OBSERVABLE]);
      if (method) {
        var observable = anObject(method.call(x));
        return observable.constructor === C ? observable : new C(function (observer) {
          return observable.subscribe(observer);
        });
      }
      return new C(function (observer) {
        var done = false;
        microtask(function () {
          if (!done) {
            try {
              if (forOf(x, false, function (it) {
                observer.next(it);
                if (done) return RETURN;
              }) === RETURN) return;
            } catch (e) {
              if (done) throw e;
              observer.error(e);
              return;
            }observer.complete();
          }
        });
        return function () {
          done = true;
        };
      });
    },
    of: function of() {
      for (var i = 0, l = arguments.length, items = new Array(l); i < l;) items[i] = arguments[i++];
      return new (typeof this === 'function' ? this : $Observable)(function (observer) {
        var done = false;
        microtask(function () {
          if (!done) {
            for (var j = 0; j < items.length; ++j) {
              observer.next(items[j]);
              if (done) return;
            }observer.complete();
          }
        });
        return function () {
          done = true;
        };
      });
    }
  });

  hide($Observable.prototype, OBSERVABLE, function () {
    return this;
  });

  $export($export.G, { Observable: $Observable });

  $__require('c3')('Observable');
});
$__System.registerDynamic('d9', ['14', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var global = $__require('14');
  var navigator = global.navigator;

  module.exports = navigator && navigator.userAgent || '';
});
$__System.registerDynamic('14e', ['14', '17', 'd9', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // ie9- setTimeout & setInterval additional parameters fix
  var global = $__require('14');
  var $export = $__require('17');
  var userAgent = $__require('d9');
  var slice = [].slice;
  var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
  var wrap = function (set) {
    return function (fn, time /* , ...args */) {
      var boundArgs = arguments.length > 2;
      var args = boundArgs ? slice.call(arguments, 2) : false;
      return set(boundArgs ? function () {
        // eslint-disable-next-line no-new-func
        (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
      } : fn, time);
    };
  };
  $export($export.G + $export.B + $export.F * MSIE, {
    setTimeout: wrap(global.setTimeout),
    setInterval: wrap(global.setInterval)
  });
});
$__System.registerDynamic("f2", ["d"], true, function ($__require, exports, module) {
                  var process = $__require("d");
                  var global = this || self,
                      GLOBAL = global;
                  // fast apply, http://jsperf.lnkit.com/fast-apply/5
                  module.exports = function (fn, args, that) {
                                    var un = that === undefined;
                                    switch (args.length) {
                                                      case 0:
                                                                        return un ? fn() : fn.call(that);
                                                      case 1:
                                                                        return un ? fn(args[0]) : fn.call(that, args[0]);
                                                      case 2:
                                                                        return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
                                                      case 3:
                                                                        return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
                                                      case 4:
                                                                        return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
                                    }return fn.apply(that, args);
                  };
});
$__System.registerDynamic('d5', ['a1', 'f2', 'ac', '14f', '14', '51', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var ctx = $__require('a1');
  var invoke = $__require('f2');
  var html = $__require('ac');
  var cel = $__require('14f');
  var global = $__require('14');
  var process = global.process;
  var setTask = global.setImmediate;
  var clearTask = global.clearImmediate;
  var MessageChannel = global.MessageChannel;
  var Dispatch = global.Dispatch;
  var counter = 0;
  var queue = {};
  var ONREADYSTATECHANGE = 'onreadystatechange';
  var defer, channel, port;
  var run = function () {
    var id = +this;
    // eslint-disable-next-line no-prototype-builtins
    if (queue.hasOwnProperty(id)) {
      var fn = queue[id];
      delete queue[id];
      fn();
    }
  };
  var listener = function (event) {
    run.call(event.data);
  };
  // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
  if (!setTask || !clearTask) {
    setTask = function setImmediate(fn) {
      var args = [];
      var i = 1;
      while (arguments.length > i) args.push(arguments[i++]);
      queue[++counter] = function () {
        // eslint-disable-next-line no-new-func
        invoke(typeof fn == 'function' ? fn : Function(fn), args);
      };
      defer(counter);
      return counter;
    };
    clearTask = function clearImmediate(id) {
      delete queue[id];
    };
    // Node.js 0.8-
    if ($__require('51')(process) == 'process') {
      defer = function (id) {
        process.nextTick(ctx(run, id, 1));
      };
      // Sphere (JS game engine) Dispatch API
    } else if (Dispatch && Dispatch.now) {
      defer = function (id) {
        Dispatch.now(ctx(run, id, 1));
      };
      // Browsers with MessageChannel, includes WebWorkers
    } else if (MessageChannel) {
      channel = new MessageChannel();
      port = channel.port2;
      channel.port1.onmessage = listener;
      defer = ctx(port.postMessage, port, 1);
      // Browsers with postMessage, skip WebWorkers
      // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
      defer = function (id) {
        global.postMessage(id + '', '*');
      };
      global.addEventListener('message', listener, false);
      // IE8-
    } else if (ONREADYSTATECHANGE in cel('script')) {
      defer = function (id) {
        html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
          html.removeChild(this);
          run.call(id);
        };
      };
      // Rest old browsers
    } else {
      defer = function (id) {
        setTimeout(ctx(run, id, 1), 0);
      };
    }
  }
  module.exports = {
    set: setTask,
    clear: clearTask
  };
});
$__System.registerDynamic('150', ['17', 'd5', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $export = $__require('17');
  var $task = $__require('d5');
  $export($export.G + $export.B, {
    setImmediate: $task.set,
    clearImmediate: $task.clear
  });
});
$__System.registerDynamic('bd', ['1e', '2d', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 22.1.3.31 Array.prototype[@@unscopables]
  var UNSCOPABLES = $__require('1e')('unscopables');
  var ArrayProto = Array.prototype;
  if (ArrayProto[UNSCOPABLES] == undefined) $__require('2d')(ArrayProto, UNSCOPABLES, {});
  module.exports = function (key) {
    ArrayProto[UNSCOPABLES][key] = true;
  };
});
$__System.registerDynamic("146", ["d"], true, function ($__require, exports, module) {
  var process = $__require("d");
  var global = this || self,
      GLOBAL = global;
  module.exports = function (done, value) {
    return { value: value, done: !!done };
  };
});
$__System.registerDynamic('31', ['2a', '22', '10', '16', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var dP = $__require('2a');
  var anObject = $__require('22');
  var getKeys = $__require('10');

  module.exports = $__require('16') ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    var keys = getKeys(Properties);
    var length = keys.length;
    var i = 0;
    var P;
    while (length > i) dP.f(O, P = keys[i++], Properties[P]);
    return O;
  };
});
$__System.registerDynamic('ac', ['14', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var document = $__require('14').document;
  module.exports = document && document.documentElement;
});
$__System.registerDynamic('27', ['22', '31', '111', '151', '14f', 'ac', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
  var anObject = $__require('22');
  var dPs = $__require('31');
  var enumBugKeys = $__require('111');
  var IE_PROTO = $__require('151')('IE_PROTO');
  var Empty = function () {/* empty */};
  var PROTOTYPE = 'prototype';

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var createDict = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = $__require('14f')('iframe');
    var i = enumBugKeys.length;
    var lt = '<';
    var gt = '>';
    var iframeDocument;
    iframe.style.display = 'none';
    $__require('ac').appendChild(iframe);
    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
    iframeDocument.close();
    createDict = iframeDocument.F;
    while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
    return createDict();
  };

  module.exports = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      Empty[PROTOTYPE] = anObject(O);
      result = new Empty();
      Empty[PROTOTYPE] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO] = O;
    } else result = createDict();
    return Properties === undefined ? result : dPs(result, Properties);
  };
});
$__System.registerDynamic('f7', ['27', '26', '1c', '2d', '1e', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var create = $__require('27');
  var descriptor = $__require('26');
  var setToStringTag = $__require('1c');
  var IteratorPrototype = {};

  // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
  $__require('2d')(IteratorPrototype, $__require('1e')('iterator'), function () {
    return this;
  });

  module.exports = function (Constructor, NAME, next) {
    Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
    setToStringTag(Constructor, NAME + ' Iterator');
  };
});
$__System.registerDynamic('1c', ['2a', '15', '1e', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var def = $__require('2a').f;
  var has = $__require('15');
  var TAG = $__require('1e')('toStringTag');

  module.exports = function (it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
  };
});
$__System.registerDynamic('35', ['88', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 7.1.13 ToObject(argument)
  var defined = $__require('88');
  module.exports = function (it) {
    return Object(defined(it));
  };
});
$__System.registerDynamic('36', ['15', '35', '151', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
  var has = $__require('15');
  var toObject = $__require('35');
  var IE_PROTO = $__require('151')('IE_PROTO');
  var ObjectProto = Object.prototype;

  module.exports = Object.getPrototypeOf || function (O) {
    O = toObject(O);
    if (has(O, IE_PROTO)) return O[IE_PROTO];
    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    }return O instanceof Object ? ObjectProto : null;
  };
});
$__System.registerDynamic('80', ['2c', '17', '18', '2d', 'ef', 'f7', '1c', '36', '1e', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var LIBRARY = $__require('2c');
  var $export = $__require('17');
  var redefine = $__require('18');
  var hide = $__require('2d');
  var Iterators = $__require('ef');
  var $iterCreate = $__require('f7');
  var setToStringTag = $__require('1c');
  var getPrototypeOf = $__require('36');
  var ITERATOR = $__require('1e')('iterator');
  var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
  var FF_ITERATOR = '@@iterator';
  var KEYS = 'keys';
  var VALUES = 'values';

  var returnThis = function () {
    return this;
  };

  module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    $iterCreate(Constructor, NAME, next);
    var getMethod = function (kind) {
      if (!BUGGY && kind in proto) return proto[kind];
      switch (kind) {
        case KEYS:
          return function keys() {
            return new Constructor(this, kind);
          };
        case VALUES:
          return function values() {
            return new Constructor(this, kind);
          };
      }return function entries() {
        return new Constructor(this, kind);
      };
    };
    var TAG = NAME + ' Iterator';
    var DEF_VALUES = DEFAULT == VALUES;
    var VALUES_BUG = false;
    var proto = Base.prototype;
    var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
    var $default = $native || getMethod(DEFAULT);
    var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
    var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
    var methods, key, IteratorPrototype;
    // Fix native
    if ($anyNative) {
      IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
      if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
        // Set @@toStringTag to native iterators
        setToStringTag(IteratorPrototype, TAG, true);
        // fix for some old engines
        if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
      }
    }
    // fix Array#{values, @@iterator}.name in V8 / FF
    if (DEF_VALUES && $native && $native.name !== VALUES) {
      VALUES_BUG = true;
      $default = function values() {
        return $native.call(this);
      };
    }
    // Define iterator
    if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      hide(proto, ITERATOR, $default);
    }
    // Plug for library
    Iterators[NAME] = $default;
    Iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: $entries
      };
      if (FORCED) for (key in methods) {
        if (!(key in proto)) redefine(proto, key, methods[key]);
      } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };
});
$__System.registerDynamic('ee', ['bd', '146', 'ef', '24', '80', 'd'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var addToUnscopables = $__require('bd');
  var step = $__require('146');
  var Iterators = $__require('ef');
  var toIObject = $__require('24');

  // 22.1.3.4 Array.prototype.entries()
  // 22.1.3.13 Array.prototype.keys()
  // 22.1.3.29 Array.prototype.values()
  // 22.1.3.30 Array.prototype[@@iterator]()
  module.exports = $__require('80')(Array, 'Array', function (iterated, kind) {
    this._t = toIObject(iterated); // target
    this._i = 0; // next index
    this._k = kind; // kind
    // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var kind = this._k;
    var index = this._i++;
    if (!O || index >= O.length) {
      this._t = undefined;
      return step(1);
    }
    if (kind == 'keys') return step(0, index);
    if (kind == 'values') return step(0, O[index]);
    return step(0, [index, O[index]]);
  }, 'values');

  // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
  Iterators.Arguments = Iterators.Array;

  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');
});
$__System.registerDynamic("51", ["d"], true, function ($__require, exports, module) {
  var process = $__require("d");
  var global = this || self,
      GLOBAL = global;
  var toString = {}.toString;

  module.exports = function (it) {
    return toString.call(it).slice(8, -1);
  };
});
$__System.registerDynamic('a9', ['51', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var cof = $__require('51');
  // eslint-disable-next-line no-prototype-builtins
  module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };
});
$__System.registerDynamic("88", ["d"], true, function ($__require, exports, module) {
  var process = $__require("d");
  var global = this || self,
      GLOBAL = global;
  // 7.2.1 RequireObjectCoercible(argument)
  module.exports = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };
});
$__System.registerDynamic('24', ['a9', '88', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // to indexed object, toObject with fallback for non-array-like ES3 strings
  var IObject = $__require('a9');
  var defined = $__require('88');
  module.exports = function (it) {
    return IObject(defined(it));
  };
});
$__System.registerDynamic('7c', ['55', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 7.1.15 ToLength
  var toInteger = $__require('55');
  var min = Math.min;
  module.exports = function (it) {
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  };
});
$__System.registerDynamic("55", ["d"], true, function ($__require, exports, module) {
  var process = $__require("d");
  var global = this || self,
      GLOBAL = global;
  // 7.1.4 ToInteger
  var ceil = Math.ceil;
  var floor = Math.floor;
  module.exports = function (it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };
});
$__System.registerDynamic('7a', ['55', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var toInteger = $__require('55');
  var max = Math.max;
  var min = Math.min;
  module.exports = function (index, length) {
    index = toInteger(index);
    return index < 0 ? max(index + length, 0) : min(index, length);
  };
});
$__System.registerDynamic('b9', ['24', '7c', '7a', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // false -> Array#indexOf
  // true  -> Array#includes
  var toIObject = $__require('24');
  var toLength = $__require('7c');
  var toAbsoluteIndex = $__require('7a');
  module.exports = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIObject($this);
      var length = toLength(O.length);
      var index = toAbsoluteIndex(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare
        if (value != value) return true;
        // Array#indexOf ignores holes, Array#includes - not
      } else for (; length > index; index++) if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }return !IS_INCLUDES && -1;
    };
  };
});
$__System.registerDynamic('151', ['1b', '1d', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var shared = $__require('1b')('keys');
  var uid = $__require('1d');
  module.exports = function (key) {
    return shared[key] || (shared[key] = uid(key));
  };
});
$__System.registerDynamic('110', ['15', '24', 'b9', '151', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var has = $__require('15');
  var toIObject = $__require('24');
  var arrayIndexOf = $__require('b9')(false);
  var IE_PROTO = $__require('151')('IE_PROTO');

  module.exports = function (object, names) {
    var O = toIObject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
    return result;
  };
});
$__System.registerDynamic('111', ['d'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // IE 8- don't enum bug keys
  module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');
});
$__System.registerDynamic('10', ['110', '111', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 19.1.2.14 / 15.2.3.14 Object.keys(O)
  var $keys = $__require('110');
  var enumBugKeys = $__require('111');

  module.exports = Object.keys || function keys(O) {
    return $keys(O, enumBugKeys);
  };
});
$__System.registerDynamic("ef", ["d"], true, function ($__require, exports, module) {
  var process = $__require("d");
  var global = this || self,
      GLOBAL = global;
  module.exports = {};
});
$__System.registerDynamic('1e', ['1b', '1d', '14', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var store = $__require('1b')('wks');
  var uid = $__require('1d');
  var Symbol = $__require('14').Symbol;
  var USE_SYMBOL = typeof Symbol == 'function';

  var $exports = module.exports = function (name) {
    return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
  };

  $exports.store = store;
});
$__System.registerDynamic('152', ['ee', '10', '18', '14', '2d', 'ef', '1e', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var $iterators = $__require('ee');
  var getKeys = $__require('10');
  var redefine = $__require('18');
  var global = $__require('14');
  var hide = $__require('2d');
  var Iterators = $__require('ef');
  var wks = $__require('1e');
  var ITERATOR = wks('iterator');
  var TO_STRING_TAG = wks('toStringTag');
  var ArrayValues = Iterators.Array;

  var DOMIterables = {
    CSSRuleList: true, // TODO: Not spec compliant, should be false.
    CSSStyleDeclaration: false,
    CSSValueList: false,
    ClientRectList: false,
    DOMRectList: false,
    DOMStringList: false,
    DOMTokenList: true,
    DataTransferItemList: false,
    FileList: false,
    HTMLAllCollection: false,
    HTMLCollection: false,
    HTMLFormElement: false,
    HTMLSelectElement: false,
    MediaList: true, // TODO: Not spec compliant, should be false.
    MimeTypeArray: false,
    NamedNodeMap: false,
    NodeList: true,
    PaintRequestList: false,
    Plugin: false,
    PluginArray: false,
    SVGLengthList: false,
    SVGNumberList: false,
    SVGPathSegList: false,
    SVGPointList: false,
    SVGStringList: false,
    SVGTransformList: false,
    SourceBufferList: false,
    StyleSheetList: true, // TODO: Not spec compliant, should be false.
    TextTrackCueList: false,
    TextTrackList: false,
    TouchList: false
  };

  for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
    var NAME = collections[i];
    var explicit = DOMIterables[NAME];
    var Collection = global[NAME];
    var proto = Collection && Collection.prototype;
    var key;
    if (proto) {
      if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
      if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
      Iterators[NAME] = ArrayValues;
      if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
    }
  }
});
$__System.registerDynamic('153', ['13', '2e', '2f', '30', '32', '34', '37', '38', '39', '3a', '3b', '3c', '3d', '3f', '40', '42', '44', '46', '48', '4a', '4b', '4c', '4e', '50', '54', '58', '59', '5a', '5b', '5d', '5e', '5f', '60', '62', '63', '64', '66', '67', '68', '6a', '6b', '6c', '6e', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '7b', '7d', '7e', '81', '82', '85', '86', '89', '8a', '8c', '8d', '8e', '8f', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '9b', '9c', '9e', '9f', 'a0', 'a7', 'a8', 'ab', 'ad', 'af', 'b1', 'b2', 'b3', 'b4', 'b5', 'b7', 'b8', 'ba', 'bb', 'be', 'c0', 'c1', 'c2', 'ee', 'c4', 'ce', 'c6', 'c7', 'c8', 'cc', 'cd', 'd0', 'd2', '147', '13f', '14a', 'dc', 'e0', 'e3', 'e4', 'e6', 'e7', 'e8', 'e9', 'ea', 'eb', 'ec', 'f0', 'f1', 'f3', 'f4', 'f5', 'f6', 'f8', 'f9', 'fa', 'fb', 'fc', 'fd', 'ff', '100', '101', '102', '103', '106', '107', '108', '10a', '10b', '10c', '10d', '10e', '10f', '112', '113', '115', '116', '118', '119', '11a', '11b', '11e', '11f', '121', '122', '123', '124', '126', '127', '128', '129', '12a', '12b', '12c', '12d', '12e', '12f', '131', '132', '133', '134', '135', '136', '137', '138', '139', '13a', '13b', '13d', '13e', '141', '142', '143', '144', '145', '14b', '14c', '14d', '14e', '150', '152', '3e', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  $__require('13');
  $__require('2e');
  $__require('2f');
  $__require('30');
  $__require('32');
  $__require('34');
  $__require('37');
  $__require('38');
  $__require('39');
  $__require('3a');
  $__require('3b');
  $__require('3c');
  $__require('3d');
  $__require('3f');
  $__require('40');
  $__require('42');
  $__require('44');
  $__require('46');
  $__require('48');
  $__require('4a');
  $__require('4b');
  $__require('4c');
  $__require('4e');
  $__require('50');
  $__require('54');
  $__require('58');
  $__require('59');
  $__require('5a');
  $__require('5b');
  $__require('5d');
  $__require('5e');
  $__require('5f');
  $__require('60');
  $__require('62');
  $__require('63');
  $__require('64');
  $__require('66');
  $__require('67');
  $__require('68');
  $__require('6a');
  $__require('6b');
  $__require('6c');
  $__require('6e');
  $__require('70');
  $__require('71');
  $__require('72');
  $__require('73');
  $__require('74');
  $__require('75');
  $__require('76');
  $__require('77');
  $__require('78');
  $__require('79');
  $__require('7b');
  $__require('7d');
  $__require('7e');
  $__require('81');
  $__require('82');
  $__require('85');
  $__require('86');
  $__require('89');
  $__require('8a');
  $__require('8c');
  $__require('8d');
  $__require('8e');
  $__require('8f');
  $__require('90');
  $__require('91');
  $__require('92');
  $__require('93');
  $__require('94');
  $__require('95');
  $__require('96');
  $__require('97');
  $__require('98');
  $__require('99');
  $__require('9b');
  $__require('9c');
  $__require('9e');
  $__require('9f');
  $__require('a0');
  $__require('a7');
  $__require('a8');
  $__require('ab');
  $__require('ad');
  $__require('af');
  $__require('b1');
  $__require('b2');
  $__require('b3');
  $__require('b4');
  $__require('b5');
  $__require('b7');
  $__require('b8');
  $__require('ba');
  $__require('bb');
  $__require('be');
  $__require('c0');
  $__require('c1');
  $__require('c2');
  $__require('ee');
  $__require('c4');
  $__require('ce');
  $__require('c6');
  $__require('c7');
  $__require('c8');
  $__require('cc');
  $__require('cd');
  $__require('d0');
  $__require('d2');
  $__require('147');
  $__require('13f');
  $__require('14a');
  $__require('dc');
  $__require('e0');
  $__require('e3');
  $__require('e4');
  $__require('e6');
  $__require('e7');
  $__require('e8');
  $__require('e9');
  $__require('ea');
  $__require('eb');
  $__require('ec');
  $__require('f0');
  $__require('f1');
  $__require('f3');
  $__require('f4');
  $__require('f5');
  $__require('f6');
  $__require('f8');
  $__require('f9');
  $__require('fa');
  $__require('fb');
  $__require('fc');
  $__require('fd');
  $__require('ff');
  $__require('100');
  $__require('101');
  $__require('102');
  $__require('103');
  $__require('106');
  $__require('107');
  $__require('108');
  $__require('10a');
  $__require('10b');
  $__require('10c');
  $__require('10d');
  $__require('10e');
  $__require('10f');
  $__require('112');
  $__require('113');
  $__require('115');
  $__require('116');
  $__require('118');
  $__require('119');
  $__require('11a');
  $__require('11b');
  $__require('11e');
  $__require('11f');
  $__require('121');
  $__require('122');
  $__require('123');
  $__require('124');
  $__require('126');
  $__require('127');
  $__require('128');
  $__require('129');
  $__require('12a');
  $__require('12b');
  $__require('12c');
  $__require('12d');
  $__require('12e');
  $__require('12f');
  $__require('131');
  $__require('132');
  $__require('133');
  $__require('134');
  $__require('135');
  $__require('136');
  $__require('137');
  $__require('138');
  $__require('139');
  $__require('13a');
  $__require('13b');
  $__require('13d');
  $__require('13e');
  $__require('141');
  $__require('142');
  $__require('143');
  $__require('144');
  $__require('145');
  $__require('14b');
  $__require('14c');
  $__require('14d');
  $__require('14e');
  $__require('150');
  $__require('152');
  module.exports = $__require('3e');
});
$__System.registerDynamic("154", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /**
   * Copyright (c) 2014, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
   * additional grant of patent rights can be found in the PATENTS file in
   * the same directory.
   */

  !function (global) {
    "use strict";

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    var inModule = typeof module === "object";
    var runtime = global.regeneratorRuntime;
    if (runtime) {
      if (inModule) {
        // If regeneratorRuntime is defined globally and we're in a module,
        // make the exports object identical to regeneratorRuntime.
        module.exports = runtime;
      }
      // Don't bother evaluating the rest of this file if the runtime was
      // already defined globally.
      return;
    }

    // Define the runtime globally (as expected by generated code) as either
    // module.exports (if we're in a module) or a new, empty object.
    runtime = global.regeneratorRuntime = inModule ? module.exports : {};

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []);

      // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.
      generator._invoke = makeInvokeMethod(innerFn, self, context);

      return generator;
    }
    runtime.wrap = wrap;

    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
      try {
        return { type: "normal", arg: fn.call(obj, arg) };
      } catch (err) {
        return { type: "throw", arg: err };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";

    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};

    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}

    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        prototype[method] = function (arg) {
          return this._invoke(method, arg);
        };
      });
    }

    runtime.isGeneratorFunction = function (genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor ? ctor === GeneratorFunction ||
      // For the native GeneratorFunction constructor, the best we can
      // do is to check its .name property.
      (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };

    runtime.mark = function (genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        if (!(toStringTagSymbol in genFun)) {
          genFun[toStringTagSymbol] = "GeneratorFunction";
        }
      }
      genFun.prototype = Object.create(Gp);
      return genFun;
    };

    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    runtime.awrap = function (arg) {
      return { __await: arg };
    };

    function AsyncIterator(generator) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;
          if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
            return Promise.resolve(value.__await).then(function (value) {
              invoke("next", value, resolve, reject);
            }, function (err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return Promise.resolve(value).then(function (unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration. If the Promise is rejected, however, the
            // result for this iteration will be rejected with the same
            // reason. Note that rejections of yielded Promises are not
            // thrown back into the generator function, as is the case
            // when an awaited Promise is rejected. This difference in
            // behavior between yield and await is important, because it
            // allows the consumer to decide what to do with the yielded
            // rejection (swallow it and continue, manually .throw it back
            // into the generator, abandon iteration, whatever). With
            // await, by contrast, there is no opportunity to examine the
            // rejection reason outside the generator function, so the
            // only option is to throw it from the await expression, and
            // let the generator function handle the exception.
            result.value = unwrapped;
            resolve(result);
          }, reject);
        }
      }

      if (typeof global.process === "object" && global.process.domain) {
        invoke = global.process.domain.bind(invoke);
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new Promise(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
        // Avoid propagating failures to Promises returned by later
        // invocations of the iterator.
        callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }

      // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).
      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);
    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };
    runtime.AsyncIterator = AsyncIterator;

    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    runtime.async = function (innerFn, outerFn, self, tryLocsList) {
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

      return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;

      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          }

          // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;
          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);
          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;

          var record = tryCatch(innerFn, self, context);
          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done ? GenStateCompleted : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };
          } else if (record.type === "throw") {
            state = GenStateCompleted;
            // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.
            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    }

    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];
      if (method === undefined) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          if (delegate.iterator.return) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError("The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (!info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value;

        // Resume execution at the desired location (see delegateYield).
        context.next = delegate.nextLoc;

        // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.
        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined;
        }
      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      }

      // The delegate iterator is finished, so forget it and continue with
      // the outer generator.
      context.delegate = null;
      return ContinueSentinel;
    }

    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);

    Gp[toStringTagSymbol] = "Generator";

    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    Gp[iteratorSymbol] = function () {
      return this;
    };

    Gp.toString = function () {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = { tryLoc: locs[0] };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{ tryLoc: "root" }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    runtime.keys = function (object) {
      var keys = [];
      for (var key in object) {
        keys.push(key);
      }
      keys.reverse();

      // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.
      return function next() {
        while (keys.length) {
          var key = keys.pop();
          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        }

        // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.
        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1,
              next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined;
            next.done = true;

            return next;
          };

          return next.next = next;
        }
      }

      // Return an iterator with no values.
      return { next: doneResult };
    }
    runtime.values = values;

    function doneResult() {
      return { value: undefined, done: true };
    }

    Context.prototype = {
      constructor: Context,

      reset: function (skipTempReset) {
        this.prev = 0;
        this.next = 0;
        // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.
        this.sent = this._sent = undefined;
        this.done = false;
        this.delegate = null;

        this.method = "next";
        this.arg = undefined;

        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
              this[name] = undefined;
            }
          }
        }
      },

      stop: function () {
        this.done = true;

        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;
        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },

      dispatchException: function (exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;
        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined;
          }

          return !!caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }
            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },

      abrupt: function (type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },

      complete: function (record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" || record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },

      finish: function (finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },

      "catch": function (tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }

        // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.
        throw new Error("illegal catch attempt");
      },

      delegateYield: function (iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined;
        }

        return ContinueSentinel;
      }
    };
  }(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global : typeof window === "object" ? window : typeof self === "object" ? self : exports);
});
$__System.registerDynamic('22', ['23', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var isObject = $__require('23');
  module.exports = function (it) {
    if (!isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
  };
});
$__System.registerDynamic('14f', ['23', '14', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var isObject = $__require('23');
  var document = $__require('14').document;
  // typeof document.createElement is 'object' in old IE
  var is = isObject(document) && isObject(document.createElement);
  module.exports = function (it) {
    return is ? document.createElement(it) : {};
  };
});
$__System.registerDynamic('149', ['16', '1a', '14f', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  module.exports = !$__require('16') && !$__require('1a')(function () {
    return Object.defineProperty($__require('14f')('div'), 'a', { get: function () {
        return 7;
      } }).a != 7;
  });
});
$__System.registerDynamic('23', ['d'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  module.exports = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };
});
$__System.registerDynamic('25', ['23', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // 7.1.1 ToPrimitive(input [, PreferredType])
  var isObject = $__require('23');
  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  module.exports = function (it, S) {
    if (!isObject(it)) return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
    if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
    if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
    throw TypeError("Can't convert object to primitive value");
  };
});
$__System.registerDynamic('2a', ['22', '149', '25', '16', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var anObject = $__require('22');
  var IE8_DOM_DEFINE = $__require('149');
  var toPrimitive = $__require('25');
  var dP = Object.defineProperty;

  exports.f = $__require('16') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPrimitive(P, true);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
      return dP(O, P, Attributes);
    } catch (e) {/* empty */}
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };
});
$__System.registerDynamic("26", ["d"], true, function ($__require, exports, module) {
  var process = $__require("d");
  var global = this || self,
      GLOBAL = global;
  module.exports = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };
});
$__System.registerDynamic("1a", ["d"], true, function ($__require, exports, module) {
  var process = $__require("d");
  var global = this || self,
      GLOBAL = global;
  module.exports = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
});
$__System.registerDynamic('16', ['1a', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // Thank's IE8 for his funny defineProperty
  module.exports = !$__require('1a')(function () {
    return Object.defineProperty({}, 'a', { get: function () {
        return 7;
      } }).a != 7;
  });
});
$__System.registerDynamic('2d', ['2a', '26', '16', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var dP = $__require('2a');
  var createDesc = $__require('26');
  module.exports = $__require('16') ? function (object, key, value) {
    return dP.f(object, key, createDesc(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };
});
$__System.registerDynamic("15", ["d"], true, function ($__require, exports, module) {
  var process = $__require("d");
  var global = this || self,
      GLOBAL = global;
  var hasOwnProperty = {}.hasOwnProperty;
  module.exports = function (it, key) {
    return hasOwnProperty.call(it, key);
  };
});
$__System.registerDynamic('1d', ['d'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var id = 0;
  var px = Math.random();
  module.exports = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };
});
$__System.registerDynamic('14', ['d'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});
$__System.registerDynamic("2c", ["d"], true, function ($__require, exports, module) {
  var process = $__require("d");
  var global = this || self,
      GLOBAL = global;
  module.exports = false;
});
$__System.registerDynamic('1b', ['3e', '14', '2c', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var core = $__require('3e');
  var global = $__require('14');
  var SHARED = '__core-js_shared__';
  var store = global[SHARED] || (global[SHARED] = {});

  (module.exports = function (key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: core.version,
    mode: $__require('2c') ? 'pure' : 'global',
    copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
  });
});
$__System.registerDynamic('155', ['1b', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require('1b')('native-function-to-string', Function.toString);
});
$__System.registerDynamic('18', ['14', '2d', '15', '1d', '155', '3e', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var global = $__require('14');
  var hide = $__require('2d');
  var has = $__require('15');
  var SRC = $__require('1d')('src');
  var $toString = $__require('155');
  var TO_STRING = 'toString';
  var TPL = ('' + $toString).split(TO_STRING);

  $__require('3e').inspectSource = function (it) {
    return $toString.call(it);
  };

  (module.exports = function (O, key, val, safe) {
    var isFunction = typeof val == 'function';
    if (isFunction) has(val, 'name') || hide(val, 'name', key);
    if (O[key] === val) return;
    if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
    if (O === global) {
      O[key] = val;
    } else if (!safe) {
      delete O[key];
      hide(O, key, val);
    } else if (O[key]) {
      O[key] = val;
    } else {
      hide(O, key, val);
    }
    // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, TO_STRING, function toString() {
    return typeof this == 'function' && this[SRC] || $toString.call(this);
  });
});
$__System.registerDynamic('ae', ['d'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  module.exports = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };
});
$__System.registerDynamic('a1', ['ae', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // optional / simple context binding
  var aFunction = $__require('ae');
  module.exports = function (fn, that, length) {
    aFunction(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 1:
        return function (a) {
          return fn.call(that, a);
        };
      case 2:
        return function (a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function () /* ...args */{
      return fn.apply(that, arguments);
    };
  };
});
$__System.registerDynamic('17', ['14', '3e', '2d', '18', 'a1', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var global = $__require('14');
  var core = $__require('3e');
  var hide = $__require('2d');
  var redefine = $__require('18');
  var ctx = $__require('a1');
  var PROTOTYPE = 'prototype';

  var $export = function (type, name, source) {
    var IS_FORCED = type & $export.F;
    var IS_GLOBAL = type & $export.G;
    var IS_STATIC = type & $export.S;
    var IS_PROTO = type & $export.P;
    var IS_BIND = type & $export.B;
    var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
    var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
    var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
    var key, own, out, exp;
    if (IS_GLOBAL) source = name;
    for (key in source) {
      // contains in native
      own = !IS_FORCED && target && target[key] !== undefined;
      // export native or passed
      out = (own ? target : source)[key];
      // bind timers to global for call from export context
      exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      // extend global
      if (target) redefine(target, key, out, type & $export.U);
      // export
      if (exports[key] != out) hide(exports, key, exp);
      if (IS_PROTO && expProto[key] != out) expProto[key] = out;
    }
  };
  global.core = core;
  // type bitmap
  $export.F = 1; // forced
  $export.G = 2; // global
  $export.S = 4; // static
  $export.P = 8; // proto
  $export.B = 16; // bind
  $export.W = 32; // wrap
  $export.U = 64; // safe
  $export.R = 128; // real proto method for `library`
  module.exports = $export;
});
$__System.registerDynamic("156", ["d"], true, function ($__require, exports, module) {
  var process = $__require("d");
  var global = this || self,
      GLOBAL = global;
  module.exports = function (regExp, replace) {
    var replacer = replace === Object(replace) ? function (part) {
      return replace[part];
    } : replace;
    return function (it) {
      return String(it).replace(regExp, replacer);
    };
  };
});
$__System.registerDynamic('157', ['17', '156', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  // https://github.com/benjamingr/RexExp.escape
  var $export = $__require('17');
  var $re = $__require('156')(/[\\^$*+?.()|[\]{}]/g, '\\$&');

  $export($export.S, 'RegExp', { escape: function escape(it) {
      return $re(it);
    } });
});
$__System.registerDynamic('3e', ['d'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  var core = module.exports = { version: '2.6.5' };
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});
$__System.registerDynamic("@system-env", [], true, function() {
  return {
    "default": true
  };
});

$__System.registerDynamic('d', ['@system-env'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    // From https://github.com/defunctzombie/node-process/blob/master/browser.js
    // shim for using process in browser

    var productionEnv = $__require('@system-env').production;

    var process = module.exports = {};
    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;

    function cleanUpNextTick() {
        draining = false;
        if (currentQueue.length) {
            queue = currentQueue.concat(queue);
        } else {
            queueIndex = -1;
        }
        if (queue.length) {
            drainQueue();
        }
    }

    function drainQueue() {
        if (draining) {
            return;
        }
        var timeout = setTimeout(cleanUpNextTick);
        draining = true;

        var len = queue.length;
        while (len) {
            currentQueue = queue;
            queue = [];
            while (++queueIndex < len) {
                if (currentQueue) {
                    currentQueue[queueIndex].run();
                }
            }
            queueIndex = -1;
            len = queue.length;
        }
        currentQueue = null;
        draining = false;
        clearTimeout(timeout);
    }

    process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
                args[i - 1] = arguments[i];
            }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
            setTimeout(drainQueue, 0);
        }
    };

    // v8 likes predictible objects
    function Item(fun, array) {
        this.fun = fun;
        this.array = array;
    }
    Item.prototype.run = function () {
        this.fun.apply(null, this.array);
    };
    process.title = 'browser';
    process.browser = true;
    process.env = {
        NODE_ENV: productionEnv ? 'production' : 'development'
    };
    process.argv = [];
    process.version = ''; // empty string to avoid regexp issues
    process.versions = {};

    function noop() {}

    process.on = noop;
    process.addListener = noop;
    process.once = noop;
    process.off = noop;
    process.removeListener = noop;
    process.removeAllListeners = noop;
    process.emit = noop;

    process.binding = function (name) {
        throw new Error('process.binding is not supported');
    };

    process.cwd = function () {
        return '/';
    };
    process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
    };
    process.umask = function () {
        return 0;
    };
});
$__System.registerDynamic('158', ['157', '3e', 'd'], true, function ($__require, exports, module) {
  var process = $__require('d');
  var global = this || self,
      GLOBAL = global;
  $__require('157');
  module.exports = $__require('3e').RegExp.escape;
});
$__System.registerDynamic("159", ["153", "154", "158"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  $__require("153");

  $__require("154");

  $__require("158");

  if (global._babelPolyfill) {
    throw new Error("only one instance of babel-polyfill is allowed");
  }
  global._babelPolyfill = true;

  var DEFINE_PROPERTY = "defineProperty";
  function define(O, key, value) {
    O[key] || Object[DEFINE_PROPERTY](O, key, {
      writable: true,
      configurable: true,
      value: value
    });
  }

  define(String.prototype, "padLeft", "".padStart);
  define(String.prototype, "padRight", "".padEnd);

  "pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
    [][key] && define(Array, key, Function.call.bind([][key]));
  });
});
$__System.registerDynamic("15a", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* Font Face Observer v2.0.13 - © Bram Stein. License: BSD-3-Clause */(function () {
    function l(a, b) {
      document.addEventListener ? a.addEventListener("scroll", b, !1) : a.attachEvent("scroll", b);
    }function m(a) {
      document.body ? a() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function c() {
        document.removeEventListener("DOMContentLoaded", c);a();
      }) : document.attachEvent("onreadystatechange", function k() {
        if ("interactive" == document.readyState || "complete" == document.readyState) document.detachEvent("onreadystatechange", k), a();
      });
    };function r(a) {
      this.a = document.createElement("div");this.a.setAttribute("aria-hidden", "true");this.a.appendChild(document.createTextNode(a));this.b = document.createElement("span");this.c = document.createElement("span");this.h = document.createElement("span");this.f = document.createElement("span");this.g = -1;this.b.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
      this.f.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.b.appendChild(this.h);this.c.appendChild(this.f);this.a.appendChild(this.b);this.a.appendChild(this.c);
    }
    function t(a, b) {
      a.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + b + ";";
    }function y(a) {
      var b = a.a.offsetWidth,
          c = b + 100;a.f.style.width = c + "px";a.c.scrollLeft = c;a.b.scrollLeft = a.b.scrollWidth + 100;return a.g !== b ? (a.g = b, !0) : !1;
    }function z(a, b) {
      function c() {
        var a = k;y(a) && a.a.parentNode && b(a.g);
      }var k = a;l(a.b, c);l(a.c, c);y(a);
    };function A(a, b) {
      var c = b || {};this.family = a;this.style = c.style || "normal";this.weight = c.weight || "normal";this.stretch = c.stretch || "normal";
    }var B = null,
        C = null,
        E = null,
        F = null;function G() {
      if (null === C) if (J() && /Apple/.test(window.navigator.vendor)) {
        var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);C = !!a && 603 > parseInt(a[1], 10);
      } else C = !1;return C;
    }function J() {
      null === F && (F = !!document.fonts);return F;
    }
    function K() {
      if (null === E) {
        var a = document.createElement("div");try {
          a.style.font = "condensed 100px sans-serif";
        } catch (b) {}E = "" !== a.style.font;
      }return E;
    }function L(a, b) {
      return [a.style, a.weight, K() ? a.stretch : "", "100px", b].join(" ");
    }
    A.prototype.load = function (a, b) {
      var c = this,
          k = a || "BESbswy",
          q = 0,
          D = b || 3E3,
          H = new Date().getTime();return new Promise(function (a, b) {
        if (J() && !G()) {
          var M = new Promise(function (a, b) {
            function e() {
              new Date().getTime() - H >= D ? b() : document.fonts.load(L(c, '"' + c.family + '"'), k).then(function (c) {
                1 <= c.length ? a() : setTimeout(e, 25);
              }, function () {
                b();
              });
            }e();
          }),
              N = new Promise(function (a, c) {
            q = setTimeout(c, D);
          });Promise.race([N, M]).then(function () {
            clearTimeout(q);a(c);
          }, function () {
            b(c);
          });
        } else m(function () {
          function u() {
            var b;if (b = -1 != f && -1 != g || -1 != f && -1 != h || -1 != g && -1 != h) (b = f != g && f != h && g != h) || (null === B && (b = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), B = !!b && (536 > parseInt(b[1], 10) || 536 === parseInt(b[1], 10) && 11 >= parseInt(b[2], 10))), b = B && (f == v && g == v && h == v || f == w && g == w && h == w || f == x && g == x && h == x)), b = !b;b && (d.parentNode && d.parentNode.removeChild(d), clearTimeout(q), a(c));
          }function I() {
            if (new Date().getTime() - H >= D) d.parentNode && d.parentNode.removeChild(d), b(c);else {
              var a = document.hidden;if (!0 === a || void 0 === a) f = e.a.offsetWidth, g = n.a.offsetWidth, h = p.a.offsetWidth, u();q = setTimeout(I, 50);
            }
          }var e = new r(k),
              n = new r(k),
              p = new r(k),
              f = -1,
              g = -1,
              h = -1,
              v = -1,
              w = -1,
              x = -1,
              d = document.createElement("div");d.dir = "ltr";t(e, L(c, "sans-serif"));t(n, L(c, "serif"));t(p, L(c, "monospace"));d.appendChild(e.a);d.appendChild(n.a);d.appendChild(p.a);document.body.appendChild(d);v = e.a.offsetWidth;w = n.a.offsetWidth;x = p.a.offsetWidth;I();z(e, function (a) {
            f = a;u();
          });t(e, L(c, '"' + c.family + '",sans-serif'));z(n, function (a) {
            g = a;u();
          });t(n, L(c, '"' + c.family + '",serif'));
          z(p, function (a) {
            h = a;u();
          });t(p, L(c, '"' + c.family + '",monospace'));
        });
      });
    };"object" === typeof module ? module.exports = A : (window.FontFaceObserver = A, window.FontFaceObserver.prototype.load = A.prototype.load);
  })();
});
$__System.register('15b', [], function (_export, _context) {
  "use strict";

  /**
   * Polyfills for adding backwards-compatibility
   * @module utils/polyfills
   */

  /**
   * Polyfill for URLSearchParams
   * Needed for IE11
   *
   * @author Jerry Bendy <jerry@icewingcc.com>
   * @licence MIT
   *
   */
  function URLSearchParamsPolyfill() {
    (function (self) {
      'use strict';

      var nativeURLSearchParams = self.URLSearchParams && self.URLSearchParams.prototype.get ? self.URLSearchParams : null,
          isSupportObjectConstructor = nativeURLSearchParams && new nativeURLSearchParams({ a: 1 }).toString() === 'a=1',


      // There is a bug in safari 10.1 (and earlier) that incorrectly decodes `%2B` as an empty space and not a plus.
      decodesPlusesCorrectly = nativeURLSearchParams && new nativeURLSearchParams('s=%2B').get('s') === '+',
          __URLSearchParams__ = '__URLSearchParams__',


      // Fix bug in Edge which cannot encode ' &' correctly
      encodesAmpersandsCorrectly = nativeURLSearchParams ? function () {
        var ampersandTest = new nativeURLSearchParams();
        ampersandTest.append('s', ' &');
        return ampersandTest.toString() === 's=+%26';
      }() : true,
          prototype = URLSearchParamsPolyfill.prototype,
          iterable = !!(self.Symbol && self.Symbol.iterator);

      if (nativeURLSearchParams && isSupportObjectConstructor && decodesPlusesCorrectly && encodesAmpersandsCorrectly) {
        return;
      }

      /**
       * Make a URLSearchParams instance
       *
       * @param {object|string|URLSearchParams} search
       * @constructor
       */
      function URLSearchParamsPolyfill(search) {
        search = search || '';

        // support construct object with another URLSearchParams instance
        if (search instanceof URLSearchParams || search instanceof URLSearchParamsPolyfill) {
          search = search.toString();
        }
        this[__URLSearchParams__] = parseToDict(search);
      }

      /**
       * Appends a specified key/value pair as a new search parameter.
       *
       * @param {string} name
       * @param {string} value
       */
      prototype.append = function (name, value) {
        appendTo(this[__URLSearchParams__], name, value);
      };

      /**
       * Deletes the given search parameter, and its associated value,
       * from the list of all search parameters.
       *
       * @param {string} name
       */
      prototype['delete'] = function (name) {
        delete this[__URLSearchParams__][name];
      };

      /**
       * Returns the first value associated to the given search parameter.
       *
       * @param {string} name
       * @returns {string|null}
       */
      prototype.get = function (name) {
        var dict = this[__URLSearchParams__];
        return this.has(name) ? dict[name][0] : null;
      };

      /**
       * Returns all the values association with a given search parameter.
       *
       * @param {string} name
       * @returns {Array}
       */
      prototype.getAll = function (name) {
        var dict = this[__URLSearchParams__];
        return this.has(name) ? dict[name].slice(0) : [];
      };

      /**
       * Returns a Boolean indicating if such a search parameter exists.
       *
       * @param {string} name
       * @returns {boolean}
       */
      prototype.has = function (name) {
        return hasOwnProperty(this[__URLSearchParams__], name);
      };

      /**
       * Sets the value associated to a given search parameter to
       * the given value. If there were several values, delete the
       * others.
       *
       * @param {string} name
       * @param {string} value
       */
      prototype.set = function set(name, value) {
        this[__URLSearchParams__][name] = ['' + value];
      };

      /**
       * Returns a string containg a query string suitable for use in a URL.
       *
       * @returns {string}
       */
      prototype.toString = function () {
        var dict = this[__URLSearchParams__],
            query = [],
            i,
            key,
            name,
            value;
        for (key in dict) {
          name = encode(key);
          for (i = 0, value = dict[key]; i < value.length; i++) {
            query.push(name + '=' + encode(value[i]));
          }
        }
        return query.join('&');
      };

      // There is a bug in Safari 10.1 and `Proxy`ing it is not enough.
      var forSureUsePolyfill = !decodesPlusesCorrectly;
      var useProxy = !forSureUsePolyfill && nativeURLSearchParams && !isSupportObjectConstructor && self.Proxy;
      /*
       * Apply polifill to global object and append other prototype into it
       */
      Object.defineProperty(self, 'URLSearchParams', {
        value: useProxy ? // Safari 10.0 doesn't support Proxy, so it won't extend URLSearchParams on safari 10.0
        new Proxy(nativeURLSearchParams, {
          construct: function construct(target, args) {
            return new target(new URLSearchParamsPolyfill(args[0]).toString());
          }
        }) : URLSearchParamsPolyfill
      });

      var USPProto = self.URLSearchParams.prototype;

      USPProto.polyfill = true;

      /**
       *
       * @param {function} callback
       * @param {object} thisArg
       */
      USPProto.forEach = USPProto.forEach || function (callback, thisArg) {
        var dict = parseToDict(this.toString());
        Object.getOwnPropertyNames(dict).forEach(function (name) {
          dict[name].forEach(function (value) {
            callback.call(thisArg, value, name, this);
          }, this);
        }, this);
      };

      /**
       * Sort all name-value pairs
       */
      USPProto.sort = USPProto.sort || function () {
        var dict = parseToDict(this.toString()),
            keys = [],
            k,
            i,
            j;
        for (k in dict) {
          keys.push(k);
        }
        keys.sort();

        for (i = 0; i < keys.length; i++) {
          this['delete'](keys[i]);
        }
        for (i = 0; i < keys.length; i++) {
          var key = keys[i],
              values = dict[key];
          for (j = 0; j < values.length; j++) {
            this.append(key, values[j]);
          }
        }
      };

      /**
       * Returns an iterator allowing to go through all keys of
       * the key/value pairs contained in this object.
       *
       * @returns {function}
       */
      USPProto.keys = USPProto.keys || function () {
        var items = [];
        this.forEach(function (item, name) {
          items.push(name);
        });
        return makeIterator(items);
      };

      /**
       * Returns an iterator allowing to go through all values of
       * the key/value pairs contained in this object.
       *
       * @returns {function}
       */
      USPProto.values = USPProto.values || function () {
        var items = [];
        this.forEach(function (item) {
          items.push(item);
        });
        return makeIterator(items);
      };

      /**
       * Returns an iterator allowing to go through all key/value
       * pairs contained in this object.
       *
       * @returns {function}
       */
      USPProto.entries = USPProto.entries || function () {
        var items = [];
        this.forEach(function (item, name) {
          items.push([name, item]);
        });
        return makeIterator(items);
      };

      if (iterable) {
        USPProto[self.Symbol.iterator] = USPProto[self.Symbol.iterator] || USPProto.entries;
      }

      function encode(str) {
        var replace = {
          '!': '%21',
          "'": '%27',
          '(': '%28',
          ')': '%29',
          '~': '%7E',
          '%20': '+',
          '%00': '\x00'
        };
        return encodeURIComponent(str).replace(/[!'\(\)~]|%20|%00/g, function (match) {
          return replace[match];
        });
      }

      function decode(str) {
        return str.replace(/[ +]/g, '%20').replace(/(%[a-f0-9]{2})+/gi, function (match) {
          return decodeURIComponent(match);
        });
      }

      function makeIterator(arr) {
        var iterator = {
          next: function next() {
            var value = arr.shift();
            return { done: value === undefined, value: value };
          }
        };

        if (iterable) {
          iterator[self.Symbol.iterator] = function () {
            return iterator;
          };
        }

        return iterator;
      }

      function parseToDict(search) {
        var dict = {};

        if (typeof search === 'object') {
          // if `search` is an array, treat it as a sequence
          if (isArray(search)) {
            for (var i = 0; i < search.length; i++) {
              var item = search[i];
              if (isArray(item) && item.length === 2) {
                appendTo(dict, item[0], item[1]);
              } else {
                throw new TypeError("Failed to construct 'URLSearchParams': Sequence initializer must only contain pair elements");
              }
            }
          } else {
            for (var key in search) {
              if (search.hasOwnProperty(key)) {
                appendTo(dict, key, search[key]);
              }
            }
          }
        } else {
          // remove first '?'
          if (search.indexOf('?') === 0) {
            search = search.slice(1);
          }

          var pairs = search.split('&');
          for (var j = 0; j < pairs.length; j++) {
            var value = pairs[j],
                index = value.indexOf('=');

            if (-1 < index) {
              appendTo(dict, decode(value.slice(0, index)), decode(value.slice(index + 1)));
            } else {
              if (value) {
                appendTo(dict, decode(value), '');
              }
            }
          }
        }

        return dict;
      }

      function appendTo(dict, name, value) {
        var val = typeof value === 'string' ? value : value !== null && value !== undefined && typeof value.toString === 'function' ? value.toString() : JSON.stringify(value);

        // #47 Prevent using `hasOwnProperty` as a property name
        if (hasOwnProperty(dict, name)) {
          dict[name].push(val);
        } else {
          dict[name] = [val];
        }
      }

      function isArray(val) {
        return !!val && '[object Array]' === Object.prototype.toString.call(val);
      }

      function hasOwnProperty(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      }
    })(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this);
  }

  /**
   * Polyfill for the .closest() method on an Element
   * Needed for IE11
   */

  _export('URLSearchParamsPolyfill', URLSearchParamsPolyfill);

  function closestPolyfill() {
    if (!Element.prototype.matches) {
      Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    }

    if (!Element.prototype.closest) {
      Element.prototype.closest = function (s) {
        var el = this;
        if (!document.documentElement.contains(el)) {
          return null;
        }

        do {
          if (el.matches(s)) {
            return el;
          }

          el = el.parentElement;
        } while (el !== null);

        return null;
      };
    }
  }

  /**
   * Polyfill for browsers that do not support the CustomEvent constructor
   * Needed for IE11
   * @see  https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent#Browser_compatibility
   */

  _export('closestPolyfill', closestPolyfill);

  function customEventPolyfill() {
    if (typeof window.CustomEvent === 'function') {
      return false;
    }

    function CustomEvent(event) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { bubbles: false, cancelable: false, detail: undefined };

      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    }

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
  }

  /**
   * Polyfill for browsers that do not support the .append() method
   * Needed for IE11
   * @see  https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent#Browser_compatibility
   */

  _export('customEventPolyfill', customEventPolyfill);

  function appendPolyfill() {
    [Element.prototype, Document.prototype, DocumentFragment.prototype].forEach(function (item) {
      if (item.hasOwnProperty('append')) {
        return;
      }
      Object.defineProperty(item, 'append', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function append() {
          var argArr = Array.prototype.slice.call(arguments),
              docFrag = document.createDocumentFragment();

          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });

          this.appendChild(docFrag);
        }
      });
    });
  }

  /**
   * Polyfill for browsers that do not support the .remove() method
   * Needed for IE11
   * @see  https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove
   */

  _export('appendPolyfill', appendPolyfill);

  function removePolyfill(arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty('remove')) {
        return;
      }
      Object.defineProperty(item, 'remove', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function remove() {
          if (this.parentNode === null) {
            return;
          }
          this.parentNode.removeChild(this);
        }
      });
    });
  }

  /**
   * Polyfill for browsers that do not support the .forEach() method
   * Needed for IE11
   * @see  https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Polyfill
   */

  _export('removePolyfill', removePolyfill);

  function forEachPolyfill() {
    if (window.NodeList && !NodeList.prototype.forEach) {
      NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
          callback.call(thisArg, this[i], i, this);
        }
      };
    }
  }

  /**
   * Polyfill for browsers that do not support classList
   * Needed for IE11
   * @see  https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
   */

  _export('forEachPolyfill', forEachPolyfill);

  function classListPolyfill() {
    /*
     * classList.js: Cross-browser full element.classList implementation.
     * 1.2.20171210
     *
     * By Eli Grey, http://eligrey.com
     * License: Dedicated to the public domain.
     *   See https://github.com/eligrey/classList.js/blob/master/LICENSE.md
     */

    /*global self, document, DOMException */

    /*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */

    if ('document' in self) {
      // Full polyfill for browsers with no classList support
      // Including IE < Edge missing SVGElement.classList
      if (!('classList' in document.createElement('_')) || document.createElementNS && !('classList' in document.createElementNS('http://www.w3.org/2000/svg', 'g'))) {
        (function (view) {
          'use strict';

          if (!('Element' in view)) return;

          var classListProp = 'classList',
              protoProp = 'prototype',
              elemCtrProto = view.Element[protoProp],
              objCtr = Object,
              strTrim = String[protoProp].trim || function () {
            return this.replace(/^\s+|\s+$/g, '');
          },
              arrIndexOf = Array[protoProp].indexOf || function (item) {
            var i = 0,
                len = this.length;
            for (; i < len; i++) {
              if (i in this && this[i] === item) {
                return i;
              }
            }
            return -1;
          },


          // Vendors: please allow content code to instantiate DOMExceptions
          DOMEx = function DOMEx(type, message) {
            this.name = type;
            this.code = DOMException[type];
            this.message = message;
          },
              checkTokenAndGetIndex = function checkTokenAndGetIndex(classList, token) {
            if (token === '') {
              throw new DOMEx('SYNTAX_ERR', 'The token must not be empty.');
            }
            if (/\s/.test(token)) {
              throw new DOMEx('INVALID_CHARACTER_ERR', 'The token must not contain space characters.');
            }
            return arrIndexOf.call(classList, token);
          },
              ClassList = function ClassList(elem) {
            var trimmedClasses = strTrim.call(elem.getAttribute('class') || ''),
                classes = trimmedClasses ? trimmedClasses.split(/\s+/) : [],
                i = 0,
                len = classes.length;
            for (; i < len; i++) {
              this.push(classes[i]);
            }
            this._updateClassName = function () {
              elem.setAttribute('class', this.toString());
            };
          },
              classListProto = ClassList[protoProp] = [],
              classListGetter = function classListGetter() {
            return new ClassList(this);
          };
          // Most DOMException implementations don't allow calling DOMException's toString()
          // on non-DOMExceptions. Error's toString() is sufficient here.
          DOMEx[protoProp] = Error[protoProp];
          classListProto.item = function (i) {
            return this[i] || null;
          };
          classListProto.contains = function (token) {
            return ~checkTokenAndGetIndex(this, token + '');
          };
          classListProto.add = function () {
            var tokens = arguments,
                i = 0,
                l = tokens.length,
                token,
                updated = false;
            do {
              token = tokens[i] + '';
              if (!~checkTokenAndGetIndex(this, token)) {
                this.push(token);
                updated = true;
              }
            } while (++i < l);

            if (updated) {
              this._updateClassName();
            }
          };
          classListProto.remove = function () {
            var tokens = arguments,
                i = 0,
                l = tokens.length,
                token,
                updated = false,
                index;
            do {
              token = tokens[i] + '';
              index = checkTokenAndGetIndex(this, token);
              while (~index) {
                this.splice(index, 1);
                updated = true;
                index = checkTokenAndGetIndex(this, token);
              }
            } while (++i < l);

            if (updated) {
              this._updateClassName();
            }
          };
          classListProto.toggle = function (token, force) {
            var result = this.contains(token),
                method = result ? force !== true && 'remove' : force !== false && 'add';
            if (method) {
              this[method](token);
            }

            if (force === true || force === false) {
              return force;
            } else {
              return !result;
            }
          };
          classListProto.replace = function (token, replacement_token) {
            var index = checkTokenAndGetIndex(token + '');
            if (~index) {
              this.splice(index, 1, replacement_token);
              this._updateClassName();
            }
          };
          classListProto.toString = function () {
            return this.join(' ');
          };

          if (objCtr.defineProperty) {
            var classListPropDesc = {
              get: classListGetter,
              enumerable: true,
              configurable: true
            };
            try {
              objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
            } catch (ex) {
              // IE 8 doesn't support enumerable:true
              // adding undefined to fight this issue https://github.com/eligrey/classList.js/issues/36
              // modernie IE8-MSW7 machine has IE8 8.0.6001.18702 and is affected
              if (ex.number === undefined || ex.number === -0x7ff5ec54) {
                classListPropDesc.enumerable = false;
                objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
              }
            }
          } else if (objCtr[protoProp].__defineGetter__) {
            elemCtrProto.__defineGetter__(classListProp, classListGetter);
          }
        })(self);
      }

      // There is full or partial native classList support, so just check if we need
      // to normalize the add/remove and toggle APIs.

      (function () {
        'use strict';

        var testElement = document.createElement('_');

        testElement.classList.add('c1', 'c2');

        // Polyfill for IE 10/11 and Firefox <26, where classList.add and
        // classList.remove exist but support only one argument at a time.
        if (!testElement.classList.contains('c2')) {
          var createMethod = function createMethod(method) {
            var original = DOMTokenList.prototype[method];

            DOMTokenList.prototype[method] = function (token) {
              var i,
                  len = arguments.length;

              for (i = 0; i < len; i++) {
                token = arguments[i];
                original.call(this, token);
              }
            };
          };
          createMethod('add');
          createMethod('remove');
        }

        testElement.classList.toggle('c3', false);

        // Polyfill for IE 10 and Firefox <24, where classList.toggle does not
        // support the second argument.
        if (testElement.classList.contains('c3')) {
          var _toggle = DOMTokenList.prototype.toggle;

          DOMTokenList.prototype.toggle = function (token, force) {
            if (1 in arguments && !this.contains(token) === !force) {
              return force;
            } else {
              return _toggle.call(this, token);
            }
          };
        }

        // replace() polyfill
        if (!('replace' in document.createElement('_').classList)) {
          DOMTokenList.prototype.replace = function (token, replacement_token) {
            var tokens = this.toString().split(' '),
                index = tokens.indexOf(token + '');
            if (~index) {
              tokens = tokens.slice(index);
              this.remove.apply(this, tokens);
              this.add(replacement_token);
              this.add.apply(this, tokens.slice(1));
            }
          };
        }

        testElement = null;
      })();
    }
  }

  /**
   * Initialize polyfills
   * @return {void}
   */

  _export('classListPolyfill', classListPolyfill);

  return {
    setters: [],
    execute: function () {
      (function initPolyfills() {
        URLSearchParamsPolyfill();
        closestPolyfill();
        customEventPolyfill();
        appendPolyfill();
        removePolyfill([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
        forEachPolyfill();
        classListPolyfill();
      })();
    }
  };
});
$__System.register('a', ['b', 'c', 'e', '159', '15a', '15b'], function (_export, _context) {
  "use strict";

  var FontFaceObserver;
  return {
    setters: [function (_b) {}, function (_c) {}, function (_e) {}, function (_) {}, function (_a) {
      FontFaceObserver = _a.default;
    }, function (_b2) {}],
    execute: function () {
      /**
       * The polyfill bundle
       * @module polyfill
       */
      window.FontFaceObserver = FontFaceObserver;
    }
  };
});
})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define([], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory();
  else
    factory();
});
//# sourceMappingURL=polyfill.js.map