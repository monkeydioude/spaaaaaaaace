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










let cTime = 0;
const main = (t1, delta, boards) => {
    // cTime += delta
    // if (cTime > Config.dpf) {
    boards.forEach(b => {
        b.update((delta / 1000) * _src_Config__WEBPACK_IMPORTED_MODULE_5__["default"].gameSpeed);
    });
    // cTime -= Config.dpf
    // }
    window.requestAnimationFrame(t => main(t, t - t1, boards));
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
    const bgScene = new _src_Scene_index__WEBPACK_IMPORTED_MODULE_2__["NoClear"]("background");
    const planetScene = new _src_Scene_index__WEBPACK_IMPORTED_MODULE_2__["Scene"]("main");
    const keyboardControls = new _src_Controls_Keyboard__WEBPACK_IMPORTED_MODULE_4__["default"](camera, planetBoard);
    const planetsConfig = Object(_planets__WEBPACK_IMPORTED_MODULE_9__["default"])(planetBoard, camera);
    let planets = [];
    document.querySelector("body").addEventListener("keydown", keyboardControls.handleKeyboard.bind(keyboardControls));
    for (let i in planetsConfig) {
        const p = planetsConfig[i];
        planets.push(new _src_Planet__WEBPACK_IMPORTED_MODULE_1__["default"](i, new _src_Physic_Coordinates__WEBPACK_IMPORTED_MODULE_7__["default"](p.x, p.y), p.radius, p.mass, p.color, new _src_Physic_Velocity__WEBPACK_IMPORTED_MODULE_6__["default"](p.velocity[0], p.velocity[1]), planets));
    }
    bgScene.entities = [new _src_PlanetTrail__WEBPACK_IMPORTED_MODULE_8__["default"](planets)];
    bgBoard.entities.push(bgScene);
    planetScene.entities = planets;
    planetBoard.entities.push(planetScene);
    main(0, 0, [bgBoard, planetBoard]);
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

class Canvas {
    constructor(width, height, camera, id) {
        this.id = id;
        this.canvas = document.createElement("canvas");
        this.canvas.id = this.id;
        this.canvas.width = width;
        this.canvas.height = height;
        this.context = new _Context__WEBPACK_IMPORTED_MODULE_0__["default"](this.canvas.getContext("2d"), camera, this);
        this.entities = [];
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
        this.context.font = `${fontSize}px ${ff}`;
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
const fps = 20;
const dpf = 1 / fps * 1000;
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
    dpf,
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
    earthSpeed
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
    update(_) { }
    draw(_) { }
    getEntities() {
        return this.entities;
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


class Planet {
    constructor(id, coords, radius, mass, color, velocity, planets) {
        this.id = id;
        this.coords = coords;
        this.radius = radius;
        this.mass = mass;
        this.color = color;
        this.velocity = velocity;
        this.planets = planets;
        this.entities = [];
        // this.model = new Dot(this.coords, this.color)
        this.model = new _Model_Disc__WEBPACK_IMPORTED_MODULE_0__["default"](this.coords, this.radius, this.color);
    }
    getEntities() {
        return this.entities;
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
        this.entities.forEach(e => e.update(delta));
    }
    draw(context) {
        context.draw(this.model);
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

class PlanetTrail {
    constructor(planets) {
        this.planets = planets;
    }
    update(_) { }
    draw(canvas) {
        this.planets.forEach(p => {
            canvas.draw(new _Model_Dot__WEBPACK_IMPORTED_MODULE_0__["default"](p.coords, p.color));
        });
    }
    getEntities() {
        return this.entities;
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
class Scene {
    constructor(id) {
        this.id = id;
        this.entities = [];
    }
    update(delta) {
        this.entities.forEach(e => e.update(delta));
    }
    draw(context, delta) {
        context.context.clearRect(0, 0, context.canvas.canvas.width, context.canvas.canvas.height);
        this.entities.forEach(e => e.draw(context, delta));
        context.context.stroke();
    }
    getEntities() {
        return this.entities;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vcGxhbmV0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2FtZXJhL0NhbWVyYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2FudmFzL0NhbnZhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2FudmFzL0NvbnRleHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29udHJvbHMvS2V5Ym9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VudGl0eS9Ob2RlLnRzIiwid2VicGFjazovLy8uL3NyYy9Nb2RlbC9EaXNjLnRzIiwid2VicGFjazovLy8uL3NyYy9Nb2RlbC9Eb3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BoeXNpYy9Db29yZGluYXRlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGh5c2ljL0dlb21ldHJ5LnRzIiwid2VicGFjazovLy8uL3NyYy9QaHlzaWMvR3Jhdml0eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGh5c2ljL1ZlbG9jaXR5LnRzIiwid2VicGFjazovLy8uL3NyYy9QbGFuZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsYW5ldFRyYWlsLnRzIiwid2VicGFjazovLy8uL3NyYy9TY2VuZS9Ob0NsZWFyLnRzIiwid2VicGFjazovLy8uL3NyYy9TY2VuZS9TY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2NlbmUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMx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RixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2xELE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELFdBQVc7UUFDUCxPQUFPLElBQUksQ0FBQyxRQUFRO0lBQ3hCLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7OztBQ3JCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyQjtBQUNJO0FBSzlCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgQ2FudmFzIGZyb20gXCIuL3NyYy9DYW52YXMvQ2FudmFzXCJcbmltcG9ydCBQbGFuZXQgZnJvbSBcIi4vc3JjL1BsYW5ldFwiXG5pbXBvcnQge1NjZW5lLCBOb0NsZWFyfSBmcm9tIFwiLi9zcmMvU2NlbmUvaW5kZXhcIlxuaW1wb3J0IENhbWVyYSBmcm9tIFwiLi9zcmMvQ2FtZXJhL0NhbWVyYVwiXG5pbXBvcnQgS2V5Ym9hcmQgZnJvbSBcIi4vc3JjL0NvbnRyb2xzL0tleWJvYXJkXCJcbmltcG9ydCBDb25maWcgZnJvbSBcIi4vc3JjL0NvbmZpZ1wiXG5pbXBvcnQgVmVsb2NpdHkgZnJvbSBcIi4vc3JjL1BoeXNpYy9WZWxvY2l0eVwiXG5pbXBvcnQgQ29vcmRpbmF0ZXMgZnJvbSBcIi4vc3JjL1BoeXNpYy9Db29yZGluYXRlc1wiXG5pbXBvcnQgUGxhbmV0VHJhaWwgZnJvbSBcIi4vc3JjL1BsYW5ldFRyYWlsXCJcbmltcG9ydCBnZXRQbGFuZXRzIGZyb20gXCIuL3BsYW5ldHNcIlxuaW1wb3J0IERvdCBmcm9tIFwiLi9zcmMvTW9kZWwvRG90XCJcblxubGV0IGNUaW1lID0gMFxuXG5jb25zdCBtYWluID0gKHQxOiBudW1iZXIsIGRlbHRhOiBudW1iZXIsIGJvYXJkczogQ2FudmFzW10pID0+IHtcbiAgICAvLyBjVGltZSArPSBkZWx0YVxuICAgIC8vIGlmIChjVGltZSA+IENvbmZpZy5kcGYpIHtcbiAgICBib2FyZHMuZm9yRWFjaChiID0+IHtcbiAgICAgICAgYi51cGRhdGUoKGRlbHRhIC8gMTAwMCkgKiBDb25maWcuZ2FtZVNwZWVkKVxuICAgIH0pXG4gICAgLy8gY1RpbWUgLT0gQ29uZmlnLmRwZlxuICAgIC8vIH1cblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodCA9PiBtYWluKHQsIHQgLSB0MSwgYm9hcmRzKSlcbn1cblxuZG9jdW1lbnQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9IFwiY29tcGxldGVcIikge1xuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgY2FtZXJhID0gbmV3IENhbWVyYShDb25maWcuc3BhY2VXIC8gMiwgQ29uZmlnLnNwYWNlSCAvIDIsIENvbmZpZy56b29tTGV2ZWwpXG4gICAgY29uc3QgYmdCb2FyZCA9IG5ldyBDYW52YXMoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQsIGNhbWVyYSwgXCJiYWNrZ3JvdW5kXCIpXG4gICAgY29uc3QgcGxhbmV0Qm9hcmQgPSBuZXcgQ2FudmFzKGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0LCBjYW1lcmEsIFwibWFpblwiKVxuXG4gICAgYmdCb2FyZC5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KVxuICAgIHBsYW5ldEJvYXJkLmFwcGVuZFRvKGRvY3VtZW50LmJvZHkpXG4gICAgYmdCb2FyZC5jYW52YXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMDAwMDAwXCJcbiAgICBcbiAgICBjb25zdCBiZ1NjZW5lID0gbmV3IE5vQ2xlYXIoXCJiYWNrZ3JvdW5kXCIpXG4gICAgY29uc3QgcGxhbmV0U2NlbmUgPSBuZXcgU2NlbmUoXCJtYWluXCIpXG5cbiAgICBjb25zdCBrZXlib2FyZENvbnRyb2xzID0gbmV3IEtleWJvYXJkKGNhbWVyYSwgcGxhbmV0Qm9hcmQpXG4gICAgY29uc3QgcGxhbmV0c0NvbmZpZyA9IGdldFBsYW5ldHMocGxhbmV0Qm9hcmQsIGNhbWVyYSlcbiAgICBsZXQgcGxhbmV0czogUGxhbmV0W10gPSBbXVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5Ym9hcmRDb250cm9scy5oYW5kbGVLZXlib2FyZC5iaW5kKGtleWJvYXJkQ29udHJvbHMpKTtcbiAgICBcbiAgICBmb3IgKGxldCBpIGluIHBsYW5ldHNDb25maWcpIHtcbiAgICAgICAgY29uc3QgcCA9IHBsYW5ldHNDb25maWdbaV1cbiAgICAgICAgcGxhbmV0cy5wdXNoKG5ldyBQbGFuZXQoaSxcbiAgICAgICAgICAgIG5ldyBDb29yZGluYXRlcyhwLngsIHAueSksXG4gICAgICAgICAgICBwLnJhZGl1cyxcbiAgICAgICAgICAgIHAubWFzcyxcbiAgICAgICAgICAgIHAuY29sb3IsXG4gICAgICAgICAgICBuZXcgVmVsb2NpdHkocC52ZWxvY2l0eVswXSwgcC52ZWxvY2l0eVsxXSksXG4gICAgICAgICAgICBwbGFuZXRzXG4gICAgICAgICAgICApKVxuICAgIH1cblxuICAgIGJnU2NlbmUuZW50aXRpZXMgPSBbbmV3IFBsYW5ldFRyYWlsKHBsYW5ldHMpXVxuICAgIGJnQm9hcmQuZW50aXRpZXMucHVzaChiZ1NjZW5lKVxuXG4gICAgcGxhbmV0U2NlbmUuZW50aXRpZXMgPSBwbGFuZXRzXG4gICAgcGxhbmV0Qm9hcmQuZW50aXRpZXMucHVzaChwbGFuZXRTY2VuZSlcbiAgICBcbiAgICBtYWluKDAsIDAsIFtiZ0JvYXJkLCBwbGFuZXRCb2FyZF0pXG4gfSIsImltcG9ydCBDYW52YXMgZnJvbSBcIi4vc3JjL0NhbnZhcy9DYW52YXNcIlxuaW1wb3J0IENhbWVyYSBmcm9tIFwiLi9zcmMvQ2FtZXJhL0NhbWVyYVwiXG5pbXBvcnQgQ29uZmlnIGZyb20gXCIuL3NyYy9Db25maWdcIlxuXG5leHBvcnQgZGVmYXVsdCAoY2FudmFzOiBDYW52YXMsIGNhbWVyYTogQ2FtZXJhKToge1trZXk6IHN0cmluZ106IGFueX0gPT4ge1xuICAgIGNvbnN0IHN1biA9IHtcbiAgICAgICAgeDogY2FtZXJhLnJlbGF0aXZlWChjYW1lcmEueiAqIChjYW52YXMuY2FudmFzLndpZHRoIC8gMikpLFxuICAgICAgICB5OiBjYW1lcmEucmVsYXRpdmVZKGNhbWVyYS56ICogKGNhbnZhcy5jYW52YXMuaGVpZ2h0IC8gMikpLFxuICAgICAgICByYWRpdXM6IDEyMCxcbiAgICAgICAgbWFzczogMS45ODkxZTMwLFxuICAgICAgICBjb2xvcjogXCJvcmFuZ2VcIixcbiAgICAgICAgdmVsb2NpdHk6IFswLCAwXVxuICAgIH1cbiAgICBjb25zdCBlYXJ0aCA9IHtcbiAgICAgICAgeDogc3VuLnggLSAoMTQ5Ljk2ZTkgLyBDb25maWcubVBlclB4KSxcbiAgICAgICAgeTogc3VuLnksXG4gICAgICAgIHJhZGl1czogMzAsXG4gICAgICAgIG1hc3M6IDUuOTcyZTI0LFxuICAgICAgICBjb2xvcjogXCJza3libHVlXCIsXG4gICAgICAgIHZlbG9jaXR5OiBbKENvbmZpZy5lYXJ0aFNwZWVkIC8gQ29uZmlnLm1QZXJQeCkgKiAxLzMsIChDb25maWcuZWFydGhTcGVlZCAvIENvbmZpZy5tUGVyUHgpICogMi8zXVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICAgICAgXCJzdW40MVwiOiBzdW4sXG4gICAgICAgICAgICBcImVhcnRoIGFsb3JzXCI6IGVhcnRoLFxuICAgICAgICAgICAgXCJpbnRlcmxvcGVyXCI6IHtcbiAgICAgICAgICAgICAgICB4OiBzdW4ueCArICgxMDAuOTZlOSAvIENvbmZpZy5tUGVyUHgpLFxuICAgICAgICAgICAgICAgIHk6IHN1bi55ICsgMjAsXG4gICAgICAgICAgICAgICAgcmFkaXVzOiAyNCxcbiAgICAgICAgICAgICAgICBtYXNzOiAzLjk3MmUyNCxcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJyZWRcIixcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eTogWyhDb25maWcuZWFydGhTcGVlZCAvIENvbmZpZy5tUGVyUHgpICogMS8zLCAoQ29uZmlnLmVhcnRoU3BlZWQgLyBDb25maWcubVBlclB4KSAqIDIvM11cbiAgICAgICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtZXJhIHtcbiAgICBwdWJsaWMgeDogbnVtYmVyID0gMFxuICAgIHB1YmxpYyB5OiBudW1iZXIgPSAwXG4gICAgcHVibGljIHo6IG51bWJlciA9IDFcblxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy54ID0geFxuICAgICAgICB0aGlzLnkgPSB5XG4gICAgICAgIHRoaXMueiA9IHpcbiAgICB9XG5cbiAgICBYKHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnpUcmFuc2Zvcm0oeCAtIHRoaXMueClcbiAgICB9XG5cbiAgICBZKHk6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnpUcmFuc2Zvcm0oeSAtIHRoaXMueSlcbiAgICB9XG5cbiAgICB6VHJhbnNmb3JtKHY6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB2ICogKDEgLyB0aGlzLnopXG4gICAgfVxuXG4gICAgcmVsYXRpdmVYKHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnggKyB4XG4gICAgfVxuXG4gICAgcmVsYXRpdmVZKHk6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnkgKyB5XG4gICAgfVxufSIsImltcG9ydCBFbnRpdHkgZnJvbSBcIi4uL0VudGl0eS9FbnRpdHlcIlxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4vQ29udGV4dFwiXG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9DYW1lcmEvQ2FtZXJhXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcbiAgICByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50XG4gICAgcmVhZG9ubHkgY29udGV4dDogQ29udGV4dFxuICAgIHB1YmxpYyBlbnRpdGllczogRW50aXR5W11cblxuICAgIGNvbnN0cnVjdG9yKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBjYW1lcmE6IENhbWVyYSwgcHVibGljIGlkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpXG4gICAgICAgIHRoaXMuY2FudmFzLmlkID0gdGhpcy5pZFxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoXG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodFxuICAgICAgICB0aGlzLmNvbnRleHQgPSBuZXcgQ29udGV4dCh0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIiksIGNhbWVyYSwgdGhpcylcbiAgICAgICAgdGhpcy5lbnRpdGllcyA9IFtdXG4gICAgfVxuXG4gICAgYXBwZW5kVG8oZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcylcbiAgICB9XG5cbiAgICB1cGRhdGUoZGVsdGE6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmVudGl0aWVzLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICBlLnVwZGF0ZShkZWx0YSlcbiAgICAgICAgICAgIGUuZHJhdyh0aGlzLmNvbnRleHQsIGRlbHRhKVxuICAgICAgICB9KVxuICAgIH1cbn0iLCJpbXBvcnQgTW9kZWwgZnJvbSBcIi4uL01vZGVsL01vZGVsXCJcbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4uL0NhbWVyYS9DYW1lcmFcIlxuaW1wb3J0IENhbnZhcyBmcm9tIFwiLi9DYW52YXNcIlxuaW1wb3J0IFRleHQgZnJvbSBcIi4uL1RleHQvVGV4dFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRleHQge1xuICAgIGNvbnN0cnVjdG9yIChcbiAgICAgICAgcmVhZG9ubHkgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICAgICAgICByZWFkb25seSBjYW1lcmE6IENhbWVyYSxcbiAgICAgICAgcmVhZG9ubHkgY2FudmFzOiBDYW52YXMsXG4gICAgICAgICkge31cblxuICAgIGRyYXcobW9kZWw6IE1vZGVsKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKVxuICAgICAgICBtb2RlbC5kcmF3KHRoaXMpXG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2UoKVxuICAgIH1cblxuICAgIGFyYyh4OiBudW1iZXIsIHk6IG51bWJlciwgcjogbnVtYmVyLCBhczogbnVtYmVyLCBhZTogbnVtYmVyKTogQ29udGV4dCB7XG4gICAgICAgIHRoaXMuY29udGV4dC5hcmModGhpcy5jYW1lcmEuWCh4KSwgdGhpcy5jYW1lcmEuWSh5KSwgdGhpcy5jYW1lcmEuelRyYW5zZm9ybShyKSwgYXMsIGFlKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIHdyaXRlKHRleHQ6IFRleHQsIGxpbmVzOiBzdHJpbmdbXSkge1xuICAgICAgICBjb25zdCBmcyA9IHRleHQuZ2V0Rm9udFNpemUoKVxuICAgICAgICBjb25zdCBmZiA9IHRleHQuZ2V0Rm9udEZhbWlseSgpXG4gICAgICAgIGNvbnN0IGMgPSB0ZXh0LmdldENvb3JkaW5hdGVzKClcblxuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKClcbiAgICAgICAgdGhpcy5jb250ZXh0LmZvbnQgPSBgJHtmb250U2l6ZX1weCAke2ZmfWBcblxuICAgICAgICBsaW5lcy5tYXAoKGxpbmUsIGkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChsaW5lLCBjLngsIGMueSArIChmcyAqIGkpKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZpbGxSZWN0KHg6IG51bWJlciwgeTogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlciwgY29sb3I6IHN0cmluZyk6IENvbnRleHQge1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3JcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KHRoaXMuY2FtZXJhLlgoeCksIHRoaXMuY2FtZXJhLlkoeSksIHcsIGgpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgZmlsbChjb2xvcjogc3RyaW5nKTogQ29udGV4dCB7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBjb2xvclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbCgpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxufVxuXG50eXBlIERyYXdGdW5jdGlvbiA9IChjdHg6IENvbnRleHQpID0+IHZvaWRcblxuZXhwb3J0IHtcbiAgICBEcmF3RnVuY3Rpb25cbn0iLCJjb25zdCBjRHVyYXRpb24gPSAwXG5jb25zdCBmcHMgPSAyMFxuY29uc3QgZHBmID0gMSAvIGZwcyAqIDEwMDBcbmxldCB6b29tTGV2ZWwgPSAyLjVcbmxldCB6b29tTWluID0gMC4xXG5jb25zdCB6b29tQWN0aW9uUG93ID0gMC4xMFxuY29uc3QgZGVjYWxCeU1vdmUgPSAyNVxuXG5sZXQgbWF4UGxhbmV0cyA9IDRcbmxldCBwbGFuZXRzUmFkaXVzRGVmID0ge21pbjogMywgbWF4OiA3MH1cbmNvbnN0IHBsYW5ldHNNaW5EaXN0ID0gMTBcbmNvbnN0IHBsYW5ldEJhc2VTcGVlZCA9IDQwXG5cbmNvbnN0IHNwYWNlVyA9IDEwMDAwXG5jb25zdCBzcGFjZUggPSAxMDAwMFxuY29uc3QgZGVjYWxYID0gc3BhY2VXIC8gMlxuY29uc3QgZGVjYWxZID0gc3BhY2VIIC8gMlxuXG5jb25zdCBncmF2aXR5UHVsbEJ5RGVsdGEgPSAxXG5jb25zdCBkaXN0UG93ID0gNVxuXG5jb25zdCBmb250U2l6ZSA9IDE0XG5sZXQgZGVidWcgPSBudWxsXG5jb25zdCBlYXJ0aFNwZWVkID0gMjkuNzggKiAxMDAwXG5jb25zdCBHID0gTWF0aC5wb3coMTAsIC0xMSkgKiA2LjY3NFxuXG5lbnVtIFBsYXlNb2RlIHtcbiAgICBQTEFZLFxuICAgIFBBVVNFXG59XG5cbmNvbnN0IG1vZGUgPSBQbGF5TW9kZS5QTEFZXG4vLyBjb25zdCBrbVBlclB4ID0gMS4zZTVcbmNvbnN0IGttUGVyUHggPSAxLjhlNVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZ2FtZVNwZWVkOiAzNjUgKiAyNCAqIDYwICogMTUsXG4gICAgLy8gZ2FtZVNwZWVkOiAxMDAsXG4gICAga21QZXJQeCxcbiAgICBtUGVyUHg6IGttUGVyUHggKiAxMDAwLFxuICAgIGtnUGVyUHhEZW5zaXR5OiAxMjAwLFxuICAgIEcsXG4gICAgZ3Jhdml0eVB1bGxCeURlbHRhLFxuICAgIGNEdXJhdGlvbixcbiAgICBmcHMsXG4gICAgZHBmLFxuICAgIHpvb21MZXZlbCxcbiAgICB6b29tQWN0aW9uUG93LFxuICAgIGRlY2FsQnlNb3ZlLFxuICAgIG1heFBsYW5ldHMsXG4gICAgcGxhbmV0c1JhZGl1c0RlZixcbiAgICBwbGFuZXRzTWluRGlzdCxcbiAgICBwbGFuZXRCYXNlU3BlZWQsXG4gICAgc3BhY2VXLFxuICAgIHNwYWNlSCxcbiAgICBkZWNhbFgsXG4gICAgZGVjYWxZLFxuICAgIGRpc3RQb3csXG4gICAgZm9udFNpemUsXG4gICAgZGVidWcsXG4gICAgUGxheU1vZGUsXG4gICAgbW9kZSxcbiAgICB6b29tTWluLFxuICAgIGVhcnRoU3BlZWRcbn0iLCJpbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9DYW1lcmEvQ2FtZXJhXCJcbmltcG9ydCBDb25maWcgZnJvbSBcIi4uL0NvbmZpZ1wiXG5pbXBvcnQgQ2FudmFzIGZyb20gXCIuLi9DYW52YXMvQ2FudmFzXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5Ym9hcmQge1xuICAgIHB1YmxpYyBhY3Rpb25CeUtleWNvZGU6IHtba2V5OiBudW1iZXJdOiBGdW5jdGlvbn1cblxuICAgIGNvbnN0cnVjdG9yKHJlYWRvbmx5IGNhbWVyYTogQ2FtZXJhLCByZWFkb25seSBjYW52YXM6IENhbnZhcykge1xuICAgICAgICB0aGlzLmFjdGlvbkJ5S2V5Y29kZSA9IHtcbiAgICAgICAgICAgIC8vIDY4OiAoKSA9PiB7ZGVidWcuVG9nZ2xlKCk7fSxcbiAgICAgICAgICAgIC8vIDgzOiAoKSA9PiB7bW9kZSA9IG1vZGUgPT0gUEFVU0UgPyBQTEFZIDogUEFVU0U7fSxcbiAgICAgICAgICAgIDgyOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEueCA9IDBcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS55ID0gMFxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnogPSAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgOTA6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYW1lcmEueiA8PSBDb25maWcuem9vbU1pbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEueiAtPSBDb25maWcuem9vbUFjdGlvblBvd1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDg4OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEueiArPSBDb25maWcuem9vbUFjdGlvblBvd1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDM3OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FtZXJhLnggLSBDb25maWcuZGVjYWxCeU1vdmUgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnggLT0gQ29uZmlnLmRlY2FsQnlNb3ZlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMzg6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYW1lcmEueSAtIENvbmZpZy5kZWNhbEJ5TW92ZSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEueSAtPSBDb25maWcuZGVjYWxCeU1vdmVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAzOTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhbWVyYS54ID49IENvbmZpZy5zcGFjZVcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS54ICs9IENvbmZpZy5kZWNhbEJ5TW92ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDQwOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FtZXJhLnkgPj0gQ29uZmlnLnNwYWNlSCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnkgKz0gQ29uZmlnLmRlY2FsQnlNb3ZlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVLZXlib2FyZChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5hY3Rpb25CeUtleWNvZGUgPT0gdW5kZWZpbmVkIHx8IFxuICAgICAgICAgICAgIXRoaXMuYWN0aW9uQnlLZXljb2RlW2V2ZW50LmtleUNvZGVdKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hY3Rpb25CeUtleWNvZGVbZXZlbnQua2V5Q29kZV0oKTtcbiAgICB9XG59IiwiaW1wb3J0IEVudGl0eSBmcm9tIFwiLi9FbnRpdHlcIlxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL0NhbnZhcy9Db250ZXh0XCJcblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgTm9kZSBpbXBsZW1lbnRzIEVudGl0eSB7XG4gICAgcHVibGljIGVudGl0aWVzOiBFbnRpdHlbXVxuXG4gICAgdXBkYXRlKF86IG51bWJlcik6IHZvaWQge31cblxuICAgIGRyYXcoXzogQ29udGV4dCk6IHZvaWQge31cblxuICAgIGdldEVudGl0aWVzKCk6IEVudGl0eVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50aXRpZXNcbiAgICB9XG59IiwiaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL0NhbnZhcy9Db250ZXh0XCJcbmltcG9ydCBDb29yZGluYXRlcyBmcm9tIFwiLi4vUGh5c2ljL0Nvb3JkaW5hdGVzXCJcbmltcG9ydCBNb2RlbCBmcm9tIFwiLi9Nb2RlbFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc2MgaW1wbGVtZW50cyBNb2RlbCB7XG4gICAgY29uc3RydWN0b3IocHVibGljIGNvb3JkczogQ29vcmRpbmF0ZXMsIHB1YmxpYyByYWRpdXM6IG51bWJlciwgcHVibGljIGNvbG9yOiBzdHJpbmcpIHt9XG5cbiAgICBkcmF3KGN0eDogQ29udGV4dCkge1xuICAgICAgICBjdHguYXJjKHRoaXMuY29vcmRzLngsIHRoaXMuY29vcmRzLnksIHRoaXMucmFkaXVzLCAwLCAyICogTWF0aC5QSSlcbiAgICAgICAgY3R4LmZpbGwodGhpcy5jb2xvcilcbiAgICB9XG5cbiAgICBnZXRDb29yZGluYXRlcygpOiBDb29yZGluYXRlcyB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvb3Jkc1xuICAgIH1cblxuICAgIHNldENvb3JkaW5hdGVzKGNvb3JkczogQ29vcmRpbmF0ZXMpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb29yZHMgPSBjb29yZHNcbiAgICB9XG59IiwiaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL0NhbnZhcy9Db250ZXh0XCJcbmltcG9ydCBDb29yZGluYXRlcyBmcm9tIFwiLi4vUGh5c2ljL0Nvb3JkaW5hdGVzXCJcbmltcG9ydCBOb2RlIGZyb20gXCIuLi9FbnRpdHkvTm9kZVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvdCBleHRlbmRzIE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjb29yZHM6IENvb3JkaW5hdGVzLCBwdWJsaWMgY29sb3I6IHN0cmluZykge1xuICAgICAgICBzdXBlcigpXG4gICAgfVxuXG4gICAgZHJhdyhjdHg6IENvbnRleHQpIHtcbiAgICAgICAgLy8gY3R4LmNvbnRleHQuZmlsbFN0eWxlID0gXCJwdXJwbGVcIlxuICAgICAgICAvLyBjdHguY29udGV4dC5maWxsUmVjdCh0aGlzLmNvb3Jkcy54IC0gMSwgdGhpcy5jb29yZHMueSAtIDEsIDIsIDIpXG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLmNvb3Jkcy54LCB0aGlzLmNvb3Jkcy55LCAxLCAxLCB0aGlzLmNvbG9yKVxuICAgIH1cblxuICAgIGdldENvb3JkaW5hdGVzKCk6IENvb3JkaW5hdGVzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29vcmRzXG4gICAgfVxuXG4gICAgc2V0Q29vcmRpbmF0ZXMoY29vcmRzOiBDb29yZGluYXRlcyk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvb3JkcyA9IGNvb3Jkc1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb29yZGluYXRlcyB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHg6IG51bWJlciwgcHVibGljIHk6IG51bWJlcikge31cblxuICAgIHNldENvb3JkaW5hdGVzKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMueCA9IHhcbiAgICAgICAgdGhpcy55ID0geVxuICAgIH1cbn0iLCJpbXBvcnQgQ29vcmRpbmF0ZXMgZnJvbSBcIi4vQ29vcmRpbmF0ZXNcIlxuaW1wb3J0IENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnXCJcblxuY29uc3QgZ2V0RGlzdGFuY2VCZXR3ZWVuT2JqZWN0cyA9IChhOiBDb29yZGluYXRlcywgYjogQ29vcmRpbmF0ZXMpOiBudW1iZXIgPT4ge1xuICAgIHJldHVybiAoTWF0aC5hYnMoYi54IC0gYS54KSArIE1hdGguYWJzKGIueSAtIGEueSkpICogQ29uZmlnLm1QZXJQeFxufVxuXG5leHBvcnQge1xuICAgIGdldERpc3RhbmNlQmV0d2Vlbk9iamVjdHNcbn0iLCJpbXBvcnQgVmVsb2NpdHkgZnJvbSBcIi4vVmVsb2NpdHlcIjtcbmltcG9ydCBQbGFuZXQgZnJvbSBcIi4uL1BsYW5ldFwiXG5pbXBvcnQgQ29vcmRpbmF0ZXMgZnJvbSBcIi4vQ29vcmRpbmF0ZXNcIlxuaW1wb3J0ICogYXMgR2VvbWV0cnkgZnJvbSBcIi4vR2VvbWV0cnlcIlxuaW1wb3J0IENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnXCJcblxuY29uc3QgZ2V0Rm9yY2UgPSAoYTogUGxhbmV0LCBiOiBQbGFuZXQpOiBudW1iZXIgPT4ge1xuICAgIGNvbnN0IGRpc3QgPSBHZW9tZXRyeS5nZXREaXN0YW5jZUJldHdlZW5PYmplY3RzKGEuY29vcmRzLCBiLmNvb3JkcylcbiAgICBpZiAoZGlzdCA9PSAwIHx8IE51bWJlci5pc05hTihkaXN0KSkge1xuICAgICAgICByZXR1cm4gXG4gICAgfVxuICAgIGNvbnN0IEYgPSBDb25maWcuRyAqICgoYS5tYXNzKmIubWFzcykvKGRpc3QqZGlzdCkpXG5cbiAgICByZXR1cm4gRiAqIENvbmZpZy5ncmF2aXR5UHVsbEJ5RGVsdGFcbn1cblxuY29uc3QgZ2V0Rm9yY2VSYXRpbyA9IChkaXJBOiBudW1iZXIsIGRpckI6IG51bWJlciwgY29vcmRBOiBDb29yZGluYXRlcywgY29vcmRCOiBDb29yZGluYXRlcyk6IG51bWJlciA9PiB7XG4gICAgcmV0dXJuIC0oZGlyQSAtIGRpckIpIC8gKE1hdGguYWJzKGNvb3JkQS54IC0gY29vcmRCLngpICsgTWF0aC5hYnMoY29vcmRBLnkgLSBjb29yZEIueSkpXG59XG5cbmV4cG9ydCBkZWZhdWx0ICh2ZWxvY2l0eTogVmVsb2NpdHksIGE6IFBsYW5ldCwgYjogUGxhbmV0LCBkZWx0YTogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgYWNjID0gKGdldEZvcmNlKGEsIGIpIC8gYS5tYXNzKSAvIENvbmZpZy5tUGVyUHhcbiAgICB2ZWxvY2l0eS5hY2NlbGVyYXRlKFxuICAgICAgICBhY2MgKiBnZXRGb3JjZVJhdGlvKGEuY29vcmRzLngsIGIuY29vcmRzLngsIGEuY29vcmRzLCBiLmNvb3JkcyksXG4gICAgICAgIGFjYyAqIGdldEZvcmNlUmF0aW8oYS5jb29yZHMueSwgYi5jb29yZHMueSwgYS5jb29yZHMsIGIuY29vcmRzKSxcbiAgICAgICAgZGVsdGFcbiAgICApXG59IiwiaW1wb3J0IENvb3JkaW5hdGVzIGZyb20gXCIuL0Nvb3JkaW5hdGVzXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVsb2NpdHkge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB4OiBudW1iZXIsIHB1YmxpYyB5OiBudW1iZXIpIHt9XG5cbiAgICBhY2NlbGVyYXRlKHg6IG51bWJlciwgeTogbnVtYmVyLCBkZWx0YTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMueCArPSB4ICogZGVsdGFcbiAgICAgICAgdGhpcy55ICs9IHkgKiBkZWx0YVxuICAgIH1cblxuICAgIGFwcGx5KG9iajogQ29vcmRpbmF0ZXMsIGRlbHRhOiBudW1iZXIpIHtcbiAgICAgICAgb2JqLnggKz0gdGhpcy54ICogZGVsdGFcbiAgICAgICAgb2JqLnkgKz0gdGhpcy55ICogZGVsdGFcbiAgICB9XG59IiwiaW1wb3J0IEVudGl0eSBmcm9tIFwiLi9FbnRpdHkvRW50aXR5XCJcbmltcG9ydCBDb29yZGluYXRlcyBmcm9tIFwiLi9QaHlzaWMvQ29vcmRpbmF0ZXNcIlxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4vQ2FudmFzL0NvbnRleHRcIlxuaW1wb3J0IERpc2MgZnJvbSBcIi4vTW9kZWwvRGlzY1wiXG5pbXBvcnQgVmVsb2NpdHkgZnJvbSBcIi4vUGh5c2ljL1ZlbG9jaXR5XCJcbmltcG9ydCBhcHBseUdyYXZpdHkgZnJvbSBcIi4vUGh5c2ljL0dyYXZpdHlcIlxuaW1wb3J0IERvdCBmcm9tIFwiLi9Nb2RlbC9Eb3RcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGFuZXQgaW1wbGVtZW50cyBFbnRpdHkge1xuICAgIHB1YmxpYyBlbnRpdGllczogRW50aXR5W10gPSBbXVxuICAgIC8vIHB1YmxpYyBtb2RlbDogRGlzY1xuICAgIHB1YmxpYyBtb2RlbDogRG90IHwgRGlzY1xuXG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGlkOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBjb29yZHM6IENvb3JkaW5hdGVzLFxuICAgICAgICByZWFkb25seSByYWRpdXM6IG51bWJlcixcbiAgICAgICAgcmVhZG9ubHkgbWFzczogbnVtYmVyLFxuICAgICAgICByZWFkb25seSBjb2xvcjogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgdmVsb2NpdHk6IFZlbG9jaXR5LFxuICAgICAgICByZWFkb25seSBwbGFuZXRzOiBQbGFuZXRbXVxuICAgICAgICApIHtcbiAgICAgICAgICAgIC8vIHRoaXMubW9kZWwgPSBuZXcgRG90KHRoaXMuY29vcmRzLCB0aGlzLmNvbG9yKVxuICAgICAgICAgICAgdGhpcy5tb2RlbCA9IG5ldyBEaXNjKHRoaXMuY29vcmRzLCB0aGlzLnJhZGl1cywgdGhpcy5jb2xvcilcbiAgICAgICAgfVxuXG4gICAgZ2V0RW50aXRpZXMoKTogRW50aXR5W10ge1xuICAgICAgICByZXR1cm4gdGhpcy5lbnRpdGllc1xuICAgIH1cblxuICAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5wbGFuZXRzKSB7XG4gICAgICAgICAgICBjb25zdCBwID0gdGhpcy5wbGFuZXRzW2ldXG5cbiAgICAgICAgICAgIGlmIChwLmlkID09IHRoaXMuaWQpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXBwbHlHcmF2aXR5KHRoaXMudmVsb2NpdHksIHRoaXMsIHAsIGRlbHRhKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudmVsb2NpdHkuYXBwbHkodGhpcy5jb29yZHMsIGRlbHRhKVxuICAgICAgICB0aGlzLmVudGl0aWVzLmZvckVhY2goZSA9PiBlLnVwZGF0ZShkZWx0YSkpXG4gICAgfVxuXG4gICAgZHJhdyhjb250ZXh0OiBDb250ZXh0KTogdm9pZCB7XG4gICAgICAgIGNvbnRleHQuZHJhdyh0aGlzLm1vZGVsKVxuICAgIH1cblxuICAgIGdldENvb3JkaW5hdGVzKCk6IENvb3JkaW5hdGVzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29vcmRzXG4gICAgfVxuXG4gICAgc2V0Q29vcmRpbmF0ZXMoY29vcmRzOiBDb29yZGluYXRlcyk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvb3JkcyA9IGNvb3Jkc1xuICAgIH1cbn0iLCJpbXBvcnQgRW50aXR5IGZyb20gXCIuL0VudGl0eS9FbnRpdHlcIlxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4vQ2FudmFzL0NvbnRleHRcIlxuaW1wb3J0IFBsYW5ldCBmcm9tIFwiLi9QbGFuZXRcIlxuaW1wb3J0IERvdCBmcm9tIFwiLi9Nb2RlbC9Eb3RcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGFuZXRUcmFpbCBpbXBsZW1lbnRzIEVudGl0eSB7XG4gICAgcHVibGljIGVudGl0aWVzOiBFbnRpdHlbXVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwbGFuZXRzOiBQbGFuZXRbXSkge31cblxuICAgIHVwZGF0ZShfOiBudW1iZXIpOiB2b2lkIHt9XG5cbiAgICBkcmF3KGNhbnZhczogQ29udGV4dCk6IHZvaWQge1xuICAgICAgICB0aGlzLnBsYW5ldHMuZm9yRWFjaChwID0+IHtcbiAgICAgICAgICAgIGNhbnZhcy5kcmF3KG5ldyBEb3QocC5jb29yZHMsIHAuY29sb3IpKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGdldEVudGl0aWVzKCk6IEVudGl0eVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50aXRpZXNcbiAgICB9XG59IiwiaW1wb3J0IEVudGl0eSBmcm9tIFwiLi4vRW50aXR5L0VudGl0eVwiXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi4vQ2FudmFzL0NvbnRleHRcIlxuaW1wb3J0IFNjZW5lIGZyb20gXCIuL1NjZW5lXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9DbGVhciBleHRlbmRzIFNjZW5lIGltcGxlbWVudHMgRW50aXR5IHtcbiAgICBwdWJsaWMgZW50aXRpZXM6IEVudGl0eVtdID0gW11cblxuICAgIGRyYXcoY29udGV4dDogQ29udGV4dCwgZGVsdGE/OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbnRpdGllcy5mb3JFYWNoKGUgPT4gZS5kcmF3KGNvbnRleHQsIGRlbHRhKSlcbiAgICB9XG59IiwiaW1wb3J0IEVudGl0eSBmcm9tIFwiLi4vRW50aXR5L0VudGl0eVwiXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi4vQ2FudmFzL0NvbnRleHRcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZSBpbXBsZW1lbnRzIEVudGl0eSB7XG4gICAgcHVibGljIGVudGl0aWVzOiBFbnRpdHlbXSA9IFtdXG5cbiAgICBjb25zdHJ1Y3RvciAocHVibGljIGlkOiBzdHJpbmcpIHt9XG5cbiAgICB1cGRhdGUoZGVsdGE6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmVudGl0aWVzLmZvckVhY2goZSA9PiBlLnVwZGF0ZShkZWx0YSkpXG4gICAgfVxuXG4gICAgZHJhdyhjb250ZXh0OiBDb250ZXh0LCBkZWx0YT86IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb250ZXh0LmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNvbnRleHQuY2FudmFzLmNhbnZhcy53aWR0aCwgY29udGV4dC5jYW52YXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuZW50aXRpZXMuZm9yRWFjaChlID0+IGUuZHJhdyhjb250ZXh0LCBkZWx0YSkpXG4gICAgICAgIGNvbnRleHQuY29udGV4dC5zdHJva2UoKTsgICAgXG4gICAgfVxuXG4gICAgZ2V0RW50aXRpZXMoKTogRW50aXR5W10ge1xuICAgICAgICByZXR1cm4gdGhpcy5lbnRpdGllc1xuICAgIH1cbn0iLCJpbXBvcnQgU2NlbmUgZnJvbSBcIi4vU2NlbmVcIlxuaW1wb3J0IE5vQ2xlYXIgZnJvbSBcIi4vTm9DbGVhclwiXG5cbmV4cG9ydCB7XG4gICAgU2NlbmUsXG4gICAgTm9DbGVhclxufSJdLCJzb3VyY2VSb290IjoiIn0=