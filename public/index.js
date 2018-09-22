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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: ImageCompressor, getImageSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ImageCompressor\", function() { return ImageCompressor; });\n/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./size */ \"./lib/size.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getImageSize\", function() { return _size__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\nconst DEFUALT_SCALE = 70;\nconst DEFAULT_QUALITY = 70;\n\nclass ImageCompressor {\n  constructor(props) {\n    if (!props) {\n      throw \"ImageCompressor : Please Set The Requirement Properties : [ originalImage , onSuccess ]\";\n    }\n\n    this.props = props;\n    this.props.scale = props.scale || DEFUALT_SCALE;\n    this.props.quality = props.scale || DEFUALT_SCALE;\n\n    if (!props.originalImage) {\n      throw \"ImageCompressor : Please set originalImage\";\n    }\n\n    if (!props.onSuccess) {\n      throw \"ImageCompressor :  Please Set OnSucess function to get the compressed image\";\n\n      this.props.onSuccess = () => {};\n    }\n\n    if (!props.holdCompress) {\n      this.compress();\n    }\n  }\n  /*\n      Compress The Image\n  */\n\n\n  compress() {\n    let canvas = document.createElement(\"canvas\");\n    let ctx = canvas.getContext(\"2d\");\n    let img = new Image();\n\n    img.onload = () => {\n      let scale = this.props.scale / 100;\n      let width = img.width * scale;\n      let height = img.height * scale;\n      canvas.setAttribute(\"width\", width);\n      canvas.setAttribute(\"height\", height);\n      ctx.drawImage(img, 0, 0, width, height);\n      let quality = this.props.quality / 100;\n      const output = {\n        original: this.props.originalImage,\n        compressed: canvas.toDataURL(\"image/jpeg\", quality)\n      };\n      this.props.onSuccess(output);\n    };\n\n    img.src = this.props.originalImage;\n  } // this function will be used if the variable holdCompress is set to true\n\n\n  startCompress() {\n    this.compress();\n  }\n\n}\n\n\n\n//# sourceURL=webpack:///./lib/index.js?");

/***/ }),

/***/ "./lib/size.js":
/*!*********************!*\
  !*** ./lib/size.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst dataURLtoBlob = dataURL => {\n  var binary = atob(dataURL.split(\",\")[1]);\n  var array = [];\n\n  for (var i = 0; i < binary.length; i++) {\n    array.push(binary.charCodeAt(i));\n  }\n\n  return new Blob([new Uint8Array(array)], {\n    type: \"image/png\"\n  });\n};\n\nconst getSize = base64 => {\n  let fileCompressed = dataURLtoBlob(base64);\n  return Math.round(fileCompressed.size / 1000);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getSize);\n\n//# sourceURL=webpack:///./lib/size.js?");

/***/ }),

/***/ 0:
/*!**********************!*\
  !*** multi index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! index.js */\"./lib/index.js\");\n\n\n//# sourceURL=webpack:///multi_index.js?");

/***/ })

/******/ });