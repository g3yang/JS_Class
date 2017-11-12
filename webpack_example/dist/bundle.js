var ui =
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["getCircleArea"] = getCircleArea;
/* harmony export (immutable) */ __webpack_exports__["getRectArea"] = getRectArea;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Circle__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Rect__ = __webpack_require__(2);



function getCircleArea() {
    let r = parseInt(document.getElementById('radius').value);
    let circle = new __WEBPACK_IMPORTED_MODULE_0__Circle__["a" /* default */](r);
    document.getElementById('circleArea').innerHTML = circle.getArea();
}

function getRectArea() {
    let len = parseInt(document.getElementById('len').value);
    let width = parseInt(document.getElementById('width').value);
    let rect = new __WEBPACK_IMPORTED_MODULE_1__Rect__["a" /* default */](len, width);
    document.getElementById('rectArea').innerHTML = rect.getArea();
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Circle {
    constructor(r) {
        this.r = r;
    }

    getArea() {
        return Math.PI * Math.pow(this.r, 2);
    }

    getPerimeter() {
        return 2 * Math.PI * this.r;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Circle;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Rect {
    constructor(len, width) {
        this.len = len;
        this.width = width;
    }

    getArea() {
        return this.len * this.width;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Rect;


/***/ })
/******/ ]);