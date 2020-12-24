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
/* harmony import */ var _src_Physic_Velocity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/Physic/Velocity */ "./src/Physic/Velocity.ts");
/* harmony import */ var _src_Physic_Coordinates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/Physic/Coordinates */ "./src/Physic/Coordinates.ts");
/* harmony import */ var _src_PlanetTrail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/PlanetTrail */ "./src/PlanetTrail.ts");
/* harmony import */ var _planets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./planets */ "./planets.ts");










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
    const planetsConfig = Object(_planets__WEBPACK_IMPORTED_MODULE_9__["default"])(planetBoard, camera);
    let planets = [];
    document.querySelector("body").addEventListener("keydown", keyboardControls.handleKeyboard.bind(keyboardControls));
    for (let i in planetsConfig) {
        const p = planetsConfig[i];
        const planet = new _src_Planet__WEBPACK_IMPORTED_MODULE_1__["default"](i, new _src_Physic_Coordinates__WEBPACK_IMPORTED_MODULE_7__["default"](p.x, p.y), p.radius, p.mass, p.color, new _src_Physic_Velocity__WEBPACK_IMPORTED_MODULE_6__["default"](p.velocity[0], p.velocity[1]), planets);
        planetScene.addEntity(planet);
        planetScene.addEntity(new _src_PlanetTrail__WEBPACK_IMPORTED_MODULE_8__["default"](planet));
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
/* harmony import */ var _src_Unit_Mass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/Unit/Mass */ "./src/Unit/Mass.ts");



/* harmony default export */ __webpack_exports__["default"] = ((canvas, camera) => {
    const sun = {
        x: camera.relativeX(camera.z * (canvas.canvas.width / 2)),
        y: camera.relativeY(camera.z * (canvas.canvas.height / 2)),
        radius: 120,
        mass: new _src_Unit_Mass__WEBPACK_IMPORTED_MODULE_2__["KiloGram"](1.9891e30),
        color: "orange",
        velocity: [0, 0]
    };
    const earth = {
        x: sun.x - Object(_src_Unit_Distance__WEBPACK_IMPORTED_MODULE_1__["meterToPx"])(new _src_Unit_Distance__WEBPACK_IMPORTED_MODULE_1__["Meter"](149.96e9)),
        y: sun.y,
        radius: 30,
        mass: new _src_Unit_Mass__WEBPACK_IMPORTED_MODULE_2__["KiloGram"](5.972e24),
        color: "skyblue",
        velocity: [Object(_src_Unit_Distance__WEBPACK_IMPORTED_MODULE_1__["meterToPx"])(_src_Config__WEBPACK_IMPORTED_MODULE_0__["default"].earthSpeed.getDistance()) * 1 / 3, Object(_src_Unit_Distance__WEBPACK_IMPORTED_MODULE_1__["meterToPx"])(_src_Config__WEBPACK_IMPORTED_MODULE_0__["default"].earthSpeed.getDistance()) * 2 / 3]
    };
    return {
        "sun41": sun,
        "earth alors": earth,
        "interloper": {
            x: sun.x + Object(_src_Unit_Distance__WEBPACK_IMPORTED_MODULE_1__["meterToPx"])(new _src_Unit_Distance__WEBPACK_IMPORTED_MODULE_1__["Meter"](100.96e9)),
            y: sun.y + 20,
            radius: 24,
            mass: new _src_Unit_Mass__WEBPACK_IMPORTED_MODULE_2__["KiloGram"](3.972e24),
            color: "red",
            velocity: [Object(_src_Unit_Distance__WEBPACK_IMPORTED_MODULE_1__["meterToPx"])(_src_Config__WEBPACK_IMPORTED_MODULE_0__["default"].earthSpeed.getDistance()) * 1 / 3, Object(_src_Unit_Distance__WEBPACK_IMPORTED_MODULE_1__["meterToPx"])(_src_Config__WEBPACK_IMPORTED_MODULE_0__["default"].earthSpeed.getDistance()) * 2 / 3]
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
            this.context.fillText(line, c.x, c.y + (fs * i));
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
/* harmony import */ var _Unit_Speed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unit/Speed */ "./src/Unit/Speed.ts");

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
const gravityPullByDelta = 1;
const distPow = 5;
const fontSize = 14;
let debug = null;
const earthSpeed = new _Unit_Speed__WEBPACK_IMPORTED_MODULE_0__["MPSec"](29.78 * 1000); // m/s
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
    gameSpeed: 365 * 24 * 60 * 15,
    // gameSpeed: 100,
    kmPerPx,
    mPerPx: kmPerPx * 1000,
    kgPerPxDensity: 1200,
    G,
    gravityPullByDelta,
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
class Disc {
    constructor(coords, radius, color) {
        this.coords = coords;
        this.radius = radius;
        this.color = color;
    }
    draw(ctx) {
        ctx.arc(this.coords.x, this.coords.y, this.radius, 0, 2 * Math.PI);
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

class Dot extends _Entity_Node__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(from, to, color, lineWidth = 1) {
        super();
        this.from = from;
        this.to = to;
        this.color = color;
        this.lineWidth = lineWidth;
    }
    draw(ctx) {
        ctx.line(this.from.x, this.from.y, this.to.x, this.to.y, this.color, this.lineWidth);
    }
    getCoordinates() {
        return this.from;
    }
    setCoordinates(coords) {
        this.from = coords;
    }
}


/***/ }),

/***/ "./src/Physic/Coordinates.ts":
/*!***********************************!*\
  !*** ./src/Physic/Coordinates.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Coordinates; });
class Coordinates {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    setCoordinates(x, y) {
        this.x = x;
        this.y = y;
    }
    clone() {
        return new Coordinates(this.x, this.y);
    }
}


/***/ }),

/***/ "./src/Physic/Geometry.ts":
/*!********************************!*\
  !*** ./src/Physic/Geometry.ts ***!
  \********************************/
/*! exports provided: getDistanceBetweenObjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDistanceBetweenObjects", function() { return getDistanceBetweenObjects; });
/* harmony import */ var _Unit_Distance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Unit/Distance */ "./src/Unit/Distance.ts");

const getDistanceBetweenObjects = (a, b) => {
    return +Object(_Unit_Distance__WEBPACK_IMPORTED_MODULE_0__["pxToMeter"])((Math.abs(b.x - a.x) + Math.abs(b.y - a.y)));
};
function getAngularDirection(objRef, objDist) {
    let hyp = getDistanceBetweenObjects(objRef, objDist);
    let opp = Math.abs(objRef.x - objDist.x);
    // sin = opp/hyp
    // cos = adj/hyp
    // tan = opp/adj
    if (objDist.y == objRef.y) {
        if (objDist.x < objRef.x) {
            return 270;
        }
        return 90;
    }
    if (objDist.y < objRef.y) {
        if (objDist.x < objRef.x) {
            return 360 - Math.asin(opp / hyp);
        }
        // console.log(hyp, opp, Math.asin(opp/hyp));
        return Math.asin(opp / hyp);
    }
    if (objDist.x < objRef.x) {
        return 180 + Math.asin(opp / hyp);
    }
    // console.log(hyp, opp, 180 - Math.asin(opp/hyp));
    return 180 - Math.asin(opp / hyp);
}
function getRotationDirection(objRef, objDist) {
    return getAngularDirection(objRef, objDist) / 360;
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
/* harmony import */ var _Geometry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Geometry */ "./src/Physic/Geometry.ts");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Config */ "./src/Config.ts");
/* harmony import */ var _Unit_Distance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Unit/Distance */ "./src/Unit/Distance.ts");



const getForce = (a, b) => {
    const dist = _Geometry__WEBPACK_IMPORTED_MODULE_0__["getDistanceBetweenObjects"](a.coords, b.coords);
    if (dist == 0 || Number.isNaN(dist)) {
        return;
    }
    const F = _Config__WEBPACK_IMPORTED_MODULE_1__["default"].G * (((+a.mass) * (+b.mass)) / (dist * dist));
    return F * _Config__WEBPACK_IMPORTED_MODULE_1__["default"].gravityPullByDelta;
};
const getForceRatio = (dirA, dirB, coordA, coordB) => {
    return -(dirA - dirB) / (Math.abs(coordA.x - coordB.x) + Math.abs(coordA.y - coordB.y));
};
/* harmony default export */ __webpack_exports__["default"] = ((velocity, a, b, delta) => {
    const acc = Object(_Unit_Distance__WEBPACK_IMPORTED_MODULE_2__["meterToPx"])(new _Unit_Distance__WEBPACK_IMPORTED_MODULE_2__["Meter"](getForce(a, b) / (+a.mass)));
    velocity.accelerate(acc * getForceRatio(a.coords.x, b.coords.x, a.coords, b.coords), acc * getForceRatio(a.coords.y, b.coords.y, a.coords, b.coords), delta);
});


/***/ }),

/***/ "./src/Physic/Velocity.ts":
/*!********************************!*\
  !*** ./src/Physic/Velocity.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Velocity; });
class Velocity {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    accelerate(x, y, delta) {
        this.x += x * delta;
        this.y += y * delta;
    }
    apply(obj, delta) {
        obj.x += this.x * delta;
        obj.y += this.y * delta;
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
        for (let i in this.planets) {
            const p = this.planets[i];
            if (p.id == this.id) {
                continue;
            }
            Object(_Physic_Gravity__WEBPACK_IMPORTED_MODULE_1__["default"])(this.velocity, this, p, delta);
        }
        this.velocity.apply(this.coords, delta);
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
/*! exports provided: Meter, KiloMeter, meterToPx, pxToMeter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Meter", function() { return Meter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KiloMeter", function() { return KiloMeter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meterToPx", function() { return meterToPx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pxToMeter", function() { return pxToMeter; });
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Config */ "./src/Config.ts");

class Meter {
    constructor(dist) {
        this.dist = dist;
    }
    toMeter() {
        return this.dist;
    }
    valueOf() {
        return this.dist;
    }
}
class KiloMeter extends Meter {
    constructor(dist) {
        super(dist);
        this.dist = dist;
        this.dist = this.toMeter();
    }
    toMeter() {
        return this.dist * 1000;
    }
}

const meterToPx = (distance) => {
    return distance.toMeter() / _Config__WEBPACK_IMPORTED_MODULE_0__["default"].mPerPx;
};
const pxToMeter = (px) => {
    return new Meter(px * _Config__WEBPACK_IMPORTED_MODULE_0__["default"].mPerPx);
};



/***/ }),

/***/ "./src/Unit/Mass.ts":
/*!**************************!*\
  !*** ./src/Unit/Mass.ts ***!
  \**************************/
/*! exports provided: KiloGram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KiloGram", function() { return KiloGram; });
class KiloGram {
    constructor(mass) {
        this.mass = mass;
    }
    toKG() {
        return this.mass;
    }
    valueOf() {
        return this.mass;
    }
}



/***/ }),

/***/ "./src/Unit/Speed.ts":
/*!***************************!*\
  !*** ./src/Unit/Speed.ts ***!
  \***************************/
/*! exports provided: KMPSec, MPSec */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KMPSec", function() { return KMPSec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MPSec", function() { return MPSec; });
/* harmony import */ var _Unit_Distance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Unit/Distance */ "./src/Unit/Distance.ts");
/* harmony import */ var _Time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Time */ "./src/Unit/Time.ts");


class MPSec {
    constructor(speed) {
        this.speed = speed;
    }
    toKMPSec() {
        return this.toMPSec() / 1000;
    }
    toKMPHour() {
        return this.toKMPSec() * 3600;
    }
    toMPSec() {
        return this.speed;
    }
    valueOf() {
        return this.speed;
    }
    getDistance(time) {
        if (time === undefined) {
            time = new _Time__WEBPACK_IMPORTED_MODULE_1__["Second"](1);
        }
        return new _Unit_Distance__WEBPACK_IMPORTED_MODULE_0__["Meter"](this.valueOf() / time.toS());
    }
    getTime(distance) {
        if (distance == undefined) {
            distance = new _Unit_Distance__WEBPACK_IMPORTED_MODULE_0__["Meter"](1);
        }
        return new _Time__WEBPACK_IMPORTED_MODULE_1__["Second"](distance.toMeter() / this.speed);
    }
}
class KMPSec extends MPSec {
    constructor(speed) {
        super(speed);
        this.speed = speed;
        this.speed = this.toMPSec();
    }
    toMPSec() {
        return this.speed * 1000;
    }
}



/***/ }),

/***/ "./src/Unit/Time.ts":
/*!**************************!*\
  !*** ./src/Unit/Time.ts ***!
  \**************************/
/*! exports provided: MilliSecond, Second */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MilliSecond", function() { return MilliSecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Second", function() { return Second; });
var Unit;
(function (Unit) {
    Unit[Unit["MilliSecond"] = 1] = "MilliSecond";
    Unit[Unit["Second"] = 1000] = "Second";
})(Unit || (Unit = {}));
class MilliSecond {
    constructor(time) {
        this.time = time;
    }
    toS() {
        return this.time / Unit.Second;
    }
    toMS() {
        return this.time;
    }
    valueOf() {
        return this.time;
    }
}
class Second {
    constructor(time) {
        this.time = time;
    }
    toS() {
        return this.time;
    }
    toMS() {
        return this.time * Unit.MilliSecond;
    }
    valueOf() {
        return this.time;
    }
}



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vcGxhbmV0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2FtZXJhL0NhbWVyYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2FudmFzL0NhbnZhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2FudmFzL0NvbnRleHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29udHJvbHMvS2V5Ym9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VudGl0eS9Ob2RlLnRzIiwid2VicGFjazovLy8uL3NyYy9Nb2RlbC9EaXNjLnRzIiwid2VicGFjazovLy8uL3NyYy9Nb2RlbC9MaW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9QaHlzaWMvQ29vcmRpbmF0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BoeXNpYy9HZW9tZXRyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGh5c2ljL0dyYXZpdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BoeXNpYy9WZWxvY2l0eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGxhbmV0LnRzIiwid2VicGFjazovLy8uL3NyYy9QbGFuZXRUcmFpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2NlbmUvTm9DbGVhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2NlbmUvU2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NjZW5lL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9Vbml0L0Rpc3RhbmNlLnRzIiwid2VicGFjazovLy8uL3NyYy9Vbml0L01hc3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VuaXQvU3BlZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VuaXQvVGltZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtR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RyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBRTVCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRTtJQUMvQixDQUFDO0lBRUQsT0FBTztRQUNILE9BQU8sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJO0lBQzVCLENBQUM7Q0FDSjtBQUVxQjs7Ozs7Ozs7Ozs7OztBQzNEdEI7QUFBQTtBQUFBO0FBQUEsSUFBSyxJQUdKO0FBSEQsV0FBSyxJQUFJO0lBQ0wsNkNBQWU7SUFDZixzQ0FBMkI7QUFDL0IsQ0FBQyxFQUhJLElBQUksS0FBSixJQUFJLFFBR1I7QUFVRCxNQUFNLFdBQVc7SUFDYixZQUFtQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtJQUFHLENBQUM7SUFFbkMsR0FBRztRQUNDLE9BQU8sSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTTtJQUNsQyxDQUFDO0lBRUQsSUFBSTtRQUNBLE9BQU8sSUFBSSxDQUFDLElBQUk7SUFDcEIsQ0FBQztJQUVELE9BQU87UUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJO0lBQ3BCLENBQUM7Q0FDSjtBQUVELE1BQU0sTUFBTTtJQUNSLFlBQW1CLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO0lBQUcsQ0FBQztJQUVuQyxHQUFHO1FBQ0MsT0FBTyxJQUFJLENBQUMsSUFBSTtJQUNwQixDQUFDO0lBRUQsSUFBSTtRQUNBLE9BQU8sSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVztJQUN2QyxDQUFDO0lBRUQsT0FBTztRQUNILE9BQU8sSUFBSSxDQUFDLElBQUk7SUFDcEIsQ0FBQztDQUNKO0FBRTJCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgQ2FudmFzIGZyb20gXCIuL3NyYy9DYW52YXMvQ2FudmFzXCJcbmltcG9ydCBQbGFuZXQgZnJvbSBcIi4vc3JjL1BsYW5ldFwiXG5pbXBvcnQge1NjZW5lfSBmcm9tIFwiLi9zcmMvU2NlbmUvaW5kZXhcIlxuaW1wb3J0IENhbWVyYSBmcm9tIFwiLi9zcmMvQ2FtZXJhL0NhbWVyYVwiXG5pbXBvcnQgS2V5Ym9hcmQgZnJvbSBcIi4vc3JjL0NvbnRyb2xzL0tleWJvYXJkXCJcbmltcG9ydCBDb25maWcgZnJvbSBcIi4vc3JjL0NvbmZpZ1wiXG5pbXBvcnQgVmVsb2NpdHkgZnJvbSBcIi4vc3JjL1BoeXNpYy9WZWxvY2l0eVwiXG5pbXBvcnQgQ29vcmRpbmF0ZXMgZnJvbSBcIi4vc3JjL1BoeXNpYy9Db29yZGluYXRlc1wiXG5pbXBvcnQgUGxhbmV0VHJhaWwgZnJvbSBcIi4vc3JjL1BsYW5ldFRyYWlsXCJcbmltcG9ydCBnZXRQbGFuZXRzIGZyb20gXCIuL3BsYW5ldHNcIlxuXG5jb25zdCBtYWluID0gKGRlbHRhOiBudW1iZXIsIGJvYXJkczogQ2FudmFzW10pID0+IHtcbiAgICAvLyBjVGltZSArPSBkZWx0YVxuICAgIC8vIGlmIChjVGltZSA+IENvbmZpZy5kcGYpIHtcbiAgICBsZXQgbkJlZm9yZSA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKVxuICAgIGJvYXJkcy5mb3JFYWNoKGIgPT4ge1xuICAgICAgICBiLnVwZGF0ZShkZWx0YSAqIENvbmZpZy5nYW1lU3BlZWQpXG4gICAgfSlcbiAgICBsZXQgbkFmdGVyID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpXG4gICAgLy8gY1RpbWUgLT0gQ29uZmlnLmRwZlxuICAgIC8vIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IG1haW4oQ29uZmlnLm1pbGxpU2Vjb25kc1BlckZyYW1lLCBib2FyZHMpLCAoZGVsdGEgKiAxMDAwKSAtIChuQWZ0ZXIgLSBuQmVmb3JlKSlcbn1cblxuZG9jdW1lbnQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9IFwiY29tcGxldGVcIikge1xuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgY2FtZXJhID0gbmV3IENhbWVyYShDb25maWcuc3BhY2VXIC8gMiwgQ29uZmlnLnNwYWNlSCAvIDIsIENvbmZpZy56b29tTGV2ZWwpXG4gICAgY29uc3QgYmdCb2FyZCA9IG5ldyBDYW52YXMoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQsIGNhbWVyYSwgXCJiYWNrZ3JvdW5kXCIpXG4gICAgY29uc3QgcGxhbmV0Qm9hcmQgPSBuZXcgQ2FudmFzKGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0LCBjYW1lcmEsIFwibWFpblwiKVxuXG4gICAgYmdCb2FyZC5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KVxuICAgIHBsYW5ldEJvYXJkLmFwcGVuZFRvKGRvY3VtZW50LmJvZHkpXG4gICAgYmdCb2FyZC5jYW52YXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMDAwMDAwXCJcbiAgICBcbiAgICBjb25zdCBwbGFuZXRTY2VuZSA9IG5ldyBTY2VuZShcIm1haW5cIilcblxuICAgIGNvbnN0IGtleWJvYXJkQ29udHJvbHMgPSBuZXcgS2V5Ym9hcmQoY2FtZXJhLCBwbGFuZXRCb2FyZClcbiAgICBjb25zdCBwbGFuZXRzQ29uZmlnID0gZ2V0UGxhbmV0cyhwbGFuZXRCb2FyZCwgY2FtZXJhKVxuICAgIGxldCBwbGFuZXRzOiBQbGFuZXRbXSA9IFtdXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlib2FyZENvbnRyb2xzLmhhbmRsZUtleWJvYXJkLmJpbmQoa2V5Ym9hcmRDb250cm9scykpO1xuICAgIFxuICAgIGZvciAobGV0IGkgaW4gcGxhbmV0c0NvbmZpZykge1xuICAgICAgICBjb25zdCBwID0gcGxhbmV0c0NvbmZpZ1tpXVxuICAgICAgICBjb25zdCBwbGFuZXQgPSBuZXcgUGxhbmV0KGksXG4gICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZXMocC54LCBwLnkpLFxuICAgICAgICAgICAgcC5yYWRpdXMsXG4gICAgICAgICAgICBwLm1hc3MsXG4gICAgICAgICAgICBwLmNvbG9yLFxuICAgICAgICAgICAgbmV3IFZlbG9jaXR5KHAudmVsb2NpdHlbMF0sIHAudmVsb2NpdHlbMV0pLFxuICAgICAgICAgICAgcGxhbmV0c1xuICAgICAgICApXG4gICAgICAgIHBsYW5ldFNjZW5lLmFkZEVudGl0eShwbGFuZXQpXG4gICAgICAgIHBsYW5ldFNjZW5lLmFkZEVudGl0eShuZXcgUGxhbmV0VHJhaWwocGxhbmV0KSlcbiAgICAgICAgcGxhbmV0cy5wdXNoKHBsYW5ldClcbiAgICB9XG5cbiAgICBwbGFuZXRCb2FyZC5hZGRFbnRpdHkocGxhbmV0U2NlbmUpXG4gICAgXG4gICAgbWFpbihDb25maWcubWlsbGlTZWNvbmRzUGVyRnJhbWUsIFtiZ0JvYXJkLCBwbGFuZXRCb2FyZF0pXG4gfSIsImltcG9ydCBDYW52YXMgZnJvbSBcIi4vc3JjL0NhbnZhcy9DYW52YXNcIlxuaW1wb3J0IENhbWVyYSBmcm9tIFwiLi9zcmMvQ2FtZXJhL0NhbWVyYVwiXG5pbXBvcnQgQ29uZmlnIGZyb20gXCIuL3NyYy9Db25maWdcIlxuaW1wb3J0IHtQeCwgTWV0ZXIsIG1ldGVyVG9QeH0gZnJvbSBcIi4vc3JjL1VuaXQvRGlzdGFuY2VcIlxuaW1wb3J0IHsgS2lsb0dyYW0gfSBmcm9tIFwiLi9zcmMvVW5pdC9NYXNzXCJcblxuZXhwb3J0IGRlZmF1bHQgKGNhbnZhczogQ2FudmFzLCBjYW1lcmE6IENhbWVyYSk6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0+IHtcbiAgICBjb25zdCBzdW4gPSB7XG4gICAgICAgIHg6IGNhbWVyYS5yZWxhdGl2ZVgoY2FtZXJhLnogKiAoY2FudmFzLmNhbnZhcy53aWR0aCAvIDIpKSxcbiAgICAgICAgeTogY2FtZXJhLnJlbGF0aXZlWShjYW1lcmEueiAqIChjYW52YXMuY2FudmFzLmhlaWdodCAvIDIpKSxcbiAgICAgICAgcmFkaXVzOiA8UHg+MTIwLFxuICAgICAgICBtYXNzOiBuZXcgS2lsb0dyYW0oMS45ODkxZTMwKSxcbiAgICAgICAgY29sb3I6IFwib3JhbmdlXCIsXG4gICAgICAgIHZlbG9jaXR5OiBbMCwgMF1cbiAgICB9XG4gICAgY29uc3QgZWFydGggPSB7XG4gICAgICAgIHg6IDxQeD5zdW4ueCAtIG1ldGVyVG9QeChuZXcgTWV0ZXIoMTQ5Ljk2ZTkpKSxcbiAgICAgICAgeTogPFB4PnN1bi55LFxuICAgICAgICByYWRpdXM6IDxQeD4zMCxcbiAgICAgICAgbWFzczogbmV3IEtpbG9HcmFtKDUuOTcyZTI0KSxcbiAgICAgICAgY29sb3I6IFwic2t5Ymx1ZVwiLFxuICAgICAgICB2ZWxvY2l0eTogW21ldGVyVG9QeChDb25maWcuZWFydGhTcGVlZC5nZXREaXN0YW5jZSgpKSAqIDEvMywgbWV0ZXJUb1B4KENvbmZpZy5lYXJ0aFNwZWVkLmdldERpc3RhbmNlKCkpICogMi8zXVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICAgICAgXCJzdW40MVwiOiBzdW4sXG4gICAgICAgICAgICBcImVhcnRoIGFsb3JzXCI6IGVhcnRoLFxuICAgICAgICAgICAgXCJpbnRlcmxvcGVyXCI6IHtcbiAgICAgICAgICAgICAgICB4OiA8UHg+c3VuLnggKyBtZXRlclRvUHgobmV3IE1ldGVyKDEwMC45NmU5KSksXG4gICAgICAgICAgICAgICAgeTogPFB4PnN1bi55ICsgPFB4PjIwLFxuICAgICAgICAgICAgICAgIHJhZGl1czogPFB4PjI0LFxuICAgICAgICAgICAgICAgIG1hc3M6IG5ldyBLaWxvR3JhbSgzLjk3MmUyNCksXG4gICAgICAgICAgICAgICAgY29sb3I6IFwicmVkXCIsXG4gICAgICAgICAgICAgICAgdmVsb2NpdHk6IFttZXRlclRvUHgoQ29uZmlnLmVhcnRoU3BlZWQuZ2V0RGlzdGFuY2UoKSkgKiAxLzMsIG1ldGVyVG9QeChDb25maWcuZWFydGhTcGVlZC5nZXREaXN0YW5jZSgpKSAqIDIvM11cbiAgICAgICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtZXJhIHtcbiAgICBwdWJsaWMgeDogbnVtYmVyID0gMFxuICAgIHB1YmxpYyB5OiBudW1iZXIgPSAwXG4gICAgcHVibGljIHo6IG51bWJlciA9IDFcblxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy54ID0geFxuICAgICAgICB0aGlzLnkgPSB5XG4gICAgICAgIHRoaXMueiA9IHpcbiAgICB9XG5cbiAgICBYKHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnpUcmFuc2Zvcm0oeCAtIHRoaXMueClcbiAgICB9XG5cbiAgICBZKHk6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnpUcmFuc2Zvcm0oeSAtIHRoaXMueSlcbiAgICB9XG5cbiAgICB6VHJhbnNmb3JtKHY6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB2ICogKDEgLyB0aGlzLnopXG4gICAgfVxuXG4gICAgcmVsYXRpdmVYKHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnggKyB4XG4gICAgfVxuXG4gICAgcmVsYXRpdmVZKHk6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnkgKyB5XG4gICAgfVxufSIsImltcG9ydCBFbnRpdHkgZnJvbSBcIi4uL0VudGl0eS9FbnRpdHlcIlxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4vQ29udGV4dFwiXG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9DYW1lcmEvQ2FtZXJhXCJcbmltcG9ydCBOb2RlIGZyb20gXCIuLi9FbnRpdHkvTm9kZVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyBleHRlbmRzIE5vZGV7XG4gICAgcmVhZG9ubHkgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudFxuICAgIHJlYWRvbmx5IGNvbnRleHQ6IENvbnRleHRcbiAgICBwdWJsaWMgZW50aXRpZXM6IEVudGl0eVtdID0gW11cblxuICAgIGNvbnN0cnVjdG9yKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBjYW1lcmE6IENhbWVyYSwgcHVibGljIGlkOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIilcbiAgICAgICAgdGhpcy5jYW52YXMuaWQgPSB0aGlzLmlkXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGhcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0XG4gICAgICAgIHRoaXMuY29udGV4dCA9IG5ldyBDb250ZXh0KHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSwgY2FtZXJhLCB0aGlzKVxuICAgIH1cblxuICAgIGFwcGVuZFRvKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpXG4gICAgfVxuXG4gICAgdXBkYXRlKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbnRpdGllcy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgZS51cGRhdGUoZGVsdGEpXG4gICAgICAgICAgICBlLmRyYXcodGhpcy5jb250ZXh0LCBkZWx0YSlcbiAgICAgICAgfSlcbiAgICB9XG59IiwiaW1wb3J0IE1vZGVsIGZyb20gXCIuLi9Nb2RlbC9Nb2RlbFwiXG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9DYW1lcmEvQ2FtZXJhXCJcbmltcG9ydCBDYW52YXMgZnJvbSBcIi4vQ2FudmFzXCJcbmltcG9ydCBUZXh0IGZyb20gXCIuLi9UZXh0L1RleHRcIlxuaW1wb3J0IENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGV4dCB7XG4gICAgY29uc3RydWN0b3IgKFxuICAgICAgICByZWFkb25seSBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXG4gICAgICAgIHJlYWRvbmx5IGNhbWVyYTogQ2FtZXJhLFxuICAgICAgICByZWFkb25seSBjYW52YXM6IENhbnZhcyxcbiAgICAgICAgKSB7fVxuXG4gICAgZHJhdyhtb2RlbDogTW9kZWwpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpXG4gICAgICAgIG1vZGVsLmRyYXcodGhpcylcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpXG4gICAgfVxuXG4gICAgYXJjKHg6IG51bWJlciwgeTogbnVtYmVyLCByOiBudW1iZXIsIGFzOiBudW1iZXIsIGFlOiBudW1iZXIsIGxpbmVXaWR0aDogbnVtYmVyID0gMSk6IENvbnRleHQge1xuICAgICAgICB0aGlzLmNvbnRleHQubGluZVdpZHRoID0gbGluZVdpZHRoXG4gICAgICAgIHRoaXMuY29udGV4dC5hcmModGhpcy5jYW1lcmEuWCh4KSwgdGhpcy5jYW1lcmEuWSh5KSwgdGhpcy5jYW1lcmEuelRyYW5zZm9ybShyKSwgYXMsIGFlKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIHdyaXRlKHRleHQ6IFRleHQsIGxpbmVzOiBzdHJpbmdbXSkge1xuICAgICAgICBjb25zdCBmcyA9IHRleHQuZ2V0Rm9udFNpemUoKVxuICAgICAgICBjb25zdCBmZiA9IHRleHQuZ2V0Rm9udEZhbWlseSgpXG4gICAgICAgIGNvbnN0IGMgPSB0ZXh0LmdldENvb3JkaW5hdGVzKClcblxuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKClcbiAgICAgICAgdGhpcy5jb250ZXh0LmZvbnQgPSBgJHtDb25maWcuZm9udFNpemV9cHggJHtmZn1gXG5cbiAgICAgICAgbGluZXMubWFwKChsaW5lLCBpKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQobGluZSwgYy54LCBjLnkgKyAoZnMgKiBpKSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmaWxsUmVjdCh4OiBudW1iZXIsIHk6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIsIGNvbG9yOiBzdHJpbmcpOiBDb250ZXh0IHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCh0aGlzLmNhbWVyYS5YKHgpLCB0aGlzLmNhbWVyYS5ZKHkpLCB3LCBoKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIGZpbGwoY29sb3I6IHN0cmluZyk6IENvbnRleHQge1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3JcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGwoKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIGxpbmUoZnJvbVg6IG51bWJlciwgZnJvbVk6IG51bWJlciwgdG9YOiBudW1iZXIsIHRvWTogbnVtYmVyLCBjb2xvcjogc3RyaW5nLCBsaW5lV2lkdGg6IG51bWJlciA9IDEpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVXaWR0aCA9IGxpbmVXaWR0aFxuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb2xvclxuICAgICAgICB0aGlzLmNvbnRleHQubW92ZVRvKHRoaXMuY2FtZXJhLlgoZnJvbVgpLCB0aGlzLmNhbWVyYS5ZKGZyb21ZKSlcbiAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVUbyh0aGlzLmNhbWVyYS5YKHRvWCksIHRoaXMuY2FtZXJhLlkodG9ZKSlcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsb3NlUGF0aCgpXG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2UoKVxuICAgIH1cbn1cblxudHlwZSBEcmF3RnVuY3Rpb24gPSAoY3R4OiBDb250ZXh0KSA9PiB2b2lkXG5cbmV4cG9ydCB7XG4gICAgRHJhd0Z1bmN0aW9uXG59IiwiaW1wb3J0IHtNUFNlY30gZnJvbSBcIi4vVW5pdC9TcGVlZFwiXG5cbmNvbnN0IGNEdXJhdGlvbiA9IDBcbmNvbnN0IGZwcyA9IDYwXG5jb25zdCBtaWxsaVNlY29uZHNQZXJGcmFtZSA9IDEgLyBmcHNcbmxldCB6b29tTGV2ZWwgPSAyLjVcbmxldCB6b29tTWluID0gMC4xXG5jb25zdCB6b29tQWN0aW9uUG93ID0gMC4xMFxuY29uc3QgZGVjYWxCeU1vdmUgPSAyNVxuXG5sZXQgbWF4UGxhbmV0cyA9IDRcbmxldCBwbGFuZXRzUmFkaXVzRGVmID0ge21pbjogMywgbWF4OiA3MH1cbmNvbnN0IHBsYW5ldHNNaW5EaXN0ID0gMTBcbmNvbnN0IHBsYW5ldEJhc2VTcGVlZCA9IDQwXG5cbmNvbnN0IHNwYWNlVyA9IDEwMDAwXG5jb25zdCBzcGFjZUggPSAxMDAwMFxuY29uc3QgZGVjYWxYID0gc3BhY2VXIC8gMlxuY29uc3QgZGVjYWxZID0gc3BhY2VIIC8gMlxuXG5jb25zdCBncmF2aXR5UHVsbEJ5RGVsdGEgPSAxXG5jb25zdCBkaXN0UG93ID0gNVxuXG5jb25zdCBmb250U2l6ZSA9IDE0XG5sZXQgZGVidWcgPSBudWxsXG5jb25zdCBlYXJ0aFNwZWVkID0gbmV3IE1QU2VjKDI5Ljc4ICogMTAwMCkgLy8gbS9zXG5jb25zdCBHID0gTWF0aC5wb3coMTAsIC0xMSkgKiA2LjY3NFxuXG5lbnVtIFBsYXlNb2RlIHtcbiAgICBQTEFZLFxuICAgIFBBVVNFXG59XG5cbmNvbnN0IG1vZGUgPSBQbGF5TW9kZS5QTEFZXG4vLyBjb25zdCBrbVBlclB4ID0gMS4zZTVcbmNvbnN0IGttUGVyUHggPSAxLjhlNVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZ2FtZVNwZWVkOiAzNjUgKiAyNCAqIDYwICogMTUsXG4gICAgLy8gZ2FtZVNwZWVkOiAxMDAsXG4gICAga21QZXJQeCxcbiAgICBtUGVyUHg6IGttUGVyUHggKiAxMDAwLFxuICAgIGtnUGVyUHhEZW5zaXR5OiAxMjAwLFxuICAgIEcsXG4gICAgZ3Jhdml0eVB1bGxCeURlbHRhLFxuICAgIGNEdXJhdGlvbixcbiAgICBmcHMsXG4gICAgem9vbUxldmVsLFxuICAgIHpvb21BY3Rpb25Qb3csXG4gICAgZGVjYWxCeU1vdmUsXG4gICAgbWF4UGxhbmV0cyxcbiAgICBwbGFuZXRzUmFkaXVzRGVmLFxuICAgIHBsYW5ldHNNaW5EaXN0LFxuICAgIHBsYW5ldEJhc2VTcGVlZCxcbiAgICBzcGFjZVcsXG4gICAgc3BhY2VILFxuICAgIGRlY2FsWCxcbiAgICBkZWNhbFksXG4gICAgZGlzdFBvdyxcbiAgICBmb250U2l6ZSxcbiAgICBkZWJ1ZyxcbiAgICBQbGF5TW9kZSxcbiAgICBtb2RlLFxuICAgIHpvb21NaW4sXG4gICAgZWFydGhTcGVlZCxcbiAgICBtaWxsaVNlY29uZHNQZXJGcmFtZVxufSIsImltcG9ydCBDYW1lcmEgZnJvbSBcIi4uL0NhbWVyYS9DYW1lcmFcIlxuaW1wb3J0IENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnXCJcbmltcG9ydCBDYW52YXMgZnJvbSBcIi4uL0NhbnZhcy9DYW52YXNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlib2FyZCB7XG4gICAgcHVibGljIGFjdGlvbkJ5S2V5Y29kZToge1trZXk6IG51bWJlcl06IEZ1bmN0aW9ufVxuXG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgY2FtZXJhOiBDYW1lcmEsIHJlYWRvbmx5IGNhbnZhczogQ2FudmFzKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uQnlLZXljb2RlID0ge1xuICAgICAgICAgICAgLy8gNjg6ICgpID0+IHtkZWJ1Zy5Ub2dnbGUoKTt9LFxuICAgICAgICAgICAgLy8gODM6ICgpID0+IHttb2RlID0gbW9kZSA9PSBQQVVTRSA/IFBMQVkgOiBQQVVTRTt9LFxuICAgICAgICAgICAgODI6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS54ID0gMFxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnkgPSAwXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEueiA9IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA5MDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhbWVyYS56IDw9IENvbmZpZy56b29tTWluKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56IC09IENvbmZpZy56b29tQWN0aW9uUG93XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgODg6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56ICs9IENvbmZpZy56b29tQWN0aW9uUG93XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMzc6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYW1lcmEueCAtIENvbmZpZy5kZWNhbEJ5TW92ZSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEueCAtPSBDb25maWcuZGVjYWxCeU1vdmVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAzODogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhbWVyYS55IC0gQ29uZmlnLmRlY2FsQnlNb3ZlIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS55IC09IENvbmZpZy5kZWNhbEJ5TW92ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDM5OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FtZXJhLnggPj0gQ29uZmlnLnNwYWNlVykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnggKz0gQ29uZmlnLmRlY2FsQnlNb3ZlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNDA6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYW1lcmEueSA+PSBDb25maWcuc3BhY2VIKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEueSArPSBDb25maWcuZGVjYWxCeU1vdmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUtleWJvYXJkKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGlvbkJ5S2V5Y29kZSA9PSB1bmRlZmluZWQgfHwgXG4gICAgICAgICAgICAhdGhpcy5hY3Rpb25CeUtleWNvZGVbZXZlbnQua2V5Q29kZV0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFjdGlvbkJ5S2V5Y29kZVtldmVudC5rZXlDb2RlXSgpO1xuICAgIH1cbn0iLCJpbXBvcnQgRW50aXR5IGZyb20gXCIuL0VudGl0eVwiXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi4vQ2FudmFzL0NvbnRleHRcIlxuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBOb2RlIGltcGxlbWVudHMgRW50aXR5IHtcbiAgICBwdWJsaWMgZW50aXRpZXM6IEVudGl0eVtdID0gW11cblxuICAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZW50aXRpZXMuZm9yRWFjaChlID0+IGUudXBkYXRlKGRlbHRhKSlcbiAgICB9XG5cbiAgICBkcmF3KGNvbnRleHQ6IENvbnRleHQsIGRlbHRhPzogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZW50aXRpZXMuZm9yRWFjaChlID0+IGUuZHJhdyhjb250ZXh0LCBkZWx0YSkpXG4gICAgfVxuXG4gICAgZ2V0RW50aXRpZXMoKTogRW50aXR5W10ge1xuICAgICAgICByZXR1cm4gdGhpcy5lbnRpdGllc1xuICAgIH1cblxuICAgIGFkZEVudGl0eShlbnRpdHk6IEVudGl0eSk6IHRoaXMge1xuICAgICAgICB0aGlzLmVudGl0aWVzLnB1c2goZW50aXR5KVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbn0iLCJpbXBvcnQgQ29udGV4dCBmcm9tIFwiLi4vQ2FudmFzL0NvbnRleHRcIlxuaW1wb3J0IENvb3JkaW5hdGVzIGZyb20gXCIuLi9QaHlzaWMvQ29vcmRpbmF0ZXNcIlxuaW1wb3J0IE1vZGVsIGZyb20gXCIuL01vZGVsXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzYyBpbXBsZW1lbnRzIE1vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY29vcmRzOiBDb29yZGluYXRlcywgcHVibGljIHJhZGl1czogbnVtYmVyLCBwdWJsaWMgY29sb3I6IHN0cmluZykge31cblxuICAgIGRyYXcoY3R4OiBDb250ZXh0KSB7XG4gICAgICAgIGN0eC5hcmModGhpcy5jb29yZHMueCwgdGhpcy5jb29yZHMueSwgdGhpcy5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKVxuICAgICAgICBjdHguZmlsbCh0aGlzLmNvbG9yKVxuICAgIH1cblxuICAgIGdldENvb3JkaW5hdGVzKCk6IENvb3JkaW5hdGVzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29vcmRzXG4gICAgfVxuXG4gICAgc2V0Q29vcmRpbmF0ZXMoY29vcmRzOiBDb29yZGluYXRlcyk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvb3JkcyA9IGNvb3Jkc1xuICAgIH1cbn0iLCJpbXBvcnQgQ29udGV4dCBmcm9tIFwiLi4vQ2FudmFzL0NvbnRleHRcIlxuaW1wb3J0IENvb3JkaW5hdGVzIGZyb20gXCIuLi9QaHlzaWMvQ29vcmRpbmF0ZXNcIlxuaW1wb3J0IE5vZGUgZnJvbSBcIi4uL0VudGl0eS9Ob2RlXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG90IGV4dGVuZHMgTm9kZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBmcm9tOiBDb29yZGluYXRlcyxcbiAgICAgICAgcHVibGljIHRvOiBDb29yZGluYXRlcyxcbiAgICAgICAgcHVibGljIGNvbG9yOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBsaW5lV2lkdGg6IG51bWJlciA9IDFcbiAgICApIHtcbiAgICAgICAgc3VwZXIoKVxuICAgIH1cblxuICAgIGRyYXcoY3R4OiBDb250ZXh0KSB7XG4gICAgICAgIGN0eC5saW5lKHRoaXMuZnJvbS54LCB0aGlzLmZyb20ueSwgdGhpcy50by54LCB0aGlzLnRvLnksIHRoaXMuY29sb3IsIHRoaXMubGluZVdpZHRoKVxuICAgIH1cblxuICAgIGdldENvb3JkaW5hdGVzKCk6IENvb3JkaW5hdGVzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVxuICAgIH1cblxuICAgIHNldENvb3JkaW5hdGVzKGNvb3JkczogQ29vcmRpbmF0ZXMpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5mcm9tID0gY29vcmRzXG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvb3JkaW5hdGVzIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgeDogbnVtYmVyLCBwdWJsaWMgeTogbnVtYmVyKSB7fVxuXG4gICAgc2V0Q29vcmRpbmF0ZXMoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy54ID0geFxuICAgICAgICB0aGlzLnkgPSB5XG4gICAgfVxuXG4gICAgY2xvbmUoKTogQ29vcmRpbmF0ZXMge1xuICAgICAgICByZXR1cm4gbmV3IENvb3JkaW5hdGVzKHRoaXMueCwgdGhpcy55KVxuICAgIH1cbn0iLCJpbXBvcnQgQ29vcmRpbmF0ZXMgZnJvbSBcIi4vQ29vcmRpbmF0ZXNcIlxuaW1wb3J0IHsgcHhUb01ldGVyIH0gZnJvbSBcIi4uL1VuaXQvRGlzdGFuY2VcIjtcblxuY29uc3QgZ2V0RGlzdGFuY2VCZXR3ZWVuT2JqZWN0cyA9IChhOiBDb29yZGluYXRlcywgYjogQ29vcmRpbmF0ZXMpOiBudW1iZXIgPT4ge1xuICAgIHJldHVybiArcHhUb01ldGVyKChNYXRoLmFicyhiLnggLSBhLngpICsgTWF0aC5hYnMoYi55IC0gYS55KSkpXG59XG5cbmZ1bmN0aW9uIGdldEFuZ3VsYXJEaXJlY3Rpb24ob2JqUmVmOiBhbnksIG9iakRpc3Q6IGFueSkge1xuICAgIGxldCBoeXAgPSBnZXREaXN0YW5jZUJldHdlZW5PYmplY3RzKG9ialJlZiwgb2JqRGlzdCk7XG4gICAgbGV0IG9wcCA9IE1hdGguYWJzKG9ialJlZi54IC0gb2JqRGlzdC54KVxuICAgIC8vIHNpbiA9IG9wcC9oeXBcbiAgICAvLyBjb3MgPSBhZGovaHlwXG4gICAgLy8gdGFuID0gb3BwL2FkalxuICAgIGlmIChvYmpEaXN0LnkgPT0gb2JqUmVmLnkpIHtcbiAgICAgICAgaWYgKG9iakRpc3QueCA8IG9ialJlZi54KSB7XG4gICAgICAgICAgICByZXR1cm4gMjcwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiA5MDtcbiAgICB9XG5cbiAgICBpZiAob2JqRGlzdC55IDwgb2JqUmVmLnkpIHtcbiAgICAgICAgaWYgKG9iakRpc3QueCA8IG9ialJlZi54KSB7XG4gICAgICAgICAgICByZXR1cm4gMzYwIC0gTWF0aC5hc2luKG9wcC9oeXApO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGh5cCwgb3BwLCBNYXRoLmFzaW4ob3BwL2h5cCkpO1xuICAgICAgICByZXR1cm4gTWF0aC5hc2luKG9wcC9oeXApO1xuICAgIH1cblxuICAgIGlmIChvYmpEaXN0LnggPCBvYmpSZWYueCkge1xuICAgICAgICByZXR1cm4gMTgwICsgTWF0aC5hc2luKG9wcC9oeXApO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhoeXAsIG9wcCwgMTgwIC0gTWF0aC5hc2luKG9wcC9oeXApKTtcbiAgICByZXR1cm4gMTgwIC0gTWF0aC5hc2luKG9wcC9oeXApO1xufVxuXG5mdW5jdGlvbiBnZXRSb3RhdGlvbkRpcmVjdGlvbihvYmpSZWY6IGFueSwgb2JqRGlzdDogYW55KSB7XG4gICAgcmV0dXJuIGdldEFuZ3VsYXJEaXJlY3Rpb24ob2JqUmVmLCBvYmpEaXN0KSAvIDM2MDtcbn1cblxuXG5leHBvcnQgeyBnZXREaXN0YW5jZUJldHdlZW5PYmplY3RzIH0iLCJpbXBvcnQgVmVsb2NpdHkgZnJvbSBcIi4vVmVsb2NpdHlcIjtcbmltcG9ydCBQbGFuZXQgZnJvbSBcIi4uL1BsYW5ldFwiXG5pbXBvcnQgQ29vcmRpbmF0ZXMgZnJvbSBcIi4vQ29vcmRpbmF0ZXNcIlxuaW1wb3J0ICogYXMgR2VvbWV0cnkgZnJvbSBcIi4vR2VvbWV0cnlcIlxuaW1wb3J0IENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnXCJcbmltcG9ydCB7IE1ldGVyLCBtZXRlclRvUHggfSBmcm9tIFwiLi4vVW5pdC9EaXN0YW5jZVwiO1xuXG5jb25zdCBnZXRGb3JjZSA9IChhOiBQbGFuZXQsIGI6IFBsYW5ldCk6IG51bWJlciA9PiB7XG4gICAgY29uc3QgZGlzdCA9IEdlb21ldHJ5LmdldERpc3RhbmNlQmV0d2Vlbk9iamVjdHMoYS5jb29yZHMsIGIuY29vcmRzKVxuICAgIGlmIChkaXN0ID09IDAgfHwgTnVtYmVyLmlzTmFOKGRpc3QpKSB7XG4gICAgICAgIHJldHVybiBcbiAgICB9XG4gICAgY29uc3QgRiA9IENvbmZpZy5HICogKCgoK2EubWFzcykqKCtiLm1hc3MpKS8oZGlzdCpkaXN0KSlcblxuICAgIHJldHVybiBGICogQ29uZmlnLmdyYXZpdHlQdWxsQnlEZWx0YVxufVxuXG5jb25zdCBnZXRGb3JjZVJhdGlvID0gKGRpckE6IG51bWJlciwgZGlyQjogbnVtYmVyLCBjb29yZEE6IENvb3JkaW5hdGVzLCBjb29yZEI6IENvb3JkaW5hdGVzKTogbnVtYmVyID0+IHtcbiAgICByZXR1cm4gLShkaXJBIC0gZGlyQikgLyAoTWF0aC5hYnMoY29vcmRBLnggLSBjb29yZEIueCkgKyBNYXRoLmFicyhjb29yZEEueSAtIGNvb3JkQi55KSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHZlbG9jaXR5OiBWZWxvY2l0eSwgYTogUGxhbmV0LCBiOiBQbGFuZXQsIGRlbHRhOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBhY2MgPSBtZXRlclRvUHgobmV3IE1ldGVyKGdldEZvcmNlKGEsIGIpIC8gKCthLm1hc3MpKSlcbiAgICB2ZWxvY2l0eS5hY2NlbGVyYXRlKFxuICAgICAgICBhY2MgKiBnZXRGb3JjZVJhdGlvKGEuY29vcmRzLngsIGIuY29vcmRzLngsIGEuY29vcmRzLCBiLmNvb3JkcyksXG4gICAgICAgIGFjYyAqIGdldEZvcmNlUmF0aW8oYS5jb29yZHMueSwgYi5jb29yZHMueSwgYS5jb29yZHMsIGIuY29vcmRzKSxcbiAgICAgICAgZGVsdGFcbiAgICApXG59IiwiaW1wb3J0IENvb3JkaW5hdGVzIGZyb20gXCIuL0Nvb3JkaW5hdGVzXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVsb2NpdHkge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB4OiBudW1iZXIsIHB1YmxpYyB5OiBudW1iZXIpIHt9XG5cbiAgICBhY2NlbGVyYXRlKHg6IG51bWJlciwgeTogbnVtYmVyLCBkZWx0YTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMueCArPSB4ICogZGVsdGFcbiAgICAgICAgdGhpcy55ICs9IHkgKiBkZWx0YVxuICAgIH1cblxuICAgIGFwcGx5KG9iajogQ29vcmRpbmF0ZXMsIGRlbHRhOiBudW1iZXIpIHtcbiAgICAgICAgb2JqLnggKz0gdGhpcy54ICogZGVsdGFcbiAgICAgICAgb2JqLnkgKz0gdGhpcy55ICogZGVsdGFcbiAgICB9XG59IiwiaW1wb3J0IENvb3JkaW5hdGVzIGZyb20gXCIuL1BoeXNpYy9Db29yZGluYXRlc1wiXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi9DYW52YXMvQ29udGV4dFwiXG5pbXBvcnQgRGlzYyBmcm9tIFwiLi9Nb2RlbC9EaXNjXCJcbmltcG9ydCBWZWxvY2l0eSBmcm9tIFwiLi9QaHlzaWMvVmVsb2NpdHlcIlxuaW1wb3J0IGFwcGx5R3Jhdml0eSBmcm9tIFwiLi9QaHlzaWMvR3Jhdml0eVwiXG5pbXBvcnQgTm9kZSBmcm9tIFwiLi9FbnRpdHkvTm9kZVwiXG5pbXBvcnQgeyBLaWxvR3JhbSB9IGZyb20gXCIuL1VuaXQvTWFzc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYW5ldCBleHRlbmRzIE5vZGUge1xuICAgIC8vIHB1YmxpYyBtb2RlbDogRGlzY1xuICAgIHB1YmxpYyBtb2RlbDogRGlzY1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBpZDogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgY29vcmRzOiBDb29yZGluYXRlcyxcbiAgICAgICAgcmVhZG9ubHkgcmFkaXVzOiBudW1iZXIsXG4gICAgICAgIHJlYWRvbmx5IG1hc3M6IEtpbG9HcmFtLFxuICAgICAgICByZWFkb25seSBjb2xvcjogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgdmVsb2NpdHk6IFZlbG9jaXR5LFxuICAgICAgICByZWFkb25seSBwbGFuZXRzOiBQbGFuZXRbXVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHN1cGVyKClcbiAgICAgICAgICAgIHRoaXMubW9kZWwgPSBuZXcgRGlzYyh0aGlzLmNvb3JkcywgdGhpcy5yYWRpdXMsIHRoaXMuY29sb3IpXG4gICAgICAgIH1cblxuICAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5wbGFuZXRzKSB7XG4gICAgICAgICAgICBjb25zdCBwID0gdGhpcy5wbGFuZXRzW2ldXG5cbiAgICAgICAgICAgIGlmIChwLmlkID09IHRoaXMuaWQpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXBwbHlHcmF2aXR5KHRoaXMudmVsb2NpdHksIHRoaXMsIHAsIGRlbHRhKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudmVsb2NpdHkuYXBwbHkodGhpcy5jb29yZHMsIGRlbHRhKVxuICAgICAgICBzdXBlci51cGRhdGUoZGVsdGEpXG4gICAgfVxuXG4gICAgZHJhdyhjb250ZXh0OiBDb250ZXh0KTogdm9pZCB7XG4gICAgICAgIGNvbnRleHQuZHJhdyh0aGlzLm1vZGVsKVxuICAgICAgICBzdXBlci5kcmF3KGNvbnRleHQpXG4gICAgfVxuXG4gICAgZ2V0Q29vcmRpbmF0ZXMoKTogQ29vcmRpbmF0ZXMge1xuICAgICAgICByZXR1cm4gdGhpcy5jb29yZHNcbiAgICB9XG5cbiAgICBzZXRDb29yZGluYXRlcyhjb29yZHM6IENvb3JkaW5hdGVzKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29vcmRzID0gY29vcmRzXG4gICAgfVxufSIsImltcG9ydCBDb250ZXh0IGZyb20gXCIuL0NhbnZhcy9Db250ZXh0XCJcbmltcG9ydCBMaW5lIGZyb20gXCIuL01vZGVsL0xpbmVcIlxuaW1wb3J0IFBsYW5ldCBmcm9tIFwiLi9QbGFuZXRcIlxuaW1wb3J0IE5vZGUgZnJvbSBcIi4vRW50aXR5L05vZGVcIlxuaW1wb3J0IENvb3JkaW5hdGVzIGZyb20gXCIuL1BoeXNpYy9Db29yZGluYXRlc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYW5ldFRyYWlsIGV4dGVuZHMgTm9kZSB7XG4gICAgcHJpdmF0ZSB0cmFpbHM6IExpbmVbXVxuICAgIHByaXZhdGUgbWF4VHJhaWxzID0gOTk5XG4gICAgcHJpdmF0ZSBwcmV2aW91c0Nvb3JkaW5hdGVzOiBDb29yZGluYXRlcyA9IG51bGxcbiBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBsYW5ldDogUGxhbmV0KSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy50cmFpbHMgPSBbXVxuICAgIH1cblxuICAgIHVwZGF0ZShfOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMudHJhaWxzLmxlbmd0aCA9PSB0aGlzLm1heFRyYWlscykge1xuICAgICAgICAgICAgdGhpcy50cmFpbHMuc2hpZnQoKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJldmlvdXNDb29yZGluYXRlcyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy50cmFpbHMucHVzaChcbiAgICAgICAgICAgICAgICBuZXcgTGluZShcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c0Nvb3JkaW5hdGVzLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYW5ldC5nZXRDb29yZGluYXRlcygpLmNsb25lKCksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhbmV0LmNvbG9yLFxuICAgICAgICAgICAgICAgICAgICAwLjJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByZXZpb3VzQ29vcmRpbmF0ZXMgPSB0aGlzLnBsYW5ldC5nZXRDb29yZGluYXRlcygpLmNsb25lKClcbiAgICB9XG5cbiAgICBkcmF3KGNhbnZhczogQ29udGV4dCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRyYWlscy5mb3JFYWNoKGQgPT4gY2FudmFzLmRyYXcoZCkpXG4gICAgfVxufSIsImltcG9ydCBFbnRpdHkgZnJvbSBcIi4uL0VudGl0eS9FbnRpdHlcIlxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL0NhbnZhcy9Db250ZXh0XCJcbmltcG9ydCBTY2VuZSBmcm9tIFwiLi9TY2VuZVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vQ2xlYXIgZXh0ZW5kcyBTY2VuZSBpbXBsZW1lbnRzIEVudGl0eSB7XG4gICAgcHVibGljIGVudGl0aWVzOiBFbnRpdHlbXSA9IFtdXG5cbiAgICBkcmF3KGNvbnRleHQ6IENvbnRleHQsIGRlbHRhPzogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZW50aXRpZXMuZm9yRWFjaChlID0+IGUuZHJhdyhjb250ZXh0LCBkZWx0YSkpXG4gICAgfVxufSIsImltcG9ydCBFbnRpdHkgZnJvbSBcIi4uL0VudGl0eS9FbnRpdHlcIlxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL0NhbnZhcy9Db250ZXh0XCJcbmltcG9ydCBOb2RlIGZyb20gXCIuLi9FbnRpdHkvTm9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZSBleHRlbmRzIE5vZGUge1xuICAgIHB1YmxpYyBlbnRpdGllczogRW50aXR5W10gPSBbXVxuXG4gICAgY29uc3RydWN0b3IgKHB1YmxpYyBpZDogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICB9XG5cbiAgICBkcmF3KGNvbnRleHQ6IENvbnRleHQsIGRlbHRhPzogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnRleHQuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY29udGV4dC5jYW52YXMuY2FudmFzLndpZHRoLCBjb250ZXh0LmNhbnZhcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5lbnRpdGllcy5mb3JFYWNoKGUgPT4gZS5kcmF3KGNvbnRleHQsIGRlbHRhKSlcbiAgICAgICAgY29udGV4dC5jb250ZXh0LnN0cm9rZSgpOyAgICBcbiAgICB9XG59IiwiaW1wb3J0IFNjZW5lIGZyb20gXCIuL1NjZW5lXCJcbmltcG9ydCBOb0NsZWFyIGZyb20gXCIuL05vQ2xlYXJcIlxuXG5leHBvcnQge1xuICAgIFNjZW5lLFxuICAgIE5vQ2xlYXJcbn0iLCJpbXBvcnQgQ29uZmlnIGZyb20gXCIuLi9Db25maWdcIlxuXG50eXBlIFB4ID0gbnVtYmVyXG5cbmludGVyZmFjZSBEaXN0YW5jZSB7XG4gICAgdG9NZXRlcigpOiBudW1iZXJcbiAgICB2YWx1ZU9mKCk6IG51bWJlclxufVxuXG5leHBvcnQgZGVmYXVsdCBEaXN0YW5jZVxuXG5jbGFzcyBNZXRlciBpbXBsZW1lbnRzIERpc3RhbmNlIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlzdDogbnVtYmVyKSB7fVxuXG4gICAgdG9NZXRlcigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXN0XG4gICAgfVxuXG4gICAgdmFsdWVPZigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXN0XG4gICAgfVxufVxuXG5jbGFzcyBLaWxvTWV0ZXIgZXh0ZW5kcyBNZXRlciB7XG4gICAgY29uc3RydWN0b3IocHVibGljIGRpc3Q6IG51bWJlcikge1xuICAgICAgICBzdXBlcihkaXN0KVxuICAgICAgICB0aGlzLmRpc3QgPSB0aGlzLnRvTWV0ZXIoKVxuICAgIH1cblxuICAgIHRvTWV0ZXIoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlzdCAqIDEwMDBcbiAgICB9XG59XG5cbmV4cG9ydCB7UHgsIERpc3RhbmNlLCBNZXRlciwgS2lsb01ldGVyfVxuXG5jb25zdCBtZXRlclRvUHggPSAoZGlzdGFuY2U6IERpc3RhbmNlKTogUHggPT4ge1xuICAgIHJldHVybiBkaXN0YW5jZS50b01ldGVyKCkgLyBDb25maWcubVBlclB4XG59XG5cbmNvbnN0IHB4VG9NZXRlciA9IChweDogUHgpOiBNZXRlciA9PiB7XG4gICAgcmV0dXJuIG5ldyBNZXRlcihweCAqIENvbmZpZy5tUGVyUHgpXG59XG5cbmV4cG9ydCB7bWV0ZXJUb1B4LCBweFRvTWV0ZXJ9IiwiaW50ZXJmYWNlIE1hc3Mge1xuICAgIHRvS0coKTogbnVtYmVyXG4gICAgdmFsdWVPZigpOiBudW1iZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFzc1xuXG5jbGFzcyBLaWxvR3JhbSBpbXBsZW1lbnRzIE1hc3N7XG4gICAgY29uc3RydWN0b3IocHVibGljIG1hc3M6IG51bWJlcil7fVxuXG4gICAgdG9LRygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXNzXG4gICAgfVxuXG4gICAgdmFsdWVPZigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXNzXG4gICAgfVxufVxuXG5leHBvcnQge0tpbG9HcmFtfSIsImltcG9ydCB7IERpc3RhbmNlLCBNZXRlciB9IGZyb20gXCIuLi9Vbml0L0Rpc3RhbmNlXCJcbmltcG9ydCBUaW1lLCB7IFNlY29uZCB9IGZyb20gJy4vVGltZSdcblxudHlwZSBNZXRlcnNQZXJTZWNvbmQgPSBudW1iZXJcblxuaW50ZXJmYWNlIFNwZWVkIHtcbiAgICB0b01QU2VjKCk6IE1ldGVyc1BlclNlY29uZFxuICAgIHZhbHVlT2YoKTogbnVtYmVyXG4gICAgZ2V0RGlzdGFuY2UodGltZT86IFRpbWUpOiBEaXN0YW5jZSBcbiAgICBnZXRUaW1lKGRpc3RhbmNlPzogRGlzdGFuY2UpOiBUaW1lXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWVkXG5cbmNsYXNzIE1QU2VjIGltcGxlbWVudHMgU3BlZWQge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBzcGVlZDogTWV0ZXJzUGVyU2Vjb25kKSB7fVxuXG4gICAgdG9LTVBTZWMoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9NUFNlYygpIC8gMTAwMFxuICAgIH1cblxuICAgIHRvS01QSG91cigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy50b0tNUFNlYygpICogMzYwMFxuICAgIH1cblxuICAgIHRvTVBTZWMoKTogTWV0ZXJzUGVyU2Vjb25kIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BlZWRcbiAgICB9XG5cbiAgICB2YWx1ZU9mKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnNwZWVkXG4gICAgfVxuXG4gICAgZ2V0RGlzdGFuY2UodGltZT86IFRpbWUpOiBEaXN0YW5jZSB7XG4gICAgICAgIGlmICh0aW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRpbWUgPSBuZXcgU2Vjb25kKDEpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBNZXRlcih0aGlzLnZhbHVlT2YoKSAvIHRpbWUudG9TKCkpXG4gICAgfVxuXG4gICAgZ2V0VGltZShkaXN0YW5jZT86IERpc3RhbmNlKTogVGltZSB7XG4gICAgICAgIGlmIChkaXN0YW5jZSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGRpc3RhbmNlID0gbmV3IE1ldGVyKDEpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBTZWNvbmQoZGlzdGFuY2UudG9NZXRlcigpIC8gdGhpcy5zcGVlZClcbiAgICB9XG59XG5cbmNsYXNzIEtNUFNlYyBleHRlbmRzIE1QU2VjIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgc3BlZWQ6IG51bWJlcikge1xuICAgICAgICBzdXBlcihzcGVlZClcbiAgICAgICAgdGhpcy5zcGVlZCA9IHRoaXMudG9NUFNlYygpXG4gICAgfVxuXG4gICAgdG9NUFNlYygpOiBNZXRlcnNQZXJTZWNvbmQge1xuICAgICAgICByZXR1cm4gdGhpcy5zcGVlZCAqIDEwMDBcbiAgICB9XG59XG5cbmV4cG9ydCB7S01QU2VjLCBNUFNlY30iLCJlbnVtIFVuaXQge1xuICAgIE1pbGxpU2Vjb25kID0gMSxcbiAgICBTZWNvbmQgPSBNaWxsaVNlY29uZCAqIDEwMDBcbn1cblxuaW50ZXJmYWNlIFRpbWUge1xuICAgIHRvTVMoKTogbnVtYmVyXG4gICAgdG9TKCk6IG51bWJlclxuICAgIHZhbHVlT2YoKTogbnVtYmVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVcblxuY2xhc3MgTWlsbGlTZWNvbmQgaW1wbGVtZW50cyBUaW1lIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGltZTogbnVtYmVyKSB7fVxuXG4gICAgdG9TKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbWUgLyBVbml0LlNlY29uZFxuICAgIH1cblxuICAgIHRvTVMoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZVxuICAgIH1cblxuICAgIHZhbHVlT2YoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZVxuICAgIH1cbn1cblxuY2xhc3MgU2Vjb25kIGltcGxlbWVudHMgVGltZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHRpbWU6IG51bWJlcikge31cblxuICAgIHRvUygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy50aW1lXG4gICAgfVxuXG4gICAgdG9NUygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy50aW1lICogVW5pdC5NaWxsaVNlY29uZFxuICAgIH1cblxuICAgIHZhbHVlT2YoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZVxuICAgIH1cbn1cblxuZXhwb3J0IHtNaWxsaVNlY29uZCwgU2Vjb25kfSJdLCJzb3VyY2VSb290IjoiIn0=