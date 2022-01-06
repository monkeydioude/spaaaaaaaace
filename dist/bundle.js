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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_Canvas_Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/Canvas/Canvas */ "./src/Canvas/Canvas.ts");
/* harmony import */ var _src_Planet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/Planet */ "./src/Planet.ts");
/* harmony import */ var _src_Scene_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/Scene/index */ "./src/Scene/index.ts");
/* harmony import */ var _src_Camera_Camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/Camera/Camera */ "./src/Camera/Camera.ts");
/* harmony import */ var _src_Controls_Keyboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/Controls/Keyboard */ "./src/Controls/Keyboard.ts");
/* harmony import */ var _src_Config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/Config */ "./src/Config.ts");
/* harmony import */ var _src_PlanetTrail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/PlanetTrail */ "./src/PlanetTrail.ts");
/* harmony import */ var _planets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./planets */ "./planets.ts");
/* harmony import */ var _src_Physic_Vector2D__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/Physic/Vector2D */ "./src/Physic/Vector2D.ts");









const main = (delta, boards) => {
    // cTime += delta
    // if (cTime > Config.dpf) {
    let nBefore = window.performance.now();
    boards.forEach(b => {
        b.update(delta * _src_Config__WEBPACK_IMPORTED_MODULE_5__["default"].gameSpeed);
    });
    let nAfter = window.performance.now();
    // cTime -= Config.dpf
    // }
    setTimeout(() => main(_src_Config__WEBPACK_IMPORTED_MODULE_5__["default"].milliSecondsPerFrame, boards), (delta * 1000) - (nAfter - nBefore));
};
document.onreadystatechange = function () {
    if (document.readyState != "complete") {
        return;
    }
    const camera = new _src_Camera_Camera__WEBPACK_IMPORTED_MODULE_3__["default"](_src_Config__WEBPACK_IMPORTED_MODULE_5__["default"].spaceW / 2, _src_Config__WEBPACK_IMPORTED_MODULE_5__["default"].spaceH / 2, _src_Config__WEBPACK_IMPORTED_MODULE_5__["default"].zoomLevel);
    const bgBoard = new _src_Canvas_Canvas__WEBPACK_IMPORTED_MODULE_0__["default"](document.body.clientWidth, document.body.clientHeight, camera, "background");
    const planetBoard = new _src_Canvas_Canvas__WEBPACK_IMPORTED_MODULE_0__["default"](document.body.clientWidth, document.body.clientHeight, camera, "main");
    bgBoard.appendTo(document.body);
    planetBoard.appendTo(document.body);
    bgBoard.canvas.style.backgroundColor = "#000000";
    const planetScene = new _src_Scene_index__WEBPACK_IMPORTED_MODULE_2__["Scene"]("main");
    const keyboardControls = new _src_Controls_Keyboard__WEBPACK_IMPORTED_MODULE_4__["default"](camera, planetBoard);
    const planetsConfig = Object(_planets__WEBPACK_IMPORTED_MODULE_7__["default"])(planetBoard, camera);
    let planets = [];
    document.querySelector("body").addEventListener("keydown", keyboardControls.handleKeyboard.bind(keyboardControls));
    for (let i in planetsConfig) {
        const p = planetsConfig[i];
        const planet = new _src_Planet__WEBPACK_IMPORTED_MODULE_1__["default"](i, new _src_Physic_Vector2D__WEBPACK_IMPORTED_MODULE_8__["default"](p.pos.x, p.pos.y), p.radius, p.mass, p.color, p.velocity, planets);
        planetScene.addEntity(planet);
        planetScene.addEntity(new _src_PlanetTrail__WEBPACK_IMPORTED_MODULE_6__["default"](planet));
        planets.push(planet);
    }
    planetBoard.addEntity(planetScene);
    main(_src_Config__WEBPACK_IMPORTED_MODULE_5__["default"].milliSecondsPerFrame, [bgBoard, planetBoard]);
};


/***/ }),

/***/ "./planets.ts":
/*!********************!*\
  !*** ./planets.ts ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/Config */ "./src/Config.ts");
/* harmony import */ var _src_Unit_Distance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/Unit/Distance */ "./src/Unit/Distance.ts");
/* harmony import */ var _src_Physic_Vector2D__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/Physic/Vector2D */ "./src/Physic/Vector2D.ts");



/* harmony default export */ __webpack_exports__["default"] = ((canvas, camera) => {
    const sun = {
        pos: new _src_Physic_Vector2D__WEBPACK_IMPORTED_MODULE_2__["default"](Object(_src_Unit_Distance__WEBPACK_IMPORTED_MODULE_1__["pxToKilometre"])(camera.relativeX(camera.z * (canvas.canvas.width / 2))), Object(_src_Unit_Distance__WEBPACK_IMPORTED_MODULE_1__["pxToKilometre"])(camera.relativeY(camera.z * (canvas.canvas.height / 2)))),
        radius: Object(_src_Unit_Distance__WEBPACK_IMPORTED_MODULE_1__["pxToKilometre"])(120),
        mass: 1.9891e30,
        color: "orange",
        velocity: new _src_Physic_Vector2D__WEBPACK_IMPORTED_MODULE_2__["default"](0, 0)
    };
    const earth = {
        pos: new _src_Physic_Vector2D__WEBPACK_IMPORTED_MODULE_2__["default"](sun.pos.x - 147.59e6, sun.pos.y),
        radius: Object(_src_Unit_Distance__WEBPACK_IMPORTED_MODULE_1__["pxToKilometre"])(10),
        mass: 5.972e24,
        color: "skyblue",
        // velocity: new Vector2D(0, Config.earthSpeed).dot(new Vector2D(1/5, 4/5)),
        velocity: new _src_Physic_Vector2D__WEBPACK_IMPORTED_MODULE_2__["default"](0, _src_Config__WEBPACK_IMPORTED_MODULE_0__["default"].earthSpeed),
    };
    return {
        "sun41": sun,
    };
});


/***/ }),

/***/ "./src/Camera/Camera.ts":
/*!******************************!*\
  !*** ./src/Camera/Camera.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Camera; });
class Camera {
    constructor(x, y, z) {
        this.x = 0;
        this.y = 0;
        this.z = 1;
        this.x = x;
        this.y = y;
        this.z = z;
    }
    X(x) {
        return this.zTransform(x - this.x);
    }
    Y(y) {
        return this.zTransform(y - this.y);
    }
    zTransform(v) {
        return v * (1 / this.z);
    }
    relativeX(x) {
        return this.x + x;
    }
    relativeY(y) {
        return this.y + y;
    }
}


/***/ }),

/***/ "./src/Canvas/Canvas.ts":
/*!******************************!*\
  !*** ./src/Canvas/Canvas.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Canvas; });
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Context */ "./src/Canvas/Context.ts");
/* harmony import */ var _Entity_Node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Entity/Node */ "./src/Entity/Node.ts");


class Canvas extends _Entity_Node__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(width, height, camera, id) {
        super();
        this.id = id;
        this.entities = [];
        this.canvas = document.createElement("canvas");
        this.canvas.id = this.id;
        this.canvas.width = width;
        this.canvas.height = height;
        this.context = new _Context__WEBPACK_IMPORTED_MODULE_0__["default"](this.canvas.getContext("2d"), camera, this);
    }
    appendTo(element) {
        element.appendChild(this.canvas);
    }
    update(delta) {
        this.entities.forEach(e => {
            e.update(delta);
            e.draw(this.context, delta);
        });
    }
}


/***/ }),

/***/ "./src/Canvas/Context.ts":
/*!*******************************!*\
  !*** ./src/Canvas/Context.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Context; });
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Config */ "./src/Config.ts");

class Context {
    constructor(context, camera, canvas) {
        this.context = context;
        this.camera = camera;
        this.canvas = canvas;
    }
    draw(model) {
        this.context.beginPath();
        model.draw(this);
        this.context.stroke();
    }
    arc(x, y, r, as, ae, lineWidth = 1) {
        this.context.lineWidth = lineWidth;
        this.context.arc(this.camera.X(x), this.camera.Y(y), this.camera.zTransform(r), as, ae);
        return this;
    }
    write(text, lines) {
        const fs = text.getFontSize();
        const ff = text.getFontFamily();
        const c = text.getCoordinates();
        this.context.beginPath();
        this.context.font = `${_Config__WEBPACK_IMPORTED_MODULE_0__["default"].fontSize}px ${ff}`;
        lines.map((line, i) => {
            this.context.fillText(line, +c.x, +c.y + (fs * i));
        });
    }
    fillRect(x, y, w, h, color) {
        this.context.fillStyle = color;
        this.context.fillRect(this.camera.X(x), this.camera.Y(y), w, h);
        return this;
    }
    fill(color) {
        this.context.fillStyle = color;
        this.context.fill();
        return this;
    }
    line(fromX, fromY, toX, toY, color, lineWidth = 1) {
        this.context.lineWidth = lineWidth;
        this.context.strokeStyle = color;
        this.context.moveTo(this.camera.X(fromX), this.camera.Y(fromY));
        this.context.lineTo(this.camera.X(toX), this.camera.Y(toY));
        this.context.closePath();
        this.context.stroke();
    }
}


/***/ }),

/***/ "./src/Config.ts":
/*!***********************!*\
  !*** ./src/Config.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const cDuration = 0;
const fps = 60;
const milliSecondsPerFrame = 1 / fps;
let zoomLevel = 2.5;
let zoomMin = 0.1;
const zoomActionPow = 0.10;
const decalByMove = 25;
let maxPlanets = 4;
let planetsRadiusDef = { min: 3, max: 70 };
const planetsMinDist = 10;
const planetBaseSpeed = 40;
const spaceW = 10000;
const spaceH = 10000;
const decalX = spaceW / 2;
const decalY = spaceH / 2;
const distPow = 5;
const fontSize = 14;
let debug = null;
const earthSpeed = 29.78 * 100000 / 1.14; // km/s
const G = Math.pow(10, -11) * 6.674;
var PlayMode;
(function (PlayMode) {
    PlayMode[PlayMode["PLAY"] = 0] = "PLAY";
    PlayMode[PlayMode["PAUSE"] = 1] = "PAUSE";
})(PlayMode || (PlayMode = {}));
const mode = PlayMode.PLAY;
// const kmPerPx = 1.3e5
const kmPerPx = 1.8e5;
/* harmony default export */ __webpack_exports__["default"] = ({
    gameSpeed: 365 * 24 * 60 * 60 * 15000,
    // gameSpeed: 100,
    kmPerPx,
    kgPerPxDensity: 1200,
    G,
    cDuration,
    fps,
    zoomLevel,
    zoomActionPow,
    decalByMove,
    maxPlanets,
    planetsRadiusDef,
    planetsMinDist,
    planetBaseSpeed,
    spaceW,
    spaceH,
    decalX,
    decalY,
    distPow,
    fontSize,
    debug,
    PlayMode,
    mode,
    zoomMin,
    earthSpeed,
    milliSecondsPerFrame
});


/***/ }),

/***/ "./src/Controls/Keyboard.ts":
/*!**********************************!*\
  !*** ./src/Controls/Keyboard.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Keyboard; });
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Config */ "./src/Config.ts");

class Keyboard {
    constructor(camera, canvas) {
        this.camera = camera;
        this.canvas = canvas;
        this.actionByKeycode = {
            // 68: () => {debug.Toggle();},
            // 83: () => {mode = mode == PAUSE ? PLAY : PAUSE;},
            82: () => {
                this.camera.x = 0;
                this.camera.y = 0;
                this.camera.z = 1;
            },
            90: () => {
                if (this.camera.z <= _Config__WEBPACK_IMPORTED_MODULE_0__["default"].zoomMin) {
                    return;
                }
                this.camera.z -= _Config__WEBPACK_IMPORTED_MODULE_0__["default"].zoomActionPow;
            },
            88: () => {
                this.camera.z += _Config__WEBPACK_IMPORTED_MODULE_0__["default"].zoomActionPow;
            },
            37: () => {
                if (this.camera.x - _Config__WEBPACK_IMPORTED_MODULE_0__["default"].decalByMove <= 0) {
                    return;
                }
                this.camera.x -= _Config__WEBPACK_IMPORTED_MODULE_0__["default"].decalByMove;
            },
            38: () => {
                if (this.camera.y - _Config__WEBPACK_IMPORTED_MODULE_0__["default"].decalByMove <= 0) {
                    return;
                }
                this.camera.y -= _Config__WEBPACK_IMPORTED_MODULE_0__["default"].decalByMove;
            },
            39: () => {
                if (this.camera.x >= _Config__WEBPACK_IMPORTED_MODULE_0__["default"].spaceW) {
                    return;
                }
                this.camera.x += _Config__WEBPACK_IMPORTED_MODULE_0__["default"].decalByMove;
            },
            40: () => {
                if (this.camera.y >= _Config__WEBPACK_IMPORTED_MODULE_0__["default"].spaceH) {
                    return;
                }
                this.camera.y += _Config__WEBPACK_IMPORTED_MODULE_0__["default"].decalByMove;
            }
        };
    }
    handleKeyboard(event) {
        if (this.actionByKeycode == undefined ||
            !this.actionByKeycode[event.keyCode]) {
            return;
        }
        this.actionByKeycode[event.keyCode]();
    }
}


/***/ }),

/***/ "./src/Entity/Node.ts":
/*!****************************!*\
  !*** ./src/Entity/Node.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Node; });
class Node {
    constructor() {
        this.entities = [];
    }
    update(delta) {
        this.entities.forEach(e => e.update(delta));
    }
    draw(context, delta) {
        this.entities.forEach(e => e.draw(context, delta));
    }
    getEntities() {
        return this.entities;
    }
    addEntity(entity) {
        this.entities.push(entity);
        return this;
    }
}


/***/ }),

/***/ "./src/Model/Disc.ts":
/*!***************************!*\
  !*** ./src/Model/Disc.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Disc; });
/* harmony import */ var _Unit_Distance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Unit/Distance */ "./src/Unit/Distance.ts");

class Disc {
    constructor(coords, radius, color) {
        this.coords = coords;
        this.radius = radius;
        this.color = color;
    }
    draw(ctx) {
        ctx.arc(Object(_Unit_Distance__WEBPACK_IMPORTED_MODULE_0__["kilometreToPx"])(this.coords.x), Object(_Unit_Distance__WEBPACK_IMPORTED_MODULE_0__["kilometreToPx"])(this.coords.y), Object(_Unit_Distance__WEBPACK_IMPORTED_MODULE_0__["kilometreToPx"])(this.radius), 0, 2 * Math.PI);
        ctx.fill(this.color);
    }
    getCoordinates() {
        return this.coords;
    }
    setCoordinates(coords) {
        this.coords = coords;
    }
}


/***/ }),

/***/ "./src/Model/Line.ts":
/*!***************************!*\
  !*** ./src/Model/Line.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dot; });
/* harmony import */ var _Entity_Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Entity/Node */ "./src/Entity/Node.ts");
/* harmony import */ var _Unit_Distance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Unit/Distance */ "./src/Unit/Distance.ts");


class Dot extends _Entity_Node__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(from, to, color, lineWidth = 1) {
        super();
        this.from = from;
        this.to = to;
        this.color = color;
        this.lineWidth = lineWidth;
    }
    draw(ctx) {
        ctx.line(Object(_Unit_Distance__WEBPACK_IMPORTED_MODULE_1__["pxToKilometre"])(this.from.x), Object(_Unit_Distance__WEBPACK_IMPORTED_MODULE_1__["pxToKilometre"])(this.from.y), Object(_Unit_Distance__WEBPACK_IMPORTED_MODULE_1__["pxToKilometre"])(this.to.x), Object(_Unit_Distance__WEBPACK_IMPORTED_MODULE_1__["pxToKilometre"])(this.to.y), this.color, this.lineWidth);
    }
    getCoordinates() {
        return this.from;
    }
    setCoordinates(coords) {
        this.from = coords;
    }
}


/***/ }),

/***/ "./src/Physic/Gravity.ts":
/*!*******************************!*\
  !*** ./src/Physic/Gravity.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Config */ "./src/Config.ts");

const getForce = (a, b) => {
    // const dist = Geometry.getDistanceBetweenObjects(a.coords, b.coords)
    const r21_v = b.coords.sub(a.coords);
    const dist = Math.sqrt((r21_v.x * r21_v.x) + (r21_v.y * r21_v.y));
    const f = (_Config__WEBPACK_IMPORTED_MODULE_0__["default"].G * a.mass * b.mass) / (dist * dist);
    const f21_v = r21_v.divide(dist).dot(-f * -1);
    return f21_v;
};
/* harmony default export */ __webpack_exports__["default"] = ((a, b) => {
    return getForce(a, b).divide(a.mass);
});


/***/ }),

/***/ "./src/Physic/Vector2D.ts":
/*!********************************!*\
  !*** ./src/Physic/Vector2D.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vector2D; });
class Vector2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    sub(vec) {
        if (typeof vec === "number") {
            vec = new Vector2D(vec, vec);
        }
        return new Vector2D(this.x - vec.x, this.y - vec.y);
    }
    // dot product
    dot(vec) {
        if (typeof vec === "number") {
            vec = new Vector2D(vec, vec);
        }
        return new Vector2D(this.x * vec.x, this.y * vec.y);
    }
    sum(vec) {
        if (typeof vec === "number") {
            vec = new Vector2D(vec, vec);
        }
        return new Vector2D(this.x + vec.x, this.y + vec.y);
    }
    divide(vec) {
        if (typeof vec === "number") {
            vec = new Vector2D(vec, vec);
        }
        return new Vector2D(this.x / vec.x, this.y / vec.y);
    }
    // normalize allows to normalize the vector to
    // an other number. The held value should transform
    // the x, y values to the number 1 of the passed number
    normalize(number) {
        return this.dot(new Vector2D(number, number));
    }
    clone() {
        return new Vector2D(this.x, this.y);
    }
}


/***/ }),

/***/ "./src/Planet.ts":
/*!***********************!*\
  !*** ./src/Planet.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Planet; });
/* harmony import */ var _Model_Disc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Model/Disc */ "./src/Model/Disc.ts");
/* harmony import */ var _Physic_Gravity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Physic/Gravity */ "./src/Physic/Gravity.ts");
/* harmony import */ var _Entity_Node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Entity/Node */ "./src/Entity/Node.ts");



class Planet extends _Entity_Node__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor(id, coords, radius, mass, color, velocity, planets) {
        super();
        this.id = id;
        this.coords = coords;
        this.radius = radius;
        this.mass = mass;
        this.color = color;
        this.velocity = velocity;
        this.planets = planets;
        this.model = new _Model_Disc__WEBPACK_IMPORTED_MODULE_0__["default"](this.coords, this.radius, this.color);
    }
    update(delta) {
        if (this.id == "earth alors") {
            // console.log(this.coords)
        }
        for (let i in this.planets) {
            const other = this.planets[i];
            if (other.id == this.id) {
                continue;
            }
            const acc = Object(_Physic_Gravity__WEBPACK_IMPORTED_MODULE_1__["default"])(this, other);
            const accNormalized = acc.dot(delta);
            this.velocity = this.velocity.sum(accNormalized);
        }
        this.coords = this.coords.sum(this.velocity);
        this.model.coords = this.coords;
        super.update(delta);
    }
    draw(context) {
        context.draw(this.model);
        super.draw(context);
    }
    getCoordinates() {
        return this.coords;
    }
    setCoordinates(coords) {
        this.coords = coords;
    }
}


/***/ }),

/***/ "./src/PlanetTrail.ts":
/*!****************************!*\
  !*** ./src/PlanetTrail.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlanetTrail; });
/* harmony import */ var _Model_Line__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Model/Line */ "./src/Model/Line.ts");
/* harmony import */ var _Entity_Node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Entity/Node */ "./src/Entity/Node.ts");


class PlanetTrail extends _Entity_Node__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(planet) {
        super();
        this.planet = planet;
        this.maxTrails = 999;
        this.previousCoordinates = null;
        this.trails = [];
    }
    update(_) {
        if (this.trails.length == this.maxTrails) {
            this.trails.shift();
        }
        if (this.previousCoordinates !== null) {
            this.trails.push(new _Model_Line__WEBPACK_IMPORTED_MODULE_0__["default"](this.previousCoordinates, this.planet.getCoordinates().clone(), this.planet.color, 0.2));
        }
        this.previousCoordinates = this.planet.getCoordinates().clone();
    }
    draw(canvas) {
        this.trails.forEach(d => canvas.draw(d));
    }
}


/***/ }),

/***/ "./src/Scene/NoClear.ts":
/*!******************************!*\
  !*** ./src/Scene/NoClear.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NoClear; });
/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Scene */ "./src/Scene/Scene.ts");

class NoClear extends _Scene__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this.entities = [];
    }
    draw(context, delta) {
        this.entities.forEach(e => e.draw(context, delta));
    }
}


/***/ }),

/***/ "./src/Scene/Scene.ts":
/*!****************************!*\
  !*** ./src/Scene/Scene.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Scene; });
/* harmony import */ var _Entity_Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Entity/Node */ "./src/Entity/Node.ts");

class Scene extends _Entity_Node__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(id) {
        super();
        this.id = id;
        this.entities = [];
    }
    draw(context, delta) {
        context.context.clearRect(0, 0, context.canvas.canvas.width, context.canvas.canvas.height);
        this.entities.forEach(e => e.draw(context, delta));
        context.context.stroke();
    }
}


/***/ }),

/***/ "./src/Scene/index.ts":
/*!****************************!*\
  !*** ./src/Scene/index.ts ***!
  \****************************/
/*! exports provided: Scene, NoClear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Scene */ "./src/Scene/Scene.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return _Scene__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _NoClear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NoClear */ "./src/Scene/NoClear.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoClear", function() { return _NoClear__WEBPACK_IMPORTED_MODULE_1__["default"]; });






/***/ }),

/***/ "./src/Unit/Distance.ts":
/*!******************************!*\
  !*** ./src/Unit/Distance.ts ***!
  \******************************/
/*! exports provided: kilometreToPx, pxToKilometre */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kilometreToPx", function() { return kilometreToPx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pxToKilometre", function() { return pxToKilometre; });
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Config */ "./src/Config.ts");

const kilometreToPx = (distance) => {
    return distance / _Config__WEBPACK_IMPORTED_MODULE_0__["default"].kmPerPx;
};
const pxToKilometre = (px) => {
    return px * _Config__WEBPACK_IMPORTED_MODULE_0__["default"].kmPerPx;
};



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vcGxhbmV0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2FtZXJhL0NhbWVyYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2FudmFzL0NhbnZhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2FudmFzL0NvbnRleHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29udHJvbHMvS2V5Ym9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VudGl0eS9Ob2RlLnRzIiwid2VicGFjazovLy8uL3NyYy9Nb2RlbC9EaXNjLnRzIiwid2VicGFjazovLy8uL3NyYy9Nb2RlbC9MaW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9QaHlzaWMvR3Jhdml0eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGh5c2ljL1ZlY3RvcjJELnRzIiwid2VicGFjazovLy8uL3NyYy9QbGFuZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsYW5ldFRyYWlsLnRzIiwid2VicGFjazovLy8uL3NyYy9TY2VuZS9Ob0NsZWFyLnRzIiwid2VicGFjazovLy8uL3NyYy9TY2VuZS9TY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2NlbmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VuaXQvRGlzdGFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7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RUQsSUFBSSxDQUFDLE9BQWdCLEVBQUUsS0FBYztRQUNqQyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2xELE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDN0IsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7O0FDaEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJCO0FBQ0k7QUFLOUI7Ozs7Ozs7Ozs7Ozs7QUNORDtBQUFBO0FBQUE7QUFBQTtBQUE4QjtBQUU5QixNQUFNLGFBQWEsR0FBRyxDQUFDLFFBQWdCLEVBQVUsRUFBRTtJQUMvQyxPQUFPLFFBQVEsR0FBRywrQ0FBTSxDQUFDLE9BQU87QUFDcEMsQ0FBQztBQUVELE1BQU0sYUFBYSxHQUFHLENBQUMsRUFBVSxFQUFVLEVBQUU7SUFDekMsT0FBTyxFQUFFLEdBQUcsK0NBQU0sQ0FBQyxPQUFPO0FBQzlCLENBQUM7QUFFc0MiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC50c1wiKTtcbiIsImltcG9ydCBDYW52YXMgZnJvbSBcIi4vc3JjL0NhbnZhcy9DYW52YXNcIlxuaW1wb3J0IFBsYW5ldCBmcm9tIFwiLi9zcmMvUGxhbmV0XCJcbmltcG9ydCB7U2NlbmV9IGZyb20gXCIuL3NyYy9TY2VuZS9pbmRleFwiXG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuL3NyYy9DYW1lcmEvQ2FtZXJhXCJcbmltcG9ydCBLZXlib2FyZCBmcm9tIFwiLi9zcmMvQ29udHJvbHMvS2V5Ym9hcmRcIlxuaW1wb3J0IENvbmZpZyBmcm9tIFwiLi9zcmMvQ29uZmlnXCJcbmltcG9ydCBQbGFuZXRUcmFpbCBmcm9tIFwiLi9zcmMvUGxhbmV0VHJhaWxcIlxuaW1wb3J0IGdldFBsYW5ldHMgZnJvbSBcIi4vcGxhbmV0c1wiXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSBcIi4vc3JjL1BoeXNpYy9WZWN0b3IyRFwiXG5cbmNvbnN0IG1haW4gPSAoZGVsdGE6IG51bWJlciwgYm9hcmRzOiBDYW52YXNbXSkgPT4ge1xuICAgIC8vIGNUaW1lICs9IGRlbHRhXG4gICAgLy8gaWYgKGNUaW1lID4gQ29uZmlnLmRwZikge1xuICAgIGxldCBuQmVmb3JlID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpXG4gICAgYm9hcmRzLmZvckVhY2goYiA9PiB7XG4gICAgICAgIGIudXBkYXRlKGRlbHRhICogQ29uZmlnLmdhbWVTcGVlZClcbiAgICB9KVxuICAgIGxldCBuQWZ0ZXIgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KClcbiAgICAvLyBjVGltZSAtPSBDb25maWcuZHBmXG4gICAgLy8gfVxuICAgIHNldFRpbWVvdXQoKCkgPT4gbWFpbihDb25maWcubWlsbGlTZWNvbmRzUGVyRnJhbWUsIGJvYXJkcyksIChkZWx0YSAqIDEwMDApIC0gKG5BZnRlciAtIG5CZWZvcmUpKVxufVxuXG5kb2N1bWVudC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBjYW1lcmEgPSBuZXcgQ2FtZXJhKENvbmZpZy5zcGFjZVcgLyAyLCBDb25maWcuc3BhY2VIIC8gMiwgQ29uZmlnLnpvb21MZXZlbClcbiAgICBjb25zdCBiZ0JvYXJkID0gbmV3IENhbnZhcyhkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCwgY2FtZXJhLCBcImJhY2tncm91bmRcIilcbiAgICBjb25zdCBwbGFuZXRCb2FyZCA9IG5ldyBDYW52YXMoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQsIGNhbWVyYSwgXCJtYWluXCIpXG5cbiAgICBiZ0JvYXJkLmFwcGVuZFRvKGRvY3VtZW50LmJvZHkpXG4gICAgcGxhbmV0Qm9hcmQuYXBwZW5kVG8oZG9jdW1lbnQuYm9keSlcbiAgICBiZ0JvYXJkLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMwMDAwMDBcIlxuICAgIFxuICAgIGNvbnN0IHBsYW5ldFNjZW5lID0gbmV3IFNjZW5lKFwibWFpblwiKVxuXG4gICAgY29uc3Qga2V5Ym9hcmRDb250cm9scyA9IG5ldyBLZXlib2FyZChjYW1lcmEsIHBsYW5ldEJvYXJkKVxuICAgIGNvbnN0IHBsYW5ldHNDb25maWcgPSBnZXRQbGFuZXRzKHBsYW5ldEJvYXJkLCBjYW1lcmEpXG4gICAgbGV0IHBsYW5ldHM6IFBsYW5ldFtdID0gW11cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleWJvYXJkQ29udHJvbHMuaGFuZGxlS2V5Ym9hcmQuYmluZChrZXlib2FyZENvbnRyb2xzKSk7XG4gICAgXG4gICAgZm9yIChsZXQgaSBpbiBwbGFuZXRzQ29uZmlnKSB7XG4gICAgICAgIGNvbnN0IHAgPSBwbGFuZXRzQ29uZmlnW2ldXG4gICAgICAgIGNvbnN0IHBsYW5ldCA9IG5ldyBQbGFuZXQoaSxcbiAgICAgICAgICAgIG5ldyBWZWN0b3IyRChwLnBvcy54LCBwLnBvcy55KSxcbiAgICAgICAgICAgIHAucmFkaXVzLFxuICAgICAgICAgICAgcC5tYXNzLFxuICAgICAgICAgICAgcC5jb2xvcixcbiAgICAgICAgICAgIHAudmVsb2NpdHksXG4gICAgICAgICAgICBwbGFuZXRzXG4gICAgICAgIClcbiAgICAgICAgcGxhbmV0U2NlbmUuYWRkRW50aXR5KHBsYW5ldClcbiAgICAgICAgcGxhbmV0U2NlbmUuYWRkRW50aXR5KG5ldyBQbGFuZXRUcmFpbChwbGFuZXQpKVxuICAgICAgICBwbGFuZXRzLnB1c2gocGxhbmV0KVxuICAgIH1cblxuICAgIHBsYW5ldEJvYXJkLmFkZEVudGl0eShwbGFuZXRTY2VuZSlcbiAgICBcbiAgICBtYWluKENvbmZpZy5taWxsaVNlY29uZHNQZXJGcmFtZSwgW2JnQm9hcmQsIHBsYW5ldEJvYXJkXSlcbiB9IiwiaW1wb3J0IENhbnZhcyBmcm9tIFwiLi9zcmMvQ2FudmFzL0NhbnZhc1wiXG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuL3NyYy9DYW1lcmEvQ2FtZXJhXCJcbmltcG9ydCBDb25maWcgZnJvbSBcIi4vc3JjL0NvbmZpZ1wiXG5pbXBvcnQgeyBweFRvS2lsb21ldHJlIH0gZnJvbSBcIi4vc3JjL1VuaXQvRGlzdGFuY2VcIlxuaW1wb3J0IFZlY3RvcjJEIGZyb20gXCIuL3NyYy9QaHlzaWMvVmVjdG9yMkRcIlxuXG5leHBvcnQgZGVmYXVsdCAoY2FudmFzOiBDYW52YXMsIGNhbWVyYTogQ2FtZXJhKToge1trZXk6IHN0cmluZ106IGFueX0gPT4ge1xuICAgIGNvbnN0IHN1biA9IHtcbiAgICAgICAgcG9zOiBuZXcgVmVjdG9yMkQoXG4gICAgICAgICAgICBweFRvS2lsb21ldHJlKGNhbWVyYS5yZWxhdGl2ZVgoY2FtZXJhLnogKiAoY2FudmFzLmNhbnZhcy53aWR0aCAvIDIpKSksXG4gICAgICAgICAgICBweFRvS2lsb21ldHJlKGNhbWVyYS5yZWxhdGl2ZVkoY2FtZXJhLnogKiAoY2FudmFzLmNhbnZhcy5oZWlnaHQgLyAyKSkpLFxuICAgICAgICApLFxuICAgICAgICByYWRpdXM6IHB4VG9LaWxvbWV0cmUoMTIwKSxcbiAgICAgICAgbWFzczogMS45ODkxZTMwLFxuICAgICAgICBjb2xvcjogXCJvcmFuZ2VcIixcbiAgICAgICAgdmVsb2NpdHk6IG5ldyBWZWN0b3IyRCgwLCAwKVxuICAgIH1cblxuICAgIGNvbnN0IGVhcnRoID0ge1xuICAgICAgICBwb3M6IG5ldyBWZWN0b3IyRChcbiAgICAgICAgICAgIHN1bi5wb3MueCAtIDE0Ny41OWU2LFxuICAgICAgICAgICAgc3VuLnBvcy55LFxuICAgICAgICApLFxuICAgICAgICByYWRpdXM6IHB4VG9LaWxvbWV0cmUoMTApLFxuICAgICAgICBtYXNzOiA1Ljk3MmUyNCxcbiAgICAgICAgY29sb3I6IFwic2t5Ymx1ZVwiLFxuICAgICAgICAvLyB2ZWxvY2l0eTogbmV3IFZlY3RvcjJEKDAsIENvbmZpZy5lYXJ0aFNwZWVkKS5kb3QobmV3IFZlY3RvcjJEKDEvNSwgNC81KSksXG4gICAgICAgIHZlbG9jaXR5OiBuZXcgVmVjdG9yMkQoMCwgQ29uZmlnLmVhcnRoU3BlZWQpLFxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICAgICAgXCJzdW40MVwiOiBzdW4sXG4gICAgICAgICAgICAvLyBcImVhcnRoIGFsb3JzXCI6IGVhcnRoXG4gICAgICAgICAgICAvLyBcImludGVybG9wZXJcIjoge1xuICAgICAgICAgICAgLy8gICAgIHBvczogbmV3IFZlY3RvcjJEKFxuICAgICAgICAgICAgLy8gICAgICAgICBlYXJ0aC5wb3MueCAtIDM4NDQwMDAwMDAsXG4gICAgICAgICAgICAvLyAgICAgICAgIGVhcnRoLnBvcy55LFxuICAgICAgICAgICAgLy8gICAgICksXG4gICAgICAgICAgICAvLyAgICAgcmFkaXVzOiBweFRvTWV0ZXIoNSksXG4gICAgICAgICAgICAvLyAgICAgbWFzczogNy4zNDhlNCxcbiAgICAgICAgICAgIC8vICAgICBjb2xvcjogXCJyZWRcIixcbiAgICAgICAgICAgIC8vICAgICB2ZWxvY2l0eTogbmV3IFZlY3RvcjJEKDAsIDApXG4gICAgICAgICAgICAvLyB9XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbWVyYSB7XG4gICAgcHVibGljIHg6IG51bWJlciA9IDBcbiAgICBwdWJsaWMgeTogbnVtYmVyID0gMFxuICAgIHB1YmxpYyB6OiBudW1iZXIgPSAxXG5cbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMueCA9IHhcbiAgICAgICAgdGhpcy55ID0geVxuICAgICAgICB0aGlzLnogPSB6XG4gICAgfVxuXG4gICAgWCh4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy56VHJhbnNmb3JtKHggLSB0aGlzLngpXG4gICAgfVxuXG4gICAgWSh5OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy56VHJhbnNmb3JtKHkgLSB0aGlzLnkpXG4gICAgfVxuXG4gICAgelRyYW5zZm9ybSh2OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdiAqICgxIC8gdGhpcy56KVxuICAgIH1cblxuICAgIHJlbGF0aXZlWCh4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy54ICsgeFxuICAgIH1cblxuICAgIHJlbGF0aXZlWSh5OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy55ICsgeVxuICAgIH1cbn0iLCJpbXBvcnQgRW50aXR5IGZyb20gXCIuLi9FbnRpdHkvRW50aXR5XCJcbmltcG9ydCBDb250ZXh0IGZyb20gXCIuL0NvbnRleHRcIlxuaW1wb3J0IENhbWVyYSBmcm9tIFwiLi4vQ2FtZXJhL0NhbWVyYVwiXG5pbXBvcnQgTm9kZSBmcm9tIFwiLi4vRW50aXR5L05vZGVcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMgZXh0ZW5kcyBOb2Rle1xuICAgIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnRcbiAgICByZWFkb25seSBjb250ZXh0OiBDb250ZXh0XG4gICAgcHVibGljIGVudGl0aWVzOiBFbnRpdHlbXSA9IFtdXG5cbiAgICBjb25zdHJ1Y3Rvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgY2FtZXJhOiBDYW1lcmEsIHB1YmxpYyBpZDogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpXG4gICAgICAgIHRoaXMuY2FudmFzLmlkID0gdGhpcy5pZFxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoXG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodFxuICAgICAgICB0aGlzLmNvbnRleHQgPSBuZXcgQ29udGV4dCh0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIiksIGNhbWVyYSwgdGhpcylcbiAgICB9XG5cbiAgICBhcHBlbmRUbyhlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKVxuICAgIH1cblxuICAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZW50aXRpZXMuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICAgIGUudXBkYXRlKGRlbHRhKVxuICAgICAgICAgICAgZS5kcmF3KHRoaXMuY29udGV4dCwgZGVsdGEpXG4gICAgICAgIH0pXG4gICAgfVxufSIsImltcG9ydCBNb2RlbCBmcm9tIFwiLi4vTW9kZWwvTW9kZWxcIlxuaW1wb3J0IENhbWVyYSBmcm9tIFwiLi4vQ2FtZXJhL0NhbWVyYVwiXG5pbXBvcnQgQ2FudmFzIGZyb20gXCIuL0NhbnZhc1wiXG5pbXBvcnQgVGV4dCBmcm9tIFwiLi4vVGV4dC9UZXh0XCJcbmltcG9ydCBDb25maWcgZnJvbSBcIi4uL0NvbmZpZ1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRleHQge1xuICAgIGNvbnN0cnVjdG9yIChcbiAgICAgICAgcmVhZG9ubHkgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICAgICAgICByZWFkb25seSBjYW1lcmE6IENhbWVyYSxcbiAgICAgICAgcmVhZG9ubHkgY2FudmFzOiBDYW52YXMsXG4gICAgICAgICkge31cblxuICAgIGRyYXcobW9kZWw6IE1vZGVsKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKVxuICAgICAgICBtb2RlbC5kcmF3KHRoaXMpXG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2UoKVxuICAgIH1cblxuICAgIGFyYyh4OiBudW1iZXIsIHk6IG51bWJlciwgcjogbnVtYmVyLCBhczogbnVtYmVyLCBhZTogbnVtYmVyLCBsaW5lV2lkdGg6IG51bWJlciA9IDEpOiBDb250ZXh0IHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVXaWR0aCA9IGxpbmVXaWR0aFxuICAgICAgICB0aGlzLmNvbnRleHQuYXJjKHRoaXMuY2FtZXJhLlgoeCksIHRoaXMuY2FtZXJhLlkoeSksIHRoaXMuY2FtZXJhLnpUcmFuc2Zvcm0ociksIGFzLCBhZSlcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICB3cml0ZSh0ZXh0OiBUZXh0LCBsaW5lczogc3RyaW5nW10pIHtcbiAgICAgICAgY29uc3QgZnMgPSB0ZXh0LmdldEZvbnRTaXplKClcbiAgICAgICAgY29uc3QgZmYgPSB0ZXh0LmdldEZvbnRGYW1pbHkoKVxuICAgICAgICBjb25zdCBjID0gdGV4dC5nZXRDb29yZGluYXRlcygpXG5cbiAgICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpXG4gICAgICAgIHRoaXMuY29udGV4dC5mb250ID0gYCR7Q29uZmlnLmZvbnRTaXplfXB4ICR7ZmZ9YFxuXG4gICAgICAgIGxpbmVzLm1hcCgobGluZSwgaSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KGxpbmUsICtjLngsICtjLnkgKyAoZnMgKiBpKSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmaWxsUmVjdCh4OiBudW1iZXIsIHk6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIsIGNvbG9yOiBzdHJpbmcpOiBDb250ZXh0IHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCh0aGlzLmNhbWVyYS5YKHgpLCB0aGlzLmNhbWVyYS5ZKHkpLCB3LCBoKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIGZpbGwoY29sb3I6IHN0cmluZyk6IENvbnRleHQge1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3JcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGwoKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIGxpbmUoZnJvbVg6IG51bWJlciwgZnJvbVk6IG51bWJlciwgdG9YOiBudW1iZXIsIHRvWTogbnVtYmVyLCBjb2xvcjogc3RyaW5nLCBsaW5lV2lkdGg6IG51bWJlciA9IDEpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVXaWR0aCA9IGxpbmVXaWR0aFxuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb2xvclxuICAgICAgICB0aGlzLmNvbnRleHQubW92ZVRvKHRoaXMuY2FtZXJhLlgoZnJvbVgpLCB0aGlzLmNhbWVyYS5ZKGZyb21ZKSlcbiAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVUbyh0aGlzLmNhbWVyYS5YKHRvWCksIHRoaXMuY2FtZXJhLlkodG9ZKSlcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsb3NlUGF0aCgpXG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2UoKVxuICAgIH1cbn1cblxudHlwZSBEcmF3RnVuY3Rpb24gPSAoY3R4OiBDb250ZXh0KSA9PiB2b2lkXG5cbmV4cG9ydCB7XG4gICAgRHJhd0Z1bmN0aW9uXG59IiwiY29uc3QgY0R1cmF0aW9uID0gMFxuY29uc3QgZnBzID0gNjBcbmNvbnN0IG1pbGxpU2Vjb25kc1BlckZyYW1lID0gMSAvIGZwc1xubGV0IHpvb21MZXZlbCA9IDIuNVxubGV0IHpvb21NaW4gPSAwLjFcbmNvbnN0IHpvb21BY3Rpb25Qb3cgPSAwLjEwXG5jb25zdCBkZWNhbEJ5TW92ZSA9IDI1XG5cbmxldCBtYXhQbGFuZXRzID0gNFxubGV0IHBsYW5ldHNSYWRpdXNEZWYgPSB7bWluOiAzLCBtYXg6IDcwfVxuY29uc3QgcGxhbmV0c01pbkRpc3QgPSAxMFxuY29uc3QgcGxhbmV0QmFzZVNwZWVkID0gNDBcblxuY29uc3Qgc3BhY2VXID0gMTAwMDBcbmNvbnN0IHNwYWNlSCA9IDEwMDAwXG5jb25zdCBkZWNhbFggPSBzcGFjZVcgLyAyXG5jb25zdCBkZWNhbFkgPSBzcGFjZUggLyAyXG5cbmNvbnN0IGRpc3RQb3cgPSA1XG5cbmNvbnN0IGZvbnRTaXplID0gMTRcbmxldCBkZWJ1ZyA9IG51bGxcbmNvbnN0IGVhcnRoU3BlZWQgPSAyOS43OCAqIDEwMDAwMCAvIDEuMTQgLy8ga20vc1xuY29uc3QgRyA9IE1hdGgucG93KDEwLCAtMTEpICogNi42NzRcblxuZW51bSBQbGF5TW9kZSB7XG4gICAgUExBWSxcbiAgICBQQVVTRVxufVxuXG5jb25zdCBtb2RlID0gUGxheU1vZGUuUExBWVxuLy8gY29uc3Qga21QZXJQeCA9IDEuM2U1XG5jb25zdCBrbVBlclB4ID0gMS44ZTVcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGdhbWVTcGVlZDogMzY1ICogMjQgKiA2MCAqIDYwICogMTUwMDAsXG4gICAgLy8gZ2FtZVNwZWVkOiAxMDAsXG4gICAga21QZXJQeCxcbiAgICBrZ1BlclB4RGVuc2l0eTogMTIwMCxcbiAgICBHLFxuICAgIGNEdXJhdGlvbixcbiAgICBmcHMsXG4gICAgem9vbUxldmVsLFxuICAgIHpvb21BY3Rpb25Qb3csXG4gICAgZGVjYWxCeU1vdmUsXG4gICAgbWF4UGxhbmV0cyxcbiAgICBwbGFuZXRzUmFkaXVzRGVmLFxuICAgIHBsYW5ldHNNaW5EaXN0LFxuICAgIHBsYW5ldEJhc2VTcGVlZCxcbiAgICBzcGFjZVcsXG4gICAgc3BhY2VILFxuICAgIGRlY2FsWCxcbiAgICBkZWNhbFksXG4gICAgZGlzdFBvdyxcbiAgICBmb250U2l6ZSxcbiAgICBkZWJ1ZyxcbiAgICBQbGF5TW9kZSxcbiAgICBtb2RlLFxuICAgIHpvb21NaW4sXG4gICAgZWFydGhTcGVlZCxcbiAgICBtaWxsaVNlY29uZHNQZXJGcmFtZVxufSIsImltcG9ydCBDYW1lcmEgZnJvbSBcIi4uL0NhbWVyYS9DYW1lcmFcIlxuaW1wb3J0IENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnXCJcbmltcG9ydCBDYW52YXMgZnJvbSBcIi4uL0NhbnZhcy9DYW52YXNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlib2FyZCB7XG4gICAgcHVibGljIGFjdGlvbkJ5S2V5Y29kZToge1trZXk6IG51bWJlcl06IEZ1bmN0aW9ufVxuXG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgY2FtZXJhOiBDYW1lcmEsIHJlYWRvbmx5IGNhbnZhczogQ2FudmFzKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uQnlLZXljb2RlID0ge1xuICAgICAgICAgICAgLy8gNjg6ICgpID0+IHtkZWJ1Zy5Ub2dnbGUoKTt9LFxuICAgICAgICAgICAgLy8gODM6ICgpID0+IHttb2RlID0gbW9kZSA9PSBQQVVTRSA/IFBMQVkgOiBQQVVTRTt9LFxuICAgICAgICAgICAgODI6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS54ID0gMFxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnkgPSAwXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEueiA9IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA5MDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhbWVyYS56IDw9IENvbmZpZy56b29tTWluKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56IC09IENvbmZpZy56b29tQWN0aW9uUG93XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgODg6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56ICs9IENvbmZpZy56b29tQWN0aW9uUG93XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMzc6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYW1lcmEueCAtIENvbmZpZy5kZWNhbEJ5TW92ZSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEueCAtPSBDb25maWcuZGVjYWxCeU1vdmVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAzODogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhbWVyYS55IC0gQ29uZmlnLmRlY2FsQnlNb3ZlIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS55IC09IENvbmZpZy5kZWNhbEJ5TW92ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDM5OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FtZXJhLnggPj0gQ29uZmlnLnNwYWNlVykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnggKz0gQ29uZmlnLmRlY2FsQnlNb3ZlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNDA6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYW1lcmEueSA+PSBDb25maWcuc3BhY2VIKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEueSArPSBDb25maWcuZGVjYWxCeU1vdmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUtleWJvYXJkKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGlvbkJ5S2V5Y29kZSA9PSB1bmRlZmluZWQgfHwgXG4gICAgICAgICAgICAhdGhpcy5hY3Rpb25CeUtleWNvZGVbZXZlbnQua2V5Q29kZV0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFjdGlvbkJ5S2V5Y29kZVtldmVudC5rZXlDb2RlXSgpO1xuICAgIH1cbn0iLCJpbXBvcnQgRW50aXR5IGZyb20gXCIuL0VudGl0eVwiXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi4vQ2FudmFzL0NvbnRleHRcIlxuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBOb2RlIGltcGxlbWVudHMgRW50aXR5IHtcbiAgICBwdWJsaWMgZW50aXRpZXM6IEVudGl0eVtdID0gW11cblxuICAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZW50aXRpZXMuZm9yRWFjaChlID0+IGUudXBkYXRlKGRlbHRhKSlcbiAgICB9XG5cbiAgICBkcmF3KGNvbnRleHQ6IENvbnRleHQsIGRlbHRhPzogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZW50aXRpZXMuZm9yRWFjaChlID0+IGUuZHJhdyhjb250ZXh0LCBkZWx0YSkpXG4gICAgfVxuXG4gICAgZ2V0RW50aXRpZXMoKTogRW50aXR5W10ge1xuICAgICAgICByZXR1cm4gdGhpcy5lbnRpdGllc1xuICAgIH1cblxuICAgIGFkZEVudGl0eShlbnRpdHk6IEVudGl0eSk6IHRoaXMge1xuICAgICAgICB0aGlzLmVudGl0aWVzLnB1c2goZW50aXR5KVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbn0iLCJpbXBvcnQgQ29udGV4dCBmcm9tIFwiLi4vQ2FudmFzL0NvbnRleHRcIlxuaW1wb3J0IFZlY3RvcjJEIGZyb20gXCIuLi9QaHlzaWMvVmVjdG9yMkRcIlxuaW1wb3J0IHsga2lsb21ldHJlVG9QeCwgcHhUb0tpbG9tZXRyZSB9IGZyb20gXCIuLi9Vbml0L0Rpc3RhbmNlXCJcbmltcG9ydCBNb2RlbCBmcm9tIFwiLi9Nb2RlbFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc2MgaW1wbGVtZW50cyBNb2RlbCB7XG4gICAgY29uc3RydWN0b3IocHVibGljIGNvb3JkczogVmVjdG9yMkQsIHB1YmxpYyByYWRpdXM6IG51bWJlciwgcHVibGljIGNvbG9yOiBzdHJpbmcpIHt9XG5cbiAgICBkcmF3KGN0eDogQ29udGV4dCkge1xuICAgICAgICBjdHguYXJjKGtpbG9tZXRyZVRvUHgodGhpcy5jb29yZHMueCksIGtpbG9tZXRyZVRvUHgodGhpcy5jb29yZHMueSksIGtpbG9tZXRyZVRvUHgodGhpcy5yYWRpdXMpLCAwLCAyICogTWF0aC5QSSlcbiAgICAgICAgY3R4LmZpbGwodGhpcy5jb2xvcilcbiAgICB9XG5cbiAgICBnZXRDb29yZGluYXRlcygpOiBWZWN0b3IyRCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvb3Jkc1xuICAgIH1cblxuICAgIHNldENvb3JkaW5hdGVzKGNvb3JkczogVmVjdG9yMkQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb29yZHMgPSBjb29yZHNcbiAgICB9XG59IiwiaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL0NhbnZhcy9Db250ZXh0XCJcbmltcG9ydCBOb2RlIGZyb20gXCIuLi9FbnRpdHkvTm9kZVwiXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSBcIi4uL1BoeXNpYy9WZWN0b3IyRFwiXG5pbXBvcnQgeyBweFRvS2lsb21ldHJlIH0gZnJvbSBcIi4uL1VuaXQvRGlzdGFuY2VcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb3QgZXh0ZW5kcyBOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGZyb206IFZlY3RvcjJELFxuICAgICAgICBwdWJsaWMgdG86IFZlY3RvcjJELFxuICAgICAgICBwdWJsaWMgY29sb3I6IHN0cmluZyxcbiAgICAgICAgcHVibGljIGxpbmVXaWR0aDogbnVtYmVyID0gMVxuICAgICkge1xuICAgICAgICBzdXBlcigpXG4gICAgfVxuXG4gICAgZHJhdyhjdHg6IENvbnRleHQpIHtcbiAgICAgICAgY3R4LmxpbmUoXG4gICAgICAgICAgICBweFRvS2lsb21ldHJlKHRoaXMuZnJvbS54KSxcbiAgICAgICAgICAgIHB4VG9LaWxvbWV0cmUodGhpcy5mcm9tLnkpLFxuICAgICAgICAgICAgcHhUb0tpbG9tZXRyZSh0aGlzLnRvLngpLFxuICAgICAgICAgICAgcHhUb0tpbG9tZXRyZSh0aGlzLnRvLnkpLFxuICAgICAgICAgICAgdGhpcy5jb2xvcixcbiAgICAgICAgICAgIHRoaXMubGluZVdpZHRoXG4gICAgICAgIClcbiAgICB9XG5cbiAgICBnZXRDb29yZGluYXRlcygpOiBWZWN0b3IyRCB7XG4gICAgICAgIHJldHVybiB0aGlzLmZyb21cbiAgICB9XG5cbiAgICBzZXRDb29yZGluYXRlcyhjb29yZHM6IFZlY3RvcjJEKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZnJvbSA9IGNvb3Jkc1xuICAgIH1cbn0iLCJpbXBvcnQgUGxhbmV0IGZyb20gXCIuLi9QbGFuZXRcIlxuaW1wb3J0IENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnXCJcbmltcG9ydCBWZWN0b3IyRCBmcm9tIFwiLi9WZWN0b3IyRFwiXG5cbmNvbnN0IGdldEZvcmNlID0gKGE6IFBsYW5ldCwgYjogUGxhbmV0KTogVmVjdG9yMkQgPT4ge1xuICAgIC8vIGNvbnN0IGRpc3QgPSBHZW9tZXRyeS5nZXREaXN0YW5jZUJldHdlZW5PYmplY3RzKGEuY29vcmRzLCBiLmNvb3JkcylcbiAgICBjb25zdCByMjFfdiA9IGIuY29vcmRzLnN1YihhLmNvb3JkcylcbiAgICBjb25zdCBkaXN0ID0gTWF0aC5zcXJ0KChyMjFfdi54KnIyMV92LngpICsgKHIyMV92LnkqcjIxX3YueSkpXG4gICAgY29uc3QgZiA9IChDb25maWcuRyAqIGEubWFzcyAqIGIubWFzcykgLyAoZGlzdCAqIGRpc3QpXG4gICAgY29uc3QgZjIxX3YgPSByMjFfdi5kaXZpZGUoZGlzdCkuZG90KC1mKi0xKVxuICAgIHJldHVybiBmMjFfdlxufVxuXG5leHBvcnQgZGVmYXVsdCAoYTogUGxhbmV0LCBiOiBQbGFuZXQpOiBWZWN0b3IyRCA9PiB7XG4gICAgcmV0dXJuIGdldEZvcmNlKGEsIGIpLmRpdmlkZShhLm1hc3MpXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjdG9yMkQge1xuICAgIHB1YmxpYyB4OiBudW1iZXJcbiAgICBwdWJsaWMgeTogbnVtYmVyXG4gICAgY29uc3RydWN0b3IgKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMueCA9IHhcbiAgICAgICAgdGhpcy55ID0geVxuICAgIH1cblxuICAgIHN1Yih2ZWM6IFZlY3RvcjJEIHwgbnVtYmVyKTogVmVjdG9yMkQge1xuICAgICAgICBpZiAodHlwZW9mIHZlYyA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdmVjID0gbmV3IFZlY3RvcjJEKHZlYywgdmVjKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMkQodGhpcy54LXZlYy54LCB0aGlzLnktdmVjLnkpXG4gICAgfVxuXG4gICAgLy8gZG90IHByb2R1Y3RcbiAgICBkb3QodmVjOiBWZWN0b3IyRCB8IG51bWJlcik6IFZlY3RvcjJEIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2ZWMgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHZlYyA9IG5ldyBWZWN0b3IyRCh2ZWMsIHZlYylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjJEKHRoaXMueCAqIHZlYy54LCB0aGlzLnkgKiB2ZWMueSlcbiAgICB9XG5cbiAgICBzdW0odmVjOiBWZWN0b3IyRCB8IG51bWJlcik6IFZlY3RvcjJEIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2ZWMgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHZlYyA9IG5ldyBWZWN0b3IyRCh2ZWMsIHZlYylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjJEKHRoaXMueCArIHZlYy54LCB0aGlzLnkgKyB2ZWMueSlcbiAgICB9XG5cbiAgICBkaXZpZGUodmVjOiBWZWN0b3IyRCB8IG51bWJlcik6IFZlY3RvcjJEIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2ZWMgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHZlYyA9IG5ldyBWZWN0b3IyRCh2ZWMsIHZlYylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjJEKHRoaXMueCAvIHZlYy54LCB0aGlzLnkgLyB2ZWMueSlcbiAgICB9XG5cbiAgICAvLyBub3JtYWxpemUgYWxsb3dzIHRvIG5vcm1hbGl6ZSB0aGUgdmVjdG9yIHRvXG4gICAgLy8gYW4gb3RoZXIgbnVtYmVyLiBUaGUgaGVsZCB2YWx1ZSBzaG91bGQgdHJhbnNmb3JtXG4gICAgLy8gdGhlIHgsIHkgdmFsdWVzIHRvIHRoZSBudW1iZXIgMSBvZiB0aGUgcGFzc2VkIG51bWJlclxuICAgIG5vcm1hbGl6ZSAobnVtYmVyOiBudW1iZXIgfCBudW1iZXIpOiBWZWN0b3IyRCB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvdChuZXcgVmVjdG9yMkQobnVtYmVyLCBudW1iZXIpKVxuICAgIH1cblxuICAgIGNsb25lKCk6IFZlY3RvcjJEIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyRCh0aGlzLngsIHRoaXMueSlcbiAgICB9XG59IiwiaW1wb3J0IENvbnRleHQgZnJvbSBcIi4vQ2FudmFzL0NvbnRleHRcIlxuaW1wb3J0IERpc2MgZnJvbSBcIi4vTW9kZWwvRGlzY1wiXG5pbXBvcnQgZ2V0R3Jhdml0eUFjYyBmcm9tIFwiLi9QaHlzaWMvR3Jhdml0eVwiXG5pbXBvcnQgTm9kZSBmcm9tIFwiLi9FbnRpdHkvTm9kZVwiXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSBcIi4vUGh5c2ljL1ZlY3RvcjJEXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhbmV0IGV4dGVuZHMgTm9kZSB7XG4gICAgLy8gcHVibGljIG1vZGVsOiBEaXNjXG4gICAgcHVibGljIG1vZGVsOiBEaXNjXG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGlkOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBjb29yZHM6IFZlY3RvcjJELFxuICAgICAgICByZWFkb25seSByYWRpdXM6IG51bWJlcixcbiAgICAgICAgcmVhZG9ubHkgbWFzczogbnVtYmVyLFxuICAgICAgICByZWFkb25seSBjb2xvcjogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgdmVsb2NpdHk6IFZlY3RvcjJELFxuICAgICAgICByZWFkb25seSBwbGFuZXRzOiBQbGFuZXRbXVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHN1cGVyKClcbiAgICAgICAgICAgIHRoaXMubW9kZWwgPSBuZXcgRGlzYyh0aGlzLmNvb3JkcywgdGhpcy5yYWRpdXMsIHRoaXMuY29sb3IpXG4gICAgICAgIH1cblxuICAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlkID09IFwiZWFydGggYWxvcnNcIikge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5jb29yZHMpXG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLnBsYW5ldHMpIHtcbiAgICAgICAgICAgIGNvbnN0IG90aGVyID0gdGhpcy5wbGFuZXRzW2ldXG5cbiAgICAgICAgICAgIGlmIChvdGhlci5pZCA9PSB0aGlzLmlkKSB7XG4gICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGFjYyA9IGdldEdyYXZpdHlBY2ModGhpcywgb3RoZXIpXG4gICAgICAgICAgICBjb25zdCBhY2NOb3JtYWxpemVkID0gYWNjLmRvdChkZWx0YSlcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkgPSB0aGlzLnZlbG9jaXR5LnN1bShhY2NOb3JtYWxpemVkKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29vcmRzID0gdGhpcy5jb29yZHMuc3VtKHRoaXMudmVsb2NpdHkpXG4gICAgICAgIHRoaXMubW9kZWwuY29vcmRzID0gdGhpcy5jb29yZHNcbiAgICAgICAgc3VwZXIudXBkYXRlKGRlbHRhKVxuICAgIH1cblxuICAgIGRyYXcoY29udGV4dDogQ29udGV4dCk6IHZvaWQge1xuICAgICAgICBjb250ZXh0LmRyYXcodGhpcy5tb2RlbClcbiAgICAgICAgc3VwZXIuZHJhdyhjb250ZXh0KVxuICAgIH1cblxuICAgIGdldENvb3JkaW5hdGVzKCk6IFZlY3RvcjJEIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29vcmRzXG4gICAgfVxuXG4gICAgc2V0Q29vcmRpbmF0ZXMoY29vcmRzOiBWZWN0b3IyRCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvb3JkcyA9IGNvb3Jkc1xuICAgIH1cbn0iLCJpbXBvcnQgQ29udGV4dCBmcm9tIFwiLi9DYW52YXMvQ29udGV4dFwiXG5pbXBvcnQgTGluZSBmcm9tIFwiLi9Nb2RlbC9MaW5lXCJcbmltcG9ydCBQbGFuZXQgZnJvbSBcIi4vUGxhbmV0XCJcbmltcG9ydCBOb2RlIGZyb20gXCIuL0VudGl0eS9Ob2RlXCJcbmltcG9ydCBWZWN0b3IyRCBmcm9tIFwiLi9QaHlzaWMvVmVjdG9yMkRcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGFuZXRUcmFpbCBleHRlbmRzIE5vZGUge1xuICAgIHByaXZhdGUgdHJhaWxzOiBMaW5lW11cbiAgICBwcml2YXRlIG1heFRyYWlscyA9IDk5OVxuICAgIHByaXZhdGUgcHJldmlvdXNDb29yZGluYXRlczogVmVjdG9yMkQgPSBudWxsXG4gXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwbGFuZXQ6IFBsYW5ldCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMudHJhaWxzID0gW11cbiAgICB9XG5cbiAgICB1cGRhdGUoXzogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnRyYWlscy5sZW5ndGggPT0gdGhpcy5tYXhUcmFpbHMpIHtcbiAgICAgICAgICAgIHRoaXMudHJhaWxzLnNoaWZ0KClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByZXZpb3VzQ29vcmRpbmF0ZXMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudHJhaWxzLnB1c2goXG4gICAgICAgICAgICAgICAgbmV3IExpbmUoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXNDb29yZGluYXRlcyxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFuZXQuZ2V0Q29vcmRpbmF0ZXMoKS5jbG9uZSgpLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYW5ldC5jb2xvcixcbiAgICAgICAgICAgICAgICAgICAgMC4yXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcmV2aW91c0Nvb3JkaW5hdGVzID0gdGhpcy5wbGFuZXQuZ2V0Q29vcmRpbmF0ZXMoKS5jbG9uZSgpXG4gICAgfVxuXG4gICAgZHJhdyhjYW52YXM6IENvbnRleHQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50cmFpbHMuZm9yRWFjaChkID0+IGNhbnZhcy5kcmF3KGQpKVxuICAgIH1cbn0iLCJpbXBvcnQgRW50aXR5IGZyb20gXCIuLi9FbnRpdHkvRW50aXR5XCJcbmltcG9ydCBDb250ZXh0IGZyb20gXCIuLi9DYW52YXMvQ29udGV4dFwiXG5pbXBvcnQgU2NlbmUgZnJvbSBcIi4vU2NlbmVcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb0NsZWFyIGV4dGVuZHMgU2NlbmUgaW1wbGVtZW50cyBFbnRpdHkge1xuICAgIHB1YmxpYyBlbnRpdGllczogRW50aXR5W10gPSBbXVxuXG4gICAgZHJhdyhjb250ZXh0OiBDb250ZXh0LCBkZWx0YT86IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmVudGl0aWVzLmZvckVhY2goZSA9PiBlLmRyYXcoY29udGV4dCwgZGVsdGEpKVxuICAgIH1cbn0iLCJpbXBvcnQgRW50aXR5IGZyb20gXCIuLi9FbnRpdHkvRW50aXR5XCJcbmltcG9ydCBDb250ZXh0IGZyb20gXCIuLi9DYW52YXMvQ29udGV4dFwiXG5pbXBvcnQgTm9kZSBmcm9tIFwiLi4vRW50aXR5L05vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmUgZXh0ZW5kcyBOb2RlIHtcbiAgICBwdWJsaWMgZW50aXRpZXM6IEVudGl0eVtdID0gW11cblxuICAgIGNvbnN0cnVjdG9yIChwdWJsaWMgaWQ6IHN0cmluZykge1xuICAgICAgICBzdXBlcigpXG4gICAgfVxuXG4gICAgZHJhdyhjb250ZXh0OiBDb250ZXh0LCBkZWx0YT86IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb250ZXh0LmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNvbnRleHQuY2FudmFzLmNhbnZhcy53aWR0aCwgY29udGV4dC5jYW52YXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuZW50aXRpZXMuZm9yRWFjaChlID0+IGUuZHJhdyhjb250ZXh0LCBkZWx0YSkpXG4gICAgICAgIGNvbnRleHQuY29udGV4dC5zdHJva2UoKTsgICAgXG4gICAgfVxufSIsImltcG9ydCBTY2VuZSBmcm9tIFwiLi9TY2VuZVwiXG5pbXBvcnQgTm9DbGVhciBmcm9tIFwiLi9Ob0NsZWFyXCJcblxuZXhwb3J0IHtcbiAgICBTY2VuZSxcbiAgICBOb0NsZWFyXG59IiwiaW1wb3J0IENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnXCJcblxuY29uc3Qga2lsb21ldHJlVG9QeCA9IChkaXN0YW5jZTogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgICByZXR1cm4gZGlzdGFuY2UgLyBDb25maWcua21QZXJQeFxufVxuXG5jb25zdCBweFRvS2lsb21ldHJlID0gKHB4OiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICAgIHJldHVybiBweCAqIENvbmZpZy5rbVBlclB4XG59XG5cbmV4cG9ydCB7IGtpbG9tZXRyZVRvUHgsIHB4VG9LaWxvbWV0cmUgfSJdLCJzb3VyY2VSb290IjoiIn0=