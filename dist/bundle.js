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
    console.log(sun.pos.x);
    const earth = {
        pos: new _src_Physic_Vector2D__WEBPACK_IMPORTED_MODULE_2__["default"](sun.pos.x - 149.59e6, sun.pos.y),
        radius: Object(_src_Unit_Distance__WEBPACK_IMPORTED_MODULE_1__["pxToKilometre"])(10),
        mass: 5.972e24,
        color: "skyblue",
        // velocity: new Vector2D(0, Config.earthSpeed).dot(new Vector2D(1/5, 4/5)),
        velocity: new _src_Physic_Vector2D__WEBPACK_IMPORTED_MODULE_2__["default"](0, _src_Config__WEBPACK_IMPORTED_MODULE_0__["default"].earthSpeed),
    };
    return {
        "sun41": sun,
        "earth alors": earth
        // "interloper": {
        //     pos: new Vector2D(
        //         earth.pos.x - 3844000000,
        //         earth.pos.y,
        //     ),
        //     radius: pxToMeter(5),
        //     mass: 7.348e4,
        //     color: "red",
        //     velocity: new Vector2D(0, 0)
        // }
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
    const dist = Math.sqrt((r21_v.x * r21_v.x) + (r21_v.y * r21_v.y)) * 1000;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vcGxhbmV0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2FtZXJhL0NhbWVyYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2FudmFzL0NhbnZhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2FudmFzL0NvbnRleHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29udHJvbHMvS2V5Ym9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VudGl0eS9Ob2RlLnRzIiwid2VicGFjazovLy8uL3NyYy9Nb2RlbC9EaXNjLnRzIiwid2VicGFjazovLy8uL3NyYy9Nb2RlbC9MaW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9QaHlzaWMvR3Jhdml0eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGh5c2ljL1ZlY3RvcjJELnRzIiwid2VicGFjazovLy8uL3NyYy9QbGFuZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsYW5ldFRyYWlsLnRzIiwid2VicGFjazovLy8uL3NyYy9TY2VuZS9Ob0NsZWFyLnRzIiwid2VicGFjazovLy8uL3NyYy9TY2VuZS9TY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2NlbmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VuaXQvRGlzdGFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7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IFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgQ2FudmFzIGZyb20gXCIuL3NyYy9DYW52YXMvQ2FudmFzXCJcbmltcG9ydCBQbGFuZXQgZnJvbSBcIi4vc3JjL1BsYW5ldFwiXG5pbXBvcnQge1NjZW5lfSBmcm9tIFwiLi9zcmMvU2NlbmUvaW5kZXhcIlxuaW1wb3J0IENhbWVyYSBmcm9tIFwiLi9zcmMvQ2FtZXJhL0NhbWVyYVwiXG5pbXBvcnQgS2V5Ym9hcmQgZnJvbSBcIi4vc3JjL0NvbnRyb2xzL0tleWJvYXJkXCJcbmltcG9ydCBDb25maWcgZnJvbSBcIi4vc3JjL0NvbmZpZ1wiXG5pbXBvcnQgUGxhbmV0VHJhaWwgZnJvbSBcIi4vc3JjL1BsYW5ldFRyYWlsXCJcbmltcG9ydCBnZXRQbGFuZXRzIGZyb20gXCIuL3BsYW5ldHNcIlxuaW1wb3J0IFZlY3RvcjJEIGZyb20gXCIuL3NyYy9QaHlzaWMvVmVjdG9yMkRcIlxuXG5jb25zdCBtYWluID0gKGRlbHRhOiBudW1iZXIsIGJvYXJkczogQ2FudmFzW10pID0+IHtcbiAgICAvLyBjVGltZSArPSBkZWx0YVxuICAgIC8vIGlmIChjVGltZSA+IENvbmZpZy5kcGYpIHtcbiAgICBsZXQgbkJlZm9yZSA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKVxuICAgIGJvYXJkcy5mb3JFYWNoKGIgPT4ge1xuICAgICAgICBiLnVwZGF0ZShkZWx0YSAqIENvbmZpZy5nYW1lU3BlZWQpXG4gICAgfSlcbiAgICBsZXQgbkFmdGVyID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpXG4gICAgLy8gY1RpbWUgLT0gQ29uZmlnLmRwZlxuICAgIC8vIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IG1haW4oQ29uZmlnLm1pbGxpU2Vjb25kc1BlckZyYW1lLCBib2FyZHMpLCAoZGVsdGEgKiAxMDAwKSAtIChuQWZ0ZXIgLSBuQmVmb3JlKSlcbn1cblxuZG9jdW1lbnQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9IFwiY29tcGxldGVcIikge1xuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgY2FtZXJhID0gbmV3IENhbWVyYShDb25maWcuc3BhY2VXIC8gMiwgQ29uZmlnLnNwYWNlSCAvIDIsIENvbmZpZy56b29tTGV2ZWwpXG4gICAgY29uc3QgYmdCb2FyZCA9IG5ldyBDYW52YXMoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQsIGNhbWVyYSwgXCJiYWNrZ3JvdW5kXCIpXG4gICAgY29uc3QgcGxhbmV0Qm9hcmQgPSBuZXcgQ2FudmFzKGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0LCBjYW1lcmEsIFwibWFpblwiKVxuXG4gICAgYmdCb2FyZC5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KVxuICAgIHBsYW5ldEJvYXJkLmFwcGVuZFRvKGRvY3VtZW50LmJvZHkpXG4gICAgYmdCb2FyZC5jYW52YXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMDAwMDAwXCJcbiAgICBcbiAgICBjb25zdCBwbGFuZXRTY2VuZSA9IG5ldyBTY2VuZShcIm1haW5cIilcblxuICAgIGNvbnN0IGtleWJvYXJkQ29udHJvbHMgPSBuZXcgS2V5Ym9hcmQoY2FtZXJhLCBwbGFuZXRCb2FyZClcbiAgICBjb25zdCBwbGFuZXRzQ29uZmlnID0gZ2V0UGxhbmV0cyhwbGFuZXRCb2FyZCwgY2FtZXJhKVxuICAgIGxldCBwbGFuZXRzOiBQbGFuZXRbXSA9IFtdXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlib2FyZENvbnRyb2xzLmhhbmRsZUtleWJvYXJkLmJpbmQoa2V5Ym9hcmRDb250cm9scykpO1xuICAgIFxuICAgIGZvciAobGV0IGkgaW4gcGxhbmV0c0NvbmZpZykge1xuICAgICAgICBjb25zdCBwID0gcGxhbmV0c0NvbmZpZ1tpXVxuICAgICAgICBjb25zdCBwbGFuZXQgPSBuZXcgUGxhbmV0KGksXG4gICAgICAgICAgICBuZXcgVmVjdG9yMkQocC5wb3MueCwgcC5wb3MueSksXG4gICAgICAgICAgICBwLnJhZGl1cyxcbiAgICAgICAgICAgIHAubWFzcyxcbiAgICAgICAgICAgIHAuY29sb3IsXG4gICAgICAgICAgICBwLnZlbG9jaXR5LFxuICAgICAgICAgICAgcGxhbmV0c1xuICAgICAgICApXG4gICAgICAgIHBsYW5ldFNjZW5lLmFkZEVudGl0eShwbGFuZXQpXG4gICAgICAgIHBsYW5ldFNjZW5lLmFkZEVudGl0eShuZXcgUGxhbmV0VHJhaWwocGxhbmV0KSlcbiAgICAgICAgcGxhbmV0cy5wdXNoKHBsYW5ldClcbiAgICB9XG5cbiAgICBwbGFuZXRCb2FyZC5hZGRFbnRpdHkocGxhbmV0U2NlbmUpXG4gICAgXG4gICAgbWFpbihDb25maWcubWlsbGlTZWNvbmRzUGVyRnJhbWUsIFtiZ0JvYXJkLCBwbGFuZXRCb2FyZF0pXG4gfSIsImltcG9ydCBDYW52YXMgZnJvbSBcIi4vc3JjL0NhbnZhcy9DYW52YXNcIlxuaW1wb3J0IENhbWVyYSBmcm9tIFwiLi9zcmMvQ2FtZXJhL0NhbWVyYVwiXG5pbXBvcnQgQ29uZmlnIGZyb20gXCIuL3NyYy9Db25maWdcIlxuaW1wb3J0IHsgcHhUb0tpbG9tZXRyZSB9IGZyb20gXCIuL3NyYy9Vbml0L0Rpc3RhbmNlXCJcbmltcG9ydCBWZWN0b3IyRCBmcm9tIFwiLi9zcmMvUGh5c2ljL1ZlY3RvcjJEXCJcblxuZXhwb3J0IGRlZmF1bHQgKGNhbnZhczogQ2FudmFzLCBjYW1lcmE6IENhbWVyYSk6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0+IHtcbiAgICBjb25zdCBzdW4gPSB7XG4gICAgICAgIHBvczogbmV3IFZlY3RvcjJEKFxuICAgICAgICAgICAgcHhUb0tpbG9tZXRyZShjYW1lcmEucmVsYXRpdmVYKGNhbWVyYS56ICogKGNhbnZhcy5jYW52YXMud2lkdGggLyAyKSkpLFxuICAgICAgICAgICAgcHhUb0tpbG9tZXRyZShjYW1lcmEucmVsYXRpdmVZKGNhbWVyYS56ICogKGNhbnZhcy5jYW52YXMuaGVpZ2h0IC8gMikpKSxcbiAgICAgICAgKSxcbiAgICAgICAgcmFkaXVzOiBweFRvS2lsb21ldHJlKDEyMCksXG4gICAgICAgIG1hc3M6IDEuOTg5MWUzMCxcbiAgICAgICAgY29sb3I6IFwib3JhbmdlXCIsXG4gICAgICAgIHZlbG9jaXR5OiBuZXcgVmVjdG9yMkQoMCwgMClcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhzdW4ucG9zLngpXG4gICAgY29uc3QgZWFydGggPSB7XG4gICAgICAgIHBvczogbmV3IFZlY3RvcjJEKFxuICAgICAgICAgICAgc3VuLnBvcy54IC0gMTQ5LjU5ZTYsXG4gICAgICAgICAgICBzdW4ucG9zLnksXG4gICAgICAgICksXG4gICAgICAgIHJhZGl1czogcHhUb0tpbG9tZXRyZSgxMCksXG4gICAgICAgIG1hc3M6IDUuOTcyZTI0LFxuICAgICAgICBjb2xvcjogXCJza3libHVlXCIsXG4gICAgICAgIC8vIHZlbG9jaXR5OiBuZXcgVmVjdG9yMkQoMCwgQ29uZmlnLmVhcnRoU3BlZWQpLmRvdChuZXcgVmVjdG9yMkQoMS81LCA0LzUpKSxcbiAgICAgICAgdmVsb2NpdHk6IG5ldyBWZWN0b3IyRCgwLCBDb25maWcuZWFydGhTcGVlZCksXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgICAgICBcInN1bjQxXCI6IHN1bixcbiAgICAgICAgICAgIFwiZWFydGggYWxvcnNcIjogZWFydGhcbiAgICAgICAgICAgIC8vIFwiaW50ZXJsb3BlclwiOiB7XG4gICAgICAgICAgICAvLyAgICAgcG9zOiBuZXcgVmVjdG9yMkQoXG4gICAgICAgICAgICAvLyAgICAgICAgIGVhcnRoLnBvcy54IC0gMzg0NDAwMDAwMCxcbiAgICAgICAgICAgIC8vICAgICAgICAgZWFydGgucG9zLnksXG4gICAgICAgICAgICAvLyAgICAgKSxcbiAgICAgICAgICAgIC8vICAgICByYWRpdXM6IHB4VG9NZXRlcig1KSxcbiAgICAgICAgICAgIC8vICAgICBtYXNzOiA3LjM0OGU0LFxuICAgICAgICAgICAgLy8gICAgIGNvbG9yOiBcInJlZFwiLFxuICAgICAgICAgICAgLy8gICAgIHZlbG9jaXR5OiBuZXcgVmVjdG9yMkQoMCwgMClcbiAgICAgICAgICAgIC8vIH1cbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtZXJhIHtcbiAgICBwdWJsaWMgeDogbnVtYmVyID0gMFxuICAgIHB1YmxpYyB5OiBudW1iZXIgPSAwXG4gICAgcHVibGljIHo6IG51bWJlciA9IDFcblxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy54ID0geFxuICAgICAgICB0aGlzLnkgPSB5XG4gICAgICAgIHRoaXMueiA9IHpcbiAgICB9XG5cbiAgICBYKHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnpUcmFuc2Zvcm0oeCAtIHRoaXMueClcbiAgICB9XG5cbiAgICBZKHk6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnpUcmFuc2Zvcm0oeSAtIHRoaXMueSlcbiAgICB9XG5cbiAgICB6VHJhbnNmb3JtKHY6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB2ICogKDEgLyB0aGlzLnopXG4gICAgfVxuXG4gICAgcmVsYXRpdmVYKHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnggKyB4XG4gICAgfVxuXG4gICAgcmVsYXRpdmVZKHk6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnkgKyB5XG4gICAgfVxufSIsImltcG9ydCBFbnRpdHkgZnJvbSBcIi4uL0VudGl0eS9FbnRpdHlcIlxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4vQ29udGV4dFwiXG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9DYW1lcmEvQ2FtZXJhXCJcbmltcG9ydCBOb2RlIGZyb20gXCIuLi9FbnRpdHkvTm9kZVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyBleHRlbmRzIE5vZGV7XG4gICAgcmVhZG9ubHkgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudFxuICAgIHJlYWRvbmx5IGNvbnRleHQ6IENvbnRleHRcbiAgICBwdWJsaWMgZW50aXRpZXM6IEVudGl0eVtdID0gW11cblxuICAgIGNvbnN0cnVjdG9yKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBjYW1lcmE6IENhbWVyYSwgcHVibGljIGlkOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIilcbiAgICAgICAgdGhpcy5jYW52YXMuaWQgPSB0aGlzLmlkXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGhcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0XG4gICAgICAgIHRoaXMuY29udGV4dCA9IG5ldyBDb250ZXh0KHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSwgY2FtZXJhLCB0aGlzKVxuICAgIH1cblxuICAgIGFwcGVuZFRvKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpXG4gICAgfVxuXG4gICAgdXBkYXRlKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbnRpdGllcy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgZS51cGRhdGUoZGVsdGEpXG4gICAgICAgICAgICBlLmRyYXcodGhpcy5jb250ZXh0LCBkZWx0YSlcbiAgICAgICAgfSlcbiAgICB9XG59IiwiaW1wb3J0IE1vZGVsIGZyb20gXCIuLi9Nb2RlbC9Nb2RlbFwiXG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9DYW1lcmEvQ2FtZXJhXCJcbmltcG9ydCBDYW52YXMgZnJvbSBcIi4vQ2FudmFzXCJcbmltcG9ydCBUZXh0IGZyb20gXCIuLi9UZXh0L1RleHRcIlxuaW1wb3J0IENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGV4dCB7XG4gICAgY29uc3RydWN0b3IgKFxuICAgICAgICByZWFkb25seSBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXG4gICAgICAgIHJlYWRvbmx5IGNhbWVyYTogQ2FtZXJhLFxuICAgICAgICByZWFkb25seSBjYW52YXM6IENhbnZhcyxcbiAgICAgICAgKSB7fVxuXG4gICAgZHJhdyhtb2RlbDogTW9kZWwpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpXG4gICAgICAgIG1vZGVsLmRyYXcodGhpcylcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpXG4gICAgfVxuXG4gICAgYXJjKHg6IG51bWJlciwgeTogbnVtYmVyLCByOiBudW1iZXIsIGFzOiBudW1iZXIsIGFlOiBudW1iZXIsIGxpbmVXaWR0aDogbnVtYmVyID0gMSk6IENvbnRleHQge1xuICAgICAgICB0aGlzLmNvbnRleHQubGluZVdpZHRoID0gbGluZVdpZHRoXG4gICAgICAgIHRoaXMuY29udGV4dC5hcmModGhpcy5jYW1lcmEuWCh4KSwgdGhpcy5jYW1lcmEuWSh5KSwgdGhpcy5jYW1lcmEuelRyYW5zZm9ybShyKSwgYXMsIGFlKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIHdyaXRlKHRleHQ6IFRleHQsIGxpbmVzOiBzdHJpbmdbXSkge1xuICAgICAgICBjb25zdCBmcyA9IHRleHQuZ2V0Rm9udFNpemUoKVxuICAgICAgICBjb25zdCBmZiA9IHRleHQuZ2V0Rm9udEZhbWlseSgpXG4gICAgICAgIGNvbnN0IGMgPSB0ZXh0LmdldENvb3JkaW5hdGVzKClcblxuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKClcbiAgICAgICAgdGhpcy5jb250ZXh0LmZvbnQgPSBgJHtDb25maWcuZm9udFNpemV9cHggJHtmZn1gXG5cbiAgICAgICAgbGluZXMubWFwKChsaW5lLCBpKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQobGluZSwgK2MueCwgK2MueSArIChmcyAqIGkpKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZpbGxSZWN0KHg6IG51bWJlciwgeTogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlciwgY29sb3I6IHN0cmluZyk6IENvbnRleHQge1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3JcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KHRoaXMuY2FtZXJhLlgoeCksIHRoaXMuY2FtZXJhLlkoeSksIHcsIGgpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgZmlsbChjb2xvcjogc3RyaW5nKTogQ29udGV4dCB7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBjb2xvclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbCgpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgbGluZShmcm9tWDogbnVtYmVyLCBmcm9tWTogbnVtYmVyLCB0b1g6IG51bWJlciwgdG9ZOiBudW1iZXIsIGNvbG9yOiBzdHJpbmcsIGxpbmVXaWR0aDogbnVtYmVyID0gMSkge1xuICAgICAgICB0aGlzLmNvbnRleHQubGluZVdpZHRoID0gbGluZVdpZHRoXG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG9yXG4gICAgICAgIHRoaXMuY29udGV4dC5tb3ZlVG8odGhpcy5jYW1lcmEuWChmcm9tWCksIHRoaXMuY2FtZXJhLlkoZnJvbVkpKVxuICAgICAgICB0aGlzLmNvbnRleHQubGluZVRvKHRoaXMuY2FtZXJhLlgodG9YKSwgdGhpcy5jYW1lcmEuWSh0b1kpKVxuICAgICAgICB0aGlzLmNvbnRleHQuY2xvc2VQYXRoKClcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpXG4gICAgfVxufVxuXG50eXBlIERyYXdGdW5jdGlvbiA9IChjdHg6IENvbnRleHQpID0+IHZvaWRcblxuZXhwb3J0IHtcbiAgICBEcmF3RnVuY3Rpb25cbn0iLCJjb25zdCBjRHVyYXRpb24gPSAwXG5jb25zdCBmcHMgPSA2MFxuY29uc3QgbWlsbGlTZWNvbmRzUGVyRnJhbWUgPSAxIC8gZnBzXG5sZXQgem9vbUxldmVsID0gMi41XG5sZXQgem9vbU1pbiA9IDAuMVxuY29uc3Qgem9vbUFjdGlvblBvdyA9IDAuMTBcbmNvbnN0IGRlY2FsQnlNb3ZlID0gMjVcblxubGV0IG1heFBsYW5ldHMgPSA0XG5sZXQgcGxhbmV0c1JhZGl1c0RlZiA9IHttaW46IDMsIG1heDogNzB9XG5jb25zdCBwbGFuZXRzTWluRGlzdCA9IDEwXG5jb25zdCBwbGFuZXRCYXNlU3BlZWQgPSA0MFxuXG5jb25zdCBzcGFjZVcgPSAxMDAwMFxuY29uc3Qgc3BhY2VIID0gMTAwMDBcbmNvbnN0IGRlY2FsWCA9IHNwYWNlVyAvIDJcbmNvbnN0IGRlY2FsWSA9IHNwYWNlSCAvIDJcblxuY29uc3QgZGlzdFBvdyA9IDVcblxuY29uc3QgZm9udFNpemUgPSAxNFxubGV0IGRlYnVnID0gbnVsbFxuY29uc3QgZWFydGhTcGVlZCA9IDI5Ljc4ICogMTAwMDAwIC8gMS4xNCAvLyBrbS9zXG5jb25zdCBHID0gTWF0aC5wb3coMTAsIC0xMSkgKiA2LjY3NFxuXG5lbnVtIFBsYXlNb2RlIHtcbiAgICBQTEFZLFxuICAgIFBBVVNFXG59XG5cbmNvbnN0IG1vZGUgPSBQbGF5TW9kZS5QTEFZXG4vLyBjb25zdCBrbVBlclB4ID0gMS4zZTVcbmNvbnN0IGttUGVyUHggPSAxLjhlNVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZ2FtZVNwZWVkOiAzNjUgKiAyNCAqIDYwICogNjAgKiAxNTAwMCxcbiAgICAvLyBnYW1lU3BlZWQ6IDEwMCxcbiAgICBrbVBlclB4LFxuICAgIG1QZXJQeDoga21QZXJQeCAqIDEwMDAsXG4gICAga2dQZXJQeERlbnNpdHk6IDEyMDAsXG4gICAgRyxcbiAgICBjRHVyYXRpb24sXG4gICAgZnBzLFxuICAgIHpvb21MZXZlbCxcbiAgICB6b29tQWN0aW9uUG93LFxuICAgIGRlY2FsQnlNb3ZlLFxuICAgIG1heFBsYW5ldHMsXG4gICAgcGxhbmV0c1JhZGl1c0RlZixcbiAgICBwbGFuZXRzTWluRGlzdCxcbiAgICBwbGFuZXRCYXNlU3BlZWQsXG4gICAgc3BhY2VXLFxuICAgIHNwYWNlSCxcbiAgICBkZWNhbFgsXG4gICAgZGVjYWxZLFxuICAgIGRpc3RQb3csXG4gICAgZm9udFNpemUsXG4gICAgZGVidWcsXG4gICAgUGxheU1vZGUsXG4gICAgbW9kZSxcbiAgICB6b29tTWluLFxuICAgIGVhcnRoU3BlZWQsXG4gICAgbWlsbGlTZWNvbmRzUGVyRnJhbWVcbn0iLCJpbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9DYW1lcmEvQ2FtZXJhXCJcbmltcG9ydCBDb25maWcgZnJvbSBcIi4uL0NvbmZpZ1wiXG5pbXBvcnQgQ2FudmFzIGZyb20gXCIuLi9DYW52YXMvQ2FudmFzXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5Ym9hcmQge1xuICAgIHB1YmxpYyBhY3Rpb25CeUtleWNvZGU6IHtba2V5OiBudW1iZXJdOiBGdW5jdGlvbn1cblxuICAgIGNvbnN0cnVjdG9yKHJlYWRvbmx5IGNhbWVyYTogQ2FtZXJhLCByZWFkb25seSBjYW52YXM6IENhbnZhcykge1xuICAgICAgICB0aGlzLmFjdGlvbkJ5S2V5Y29kZSA9IHtcbiAgICAgICAgICAgIC8vIDY4OiAoKSA9PiB7ZGVidWcuVG9nZ2xlKCk7fSxcbiAgICAgICAgICAgIC8vIDgzOiAoKSA9PiB7bW9kZSA9IG1vZGUgPT0gUEFVU0UgPyBQTEFZIDogUEFVU0U7fSxcbiAgICAgICAgICAgIDgyOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEueCA9IDBcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS55ID0gMFxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnogPSAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgOTA6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYW1lcmEueiA8PSBDb25maWcuem9vbU1pbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEueiAtPSBDb25maWcuem9vbUFjdGlvblBvd1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDg4OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEueiArPSBDb25maWcuem9vbUFjdGlvblBvd1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDM3OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FtZXJhLnggLSBDb25maWcuZGVjYWxCeU1vdmUgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnggLT0gQ29uZmlnLmRlY2FsQnlNb3ZlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMzg6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYW1lcmEueSAtIENvbmZpZy5kZWNhbEJ5TW92ZSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEueSAtPSBDb25maWcuZGVjYWxCeU1vdmVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAzOTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhbWVyYS54ID49IENvbmZpZy5zcGFjZVcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS54ICs9IENvbmZpZy5kZWNhbEJ5TW92ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDQwOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FtZXJhLnkgPj0gQ29uZmlnLnNwYWNlSCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnkgKz0gQ29uZmlnLmRlY2FsQnlNb3ZlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVLZXlib2FyZChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5hY3Rpb25CeUtleWNvZGUgPT0gdW5kZWZpbmVkIHx8IFxuICAgICAgICAgICAgIXRoaXMuYWN0aW9uQnlLZXljb2RlW2V2ZW50LmtleUNvZGVdKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hY3Rpb25CeUtleWNvZGVbZXZlbnQua2V5Q29kZV0oKTtcbiAgICB9XG59IiwiaW1wb3J0IEVudGl0eSBmcm9tIFwiLi9FbnRpdHlcIlxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL0NhbnZhcy9Db250ZXh0XCJcblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgTm9kZSBpbXBsZW1lbnRzIEVudGl0eSB7XG4gICAgcHVibGljIGVudGl0aWVzOiBFbnRpdHlbXSA9IFtdXG5cbiAgICB1cGRhdGUoZGVsdGE6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmVudGl0aWVzLmZvckVhY2goZSA9PiBlLnVwZGF0ZShkZWx0YSkpXG4gICAgfVxuXG4gICAgZHJhdyhjb250ZXh0OiBDb250ZXh0LCBkZWx0YT86IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmVudGl0aWVzLmZvckVhY2goZSA9PiBlLmRyYXcoY29udGV4dCwgZGVsdGEpKVxuICAgIH1cblxuICAgIGdldEVudGl0aWVzKCk6IEVudGl0eVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50aXRpZXNcbiAgICB9XG5cbiAgICBhZGRFbnRpdHkoZW50aXR5OiBFbnRpdHkpOiB0aGlzIHtcbiAgICAgICAgdGhpcy5lbnRpdGllcy5wdXNoKGVudGl0eSlcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG59IiwiaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL0NhbnZhcy9Db250ZXh0XCJcbmltcG9ydCBWZWN0b3IyRCBmcm9tIFwiLi4vUGh5c2ljL1ZlY3RvcjJEXCJcbmltcG9ydCB7IGtpbG9tZXRyZVRvUHgsIHB4VG9LaWxvbWV0cmUgfSBmcm9tIFwiLi4vVW5pdC9EaXN0YW5jZVwiXG5pbXBvcnQgTW9kZWwgZnJvbSBcIi4vTW9kZWxcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNjIGltcGxlbWVudHMgTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjb29yZHM6IFZlY3RvcjJELCBwdWJsaWMgcmFkaXVzOiBudW1iZXIsIHB1YmxpYyBjb2xvcjogc3RyaW5nKSB7fVxuXG4gICAgZHJhdyhjdHg6IENvbnRleHQpIHtcbiAgICAgICAgY3R4LmFyYyhraWxvbWV0cmVUb1B4KHRoaXMuY29vcmRzLngpLCBraWxvbWV0cmVUb1B4KHRoaXMuY29vcmRzLnkpLCBraWxvbWV0cmVUb1B4KHRoaXMucmFkaXVzKSwgMCwgMiAqIE1hdGguUEkpXG4gICAgICAgIGN0eC5maWxsKHRoaXMuY29sb3IpXG4gICAgfVxuXG4gICAgZ2V0Q29vcmRpbmF0ZXMoKTogVmVjdG9yMkQge1xuICAgICAgICByZXR1cm4gdGhpcy5jb29yZHNcbiAgICB9XG5cbiAgICBzZXRDb29yZGluYXRlcyhjb29yZHM6IFZlY3RvcjJEKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29vcmRzID0gY29vcmRzXG4gICAgfVxufSIsImltcG9ydCBDb250ZXh0IGZyb20gXCIuLi9DYW52YXMvQ29udGV4dFwiXG5pbXBvcnQgTm9kZSBmcm9tIFwiLi4vRW50aXR5L05vZGVcIlxuaW1wb3J0IFZlY3RvcjJEIGZyb20gXCIuLi9QaHlzaWMvVmVjdG9yMkRcIlxuaW1wb3J0IHsgcHhUb0tpbG9tZXRyZSB9IGZyb20gXCIuLi9Vbml0L0Rpc3RhbmNlXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG90IGV4dGVuZHMgTm9kZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBmcm9tOiBWZWN0b3IyRCxcbiAgICAgICAgcHVibGljIHRvOiBWZWN0b3IyRCxcbiAgICAgICAgcHVibGljIGNvbG9yOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBsaW5lV2lkdGg6IG51bWJlciA9IDFcbiAgICApIHtcbiAgICAgICAgc3VwZXIoKVxuICAgIH1cblxuICAgIGRyYXcoY3R4OiBDb250ZXh0KSB7XG4gICAgICAgIGN0eC5saW5lKFxuICAgICAgICAgICAgcHhUb0tpbG9tZXRyZSh0aGlzLmZyb20ueCksXG4gICAgICAgICAgICBweFRvS2lsb21ldHJlKHRoaXMuZnJvbS55KSxcbiAgICAgICAgICAgIHB4VG9LaWxvbWV0cmUodGhpcy50by54KSxcbiAgICAgICAgICAgIHB4VG9LaWxvbWV0cmUodGhpcy50by55KSxcbiAgICAgICAgICAgIHRoaXMuY29sb3IsXG4gICAgICAgICAgICB0aGlzLmxpbmVXaWR0aFxuICAgICAgICApXG4gICAgfVxuXG4gICAgZ2V0Q29vcmRpbmF0ZXMoKTogVmVjdG9yMkQge1xuICAgICAgICByZXR1cm4gdGhpcy5mcm9tXG4gICAgfVxuXG4gICAgc2V0Q29vcmRpbmF0ZXMoY29vcmRzOiBWZWN0b3IyRCk6IHZvaWQge1xuICAgICAgICB0aGlzLmZyb20gPSBjb29yZHNcbiAgICB9XG59IiwiaW1wb3J0IFBsYW5ldCBmcm9tIFwiLi4vUGxhbmV0XCJcbmltcG9ydCBDb25maWcgZnJvbSBcIi4uL0NvbmZpZ1wiXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSBcIi4vVmVjdG9yMkRcIlxuXG5jb25zdCBnZXRGb3JjZSA9IChhOiBQbGFuZXQsIGI6IFBsYW5ldCk6IFZlY3RvcjJEID0+IHtcbiAgICAvLyBjb25zdCBkaXN0ID0gR2VvbWV0cnkuZ2V0RGlzdGFuY2VCZXR3ZWVuT2JqZWN0cyhhLmNvb3JkcywgYi5jb29yZHMpXG4gICAgY29uc3QgcjIxX3YgPSBiLmNvb3Jkcy5zdWIoYS5jb29yZHMpXG4gICAgY29uc3QgZGlzdCA9IE1hdGguc3FydCgocjIxX3YueCpyMjFfdi54KSArIChyMjFfdi55KnIyMV92LnkpKSAqIDEwMDBcbiAgICBjb25zdCBmID0gKENvbmZpZy5HICogYS5tYXNzICogYi5tYXNzKSAvIChkaXN0ICogZGlzdClcbiAgICBjb25zdCBmMjFfdiA9IHIyMV92LmRpdmlkZShkaXN0KS5kb3QoLWYqLTEpXG4gICAgcmV0dXJuIGYyMV92XG59XG5cbmV4cG9ydCBkZWZhdWx0IChhOiBQbGFuZXQsIGI6IFBsYW5ldCk6IFZlY3RvcjJEID0+IHtcbiAgICByZXR1cm4gZ2V0Rm9yY2UoYSwgYikuZGl2aWRlKGEubWFzcylcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBWZWN0b3IyRCB7XG4gICAgcHVibGljIHg6IG51bWJlclxuICAgIHB1YmxpYyB5OiBudW1iZXJcbiAgICBjb25zdHJ1Y3RvciAoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy54ID0geFxuICAgICAgICB0aGlzLnkgPSB5XG4gICAgfVxuXG4gICAgc3ViKHZlYzogVmVjdG9yMkQgfCBudW1iZXIpOiBWZWN0b3IyRCB7XG4gICAgICAgIGlmICh0eXBlb2YgdmVjID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICB2ZWMgPSBuZXcgVmVjdG9yMkQodmVjLCB2ZWMpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyRCh0aGlzLngtdmVjLngsIHRoaXMueS12ZWMueSlcbiAgICB9XG5cbiAgICAvLyBkb3QgcHJvZHVjdFxuICAgIGRvdCh2ZWM6IFZlY3RvcjJEIHwgbnVtYmVyKTogVmVjdG9yMkQge1xuICAgICAgICBpZiAodHlwZW9mIHZlYyA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdmVjID0gbmV3IFZlY3RvcjJEKHZlYywgdmVjKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMkQodGhpcy54ICogdmVjLngsIHRoaXMueSAqIHZlYy55KVxuICAgIH1cblxuICAgIHN1bSh2ZWM6IFZlY3RvcjJEIHwgbnVtYmVyKTogVmVjdG9yMkQge1xuICAgICAgICBpZiAodHlwZW9mIHZlYyA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdmVjID0gbmV3IFZlY3RvcjJEKHZlYywgdmVjKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMkQodGhpcy54ICsgdmVjLngsIHRoaXMueSArIHZlYy55KVxuICAgIH1cblxuICAgIGRpdmlkZSh2ZWM6IFZlY3RvcjJEIHwgbnVtYmVyKTogVmVjdG9yMkQge1xuICAgICAgICBpZiAodHlwZW9mIHZlYyA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdmVjID0gbmV3IFZlY3RvcjJEKHZlYywgdmVjKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMkQodGhpcy54IC8gdmVjLngsIHRoaXMueSAvIHZlYy55KVxuICAgIH1cblxuICAgIC8vIG5vcm1hbGl6ZSBhbGxvd3MgdG8gbm9ybWFsaXplIHRoZSB2ZWN0b3IgdG9cbiAgICAvLyBhbiBvdGhlciBudW1iZXIuIFRoZSBoZWxkIHZhbHVlIHNob3VsZCB0cmFuc2Zvcm1cbiAgICAvLyB0aGUgeCwgeSB2YWx1ZXMgdG8gdGhlIG51bWJlciAxIG9mIHRoZSBwYXNzZWQgbnVtYmVyXG4gICAgbm9ybWFsaXplIChudW1iZXI6IG51bWJlciB8IG51bWJlcik6IFZlY3RvcjJEIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG90KG5ldyBWZWN0b3IyRChudW1iZXIsIG51bWJlcikpXG4gICAgfVxuXG4gICAgY2xvbmUoKTogVmVjdG9yMkQge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjJEKHRoaXMueCwgdGhpcy55KVxuICAgIH1cbn0iLCJpbXBvcnQgQ29udGV4dCBmcm9tIFwiLi9DYW52YXMvQ29udGV4dFwiXG5pbXBvcnQgRGlzYyBmcm9tIFwiLi9Nb2RlbC9EaXNjXCJcbmltcG9ydCBnZXRHcmF2aXR5QWNjIGZyb20gXCIuL1BoeXNpYy9HcmF2aXR5XCJcbmltcG9ydCBOb2RlIGZyb20gXCIuL0VudGl0eS9Ob2RlXCJcbmltcG9ydCBWZWN0b3IyRCBmcm9tIFwiLi9QaHlzaWMvVmVjdG9yMkRcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGFuZXQgZXh0ZW5kcyBOb2RlIHtcbiAgICAvLyBwdWJsaWMgbW9kZWw6IERpc2NcbiAgICBwdWJsaWMgbW9kZWw6IERpc2NcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgaWQ6IHN0cmluZyxcbiAgICAgICAgcHVibGljIGNvb3JkczogVmVjdG9yMkQsXG4gICAgICAgIHJlYWRvbmx5IHJhZGl1czogbnVtYmVyLFxuICAgICAgICByZWFkb25seSBtYXNzOiBudW1iZXIsXG4gICAgICAgIHJlYWRvbmx5IGNvbG9yOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyB2ZWxvY2l0eTogVmVjdG9yMkQsXG4gICAgICAgIHJlYWRvbmx5IHBsYW5ldHM6IFBsYW5ldFtdXG4gICAgICAgICkge1xuICAgICAgICAgICAgc3VwZXIoKVxuICAgICAgICAgICAgdGhpcy5tb2RlbCA9IG5ldyBEaXNjKHRoaXMuY29vcmRzLCB0aGlzLnJhZGl1cywgdGhpcy5jb2xvcilcbiAgICAgICAgfVxuXG4gICAgdXBkYXRlKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaWQgPT0gXCJlYXJ0aCBhbG9yc1wiKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNvb3JkcylcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMucGxhbmV0cykge1xuICAgICAgICAgICAgY29uc3Qgb3RoZXIgPSB0aGlzLnBsYW5ldHNbaV1cblxuICAgICAgICAgICAgaWYgKG90aGVyLmlkID09IHRoaXMuaWQpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYWNjID0gZ2V0R3Jhdml0eUFjYyh0aGlzLCBvdGhlcilcbiAgICAgICAgICAgIGNvbnN0IGFjY05vcm1hbGl6ZWQgPSBhY2MuZG90KGRlbHRhKVxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHRoaXMudmVsb2NpdHkuc3VtKGFjY05vcm1hbGl6ZWQpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb29yZHMgPSB0aGlzLmNvb3Jkcy5zdW0odGhpcy52ZWxvY2l0eSlcbiAgICAgICAgdGhpcy5tb2RlbC5jb29yZHMgPSB0aGlzLmNvb3Jkc1xuICAgICAgICBzdXBlci51cGRhdGUoZGVsdGEpXG4gICAgfVxuXG4gICAgZHJhdyhjb250ZXh0OiBDb250ZXh0KTogdm9pZCB7XG4gICAgICAgIGNvbnRleHQuZHJhdyh0aGlzLm1vZGVsKVxuICAgICAgICBzdXBlci5kcmF3KGNvbnRleHQpXG4gICAgfVxuXG4gICAgZ2V0Q29vcmRpbmF0ZXMoKTogVmVjdG9yMkQge1xuICAgICAgICByZXR1cm4gdGhpcy5jb29yZHNcbiAgICB9XG5cbiAgICBzZXRDb29yZGluYXRlcyhjb29yZHM6IFZlY3RvcjJEKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29vcmRzID0gY29vcmRzXG4gICAgfVxufSIsImltcG9ydCBDb250ZXh0IGZyb20gXCIuL0NhbnZhcy9Db250ZXh0XCJcbmltcG9ydCBMaW5lIGZyb20gXCIuL01vZGVsL0xpbmVcIlxuaW1wb3J0IFBsYW5ldCBmcm9tIFwiLi9QbGFuZXRcIlxuaW1wb3J0IE5vZGUgZnJvbSBcIi4vRW50aXR5L05vZGVcIlxuaW1wb3J0IFZlY3RvcjJEIGZyb20gXCIuL1BoeXNpYy9WZWN0b3IyRFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYW5ldFRyYWlsIGV4dGVuZHMgTm9kZSB7XG4gICAgcHJpdmF0ZSB0cmFpbHM6IExpbmVbXVxuICAgIHByaXZhdGUgbWF4VHJhaWxzID0gOTk5XG4gICAgcHJpdmF0ZSBwcmV2aW91c0Nvb3JkaW5hdGVzOiBWZWN0b3IyRCA9IG51bGxcbiBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBsYW5ldDogUGxhbmV0KSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy50cmFpbHMgPSBbXVxuICAgIH1cblxuICAgIHVwZGF0ZShfOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMudHJhaWxzLmxlbmd0aCA9PSB0aGlzLm1heFRyYWlscykge1xuICAgICAgICAgICAgdGhpcy50cmFpbHMuc2hpZnQoKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJldmlvdXNDb29yZGluYXRlcyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy50cmFpbHMucHVzaChcbiAgICAgICAgICAgICAgICBuZXcgTGluZShcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c0Nvb3JkaW5hdGVzLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYW5ldC5nZXRDb29yZGluYXRlcygpLmNsb25lKCksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhbmV0LmNvbG9yLFxuICAgICAgICAgICAgICAgICAgICAwLjJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByZXZpb3VzQ29vcmRpbmF0ZXMgPSB0aGlzLnBsYW5ldC5nZXRDb29yZGluYXRlcygpLmNsb25lKClcbiAgICB9XG5cbiAgICBkcmF3KGNhbnZhczogQ29udGV4dCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRyYWlscy5mb3JFYWNoKGQgPT4gY2FudmFzLmRyYXcoZCkpXG4gICAgfVxufSIsImltcG9ydCBFbnRpdHkgZnJvbSBcIi4uL0VudGl0eS9FbnRpdHlcIlxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL0NhbnZhcy9Db250ZXh0XCJcbmltcG9ydCBTY2VuZSBmcm9tIFwiLi9TY2VuZVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vQ2xlYXIgZXh0ZW5kcyBTY2VuZSBpbXBsZW1lbnRzIEVudGl0eSB7XG4gICAgcHVibGljIGVudGl0aWVzOiBFbnRpdHlbXSA9IFtdXG5cbiAgICBkcmF3KGNvbnRleHQ6IENvbnRleHQsIGRlbHRhPzogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZW50aXRpZXMuZm9yRWFjaChlID0+IGUuZHJhdyhjb250ZXh0LCBkZWx0YSkpXG4gICAgfVxufSIsImltcG9ydCBFbnRpdHkgZnJvbSBcIi4uL0VudGl0eS9FbnRpdHlcIlxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL0NhbnZhcy9Db250ZXh0XCJcbmltcG9ydCBOb2RlIGZyb20gXCIuLi9FbnRpdHkvTm9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZSBleHRlbmRzIE5vZGUge1xuICAgIHB1YmxpYyBlbnRpdGllczogRW50aXR5W10gPSBbXVxuXG4gICAgY29uc3RydWN0b3IgKHB1YmxpYyBpZDogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICB9XG5cbiAgICBkcmF3KGNvbnRleHQ6IENvbnRleHQsIGRlbHRhPzogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnRleHQuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY29udGV4dC5jYW52YXMuY2FudmFzLndpZHRoLCBjb250ZXh0LmNhbnZhcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5lbnRpdGllcy5mb3JFYWNoKGUgPT4gZS5kcmF3KGNvbnRleHQsIGRlbHRhKSlcbiAgICAgICAgY29udGV4dC5jb250ZXh0LnN0cm9rZSgpOyAgICBcbiAgICB9XG59IiwiaW1wb3J0IFNjZW5lIGZyb20gXCIuL1NjZW5lXCJcbmltcG9ydCBOb0NsZWFyIGZyb20gXCIuL05vQ2xlYXJcIlxuXG5leHBvcnQge1xuICAgIFNjZW5lLFxuICAgIE5vQ2xlYXJcbn0iLCJpbXBvcnQgQ29uZmlnIGZyb20gXCIuLi9Db25maWdcIlxuXG5jb25zdCBraWxvbWV0cmVUb1B4ID0gKGRpc3RhbmNlOiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICAgIHJldHVybiBkaXN0YW5jZSAvIENvbmZpZy5rbVBlclB4XG59XG5cbmNvbnN0IHB4VG9LaWxvbWV0cmUgPSAocHg6IG51bWJlcik6IG51bWJlciA9PiB7XG4gICAgcmV0dXJuIHB4ICogQ29uZmlnLmttUGVyUHhcbn1cblxuZXhwb3J0IHsga2lsb21ldHJlVG9QeCwgcHhUb0tpbG9tZXRyZSB9Il0sInNvdXJjZVJvb3QiOiIifQ==