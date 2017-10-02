/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _main = __webpack_require__(1);

var _main2 = _interopRequireDefault(_main);

var _data = __webpack_require__(2);

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(3);

var widget = new _main2.default(_data2.default);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaults = {
  img: '',
  selector: 'content',
  width: '480px',
  height: '300px',
  bgImg: '',
  markers: [{
    type: '%',
    x: '140',
    y: '140',
    h2: 'Title',
    h3: 'Subtitle',
    p: 'paragraph',
    img: 'path to image here!'
  }]
};

var Widget = function () {
  function Widget() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Widget);

    this.opts = this.applyConfig(defaults, opts);

    this.init();
  }

  // Just merges the user config. with defaults.


  _createClass(Widget, [{
    key: 'applyConfig',
    value: function applyConfig(base, user) {
      return Object.assign(defaults, user);
    }

    // starts everything!

  }, {
    key: 'init',
    value: function init() {
      // creates the Widget DOM
      this.createDom();
      // adds event listeners
      this.createEventListeners();
    }

    //  get base element in the dom and creates its content dynamically.

  }, {
    key: 'createDom',
    value: function createDom() {
      var _this = this;

      // find node
      var baseSelector = '.' + this.opts.selector;
      var node = document.querySelector(baseSelector);
      if (!node) {
        Error();
      }

      // Create Elements
      var parentDiv = this.createElement('div', 'marker-widget'); // parent div
      var markerDiv = this.createElement('div', 'markers-container'); // markers container
      var markerList = this.createElement('ul', 'marker-list'); // marker list as ul
      var bigImg = this.createElement('img', 'big-img');
      var listFragment = document.createDocumentFragment();

      bigImg.src = this.opts.img;

      // create markers list using constructor data
      this.opts.markers.map(function (data) {
        var marker = _this.createElement('li', 'marker');
        var markerContent = _this.createElement('div', 'marker-content');
        var markerTooltip = _this.createElement('div', 'marker-tooltip');
        var markerIcon = _this.createElement('div', 'marker-icon');

        var markerTitle = _this.createElement('h2', 'm-title');
        var markerSub = _this.createElement('h3', 'm-sub');
        var markerText = _this.createElement('p', 'm-text');
        var markerImg = _this.createElement('div', 'm-img');
        var markerClose = _this.createElement('button', 'm-close');

        // add coordinates coming from json
        marker.style.left = '' + data.x + data.type;
        marker.style.top = '' + data.y + data.type;

        // add data coming from json inside each tag
        markerTitle.innerText = data.h2;
        markerSub.innerText = data.h3;
        markerText.innerText = data.p;
        markerImg.style.backgroundImage = 'url(' + data.img + ')';
        markerTooltip.innerText = data.tooltip;
        markerClose.innerText = 'close';

        // create the structure of each marker dynamically
        var markerFragment = document.createDocumentFragment();
        markerFragment.append(markerTitle, markerSub, markerImg, markerText, markerClose);
        markerContent.append(markerFragment);
        marker.appendChild(markerIcon);
        marker.appendChild(markerContent);
        marker.appendChild(markerTooltip);

        listFragment.appendChild(marker);
      });

      // insert all the elements into dom
      markerList.appendChild(listFragment);
      markerDiv.appendChild(markerList);
      parentDiv.appendChild(markerDiv);
      parentDiv.appendChild(bigImg);
      node.append(parentDiv);
    }
  }, {
    key: 'createEventListeners',
    value: function createEventListeners() {
      // adds a click event and a class toggler to the markers
      var elements = document.querySelectorAll('.marker-widget .marker');
      for (var i = 0; i < elements.length; i++) {
        elements[i].querySelector('.marker-icon').addEventListener('click', function (el) {
          el.preventDefault();

          // first of all, remove all active markers
          Array.from(elements).map(function (i) {
            i.classList.remove('active');
          });
          // then add an 'active' class just to this clicked element
          this.parentElement.classList.toggle('active');
        });

        // adds a click event to close button inside each marker
        elements[i].querySelector('.m-close').addEventListener('click', function (el) {
          el.preventDefault();
          this.parentElement.parentElement.classList.toggle('active');
        });

        // adds hover dynamically because hover effect look buggy if only css is used 
        this.multipleEventsListeners(elements[i].querySelector('.marker-icon'), 'mouseover mouseout', function () {
          this.parentElement.classList.toggle('hovered');
        });
      }
    }

    // creates elements in a smart way

  }, {
    key: 'createElement',
    value: function createElement(selector) {
      var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var elem = document.createElement(selector);
      if (className != null) {
        elem.className = className;
      }
      return elem;
    }

    /* 
      helps to create multiple events listeners
      that will use the same logic
    */

  }, {
    key: 'multipleEventsListeners',
    value: function multipleEventsListeners(elem, events, func) {
      var event = events.split(' ');
      for (var i = 0; i < event.length; i++) {
        elem.addEventListener(event[i], func, false);
      }
    }
  }]);

  return Widget;
}();

exports.default = Widget;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = {"img":"https://www.thesun.co.uk/wp-content/uploads/2016/10/nintchdbpict0002098088542.jpg?w=960","markers":[{"tooltip":"Mercury","number":1,"type":"%","x":"12.5","y":"49","h2":"Mercury","h3":"The heatest planet","p":"Mercury (0.4 AU from the Sun) is the closest planet to the Sun and the smallest planet in the Solar System (0.055 Earth masses). Mercury has no natural satellites; besides impact craters, its only known geological features are lobed ridges or rupes that were probably produced by a period of contraction early in its history.","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Mercury_Globe-MESSENGER_mosaic_centered_at_0degN-0degE.jpg/220px-Mercury_Globe-MESSENGER_mosaic_centered_at_0degN-0degE.jpg"},{"tooltip":"Asteroid belt","number":2,"type":"%","x":"27","y":"40","h2":"Asteroid belt","h3":"The circumstellar disc","p":"The asteroid belt is the circumstellar disc in the Solar System located roughly between the orbits of the planets Mars and Jupiter. It is occupied by numerous irregularly shaped bodies called asteroids or minor planets. The asteroid belt is also termed the main asteroid belt or main belt to distinguish it from other asteroid populations in the Solar System.","img":"https://upload.wikimedia.org/wikipedia/commons/f/f3/InnerSolarSystem-en.png"},{"tooltip":"Saturn","number":3,"type":"%","x":"57","y":"30","h2":"Saturn","h3":"The ring system","p":"Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth. Although it has only one-eighth the average density of Earth, with its larger volume Saturn is just over 95 times more massive.","img":"https://www.universetoday.com/wp-content/uploads/2009/12/saturn20131017-e1438109547362.jpg"},{"tooltip":"Kuiper belt","number":4,"type":"%","x":"80","y":"9","h2":"Kuiper belt","h3":"The outer belt","p":"The Kuiper Belt is a disc-shaped region of icy bodies - including dwarf planets such as Pluto - and comets beyond the orbit of Neptune. It extends from about 30 to 55 AU and is probably populated with hundreds of thousands of icy bodies larger than 100 km (62 miles) across and an estimated trillion or more comets.","img":"https://upload.wikimedia.org/wikipedia/commons/5/5b/Kuiper_belt_plot_objects_of_outer_solar_system.png"}]}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(6)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/stylus-loader/index.js??ref--3-2!./style.styl", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/stylus-loader/index.js??ref--3-2!./style.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, "@-moz-keyframes show-tooltip {\n  0% {\n    opacity: 0;\n    bottom: 1rem;\n  }\n  100% {\n    opacity: 1;\n    bottom: 2.4rem;\n  }\n}\n@-webkit-keyframes show-tooltip {\n  0% {\n    opacity: 0;\n    bottom: 1rem;\n  }\n  100% {\n    opacity: 1;\n    bottom: 2.4rem;\n  }\n}\n@-o-keyframes show-tooltip {\n  0% {\n    opacity: 0;\n    bottom: 1rem;\n  }\n  100% {\n    opacity: 1;\n    bottom: 2.4rem;\n  }\n}\n@keyframes show-tooltip {\n  0% {\n    opacity: 0;\n    bottom: 1rem;\n  }\n  100% {\n    opacity: 1;\n    bottom: 2.4rem;\n  }\n}\n@-moz-keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-o-keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-moz-keyframes card-slide {\n  0% {\n    display: block;\n    left: 1.5rem;\n    opacity: 0;\n  }\n  100% {\n    left: 4rem;\n    opacity: 1;\n  }\n}\n@-webkit-keyframes card-slide {\n  0% {\n    display: block;\n    left: 1.5rem;\n    opacity: 0;\n  }\n  100% {\n    left: 4rem;\n    opacity: 1;\n  }\n}\n@-o-keyframes card-slide {\n  0% {\n    display: block;\n    left: 1.5rem;\n    opacity: 0;\n  }\n  100% {\n    left: 4rem;\n    opacity: 1;\n  }\n}\n@keyframes card-slide {\n  0% {\n    display: block;\n    left: 1.5rem;\n    opacity: 0;\n  }\n  100% {\n    left: 4rem;\n    opacity: 1;\n  }\n}\n@-moz-keyframes line-slide {\n  0% {\n    width: 1rem;\n    left: -1rem;\n  }\n  100% {\n    width: 3rem;\n  }\n}\n@-webkit-keyframes line-slide {\n  0% {\n    width: 1rem;\n    left: -1rem;\n  }\n  100% {\n    width: 3rem;\n  }\n}\n@-o-keyframes line-slide {\n  0% {\n    width: 1rem;\n    left: -1rem;\n  }\n  100% {\n    width: 3rem;\n  }\n}\n@keyframes line-slide {\n  0% {\n    width: 1rem;\n    left: -1rem;\n  }\n  100% {\n    width: 3rem;\n  }\n}\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n  min-height: 100%;\n}\nbody {\n  background-color: #d4d4d4;\n  padding: 0;\n  margin: 0;\n  font-family: 'Ubuntu', sans-serif;\n}\na,\nbutton {\n  outline: medium none;\n}\n.main-wrapper {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n.content {\n  position: relative;\n  max-width: 60rem;\n  width: 100%;\n  height: auto;\n}\n.marker-widget {\n  border: 2px solid $black;\n  color: #3b5060;\n}\n.marker-widget .big-img {\n  width: 100%;\n  margin: 0 auto;\n}\n.marker-widget .markers-container {\n  z-index: 1;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n}\n.marker-widget .markers-container ul.marker-list {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  list-style: none outside none;\n  padding: 0;\n  margin: 0;\n}\n.marker-widget .markers-container .marker {\n  position: absolute;\n  display: block;\n}\n.marker-widget .markers-container .marker:hover .marker-icon {\n  transition: box-shadow 0.5s ease-in-out;\n  z-index: 5;\n}\n.marker-widget .markers-container .marker:hover .marker-icon:before {\n  opacity: 1;\n}\n.marker-widget .markers-container .marker.hovered .marker-tooltip {\n  display: block;\n  animation: show-tooltip 0.2s ease-in-out;\n}\n.marker-widget .markers-container .marker.active .marker-icon {\n  background-color: #ff6165;\n}\n.marker-widget .markers-container .marker.active .marker-icon:before {\n  opacity: 1;\n}\n.marker-widget .markers-container .marker.active .marker-icon:after {\n  display: none;\n}\n.marker-widget .markers-container .marker.active .marker-tooltip {\n  display: none;\n}\n.marker-widget .markers-container .marker.active .marker-content {\n  display: block;\n}\n.marker-widget .markers-container .marker .marker-tooltip {\n  border: 2px solid #61ffc6;\n  padding: 0.5em 1rem;\n  font-size: 13px;\n  background-color: #fff;\n  position: absolute;\n  left: 50%;\n  bottom: 2.4rem;\n  transform: translateX(-50%);\n  z-index: 1;\n  border-radius: 1.6rem;\n  box-shadow: 0 0 8px rgba(255,255,255,0.5);\n  text-align: center;\n}\n.marker-widget .markers-container .marker .marker-content,\n.marker-widget .markers-container .marker .marker-tooltip {\n  display: none;\n}\n.marker-widget .markers-container .marker .marker-content {\n  background-color: #fff;\n  border: 4px solid #61ffc6;\n  padding: 2rem 2rem 1rem;\n  position: absolute;\n  left: 4rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 15rem;\n  animation: card-slide 0.3s ease-out;\n  box-shadow: 0 0 8px rgba(0,0,0,0.5);\n  z-index: 50;\n}\n.marker-widget .markers-container .marker .marker-content:before {\n  content: '';\n  display: block;\n  position: absolute;\n  left: -3rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 3rem;\n  height: 2px;\n  background-image: linear-gradient(to right, #ff6165, #61ffc6);\n  animation: line-slide 0.3s ease-out;\n}\n.marker-widget .markers-container .marker .marker-content .m-title,\n.marker-widget .markers-container .marker .marker-content .m-sub,\n.marker-widget .markers-container .marker .marker-content .m-text {\n  margin-top: 0;\n}\n.marker-widget .markers-container .marker .marker-content .m-title,\n.marker-widget .markers-container .marker .marker-content .m-sub {\n  color: #ff6165;\n}\n.marker-widget .markers-container .marker .marker-content .m-title {\n  font-size: 20px;\n}\n.marker-widget .markers-container .marker .marker-content .m-sub {\n  font-size: 1rem;\n  font-weight: normal;\n  padding-bottom: 1.2rem;\n  border-bottom: 1px solid #61ffc6;\n}\n.marker-widget .markers-container .marker .marker-content .m-img {\n  position: absolute;\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  right: 2rem;\n  top: 2rem;\n  width: 60px;\n  height: 60px;\n  background-color: #78d9b6;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.marker-widget .markers-container .marker .marker-content .m-text {\n  font-size: 14px;\n  overflow-y: auto;\n  line-height: 22px;\n  margin-bottom: 2rem;\n}\n.marker-widget .markers-container .marker .marker-icon {\n  cursor: pointer;\n  box-shadow: 0 0 12px rgba(0,0,0,0.6);\n  width: 1.5rem;\n  height: 1.5rem;\n  background-color: #61ffc6;\n  border-radius: 50%;\n  z-index: 2;\n}\n.marker-widget .markers-container .marker .marker-icon:before {\n  content: '';\n  display: block;\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  top: 50%;\n  left: 50%;\n  opacity: 0;\n  transform: translateX(-50%) translateY(-50%);\n  background-color: #fff;\n  border-radius: 50%;\n  transition: opacity 0.5s ease-in-out;\n  z-index: 3;\n}\n.marker-widget .markers-container .marker .marker-icon:after {\n  content: '';\n  display: block;\n  position: absolute;\n  width: 0;\n  height: 0;\n  left: 50%;\n  bottom: -5px;\n  transform: translateX(-50%);\n  border-style: solid;\n  border-width: 7px 6.5px 0 6.5px;\n  border-color: #61ffc6 transparent transparent transparent;\n  z-index: 3;\n}\n.marker-widget .markers-container .marker .m-close {\n  cursor: pointer;\n  height: 2rem;\n  line-height: 1rem;\n  border: 2px solid #78d9b6;\n  background-color: #fff;\n  color: #78d9b6;\n  border-radius: 1.4em;\n  display: inline-block;\n  padding: 0 1.4rem;\n  font-size: 15px;\n  transition: all 0.2s ease-in-out;\n}\n.marker-widget .markers-container .marker .m-close:hover {\n  box-shadow: 0 4px 8px rgba(120,217,182,0.4);\n  padding: 0 1.6rem;\n}\n", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(7);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ })
/******/ ]);