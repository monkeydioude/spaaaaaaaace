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
        pos: new _src_Physic_Vector2D__WEBPACK_IMPORTED_MODULE_2__["default"](sun.pos.x - 149.59e6, sun.pos.y),
        radius: Object(_src_Unit_Distance__WEBPACK_IMPORTED_MODULE_1__["pxToKilometre"])(10),
        mass: 5.972e24,
        color: "skyblue",
        velocity: new _src_Physic_Vector2D__WEBPACK_IMPORTED_MODULE_2__["default"](0, _src_Config__WEBPACK_IMPORTED_MODULE_0__["default"].earthSpeed).dot(new _src_Physic_Vector2D__WEBPACK_IMPORTED_MODULE_2__["default"](1 / 5, 1.2 / 5)),
    };
    return {
        "sun41": sun,
        "earth alors": earth,
        "interloper": {
            pos: new _src_Physic_Vector2D__WEBPACK_IMPORTED_MODULE_2__["default"](sun.pos.x + 184400000, sun.pos.y - 50000000),
            radius: Object(_src_Unit_Distance__WEBPACK_IMPORTED_MODULE_1__["pxToKilometre"])(5),
            mass: 7.348e4,
            color: "red",
            velocity: new _src_Physic_Vector2D__WEBPACK_IMPORTED_MODULE_2__["default"](4, 4)
        }
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
const earthSpeed = 29.78; // km/s
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
    gameSpeed: 365 * 24 * 60 * 60,
    // gameSpeed: 100,
    kmPerPx,
    mPerPx: kmPerPx * 1000,
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
    const dist = Math.sqrt((r21_v.x * r21_v.x * 1000) + (r21_v.y * r21_v.y * 1000));
    const f = (_Config__WEBPACK_IMPORTED_MODULE_0__["default"].G * a.mass * b.mass) / (dist * dist);
    const f21_v = r21_v.divide(dist).dot(f);
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
            this.velocity = this.velocity.sum(Object(_Physic_Gravity__WEBPACK_IMPORTED_MODULE_1__["default"])(this, other));
        }
        this.coords = this.coords.sum(this.velocity.normalize(delta));
        console.log(this.id, this.coords, this.velocity.normalize(delta));
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
        this.maxTrails = 15;
        this.previousCoordinates = null;
        this.trails = [];
        this.previousCoordinates = this.planet.getCoordinates().clone();
    }
    update() {
        if (this.trails.length == this.maxTrails) {
            this.trails.shift();
        }
        if (this.previousCoordinates === null) {
            return;
        }
        this.trails.push(new _Model_Line__WEBPACK_IMPORTED_MODULE_0__["default"](this.previousCoordinates, this.planet.getCoordinates().clone(), this.planet.color, 0.2));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vcGxhbmV0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2FtZXJhL0NhbWVyYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2FudmFzL0NhbnZhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2FudmFzL0NvbnRleHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29udHJvbHMvS2V5Ym9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VudGl0eS9Ob2RlLnRzIiwid2VicGFjazovLy8uL3NyYy9Nb2RlbC9EaXNjLnRzIiwid2VicGFjazovLy8uL3NyYy9Nb2RlbC9MaW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9QaHlzaWMvR3Jhdml0eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGh5c2ljL1ZlY3RvcjJELnRzIiwid2VicGFjazovLy8uL3NyYy9QbGFuZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsYW5ldFRyYWlsLnRzIiwid2VicGFjazovLy8uL3NyYy9TY2VuZS9Ob0NsZWFyLnRzIiwid2VicGFjazovLy8uL3NyYy9TY2VuZS9TY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2NlbmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VuaXQvRGlzdGFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF3QztBQUNQO0FBQ007QUFDQztBQUNNO0FBQ2I7QUFDVTtBQUNUO0FBQ1U7QUFFNUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxLQUFhLEVBQUUsTUFBZ0IsRUFBRSxFQUFFO0lBQzdDLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUU7SUFDdEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNmLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLG1EQUFNLENBQUMsU0FBUyxDQUFDO0lBQ3RDLENBQUMsQ0FBQztJQUNGLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFO0lBQ3JDLHNCQUFzQjtJQUN0QixJQUFJO0lBQ0osVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxtREFBTSxDQUFDLG9CQUFvQixFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFDO0FBQ3BHLENBQUM7QUFFRCxRQUFRLENBQUMsa0JBQWtCLEdBQUc7SUFDMUIsSUFBSSxRQUFRLENBQUMsVUFBVSxJQUFJLFVBQVUsRUFBRTtRQUNuQyxPQUFNO0tBQ1Q7SUFDRCxNQUFNLE1BQU0sR0FBRyxJQUFJLDBEQUFNLENBQUMsbURBQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLG1EQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxtREFBTSxDQUFDLFNBQVMsQ0FBQztJQUNqRixNQUFNLE9BQU8sR0FBRyxJQUFJLDBEQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLFlBQVksQ0FBQztJQUN2RyxNQUFNLFdBQVcsR0FBRyxJQUFJLDBEQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztJQUVyRyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDL0IsV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQ25DLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxTQUFTO0lBRWhELE1BQU0sV0FBVyxHQUFHLElBQUksc0RBQUssQ0FBQyxNQUFNLENBQUM7SUFFckMsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLDhEQUFRLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQztJQUMxRCxNQUFNLGFBQWEsR0FBRyx3REFBVSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUM7SUFDckQsSUFBSSxPQUFPLEdBQWEsRUFBRTtJQUUxQixRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUVuSCxLQUFLLElBQUksQ0FBQyxJQUFJLGFBQWEsRUFBRTtRQUN6QixNQUFNLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQzFCLE1BQU0sTUFBTSxHQUFHLElBQUksbURBQU0sQ0FBQyxDQUFDLEVBQ3ZCLElBQUksNERBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUM5QixDQUFDLENBQUMsTUFBTSxFQUNSLENBQUMsQ0FBQyxJQUFJLEVBQ04sQ0FBQyxDQUFDLEtBQUssRUFDUCxDQUFDLENBQUMsUUFBUSxFQUNWLE9BQU8sQ0FDVjtRQUNELFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQzdCLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSx3REFBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0tBQ3ZCO0lBRUQsV0FBVyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7SUFFbEMsSUFBSSxDQUFDLG1EQUFNLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDNUQsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzNERjtBQUFBO0FBQUE7QUFBQTtBQUFpQztBQUNrQjtBQUNQO0FBRTdCLGdFQUFDLE1BQWMsRUFBRSxNQUFjLEVBQXdCLEVBQUU7SUFDcEUsTUFBTSxHQUFHLEdBQUc7UUFDUixHQUFHLEVBQUUsSUFBSSw0REFBUSxDQUNiLHdFQUFhLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNyRSx3RUFBYSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDekU7UUFDRCxNQUFNLEVBQUUsd0VBQWEsQ0FBQyxHQUFHLENBQUM7UUFDMUIsSUFBSSxFQUFFLFNBQVM7UUFDZixLQUFLLEVBQUUsUUFBUTtRQUNmLFFBQVEsRUFBRSxJQUFJLDREQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUMvQjtJQUVELE1BQU0sS0FBSyxHQUFHO1FBQ1YsR0FBRyxFQUFFLElBQUksNERBQVEsQ0FDYixHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQ3BCLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUNaO1FBQ0QsTUFBTSxFQUFFLHdFQUFhLENBQUMsRUFBRSxDQUFDO1FBQ3pCLElBQUksRUFBRSxRQUFRO1FBQ2QsS0FBSyxFQUFFLFNBQVM7UUFDaEIsUUFBUSxFQUFFLElBQUksNERBQVEsQ0FBQyxDQUFDLEVBQUUsbURBQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSw0REFBUSxDQUFDLENBQUMsR0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFDLENBQUMsQ0FBQyxDQUFDO0tBRTdFO0lBQ0QsT0FBTztRQUNDLE9BQU8sRUFBRSxHQUFHO1FBQ1osYUFBYSxFQUFFLEtBQUs7UUFDcEIsWUFBWSxFQUFFO1lBQ1YsR0FBRyxFQUFFLElBQUksNERBQVEsQ0FDYixHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxTQUFTLEVBQ3JCLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FDdkI7WUFDRCxNQUFNLEVBQUUsd0VBQWEsQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsS0FBSztZQUNaLFFBQVEsRUFBRSxJQUFJLDREQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMvQjtLQUNSO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzNDRDtBQUFBO0FBQWUsTUFBTSxNQUFNO0lBS3ZCLFlBQVksQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTO1FBSnBDLE1BQUMsR0FBVyxDQUFDO1FBQ2IsTUFBQyxHQUFXLENBQUM7UUFDYixNQUFDLEdBQVcsQ0FBQztRQUdoQixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDVixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDVixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDZCxDQUFDO0lBRUQsQ0FBQyxDQUFDLENBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELENBQUMsQ0FBQyxDQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxVQUFVLENBQUMsQ0FBUztRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxTQUFTLENBQUMsQ0FBUztRQUNmLE9BQU8sSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxTQUFTLENBQUMsQ0FBUztRQUNmLE9BQU8sSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ3JCLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7OztBQzdCRDtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUVFO0FBRWxCLE1BQU0sTUFBTyxTQUFRLG9EQUFJO0lBS3BDLFlBQVksS0FBYSxFQUFFLE1BQWMsRUFBRSxNQUFjLEVBQVMsRUFBVTtRQUN4RSxLQUFLLEVBQUU7UUFEdUQsT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUZyRSxhQUFRLEdBQWEsRUFBRTtRQUkxQixJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQzlDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUs7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTTtRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksZ0RBQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDO0lBQzFFLENBQUM7SUFFRCxRQUFRLENBQUMsT0FBb0I7UUFDekIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBYTtRQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN0QixDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNmLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUM7UUFDL0IsQ0FBQyxDQUFDO0lBQ04sQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7O0FDekJEO0FBQUE7QUFBQTtBQUE4QjtBQUVmLE1BQU0sT0FBTztJQUN4QixZQUNhLE9BQWlDLEVBQ2pDLE1BQWMsRUFDZCxNQUFjO1FBRmQsWUFBTyxHQUFQLE9BQU8sQ0FBMEI7UUFDakMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDcEIsQ0FBQztJQUVSLElBQUksQ0FBQyxLQUFZO1FBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUU7UUFDeEIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7SUFDekIsQ0FBQztJQUVELEdBQUcsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxFQUFVLEVBQUUsRUFBVSxFQUFFLFlBQW9CLENBQUM7UUFDOUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsU0FBUztRQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3ZGLE9BQU8sSUFBSTtJQUNmLENBQUM7SUFFRCxLQUFLLENBQUMsSUFBVSxFQUFFLEtBQWU7UUFDN0IsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRTtRQUM3QixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFO1FBQy9CLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUU7UUFFL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUU7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsR0FBRywrQ0FBTSxDQUFDLFFBQVEsTUFBTSxFQUFFLEVBQUU7UUFFaEQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN0RCxDQUFDLENBQUM7SUFDTixDQUFDO0lBRUQsUUFBUSxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxLQUFhO1FBQzlELElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLEtBQUs7UUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvRCxPQUFPLElBQUk7SUFDZixDQUFDO0lBRUQsSUFBSSxDQUFDLEtBQWE7UUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxLQUFLO1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1FBQ25CLE9BQU8sSUFBSTtJQUNmLENBQUM7SUFFRCxJQUFJLENBQUMsS0FBYSxFQUFFLEtBQWEsRUFBRSxHQUFXLEVBQUUsR0FBVyxFQUFFLEtBQWEsRUFBRSxZQUFvQixDQUFDO1FBQzdGLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLFNBQVM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsS0FBSztRQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRTtRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtJQUN6QixDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUMxREQ7QUFBQSxNQUFNLFNBQVMsR0FBRyxDQUFDO0FBQ25CLE1BQU0sR0FBRyxHQUFHLEVBQUU7QUFDZCxNQUFNLG9CQUFvQixHQUFHLENBQUMsR0FBRyxHQUFHO0FBQ3BDLElBQUksU0FBUyxHQUFHLEdBQUc7QUFDbkIsSUFBSSxPQUFPLEdBQUcsR0FBRztBQUNqQixNQUFNLGFBQWEsR0FBRyxJQUFJO0FBQzFCLE1BQU0sV0FBVyxHQUFHLEVBQUU7QUFFdEIsSUFBSSxVQUFVLEdBQUcsQ0FBQztBQUNsQixJQUFJLGdCQUFnQixHQUFHLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFDO0FBQ3hDLE1BQU0sY0FBYyxHQUFHLEVBQUU7QUFDekIsTUFBTSxlQUFlLEdBQUcsRUFBRTtBQUUxQixNQUFNLE1BQU0sR0FBRyxLQUFLO0FBQ3BCLE1BQU0sTUFBTSxHQUFHLEtBQUs7QUFDcEIsTUFBTSxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUM7QUFDekIsTUFBTSxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUM7QUFFekIsTUFBTSxPQUFPLEdBQUcsQ0FBQztBQUVqQixNQUFNLFFBQVEsR0FBRyxFQUFFO0FBQ25CLElBQUksS0FBSyxHQUFHLElBQUk7QUFDaEIsTUFBTSxVQUFVLEdBQUcsS0FBSyxFQUFDLE9BQU87QUFDaEMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLO0FBRW5DLElBQUssUUFHSjtBQUhELFdBQUssUUFBUTtJQUNULHVDQUFJO0lBQ0oseUNBQUs7QUFDVCxDQUFDLEVBSEksUUFBUSxLQUFSLFFBQVEsUUFHWjtBQUVELE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJO0FBQzFCLHdCQUF3QjtBQUN4QixNQUFNLE9BQU8sR0FBRyxLQUFLO0FBRU47SUFDWCxTQUFTLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRTtJQUM3QixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU0sRUFBRSxPQUFPLEdBQUcsSUFBSTtJQUN0QixjQUFjLEVBQUUsSUFBSTtJQUNwQixDQUFDO0lBQ0QsU0FBUztJQUNULEdBQUc7SUFDSCxTQUFTO0lBQ1QsYUFBYTtJQUNiLFdBQVc7SUFDWCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsTUFBTTtJQUNOLE1BQU07SUFDTixNQUFNO0lBQ04sTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsS0FBSztJQUNMLFFBQVE7SUFDUixJQUFJO0lBQ0osT0FBTztJQUNQLFVBQVU7SUFDVixvQkFBb0I7Q0FDdkI7Ozs7Ozs7Ozs7Ozs7QUM3REQ7QUFBQTtBQUFBO0FBQThCO0FBR2YsTUFBTSxRQUFRO0lBR3pCLFlBQXFCLE1BQWMsRUFBVyxNQUFjO1FBQXZDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3hELElBQUksQ0FBQyxlQUFlLEdBQUc7WUFDbkIsK0JBQStCO1lBQy9CLG9EQUFvRDtZQUNwRCxFQUFFLEVBQUUsR0FBRyxFQUFFO2dCQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDckIsQ0FBQztZQUNELEVBQUUsRUFBRSxHQUFHLEVBQUU7Z0JBQ0wsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSwrQ0FBTSxDQUFDLE9BQU8sRUFBRTtvQkFDakMsT0FBTTtpQkFDVDtnQkFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSwrQ0FBTSxDQUFDLGFBQWE7WUFDekMsQ0FBQztZQUNELEVBQUUsRUFBRSxHQUFHLEVBQUU7Z0JBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksK0NBQU0sQ0FBQyxhQUFhO1lBQ3pDLENBQUM7WUFDRCxFQUFFLEVBQUUsR0FBRyxFQUFFO2dCQUNMLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsK0NBQU0sQ0FBQyxXQUFXLElBQUksQ0FBQyxFQUFFO29CQUN6QyxPQUFPO2lCQUNWO2dCQUNELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLCtDQUFNLENBQUMsV0FBVztZQUN2QyxDQUFDO1lBQ0QsRUFBRSxFQUFFLEdBQUcsRUFBRTtnQkFDTCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLCtDQUFNLENBQUMsV0FBVyxJQUFJLENBQUMsRUFBRTtvQkFDekMsT0FBTztpQkFDVjtnQkFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSwrQ0FBTSxDQUFDLFdBQVc7WUFDdkMsQ0FBQztZQUNELEVBQUUsRUFBRSxHQUFHLEVBQUU7Z0JBQ0wsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSwrQ0FBTSxDQUFDLE1BQU0sRUFBRTtvQkFDaEMsT0FBTztpQkFDVjtnQkFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSwrQ0FBTSxDQUFDLFdBQVc7WUFDdkMsQ0FBQztZQUNELEVBQUUsRUFBRSxHQUFHLEVBQUU7Z0JBQ0wsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSwrQ0FBTSxDQUFDLE1BQU0sRUFBRTtvQkFDaEMsT0FBTztpQkFDVjtnQkFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSwrQ0FBTSxDQUFDLFdBQVc7WUFDdkMsQ0FBQztTQUNKO0lBQ0wsQ0FBQztJQUVELGNBQWMsQ0FBQyxLQUFvQjtRQUMvQixJQUFJLElBQUksQ0FBQyxlQUFlLElBQUksU0FBUztZQUNqQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3RDLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7SUFDMUMsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7O0FDeEREO0FBQUE7QUFBZSxNQUFlLElBQUk7SUFBbEM7UUFDVyxhQUFRLEdBQWEsRUFBRTtJQWtCbEMsQ0FBQztJQWhCRyxNQUFNLENBQUMsS0FBYTtRQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELElBQUksQ0FBQyxPQUFnQixFQUFFLEtBQWM7UUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsV0FBVztRQUNQLE9BQU8sSUFBSSxDQUFDLFFBQVE7SUFDeEIsQ0FBQztJQUVELFNBQVMsQ0FBQyxNQUFjO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMxQixPQUFPLElBQUk7SUFDZixDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUNwQkQ7QUFBQTtBQUFBO0FBQStEO0FBR2hELE1BQU0sSUFBSTtJQUNyQixZQUFtQixNQUFnQixFQUFTLE1BQWMsRUFBUyxLQUFhO1FBQTdELFdBQU0sR0FBTixNQUFNLENBQVU7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtJQUFHLENBQUM7SUFFcEYsSUFBSSxDQUFDLEdBQVk7UUFDYixHQUFHLENBQUMsR0FBRyxDQUFDLG9FQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxvRUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsb0VBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQy9HLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRUQsY0FBYztRQUNWLE9BQU8sSUFBSSxDQUFDLE1BQU07SUFDdEIsQ0FBQztJQUVELGNBQWMsQ0FBQyxNQUFnQjtRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU07SUFDeEIsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7O0FDbkJEO0FBQUE7QUFBQTtBQUFBO0FBQWlDO0FBRWU7QUFFakMsTUFBTSxHQUFJLFNBQVEsb0RBQUk7SUFDakMsWUFDVyxJQUFjLEVBQ2QsRUFBWSxFQUNaLEtBQWEsRUFDYixZQUFvQixDQUFDO1FBRTVCLEtBQUssRUFBRTtRQUxBLFNBQUksR0FBSixJQUFJLENBQVU7UUFDZCxPQUFFLEdBQUYsRUFBRSxDQUFVO1FBQ1osVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLGNBQVMsR0FBVCxTQUFTLENBQVk7SUFHaEMsQ0FBQztJQUVELElBQUksQ0FBQyxHQUFZO1FBQ2IsR0FBRyxDQUFDLElBQUksQ0FDSixvRUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQzFCLG9FQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDMUIsb0VBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUN4QixvRUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQ3hCLElBQUksQ0FBQyxLQUFLLEVBQ1YsSUFBSSxDQUFDLFNBQVMsQ0FDakI7SUFDTCxDQUFDO0lBRUQsY0FBYztRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUk7SUFDcEIsQ0FBQztJQUVELGNBQWMsQ0FBQyxNQUFnQjtRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU07SUFDdEIsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7O0FDaENEO0FBQUE7QUFBOEI7QUFHOUIsTUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFZLEVBQUU7SUFDaEQsc0VBQXNFO0lBQ3RFLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDcEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUMzRSxNQUFNLENBQUMsR0FBRyxDQUFDLCtDQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUN0RCxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdkMsT0FBTyxLQUFLO0FBQ2hCLENBQUM7QUFFYyxnRUFBQyxDQUFTLEVBQUUsQ0FBUyxFQUFZLEVBQUU7SUFDOUMsT0FBTyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ3hDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNmRDtBQUFBO0FBQWUsTUFBTSxRQUFRO0lBQ3pCLFlBQW9CLENBQVMsRUFBUyxDQUFTO1FBQTNCLE1BQUMsR0FBRCxDQUFDLENBQVE7UUFBUyxNQUFDLEdBQUQsQ0FBQyxDQUFRO0lBQUcsQ0FBQztJQUVuRCxHQUFHLENBQUMsR0FBc0I7UUFDdEIsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDekIsR0FBRyxHQUFHLElBQUksUUFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7U0FDL0I7UUFDRCxPQUFPLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELGNBQWM7SUFDZCxHQUFHLENBQUMsR0FBc0I7UUFDdEIsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDekIsR0FBRyxHQUFHLElBQUksUUFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7U0FDL0I7UUFDRCxPQUFPLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELEdBQUcsQ0FBQyxHQUFzQjtRQUN0QixJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUN6QixHQUFHLEdBQUcsSUFBSSxRQUFRLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztTQUMvQjtRQUNELE9BQU8sSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsTUFBTSxDQUFDLEdBQXNCO1FBQ3pCLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO1lBQ3pCLEdBQUcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO1NBQy9CO1FBQ0QsT0FBTyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxTQUFTLENBQUUsTUFBYztRQUNyQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxLQUFLO1FBQ0QsT0FBTyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7O0FDdENEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFDYTtBQUNaO0FBR2pCLE1BQU0sTUFBTyxTQUFRLG9EQUFJO0lBSXBDLFlBQ1csRUFBVSxFQUNWLE1BQWdCLEVBQ2QsTUFBYyxFQUNkLElBQVksRUFDWixLQUFhLEVBQ2YsUUFBa0IsRUFDaEIsT0FBaUI7UUFFdEIsS0FBSyxFQUFFO1FBUkosT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUNWLFdBQU0sR0FBTixNQUFNLENBQVU7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDZixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2hCLFlBQU8sR0FBUCxPQUFPLENBQVU7UUFHdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLG1EQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDL0QsQ0FBQztJQUVMLE1BQU0sQ0FBQyxLQUFhO1FBQ2hCLElBQUksSUFBSSxDQUFDLEVBQUUsSUFBSSxhQUFhLEVBQUU7WUFDMUIsMkJBQTJCO1NBQzlCO1FBQ0QsS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3hCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBRTdCLElBQUksS0FBSyxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFO2dCQUNyQixTQUFRO2FBQ1g7WUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLCtEQUFhLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ2hFO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3RCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTTtRQUMvQixLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFBSSxDQUFDLE9BQWdCO1FBQ2pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN2QixDQUFDO0lBRUQsY0FBYztRQUNWLE9BQU8sSUFBSSxDQUFDLE1BQU07SUFDdEIsQ0FBQztJQUVELGNBQWMsQ0FBQyxNQUFnQjtRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU07SUFDeEIsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7O0FDcEREO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBRUM7QUFHakIsTUFBTSxXQUFZLFNBQVEsb0RBQUk7SUFLekMsWUFBb0IsTUFBYztRQUM5QixLQUFLLEVBQUU7UUFEUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSDFCLGNBQVMsR0FBRyxFQUFFO1FBQ2Qsd0JBQW1CLEdBQWEsSUFBSTtRQUl4QyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUU7UUFDaEIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFO0lBQ25FLENBQUM7SUFFRCxNQUFNO1FBQ0YsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1NBQ3RCO1FBRUQsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEtBQUssSUFBSSxFQUFFO1lBQ25DLE9BQU07U0FDVDtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNaLElBQUksbURBQUksQ0FDSixJQUFJLENBQUMsbUJBQW1CLEVBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUNqQixHQUFHLENBQ04sQ0FDSjtRQUNELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRTtJQUNuRSxDQUFDO0lBRUQsSUFBSSxDQUFDLE1BQWU7UUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7OztBQ3RDRDtBQUFBO0FBQUE7QUFBMkI7QUFFWixNQUFNLE9BQVEsU0FBUSw4Q0FBSztJQUExQzs7UUFDVyxhQUFRLEdBQWEsRUFBRTtJQUtsQyxDQUFDO0lBSEcsSUFBSSxDQUFDLE9BQWdCLEVBQUUsS0FBYztRQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3RELENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7OztBQ1JEO0FBQUE7QUFBQTtBQUFrQztBQUVuQixNQUFNLEtBQU0sU0FBUSxvREFBSTtJQUduQyxZQUFvQixFQUFVO1FBQzFCLEtBQUssRUFBRTtRQURTLE9BQUUsR0FBRixFQUFFLENBQVE7UUFGdkIsYUFBUSxHQUFhLEVBQUU7SUFJOUIsQ0FBQztJQUVELElBQUksQ0FBQyxPQUFnQixFQUFFLEtBQWM7UUFDakMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNsRCxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzdCLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7OztBQ2hCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyQjtBQUNJO0FBSzlCOzs7Ozs7Ozs7Ozs7O0FDTkQ7QUFBQTtBQUFBO0FBQUE7QUFBOEI7QUFFOUIsTUFBTSxhQUFhLEdBQUcsQ0FBQyxRQUFnQixFQUFVLEVBQUU7SUFDL0MsT0FBTyxRQUFRLEdBQUcsK0NBQU0sQ0FBQyxPQUFPO0FBQ3BDLENBQUM7QUFFRCxNQUFNLGFBQWEsR0FBRyxDQUFDLEVBQVUsRUFBVSxFQUFFO0lBQ3pDLE9BQU8sRUFBRSxHQUFHLCtDQUFNLENBQUMsT0FBTztBQUM5QixDQUFDO0FBRXNDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgQ2FudmFzIGZyb20gXCIuL3NyYy9DYW52YXMvQ2FudmFzXCJcbmltcG9ydCBQbGFuZXQgZnJvbSBcIi4vc3JjL1BsYW5ldFwiXG5pbXBvcnQge1NjZW5lfSBmcm9tIFwiLi9zcmMvU2NlbmUvaW5kZXhcIlxuaW1wb3J0IENhbWVyYSBmcm9tIFwiLi9zcmMvQ2FtZXJhL0NhbWVyYVwiXG5pbXBvcnQgS2V5Ym9hcmQgZnJvbSBcIi4vc3JjL0NvbnRyb2xzL0tleWJvYXJkXCJcbmltcG9ydCBDb25maWcgZnJvbSBcIi4vc3JjL0NvbmZpZ1wiXG5pbXBvcnQgUGxhbmV0VHJhaWwgZnJvbSBcIi4vc3JjL1BsYW5ldFRyYWlsXCJcbmltcG9ydCBnZXRQbGFuZXRzIGZyb20gXCIuL3BsYW5ldHNcIlxuaW1wb3J0IFZlY3RvcjJEIGZyb20gXCIuL3NyYy9QaHlzaWMvVmVjdG9yMkRcIlxuXG5jb25zdCBtYWluID0gKGRlbHRhOiBudW1iZXIsIGJvYXJkczogQ2FudmFzW10pID0+IHtcbiAgICAvLyBjVGltZSArPSBkZWx0YVxuICAgIC8vIGlmIChjVGltZSA+IENvbmZpZy5kcGYpIHtcbiAgICBsZXQgbkJlZm9yZSA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKVxuICAgIGJvYXJkcy5mb3JFYWNoKGIgPT4ge1xuICAgICAgICBiLnVwZGF0ZShkZWx0YSAqIENvbmZpZy5nYW1lU3BlZWQpXG4gICAgfSlcbiAgICBsZXQgbkFmdGVyID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpXG4gICAgLy8gY1RpbWUgLT0gQ29uZmlnLmRwZlxuICAgIC8vIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IG1haW4oQ29uZmlnLm1pbGxpU2Vjb25kc1BlckZyYW1lLCBib2FyZHMpLCAoZGVsdGEgKiAxMDAwKSAtIChuQWZ0ZXIgLSBuQmVmb3JlKSlcbn1cblxuZG9jdW1lbnQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9IFwiY29tcGxldGVcIikge1xuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgY2FtZXJhID0gbmV3IENhbWVyYShDb25maWcuc3BhY2VXIC8gMiwgQ29uZmlnLnNwYWNlSCAvIDIsIENvbmZpZy56b29tTGV2ZWwpXG4gICAgY29uc3QgYmdCb2FyZCA9IG5ldyBDYW52YXMoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQsIGNhbWVyYSwgXCJiYWNrZ3JvdW5kXCIpXG4gICAgY29uc3QgcGxhbmV0Qm9hcmQgPSBuZXcgQ2FudmFzKGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0LCBjYW1lcmEsIFwibWFpblwiKVxuXG4gICAgYmdCb2FyZC5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KVxuICAgIHBsYW5ldEJvYXJkLmFwcGVuZFRvKGRvY3VtZW50LmJvZHkpXG4gICAgYmdCb2FyZC5jYW52YXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMDAwMDAwXCJcbiAgICBcbiAgICBjb25zdCBwbGFuZXRTY2VuZSA9IG5ldyBTY2VuZShcIm1haW5cIilcblxuICAgIGNvbnN0IGtleWJvYXJkQ29udHJvbHMgPSBuZXcgS2V5Ym9hcmQoY2FtZXJhLCBwbGFuZXRCb2FyZClcbiAgICBjb25zdCBwbGFuZXRzQ29uZmlnID0gZ2V0UGxhbmV0cyhwbGFuZXRCb2FyZCwgY2FtZXJhKVxuICAgIGxldCBwbGFuZXRzOiBQbGFuZXRbXSA9IFtdXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlib2FyZENvbnRyb2xzLmhhbmRsZUtleWJvYXJkLmJpbmQoa2V5Ym9hcmRDb250cm9scykpO1xuICAgIFxuICAgIGZvciAobGV0IGkgaW4gcGxhbmV0c0NvbmZpZykge1xuICAgICAgICBjb25zdCBwID0gcGxhbmV0c0NvbmZpZ1tpXVxuICAgICAgICBjb25zdCBwbGFuZXQgPSBuZXcgUGxhbmV0KGksXG4gICAgICAgICAgICBuZXcgVmVjdG9yMkQocC5wb3MueCwgcC5wb3MueSksXG4gICAgICAgICAgICBwLnJhZGl1cyxcbiAgICAgICAgICAgIHAubWFzcyxcbiAgICAgICAgICAgIHAuY29sb3IsXG4gICAgICAgICAgICBwLnZlbG9jaXR5LFxuICAgICAgICAgICAgcGxhbmV0c1xuICAgICAgICApXG4gICAgICAgIHBsYW5ldFNjZW5lLmFkZEVudGl0eShwbGFuZXQpXG4gICAgICAgIHBsYW5ldFNjZW5lLmFkZEVudGl0eShuZXcgUGxhbmV0VHJhaWwocGxhbmV0KSlcbiAgICAgICAgcGxhbmV0cy5wdXNoKHBsYW5ldClcbiAgICB9XG5cbiAgICBwbGFuZXRCb2FyZC5hZGRFbnRpdHkocGxhbmV0U2NlbmUpXG4gICAgXG4gICAgbWFpbihDb25maWcubWlsbGlTZWNvbmRzUGVyRnJhbWUsIFtiZ0JvYXJkLCBwbGFuZXRCb2FyZF0pXG4gfSIsImltcG9ydCBDYW52YXMgZnJvbSBcIi4vc3JjL0NhbnZhcy9DYW52YXNcIlxuaW1wb3J0IENhbWVyYSBmcm9tIFwiLi9zcmMvQ2FtZXJhL0NhbWVyYVwiXG5pbXBvcnQgQ29uZmlnIGZyb20gXCIuL3NyYy9Db25maWdcIlxuaW1wb3J0IHsgcHhUb0tpbG9tZXRyZSB9IGZyb20gXCIuL3NyYy9Vbml0L0Rpc3RhbmNlXCJcbmltcG9ydCBWZWN0b3IyRCBmcm9tIFwiLi9zcmMvUGh5c2ljL1ZlY3RvcjJEXCJcblxuZXhwb3J0IGRlZmF1bHQgKGNhbnZhczogQ2FudmFzLCBjYW1lcmE6IENhbWVyYSk6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0+IHtcbiAgICBjb25zdCBzdW4gPSB7XG4gICAgICAgIHBvczogbmV3IFZlY3RvcjJEKFxuICAgICAgICAgICAgcHhUb0tpbG9tZXRyZShjYW1lcmEucmVsYXRpdmVYKGNhbWVyYS56ICogKGNhbnZhcy5jYW52YXMud2lkdGggLyAyKSkpLFxuICAgICAgICAgICAgcHhUb0tpbG9tZXRyZShjYW1lcmEucmVsYXRpdmVZKGNhbWVyYS56ICogKGNhbnZhcy5jYW52YXMuaGVpZ2h0IC8gMikpKSxcbiAgICAgICAgKSxcbiAgICAgICAgcmFkaXVzOiBweFRvS2lsb21ldHJlKDEyMCksXG4gICAgICAgIG1hc3M6IDEuOTg5MWUzMCxcbiAgICAgICAgY29sb3I6IFwib3JhbmdlXCIsXG4gICAgICAgIHZlbG9jaXR5OiBuZXcgVmVjdG9yMkQoMCwgMClcbiAgICB9XG5cbiAgICBjb25zdCBlYXJ0aCA9IHtcbiAgICAgICAgcG9zOiBuZXcgVmVjdG9yMkQoXG4gICAgICAgICAgICBzdW4ucG9zLnggLSAxNDkuNTllNixcbiAgICAgICAgICAgIHN1bi5wb3MueSxcbiAgICAgICAgKSxcbiAgICAgICAgcmFkaXVzOiBweFRvS2lsb21ldHJlKDEwKSxcbiAgICAgICAgbWFzczogNS45NzJlMjQsXG4gICAgICAgIGNvbG9yOiBcInNreWJsdWVcIixcbiAgICAgICAgdmVsb2NpdHk6IG5ldyBWZWN0b3IyRCgwLCBDb25maWcuZWFydGhTcGVlZCkuZG90KG5ldyBWZWN0b3IyRCgxLzUsIDEuMi81KSksXG4gICAgICAgIC8vIHZlbG9jaXR5OiBuZXcgVmVjdG9yMkQoMCwgMCksXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgICAgICBcInN1bjQxXCI6IHN1bixcbiAgICAgICAgICAgIFwiZWFydGggYWxvcnNcIjogZWFydGgsXG4gICAgICAgICAgICBcImludGVybG9wZXJcIjoge1xuICAgICAgICAgICAgICAgIHBvczogbmV3IFZlY3RvcjJEKFxuICAgICAgICAgICAgICAgICAgICBzdW4ucG9zLnggKyAxODQ0MDAwMDAsXG4gICAgICAgICAgICAgICAgICAgIHN1bi5wb3MueSAtIDUwMDAwMDAwLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgcmFkaXVzOiBweFRvS2lsb21ldHJlKDUpLFxuICAgICAgICAgICAgICAgIG1hc3M6IDcuMzQ4ZTQsXG4gICAgICAgICAgICAgICAgY29sb3I6IFwicmVkXCIsXG4gICAgICAgICAgICAgICAgdmVsb2NpdHk6IG5ldyBWZWN0b3IyRCg0LCA0KVxuICAgICAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYW1lcmEge1xuICAgIHB1YmxpYyB4OiBudW1iZXIgPSAwXG4gICAgcHVibGljIHk6IG51bWJlciA9IDBcbiAgICBwdWJsaWMgejogbnVtYmVyID0gMVxuXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlcikge1xuICAgICAgICB0aGlzLnggPSB4XG4gICAgICAgIHRoaXMueSA9IHlcbiAgICAgICAgdGhpcy56ID0gelxuICAgIH1cblxuICAgIFgoeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuelRyYW5zZm9ybSh4IC0gdGhpcy54KVxuICAgIH1cblxuICAgIFkoeTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuelRyYW5zZm9ybSh5IC0gdGhpcy55KVxuICAgIH1cblxuICAgIHpUcmFuc2Zvcm0odjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHYgKiAoMSAvIHRoaXMueilcbiAgICB9XG5cbiAgICByZWxhdGl2ZVgoeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCArIHhcbiAgICB9XG5cbiAgICByZWxhdGl2ZVkoeTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueSArIHlcbiAgICB9XG59IiwiaW1wb3J0IEVudGl0eSBmcm9tIFwiLi4vRW50aXR5L0VudGl0eVwiXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi9Db250ZXh0XCJcbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4uL0NhbWVyYS9DYW1lcmFcIlxuaW1wb3J0IE5vZGUgZnJvbSBcIi4uL0VudGl0eS9Ob2RlXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIGV4dGVuZHMgTm9kZXtcbiAgICByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50XG4gICAgcmVhZG9ubHkgY29udGV4dDogQ29udGV4dFxuICAgIHB1YmxpYyBlbnRpdGllczogRW50aXR5W10gPSBbXVxuXG4gICAgY29uc3RydWN0b3Iod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGNhbWVyYTogQ2FtZXJhLCBwdWJsaWMgaWQ6IHN0cmluZykge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKVxuICAgICAgICB0aGlzLmNhbnZhcy5pZCA9IHRoaXMuaWRcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aFxuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHRcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gbmV3IENvbnRleHQodGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpLCBjYW1lcmEsIHRoaXMpXG4gICAgfVxuXG4gICAgYXBwZW5kVG8oZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcylcbiAgICB9XG5cbiAgICB1cGRhdGUoZGVsdGE6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmVudGl0aWVzLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICBlLnVwZGF0ZShkZWx0YSlcbiAgICAgICAgICAgIGUuZHJhdyh0aGlzLmNvbnRleHQsIGRlbHRhKVxuICAgICAgICB9KVxuICAgIH1cbn0iLCJpbXBvcnQgTW9kZWwgZnJvbSBcIi4uL01vZGVsL01vZGVsXCJcbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4uL0NhbWVyYS9DYW1lcmFcIlxuaW1wb3J0IENhbnZhcyBmcm9tIFwiLi9DYW52YXNcIlxuaW1wb3J0IFRleHQgZnJvbSBcIi4uL1RleHQvVGV4dFwiXG5pbXBvcnQgQ29uZmlnIGZyb20gXCIuLi9Db25maWdcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0IHtcbiAgICBjb25zdHJ1Y3RvciAoXG4gICAgICAgIHJlYWRvbmx5IGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgICAgICAgcmVhZG9ubHkgY2FtZXJhOiBDYW1lcmEsXG4gICAgICAgIHJlYWRvbmx5IGNhbnZhczogQ2FudmFzLFxuICAgICAgICApIHt9XG5cbiAgICBkcmF3KG1vZGVsOiBNb2RlbCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKClcbiAgICAgICAgbW9kZWwuZHJhdyh0aGlzKVxuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKClcbiAgICB9XG5cbiAgICBhcmMoeDogbnVtYmVyLCB5OiBudW1iZXIsIHI6IG51bWJlciwgYXM6IG51bWJlciwgYWU6IG51bWJlciwgbGluZVdpZHRoOiBudW1iZXIgPSAxKTogQ29udGV4dCB7XG4gICAgICAgIHRoaXMuY29udGV4dC5saW5lV2lkdGggPSBsaW5lV2lkdGhcbiAgICAgICAgdGhpcy5jb250ZXh0LmFyYyh0aGlzLmNhbWVyYS5YKHgpLCB0aGlzLmNhbWVyYS5ZKHkpLCB0aGlzLmNhbWVyYS56VHJhbnNmb3JtKHIpLCBhcywgYWUpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgd3JpdGUodGV4dDogVGV4dCwgbGluZXM6IHN0cmluZ1tdKSB7XG4gICAgICAgIGNvbnN0IGZzID0gdGV4dC5nZXRGb250U2l6ZSgpXG4gICAgICAgIGNvbnN0IGZmID0gdGV4dC5nZXRGb250RmFtaWx5KClcbiAgICAgICAgY29uc3QgYyA9IHRleHQuZ2V0Q29vcmRpbmF0ZXMoKVxuXG4gICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKVxuICAgICAgICB0aGlzLmNvbnRleHQuZm9udCA9IGAke0NvbmZpZy5mb250U2l6ZX1weCAke2ZmfWBcblxuICAgICAgICBsaW5lcy5tYXAoKGxpbmUsIGkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChsaW5lLCArYy54LCArYy55ICsgKGZzICogaSkpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZmlsbFJlY3QoeDogbnVtYmVyLCB5OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyLCBjb2xvcjogc3RyaW5nKTogQ29udGV4dCB7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBjb2xvclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QodGhpcy5jYW1lcmEuWCh4KSwgdGhpcy5jYW1lcmEuWSh5KSwgdywgaClcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBmaWxsKGNvbG9yOiBzdHJpbmcpOiBDb250ZXh0IHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsKClcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBsaW5lKGZyb21YOiBudW1iZXIsIGZyb21ZOiBudW1iZXIsIHRvWDogbnVtYmVyLCB0b1k6IG51bWJlciwgY29sb3I6IHN0cmluZywgbGluZVdpZHRoOiBudW1iZXIgPSAxKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5saW5lV2lkdGggPSBsaW5lV2lkdGhcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gY29sb3JcbiAgICAgICAgdGhpcy5jb250ZXh0Lm1vdmVUbyh0aGlzLmNhbWVyYS5YKGZyb21YKSwgdGhpcy5jYW1lcmEuWShmcm9tWSkpXG4gICAgICAgIHRoaXMuY29udGV4dC5saW5lVG8odGhpcy5jYW1lcmEuWCh0b1gpLCB0aGlzLmNhbWVyYS5ZKHRvWSkpXG4gICAgICAgIHRoaXMuY29udGV4dC5jbG9zZVBhdGgoKVxuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKClcbiAgICB9XG59XG5cbnR5cGUgRHJhd0Z1bmN0aW9uID0gKGN0eDogQ29udGV4dCkgPT4gdm9pZFxuXG5leHBvcnQge1xuICAgIERyYXdGdW5jdGlvblxufSIsImNvbnN0IGNEdXJhdGlvbiA9IDBcbmNvbnN0IGZwcyA9IDYwXG5jb25zdCBtaWxsaVNlY29uZHNQZXJGcmFtZSA9IDEgLyBmcHNcbmxldCB6b29tTGV2ZWwgPSAyLjVcbmxldCB6b29tTWluID0gMC4xXG5jb25zdCB6b29tQWN0aW9uUG93ID0gMC4xMFxuY29uc3QgZGVjYWxCeU1vdmUgPSAyNVxuXG5sZXQgbWF4UGxhbmV0cyA9IDRcbmxldCBwbGFuZXRzUmFkaXVzRGVmID0ge21pbjogMywgbWF4OiA3MH1cbmNvbnN0IHBsYW5ldHNNaW5EaXN0ID0gMTBcbmNvbnN0IHBsYW5ldEJhc2VTcGVlZCA9IDQwXG5cbmNvbnN0IHNwYWNlVyA9IDEwMDAwXG5jb25zdCBzcGFjZUggPSAxMDAwMFxuY29uc3QgZGVjYWxYID0gc3BhY2VXIC8gMlxuY29uc3QgZGVjYWxZID0gc3BhY2VIIC8gMlxuXG5jb25zdCBkaXN0UG93ID0gNVxuXG5jb25zdCBmb250U2l6ZSA9IDE0XG5sZXQgZGVidWcgPSBudWxsXG5jb25zdCBlYXJ0aFNwZWVkID0gMjkuNzggLy8ga20vc1xuY29uc3QgRyA9IE1hdGgucG93KDEwLCAtMTEpICogNi42NzRcblxuZW51bSBQbGF5TW9kZSB7XG4gICAgUExBWSxcbiAgICBQQVVTRVxufVxuXG5jb25zdCBtb2RlID0gUGxheU1vZGUuUExBWVxuLy8gY29uc3Qga21QZXJQeCA9IDEuM2U1XG5jb25zdCBrbVBlclB4ID0gMS44ZTVcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGdhbWVTcGVlZDogMzY1ICogMjQgKiA2MCAqIDYwLFxuICAgIC8vIGdhbWVTcGVlZDogMTAwLFxuICAgIGttUGVyUHgsXG4gICAgbVBlclB4OiBrbVBlclB4ICogMTAwMCxcbiAgICBrZ1BlclB4RGVuc2l0eTogMTIwMCxcbiAgICBHLFxuICAgIGNEdXJhdGlvbixcbiAgICBmcHMsXG4gICAgem9vbUxldmVsLFxuICAgIHpvb21BY3Rpb25Qb3csXG4gICAgZGVjYWxCeU1vdmUsXG4gICAgbWF4UGxhbmV0cyxcbiAgICBwbGFuZXRzUmFkaXVzRGVmLFxuICAgIHBsYW5ldHNNaW5EaXN0LFxuICAgIHBsYW5ldEJhc2VTcGVlZCxcbiAgICBzcGFjZVcsXG4gICAgc3BhY2VILFxuICAgIGRlY2FsWCxcbiAgICBkZWNhbFksXG4gICAgZGlzdFBvdyxcbiAgICBmb250U2l6ZSxcbiAgICBkZWJ1ZyxcbiAgICBQbGF5TW9kZSxcbiAgICBtb2RlLFxuICAgIHpvb21NaW4sXG4gICAgZWFydGhTcGVlZCxcbiAgICBtaWxsaVNlY29uZHNQZXJGcmFtZVxufSIsImltcG9ydCBDYW1lcmEgZnJvbSBcIi4uL0NhbWVyYS9DYW1lcmFcIlxuaW1wb3J0IENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnXCJcbmltcG9ydCBDYW52YXMgZnJvbSBcIi4uL0NhbnZhcy9DYW52YXNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlib2FyZCB7XG4gICAgcHVibGljIGFjdGlvbkJ5S2V5Y29kZToge1trZXk6IG51bWJlcl06IEZ1bmN0aW9ufVxuXG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgY2FtZXJhOiBDYW1lcmEsIHJlYWRvbmx5IGNhbnZhczogQ2FudmFzKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uQnlLZXljb2RlID0ge1xuICAgICAgICAgICAgLy8gNjg6ICgpID0+IHtkZWJ1Zy5Ub2dnbGUoKTt9LFxuICAgICAgICAgICAgLy8gODM6ICgpID0+IHttb2RlID0gbW9kZSA9PSBQQVVTRSA/IFBMQVkgOiBQQVVTRTt9LFxuICAgICAgICAgICAgODI6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS54ID0gMFxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnkgPSAwXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEueiA9IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA5MDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhbWVyYS56IDw9IENvbmZpZy56b29tTWluKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56IC09IENvbmZpZy56b29tQWN0aW9uUG93XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgODg6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56ICs9IENvbmZpZy56b29tQWN0aW9uUG93XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMzc6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYW1lcmEueCAtIENvbmZpZy5kZWNhbEJ5TW92ZSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEueCAtPSBDb25maWcuZGVjYWxCeU1vdmVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAzODogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhbWVyYS55IC0gQ29uZmlnLmRlY2FsQnlNb3ZlIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS55IC09IENvbmZpZy5kZWNhbEJ5TW92ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDM5OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FtZXJhLnggPj0gQ29uZmlnLnNwYWNlVykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnggKz0gQ29uZmlnLmRlY2FsQnlNb3ZlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNDA6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYW1lcmEueSA+PSBDb25maWcuc3BhY2VIKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEueSArPSBDb25maWcuZGVjYWxCeU1vdmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUtleWJvYXJkKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGlvbkJ5S2V5Y29kZSA9PSB1bmRlZmluZWQgfHwgXG4gICAgICAgICAgICAhdGhpcy5hY3Rpb25CeUtleWNvZGVbZXZlbnQua2V5Q29kZV0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFjdGlvbkJ5S2V5Y29kZVtldmVudC5rZXlDb2RlXSgpO1xuICAgIH1cbn0iLCJpbXBvcnQgRW50aXR5IGZyb20gXCIuL0VudGl0eVwiXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi4vQ2FudmFzL0NvbnRleHRcIlxuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBOb2RlIGltcGxlbWVudHMgRW50aXR5IHtcbiAgICBwdWJsaWMgZW50aXRpZXM6IEVudGl0eVtdID0gW11cblxuICAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZW50aXRpZXMuZm9yRWFjaChlID0+IGUudXBkYXRlKGRlbHRhKSlcbiAgICB9XG5cbiAgICBkcmF3KGNvbnRleHQ6IENvbnRleHQsIGRlbHRhPzogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZW50aXRpZXMuZm9yRWFjaChlID0+IGUuZHJhdyhjb250ZXh0LCBkZWx0YSkpXG4gICAgfVxuXG4gICAgZ2V0RW50aXRpZXMoKTogRW50aXR5W10ge1xuICAgICAgICByZXR1cm4gdGhpcy5lbnRpdGllc1xuICAgIH1cblxuICAgIGFkZEVudGl0eShlbnRpdHk6IEVudGl0eSk6IHRoaXMge1xuICAgICAgICB0aGlzLmVudGl0aWVzLnB1c2goZW50aXR5KVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbn0iLCJpbXBvcnQgQ29udGV4dCBmcm9tIFwiLi4vQ2FudmFzL0NvbnRleHRcIlxuaW1wb3J0IFZlY3RvcjJEIGZyb20gXCIuLi9QaHlzaWMvVmVjdG9yMkRcIlxuaW1wb3J0IHsga2lsb21ldHJlVG9QeCwgcHhUb0tpbG9tZXRyZSB9IGZyb20gXCIuLi9Vbml0L0Rpc3RhbmNlXCJcbmltcG9ydCBNb2RlbCBmcm9tIFwiLi9Nb2RlbFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc2MgaW1wbGVtZW50cyBNb2RlbCB7XG4gICAgY29uc3RydWN0b3IocHVibGljIGNvb3JkczogVmVjdG9yMkQsIHB1YmxpYyByYWRpdXM6IG51bWJlciwgcHVibGljIGNvbG9yOiBzdHJpbmcpIHt9XG5cbiAgICBkcmF3KGN0eDogQ29udGV4dCkge1xuICAgICAgICBjdHguYXJjKGtpbG9tZXRyZVRvUHgodGhpcy5jb29yZHMueCksIGtpbG9tZXRyZVRvUHgodGhpcy5jb29yZHMueSksIGtpbG9tZXRyZVRvUHgodGhpcy5yYWRpdXMpLCAwLCAyICogTWF0aC5QSSlcbiAgICAgICAgY3R4LmZpbGwodGhpcy5jb2xvcilcbiAgICB9XG5cbiAgICBnZXRDb29yZGluYXRlcygpOiBWZWN0b3IyRCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvb3Jkc1xuICAgIH1cblxuICAgIHNldENvb3JkaW5hdGVzKGNvb3JkczogVmVjdG9yMkQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb29yZHMgPSBjb29yZHNcbiAgICB9XG59IiwiaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL0NhbnZhcy9Db250ZXh0XCJcbmltcG9ydCBOb2RlIGZyb20gXCIuLi9FbnRpdHkvTm9kZVwiXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSBcIi4uL1BoeXNpYy9WZWN0b3IyRFwiXG5pbXBvcnQgeyBweFRvS2lsb21ldHJlIH0gZnJvbSBcIi4uL1VuaXQvRGlzdGFuY2VcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb3QgZXh0ZW5kcyBOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGZyb206IFZlY3RvcjJELFxuICAgICAgICBwdWJsaWMgdG86IFZlY3RvcjJELFxuICAgICAgICBwdWJsaWMgY29sb3I6IHN0cmluZyxcbiAgICAgICAgcHVibGljIGxpbmVXaWR0aDogbnVtYmVyID0gMVxuICAgICkge1xuICAgICAgICBzdXBlcigpXG4gICAgfVxuXG4gICAgZHJhdyhjdHg6IENvbnRleHQpIHtcbiAgICAgICAgY3R4LmxpbmUoXG4gICAgICAgICAgICBweFRvS2lsb21ldHJlKHRoaXMuZnJvbS54KSxcbiAgICAgICAgICAgIHB4VG9LaWxvbWV0cmUodGhpcy5mcm9tLnkpLFxuICAgICAgICAgICAgcHhUb0tpbG9tZXRyZSh0aGlzLnRvLngpLFxuICAgICAgICAgICAgcHhUb0tpbG9tZXRyZSh0aGlzLnRvLnkpLFxuICAgICAgICAgICAgdGhpcy5jb2xvcixcbiAgICAgICAgICAgIHRoaXMubGluZVdpZHRoXG4gICAgICAgIClcbiAgICB9XG5cbiAgICBnZXRDb29yZGluYXRlcygpOiBWZWN0b3IyRCB7XG4gICAgICAgIHJldHVybiB0aGlzLmZyb21cbiAgICB9XG5cbiAgICBzZXRDb29yZGluYXRlcyhjb29yZHM6IFZlY3RvcjJEKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZnJvbSA9IGNvb3Jkc1xuICAgIH1cbn0iLCJpbXBvcnQgUGxhbmV0IGZyb20gXCIuLi9QbGFuZXRcIlxuaW1wb3J0IENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnXCJcbmltcG9ydCBWZWN0b3IyRCBmcm9tIFwiLi9WZWN0b3IyRFwiXG5cbmNvbnN0IGdldEZvcmNlID0gKGE6IFBsYW5ldCwgYjogUGxhbmV0KTogVmVjdG9yMkQgPT4ge1xuICAgIC8vIGNvbnN0IGRpc3QgPSBHZW9tZXRyeS5nZXREaXN0YW5jZUJldHdlZW5PYmplY3RzKGEuY29vcmRzLCBiLmNvb3JkcylcbiAgICBjb25zdCByMjFfdiA9IGIuY29vcmRzLnN1YihhLmNvb3JkcylcbiAgICBjb25zdCBkaXN0ID0gTWF0aC5zcXJ0KChyMjFfdi54KnIyMV92LnggKiAxMDAwKSArIChyMjFfdi55KnIyMV92LnkgKiAxMDAwKSlcbiAgICBjb25zdCBmID0gKENvbmZpZy5HICogYS5tYXNzICogYi5tYXNzKSAvIChkaXN0ICogZGlzdClcbiAgICBjb25zdCBmMjFfdiA9IHIyMV92LmRpdmlkZShkaXN0KS5kb3QoZilcbiAgICByZXR1cm4gZjIxX3Zcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGE6IFBsYW5ldCwgYjogUGxhbmV0KTogVmVjdG9yMkQgPT4ge1xuICAgIHJldHVybiBnZXRGb3JjZShhLCBiKS5kaXZpZGUoYS5tYXNzKVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlY3RvcjJEIHtcbiAgICBjb25zdHJ1Y3RvciAocHVibGljIHg6IG51bWJlciwgcHVibGljIHk6IG51bWJlcikge31cblxuICAgIHN1Yih2ZWM6IFZlY3RvcjJEIHwgbnVtYmVyKTogVmVjdG9yMkQge1xuICAgICAgICBpZiAodHlwZW9mIHZlYyA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdmVjID0gbmV3IFZlY3RvcjJEKHZlYywgdmVjKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMkQodGhpcy54LXZlYy54LCB0aGlzLnktdmVjLnkpXG4gICAgfVxuXG4gICAgLy8gZG90IHByb2R1Y3RcbiAgICBkb3QodmVjOiBWZWN0b3IyRCB8IG51bWJlcik6IFZlY3RvcjJEIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2ZWMgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHZlYyA9IG5ldyBWZWN0b3IyRCh2ZWMsIHZlYylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjJEKHRoaXMueCAqIHZlYy54LCB0aGlzLnkgKiB2ZWMueSlcbiAgICB9XG5cbiAgICBzdW0odmVjOiBWZWN0b3IyRCB8IG51bWJlcik6IFZlY3RvcjJEIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2ZWMgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHZlYyA9IG5ldyBWZWN0b3IyRCh2ZWMsIHZlYylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjJEKHRoaXMueCArIHZlYy54LCB0aGlzLnkgKyB2ZWMueSlcbiAgICB9XG5cbiAgICBkaXZpZGUodmVjOiBWZWN0b3IyRCB8IG51bWJlcik6IFZlY3RvcjJEIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2ZWMgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHZlYyA9IG5ldyBWZWN0b3IyRCh2ZWMsIHZlYylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjJEKHRoaXMueCAvIHZlYy54LCB0aGlzLnkgLyB2ZWMueSlcbiAgICB9XG5cbiAgICBub3JtYWxpemUgKG51bWJlcjogbnVtYmVyKTogVmVjdG9yMkQge1xuICAgICAgICByZXR1cm4gdGhpcy5kb3QobmV3IFZlY3RvcjJEKG51bWJlciwgbnVtYmVyKSlcbiAgICB9XG5cbiAgICBjbG9uZSgpOiBWZWN0b3IyRCB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMkQodGhpcy54LCB0aGlzLnkpXG4gICAgfVxufSIsImltcG9ydCBDb250ZXh0IGZyb20gXCIuL0NhbnZhcy9Db250ZXh0XCJcbmltcG9ydCBEaXNjIGZyb20gXCIuL01vZGVsL0Rpc2NcIlxuaW1wb3J0IGdldEdyYXZpdHlBY2MgZnJvbSBcIi4vUGh5c2ljL0dyYXZpdHlcIlxuaW1wb3J0IE5vZGUgZnJvbSBcIi4vRW50aXR5L05vZGVcIlxuaW1wb3J0IFZlY3RvcjJEIGZyb20gXCIuL1BoeXNpYy9WZWN0b3IyRFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYW5ldCBleHRlbmRzIE5vZGUge1xuICAgIC8vIHB1YmxpYyBtb2RlbDogRGlzY1xuICAgIHB1YmxpYyBtb2RlbDogRGlzY1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBpZDogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgY29vcmRzOiBWZWN0b3IyRCxcbiAgICAgICAgcmVhZG9ubHkgcmFkaXVzOiBudW1iZXIsXG4gICAgICAgIHJlYWRvbmx5IG1hc3M6IG51bWJlcixcbiAgICAgICAgcmVhZG9ubHkgY29sb3I6IHN0cmluZyxcbiAgICAgICAgcHVibGljIHZlbG9jaXR5OiBWZWN0b3IyRCxcbiAgICAgICAgcmVhZG9ubHkgcGxhbmV0czogUGxhbmV0W11cbiAgICAgICAgKSB7XG4gICAgICAgICAgICBzdXBlcigpXG4gICAgICAgICAgICB0aGlzLm1vZGVsID0gbmV3IERpc2ModGhpcy5jb29yZHMsIHRoaXMucmFkaXVzLCB0aGlzLmNvbG9yKVxuICAgICAgICB9XG5cbiAgICB1cGRhdGUoZGVsdGE6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5pZCA9PSBcImVhcnRoIGFsb3JzXCIpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY29vcmRzKVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5wbGFuZXRzKSB7XG4gICAgICAgICAgICBjb25zdCBvdGhlciA9IHRoaXMucGxhbmV0c1tpXVxuXG4gICAgICAgICAgICBpZiAob3RoZXIuaWQgPT0gdGhpcy5pZCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5ID0gdGhpcy52ZWxvY2l0eS5zdW0oZ2V0R3Jhdml0eUFjYyh0aGlzLCBvdGhlcikpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb29yZHMgPSB0aGlzLmNvb3Jkcy5zdW0odGhpcy52ZWxvY2l0eS5ub3JtYWxpemUoZGVsdGEpKVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlkLCB0aGlzLmNvb3JkcywgdGhpcy52ZWxvY2l0eS5ub3JtYWxpemUoZGVsdGEpKVxuICAgICAgICB0aGlzLm1vZGVsLmNvb3JkcyA9IHRoaXMuY29vcmRzXG4gICAgICAgIHN1cGVyLnVwZGF0ZShkZWx0YSlcbiAgICB9XG5cbiAgICBkcmF3KGNvbnRleHQ6IENvbnRleHQpOiB2b2lkIHtcbiAgICAgICAgY29udGV4dC5kcmF3KHRoaXMubW9kZWwpXG4gICAgICAgIHN1cGVyLmRyYXcoY29udGV4dClcbiAgICB9XG5cbiAgICBnZXRDb29yZGluYXRlcygpOiBWZWN0b3IyRCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvb3Jkc1xuICAgIH1cblxuICAgIHNldENvb3JkaW5hdGVzKGNvb3JkczogVmVjdG9yMkQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb29yZHMgPSBjb29yZHNcbiAgICB9XG59IiwiaW1wb3J0IENvbnRleHQgZnJvbSBcIi4vQ2FudmFzL0NvbnRleHRcIlxuaW1wb3J0IExpbmUgZnJvbSBcIi4vTW9kZWwvTGluZVwiXG5pbXBvcnQgUGxhbmV0IGZyb20gXCIuL1BsYW5ldFwiXG5pbXBvcnQgTm9kZSBmcm9tIFwiLi9FbnRpdHkvTm9kZVwiXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSBcIi4vUGh5c2ljL1ZlY3RvcjJEXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhbmV0VHJhaWwgZXh0ZW5kcyBOb2RlIHtcbiAgICBwcml2YXRlIHRyYWlsczogTGluZVtdXG4gICAgcHJpdmF0ZSBtYXhUcmFpbHMgPSAxNVxuICAgIHByaXZhdGUgcHJldmlvdXNDb29yZGluYXRlczogVmVjdG9yMkQgPSBudWxsXG4gXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwbGFuZXQ6IFBsYW5ldCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMudHJhaWxzID0gW11cbiAgICAgICAgdGhpcy5wcmV2aW91c0Nvb3JkaW5hdGVzID0gdGhpcy5wbGFuZXQuZ2V0Q29vcmRpbmF0ZXMoKS5jbG9uZSgpXG4gICAgfVxuXG4gICAgdXBkYXRlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy50cmFpbHMubGVuZ3RoID09IHRoaXMubWF4VHJhaWxzKSB7XG4gICAgICAgICAgICB0aGlzLnRyYWlscy5zaGlmdCgpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcmV2aW91c0Nvb3JkaW5hdGVzID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHJhaWxzLnB1c2goXG4gICAgICAgICAgICBuZXcgTGluZShcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzQ29vcmRpbmF0ZXMsXG4gICAgICAgICAgICAgICAgdGhpcy5wbGFuZXQuZ2V0Q29vcmRpbmF0ZXMoKS5jbG9uZSgpLFxuICAgICAgICAgICAgICAgIHRoaXMucGxhbmV0LmNvbG9yLFxuICAgICAgICAgICAgICAgIDAuMlxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIHRoaXMucHJldmlvdXNDb29yZGluYXRlcyA9IHRoaXMucGxhbmV0LmdldENvb3JkaW5hdGVzKCkuY2xvbmUoKVxuICAgIH1cblxuICAgIGRyYXcoY2FudmFzOiBDb250ZXh0KTogdm9pZCB7XG4gICAgICAgIHRoaXMudHJhaWxzLmZvckVhY2goZCA9PiBjYW52YXMuZHJhdyhkKSlcbiAgICB9XG59IiwiaW1wb3J0IEVudGl0eSBmcm9tIFwiLi4vRW50aXR5L0VudGl0eVwiXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi4vQ2FudmFzL0NvbnRleHRcIlxuaW1wb3J0IFNjZW5lIGZyb20gXCIuL1NjZW5lXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9DbGVhciBleHRlbmRzIFNjZW5lIGltcGxlbWVudHMgRW50aXR5IHtcbiAgICBwdWJsaWMgZW50aXRpZXM6IEVudGl0eVtdID0gW11cblxuICAgIGRyYXcoY29udGV4dDogQ29udGV4dCwgZGVsdGE/OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbnRpdGllcy5mb3JFYWNoKGUgPT4gZS5kcmF3KGNvbnRleHQsIGRlbHRhKSlcbiAgICB9XG59IiwiaW1wb3J0IEVudGl0eSBmcm9tIFwiLi4vRW50aXR5L0VudGl0eVwiXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi4vQ2FudmFzL0NvbnRleHRcIlxuaW1wb3J0IE5vZGUgZnJvbSBcIi4uL0VudGl0eS9Ob2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lIGV4dGVuZHMgTm9kZSB7XG4gICAgcHVibGljIGVudGl0aWVzOiBFbnRpdHlbXSA9IFtdXG5cbiAgICBjb25zdHJ1Y3RvciAocHVibGljIGlkOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgIH1cblxuICAgIGRyYXcoY29udGV4dDogQ29udGV4dCwgZGVsdGE/OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29udGV4dC5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjb250ZXh0LmNhbnZhcy5jYW52YXMud2lkdGgsIGNvbnRleHQuY2FudmFzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmVudGl0aWVzLmZvckVhY2goZSA9PiBlLmRyYXcoY29udGV4dCwgZGVsdGEpKVxuICAgICAgICBjb250ZXh0LmNvbnRleHQuc3Ryb2tlKCk7ICAgIFxuICAgIH1cbn0iLCJpbXBvcnQgU2NlbmUgZnJvbSBcIi4vU2NlbmVcIlxuaW1wb3J0IE5vQ2xlYXIgZnJvbSBcIi4vTm9DbGVhclwiXG5cbmV4cG9ydCB7XG4gICAgU2NlbmUsXG4gICAgTm9DbGVhclxufSIsImltcG9ydCBDb25maWcgZnJvbSBcIi4uL0NvbmZpZ1wiXG5cbmNvbnN0IGtpbG9tZXRyZVRvUHggPSAoZGlzdGFuY2U6IG51bWJlcik6IG51bWJlciA9PiB7XG4gICAgcmV0dXJuIGRpc3RhbmNlIC8gQ29uZmlnLmttUGVyUHhcbn1cblxuY29uc3QgcHhUb0tpbG9tZXRyZSA9IChweDogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgICByZXR1cm4gcHggKiBDb25maWcua21QZXJQeFxufVxuXG5leHBvcnQgeyBraWxvbWV0cmVUb1B4LCBweFRvS2lsb21ldHJlIH0iXSwic291cmNlUm9vdCI6IiJ9