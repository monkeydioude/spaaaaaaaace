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

/* harmony default export */ __webpack_exports__["default"] = ((canvas, camera) => {
    const sun = {
        x: camera.relativeX(camera.z * (canvas.canvas.width / 2)),
        y: camera.relativeY(camera.z * (canvas.canvas.height / 2)),
        radius: 120,
        mass: 1.9891e30,
        color: "orange",
        velocity: [0, 0]
    };
    const earth = {
        x: sun.x - (149.96e9 / _src_Config__WEBPACK_IMPORTED_MODULE_0__["default"].mPerPx),
        y: sun.y,
        radius: 30,
        mass: 5.972e24,
        color: "skyblue",
        velocity: [(_src_Config__WEBPACK_IMPORTED_MODULE_0__["default"].earthSpeed / _src_Config__WEBPACK_IMPORTED_MODULE_0__["default"].mPerPx) * 1 / 3, (_src_Config__WEBPACK_IMPORTED_MODULE_0__["default"].earthSpeed / _src_Config__WEBPACK_IMPORTED_MODULE_0__["default"].mPerPx) * 2 / 3]
    };
    return {
        "sun41": sun,
        "earth alors": earth,
        "interloper": {
            x: sun.x + (100.96e9 / _src_Config__WEBPACK_IMPORTED_MODULE_0__["default"].mPerPx),
            y: sun.y + 20,
            radius: 24,
            mass: 3.972e24,
            color: "red",
            velocity: [(_src_Config__WEBPACK_IMPORTED_MODULE_0__["default"].earthSpeed / _src_Config__WEBPACK_IMPORTED_MODULE_0__["default"].mPerPx) * 1 / 3, (_src_Config__WEBPACK_IMPORTED_MODULE_0__["default"].earthSpeed / _src_Config__WEBPACK_IMPORTED_MODULE_0__["default"].mPerPx) * 2 / 3]
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
    arc(x, y, r, as, ae) {
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
const gravityPullByDelta = 1;
const distPow = 5;
const fontSize = 14;
let debug = null;
const earthSpeed = 29.78 * 1000;
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

/***/ "./src/Model/Dot.ts":
/*!**************************!*\
  !*** ./src/Model/Dot.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dot; });
/* harmony import */ var _Entity_Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Entity/Node */ "./src/Entity/Node.ts");

class Dot extends _Entity_Node__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(coords, color) {
        super();
        this.coords = coords;
        this.color = color;
    }
    draw(ctx) {
        // ctx.context.fillStyle = "purple"
        // ctx.context.fillRect(this.coords.x - 1, this.coords.y - 1, 2, 2)
        ctx.fillRect(this.coords.x, this.coords.y, 1, 1, this.color);
    }
    getCoordinates() {
        return this.coords;
    }
    setCoordinates(coords) {
        this.coords = coords;
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
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Config */ "./src/Config.ts");

const getDistanceBetweenObjects = (a, b) => {
    return (Math.abs(b.x - a.x) + Math.abs(b.y - a.y)) * _Config__WEBPACK_IMPORTED_MODULE_0__["default"].mPerPx;
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


const getForce = (a, b) => {
    const dist = _Geometry__WEBPACK_IMPORTED_MODULE_0__["getDistanceBetweenObjects"](a.coords, b.coords);
    if (dist == 0 || Number.isNaN(dist)) {
        return;
    }
    const F = _Config__WEBPACK_IMPORTED_MODULE_1__["default"].G * ((a.mass * b.mass) / (dist * dist));
    return F * _Config__WEBPACK_IMPORTED_MODULE_1__["default"].gravityPullByDelta;
};
const getForceRatio = (dirA, dirB, coordA, coordB) => {
    return -(dirA - dirB) / (Math.abs(coordA.x - coordB.x) + Math.abs(coordA.y - coordB.y));
};
/* harmony default export */ __webpack_exports__["default"] = ((velocity, a, b, delta) => {
    const acc = (getForce(a, b) / a.mass) / _Config__WEBPACK_IMPORTED_MODULE_1__["default"].mPerPx;
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
/* harmony import */ var _Model_Dot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Model/Dot */ "./src/Model/Dot.ts");
/* harmony import */ var _Entity_Node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Entity/Node */ "./src/Entity/Node.ts");


class PlanetTrail extends _Entity_Node__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(planet) {
        super();
        this.planet = planet;
        this.maxDots = 999;
        this.dots = [];
    }
    update(_) {
        if (this.dots.length == this.maxDots) {
            this.dots.shift();
        }
        this.dots.push(new _Model_Dot__WEBPACK_IMPORTED_MODULE_0__["default"](this.planet.getCoordinates().clone(), this.planet.color));
    }
    draw(canvas) {
        this.dots.forEach(d => canvas.draw(d));
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






/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vcGxhbmV0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2FtZXJhL0NhbWVyYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2FudmFzL0NhbnZhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2FudmFzL0NvbnRleHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29udHJvbHMvS2V5Ym9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VudGl0eS9Ob2RlLnRzIiwid2VicGFjazovLy8uL3NyYy9Nb2RlbC9EaXNjLnRzIiwid2VicGFjazovLy8uL3NyYy9Nb2RlbC9Eb3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BoeXNpYy9Db29yZGluYXRlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGh5c2ljL0dlb21ldHJ5LnRzIiwid2VicGFjazovLy8uL3NyYy9QaHlzaWMvR3Jhdml0eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGh5c2ljL1ZlbG9jaXR5LnRzIiwid2VicGFjazovLy8uL3NyYy9QbGFuZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsYW5ldFRyYWlsLnRzIiwid2VicGFjazovLy8uL3NyYy9TY2VuZS9Ob0NsZWFyLnRzIiwid2VicGFjazovLy8uL3NyYy9TY2VuZS9TY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2NlbmUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdDO0FBQ1A7QUFDTTtBQUNDO0FBQ007QUFDYjtBQUNXO0FBQ007QUFDUDtBQUNUO0FBRWxDLE1BQU0sSUFBSSxHQUFHLENBQUMsS0FBYSxFQUFFLE1BQWdCLEVBQUUsRUFBRTtJQUM3QyxpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFO0lBQ3RDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDZixDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxtREFBTSxDQUFDLFNBQVMsQ0FBQztJQUN0QyxDQUFDLENBQUM7SUFDRixJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRTtJQUNyQyxzQkFBc0I7SUFDdEIsSUFBSTtJQUNKLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsbURBQU0sQ0FBQyxvQkFBb0IsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsQ0FBQztBQUNwRyxDQUFDO0FBRUQsUUFBUSxDQUFDLGtCQUFrQixHQUFHO0lBQzFCLElBQUksUUFBUSxDQUFDLFVBQVUsSUFBSSxVQUFVLEVBQUU7UUFDbkMsT0FBTTtLQUNUO0lBQ0QsTUFBTSxNQUFNLEdBQUcsSUFBSSwwREFBTSxDQUFDLG1EQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxtREFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsbURBQU0sQ0FBQyxTQUFTLENBQUM7SUFDakYsTUFBTSxPQUFPLEdBQUcsSUFBSSwwREFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLE1BQU0sRUFBRSxZQUFZLENBQUM7SUFDdkcsTUFBTSxXQUFXLEdBQUcsSUFBSSwwREFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7SUFFckcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQy9CLFdBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztJQUNuQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsU0FBUztJQUVoRCxNQUFNLFdBQVcsR0FBRyxJQUFJLHNEQUFLLENBQUMsTUFBTSxDQUFDO0lBRXJDLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSw4REFBUSxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUM7SUFDMUQsTUFBTSxhQUFhLEdBQUcsd0RBQVUsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDO0lBQ3JELElBQUksT0FBTyxHQUFhLEVBQUU7SUFFMUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFFbkgsS0FBSyxJQUFJLENBQUMsSUFBSSxhQUFhLEVBQUU7UUFDekIsTUFBTSxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUMxQixNQUFNLE1BQU0sR0FBRyxJQUFJLG1EQUFNLENBQUMsQ0FBQyxFQUN2QixJQUFJLCtEQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3pCLENBQUMsQ0FBQyxNQUFNLEVBQ1IsQ0FBQyxDQUFDLElBQUksRUFDTixDQUFDLENBQUMsS0FBSyxFQUNQLElBQUksNERBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDMUMsT0FBTyxDQUNWO1FBQ0QsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDN0IsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLHdEQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7S0FDdkI7SUFFRCxXQUFXLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQztJQUVsQyxJQUFJLENBQUMsbURBQU0sQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztBQUM1RCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDNURGO0FBQUE7QUFBaUM7QUFFbEIsZ0VBQUMsTUFBYyxFQUFFLE1BQWMsRUFBd0IsRUFBRTtJQUNwRSxNQUFNLEdBQUcsR0FBRztRQUNSLENBQUMsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN6RCxDQUFDLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDMUQsTUFBTSxFQUFFLEdBQUc7UUFDWCxJQUFJLEVBQUUsU0FBUztRQUNmLEtBQUssRUFBRSxRQUFRO1FBQ2YsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNuQjtJQUNELE1BQU0sS0FBSyxHQUFHO1FBQ1YsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsbURBQU0sQ0FBQyxNQUFNLENBQUM7UUFDckMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1IsTUFBTSxFQUFFLEVBQUU7UUFDVixJQUFJLEVBQUUsUUFBUTtRQUNkLEtBQUssRUFBRSxTQUFTO1FBQ2hCLFFBQVEsRUFBRSxDQUFDLENBQUMsbURBQU0sQ0FBQyxVQUFVLEdBQUcsbURBQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsbURBQU0sQ0FBQyxVQUFVLEdBQUcsbURBQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUMsQ0FBQyxDQUFDO0tBQ25HO0lBQ0QsT0FBTztRQUNDLE9BQU8sRUFBRSxHQUFHO1FBQ1osYUFBYSxFQUFFLEtBQUs7UUFDcEIsWUFBWSxFQUFFO1lBQ1YsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsbURBQU0sQ0FBQyxNQUFNLENBQUM7WUFDckMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRTtZQUNiLE1BQU0sRUFBRSxFQUFFO1lBQ1YsSUFBSSxFQUFFLFFBQVE7WUFDZCxLQUFLLEVBQUUsS0FBSztZQUNaLFFBQVEsRUFBRSxDQUFDLENBQUMsbURBQU0sQ0FBQyxVQUFVLEdBQUcsbURBQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsbURBQU0sQ0FBQyxVQUFVLEdBQUcsbURBQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUMsQ0FBQyxDQUFDO1NBQ25HO0tBQ1I7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDakNEO0FBQUE7QUFBZSxNQUFNLE1BQU07SUFLdkIsWUFBWSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVM7UUFKcEMsTUFBQyxHQUFXLENBQUM7UUFDYixNQUFDLEdBQVcsQ0FBQztRQUNiLE1BQUMsR0FBVyxDQUFDO1FBR2hCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNWLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNWLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUNkLENBQUM7SUFFRCxDQUFDLENBQUMsQ0FBUztRQUNQLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsQ0FBQyxDQUFDLENBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELFVBQVUsQ0FBQyxDQUFTO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELFNBQVMsQ0FBQyxDQUFTO1FBQ2YsT0FBTyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDckIsQ0FBQztJQUVELFNBQVMsQ0FBQyxDQUFTO1FBQ2YsT0FBTyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDckIsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7O0FDN0JEO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBRUU7QUFFbEIsTUFBTSxNQUFPLFNBQVEsb0RBQUk7SUFLcEMsWUFBWSxLQUFhLEVBQUUsTUFBYyxFQUFFLE1BQWMsRUFBUyxFQUFVO1FBQ3hFLEtBQUssRUFBRTtRQUR1RCxPQUFFLEdBQUYsRUFBRSxDQUFRO1FBRnJFLGFBQVEsR0FBYSxFQUFFO1FBSTFCLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFDOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUU7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSztRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxnREFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUM7SUFDMUUsQ0FBQztJQUVELFFBQVEsQ0FBQyxPQUFvQjtRQUN6QixPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFhO1FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3RCLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztRQUMvQixDQUFDLENBQUM7SUFDTixDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUN6QkQ7QUFBQTtBQUFBO0FBQThCO0FBRWYsTUFBTSxPQUFPO0lBQ3hCLFlBQ2EsT0FBaUMsRUFDakMsTUFBYyxFQUNkLE1BQWM7UUFGZCxZQUFPLEdBQVAsT0FBTyxDQUEwQjtRQUNqQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUNwQixDQUFDO0lBRVIsSUFBSSxDQUFDLEtBQVk7UUFDYixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRTtRQUN4QixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtJQUN6QixDQUFDO0lBRUQsR0FBRyxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLEVBQVUsRUFBRSxFQUFVO1FBQ3ZELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDdkYsT0FBTyxJQUFJO0lBQ2YsQ0FBQztJQUVELEtBQUssQ0FBQyxJQUFVLEVBQUUsS0FBZTtRQUM3QixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFO1FBQzdCLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUU7UUFDL0IsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRTtRQUUvQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRTtRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxHQUFHLCtDQUFNLENBQUMsUUFBUSxNQUFNLEVBQUUsRUFBRTtRQUVoRCxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEQsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVELFFBQVEsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsS0FBYTtRQUM5RCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxLQUFLO1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDL0QsT0FBTyxJQUFJO0lBQ2YsQ0FBQztJQUVELElBQUksQ0FBQyxLQUFhO1FBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsS0FBSztRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtRQUNuQixPQUFPLElBQUk7SUFDZixDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUNoREQ7QUFBQSxNQUFNLFNBQVMsR0FBRyxDQUFDO0FBQ25CLE1BQU0sR0FBRyxHQUFHLEVBQUU7QUFDZCxNQUFNLG9CQUFvQixHQUFHLENBQUMsR0FBRyxHQUFHO0FBQ3BDLElBQUksU0FBUyxHQUFHLEdBQUc7QUFDbkIsSUFBSSxPQUFPLEdBQUcsR0FBRztBQUNqQixNQUFNLGFBQWEsR0FBRyxJQUFJO0FBQzFCLE1BQU0sV0FBVyxHQUFHLEVBQUU7QUFFdEIsSUFBSSxVQUFVLEdBQUcsQ0FBQztBQUNsQixJQUFJLGdCQUFnQixHQUFHLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFDO0FBQ3hDLE1BQU0sY0FBYyxHQUFHLEVBQUU7QUFDekIsTUFBTSxlQUFlLEdBQUcsRUFBRTtBQUUxQixNQUFNLE1BQU0sR0FBRyxLQUFLO0FBQ3BCLE1BQU0sTUFBTSxHQUFHLEtBQUs7QUFDcEIsTUFBTSxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUM7QUFDekIsTUFBTSxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUM7QUFFekIsTUFBTSxrQkFBa0IsR0FBRyxDQUFDO0FBQzVCLE1BQU0sT0FBTyxHQUFHLENBQUM7QUFFakIsTUFBTSxRQUFRLEdBQUcsRUFBRTtBQUNuQixJQUFJLEtBQUssR0FBRyxJQUFJO0FBQ2hCLE1BQU0sVUFBVSxHQUFHLEtBQUssR0FBRyxJQUFJO0FBQy9CLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSztBQUVuQyxJQUFLLFFBR0o7QUFIRCxXQUFLLFFBQVE7SUFDVCx1Q0FBSTtJQUNKLHlDQUFLO0FBQ1QsQ0FBQyxFQUhJLFFBQVEsS0FBUixRQUFRLFFBR1o7QUFFRCxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSTtBQUMxQix3QkFBd0I7QUFDeEIsTUFBTSxPQUFPLEdBQUcsS0FBSztBQUVOO0lBQ1gsU0FBUyxFQUFFLEdBQUcsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUU7SUFDN0Isa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxNQUFNLEVBQUUsT0FBTyxHQUFHLElBQUk7SUFDdEIsY0FBYyxFQUFFLElBQUk7SUFDcEIsQ0FBQztJQUNELGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsR0FBRztJQUNILFNBQVM7SUFDVCxhQUFhO0lBQ2IsV0FBVztJQUNYLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGVBQWU7SUFDZixNQUFNO0lBQ04sTUFBTTtJQUNOLE1BQU07SUFDTixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixLQUFLO0lBQ0wsUUFBUTtJQUNSLElBQUk7SUFDSixPQUFPO0lBQ1AsVUFBVTtJQUNWLG9CQUFvQjtDQUN2Qjs7Ozs7Ozs7Ozs7OztBQy9ERDtBQUFBO0FBQUE7QUFBOEI7QUFHZixNQUFNLFFBQVE7SUFHekIsWUFBcUIsTUFBYyxFQUFXLE1BQWM7UUFBdkMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFXLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDeEQsSUFBSSxDQUFDLGVBQWUsR0FBRztZQUNuQiwrQkFBK0I7WUFDL0Isb0RBQW9EO1lBQ3BELEVBQUUsRUFBRSxHQUFHLEVBQUU7Z0JBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUNyQixDQUFDO1lBQ0QsRUFBRSxFQUFFLEdBQUcsRUFBRTtnQkFDTCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLCtDQUFNLENBQUMsT0FBTyxFQUFFO29CQUNqQyxPQUFNO2lCQUNUO2dCQUNELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLCtDQUFNLENBQUMsYUFBYTtZQUN6QyxDQUFDO1lBQ0QsRUFBRSxFQUFFLEdBQUcsRUFBRTtnQkFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSwrQ0FBTSxDQUFDLGFBQWE7WUFDekMsQ0FBQztZQUNELEVBQUUsRUFBRSxHQUFHLEVBQUU7Z0JBQ0wsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRywrQ0FBTSxDQUFDLFdBQVcsSUFBSSxDQUFDLEVBQUU7b0JBQ3pDLE9BQU87aUJBQ1Y7Z0JBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksK0NBQU0sQ0FBQyxXQUFXO1lBQ3ZDLENBQUM7WUFDRCxFQUFFLEVBQUUsR0FBRyxFQUFFO2dCQUNMLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsK0NBQU0sQ0FBQyxXQUFXLElBQUksQ0FBQyxFQUFFO29CQUN6QyxPQUFPO2lCQUNWO2dCQUNELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLCtDQUFNLENBQUMsV0FBVztZQUN2QyxDQUFDO1lBQ0QsRUFBRSxFQUFFLEdBQUcsRUFBRTtnQkFDTCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLCtDQUFNLENBQUMsTUFBTSxFQUFFO29CQUNoQyxPQUFPO2lCQUNWO2dCQUNELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLCtDQUFNLENBQUMsV0FBVztZQUN2QyxDQUFDO1lBQ0QsRUFBRSxFQUFFLEdBQUcsRUFBRTtnQkFDTCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLCtDQUFNLENBQUMsTUFBTSxFQUFFO29CQUNoQyxPQUFPO2lCQUNWO2dCQUNELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLCtDQUFNLENBQUMsV0FBVztZQUN2QyxDQUFDO1NBQ0o7SUFDTCxDQUFDO0lBRUQsY0FBYyxDQUFDLEtBQW9CO1FBQy9CLElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxTQUFTO1lBQ2pDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDdEMsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUN4REQ7QUFBQTtBQUFlLE1BQWUsSUFBSTtJQUFsQztRQUNXLGFBQVEsR0FBYSxFQUFFO0lBa0JsQyxDQUFDO0lBaEJHLE1BQU0sQ0FBQyxLQUFhO1FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsSUFBSSxDQUFDLE9BQWdCLEVBQUUsS0FBYztRQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxXQUFXO1FBQ1AsT0FBTyxJQUFJLENBQUMsUUFBUTtJQUN4QixDQUFDO0lBRUQsU0FBUyxDQUFDLE1BQWM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzFCLE9BQU8sSUFBSTtJQUNmLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7OztBQ2xCRDtBQUFBO0FBQWUsTUFBTSxJQUFJO0lBQ3JCLFlBQW1CLE1BQW1CLEVBQVMsTUFBYyxFQUFTLEtBQWE7UUFBaEUsV0FBTSxHQUFOLE1BQU0sQ0FBYTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFRO0lBQUcsQ0FBQztJQUV2RixJQUFJLENBQUMsR0FBWTtRQUNiLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDbEUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxjQUFjO1FBQ1YsT0FBTyxJQUFJLENBQUMsTUFBTTtJQUN0QixDQUFDO0lBRUQsY0FBYyxDQUFDLE1BQW1CO1FBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTTtJQUN4QixDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUNqQkQ7QUFBQTtBQUFBO0FBQWlDO0FBRWxCLE1BQU0sR0FBSSxTQUFRLG9EQUFJO0lBQ2pDLFlBQW1CLE1BQW1CLEVBQVMsS0FBYTtRQUN4RCxLQUFLLEVBQUU7UUFEUSxXQUFNLEdBQU4sTUFBTSxDQUFhO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtJQUU1RCxDQUFDO0lBRUQsSUFBSSxDQUFDLEdBQVk7UUFDYixtQ0FBbUM7UUFDbkMsbUVBQW1FO1FBQ25FLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxjQUFjO1FBQ1YsT0FBTyxJQUFJLENBQUMsTUFBTTtJQUN0QixDQUFDO0lBRUQsY0FBYyxDQUFDLE1BQW1CO1FBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTTtJQUN4QixDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUN0QkQ7QUFBQTtBQUFlLE1BQU0sV0FBVztJQUM1QixZQUFtQixDQUFTLEVBQVMsQ0FBUztRQUEzQixNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBQVMsTUFBQyxHQUFELENBQUMsQ0FBUTtJQUFHLENBQUM7SUFFbEQsY0FBYyxDQUFDLENBQVMsRUFBRSxDQUFTO1FBQy9CLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNWLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUNkLENBQUM7SUFFRCxLQUFLO1FBQ0QsT0FBTyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7O0FDVkQ7QUFBQTtBQUFBO0FBQThCO0FBRTlCLE1BQU0seUJBQXlCLEdBQUcsQ0FBQyxDQUFjLEVBQUUsQ0FBYyxFQUFVLEVBQUU7SUFDekUsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLCtDQUFNLENBQUMsTUFBTTtBQUN0RSxDQUFDO0FBRUQsU0FBUyxtQkFBbUIsQ0FBQyxNQUFXLEVBQUUsT0FBWTtJQUNsRCxJQUFJLEdBQUcsR0FBRyx5QkFBeUIsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDckQsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDeEMsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsSUFBSSxPQUFPLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLEVBQUU7UUFDdkIsSUFBSSxPQUFPLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQUU7WUFDdEIsT0FBTyxHQUFHLENBQUM7U0FDZDtRQUNELE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFFRCxJQUFJLE9BQU8sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBRTtRQUN0QixJQUFJLE9BQU8sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBRTtZQUN0QixPQUFPLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBQyxHQUFHLENBQUMsQ0FBQztTQUNuQztRQUNELDZDQUE2QztRQUM3QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzdCO0lBRUQsSUFBSSxPQUFPLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQUU7UUFDdEIsT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUMsR0FBRyxDQUFDLENBQUM7S0FDbkM7SUFDRCxtREFBbUQ7SUFDbkQsT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUMsR0FBRyxDQUFDLENBQUM7QUFDcEMsQ0FBQztBQUVELFNBQVMsb0JBQW9CLENBQUMsTUFBVyxFQUFFLE9BQVk7SUFDbkQsT0FBTyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQ3RELENBQUM7QUFHbUM7Ozs7Ozs7Ozs7Ozs7QUNyQ3BDO0FBQUE7QUFBQTtBQUFzQztBQUNSO0FBRTlCLE1BQU0sUUFBUSxHQUFHLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBVSxFQUFFO0lBQzlDLE1BQU0sSUFBSSxHQUFHLG1FQUFrQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNuRSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNqQyxPQUFNO0tBQ1Q7SUFDRCxNQUFNLENBQUMsR0FBRywrQ0FBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLENBQUM7SUFFbEQsT0FBTyxDQUFDLEdBQUcsK0NBQU0sQ0FBQyxrQkFBa0I7QUFDeEMsQ0FBQztBQUVELE1BQU0sYUFBYSxHQUFHLENBQUMsSUFBWSxFQUFFLElBQVksRUFBRSxNQUFtQixFQUFFLE1BQW1CLEVBQVUsRUFBRTtJQUNuRyxPQUFPLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDM0YsQ0FBQztBQUVjLGdFQUFDLFFBQWtCLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxLQUFhLEVBQUUsRUFBRTtJQUN2RSxNQUFNLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLCtDQUFNLENBQUMsTUFBTTtJQUNyRCxRQUFRLENBQUMsVUFBVSxDQUNmLEdBQUcsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQy9ELEdBQUcsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQy9ELEtBQUssQ0FDUjtBQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN6QkQ7QUFBQTtBQUFlLE1BQU0sUUFBUTtJQUN6QixZQUFtQixDQUFTLEVBQVMsQ0FBUztRQUEzQixNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBQVMsTUFBQyxHQUFELENBQUMsQ0FBUTtJQUFHLENBQUM7SUFFbEQsVUFBVSxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsS0FBYTtRQUMxQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLO1FBQ25CLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUs7SUFDdkIsQ0FBQztJQUVELEtBQUssQ0FBQyxHQUFnQixFQUFFLEtBQWE7UUFDakMsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUs7UUFDdkIsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUs7SUFDM0IsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7O0FDWkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUVZO0FBQ1g7QUFFakIsTUFBTSxNQUFPLFNBQVEsb0RBQUk7SUFJcEMsWUFDVyxFQUFVLEVBQ1YsTUFBbUIsRUFDakIsTUFBYyxFQUNkLElBQVksRUFDWixLQUFhLEVBQ2YsUUFBa0IsRUFDaEIsT0FBaUI7UUFFdEIsS0FBSyxFQUFFO1FBUkosT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUNWLFdBQU0sR0FBTixNQUFNLENBQWE7UUFDakIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2YsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNoQixZQUFPLEdBQVAsT0FBTyxDQUFVO1FBR3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxtREFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQy9ELENBQUM7SUFFTCxNQUFNLENBQUMsS0FBYTtRQUNoQixLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDeEIsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFFekIsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUU7Z0JBQ2pCLFNBQVE7YUFDWDtZQUNELCtEQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQztTQUM5QztRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDO1FBQ3ZDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxJQUFJLENBQUMsT0FBZ0I7UUFDakIsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxjQUFjO1FBQ1YsT0FBTyxJQUFJLENBQUMsTUFBTTtJQUN0QixDQUFDO0lBRUQsY0FBYyxDQUFDLE1BQW1CO1FBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTTtJQUN4QixDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUNoREQ7QUFBQTtBQUFBO0FBQUE7QUFBNkI7QUFFRztBQUVqQixNQUFNLFdBQVksU0FBUSxvREFBSTtJQUl6QyxZQUFvQixNQUFjO1FBQzlCLEtBQUssRUFBRTtRQURTLFdBQU0sR0FBTixNQUFNLENBQVE7UUFGMUIsWUFBTyxHQUFHLEdBQUc7UUFJakIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFO0lBQ2xCLENBQUM7SUFFRCxNQUFNLENBQUMsQ0FBUztRQUNaLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtTQUNwQjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksa0RBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUVELElBQUksQ0FBQyxNQUFlO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUN0QkQ7QUFBQTtBQUFBO0FBQTJCO0FBRVosTUFBTSxPQUFRLFNBQVEsOENBQUs7SUFBMUM7O1FBQ1csYUFBUSxHQUFhLEVBQUU7SUFLbEMsQ0FBQztJQUhHLElBQUksQ0FBQyxPQUFnQixFQUFFLEtBQWM7UUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN0RCxDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUNSRDtBQUFBO0FBQUE7QUFBa0M7QUFFbkIsTUFBTSxLQUFNLFNBQVEsb0RBQUk7SUFHbkMsWUFBb0IsRUFBVTtRQUMxQixLQUFLLEVBQUU7UUFEUyxPQUFFLEdBQUYsRUFBRSxDQUFRO1FBRnZCLGFBQVEsR0FBYSxFQUFFO0lBSTlCLENBQUM7SUFFRCxJQUFJLENBQUMsT0FBZ0IsRUFBRSxLQUFjO1FBQ2pDLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNGLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbEQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM3QixDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUNoQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkI7QUFDSTtBQUs5QiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IENhbnZhcyBmcm9tIFwiLi9zcmMvQ2FudmFzL0NhbnZhc1wiXG5pbXBvcnQgUGxhbmV0IGZyb20gXCIuL3NyYy9QbGFuZXRcIlxuaW1wb3J0IHtTY2VuZX0gZnJvbSBcIi4vc3JjL1NjZW5lL2luZGV4XCJcbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4vc3JjL0NhbWVyYS9DYW1lcmFcIlxuaW1wb3J0IEtleWJvYXJkIGZyb20gXCIuL3NyYy9Db250cm9scy9LZXlib2FyZFwiXG5pbXBvcnQgQ29uZmlnIGZyb20gXCIuL3NyYy9Db25maWdcIlxuaW1wb3J0IFZlbG9jaXR5IGZyb20gXCIuL3NyYy9QaHlzaWMvVmVsb2NpdHlcIlxuaW1wb3J0IENvb3JkaW5hdGVzIGZyb20gXCIuL3NyYy9QaHlzaWMvQ29vcmRpbmF0ZXNcIlxuaW1wb3J0IFBsYW5ldFRyYWlsIGZyb20gXCIuL3NyYy9QbGFuZXRUcmFpbFwiXG5pbXBvcnQgZ2V0UGxhbmV0cyBmcm9tIFwiLi9wbGFuZXRzXCJcblxuY29uc3QgbWFpbiA9IChkZWx0YTogbnVtYmVyLCBib2FyZHM6IENhbnZhc1tdKSA9PiB7XG4gICAgLy8gY1RpbWUgKz0gZGVsdGFcbiAgICAvLyBpZiAoY1RpbWUgPiBDb25maWcuZHBmKSB7XG4gICAgbGV0IG5CZWZvcmUgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KClcbiAgICBib2FyZHMuZm9yRWFjaChiID0+IHtcbiAgICAgICAgYi51cGRhdGUoZGVsdGEgKiBDb25maWcuZ2FtZVNwZWVkKVxuICAgIH0pXG4gICAgbGV0IG5BZnRlciA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKVxuICAgIC8vIGNUaW1lIC09IENvbmZpZy5kcGZcbiAgICAvLyB9XG4gICAgc2V0VGltZW91dCgoKSA9PiBtYWluKENvbmZpZy5taWxsaVNlY29uZHNQZXJGcmFtZSwgYm9hcmRzKSwgKGRlbHRhICogMTAwMCkgLSAobkFmdGVyIC0gbkJlZm9yZSkpXG59XG5cbmRvY3VtZW50Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPSBcImNvbXBsZXRlXCIpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBDYW1lcmEoQ29uZmlnLnNwYWNlVyAvIDIsIENvbmZpZy5zcGFjZUggLyAyLCBDb25maWcuem9vbUxldmVsKVxuICAgIGNvbnN0IGJnQm9hcmQgPSBuZXcgQ2FudmFzKGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0LCBjYW1lcmEsIFwiYmFja2dyb3VuZFwiKVxuICAgIGNvbnN0IHBsYW5ldEJvYXJkID0gbmV3IENhbnZhcyhkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCwgY2FtZXJhLCBcIm1haW5cIilcblxuICAgIGJnQm9hcmQuYXBwZW5kVG8oZG9jdW1lbnQuYm9keSlcbiAgICBwbGFuZXRCb2FyZC5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KVxuICAgIGJnQm9hcmQuY2FudmFzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzAwMDAwMFwiXG4gICAgXG4gICAgY29uc3QgcGxhbmV0U2NlbmUgPSBuZXcgU2NlbmUoXCJtYWluXCIpXG5cbiAgICBjb25zdCBrZXlib2FyZENvbnRyb2xzID0gbmV3IEtleWJvYXJkKGNhbWVyYSwgcGxhbmV0Qm9hcmQpXG4gICAgY29uc3QgcGxhbmV0c0NvbmZpZyA9IGdldFBsYW5ldHMocGxhbmV0Qm9hcmQsIGNhbWVyYSlcbiAgICBsZXQgcGxhbmV0czogUGxhbmV0W10gPSBbXVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5Ym9hcmRDb250cm9scy5oYW5kbGVLZXlib2FyZC5iaW5kKGtleWJvYXJkQ29udHJvbHMpKTtcbiAgICBcbiAgICBmb3IgKGxldCBpIGluIHBsYW5ldHNDb25maWcpIHtcbiAgICAgICAgY29uc3QgcCA9IHBsYW5ldHNDb25maWdbaV1cbiAgICAgICAgY29uc3QgcGxhbmV0ID0gbmV3IFBsYW5ldChpLFxuICAgICAgICAgICAgbmV3IENvb3JkaW5hdGVzKHAueCwgcC55KSxcbiAgICAgICAgICAgIHAucmFkaXVzLFxuICAgICAgICAgICAgcC5tYXNzLFxuICAgICAgICAgICAgcC5jb2xvcixcbiAgICAgICAgICAgIG5ldyBWZWxvY2l0eShwLnZlbG9jaXR5WzBdLCBwLnZlbG9jaXR5WzFdKSxcbiAgICAgICAgICAgIHBsYW5ldHNcbiAgICAgICAgKVxuICAgICAgICBwbGFuZXRTY2VuZS5hZGRFbnRpdHkocGxhbmV0KVxuICAgICAgICBwbGFuZXRTY2VuZS5hZGRFbnRpdHkobmV3IFBsYW5ldFRyYWlsKHBsYW5ldCkpXG4gICAgICAgIHBsYW5ldHMucHVzaChwbGFuZXQpXG4gICAgfVxuXG4gICAgcGxhbmV0Qm9hcmQuYWRkRW50aXR5KHBsYW5ldFNjZW5lKVxuICAgIFxuICAgIG1haW4oQ29uZmlnLm1pbGxpU2Vjb25kc1BlckZyYW1lLCBbYmdCb2FyZCwgcGxhbmV0Qm9hcmRdKVxuIH0iLCJpbXBvcnQgQ2FudmFzIGZyb20gXCIuL3NyYy9DYW52YXMvQ2FudmFzXCJcbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4vc3JjL0NhbWVyYS9DYW1lcmFcIlxuaW1wb3J0IENvbmZpZyBmcm9tIFwiLi9zcmMvQ29uZmlnXCJcblxuZXhwb3J0IGRlZmF1bHQgKGNhbnZhczogQ2FudmFzLCBjYW1lcmE6IENhbWVyYSk6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0+IHtcbiAgICBjb25zdCBzdW4gPSB7XG4gICAgICAgIHg6IGNhbWVyYS5yZWxhdGl2ZVgoY2FtZXJhLnogKiAoY2FudmFzLmNhbnZhcy53aWR0aCAvIDIpKSxcbiAgICAgICAgeTogY2FtZXJhLnJlbGF0aXZlWShjYW1lcmEueiAqIChjYW52YXMuY2FudmFzLmhlaWdodCAvIDIpKSxcbiAgICAgICAgcmFkaXVzOiAxMjAsXG4gICAgICAgIG1hc3M6IDEuOTg5MWUzMCxcbiAgICAgICAgY29sb3I6IFwib3JhbmdlXCIsXG4gICAgICAgIHZlbG9jaXR5OiBbMCwgMF1cbiAgICB9XG4gICAgY29uc3QgZWFydGggPSB7XG4gICAgICAgIHg6IHN1bi54IC0gKDE0OS45NmU5IC8gQ29uZmlnLm1QZXJQeCksXG4gICAgICAgIHk6IHN1bi55LFxuICAgICAgICByYWRpdXM6IDMwLFxuICAgICAgICBtYXNzOiA1Ljk3MmUyNCxcbiAgICAgICAgY29sb3I6IFwic2t5Ymx1ZVwiLFxuICAgICAgICB2ZWxvY2l0eTogWyhDb25maWcuZWFydGhTcGVlZCAvIENvbmZpZy5tUGVyUHgpICogMS8zLCAoQ29uZmlnLmVhcnRoU3BlZWQgLyBDb25maWcubVBlclB4KSAqIDIvM11cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFwic3VuNDFcIjogc3VuLFxuICAgICAgICAgICAgXCJlYXJ0aCBhbG9yc1wiOiBlYXJ0aCxcbiAgICAgICAgICAgIFwiaW50ZXJsb3BlclwiOiB7XG4gICAgICAgICAgICAgICAgeDogc3VuLnggKyAoMTAwLjk2ZTkgLyBDb25maWcubVBlclB4KSxcbiAgICAgICAgICAgICAgICB5OiBzdW4ueSArIDIwLFxuICAgICAgICAgICAgICAgIHJhZGl1czogMjQsXG4gICAgICAgICAgICAgICAgbWFzczogMy45NzJlMjQsXG4gICAgICAgICAgICAgICAgY29sb3I6IFwicmVkXCIsXG4gICAgICAgICAgICAgICAgdmVsb2NpdHk6IFsoQ29uZmlnLmVhcnRoU3BlZWQgLyBDb25maWcubVBlclB4KSAqIDEvMywgKENvbmZpZy5lYXJ0aFNwZWVkIC8gQ29uZmlnLm1QZXJQeCkgKiAyLzNdXG4gICAgICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbWVyYSB7XG4gICAgcHVibGljIHg6IG51bWJlciA9IDBcbiAgICBwdWJsaWMgeTogbnVtYmVyID0gMFxuICAgIHB1YmxpYyB6OiBudW1iZXIgPSAxXG5cbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMueCA9IHhcbiAgICAgICAgdGhpcy55ID0geVxuICAgICAgICB0aGlzLnogPSB6XG4gICAgfVxuXG4gICAgWCh4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy56VHJhbnNmb3JtKHggLSB0aGlzLngpXG4gICAgfVxuXG4gICAgWSh5OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy56VHJhbnNmb3JtKHkgLSB0aGlzLnkpXG4gICAgfVxuXG4gICAgelRyYW5zZm9ybSh2OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdiAqICgxIC8gdGhpcy56KVxuICAgIH1cblxuICAgIHJlbGF0aXZlWCh4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy54ICsgeFxuICAgIH1cblxuICAgIHJlbGF0aXZlWSh5OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy55ICsgeVxuICAgIH1cbn0iLCJpbXBvcnQgRW50aXR5IGZyb20gXCIuLi9FbnRpdHkvRW50aXR5XCJcbmltcG9ydCBDb250ZXh0IGZyb20gXCIuL0NvbnRleHRcIlxuaW1wb3J0IENhbWVyYSBmcm9tIFwiLi4vQ2FtZXJhL0NhbWVyYVwiXG5pbXBvcnQgTm9kZSBmcm9tIFwiLi4vRW50aXR5L05vZGVcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMgZXh0ZW5kcyBOb2Rle1xuICAgIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnRcbiAgICByZWFkb25seSBjb250ZXh0OiBDb250ZXh0XG4gICAgcHVibGljIGVudGl0aWVzOiBFbnRpdHlbXSA9IFtdXG5cbiAgICBjb25zdHJ1Y3Rvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgY2FtZXJhOiBDYW1lcmEsIHB1YmxpYyBpZDogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpXG4gICAgICAgIHRoaXMuY2FudmFzLmlkID0gdGhpcy5pZFxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoXG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodFxuICAgICAgICB0aGlzLmNvbnRleHQgPSBuZXcgQ29udGV4dCh0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIiksIGNhbWVyYSwgdGhpcylcbiAgICB9XG5cbiAgICBhcHBlbmRUbyhlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKVxuICAgIH1cblxuICAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZW50aXRpZXMuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICAgIGUudXBkYXRlKGRlbHRhKVxuICAgICAgICAgICAgZS5kcmF3KHRoaXMuY29udGV4dCwgZGVsdGEpXG4gICAgICAgIH0pXG4gICAgfVxufSIsImltcG9ydCBNb2RlbCBmcm9tIFwiLi4vTW9kZWwvTW9kZWxcIlxuaW1wb3J0IENhbWVyYSBmcm9tIFwiLi4vQ2FtZXJhL0NhbWVyYVwiXG5pbXBvcnQgQ2FudmFzIGZyb20gXCIuL0NhbnZhc1wiXG5pbXBvcnQgVGV4dCBmcm9tIFwiLi4vVGV4dC9UZXh0XCJcbmltcG9ydCBDb25maWcgZnJvbSBcIi4uL0NvbmZpZ1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRleHQge1xuICAgIGNvbnN0cnVjdG9yIChcbiAgICAgICAgcmVhZG9ubHkgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICAgICAgICByZWFkb25seSBjYW1lcmE6IENhbWVyYSxcbiAgICAgICAgcmVhZG9ubHkgY2FudmFzOiBDYW52YXMsXG4gICAgICAgICkge31cblxuICAgIGRyYXcobW9kZWw6IE1vZGVsKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKVxuICAgICAgICBtb2RlbC5kcmF3KHRoaXMpXG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2UoKVxuICAgIH1cblxuICAgIGFyYyh4OiBudW1iZXIsIHk6IG51bWJlciwgcjogbnVtYmVyLCBhczogbnVtYmVyLCBhZTogbnVtYmVyKTogQ29udGV4dCB7XG4gICAgICAgIHRoaXMuY29udGV4dC5hcmModGhpcy5jYW1lcmEuWCh4KSwgdGhpcy5jYW1lcmEuWSh5KSwgdGhpcy5jYW1lcmEuelRyYW5zZm9ybShyKSwgYXMsIGFlKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIHdyaXRlKHRleHQ6IFRleHQsIGxpbmVzOiBzdHJpbmdbXSkge1xuICAgICAgICBjb25zdCBmcyA9IHRleHQuZ2V0Rm9udFNpemUoKVxuICAgICAgICBjb25zdCBmZiA9IHRleHQuZ2V0Rm9udEZhbWlseSgpXG4gICAgICAgIGNvbnN0IGMgPSB0ZXh0LmdldENvb3JkaW5hdGVzKClcblxuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKClcbiAgICAgICAgdGhpcy5jb250ZXh0LmZvbnQgPSBgJHtDb25maWcuZm9udFNpemV9cHggJHtmZn1gXG5cbiAgICAgICAgbGluZXMubWFwKChsaW5lLCBpKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQobGluZSwgYy54LCBjLnkgKyAoZnMgKiBpKSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmaWxsUmVjdCh4OiBudW1iZXIsIHk6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIsIGNvbG9yOiBzdHJpbmcpOiBDb250ZXh0IHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCh0aGlzLmNhbWVyYS5YKHgpLCB0aGlzLmNhbWVyYS5ZKHkpLCB3LCBoKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIGZpbGwoY29sb3I6IHN0cmluZyk6IENvbnRleHQge1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3JcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGwoKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbn1cblxudHlwZSBEcmF3RnVuY3Rpb24gPSAoY3R4OiBDb250ZXh0KSA9PiB2b2lkXG5cbmV4cG9ydCB7XG4gICAgRHJhd0Z1bmN0aW9uXG59IiwiY29uc3QgY0R1cmF0aW9uID0gMFxuY29uc3QgZnBzID0gNjBcbmNvbnN0IG1pbGxpU2Vjb25kc1BlckZyYW1lID0gMSAvIGZwc1xubGV0IHpvb21MZXZlbCA9IDIuNVxubGV0IHpvb21NaW4gPSAwLjFcbmNvbnN0IHpvb21BY3Rpb25Qb3cgPSAwLjEwXG5jb25zdCBkZWNhbEJ5TW92ZSA9IDI1XG5cbmxldCBtYXhQbGFuZXRzID0gNFxubGV0IHBsYW5ldHNSYWRpdXNEZWYgPSB7bWluOiAzLCBtYXg6IDcwfVxuY29uc3QgcGxhbmV0c01pbkRpc3QgPSAxMFxuY29uc3QgcGxhbmV0QmFzZVNwZWVkID0gNDBcblxuY29uc3Qgc3BhY2VXID0gMTAwMDBcbmNvbnN0IHNwYWNlSCA9IDEwMDAwXG5jb25zdCBkZWNhbFggPSBzcGFjZVcgLyAyXG5jb25zdCBkZWNhbFkgPSBzcGFjZUggLyAyXG5cbmNvbnN0IGdyYXZpdHlQdWxsQnlEZWx0YSA9IDFcbmNvbnN0IGRpc3RQb3cgPSA1XG5cbmNvbnN0IGZvbnRTaXplID0gMTRcbmxldCBkZWJ1ZyA9IG51bGxcbmNvbnN0IGVhcnRoU3BlZWQgPSAyOS43OCAqIDEwMDBcbmNvbnN0IEcgPSBNYXRoLnBvdygxMCwgLTExKSAqIDYuNjc0XG5cbmVudW0gUGxheU1vZGUge1xuICAgIFBMQVksXG4gICAgUEFVU0Vcbn1cblxuY29uc3QgbW9kZSA9IFBsYXlNb2RlLlBMQVlcbi8vIGNvbnN0IGttUGVyUHggPSAxLjNlNVxuY29uc3Qga21QZXJQeCA9IDEuOGU1XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBnYW1lU3BlZWQ6IDM2NSAqIDI0ICogNjAgKiAxNSxcbiAgICAvLyBnYW1lU3BlZWQ6IDEwMCxcbiAgICBrbVBlclB4LFxuICAgIG1QZXJQeDoga21QZXJQeCAqIDEwMDAsXG4gICAga2dQZXJQeERlbnNpdHk6IDEyMDAsXG4gICAgRyxcbiAgICBncmF2aXR5UHVsbEJ5RGVsdGEsXG4gICAgY0R1cmF0aW9uLFxuICAgIGZwcyxcbiAgICB6b29tTGV2ZWwsXG4gICAgem9vbUFjdGlvblBvdyxcbiAgICBkZWNhbEJ5TW92ZSxcbiAgICBtYXhQbGFuZXRzLFxuICAgIHBsYW5ldHNSYWRpdXNEZWYsXG4gICAgcGxhbmV0c01pbkRpc3QsXG4gICAgcGxhbmV0QmFzZVNwZWVkLFxuICAgIHNwYWNlVyxcbiAgICBzcGFjZUgsXG4gICAgZGVjYWxYLFxuICAgIGRlY2FsWSxcbiAgICBkaXN0UG93LFxuICAgIGZvbnRTaXplLFxuICAgIGRlYnVnLFxuICAgIFBsYXlNb2RlLFxuICAgIG1vZGUsXG4gICAgem9vbU1pbixcbiAgICBlYXJ0aFNwZWVkLFxuICAgIG1pbGxpU2Vjb25kc1BlckZyYW1lXG59IiwiaW1wb3J0IENhbWVyYSBmcm9tIFwiLi4vQ2FtZXJhL0NhbWVyYVwiXG5pbXBvcnQgQ29uZmlnIGZyb20gXCIuLi9Db25maWdcIlxuaW1wb3J0IENhbnZhcyBmcm9tIFwiLi4vQ2FudmFzL0NhbnZhc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleWJvYXJkIHtcbiAgICBwdWJsaWMgYWN0aW9uQnlLZXljb2RlOiB7W2tleTogbnVtYmVyXTogRnVuY3Rpb259XG5cbiAgICBjb25zdHJ1Y3RvcihyZWFkb25seSBjYW1lcmE6IENhbWVyYSwgcmVhZG9ubHkgY2FudmFzOiBDYW52YXMpIHtcbiAgICAgICAgdGhpcy5hY3Rpb25CeUtleWNvZGUgPSB7XG4gICAgICAgICAgICAvLyA2ODogKCkgPT4ge2RlYnVnLlRvZ2dsZSgpO30sXG4gICAgICAgICAgICAvLyA4MzogKCkgPT4ge21vZGUgPSBtb2RlID09IFBBVVNFID8gUExBWSA6IFBBVVNFO30sXG4gICAgICAgICAgICA4MjogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnggPSAwXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEueSA9IDBcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56ID0gMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDkwOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FtZXJhLnogPD0gQ29uZmlnLnpvb21NaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnogLT0gQ29uZmlnLnpvb21BY3Rpb25Qb3dcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA4ODogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnogKz0gQ29uZmlnLnpvb21BY3Rpb25Qb3dcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAzNzogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhbWVyYS54IC0gQ29uZmlnLmRlY2FsQnlNb3ZlIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS54IC09IENvbmZpZy5kZWNhbEJ5TW92ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDM4OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FtZXJhLnkgLSBDb25maWcuZGVjYWxCeU1vdmUgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnkgLT0gQ29uZmlnLmRlY2FsQnlNb3ZlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMzk6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYW1lcmEueCA+PSBDb25maWcuc3BhY2VXKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEueCArPSBDb25maWcuZGVjYWxCeU1vdmVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA0MDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhbWVyYS55ID49IENvbmZpZy5zcGFjZUgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS55ICs9IENvbmZpZy5kZWNhbEJ5TW92ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlS2V5Ym9hcmQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aW9uQnlLZXljb2RlID09IHVuZGVmaW5lZCB8fCBcbiAgICAgICAgICAgICF0aGlzLmFjdGlvbkJ5S2V5Y29kZVtldmVudC5rZXlDb2RlXSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWN0aW9uQnlLZXljb2RlW2V2ZW50LmtleUNvZGVdKCk7XG4gICAgfVxufSIsImltcG9ydCBFbnRpdHkgZnJvbSBcIi4vRW50aXR5XCJcbmltcG9ydCBDb250ZXh0IGZyb20gXCIuLi9DYW52YXMvQ29udGV4dFwiXG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIE5vZGUgaW1wbGVtZW50cyBFbnRpdHkge1xuICAgIHB1YmxpYyBlbnRpdGllczogRW50aXR5W10gPSBbXVxuXG4gICAgdXBkYXRlKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbnRpdGllcy5mb3JFYWNoKGUgPT4gZS51cGRhdGUoZGVsdGEpKVxuICAgIH1cblxuICAgIGRyYXcoY29udGV4dDogQ29udGV4dCwgZGVsdGE/OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbnRpdGllcy5mb3JFYWNoKGUgPT4gZS5kcmF3KGNvbnRleHQsIGRlbHRhKSlcbiAgICB9XG5cbiAgICBnZXRFbnRpdGllcygpOiBFbnRpdHlbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVudGl0aWVzXG4gICAgfVxuXG4gICAgYWRkRW50aXR5KGVudGl0eTogRW50aXR5KTogdGhpcyB7XG4gICAgICAgIHRoaXMuZW50aXRpZXMucHVzaChlbnRpdHkpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxufSIsImltcG9ydCBDb250ZXh0IGZyb20gXCIuLi9DYW52YXMvQ29udGV4dFwiXG5pbXBvcnQgQ29vcmRpbmF0ZXMgZnJvbSBcIi4uL1BoeXNpYy9Db29yZGluYXRlc1wiXG5pbXBvcnQgTW9kZWwgZnJvbSBcIi4vTW9kZWxcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNjIGltcGxlbWVudHMgTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjb29yZHM6IENvb3JkaW5hdGVzLCBwdWJsaWMgcmFkaXVzOiBudW1iZXIsIHB1YmxpYyBjb2xvcjogc3RyaW5nKSB7fVxuXG4gICAgZHJhdyhjdHg6IENvbnRleHQpIHtcbiAgICAgICAgY3R4LmFyYyh0aGlzLmNvb3Jkcy54LCB0aGlzLmNvb3Jkcy55LCB0aGlzLnJhZGl1cywgMCwgMiAqIE1hdGguUEkpXG4gICAgICAgIGN0eC5maWxsKHRoaXMuY29sb3IpXG4gICAgfVxuXG4gICAgZ2V0Q29vcmRpbmF0ZXMoKTogQ29vcmRpbmF0ZXMge1xuICAgICAgICByZXR1cm4gdGhpcy5jb29yZHNcbiAgICB9XG5cbiAgICBzZXRDb29yZGluYXRlcyhjb29yZHM6IENvb3JkaW5hdGVzKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29vcmRzID0gY29vcmRzXG4gICAgfVxufSIsImltcG9ydCBDb250ZXh0IGZyb20gXCIuLi9DYW52YXMvQ29udGV4dFwiXG5pbXBvcnQgQ29vcmRpbmF0ZXMgZnJvbSBcIi4uL1BoeXNpYy9Db29yZGluYXRlc1wiXG5pbXBvcnQgTm9kZSBmcm9tIFwiLi4vRW50aXR5L05vZGVcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb3QgZXh0ZW5kcyBOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY29vcmRzOiBDb29yZGluYXRlcywgcHVibGljIGNvbG9yOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgIH1cblxuICAgIGRyYXcoY3R4OiBDb250ZXh0KSB7XG4gICAgICAgIC8vIGN0eC5jb250ZXh0LmZpbGxTdHlsZSA9IFwicHVycGxlXCJcbiAgICAgICAgLy8gY3R4LmNvbnRleHQuZmlsbFJlY3QodGhpcy5jb29yZHMueCAtIDEsIHRoaXMuY29vcmRzLnkgLSAxLCAyLCAyKVxuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5jb29yZHMueCwgdGhpcy5jb29yZHMueSwgMSwgMSwgdGhpcy5jb2xvcilcbiAgICB9XG5cbiAgICBnZXRDb29yZGluYXRlcygpOiBDb29yZGluYXRlcyB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvb3Jkc1xuICAgIH1cblxuICAgIHNldENvb3JkaW5hdGVzKGNvb3JkczogQ29vcmRpbmF0ZXMpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb29yZHMgPSBjb29yZHNcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29vcmRpbmF0ZXMge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB4OiBudW1iZXIsIHB1YmxpYyB5OiBudW1iZXIpIHt9XG5cbiAgICBzZXRDb29yZGluYXRlcyh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnggPSB4XG4gICAgICAgIHRoaXMueSA9IHlcbiAgICB9XG5cbiAgICBjbG9uZSgpOiBDb29yZGluYXRlcyB7XG4gICAgICAgIHJldHVybiBuZXcgQ29vcmRpbmF0ZXModGhpcy54LCB0aGlzLnkpXG4gICAgfVxufSIsImltcG9ydCBDb29yZGluYXRlcyBmcm9tIFwiLi9Db29yZGluYXRlc1wiXG5pbXBvcnQgQ29uZmlnIGZyb20gXCIuLi9Db25maWdcIlxuXG5jb25zdCBnZXREaXN0YW5jZUJldHdlZW5PYmplY3RzID0gKGE6IENvb3JkaW5hdGVzLCBiOiBDb29yZGluYXRlcyk6IG51bWJlciA9PiB7XG4gICAgcmV0dXJuIChNYXRoLmFicyhiLnggLSBhLngpICsgTWF0aC5hYnMoYi55IC0gYS55KSkgKiBDb25maWcubVBlclB4XG59XG5cbmZ1bmN0aW9uIGdldEFuZ3VsYXJEaXJlY3Rpb24ob2JqUmVmOiBhbnksIG9iakRpc3Q6IGFueSkge1xuICAgIGxldCBoeXAgPSBnZXREaXN0YW5jZUJldHdlZW5PYmplY3RzKG9ialJlZiwgb2JqRGlzdCk7XG4gICAgbGV0IG9wcCA9IE1hdGguYWJzKG9ialJlZi54IC0gb2JqRGlzdC54KVxuICAgIC8vIHNpbiA9IG9wcC9oeXBcbiAgICAvLyBjb3MgPSBhZGovaHlwXG4gICAgLy8gdGFuID0gb3BwL2FkalxuICAgIGlmIChvYmpEaXN0LnkgPT0gb2JqUmVmLnkpIHtcbiAgICAgICAgaWYgKG9iakRpc3QueCA8IG9ialJlZi54KSB7XG4gICAgICAgICAgICByZXR1cm4gMjcwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiA5MDtcbiAgICB9XG5cbiAgICBpZiAob2JqRGlzdC55IDwgb2JqUmVmLnkpIHtcbiAgICAgICAgaWYgKG9iakRpc3QueCA8IG9ialJlZi54KSB7XG4gICAgICAgICAgICByZXR1cm4gMzYwIC0gTWF0aC5hc2luKG9wcC9oeXApO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGh5cCwgb3BwLCBNYXRoLmFzaW4ob3BwL2h5cCkpO1xuICAgICAgICByZXR1cm4gTWF0aC5hc2luKG9wcC9oeXApO1xuICAgIH1cblxuICAgIGlmIChvYmpEaXN0LnggPCBvYmpSZWYueCkge1xuICAgICAgICByZXR1cm4gMTgwICsgTWF0aC5hc2luKG9wcC9oeXApO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhoeXAsIG9wcCwgMTgwIC0gTWF0aC5hc2luKG9wcC9oeXApKTtcbiAgICByZXR1cm4gMTgwIC0gTWF0aC5hc2luKG9wcC9oeXApO1xufVxuXG5mdW5jdGlvbiBnZXRSb3RhdGlvbkRpcmVjdGlvbihvYmpSZWY6IGFueSwgb2JqRGlzdDogYW55KSB7XG4gICAgcmV0dXJuIGdldEFuZ3VsYXJEaXJlY3Rpb24ob2JqUmVmLCBvYmpEaXN0KSAvIDM2MDtcbn1cblxuXG5leHBvcnQgeyBnZXREaXN0YW5jZUJldHdlZW5PYmplY3RzIH0iLCJpbXBvcnQgVmVsb2NpdHkgZnJvbSBcIi4vVmVsb2NpdHlcIjtcbmltcG9ydCBQbGFuZXQgZnJvbSBcIi4uL1BsYW5ldFwiXG5pbXBvcnQgQ29vcmRpbmF0ZXMgZnJvbSBcIi4vQ29vcmRpbmF0ZXNcIlxuaW1wb3J0ICogYXMgR2VvbWV0cnkgZnJvbSBcIi4vR2VvbWV0cnlcIlxuaW1wb3J0IENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnXCJcblxuY29uc3QgZ2V0Rm9yY2UgPSAoYTogUGxhbmV0LCBiOiBQbGFuZXQpOiBudW1iZXIgPT4ge1xuICAgIGNvbnN0IGRpc3QgPSBHZW9tZXRyeS5nZXREaXN0YW5jZUJldHdlZW5PYmplY3RzKGEuY29vcmRzLCBiLmNvb3JkcylcbiAgICBpZiAoZGlzdCA9PSAwIHx8IE51bWJlci5pc05hTihkaXN0KSkge1xuICAgICAgICByZXR1cm4gXG4gICAgfVxuICAgIGNvbnN0IEYgPSBDb25maWcuRyAqICgoYS5tYXNzKmIubWFzcykvKGRpc3QqZGlzdCkpXG5cbiAgICByZXR1cm4gRiAqIENvbmZpZy5ncmF2aXR5UHVsbEJ5RGVsdGFcbn1cblxuY29uc3QgZ2V0Rm9yY2VSYXRpbyA9IChkaXJBOiBudW1iZXIsIGRpckI6IG51bWJlciwgY29vcmRBOiBDb29yZGluYXRlcywgY29vcmRCOiBDb29yZGluYXRlcyk6IG51bWJlciA9PiB7XG4gICAgcmV0dXJuIC0oZGlyQSAtIGRpckIpIC8gKE1hdGguYWJzKGNvb3JkQS54IC0gY29vcmRCLngpICsgTWF0aC5hYnMoY29vcmRBLnkgLSBjb29yZEIueSkpXG59XG5cbmV4cG9ydCBkZWZhdWx0ICh2ZWxvY2l0eTogVmVsb2NpdHksIGE6IFBsYW5ldCwgYjogUGxhbmV0LCBkZWx0YTogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgYWNjID0gKGdldEZvcmNlKGEsIGIpIC8gYS5tYXNzKSAvIENvbmZpZy5tUGVyUHhcbiAgICB2ZWxvY2l0eS5hY2NlbGVyYXRlKFxuICAgICAgICBhY2MgKiBnZXRGb3JjZVJhdGlvKGEuY29vcmRzLngsIGIuY29vcmRzLngsIGEuY29vcmRzLCBiLmNvb3JkcyksXG4gICAgICAgIGFjYyAqIGdldEZvcmNlUmF0aW8oYS5jb29yZHMueSwgYi5jb29yZHMueSwgYS5jb29yZHMsIGIuY29vcmRzKSxcbiAgICAgICAgZGVsdGFcbiAgICApXG59IiwiaW1wb3J0IENvb3JkaW5hdGVzIGZyb20gXCIuL0Nvb3JkaW5hdGVzXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVsb2NpdHkge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB4OiBudW1iZXIsIHB1YmxpYyB5OiBudW1iZXIpIHt9XG5cbiAgICBhY2NlbGVyYXRlKHg6IG51bWJlciwgeTogbnVtYmVyLCBkZWx0YTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMueCArPSB4ICogZGVsdGFcbiAgICAgICAgdGhpcy55ICs9IHkgKiBkZWx0YVxuICAgIH1cblxuICAgIGFwcGx5KG9iajogQ29vcmRpbmF0ZXMsIGRlbHRhOiBudW1iZXIpIHtcbiAgICAgICAgb2JqLnggKz0gdGhpcy54ICogZGVsdGFcbiAgICAgICAgb2JqLnkgKz0gdGhpcy55ICogZGVsdGFcbiAgICB9XG59IiwiaW1wb3J0IENvb3JkaW5hdGVzIGZyb20gXCIuL1BoeXNpYy9Db29yZGluYXRlc1wiXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi9DYW52YXMvQ29udGV4dFwiXG5pbXBvcnQgRGlzYyBmcm9tIFwiLi9Nb2RlbC9EaXNjXCJcbmltcG9ydCBWZWxvY2l0eSBmcm9tIFwiLi9QaHlzaWMvVmVsb2NpdHlcIlxuaW1wb3J0IGFwcGx5R3Jhdml0eSBmcm9tIFwiLi9QaHlzaWMvR3Jhdml0eVwiXG5pbXBvcnQgTm9kZSBmcm9tIFwiLi9FbnRpdHkvTm9kZVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYW5ldCBleHRlbmRzIE5vZGUge1xuICAgIC8vIHB1YmxpYyBtb2RlbDogRGlzY1xuICAgIHB1YmxpYyBtb2RlbDogRGlzY1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBpZDogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgY29vcmRzOiBDb29yZGluYXRlcyxcbiAgICAgICAgcmVhZG9ubHkgcmFkaXVzOiBudW1iZXIsXG4gICAgICAgIHJlYWRvbmx5IG1hc3M6IG51bWJlcixcbiAgICAgICAgcmVhZG9ubHkgY29sb3I6IHN0cmluZyxcbiAgICAgICAgcHVibGljIHZlbG9jaXR5OiBWZWxvY2l0eSxcbiAgICAgICAgcmVhZG9ubHkgcGxhbmV0czogUGxhbmV0W11cbiAgICAgICAgKSB7XG4gICAgICAgICAgICBzdXBlcigpXG4gICAgICAgICAgICB0aGlzLm1vZGVsID0gbmV3IERpc2ModGhpcy5jb29yZHMsIHRoaXMucmFkaXVzLCB0aGlzLmNvbG9yKVxuICAgICAgICB9XG5cbiAgICB1cGRhdGUoZGVsdGE6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMucGxhbmV0cykge1xuICAgICAgICAgICAgY29uc3QgcCA9IHRoaXMucGxhbmV0c1tpXVxuXG4gICAgICAgICAgICBpZiAocC5pZCA9PSB0aGlzLmlkKSB7XG4gICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFwcGx5R3Jhdml0eSh0aGlzLnZlbG9jaXR5LCB0aGlzLCBwLCBkZWx0YSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZlbG9jaXR5LmFwcGx5KHRoaXMuY29vcmRzLCBkZWx0YSlcbiAgICAgICAgc3VwZXIudXBkYXRlKGRlbHRhKVxuICAgIH1cblxuICAgIGRyYXcoY29udGV4dDogQ29udGV4dCk6IHZvaWQge1xuICAgICAgICBjb250ZXh0LmRyYXcodGhpcy5tb2RlbClcbiAgICAgICAgc3VwZXIuZHJhdyhjb250ZXh0KVxuICAgIH1cblxuICAgIGdldENvb3JkaW5hdGVzKCk6IENvb3JkaW5hdGVzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29vcmRzXG4gICAgfVxuXG4gICAgc2V0Q29vcmRpbmF0ZXMoY29vcmRzOiBDb29yZGluYXRlcyk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvb3JkcyA9IGNvb3Jkc1xuICAgIH1cbn0iLCJpbXBvcnQgQ29udGV4dCBmcm9tIFwiLi9DYW52YXMvQ29udGV4dFwiXG5pbXBvcnQgRG90IGZyb20gXCIuL01vZGVsL0RvdFwiXG5pbXBvcnQgUGxhbmV0IGZyb20gXCIuL1BsYW5ldFwiXG5pbXBvcnQgTm9kZSBmcm9tIFwiLi9FbnRpdHkvTm9kZVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYW5ldFRyYWlsIGV4dGVuZHMgTm9kZSB7XG4gICAgcHJpdmF0ZSBkb3RzOiBEb3RbXVxuICAgIHByaXZhdGUgbWF4RG90cyA9IDk5OVxuIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGxhbmV0OiBQbGFuZXQpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmRvdHMgPSBbXVxuICAgIH1cblxuICAgIHVwZGF0ZShfOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuZG90cy5sZW5ndGggPT0gdGhpcy5tYXhEb3RzKSB7XG4gICAgICAgICAgICB0aGlzLmRvdHMuc2hpZnQoKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZG90cy5wdXNoKG5ldyBEb3QodGhpcy5wbGFuZXQuZ2V0Q29vcmRpbmF0ZXMoKS5jbG9uZSgpLCB0aGlzLnBsYW5ldC5jb2xvcikpXG4gICAgfVxuXG4gICAgZHJhdyhjYW52YXM6IENvbnRleHQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kb3RzLmZvckVhY2goZCA9PiBjYW52YXMuZHJhdyhkKSlcbiAgICB9XG59IiwiaW1wb3J0IEVudGl0eSBmcm9tIFwiLi4vRW50aXR5L0VudGl0eVwiXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi4vQ2FudmFzL0NvbnRleHRcIlxuaW1wb3J0IFNjZW5lIGZyb20gXCIuL1NjZW5lXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9DbGVhciBleHRlbmRzIFNjZW5lIGltcGxlbWVudHMgRW50aXR5IHtcbiAgICBwdWJsaWMgZW50aXRpZXM6IEVudGl0eVtdID0gW11cblxuICAgIGRyYXcoY29udGV4dDogQ29udGV4dCwgZGVsdGE/OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbnRpdGllcy5mb3JFYWNoKGUgPT4gZS5kcmF3KGNvbnRleHQsIGRlbHRhKSlcbiAgICB9XG59IiwiaW1wb3J0IEVudGl0eSBmcm9tIFwiLi4vRW50aXR5L0VudGl0eVwiXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi4vQ2FudmFzL0NvbnRleHRcIlxuaW1wb3J0IE5vZGUgZnJvbSBcIi4uL0VudGl0eS9Ob2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lIGV4dGVuZHMgTm9kZSB7XG4gICAgcHVibGljIGVudGl0aWVzOiBFbnRpdHlbXSA9IFtdXG5cbiAgICBjb25zdHJ1Y3RvciAocHVibGljIGlkOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgIH1cblxuICAgIGRyYXcoY29udGV4dDogQ29udGV4dCwgZGVsdGE/OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29udGV4dC5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjb250ZXh0LmNhbnZhcy5jYW52YXMud2lkdGgsIGNvbnRleHQuY2FudmFzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmVudGl0aWVzLmZvckVhY2goZSA9PiBlLmRyYXcoY29udGV4dCwgZGVsdGEpKVxuICAgICAgICBjb250ZXh0LmNvbnRleHQuc3Ryb2tlKCk7ICAgIFxuICAgIH1cbn0iLCJpbXBvcnQgU2NlbmUgZnJvbSBcIi4vU2NlbmVcIlxuaW1wb3J0IE5vQ2xlYXIgZnJvbSBcIi4vTm9DbGVhclwiXG5cbmV4cG9ydCB7XG4gICAgU2NlbmUsXG4gICAgTm9DbGVhclxufSJdLCJzb3VyY2VSb290IjoiIn0=