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
/* harmony import */ var _src_Physic_Distance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/Physic/Distance */ "./src/Physic/Distance.ts");


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
        x: sun.x - Object(_src_Physic_Distance__WEBPACK_IMPORTED_MODULE_1__["mToPx"])(149.96e9),
        y: sun.y,
        radius: 30,
        mass: 5.972e24,
        color: "skyblue",
        velocity: [Object(_src_Physic_Distance__WEBPACK_IMPORTED_MODULE_1__["mToPx"])(+_src_Config__WEBPACK_IMPORTED_MODULE_0__["default"].earthSpeed) * 1 / 3, Object(_src_Physic_Distance__WEBPACK_IMPORTED_MODULE_1__["mToPx"])(+_src_Config__WEBPACK_IMPORTED_MODULE_0__["default"].earthSpeed) * 2 / 3]
    };
    return {
        "sun41": sun,
        "earth alors": earth,
        "interloper": {
            x: sun.x + Object(_src_Physic_Distance__WEBPACK_IMPORTED_MODULE_1__["mToPx"])(100.96e9),
            y: sun.y + 20,
            radius: 24,
            mass: 3.972e24,
            color: "red",
            velocity: [Object(_src_Physic_Distance__WEBPACK_IMPORTED_MODULE_1__["mToPx"])(+_src_Config__WEBPACK_IMPORTED_MODULE_0__["default"].earthSpeed) * 1 / 3, Object(_src_Physic_Distance__WEBPACK_IMPORTED_MODULE_1__["mToPx"])(+_src_Config__WEBPACK_IMPORTED_MODULE_0__["default"].earthSpeed) * 2 / 3]
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
/* harmony import */ var _Physic_Speed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Physic/Speed */ "./src/Physic/Speed.ts");

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
const earthSpeed = new _Physic_Speed__WEBPACK_IMPORTED_MODULE_0__["MPSec"](29.78 * 1000); // m/s
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

/***/ "./src/Physic/Distance.ts":
/*!********************************!*\
  !*** ./src/Physic/Distance.ts ***!
  \********************************/
/*! exports provided: M, KM, mToPx, pxToM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KM", function() { return KM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mToPx", function() { return mToPx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pxToM", function() { return pxToM; });
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Config */ "./src/Config.ts");

class M {
    constructor(dist) {
        this.dist = dist;
    }
    toMeter() {
        return this.dist;
    }
}
class KM extends M {
    constructor(dist) {
        super(dist);
        this.dist = dist;
        this.dist = this.toMeter();
    }
    toMeter() {
        return this.dist * 1000;
    }
}

const mToPx = (m) => {
    return m / _Config__WEBPACK_IMPORTED_MODULE_0__["default"].mPerPx;
};
const pxToM = (px) => {
    return px * _Config__WEBPACK_IMPORTED_MODULE_0__["default"].mPerPx;
};



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

/***/ "./src/Physic/Speed.ts":
/*!*****************************!*\
  !*** ./src/Physic/Speed.ts ***!
  \*****************************/
/*! exports provided: KMPSec, MPSec */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KMPSec", function() { return KMPSec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MPSec", function() { return MPSec; });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vcGxhbmV0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2FtZXJhL0NhbWVyYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2FudmFzL0NhbnZhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2FudmFzL0NvbnRleHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29udHJvbHMvS2V5Ym9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VudGl0eS9Ob2RlLnRzIiwid2VicGFjazovLy8uL3NyYy9Nb2RlbC9EaXNjLnRzIiwid2VicGFjazovLy8uL3NyYy9Nb2RlbC9Eb3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BoeXNpYy9Db29yZGluYXRlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGh5c2ljL0Rpc3RhbmNlLnRzIiwid2VicGFjazovLy8uL3NyYy9QaHlzaWMvR2VvbWV0cnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BoeXNpYy9HcmF2aXR5LnRzIiwid2VicGFjazovLy8uL3NyYy9QaHlzaWMvU3BlZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BoeXNpYy9WZWxvY2l0eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGxhbmV0LnRzIiwid2VicGFjazovLy8uL3NyYy9QbGFuZXRUcmFpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2NlbmUvTm9DbGVhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2NlbmUvU2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NjZW5lL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVB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QyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2xELE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDN0IsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7O0FDaEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJCO0FBQ0k7QUFLOUIiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC50c1wiKTtcbiIsImltcG9ydCBDYW52YXMgZnJvbSBcIi4vc3JjL0NhbnZhcy9DYW52YXNcIlxuaW1wb3J0IFBsYW5ldCBmcm9tIFwiLi9zcmMvUGxhbmV0XCJcbmltcG9ydCB7U2NlbmV9IGZyb20gXCIuL3NyYy9TY2VuZS9pbmRleFwiXG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuL3NyYy9DYW1lcmEvQ2FtZXJhXCJcbmltcG9ydCBLZXlib2FyZCBmcm9tIFwiLi9zcmMvQ29udHJvbHMvS2V5Ym9hcmRcIlxuaW1wb3J0IENvbmZpZyBmcm9tIFwiLi9zcmMvQ29uZmlnXCJcbmltcG9ydCBWZWxvY2l0eSBmcm9tIFwiLi9zcmMvUGh5c2ljL1ZlbG9jaXR5XCJcbmltcG9ydCBDb29yZGluYXRlcyBmcm9tIFwiLi9zcmMvUGh5c2ljL0Nvb3JkaW5hdGVzXCJcbmltcG9ydCBQbGFuZXRUcmFpbCBmcm9tIFwiLi9zcmMvUGxhbmV0VHJhaWxcIlxuaW1wb3J0IGdldFBsYW5ldHMgZnJvbSBcIi4vcGxhbmV0c1wiXG5cbmNvbnN0IG1haW4gPSAoZGVsdGE6IG51bWJlciwgYm9hcmRzOiBDYW52YXNbXSkgPT4ge1xuICAgIC8vIGNUaW1lICs9IGRlbHRhXG4gICAgLy8gaWYgKGNUaW1lID4gQ29uZmlnLmRwZikge1xuICAgIGxldCBuQmVmb3JlID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpXG4gICAgYm9hcmRzLmZvckVhY2goYiA9PiB7XG4gICAgICAgIGIudXBkYXRlKGRlbHRhICogQ29uZmlnLmdhbWVTcGVlZClcbiAgICB9KVxuICAgIGxldCBuQWZ0ZXIgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KClcbiAgICAvLyBjVGltZSAtPSBDb25maWcuZHBmXG4gICAgLy8gfVxuICAgIHNldFRpbWVvdXQoKCkgPT4gbWFpbihDb25maWcubWlsbGlTZWNvbmRzUGVyRnJhbWUsIGJvYXJkcyksIChkZWx0YSAqIDEwMDApIC0gKG5BZnRlciAtIG5CZWZvcmUpKVxufVxuXG5kb2N1bWVudC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBjYW1lcmEgPSBuZXcgQ2FtZXJhKENvbmZpZy5zcGFjZVcgLyAyLCBDb25maWcuc3BhY2VIIC8gMiwgQ29uZmlnLnpvb21MZXZlbClcbiAgICBjb25zdCBiZ0JvYXJkID0gbmV3IENhbnZhcyhkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCwgY2FtZXJhLCBcImJhY2tncm91bmRcIilcbiAgICBjb25zdCBwbGFuZXRCb2FyZCA9IG5ldyBDYW52YXMoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQsIGNhbWVyYSwgXCJtYWluXCIpXG5cbiAgICBiZ0JvYXJkLmFwcGVuZFRvKGRvY3VtZW50LmJvZHkpXG4gICAgcGxhbmV0Qm9hcmQuYXBwZW5kVG8oZG9jdW1lbnQuYm9keSlcbiAgICBiZ0JvYXJkLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMwMDAwMDBcIlxuICAgIFxuICAgIGNvbnN0IHBsYW5ldFNjZW5lID0gbmV3IFNjZW5lKFwibWFpblwiKVxuXG4gICAgY29uc3Qga2V5Ym9hcmRDb250cm9scyA9IG5ldyBLZXlib2FyZChjYW1lcmEsIHBsYW5ldEJvYXJkKVxuICAgIGNvbnN0IHBsYW5ldHNDb25maWcgPSBnZXRQbGFuZXRzKHBsYW5ldEJvYXJkLCBjYW1lcmEpXG4gICAgbGV0IHBsYW5ldHM6IFBsYW5ldFtdID0gW11cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleWJvYXJkQ29udHJvbHMuaGFuZGxlS2V5Ym9hcmQuYmluZChrZXlib2FyZENvbnRyb2xzKSk7XG4gICAgXG4gICAgZm9yIChsZXQgaSBpbiBwbGFuZXRzQ29uZmlnKSB7XG4gICAgICAgIGNvbnN0IHAgPSBwbGFuZXRzQ29uZmlnW2ldXG4gICAgICAgIGNvbnN0IHBsYW5ldCA9IG5ldyBQbGFuZXQoaSxcbiAgICAgICAgICAgIG5ldyBDb29yZGluYXRlcyhwLngsIHAueSksXG4gICAgICAgICAgICBwLnJhZGl1cyxcbiAgICAgICAgICAgIHAubWFzcyxcbiAgICAgICAgICAgIHAuY29sb3IsXG4gICAgICAgICAgICBuZXcgVmVsb2NpdHkocC52ZWxvY2l0eVswXSwgcC52ZWxvY2l0eVsxXSksXG4gICAgICAgICAgICBwbGFuZXRzXG4gICAgICAgIClcbiAgICAgICAgcGxhbmV0U2NlbmUuYWRkRW50aXR5KHBsYW5ldClcbiAgICAgICAgcGxhbmV0U2NlbmUuYWRkRW50aXR5KG5ldyBQbGFuZXRUcmFpbChwbGFuZXQpKVxuICAgICAgICBwbGFuZXRzLnB1c2gocGxhbmV0KVxuICAgIH1cblxuICAgIHBsYW5ldEJvYXJkLmFkZEVudGl0eShwbGFuZXRTY2VuZSlcbiAgICBcbiAgICBtYWluKENvbmZpZy5taWxsaVNlY29uZHNQZXJGcmFtZSwgW2JnQm9hcmQsIHBsYW5ldEJvYXJkXSlcbiB9IiwiaW1wb3J0IENhbnZhcyBmcm9tIFwiLi9zcmMvQ2FudmFzL0NhbnZhc1wiXG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuL3NyYy9DYW1lcmEvQ2FtZXJhXCJcbmltcG9ydCBDb25maWcgZnJvbSBcIi4vc3JjL0NvbmZpZ1wiXG5pbXBvcnQge21Ub1B4fSBmcm9tIFwiLi9zcmMvUGh5c2ljL0Rpc3RhbmNlXCJcblxuZXhwb3J0IGRlZmF1bHQgKGNhbnZhczogQ2FudmFzLCBjYW1lcmE6IENhbWVyYSk6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0+IHtcbiAgICBjb25zdCBzdW4gPSB7XG4gICAgICAgIHg6IGNhbWVyYS5yZWxhdGl2ZVgoY2FtZXJhLnogKiAoY2FudmFzLmNhbnZhcy53aWR0aCAvIDIpKSxcbiAgICAgICAgeTogY2FtZXJhLnJlbGF0aXZlWShjYW1lcmEueiAqIChjYW52YXMuY2FudmFzLmhlaWdodCAvIDIpKSxcbiAgICAgICAgcmFkaXVzOiAxMjAsXG4gICAgICAgIG1hc3M6IDEuOTg5MWUzMCxcbiAgICAgICAgY29sb3I6IFwib3JhbmdlXCIsXG4gICAgICAgIHZlbG9jaXR5OiBbMCwgMF1cbiAgICB9XG4gICAgY29uc3QgZWFydGggPSB7XG4gICAgICAgIHg6IHN1bi54IC0gbVRvUHgoMTQ5Ljk2ZTkpLFxuICAgICAgICB5OiBzdW4ueSxcbiAgICAgICAgcmFkaXVzOiAzMCxcbiAgICAgICAgbWFzczogNS45NzJlMjQsXG4gICAgICAgIGNvbG9yOiBcInNreWJsdWVcIixcbiAgICAgICAgdmVsb2NpdHk6IFttVG9QeCgrQ29uZmlnLmVhcnRoU3BlZWQpICogMS8zLCBtVG9QeCgrQ29uZmlnLmVhcnRoU3BlZWQpICogMi8zXVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICAgICAgXCJzdW40MVwiOiBzdW4sXG4gICAgICAgICAgICBcImVhcnRoIGFsb3JzXCI6IGVhcnRoLFxuICAgICAgICAgICAgXCJpbnRlcmxvcGVyXCI6IHtcbiAgICAgICAgICAgICAgICB4OiBzdW4ueCArIG1Ub1B4KDEwMC45NmU5KSxcbiAgICAgICAgICAgICAgICB5OiBzdW4ueSArIDIwLFxuICAgICAgICAgICAgICAgIHJhZGl1czogMjQsXG4gICAgICAgICAgICAgICAgbWFzczogMy45NzJlMjQsXG4gICAgICAgICAgICAgICAgY29sb3I6IFwicmVkXCIsXG4gICAgICAgICAgICAgICAgdmVsb2NpdHk6IFttVG9QeCgrQ29uZmlnLmVhcnRoU3BlZWQpICogMS8zLCBtVG9QeCgrQ29uZmlnLmVhcnRoU3BlZWQpICogMi8zXVxuICAgICAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYW1lcmEge1xuICAgIHB1YmxpYyB4OiBudW1iZXIgPSAwXG4gICAgcHVibGljIHk6IG51bWJlciA9IDBcbiAgICBwdWJsaWMgejogbnVtYmVyID0gMVxuXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlcikge1xuICAgICAgICB0aGlzLnggPSB4XG4gICAgICAgIHRoaXMueSA9IHlcbiAgICAgICAgdGhpcy56ID0gelxuICAgIH1cblxuICAgIFgoeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuelRyYW5zZm9ybSh4IC0gdGhpcy54KVxuICAgIH1cblxuICAgIFkoeTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuelRyYW5zZm9ybSh5IC0gdGhpcy55KVxuICAgIH1cblxuICAgIHpUcmFuc2Zvcm0odjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHYgKiAoMSAvIHRoaXMueilcbiAgICB9XG5cbiAgICByZWxhdGl2ZVgoeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCArIHhcbiAgICB9XG5cbiAgICByZWxhdGl2ZVkoeTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueSArIHlcbiAgICB9XG59IiwiaW1wb3J0IEVudGl0eSBmcm9tIFwiLi4vRW50aXR5L0VudGl0eVwiXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi9Db250ZXh0XCJcbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4uL0NhbWVyYS9DYW1lcmFcIlxuaW1wb3J0IE5vZGUgZnJvbSBcIi4uL0VudGl0eS9Ob2RlXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIGV4dGVuZHMgTm9kZXtcbiAgICByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50XG4gICAgcmVhZG9ubHkgY29udGV4dDogQ29udGV4dFxuICAgIHB1YmxpYyBlbnRpdGllczogRW50aXR5W10gPSBbXVxuXG4gICAgY29uc3RydWN0b3Iod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGNhbWVyYTogQ2FtZXJhLCBwdWJsaWMgaWQ6IHN0cmluZykge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKVxuICAgICAgICB0aGlzLmNhbnZhcy5pZCA9IHRoaXMuaWRcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aFxuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHRcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gbmV3IENvbnRleHQodGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpLCBjYW1lcmEsIHRoaXMpXG4gICAgfVxuXG4gICAgYXBwZW5kVG8oZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcylcbiAgICB9XG5cbiAgICB1cGRhdGUoZGVsdGE6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmVudGl0aWVzLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICBlLnVwZGF0ZShkZWx0YSlcbiAgICAgICAgICAgIGUuZHJhdyh0aGlzLmNvbnRleHQsIGRlbHRhKVxuICAgICAgICB9KVxuICAgIH1cbn0iLCJpbXBvcnQgTW9kZWwgZnJvbSBcIi4uL01vZGVsL01vZGVsXCJcbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4uL0NhbWVyYS9DYW1lcmFcIlxuaW1wb3J0IENhbnZhcyBmcm9tIFwiLi9DYW52YXNcIlxuaW1wb3J0IFRleHQgZnJvbSBcIi4uL1RleHQvVGV4dFwiXG5pbXBvcnQgQ29uZmlnIGZyb20gXCIuLi9Db25maWdcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0IHtcbiAgICBjb25zdHJ1Y3RvciAoXG4gICAgICAgIHJlYWRvbmx5IGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgICAgICAgcmVhZG9ubHkgY2FtZXJhOiBDYW1lcmEsXG4gICAgICAgIHJlYWRvbmx5IGNhbnZhczogQ2FudmFzLFxuICAgICAgICApIHt9XG5cbiAgICBkcmF3KG1vZGVsOiBNb2RlbCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKClcbiAgICAgICAgbW9kZWwuZHJhdyh0aGlzKVxuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKClcbiAgICB9XG5cbiAgICBhcmMoeDogbnVtYmVyLCB5OiBudW1iZXIsIHI6IG51bWJlciwgYXM6IG51bWJlciwgYWU6IG51bWJlcik6IENvbnRleHQge1xuICAgICAgICB0aGlzLmNvbnRleHQuYXJjKHRoaXMuY2FtZXJhLlgoeCksIHRoaXMuY2FtZXJhLlkoeSksIHRoaXMuY2FtZXJhLnpUcmFuc2Zvcm0ociksIGFzLCBhZSlcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICB3cml0ZSh0ZXh0OiBUZXh0LCBsaW5lczogc3RyaW5nW10pIHtcbiAgICAgICAgY29uc3QgZnMgPSB0ZXh0LmdldEZvbnRTaXplKClcbiAgICAgICAgY29uc3QgZmYgPSB0ZXh0LmdldEZvbnRGYW1pbHkoKVxuICAgICAgICBjb25zdCBjID0gdGV4dC5nZXRDb29yZGluYXRlcygpXG5cbiAgICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpXG4gICAgICAgIHRoaXMuY29udGV4dC5mb250ID0gYCR7Q29uZmlnLmZvbnRTaXplfXB4ICR7ZmZ9YFxuXG4gICAgICAgIGxpbmVzLm1hcCgobGluZSwgaSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KGxpbmUsIGMueCwgYy55ICsgKGZzICogaSkpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZmlsbFJlY3QoeDogbnVtYmVyLCB5OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyLCBjb2xvcjogc3RyaW5nKTogQ29udGV4dCB7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBjb2xvclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QodGhpcy5jYW1lcmEuWCh4KSwgdGhpcy5jYW1lcmEuWSh5KSwgdywgaClcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBmaWxsKGNvbG9yOiBzdHJpbmcpOiBDb250ZXh0IHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsKClcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG59XG5cbnR5cGUgRHJhd0Z1bmN0aW9uID0gKGN0eDogQ29udGV4dCkgPT4gdm9pZFxuXG5leHBvcnQge1xuICAgIERyYXdGdW5jdGlvblxufSIsImltcG9ydCB7TVBTZWN9IGZyb20gXCIuL1BoeXNpYy9TcGVlZFwiXG5cbmNvbnN0IGNEdXJhdGlvbiA9IDBcbmNvbnN0IGZwcyA9IDYwXG5jb25zdCBtaWxsaVNlY29uZHNQZXJGcmFtZSA9IDEgLyBmcHNcbmxldCB6b29tTGV2ZWwgPSAyLjVcbmxldCB6b29tTWluID0gMC4xXG5jb25zdCB6b29tQWN0aW9uUG93ID0gMC4xMFxuY29uc3QgZGVjYWxCeU1vdmUgPSAyNVxuXG5sZXQgbWF4UGxhbmV0cyA9IDRcbmxldCBwbGFuZXRzUmFkaXVzRGVmID0ge21pbjogMywgbWF4OiA3MH1cbmNvbnN0IHBsYW5ldHNNaW5EaXN0ID0gMTBcbmNvbnN0IHBsYW5ldEJhc2VTcGVlZCA9IDQwXG5cbmNvbnN0IHNwYWNlVyA9IDEwMDAwXG5jb25zdCBzcGFjZUggPSAxMDAwMFxuY29uc3QgZGVjYWxYID0gc3BhY2VXIC8gMlxuY29uc3QgZGVjYWxZID0gc3BhY2VIIC8gMlxuXG5jb25zdCBncmF2aXR5UHVsbEJ5RGVsdGEgPSAxXG5jb25zdCBkaXN0UG93ID0gNVxuXG5jb25zdCBmb250U2l6ZSA9IDE0XG5sZXQgZGVidWcgPSBudWxsXG5jb25zdCBlYXJ0aFNwZWVkID0gbmV3IE1QU2VjKDI5Ljc4ICogMTAwMCkgLy8gbS9zXG5jb25zdCBHID0gTWF0aC5wb3coMTAsIC0xMSkgKiA2LjY3NFxuXG5lbnVtIFBsYXlNb2RlIHtcbiAgICBQTEFZLFxuICAgIFBBVVNFXG59XG5cbmNvbnN0IG1vZGUgPSBQbGF5TW9kZS5QTEFZXG4vLyBjb25zdCBrbVBlclB4ID0gMS4zZTVcbmNvbnN0IGttUGVyUHggPSAxLjhlNVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZ2FtZVNwZWVkOiAzNjUgKiAyNCAqIDYwICogMTUsXG4gICAgLy8gZ2FtZVNwZWVkOiAxMDAsXG4gICAga21QZXJQeCxcbiAgICBtUGVyUHg6IGttUGVyUHggKiAxMDAwLFxuICAgIGtnUGVyUHhEZW5zaXR5OiAxMjAwLFxuICAgIEcsXG4gICAgZ3Jhdml0eVB1bGxCeURlbHRhLFxuICAgIGNEdXJhdGlvbixcbiAgICBmcHMsXG4gICAgem9vbUxldmVsLFxuICAgIHpvb21BY3Rpb25Qb3csXG4gICAgZGVjYWxCeU1vdmUsXG4gICAgbWF4UGxhbmV0cyxcbiAgICBwbGFuZXRzUmFkaXVzRGVmLFxuICAgIHBsYW5ldHNNaW5EaXN0LFxuICAgIHBsYW5ldEJhc2VTcGVlZCxcbiAgICBzcGFjZVcsXG4gICAgc3BhY2VILFxuICAgIGRlY2FsWCxcbiAgICBkZWNhbFksXG4gICAgZGlzdFBvdyxcbiAgICBmb250U2l6ZSxcbiAgICBkZWJ1ZyxcbiAgICBQbGF5TW9kZSxcbiAgICBtb2RlLFxuICAgIHpvb21NaW4sXG4gICAgZWFydGhTcGVlZCxcbiAgICBtaWxsaVNlY29uZHNQZXJGcmFtZVxufSIsImltcG9ydCBDYW1lcmEgZnJvbSBcIi4uL0NhbWVyYS9DYW1lcmFcIlxuaW1wb3J0IENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnXCJcbmltcG9ydCBDYW52YXMgZnJvbSBcIi4uL0NhbnZhcy9DYW52YXNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlib2FyZCB7XG4gICAgcHVibGljIGFjdGlvbkJ5S2V5Y29kZToge1trZXk6IG51bWJlcl06IEZ1bmN0aW9ufVxuXG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgY2FtZXJhOiBDYW1lcmEsIHJlYWRvbmx5IGNhbnZhczogQ2FudmFzKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uQnlLZXljb2RlID0ge1xuICAgICAgICAgICAgLy8gNjg6ICgpID0+IHtkZWJ1Zy5Ub2dnbGUoKTt9LFxuICAgICAgICAgICAgLy8gODM6ICgpID0+IHttb2RlID0gbW9kZSA9PSBQQVVTRSA/IFBMQVkgOiBQQVVTRTt9LFxuICAgICAgICAgICAgODI6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS54ID0gMFxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnkgPSAwXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEueiA9IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA5MDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhbWVyYS56IDw9IENvbmZpZy56b29tTWluKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56IC09IENvbmZpZy56b29tQWN0aW9uUG93XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgODg6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56ICs9IENvbmZpZy56b29tQWN0aW9uUG93XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMzc6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYW1lcmEueCAtIENvbmZpZy5kZWNhbEJ5TW92ZSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEueCAtPSBDb25maWcuZGVjYWxCeU1vdmVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAzODogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhbWVyYS55IC0gQ29uZmlnLmRlY2FsQnlNb3ZlIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS55IC09IENvbmZpZy5kZWNhbEJ5TW92ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDM5OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FtZXJhLnggPj0gQ29uZmlnLnNwYWNlVykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnggKz0gQ29uZmlnLmRlY2FsQnlNb3ZlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNDA6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYW1lcmEueSA+PSBDb25maWcuc3BhY2VIKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEueSArPSBDb25maWcuZGVjYWxCeU1vdmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUtleWJvYXJkKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGlvbkJ5S2V5Y29kZSA9PSB1bmRlZmluZWQgfHwgXG4gICAgICAgICAgICAhdGhpcy5hY3Rpb25CeUtleWNvZGVbZXZlbnQua2V5Q29kZV0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFjdGlvbkJ5S2V5Y29kZVtldmVudC5rZXlDb2RlXSgpO1xuICAgIH1cbn0iLCJpbXBvcnQgRW50aXR5IGZyb20gXCIuL0VudGl0eVwiXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi4vQ2FudmFzL0NvbnRleHRcIlxuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBOb2RlIGltcGxlbWVudHMgRW50aXR5IHtcbiAgICBwdWJsaWMgZW50aXRpZXM6IEVudGl0eVtdID0gW11cblxuICAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZW50aXRpZXMuZm9yRWFjaChlID0+IGUudXBkYXRlKGRlbHRhKSlcbiAgICB9XG5cbiAgICBkcmF3KGNvbnRleHQ6IENvbnRleHQsIGRlbHRhPzogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZW50aXRpZXMuZm9yRWFjaChlID0+IGUuZHJhdyhjb250ZXh0LCBkZWx0YSkpXG4gICAgfVxuXG4gICAgZ2V0RW50aXRpZXMoKTogRW50aXR5W10ge1xuICAgICAgICByZXR1cm4gdGhpcy5lbnRpdGllc1xuICAgIH1cblxuICAgIGFkZEVudGl0eShlbnRpdHk6IEVudGl0eSk6IHRoaXMge1xuICAgICAgICB0aGlzLmVudGl0aWVzLnB1c2goZW50aXR5KVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbn0iLCJpbXBvcnQgQ29udGV4dCBmcm9tIFwiLi4vQ2FudmFzL0NvbnRleHRcIlxuaW1wb3J0IENvb3JkaW5hdGVzIGZyb20gXCIuLi9QaHlzaWMvQ29vcmRpbmF0ZXNcIlxuaW1wb3J0IE1vZGVsIGZyb20gXCIuL01vZGVsXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzYyBpbXBsZW1lbnRzIE1vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY29vcmRzOiBDb29yZGluYXRlcywgcHVibGljIHJhZGl1czogbnVtYmVyLCBwdWJsaWMgY29sb3I6IHN0cmluZykge31cblxuICAgIGRyYXcoY3R4OiBDb250ZXh0KSB7XG4gICAgICAgIGN0eC5hcmModGhpcy5jb29yZHMueCwgdGhpcy5jb29yZHMueSwgdGhpcy5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKVxuICAgICAgICBjdHguZmlsbCh0aGlzLmNvbG9yKVxuICAgIH1cblxuICAgIGdldENvb3JkaW5hdGVzKCk6IENvb3JkaW5hdGVzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29vcmRzXG4gICAgfVxuXG4gICAgc2V0Q29vcmRpbmF0ZXMoY29vcmRzOiBDb29yZGluYXRlcyk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvb3JkcyA9IGNvb3Jkc1xuICAgIH1cbn0iLCJpbXBvcnQgQ29udGV4dCBmcm9tIFwiLi4vQ2FudmFzL0NvbnRleHRcIlxuaW1wb3J0IENvb3JkaW5hdGVzIGZyb20gXCIuLi9QaHlzaWMvQ29vcmRpbmF0ZXNcIlxuaW1wb3J0IE5vZGUgZnJvbSBcIi4uL0VudGl0eS9Ob2RlXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG90IGV4dGVuZHMgTm9kZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIGNvb3JkczogQ29vcmRpbmF0ZXMsIHB1YmxpYyBjb2xvcjogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICB9XG5cbiAgICBkcmF3KGN0eDogQ29udGV4dCkge1xuICAgICAgICAvLyBjdHguY29udGV4dC5maWxsU3R5bGUgPSBcInB1cnBsZVwiXG4gICAgICAgIC8vIGN0eC5jb250ZXh0LmZpbGxSZWN0KHRoaXMuY29vcmRzLnggLSAxLCB0aGlzLmNvb3Jkcy55IC0gMSwgMiwgMilcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMuY29vcmRzLngsIHRoaXMuY29vcmRzLnksIDEsIDEsIHRoaXMuY29sb3IpXG4gICAgfVxuXG4gICAgZ2V0Q29vcmRpbmF0ZXMoKTogQ29vcmRpbmF0ZXMge1xuICAgICAgICByZXR1cm4gdGhpcy5jb29yZHNcbiAgICB9XG5cbiAgICBzZXRDb29yZGluYXRlcyhjb29yZHM6IENvb3JkaW5hdGVzKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29vcmRzID0gY29vcmRzXG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvb3JkaW5hdGVzIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgeDogbnVtYmVyLCBwdWJsaWMgeTogbnVtYmVyKSB7fVxuXG4gICAgc2V0Q29vcmRpbmF0ZXMoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy54ID0geFxuICAgICAgICB0aGlzLnkgPSB5XG4gICAgfVxuXG4gICAgY2xvbmUoKTogQ29vcmRpbmF0ZXMge1xuICAgICAgICByZXR1cm4gbmV3IENvb3JkaW5hdGVzKHRoaXMueCwgdGhpcy55KVxuICAgIH1cbn0iLCJpbXBvcnQgQ29uZmlnIGZyb20gXCIuLi9Db25maWdcIlxuXG50eXBlIE1ldGVyID0gbnVtYmVyXG50eXBlIFB4ID0gbnVtYmVyXG5cbmludGVyZmFjZSBEaXN0YW5jZSB7XG4gICAgdG9NZXRlcigpOiBNZXRlclxufVxuXG5jbGFzcyBNIGltcGxlbWVudHMgRGlzdGFuY2Uge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBkaXN0OiBNZXRlcikge31cblxuICAgIHRvTWV0ZXIoKTogTWV0ZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXN0XG4gICAgfVxufVxuXG5jbGFzcyBLTSBleHRlbmRzIE0ge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBkaXN0OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoZGlzdClcbiAgICAgICAgdGhpcy5kaXN0ID0gdGhpcy50b01ldGVyKClcbiAgICB9XG5cbiAgICB0b01ldGVyKCk6IE1ldGVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlzdCAqIDEwMDBcbiAgICB9XG59XG5cbmV4cG9ydCB7RGlzdGFuY2UsIE0sIEtNfVxuXG5jb25zdCBtVG9QeCA9IChtOiBNZXRlcik6IFB4ID0+IHtcbiAgICByZXR1cm4gbSAvIENvbmZpZy5tUGVyUHhcbn1cblxuY29uc3QgcHhUb00gPSAocHg6IG51bWJlcik6IE1ldGVyID0+IHtcbiAgICByZXR1cm4gcHggKiBDb25maWcubVBlclB4XG59XG5cbmV4cG9ydCB7bVRvUHgsIHB4VG9NfSIsImltcG9ydCBDb29yZGluYXRlcyBmcm9tIFwiLi9Db29yZGluYXRlc1wiXG5pbXBvcnQgQ29uZmlnIGZyb20gXCIuLi9Db25maWdcIlxuXG5jb25zdCBnZXREaXN0YW5jZUJldHdlZW5PYmplY3RzID0gKGE6IENvb3JkaW5hdGVzLCBiOiBDb29yZGluYXRlcyk6IG51bWJlciA9PiB7XG4gICAgcmV0dXJuIChNYXRoLmFicyhiLnggLSBhLngpICsgTWF0aC5hYnMoYi55IC0gYS55KSkgKiBDb25maWcubVBlclB4XG59XG5cbmZ1bmN0aW9uIGdldEFuZ3VsYXJEaXJlY3Rpb24ob2JqUmVmOiBhbnksIG9iakRpc3Q6IGFueSkge1xuICAgIGxldCBoeXAgPSBnZXREaXN0YW5jZUJldHdlZW5PYmplY3RzKG9ialJlZiwgb2JqRGlzdCk7XG4gICAgbGV0IG9wcCA9IE1hdGguYWJzKG9ialJlZi54IC0gb2JqRGlzdC54KVxuICAgIC8vIHNpbiA9IG9wcC9oeXBcbiAgICAvLyBjb3MgPSBhZGovaHlwXG4gICAgLy8gdGFuID0gb3BwL2FkalxuICAgIGlmIChvYmpEaXN0LnkgPT0gb2JqUmVmLnkpIHtcbiAgICAgICAgaWYgKG9iakRpc3QueCA8IG9ialJlZi54KSB7XG4gICAgICAgICAgICByZXR1cm4gMjcwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiA5MDtcbiAgICB9XG5cbiAgICBpZiAob2JqRGlzdC55IDwgb2JqUmVmLnkpIHtcbiAgICAgICAgaWYgKG9iakRpc3QueCA8IG9ialJlZi54KSB7XG4gICAgICAgICAgICByZXR1cm4gMzYwIC0gTWF0aC5hc2luKG9wcC9oeXApO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGh5cCwgb3BwLCBNYXRoLmFzaW4ob3BwL2h5cCkpO1xuICAgICAgICByZXR1cm4gTWF0aC5hc2luKG9wcC9oeXApO1xuICAgIH1cblxuICAgIGlmIChvYmpEaXN0LnggPCBvYmpSZWYueCkge1xuICAgICAgICByZXR1cm4gMTgwICsgTWF0aC5hc2luKG9wcC9oeXApO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhoeXAsIG9wcCwgMTgwIC0gTWF0aC5hc2luKG9wcC9oeXApKTtcbiAgICByZXR1cm4gMTgwIC0gTWF0aC5hc2luKG9wcC9oeXApO1xufVxuXG5mdW5jdGlvbiBnZXRSb3RhdGlvbkRpcmVjdGlvbihvYmpSZWY6IGFueSwgb2JqRGlzdDogYW55KSB7XG4gICAgcmV0dXJuIGdldEFuZ3VsYXJEaXJlY3Rpb24ob2JqUmVmLCBvYmpEaXN0KSAvIDM2MDtcbn1cblxuXG5leHBvcnQgeyBnZXREaXN0YW5jZUJldHdlZW5PYmplY3RzIH0iLCJpbXBvcnQgVmVsb2NpdHkgZnJvbSBcIi4vVmVsb2NpdHlcIjtcbmltcG9ydCBQbGFuZXQgZnJvbSBcIi4uL1BsYW5ldFwiXG5pbXBvcnQgQ29vcmRpbmF0ZXMgZnJvbSBcIi4vQ29vcmRpbmF0ZXNcIlxuaW1wb3J0ICogYXMgR2VvbWV0cnkgZnJvbSBcIi4vR2VvbWV0cnlcIlxuaW1wb3J0IENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnXCJcblxuY29uc3QgZ2V0Rm9yY2UgPSAoYTogUGxhbmV0LCBiOiBQbGFuZXQpOiBudW1iZXIgPT4ge1xuICAgIGNvbnN0IGRpc3QgPSBHZW9tZXRyeS5nZXREaXN0YW5jZUJldHdlZW5PYmplY3RzKGEuY29vcmRzLCBiLmNvb3JkcylcbiAgICBpZiAoZGlzdCA9PSAwIHx8IE51bWJlci5pc05hTihkaXN0KSkge1xuICAgICAgICByZXR1cm4gXG4gICAgfVxuICAgIGNvbnN0IEYgPSBDb25maWcuRyAqICgoYS5tYXNzKmIubWFzcykvKGRpc3QqZGlzdCkpXG5cbiAgICByZXR1cm4gRiAqIENvbmZpZy5ncmF2aXR5UHVsbEJ5RGVsdGFcbn1cblxuY29uc3QgZ2V0Rm9yY2VSYXRpbyA9IChkaXJBOiBudW1iZXIsIGRpckI6IG51bWJlciwgY29vcmRBOiBDb29yZGluYXRlcywgY29vcmRCOiBDb29yZGluYXRlcyk6IG51bWJlciA9PiB7XG4gICAgcmV0dXJuIC0oZGlyQSAtIGRpckIpIC8gKE1hdGguYWJzKGNvb3JkQS54IC0gY29vcmRCLngpICsgTWF0aC5hYnMoY29vcmRBLnkgLSBjb29yZEIueSkpXG59XG5cbmV4cG9ydCBkZWZhdWx0ICh2ZWxvY2l0eTogVmVsb2NpdHksIGE6IFBsYW5ldCwgYjogUGxhbmV0LCBkZWx0YTogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgYWNjID0gKGdldEZvcmNlKGEsIGIpIC8gYS5tYXNzKSAvIENvbmZpZy5tUGVyUHhcbiAgICB2ZWxvY2l0eS5hY2NlbGVyYXRlKFxuICAgICAgICBhY2MgKiBnZXRGb3JjZVJhdGlvKGEuY29vcmRzLngsIGIuY29vcmRzLngsIGEuY29vcmRzLCBiLmNvb3JkcyksXG4gICAgICAgIGFjYyAqIGdldEZvcmNlUmF0aW8oYS5jb29yZHMueSwgYi5jb29yZHMueSwgYS5jb29yZHMsIGIuY29vcmRzKSxcbiAgICAgICAgZGVsdGFcbiAgICApXG59IiwidHlwZSBNZXRlcnNQZXJTZWNvbmQgPSBudW1iZXJcblxuaW50ZXJmYWNlIFNwZWVkIHtcbiAgICB0b01QU2VjKCk6IE1ldGVyc1BlclNlY29uZFxuICAgIHZhbHVlT2YoKTogbnVtYmVyXG59XG5cbmNsYXNzIE1QU2VjIGltcGxlbWVudHMgU3BlZWQge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBzcGVlZDogTWV0ZXJzUGVyU2Vjb25kKSB7fVxuXG4gICAgdG9LTVBTZWMoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9NUFNlYygpIC8gMTAwMFxuICAgIH1cblxuICAgIHRvS01QSG91cigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy50b0tNUFNlYygpICogMzYwMFxuICAgIH1cblxuICAgIHRvTVBTZWMoKTogTWV0ZXJzUGVyU2Vjb25kIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BlZWRcbiAgICB9XG5cbiAgICB2YWx1ZU9mKCk6IG51bWJlcntcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BlZWRcbiAgICB9XG59XG5cbmNsYXNzIEtNUFNlYyBleHRlbmRzIE1QU2VjIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgc3BlZWQ6IG51bWJlcikge1xuICAgICAgICBzdXBlcihzcGVlZClcbiAgICAgICAgdGhpcy5zcGVlZCA9IHRoaXMudG9NUFNlYygpXG4gICAgfVxuXG4gICAgdG9NUFNlYygpOiBNZXRlcnNQZXJTZWNvbmQge1xuICAgICAgICByZXR1cm4gdGhpcy5zcGVlZCAqIDEwMDBcbiAgICB9XG59XG5cbmV4cG9ydCB7U3BlZWQsIEtNUFNlYywgTVBTZWN9IiwiaW1wb3J0IENvb3JkaW5hdGVzIGZyb20gXCIuL0Nvb3JkaW5hdGVzXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVsb2NpdHkge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB4OiBudW1iZXIsIHB1YmxpYyB5OiBudW1iZXIpIHt9XG5cbiAgICBhY2NlbGVyYXRlKHg6IG51bWJlciwgeTogbnVtYmVyLCBkZWx0YTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMueCArPSB4ICogZGVsdGFcbiAgICAgICAgdGhpcy55ICs9IHkgKiBkZWx0YVxuICAgIH1cblxuICAgIGFwcGx5KG9iajogQ29vcmRpbmF0ZXMsIGRlbHRhOiBudW1iZXIpIHtcbiAgICAgICAgb2JqLnggKz0gdGhpcy54ICogZGVsdGFcbiAgICAgICAgb2JqLnkgKz0gdGhpcy55ICogZGVsdGFcbiAgICB9XG59IiwiaW1wb3J0IENvb3JkaW5hdGVzIGZyb20gXCIuL1BoeXNpYy9Db29yZGluYXRlc1wiXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi9DYW52YXMvQ29udGV4dFwiXG5pbXBvcnQgRGlzYyBmcm9tIFwiLi9Nb2RlbC9EaXNjXCJcbmltcG9ydCBWZWxvY2l0eSBmcm9tIFwiLi9QaHlzaWMvVmVsb2NpdHlcIlxuaW1wb3J0IGFwcGx5R3Jhdml0eSBmcm9tIFwiLi9QaHlzaWMvR3Jhdml0eVwiXG5pbXBvcnQgTm9kZSBmcm9tIFwiLi9FbnRpdHkvTm9kZVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYW5ldCBleHRlbmRzIE5vZGUge1xuICAgIC8vIHB1YmxpYyBtb2RlbDogRGlzY1xuICAgIHB1YmxpYyBtb2RlbDogRGlzY1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBpZDogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgY29vcmRzOiBDb29yZGluYXRlcyxcbiAgICAgICAgcmVhZG9ubHkgcmFkaXVzOiBudW1iZXIsXG4gICAgICAgIHJlYWRvbmx5IG1hc3M6IG51bWJlcixcbiAgICAgICAgcmVhZG9ubHkgY29sb3I6IHN0cmluZyxcbiAgICAgICAgcHVibGljIHZlbG9jaXR5OiBWZWxvY2l0eSxcbiAgICAgICAgcmVhZG9ubHkgcGxhbmV0czogUGxhbmV0W11cbiAgICAgICAgKSB7XG4gICAgICAgICAgICBzdXBlcigpXG4gICAgICAgICAgICB0aGlzLm1vZGVsID0gbmV3IERpc2ModGhpcy5jb29yZHMsIHRoaXMucmFkaXVzLCB0aGlzLmNvbG9yKVxuICAgICAgICB9XG5cbiAgICB1cGRhdGUoZGVsdGE6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMucGxhbmV0cykge1xuICAgICAgICAgICAgY29uc3QgcCA9IHRoaXMucGxhbmV0c1tpXVxuXG4gICAgICAgICAgICBpZiAocC5pZCA9PSB0aGlzLmlkKSB7XG4gICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFwcGx5R3Jhdml0eSh0aGlzLnZlbG9jaXR5LCB0aGlzLCBwLCBkZWx0YSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZlbG9jaXR5LmFwcGx5KHRoaXMuY29vcmRzLCBkZWx0YSlcbiAgICAgICAgc3VwZXIudXBkYXRlKGRlbHRhKVxuICAgIH1cblxuICAgIGRyYXcoY29udGV4dDogQ29udGV4dCk6IHZvaWQge1xuICAgICAgICBjb250ZXh0LmRyYXcodGhpcy5tb2RlbClcbiAgICAgICAgc3VwZXIuZHJhdyhjb250ZXh0KVxuICAgIH1cblxuICAgIGdldENvb3JkaW5hdGVzKCk6IENvb3JkaW5hdGVzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29vcmRzXG4gICAgfVxuXG4gICAgc2V0Q29vcmRpbmF0ZXMoY29vcmRzOiBDb29yZGluYXRlcyk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvb3JkcyA9IGNvb3Jkc1xuICAgIH1cbn0iLCJpbXBvcnQgQ29udGV4dCBmcm9tIFwiLi9DYW52YXMvQ29udGV4dFwiXG5pbXBvcnQgRG90IGZyb20gXCIuL01vZGVsL0RvdFwiXG5pbXBvcnQgUGxhbmV0IGZyb20gXCIuL1BsYW5ldFwiXG5pbXBvcnQgTm9kZSBmcm9tIFwiLi9FbnRpdHkvTm9kZVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYW5ldFRyYWlsIGV4dGVuZHMgTm9kZSB7XG4gICAgcHJpdmF0ZSBkb3RzOiBEb3RbXVxuICAgIHByaXZhdGUgbWF4RG90cyA9IDk5OVxuIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGxhbmV0OiBQbGFuZXQpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmRvdHMgPSBbXVxuICAgIH1cblxuICAgIHVwZGF0ZShfOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuZG90cy5sZW5ndGggPT0gdGhpcy5tYXhEb3RzKSB7XG4gICAgICAgICAgICB0aGlzLmRvdHMuc2hpZnQoKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZG90cy5wdXNoKG5ldyBEb3QodGhpcy5wbGFuZXQuZ2V0Q29vcmRpbmF0ZXMoKS5jbG9uZSgpLCB0aGlzLnBsYW5ldC5jb2xvcikpXG4gICAgfVxuXG4gICAgZHJhdyhjYW52YXM6IENvbnRleHQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kb3RzLmZvckVhY2goZCA9PiBjYW52YXMuZHJhdyhkKSlcbiAgICB9XG59IiwiaW1wb3J0IEVudGl0eSBmcm9tIFwiLi4vRW50aXR5L0VudGl0eVwiXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi4vQ2FudmFzL0NvbnRleHRcIlxuaW1wb3J0IFNjZW5lIGZyb20gXCIuL1NjZW5lXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9DbGVhciBleHRlbmRzIFNjZW5lIGltcGxlbWVudHMgRW50aXR5IHtcbiAgICBwdWJsaWMgZW50aXRpZXM6IEVudGl0eVtdID0gW11cblxuICAgIGRyYXcoY29udGV4dDogQ29udGV4dCwgZGVsdGE/OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbnRpdGllcy5mb3JFYWNoKGUgPT4gZS5kcmF3KGNvbnRleHQsIGRlbHRhKSlcbiAgICB9XG59IiwiaW1wb3J0IEVudGl0eSBmcm9tIFwiLi4vRW50aXR5L0VudGl0eVwiXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi4vQ2FudmFzL0NvbnRleHRcIlxuaW1wb3J0IE5vZGUgZnJvbSBcIi4uL0VudGl0eS9Ob2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lIGV4dGVuZHMgTm9kZSB7XG4gICAgcHVibGljIGVudGl0aWVzOiBFbnRpdHlbXSA9IFtdXG5cbiAgICBjb25zdHJ1Y3RvciAocHVibGljIGlkOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgIH1cblxuICAgIGRyYXcoY29udGV4dDogQ29udGV4dCwgZGVsdGE/OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29udGV4dC5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjb250ZXh0LmNhbnZhcy5jYW52YXMud2lkdGgsIGNvbnRleHQuY2FudmFzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmVudGl0aWVzLmZvckVhY2goZSA9PiBlLmRyYXcoY29udGV4dCwgZGVsdGEpKVxuICAgICAgICBjb250ZXh0LmNvbnRleHQuc3Ryb2tlKCk7ICAgIFxuICAgIH1cbn0iLCJpbXBvcnQgU2NlbmUgZnJvbSBcIi4vU2NlbmVcIlxuaW1wb3J0IE5vQ2xlYXIgZnJvbSBcIi4vTm9DbGVhclwiXG5cbmV4cG9ydCB7XG4gICAgU2NlbmUsXG4gICAgTm9DbGVhclxufSJdLCJzb3VyY2VSb290IjoiIn0=