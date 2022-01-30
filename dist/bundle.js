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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.togglePause = void 0;
const Canvas_1 = __webpack_require__(/*! ./src/Canvas/Canvas */ "./src/Canvas/Canvas.ts");
const Planet_1 = __webpack_require__(/*! ./src/Planet */ "./src/Planet.ts");
const Scene_1 = __webpack_require__(/*! ./src/Scene */ "./src/Scene/index.ts");
const Camera_1 = __webpack_require__(/*! ./src/Camera/Camera */ "./src/Camera/Camera.ts");
const Controls_1 = __webpack_require__(/*! ./src/Controls */ "./src/Controls/index.ts");
const Config_1 = __webpack_require__(/*! ./src/Config */ "./src/Config.ts");
const planets_1 = __webpack_require__(/*! ./planets */ "./planets.ts");
const Vector2D_1 = __webpack_require__(/*! ./src/Physic/Vector2D */ "./src/Physic/Vector2D.ts");
const PlanetStats_1 = __webpack_require__(/*! ./src/Menu/Component/PlanetStats */ "./src/Menu/Component/PlanetStats.ts");
const Distance_1 = __webpack_require__(/*! ./src/Unit/Distance */ "./src/Unit/Distance.ts");
const sandbox_1 = __webpack_require__(/*! ./sandbox */ "./sandbox.ts");
const Controls_2 = __webpack_require__(/*! ./src/Controls/Controls */ "./src/Controls/Controls.ts");
let pause = false;
exports.togglePause = () => {
    pause = !pause;
};
const main = (delta, boards) => {
    // cTime += delta
    let nBefore = window.performance.now();
    if (!pause) {
        boards.forEach(b => {
            b.update(delta * Config_1.default.gameSpeed);
        });
    }
    let nAfter = window.performance.now();
    setTimeout(() => main(Config_1.default.milliSecondsPerFrame, boards), (delta * 1000) - (nAfter - nBefore));
};
window.start = () => {
    const camera = new Camera_1.default(Config_1.default.spaceW / 2, Config_1.default.spaceH / 2, Config_1.default.zoomLevel);
    const bgBoard = new Canvas_1.default(document.body.clientWidth, document.body.clientHeight, camera, "background");
    const planetBoard = new Canvas_1.default(document.body.clientWidth, document.body.clientHeight, camera, "main");
    const sceneNode = document.body.querySelector("#scene");
    bgBoard.appendTo(sceneNode);
    planetBoard.appendTo(sceneNode);
    bgBoard.canvas.style.backgroundColor = "#000000";
    const planetScene = new Scene_1.Scene("main");
    const keyboardControls = new Controls_1.Keyboard(camera, planetBoard);
    const mouseControl = new Controls_1.Mouse();
    const planetsConfig = planets_1.default(planetBoard, camera);
    const domBody = document.querySelector("body");
    let planets = [];
    mouseControl.onClick((x, y) => {
        planets.forEach((p) => {
            if (p.getCoordinates().insideOnRadius(new Vector2D_1.default(Distance_1.pxToKilometre(camera.relativeX(x)), Distance_1.pxToKilometre(camera.relativeY(y))), p.radius + Distance_1.pxToKilometre(80))) {
                console.log(p.id);
            }
        });
    });
    domBody.addEventListener("keydown", keyboardControls.handleKeyboard.bind(keyboardControls));
    domBody.addEventListener("click", mouseControl.handleMouse.bind(mouseControl));
    Controls_2.default(camera);
    planetsConfig.forEach((p) => {
        const planet = new Planet_1.default(p.id, new Vector2D_1.default(p.pos[0], p.pos[1]), p.radius, p.mass, p.color, new Vector2D_1.default(p.velocity[0], p.velocity[1]), planets);
        planetScene.addEntity(planet);
        // planetScene.addEntity(new PlanetTrail(planet));
        planets.push(planet);
    });
    // console.log(getGravityAcc(planets[0], planets[1]));
    planetScene.addEntity(new PlanetStats_1.resetIt());
    planetBoard.addEntity(planetScene);
    main(Config_1.default.milliSecondsPerFrame, [bgBoard, planetBoard]);
};
window.sandbox = sandbox_1.default;


/***/ }),

/***/ "./planets.ts":
/*!********************!*\
  !*** ./planets.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = __webpack_require__(/*! ./src/Config */ "./src/Config.ts");
const Distance_1 = __webpack_require__(/*! ./src/Unit/Distance */ "./src/Unit/Distance.ts");
exports.default = (canvas, camera) => {
    const sun = {
        id: "sun41",
        pos: [
            Distance_1.pxToKilometre(camera.relativeX(canvas.canvas.width / 2)),
            Distance_1.pxToKilometre(camera.relativeY(canvas.canvas.height / 2)),
        ],
        radius: Distance_1.pxToKilometre(130),
        mass: 1.9891e30,
        color: "orange",
        velocity: [0, 0]
    };
    const earth = {
        id: "earth alors",
        pos: [
            sun.pos[0] - 149.59e6,
            sun.pos[1],
        ],
        radius: Distance_1.pxToKilometre(15),
        mass: 5.972e24,
        color: "skyblue",
        // velocity: [0, 0],
        velocity: [0, Config_1.default.earthSpeed * 0.5],
    };
    const interloper = {
        id: "interloper",
        pos: [
            sun.pos[0] + 184400000,
            sun.pos[1] - 50000000,
        ],
        radius: Distance_1.pxToKilometre(8),
        mass: 7.348e4,
        color: "red",
        velocity: [-15.5, -5]
    };
    const moonmoon = {
        id: "moonmoon",
        pos: [
            earth.pos[0] + 5000000,
            earth.pos[1] - 4000000,
        ],
        radius: Distance_1.pxToKilometre(5),
        mass: 7.348e4,
        color: "gray",
        velocity: [0, 0.15],
    };
    return [
        sun,
        earth,
        interloper,
    ];
};


/***/ }),

/***/ "./sandbox.ts":
/*!********************!*\
  !*** ./sandbox.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Planet_1 = __webpack_require__(/*! ./src/Planet */ "./src/Planet.ts");
const Distance_1 = __webpack_require__(/*! ./src/Unit/Distance */ "./src/Unit/Distance.ts");
const Vector2D_1 = __webpack_require__(/*! ./src/Physic/Vector2D */ "./src/Physic/Vector2D.ts");
const Gravity_1 = __webpack_require__(/*! ./src/Physic/Gravity */ "./src/Physic/Gravity.ts");
exports.default = () => {
    const earth = new Planet_1.default("earth alors", new Vector2D_1.default(0, 0), Distance_1.pxToKilometre(10), 5.972e24, "skyblue", 
    // velocity: [0, 0],
    new Vector2D_1.default(0, 0), null
    // velocity: new Vector2D(0, 0),
    );
    const moonmoon = new Planet_1.default("moonmoon", new Vector2D_1.default(384400, 0), Distance_1.pxToKilometre(10), 7.34767309e22, "skyblue", 
    // velocity: [0, 0],
    new Vector2D_1.default(0, 1.022), null
    // velocity: new Vector2D(0, 0),
    );
    const moonForce = Gravity_1.getForceNorm(earth, moonmoon);
    console.log(moonForce, moonForce / moonmoon.mass);
};


/***/ }),

/***/ "./src/Camera/Camera.ts":
/*!******************************!*\
  !*** ./src/Camera/Camera.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = __webpack_require__(/*! ../Config */ "./src/Config.ts");
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
        return this.x + (this.z * x);
    }
    relativeY(y) {
        return this.y + (this.z * y);
    }
    up() {
        if (this.y - Config_1.default.decalByMove <= 0) {
            return false;
        }
        this.y -= Config_1.default.decalByMove;
        return true;
    }
    left() {
        if (this.x - Config_1.default.decalByMove <= 0) {
            return false;
        }
        this.x -= Config_1.default.decalByMove;
        return true;
    }
    right() {
        if (this.x >= Config_1.default.spaceW) {
            return false;
        }
        this.x += Config_1.default.decalByMove;
        return true;
    }
    down() {
        if (this.y >= Config_1.default.spaceH) {
            return false;
        }
        this.y += Config_1.default.decalByMove;
        return true;
    }
    zoomIn() {
        if (this.z <= Config_1.default.zoomMin) {
            return false;
        }
        this.z -= Config_1.default.zoomActionPow;
        return true;
    }
    zoomOut() {
        this.z += Config_1.default.zoomActionPow;
        return true;
    }
}
exports.default = Camera;


/***/ }),

/***/ "./src/Canvas/Canvas.ts":
/*!******************************!*\
  !*** ./src/Canvas/Canvas.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Context_1 = __webpack_require__(/*! ./Context */ "./src/Canvas/Context.ts");
const Node_1 = __webpack_require__(/*! ../Entity/Node */ "./src/Entity/Node.ts");
const Vector2D_1 = __webpack_require__(/*! ../Physic/Vector2D */ "./src/Physic/Vector2D.ts");
class Canvas extends Node_1.default {
    constructor(width, height, camera, id) {
        super(new Vector2D_1.default(0, 0));
        this.id = id;
        this.entities = [];
        this.canvas = document.createElement("canvas");
        this.canvas.id = this.id;
        this.canvas.width = width;
        this.canvas.height = height;
        this.context = new Context_1.default(this.canvas.getContext("2d"), camera, this);
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
exports.default = Canvas;


/***/ }),

/***/ "./src/Canvas/Context.ts":
/*!*******************************!*\
  !*** ./src/Canvas/Context.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
    write(text, x, y, color, fontSize, fontFamily) {
        this.context.font = `${fontSize}px ${fontFamily}`;
        this.context.fillStyle = color;
        this.context.fillText(text, x, y);
    }
    strokeRect(x, y, w, h, color) {
        this.context.strokeStyle = color;
        this.context.strokeRect(this.camera.X(x), this.camera.Y(y), w, h);
        return this;
    }
    fillRect(x, y, w, h, color) {
        this.context.fillStyle = color;
        this.context.fillRect(this.camera.X(x), this.camera.Y(y), w, h);
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
exports.default = Context;


/***/ }),

/***/ "./src/Config.ts":
/*!***********************!*\
  !*** ./src/Config.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
const G = 6.674e-11;
var PlayMode;
(function (PlayMode) {
    PlayMode[PlayMode["PLAY"] = 0] = "PLAY";
    PlayMode[PlayMode["PAUSE"] = 1] = "PAUSE";
})(PlayMode || (PlayMode = {}));
const mode = PlayMode.PLAY;
// const kmPerPx = 1.3e5
const kmPerPx = 1.8e5;
exports.default = {
    gameSpeed: 365 * 24 * 60 * 60 / 4,
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
};


/***/ }),

/***/ "./src/Controls/Controls.ts":
/*!**********************************!*\
  !*** ./src/Controls/Controls.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const idFuncs = {
    "#btn-up": (camera) => camera.up(),
    "#btn-down": (camera) => camera.down(),
    "#btn-left": (camera) => camera.left(),
    "#btn-right": (camera) => camera.right(),
    "#zoom-in": (camera) => camera.zoomIn(),
    "#zoom-out": (camera) => camera.zoomOut(),
};
let intervalSeed = null;
const Controls = (camera) => {
    for (const id in idFuncs) {
        document.body.addEventListener("mouseup", () => clearInterval(intervalSeed));
        document.querySelector(id).addEventListener("mousedown", () => {
            intervalSeed = setInterval(() => idFuncs[id](camera), 100);
        });
    }
};
exports.default = Controls;


/***/ }),

/***/ "./src/Controls/Keyboard.ts":
/*!**********************************!*\
  !*** ./src/Controls/Keyboard.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __webpack_require__(/*! ../../index */ "./index.ts");
class Keyboard {
    constructor(camera, canvas) {
        this.camera = camera;
        this.canvas = canvas;
        this.actionByKeycode = {
            // 68: () => {debug.Toggle();},
            // 83: () => {mode = mode == PAUSE ? PLAY : PAUSE;},
            80: () => {
                index_1.togglePause();
            },
            82: () => {
                this.camera.x = 0;
                this.camera.y = 0;
                this.camera.z = 1;
            },
            90: () => this.camera.zoomIn(),
            88: () => this.camera.zoomOut(),
            37: () => this.camera.left(),
            38: () => this.camera.up(),
            39: () => this.camera.right(),
            40: () => this.camera.down()
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
exports.default = Keyboard;


/***/ }),

/***/ "./src/Controls/Mouse.ts":
/*!*******************************!*\
  !*** ./src/Controls/Mouse.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Mouse {
    onClick(cb) {
        this.clickCb = cb;
    }
    handleMouse(e) {
        this.clickCb(e.x, e.y);
    }
}
exports.default = Mouse;


/***/ }),

/***/ "./src/Controls/index.ts":
/*!*******************************!*\
  !*** ./src/Controls/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Mouse = exports.Keyboard = void 0;
const Keyboard_1 = __webpack_require__(/*! ./Keyboard */ "./src/Controls/Keyboard.ts");
exports.Keyboard = Keyboard_1.default;
const Mouse_1 = __webpack_require__(/*! ./Mouse */ "./src/Controls/Mouse.ts");
exports.Mouse = Mouse_1.default;


/***/ }),

/***/ "./src/Entity/Node.ts":
/*!****************************!*\
  !*** ./src/Entity/Node.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Vector2D_1 = __webpack_require__(/*! ../Physic/Vector2D */ "./src/Physic/Vector2D.ts");
class Node {
    constructor(coords) {
        this.coords = coords;
        this.entities = [];
    }
    update(delta) {
        this.entities.forEach(e => e.update(delta));
    }
    draw(context, delta) {
        this.entities.forEach(e => e.draw(context, delta));
    }
    addEntity(entity) {
        this.entities.push(entity);
        return this;
    }
    getCoordinates() {
        return this.coords;
    }
    getSizes() {
        return new Vector2D_1.default(0, 0);
    }
}
exports.default = Node;


/***/ }),

/***/ "./src/Menu/Component/PlanetStats.ts":
/*!*******************************************!*\
  !*** ./src/Menu/Component/PlanetStats.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.resetIt = void 0;
const Distance_1 = __webpack_require__(/*! ../../Unit/Distance */ "./src/Unit/Distance.ts");
const Vector2D_1 = __webpack_require__(/*! ../../Physic/Vector2D */ "./src/Physic/Vector2D.ts");
const Text_1 = __webpack_require__(/*! ../Container/Text */ "./src/Menu/Container/Text.ts");
const Node_1 = __webpack_require__(/*! ../../Entity/Node */ "./src/Entity/Node.ts");
let it = 0;
class PlanetStats {
    constructor(planet) {
        this.planet = planet;
        this.localIt = 0;
        this.localIt = it;
        it++;
    }
    draw(context) {
        const windowW = 240;
        const windowH = 200;
        const floatFix = 6;
        new Text_1.default(new Vector2D_1.default(20, 20 + (windowH * this.localIt)), new Vector2D_1.default(windowW, windowH), this.planet.color, 20).setLines([
            `> ${this.planet.id}`,
            `  mass: ${this.planet.mass} kg`,
            '  velocity (km/s):',
            `    x: ${this.planet.velocity.x > 0 ? " " : ""}${this.planet.velocity.x.toFixed(floatFix)}`,
            `    y: ${this.planet.velocity.y > 0 ? " " : ""}${this.planet.velocity.y.toFixed(floatFix)}`,
            `    n:  ${this.planet.velocity.getNorm().toFixed(floatFix)}`,
            '  coordinates (px):',
            `    x: ${Distance_1.kilometreToPx(this.planet.getCoordinates().x).toFixed(2)}`,
            `    y: ${Distance_1.kilometreToPx(this.planet.getCoordinates().y).toFixed(2)}`,
        ]).draw(context);
    }
}
exports.default = PlanetStats;
class resetIt extends Node_1.default {
    constructor() {
        super(new Vector2D_1.default(0, 0));
    }
    update() {
        it = 0;
    }
    draw() { }
}
exports.resetIt = resetIt;


/***/ }),

/***/ "./src/Menu/Container/Block.ts":
/*!*************************************!*\
  !*** ./src/Menu/Container/Block.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Vector2D_1 = __webpack_require__(/*! ../../Physic/Vector2D */ "./src/Physic/Vector2D.ts");
class Basic {
    constructor(coords, sizes, color = "#ffffff", fontSize = 14, fontFamily = "Verdana") {
        this.coords = coords;
        this.sizes = sizes;
        this.color = color;
        this.fontSize = fontSize;
        this.fontFamily = fontFamily;
        this.decalX = 0;
        this.decalY = 0;
    }
    setDecal(decalX, decalY) {
        this.decalX = decalX;
        this.decalY = decalY;
        return this;
    }
    getCoordinates() {
        return new Vector2D_1.default(+this.coords.x + this.decalX, +this.coords.y + this.decalY);
    }
    getColor() {
        return this.color;
    }
    getSizes() {
        return this.sizes;
    }
    getFontSize() {
        return this.fontSize;
    }
    getFontFamily() {
        return this.fontFamily;
    }
    update() { }
    draw(context) {
        this.entities.forEach(entity => entity.draw(context));
    }
    getEntities() {
        return this.entities;
    }
}
exports.default = Basic;


/***/ }),

/***/ "./src/Menu/Container/Text.ts":
/*!************************************!*\
  !*** ./src/Menu/Container/Text.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Block_1 = __webpack_require__(/*! ./Block */ "./src/Menu/Container/Block.ts");
class Text extends Block_1.default {
    constructor() {
        super(...arguments);
        this.lines = [];
    }
    addLine(text) {
        this.lines.push(text);
        return this;
    }
    setLines(lines) {
        this.lines = lines;
        return this;
    }
    shouldBreakLine(width, line, ctx) {
        return ctx.context.measureText(line).width > width;
    }
    breakLine(width, line, ctx) {
        if (!this.shouldBreakLine(width, line, ctx)) {
            return [];
        }
        let lines = [];
        // break for /n
        line.split("\n").forEach((l) => {
            // full size of line
            const textWidth = ctx.context.measureText(l).width;
            // size of a character, rounded to closest greater integer
            const charS = Math.ceil(textWidth / l.length);
            // number of char per line, rounded to the closest lower integer
            const charPerLine = Math.floor(width / charS);
            // relative width, using above approximations
            const relativeWidth = charPerLine * charS;
            // number of lines we should break into.
            // min(n) = 1;
            const n = Math.ceil(textWidth / relativeWidth);
            // cycle over number of lines
            for (let i = 0; i < n; i++) {
                lines.push(l.slice(charPerLine * i, charPerLine * (i + 1)));
            }
        });
        return lines;
    }
    writeLines(lines, x, y, w, h, fontSize, color, fontFamily, iOverload, ctx) {
        lines.forEach((line, i) => {
            const bl = this.breakLine(w, line, ctx);
            if (bl.length > 0) {
                this.writeLines(bl, x, y, w, h, fontSize, color, fontFamily, i + iOverload, ctx);
                // -1 because the "i" of this iteration was not used to write a
                // line as it should (canvasY under), but as an overload value
                // to write broken lines. And "i" will still increment by 1
                // because of forEach.
                // And since iOverload is used under to compute canvasY, we
                // can cancel that empty "i" iteration here.
                iOverload += bl.length - 1;
                return;
            }
            const canvasY = y + (fontSize * (i + iOverload));
            const canvasX = x;
            ctx.write(line, canvasX, canvasY, color, fontSize, fontFamily);
        });
    }
    draw(ctx) {
        // canvasTxt.fontSize = this.getFontSize();
        const { x, y } = this.getCoordinates();
        const { x: w, y: h } = this.getSizes();
        this.writeLines(this.lines, x, y, w, h, this.getFontSize(), this.getColor(), "Verdana", 0, ctx);
    }
}
exports.default = Text;


/***/ }),

/***/ "./src/Model/Disc.ts":
/*!***************************!*\
  !*** ./src/Model/Disc.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Distance_1 = __webpack_require__(/*! ../Unit/Distance */ "./src/Unit/Distance.ts");
class Disc {
    constructor(coords, radius, color) {
        this.coords = coords;
        this.radius = radius;
        this.color = color;
    }
    draw(ctx) {
        ctx.context.fillStyle = this.color;
        ctx.context.strokeStyle = this.color;
        ctx.arc(Distance_1.kilometreToPx(this.coords.x), Distance_1.kilometreToPx(this.coords.y), Distance_1.kilometreToPx(this.radius), 0, 2 * Math.PI);
        ctx.context.fill();
        ctx.context.stroke();
    }
    getCoordinates() {
        return this.coords;
    }
    setCoordinates(coords) {
        this.coords = coords;
    }
}
exports.default = Disc;


/***/ }),

/***/ "./src/Physic/Gravity.ts":
/*!*******************************!*\
  !*** ./src/Physic/Gravity.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getForceNorm = exports.getForce = void 0;
const Config_1 = __webpack_require__(/*! ../Config */ "./src/Config.ts");
const getForce = (a, b) => {
    // const dist = Geometry.getDistanceBetweenObjects(a.coords, b.coords)
    const r21_v = b.getCoordinates().sub(a.getCoordinates());
    const dist = Math.sqrt((r21_v.x * r21_v.x * 1000) + (r21_v.y * r21_v.y * 1000));
    const f = (Config_1.default.G * a.mass * b.mass) / (dist * dist);
    const f21_v = r21_v.divide(dist).dot(f);
    return f21_v;
};
exports.getForce = getForce;
const getForceNorm = (a, b) => {
    const dist = Math.sqrt(Math.pow(a.getCoordinates().getNorm() - b.getCoordinates().getNorm(), 2)) * 1000;
    return (Config_1.default.G * a.mass * b.mass) / (dist * dist);
};
exports.getForceNorm = getForceNorm;
exports.default = (a, b) => {
    return getForce(a, b).divide(a.mass);
};


/***/ }),

/***/ "./src/Physic/Vector2D.ts":
/*!********************************!*\
  !*** ./src/Physic/Vector2D.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
    insideOnRadius(trial, radius) {
        return Math.pow(trial.x - this.x, 2) + Math.pow(trial.y - this.y, 2) <= Math.pow(radius, 2);
    }
    getNorm() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
}
exports.default = Vector2D;


/***/ }),

/***/ "./src/Planet.ts":
/*!***********************!*\
  !*** ./src/Planet.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Disc_1 = __webpack_require__(/*! ./Model/Disc */ "./src/Model/Disc.ts");
const Gravity_1 = __webpack_require__(/*! ./Physic/Gravity */ "./src/Physic/Gravity.ts");
const Node_1 = __webpack_require__(/*! ./Entity/Node */ "./src/Entity/Node.ts");
const Vector2D_1 = __webpack_require__(/*! ./Physic/Vector2D */ "./src/Physic/Vector2D.ts");
const PlanetStats_1 = __webpack_require__(/*! ./Menu/Component/PlanetStats */ "./src/Menu/Component/PlanetStats.ts");
class Planet extends Node_1.default {
    constructor(id, coords, radius, mass, color, velocity, planets) {
        super(coords);
        this.id = id;
        this.radius = radius;
        this.mass = mass;
        this.color = color;
        this.velocity = velocity;
        this.planets = planets;
        this.model = new Disc_1.default(this.coords, this.radius, this.color);
        this.stats = new PlanetStats_1.default(this);
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
            this.velocity = this.velocity.sum(Gravity_1.default(this, other));
        }
        this.coords = this.coords.sum(this.velocity.normalize(delta));
        this.model.coords = this.coords;
        super.update(delta);
    }
    draw(context) {
        context.draw(this.model);
        this.stats.draw(context);
        super.draw(context);
    }
    setCoordinates(coords) {
        this.coords = coords;
    }
    getSizes() {
        return new Vector2D_1.default(this.radius * 2, this.radius * 2);
    }
}
exports.default = Planet;


/***/ }),

/***/ "./src/Scene/NoClear.ts":
/*!******************************!*\
  !*** ./src/Scene/NoClear.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Scene_1 = __webpack_require__(/*! ./Scene */ "./src/Scene/Scene.ts");
class NoClear extends Scene_1.default {
    constructor() {
        super(...arguments);
        this.entities = [];
    }
    draw(context, delta) {
        this.entities.forEach(e => e.draw(context, delta));
    }
}
exports.default = NoClear;


/***/ }),

/***/ "./src/Scene/Scene.ts":
/*!****************************!*\
  !*** ./src/Scene/Scene.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = __webpack_require__(/*! ../Entity/Node */ "./src/Entity/Node.ts");
const Vector2D_1 = __webpack_require__(/*! ../Physic/Vector2D */ "./src/Physic/Vector2D.ts");
class Scene extends Node_1.default {
    constructor(id) {
        super(new Vector2D_1.default(0, 0));
        this.id = id;
    }
    draw(context, delta) {
        context.context.clearRect(0, 0, context.canvas.canvas.width, context.canvas.canvas.height);
        this.entities.forEach(e => e.draw(context, delta));
    }
}
exports.default = Scene;


/***/ }),

/***/ "./src/Scene/index.ts":
/*!****************************!*\
  !*** ./src/Scene/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NoClear = exports.Scene = void 0;
const Scene_1 = __webpack_require__(/*! ./Scene */ "./src/Scene/Scene.ts");
exports.Scene = Scene_1.default;
const NoClear_1 = __webpack_require__(/*! ./NoClear */ "./src/Scene/NoClear.ts");
exports.NoClear = NoClear_1.default;


/***/ }),

/***/ "./src/Unit/Distance.ts":
/*!******************************!*\
  !*** ./src/Unit/Distance.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.pxToKilometre = exports.kilometreToPx = void 0;
const Config_1 = __webpack_require__(/*! ../Config */ "./src/Config.ts");
const kilometreToPx = (distance) => {
    return distance / Config_1.default.kmPerPx;
};
exports.kilometreToPx = kilometreToPx;
const pxToKilometre = (px) => {
    return px * Config_1.default.kmPerPx;
};
exports.pxToKilometre = pxToKilometre;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vcGxhbmV0cy50cyIsIndlYnBhY2s6Ly8vLi9zYW5kYm94LnRzIiwid2VicGFjazovLy8uL3NyYy9DYW1lcmEvQ2FtZXJhLnRzIiwid2VicGFjazovLy8uL3NyYy9DYW52YXMvQ2FudmFzLnRzIiwid2VicGFjazovLy8uL3NyYy9DYW52YXMvQ29udGV4dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9Db250cm9scy9Db250cm9scy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29udHJvbHMvS2V5Ym9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnRyb2xzL01vdXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9Db250cm9scy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRW50aXR5L05vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01lbnUvQ29tcG9uZW50L1BsYW5ldFN0YXRzLnRzIiwid2VicGFjazovLy8uL3NyYy9NZW51L0NvbnRhaW5lci9CbG9jay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTWVudS9Db250YWluZXIvVGV4dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTW9kZWwvRGlzYy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGh5c2ljL0dyYXZpdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BoeXNpYy9WZWN0b3IyRC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGxhbmV0LnRzIiwid2VicGFjazovLy8uL3NyYy9TY2VuZS9Ob0NsZWFyLnRzIiwid2VicGFjazovLy8uL3NyYy9TY2VuZS9TY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2NlbmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VuaXQvRGlzdGFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FB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QUUsQ0FBUTtJQUU5QixDQUFDO0lBRUQsSUFBSSxDQUFDLE9BQWdCLEVBQUUsS0FBYztRQUNqQyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztDQUNKO0FBVEQsd0JBU0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkRCwyRUFBMkI7QUFJdkIsZ0JBSkcsZUFBSyxDQUlIO0FBSFQsaUZBQStCO0FBSTNCLGtCQUpHLGlCQUFPLENBSUg7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMWCx5RUFBOEI7QUFFOUIsTUFBTSxhQUFhLEdBQUcsQ0FBQyxRQUFnQixFQUFVLEVBQUU7SUFDL0MsT0FBTyxRQUFRLEdBQUcsZ0JBQU0sQ0FBQyxPQUFPO0FBQ3BDLENBQUM7QUFNUSxzQ0FBYTtBQUp0QixNQUFNLGFBQWEsR0FBRyxDQUFDLEVBQVUsRUFBVSxFQUFFO0lBQ3pDLE9BQU8sRUFBRSxHQUFHLGdCQUFNLENBQUMsT0FBTztBQUM5QixDQUFDO0FBRXVCLHNDQUFhIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgQ2FudmFzIGZyb20gXCIuL3NyYy9DYW52YXMvQ2FudmFzXCI7XG5pbXBvcnQgUGxhbmV0IGZyb20gXCIuL3NyYy9QbGFuZXRcIjtcbmltcG9ydCB7U2NlbmV9IGZyb20gXCIuL3NyYy9TY2VuZVwiO1xuaW1wb3J0IENhbWVyYSBmcm9tIFwiLi9zcmMvQ2FtZXJhL0NhbWVyYVwiO1xuaW1wb3J0IHsgS2V5Ym9hcmQsIE1vdXNlfSBmcm9tIFwiLi9zcmMvQ29udHJvbHNcIjtcbmltcG9ydCBDb25maWcgZnJvbSBcIi4vc3JjL0NvbmZpZ1wiXG5pbXBvcnQgZ2V0UGxhbmV0cywgeyBQbGFuZXRDb25maWcgfSBmcm9tIFwiLi9wbGFuZXRzXCI7XG5pbXBvcnQgVmVjdG9yMkQgZnJvbSBcIi4vc3JjL1BoeXNpYy9WZWN0b3IyRFwiO1xuaW1wb3J0IHsgcmVzZXRJdCB9IGZyb20gXCIuL3NyYy9NZW51L0NvbXBvbmVudC9QbGFuZXRTdGF0c1wiO1xuaW1wb3J0IHsgcHhUb0tpbG9tZXRyZSB9IGZyb20gXCIuL3NyYy9Vbml0L0Rpc3RhbmNlXCI7XG5pbXBvcnQgc2FuZGJveCBmcm9tIFwiLi9zYW5kYm94XCI7XG5pbXBvcnQgQ29udHJvbHMgZnJvbSBcIi4vc3JjL0NvbnRyb2xzL0NvbnRyb2xzXCI7XG5cbmxldCBwYXVzZSA9IGZhbHNlO1xuXG5leHBvcnQgY29uc3QgdG9nZ2xlUGF1c2UgPSAoKSA9PiB7XG4gICAgcGF1c2UgPSAhcGF1c2U7XG59O1xuXG5jb25zdCBtYWluID0gKGRlbHRhOiBudW1iZXIsIGJvYXJkczogQ2FudmFzW10pID0+IHtcbiAgICAvLyBjVGltZSArPSBkZWx0YVxuICAgIGxldCBuQmVmb3JlID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xuICAgIGlmICghcGF1c2Upe1xuICAgICAgICBib2FyZHMuZm9yRWFjaChiID0+IHtcbiAgICAgICAgICAgIGIudXBkYXRlKGRlbHRhICogQ29uZmlnLmdhbWVTcGVlZCk7XG4gICAgICAgIH0pICAgIFxuICAgIH1cbiAgICBsZXQgbkFmdGVyID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gbWFpbihDb25maWcubWlsbGlTZWNvbmRzUGVyRnJhbWUsIGJvYXJkcyksIChkZWx0YSAqIDEwMDApIC0gKG5BZnRlciAtIG5CZWZvcmUpKTtcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICAgIGludGVyZmFjZSBXaW5kb3cgeyBNeU5hbWVzcGFjZTogYW55OyB9XG59XG5cbih3aW5kb3cgYXMgYW55KS5zdGFydCA9ICgpID0+IHtcbiAgICBjb25zdCBjYW1lcmEgPSBuZXcgQ2FtZXJhKENvbmZpZy5zcGFjZVcgLyAyLCBDb25maWcuc3BhY2VIIC8gMiwgQ29uZmlnLnpvb21MZXZlbCk7XG4gICAgY29uc3QgYmdCb2FyZCA9IG5ldyBDYW52YXMoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQsIGNhbWVyYSwgXCJiYWNrZ3JvdW5kXCIpO1xuICAgIGNvbnN0IHBsYW5ldEJvYXJkID0gbmV3IENhbnZhcyhkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCwgY2FtZXJhLCBcIm1haW5cIik7XG4gICAgY29uc3Qgc2NlbmVOb2RlOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihcIiNzY2VuZVwiKTtcblxuICAgIGJnQm9hcmQuYXBwZW5kVG8oc2NlbmVOb2RlKTtcbiAgICBwbGFuZXRCb2FyZC5hcHBlbmRUbyhzY2VuZU5vZGUpO1xuICAgIGJnQm9hcmQuY2FudmFzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzAwMDAwMFwiO1xuICAgIFxuICAgIGNvbnN0IHBsYW5ldFNjZW5lID0gbmV3IFNjZW5lKFwibWFpblwiKTtcblxuICAgIGNvbnN0IGtleWJvYXJkQ29udHJvbHMgPSBuZXcgS2V5Ym9hcmQoY2FtZXJhLCBwbGFuZXRCb2FyZCk7XG4gICAgY29uc3QgbW91c2VDb250cm9sID0gbmV3IE1vdXNlKCk7XG4gICAgY29uc3QgcGxhbmV0c0NvbmZpZyA9IGdldFBsYW5ldHMocGxhbmV0Qm9hcmQsIGNhbWVyYSk7XG4gICAgY29uc3QgZG9tQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGxldCBwbGFuZXRzOiBQbGFuZXRbXSA9IFtdO1xuXG4gICAgbW91c2VDb250cm9sLm9uQ2xpY2soKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgICAgIHBsYW5ldHMuZm9yRWFjaCgocDogUGxhbmV0KSA9PiB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgcC5nZXRDb29yZGluYXRlcygpLmluc2lkZU9uUmFkaXVzKFxuICAgICAgICAgICAgICAgICAgICBuZXcgVmVjdG9yMkQoXG4gICAgICAgICAgICAgICAgICAgICAgICBweFRvS2lsb21ldHJlKGNhbWVyYS5yZWxhdGl2ZVgoeCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHhUb0tpbG9tZXRyZShjYW1lcmEucmVsYXRpdmVZKHkpKVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIHAucmFkaXVzICsgcHhUb0tpbG9tZXRyZSg4MCkpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwLmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KTtcblxuICAgIGRvbUJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5Ym9hcmRDb250cm9scy5oYW5kbGVLZXlib2FyZC5iaW5kKGtleWJvYXJkQ29udHJvbHMpKTtcbiAgICBkb21Cb2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtb3VzZUNvbnRyb2wuaGFuZGxlTW91c2UuYmluZChtb3VzZUNvbnRyb2wpKTtcbiAgICBDb250cm9scyhjYW1lcmEpO1xuXG4gICAgcGxhbmV0c0NvbmZpZy5mb3JFYWNoKChwOiBQbGFuZXRDb25maWcpID0+IHtcbiAgICAgICAgY29uc3QgcGxhbmV0ID0gbmV3IFBsYW5ldChcbiAgICAgICAgICAgIHAuaWQsXG4gICAgICAgICAgICBuZXcgVmVjdG9yMkQocC5wb3NbMF0sIHAucG9zWzFdKSxcbiAgICAgICAgICAgIHAucmFkaXVzLFxuICAgICAgICAgICAgcC5tYXNzLFxuICAgICAgICAgICAgcC5jb2xvcixcbiAgICAgICAgICAgIG5ldyBWZWN0b3IyRChwLnZlbG9jaXR5WzBdLCBwLnZlbG9jaXR5WzFdKSxcbiAgICAgICAgICAgIHBsYW5ldHNcbiAgICAgICAgKTtcbiAgICAgICAgcGxhbmV0U2NlbmUuYWRkRW50aXR5KHBsYW5ldCk7XG4gICAgICAgIC8vIHBsYW5ldFNjZW5lLmFkZEVudGl0eShuZXcgUGxhbmV0VHJhaWwocGxhbmV0KSk7XG4gICAgICAgIHBsYW5ldHMucHVzaChwbGFuZXQpO1xuICAgIH0pXG5cbiAgICAvLyBjb25zb2xlLmxvZyhnZXRHcmF2aXR5QWNjKHBsYW5ldHNbMF0sIHBsYW5ldHNbMV0pKTtcblxuICAgIHBsYW5ldFNjZW5lLmFkZEVudGl0eShuZXcgcmVzZXRJdCgpKTtcbiAgICBwbGFuZXRCb2FyZC5hZGRFbnRpdHkocGxhbmV0U2NlbmUpO1xuICAgIFxuICAgIG1haW4oQ29uZmlnLm1pbGxpU2Vjb25kc1BlckZyYW1lLCBbYmdCb2FyZCwgcGxhbmV0Qm9hcmRdKTtcbiB9O1xuXG4od2luZG93IGFzIGFueSkuc2FuZGJveCA9IHNhbmRib3g7IiwiaW1wb3J0IENhbnZhcyBmcm9tIFwiLi9zcmMvQ2FudmFzL0NhbnZhc1wiXG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuL3NyYy9DYW1lcmEvQ2FtZXJhXCJcbmltcG9ydCBDb25maWcgZnJvbSBcIi4vc3JjL0NvbmZpZ1wiXG5pbXBvcnQgeyBweFRvS2lsb21ldHJlIH0gZnJvbSBcIi4vc3JjL1VuaXQvRGlzdGFuY2VcIlxuXG5cbmV4cG9ydCB0eXBlIFBsYW5ldENvbmZpZyA9IHtcbiAgICBpZDogc3RyaW5nLFxuICAgIHBvczogbnVtYmVyW10sXG4gICAgcmFkaXVzOiBudW1iZXIsXG4gICAgbWFzczogbnVtYmVyLFxuICAgIGNvbG9yOiBzdHJpbmcsXG4gICAgdmVsb2NpdHk6IG51bWJlcltdLFxufVxuZXhwb3J0IGRlZmF1bHQgKGNhbnZhczogQ2FudmFzLCBjYW1lcmE6IENhbWVyYSk6IFBsYW5ldENvbmZpZ1tdID0+IHtcbiAgICBjb25zdCBzdW4gPSB7XG4gICAgICAgIGlkOiBcInN1bjQxXCIsXG4gICAgICAgIHBvczogW1xuICAgICAgICAgICAgcHhUb0tpbG9tZXRyZShjYW1lcmEucmVsYXRpdmVYKGNhbnZhcy5jYW52YXMud2lkdGggLyAyKSksXG4gICAgICAgICAgICBweFRvS2lsb21ldHJlKGNhbWVyYS5yZWxhdGl2ZVkoY2FudmFzLmNhbnZhcy5oZWlnaHQgLyAyKSksXG4gICAgICAgIF0sXG4gICAgICAgIHJhZGl1czogcHhUb0tpbG9tZXRyZSgxMzApLFxuICAgICAgICBtYXNzOiAxLjk4OTFlMzAsXG4gICAgICAgIGNvbG9yOiBcIm9yYW5nZVwiLFxuICAgICAgICB2ZWxvY2l0eTogWzAsIDBdXG4gICAgfTtcblxuICAgIGNvbnN0IGVhcnRoID0ge1xuICAgICAgICBpZDogXCJlYXJ0aCBhbG9yc1wiLFxuICAgICAgICBwb3M6IFtcbiAgICAgICAgICAgIHN1bi5wb3NbMF0gLSAxNDkuNTllNixcbiAgICAgICAgICAgIHN1bi5wb3NbMV0sXG4gICAgICAgIF0sXG4gICAgICAgIHJhZGl1czogcHhUb0tpbG9tZXRyZSgxNSksXG4gICAgICAgIG1hc3M6IDUuOTcyZTI0LFxuICAgICAgICBjb2xvcjogXCJza3libHVlXCIsXG4gICAgICAgIC8vIHZlbG9jaXR5OiBbMCwgMF0sXG4gICAgICAgIHZlbG9jaXR5OiBbMCwgQ29uZmlnLmVhcnRoU3BlZWQgKiAwLjVdLFxuXG4gICAgICAgIC8vIHZlbG9jaXR5OiBuZXcgVmVjdG9yMkQoMCwgMCksXG4gICAgfTtcblxuICAgIGNvbnN0IGludGVybG9wZXIgPSB7XG4gICAgICAgIGlkOiBcImludGVybG9wZXJcIixcbiAgICAgICAgcG9zOiBbXG4gICAgICAgICAgICBzdW4ucG9zWzBdICsgMTg0NDAwMDAwLFxuICAgICAgICAgICAgc3VuLnBvc1sxXSAtIDUwMDAwMDAwLFxuICAgICAgICBdLFxuICAgICAgICByYWRpdXM6IHB4VG9LaWxvbWV0cmUoOCksXG4gICAgICAgIG1hc3M6IDcuMzQ4ZTQsXG4gICAgICAgIGNvbG9yOiBcInJlZFwiLFxuICAgICAgICB2ZWxvY2l0eTogWy0xNS41LCAtNV1cbiAgICB9O1xuXG4gICAgY29uc3QgbW9vbm1vb24gPSB7XG4gICAgICAgIGlkOiBcIm1vb25tb29uXCIsXG4gICAgICAgIHBvczogW1xuICAgICAgICAgICAgZWFydGgucG9zWzBdICsgNTAwMDAwMCxcbiAgICAgICAgICAgIGVhcnRoLnBvc1sxXSAtIDQwMDAwMDAsXG4gICAgICAgIF0sXG4gICAgICAgIHJhZGl1czogcHhUb0tpbG9tZXRyZSg1KSxcbiAgICAgICAgbWFzczogNy4zNDhlNCxcbiAgICAgICAgY29sb3I6IFwiZ3JheVwiLFxuICAgICAgICB2ZWxvY2l0eTogWzAsIDAuMTVdLFxuICAgIH07XG5cbiAgICByZXR1cm4gW1xuICAgICAgICAgICAgc3VuLFxuICAgICAgICAgICAgZWFydGgsXG4gICAgICAgICAgICBpbnRlcmxvcGVyLFxuICAgICAgICAgICAgLy8gbW9vbm1vb24sXG4gICAgXVxufSIsImltcG9ydCBQbGFuZXQgZnJvbSBcIi4vc3JjL1BsYW5ldFwiO1xuaW1wb3J0IENvbmZpZyBmcm9tIFwiLi9zcmMvQ29uZmlnXCI7XG5pbXBvcnQgeyBweFRvS2lsb21ldHJlIH0gZnJvbSBcIi4vc3JjL1VuaXQvRGlzdGFuY2VcIjtcbmltcG9ydCBWZWN0b3IyRCBmcm9tIFwiLi9zcmMvUGh5c2ljL1ZlY3RvcjJEXCI7XG5pbXBvcnQgeyBnZXRGb3JjZU5vcm0gfSBmcm9tIFwiLi9zcmMvUGh5c2ljL0dyYXZpdHlcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgIGNvbnN0IGVhcnRoID0gbmV3IFBsYW5ldChcbiAgICAgICAgXCJlYXJ0aCBhbG9yc1wiLFxuICAgICAgICBuZXcgVmVjdG9yMkQoMCwgMCksXG4gICAgICAgIHB4VG9LaWxvbWV0cmUoMTApLFxuICAgICAgICA1Ljk3MmUyNCxcbiAgICAgICAgXCJza3libHVlXCIsXG4gICAgICAgIC8vIHZlbG9jaXR5OiBbMCwgMF0sXG4gICAgICAgIG5ldyBWZWN0b3IyRCgwLCAwKSxcbiAgICAgICAgbnVsbFxuICAgICAgICAvLyB2ZWxvY2l0eTogbmV3IFZlY3RvcjJEKDAsIDApLFxuICAgICk7XG5cbiAgICBjb25zdCBtb29ubW9vbiA9IG5ldyBQbGFuZXQoXG4gICAgICAgIFwibW9vbm1vb25cIixcbiAgICAgICAgbmV3IFZlY3RvcjJEKDM4NDQwMCwgMCksXG4gICAgICAgIHB4VG9LaWxvbWV0cmUoMTApLFxuICAgICAgICA3LjM0NzY3MzA5ZTIyLFxuICAgICAgICBcInNreWJsdWVcIixcbiAgICAgICAgLy8gdmVsb2NpdHk6IFswLCAwXSxcbiAgICAgICAgbmV3IFZlY3RvcjJEKDAsIDEuMDIyKSxcbiAgICAgICAgbnVsbFxuICAgICAgICAvLyB2ZWxvY2l0eTogbmV3IFZlY3RvcjJEKDAsIDApLFxuICAgICk7XG5cbiAgICBjb25zdCBtb29uRm9yY2UgPSBnZXRGb3JjZU5vcm0oZWFydGgsIG1vb25tb29uKTtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhtb29uRm9yY2UsIG1vb25Gb3JjZSAvIG1vb25tb29uLm1hc3MpO1xufSIsImltcG9ydCBDb25maWcgZnJvbSBcIi4uL0NvbmZpZ1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbWVyYSB7XG4gICAgcHVibGljIHg6IG51bWJlciA9IDBcbiAgICBwdWJsaWMgeTogbnVtYmVyID0gMFxuICAgIHB1YmxpYyB6OiBudW1iZXIgPSAxXG5cbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMueCA9IHhcbiAgICAgICAgdGhpcy55ID0geVxuICAgICAgICB0aGlzLnogPSB6XG4gICAgfVxuXG4gICAgWCh4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy56VHJhbnNmb3JtKHggLSB0aGlzLngpXG4gICAgfVxuXG4gICAgWSh5OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy56VHJhbnNmb3JtKHkgLSB0aGlzLnkpXG4gICAgfVxuXG4gICAgelRyYW5zZm9ybSh2OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdiAqICgxIC8gdGhpcy56KVxuICAgIH1cblxuICAgIHJlbGF0aXZlWCh4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy54ICsgKHRoaXMueiAqIHgpXG4gICAgfVxuXG4gICAgcmVsYXRpdmVZKHk6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnkgKyAodGhpcy56ICogeSlcbiAgICB9XG5cbiAgICB1cCgpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMueSAtIENvbmZpZy5kZWNhbEJ5TW92ZSA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy55IC09IENvbmZpZy5kZWNhbEJ5TW92ZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgbGVmdCgpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMueCAtIENvbmZpZy5kZWNhbEJ5TW92ZSA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy54IC09IENvbmZpZy5kZWNhbEJ5TW92ZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmlnaHQoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLnggPj0gQ29uZmlnLnNwYWNlVykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMueCArPSBDb25maWcuZGVjYWxCeU1vdmU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGRvd24oKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLnkgPj0gQ29uZmlnLnNwYWNlSCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMueSArPSBDb25maWcuZGVjYWxCeU1vdmU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHpvb21JbigpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMueiA8PSBDb25maWcuem9vbU1pbikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMueiAtPSBDb25maWcuem9vbUFjdGlvblBvdztcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgem9vbU91dCgpOiBib29sZWFuIHtcbiAgICAgICAgdGhpcy56ICs9IENvbmZpZy56b29tQWN0aW9uUG93O1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59IiwiaW1wb3J0IEVudGl0eSBmcm9tIFwiLi4vRW50aXR5L0VudGl0eVwiXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi9Db250ZXh0XCJcbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4uL0NhbWVyYS9DYW1lcmFcIlxuaW1wb3J0IE5vZGUgZnJvbSBcIi4uL0VudGl0eS9Ob2RlXCJcbmltcG9ydCBWZWN0b3IyRCBmcm9tIFwiLi4vUGh5c2ljL1ZlY3RvcjJEXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIGV4dGVuZHMgTm9kZSB7XG4gICAgcmVhZG9ubHkgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudFxuICAgIHJlYWRvbmx5IGNvbnRleHQ6IENvbnRleHRcbiAgICBwdWJsaWMgZW50aXRpZXM6IEVudGl0eVtdID0gW11cblxuICAgIGNvbnN0cnVjdG9yKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBjYW1lcmE6IENhbWVyYSwgcHVibGljIGlkOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobmV3IFZlY3RvcjJEKDAsIDAsKSk7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKVxuICAgICAgICB0aGlzLmNhbnZhcy5pZCA9IHRoaXMuaWRcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aFxuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHRcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gbmV3IENvbnRleHQodGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpLCBjYW1lcmEsIHRoaXMpXG4gICAgfVxuXG4gICAgYXBwZW5kVG8oZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcylcbiAgICB9XG5cbiAgICB1cGRhdGUoZGVsdGE6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmVudGl0aWVzLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICBlLnVwZGF0ZShkZWx0YSlcbiAgICAgICAgICAgIGUuZHJhdyh0aGlzLmNvbnRleHQsIGRlbHRhKVxuICAgICAgICB9KVxuICAgIH1cbn0iLCJpbXBvcnQgTW9kZWwgZnJvbSBcIi4uL01vZGVsL01vZGVsXCI7XG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9DYW1lcmEvQ2FtZXJhXCI7XG5pbXBvcnQgQ2FudmFzIGZyb20gXCIuL0NhbnZhc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0IHtcbiAgICBjb25zdHJ1Y3RvciAoXG4gICAgICAgIHJlYWRvbmx5IGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgICAgICAgcmVhZG9ubHkgY2FtZXJhOiBDYW1lcmEsXG4gICAgICAgIHJlYWRvbmx5IGNhbnZhczogQ2FudmFzLFxuICAgICAgICApIHt9XG5cbiAgICBkcmF3KG1vZGVsOiBNb2RlbCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKClcbiAgICAgICAgbW9kZWwuZHJhdyh0aGlzKVxuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKClcbiAgICB9XG5cbiAgICBhcmMoeDogbnVtYmVyLCB5OiBudW1iZXIsIHI6IG51bWJlciwgYXM6IG51bWJlciwgYWU6IG51bWJlciwgbGluZVdpZHRoOiBudW1iZXIgPSAxKTogQ29udGV4dCB7XG4gICAgICAgIHRoaXMuY29udGV4dC5saW5lV2lkdGggPSBsaW5lV2lkdGhcbiAgICAgICAgdGhpcy5jb250ZXh0LmFyYyh0aGlzLmNhbWVyYS5YKHgpLCB0aGlzLmNhbWVyYS5ZKHkpLCB0aGlzLmNhbWVyYS56VHJhbnNmb3JtKHIpLCBhcywgYWUpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgd3JpdGUodGV4dDogc3RyaW5nLCB4OiBudW1iZXIsIHk6IG51bWJlciwgY29sb3I6IHN0cmluZywgZm9udFNpemU6IG51bWJlciwgZm9udEZhbWlseTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5mb250ID0gYCR7Zm9udFNpemV9cHggJHtmb250RmFtaWx5fWA7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KHRleHQsIHgsIHkpO1xuICAgIH1cblxuICAgIHN0cm9rZVJlY3QoeDogbnVtYmVyLCB5OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyLCBjb2xvcjogc3RyaW5nKTogQ29udGV4dCB7XG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlUmVjdCh0aGlzLmNhbWVyYS5YKHgpLCB0aGlzLmNhbWVyYS5ZKHkpLCB3LCBoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZmlsbFJlY3QoeDogbnVtYmVyLCB5OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyLCBjb2xvcjogc3RyaW5nKTogQ29udGV4dCB7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KHRoaXMuY2FtZXJhLlgoeCksIHRoaXMuY2FtZXJhLlkoeSksIHcsIGgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBsaW5lKGZyb21YOiBudW1iZXIsIGZyb21ZOiBudW1iZXIsIHRvWDogbnVtYmVyLCB0b1k6IG51bWJlciwgY29sb3I6IHN0cmluZywgbGluZVdpZHRoOiBudW1iZXIgPSAxKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5saW5lV2lkdGggPSBsaW5lV2lkdGg7XG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICAgICAgICB0aGlzLmNvbnRleHQubW92ZVRvKHRoaXMuY2FtZXJhLlgoZnJvbVgpLCB0aGlzLmNhbWVyYS5ZKGZyb21ZKSk7XG4gICAgICAgIHRoaXMuY29udGV4dC5saW5lVG8odGhpcy5jYW1lcmEuWCh0b1gpLCB0aGlzLmNhbWVyYS5ZKHRvWSkpO1xuICAgICAgICB0aGlzLmNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2UoKTtcbiAgICB9XG59XG5cbnR5cGUgRHJhd0Z1bmN0aW9uID0gKGN0eDogQ29udGV4dCkgPT4gdm9pZFxuXG5leHBvcnQge1xuICAgIERyYXdGdW5jdGlvblxufSIsImNvbnN0IGNEdXJhdGlvbiA9IDBcbmNvbnN0IGZwcyA9IDYwXG5jb25zdCBtaWxsaVNlY29uZHNQZXJGcmFtZSA9IDEgLyBmcHNcbmxldCB6b29tTGV2ZWwgPSAyLjVcbmxldCB6b29tTWluID0gMC4xXG5jb25zdCB6b29tQWN0aW9uUG93ID0gMC4xMFxuY29uc3QgZGVjYWxCeU1vdmUgPSAyNVxuXG5sZXQgbWF4UGxhbmV0cyA9IDRcbmxldCBwbGFuZXRzUmFkaXVzRGVmID0ge21pbjogMywgbWF4OiA3MH1cbmNvbnN0IHBsYW5ldHNNaW5EaXN0ID0gMTBcbmNvbnN0IHBsYW5ldEJhc2VTcGVlZCA9IDQwXG5cbmNvbnN0IHNwYWNlVyA9IDEwMDAwXG5jb25zdCBzcGFjZUggPSAxMDAwMFxuY29uc3QgZGVjYWxYID0gc3BhY2VXIC8gMlxuY29uc3QgZGVjYWxZID0gc3BhY2VIIC8gMlxuXG5jb25zdCBkaXN0UG93ID0gNVxuXG5jb25zdCBmb250U2l6ZSA9IDE0XG5sZXQgZGVidWcgPSBudWxsXG5jb25zdCBlYXJ0aFNwZWVkID0gMjkuNzggLy8ga20vc1xuY29uc3QgRyA9IDYuNjc0ZS0xMVxuXG5lbnVtIFBsYXlNb2RlIHtcbiAgICBQTEFZLFxuICAgIFBBVVNFXG59XG5cbmNvbnN0IG1vZGUgPSBQbGF5TW9kZS5QTEFZXG4vLyBjb25zdCBrbVBlclB4ID0gMS4zZTVcbmNvbnN0IGttUGVyUHggPSAxLjhlNVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZ2FtZVNwZWVkOiAzNjUgKiAyNCAqIDYwICogNjAgLyA0LFxuICAgIC8vIGdhbWVTcGVlZDogMTAwLFxuICAgIGttUGVyUHgsXG4gICAgbVBlclB4OiBrbVBlclB4ICogMTAwMCxcbiAgICBrZ1BlclB4RGVuc2l0eTogMTIwMCxcbiAgICBHLFxuICAgIGNEdXJhdGlvbixcbiAgICBmcHMsXG4gICAgem9vbUxldmVsLFxuICAgIHpvb21BY3Rpb25Qb3csXG4gICAgZGVjYWxCeU1vdmUsXG4gICAgbWF4UGxhbmV0cyxcbiAgICBwbGFuZXRzUmFkaXVzRGVmLFxuICAgIHBsYW5ldHNNaW5EaXN0LFxuICAgIHBsYW5ldEJhc2VTcGVlZCxcbiAgICBzcGFjZVcsXG4gICAgc3BhY2VILFxuICAgIGRlY2FsWCxcbiAgICBkZWNhbFksXG4gICAgZGlzdFBvdyxcbiAgICBmb250U2l6ZSxcbiAgICBkZWJ1ZyxcbiAgICBQbGF5TW9kZSxcbiAgICBtb2RlLFxuICAgIHpvb21NaW4sXG4gICAgZWFydGhTcGVlZCxcbiAgICBtaWxsaVNlY29uZHNQZXJGcmFtZVxufSIsImltcG9ydCBDYW1lcmEgZnJvbSBcIi4uL0NhbWVyYS9DYW1lcmFcIjtcblxuY29uc3QgaWRGdW5jczogeyBba2V5OiBzdHJpbmddOiAoY2FtZXJhOiBDYW1lcmEpID0+IHZvaWQgfSA9IHtcbiAgICBcIiNidG4tdXBcIjogKGNhbWVyYTogQ2FtZXJhKSA9PiBjYW1lcmEudXAoKSxcbiAgICBcIiNidG4tZG93blwiOiAoY2FtZXJhOiBDYW1lcmEpID0+IGNhbWVyYS5kb3duKCksXG4gICAgXCIjYnRuLWxlZnRcIjogKGNhbWVyYTogQ2FtZXJhKSA9PiBjYW1lcmEubGVmdCgpLFxuICAgIFwiI2J0bi1yaWdodFwiOiAoY2FtZXJhOiBDYW1lcmEpID0+IGNhbWVyYS5yaWdodCgpLFxuICAgIFwiI3pvb20taW5cIjogKGNhbWVyYTogQ2FtZXJhKSA9PiBjYW1lcmEuem9vbUluKCksXG4gICAgXCIjem9vbS1vdXRcIjogKGNhbWVyYTogQ2FtZXJhKSA9PiBjYW1lcmEuem9vbU91dCgpLFxufVxuXG5sZXQgaW50ZXJ2YWxTZWVkOiBOb2RlSlMuVGltZW91dCA9IG51bGw7XG5cbmNvbnN0IENvbnRyb2xzID0gKGNhbWVyYTogQ2FtZXJhKSA9PiB7XG4gICAgZm9yIChjb25zdCBpZCBpbiBpZEZ1bmNzKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbFNlZWQpKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoKSA9PiB7XG4gICAgICAgICAgICBpbnRlcnZhbFNlZWQgPSBzZXRJbnRlcnZhbCgoKSA9PiBpZEZ1bmNzW2lkXShjYW1lcmEpLCAxMDApO1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbHM7IiwiaW1wb3J0IENhbWVyYSBmcm9tIFwiLi4vQ2FtZXJhL0NhbWVyYVwiXG5pbXBvcnQgQ29uZmlnIGZyb20gXCIuLi9Db25maWdcIlxuaW1wb3J0IENhbnZhcyBmcm9tIFwiLi4vQ2FudmFzL0NhbnZhc1wiXG5pbXBvcnQgeyB0b2dnbGVQYXVzZSB9IGZyb20gXCIuLi8uLi9pbmRleFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleWJvYXJkIHtcbiAgICBwdWJsaWMgYWN0aW9uQnlLZXljb2RlOiB7W2tleTogbnVtYmVyXTogRnVuY3Rpb259XG5cbiAgICBjb25zdHJ1Y3RvcihyZWFkb25seSBjYW1lcmE6IENhbWVyYSwgcmVhZG9ubHkgY2FudmFzOiBDYW52YXMpIHtcbiAgICAgICAgdGhpcy5hY3Rpb25CeUtleWNvZGUgPSB7XG4gICAgICAgICAgICAvLyA2ODogKCkgPT4ge2RlYnVnLlRvZ2dsZSgpO30sXG4gICAgICAgICAgICAvLyA4MzogKCkgPT4ge21vZGUgPSBtb2RlID09IFBBVVNFID8gUExBWSA6IFBBVVNFO30sXG4gICAgICAgICAgICA4MDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRvZ2dsZVBhdXNlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgODI6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS54ID0gMFxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnkgPSAwXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEueiA9IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA5MDogKCkgPT4gdGhpcy5jYW1lcmEuem9vbUluKCksXG4gICAgICAgICAgICA4ODogKCkgPT4gdGhpcy5jYW1lcmEuem9vbU91dCgpLFxuICAgICAgICAgICAgMzc6ICgpID0+IHRoaXMuY2FtZXJhLmxlZnQoKSxcbiAgICAgICAgICAgIDM4OiAoKSA9PiB0aGlzLmNhbWVyYS51cCgpLFxuICAgICAgICAgICAgMzk6ICgpID0+IHRoaXMuY2FtZXJhLnJpZ2h0KCksXG4gICAgICAgICAgICA0MDogKCkgPT4gdGhpcy5jYW1lcmEuZG93bigpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVLZXlib2FyZChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5hY3Rpb25CeUtleWNvZGUgPT0gdW5kZWZpbmVkIHx8IFxuICAgICAgICAgICAgIXRoaXMuYWN0aW9uQnlLZXljb2RlW2V2ZW50LmtleUNvZGVdKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hY3Rpb25CeUtleWNvZGVbZXZlbnQua2V5Q29kZV0oKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW91c2Uge1xuICAgIHByb3RlY3RlZCBjbGlja0NiOiAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHZvaWRcbiAgICBvbkNsaWNrKGNiOiAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHZvaWQpIHtcbiAgICAgICAgdGhpcy5jbGlja0NiID0gY2I7XG4gICAgfVxuXG4gICAgaGFuZGxlTW91c2UoZTogTW91c2VFdmVudCkge1xuICAgICAgICB0aGlzLmNsaWNrQ2IoZS54LCBlLnkpO1xuICAgIH1cbn0iLCJpbXBvcnQgS2V5Ym9hcmQgZnJvbSBcIi4vS2V5Ym9hcmRcIjtcbmltcG9ydCBNb3VzZSBmcm9tIFwiLi9Nb3VzZVwiO1xuXG5leHBvcnQge1xuICAgIEtleWJvYXJkLFxuICAgIE1vdXNlLFxufSIsImltcG9ydCBFbnRpdHkgZnJvbSBcIi4vRW50aXR5XCJcbmltcG9ydCBDb250ZXh0IGZyb20gXCIuLi9DYW52YXMvQ29udGV4dFwiXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSBcIi4uL1BoeXNpYy9WZWN0b3IyRFwiXG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIE5vZGUgaW1wbGVtZW50cyBFbnRpdHkge1xuICAgIHByb3RlY3RlZCBlbnRpdGllczogRW50aXR5W10gPSBbXVxuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNvb3JkczogVmVjdG9yMkQpIHt9XG5cbiAgICB1cGRhdGUoZGVsdGE6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmVudGl0aWVzLmZvckVhY2goZSA9PiBlLnVwZGF0ZShkZWx0YSkpO1xuICAgIH1cblxuICAgIGRyYXcoY29udGV4dDogQ29udGV4dCwgZGVsdGE/OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbnRpdGllcy5mb3JFYWNoKGUgPT4gZS5kcmF3KGNvbnRleHQsIGRlbHRhKSk7XG4gICAgfVxuXG4gICAgYWRkRW50aXR5KGVudGl0eTogRW50aXR5KTogdGhpcyB7XG4gICAgICAgIHRoaXMuZW50aXRpZXMucHVzaChlbnRpdHkpXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldENvb3JkaW5hdGVzKCk6IFZlY3RvcjJEIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29vcmRzO1xuICAgIH1cblxuICAgIGdldFNpemVzKCk6IFZlY3RvcjJEIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyRCgwLCAwKTtcbiAgICB9XG59IiwiaW1wb3J0IHsga2lsb21ldHJlVG9QeCB9IGZyb20gXCIuLi8uLi9Vbml0L0Rpc3RhbmNlXCI7XG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi4vLi4vQ2FudmFzL0NvbnRleHRcIjtcbmltcG9ydCBFbnRpdHkgZnJvbSBcIi4uLy4uL0VudGl0eS9FbnRpdHlcIjtcbmltcG9ydCBWZWN0b3IyRCBmcm9tIFwiLi4vLi4vUGh5c2ljL1ZlY3RvcjJEXCI7XG5pbXBvcnQgUGxhbmV0IGZyb20gXCIuLi8uLi9QbGFuZXRcIjtcbmltcG9ydCBUZXh0IGZyb20gXCIuLi9Db250YWluZXIvVGV4dFwiO1xuaW1wb3J0IE5vZGUgZnJvbSBcIi4uLy4uL0VudGl0eS9Ob2RlXCI7XG5cbmxldCBpdCA9IDA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYW5ldFN0YXRzIHtcbiAgICBwcm90ZWN0ZWQgbG9jYWxJdDogbnVtYmVyID0gMDtcbiAgICBjb25zdHJ1Y3RvcihyZWFkb25seSBwbGFuZXQ6IFBsYW5ldCkge1xuICAgICAgICB0aGlzLmxvY2FsSXQgPSBpdDtcbiAgICAgICAgaXQrKztcbiAgICB9XG5cbiAgICBkcmF3KGNvbnRleHQ6IENvbnRleHQpIHtcbiAgICAgICAgY29uc3Qgd2luZG93VyA9IDI0MDtcbiAgICAgICAgY29uc3Qgd2luZG93SCA9IDIwMDtcbiAgICAgICAgY29uc3QgZmxvYXRGaXggPSA2O1xuICAgICAgICBuZXcgVGV4dChcbiAgICAgICAgICAgIG5ldyBWZWN0b3IyRCgyMCwgMjAgKyAod2luZG93SCAqIHRoaXMubG9jYWxJdCkpLFxuICAgICAgICAgICAgbmV3IFZlY3RvcjJEKHdpbmRvd1csIHdpbmRvd0gpLFxuICAgICAgICAgICAgdGhpcy5wbGFuZXQuY29sb3IsXG4gICAgICAgICAgICAyMFxuICAgICAgICApLnNldExpbmVzKFtcbiAgICAgICAgICAgIGA+ICR7dGhpcy5wbGFuZXQuaWR9YCxcbiAgICAgICAgICAgIGAgIG1hc3M6ICR7dGhpcy5wbGFuZXQubWFzc30ga2dgLFxuICAgICAgICAgICAgJyAgdmVsb2NpdHkgKGttL3MpOicsXG4gICAgICAgICAgICBgICAgIHg6ICR7dGhpcy5wbGFuZXQudmVsb2NpdHkueCA+IDAgPyBcIiBcIiA6IFwiXCJ9JHt0aGlzLnBsYW5ldC52ZWxvY2l0eS54LnRvRml4ZWQoZmxvYXRGaXgpfWAsXG4gICAgICAgICAgICBgICAgIHk6ICR7dGhpcy5wbGFuZXQudmVsb2NpdHkueSA+IDAgPyBcIiBcIiA6IFwiXCJ9JHt0aGlzLnBsYW5ldC52ZWxvY2l0eS55LnRvRml4ZWQoZmxvYXRGaXgpfWAsXG4gICAgICAgICAgICBgICAgIG46ICAke3RoaXMucGxhbmV0LnZlbG9jaXR5LmdldE5vcm0oKS50b0ZpeGVkKGZsb2F0Rml4KX1gLFxuICAgICAgICAgICAgJyAgY29vcmRpbmF0ZXMgKHB4KTonLFxuICAgICAgICAgICAgYCAgICB4OiAkeyBraWxvbWV0cmVUb1B4KHRoaXMucGxhbmV0LmdldENvb3JkaW5hdGVzKCkueCkudG9GaXhlZCgyKX1gLFxuICAgICAgICAgICAgYCAgICB5OiAkeyBraWxvbWV0cmVUb1B4KHRoaXMucGxhbmV0LmdldENvb3JkaW5hdGVzKCkueSkudG9GaXhlZCgyKX1gLFxuICAgICAgICBdKS5kcmF3KGNvbnRleHQpO1xuICAgIH1cbn1cblxuY2xhc3MgcmVzZXRJdCBleHRlbmRzIE5vZGUgaW1wbGVtZW50cyBFbnRpdHkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihuZXcgVmVjdG9yMkQoMCwgMCwpKTtcbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpdCA9IDA7XG4gICAgfVxuXG4gICAgZHJhdygpIHt9XG59XG5cbmV4cG9ydCB7XG4gICAgcmVzZXRJdFxufTsiLCJpbXBvcnQgQ29udGV4dCBmcm9tIFwiLi4vLi4vQ2FudmFzL0NvbnRleHRcIlxuaW1wb3J0IEVudGl0eSBmcm9tIFwiLi4vLi4vRW50aXR5L0VudGl0eVwiXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSBcIi4uLy4uL1BoeXNpYy9WZWN0b3IyRFwiXG5pbXBvcnQgQmxvY2sgZnJvbSBcIi4vQ29udGFpbmVyXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzaWMgaW1wbGVtZW50cyBCbG9jaywgRW50aXR5IHtcbiAgICBwdWJsaWMgZGVjYWxYOiBudW1iZXIgPSAwXG4gICAgcHVibGljIGRlY2FsWTogbnVtYmVyID0gMFxuICAgIHB1YmxpYyBlbnRpdGllczogRW50aXR5W11cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICByZWFkb25seSBjb29yZHM6IFZlY3RvcjJELFxuICAgICAgICByZWFkb25seSBzaXplczogVmVjdG9yMkQsXG4gICAgICAgIHB1YmxpYyBjb2xvcjogc3RyaW5nID0gXCIjZmZmZmZmXCIsXG4gICAgICAgIHB1YmxpYyBmb250U2l6ZTogbnVtYmVyID0gMTQsXG4gICAgICAgIHB1YmxpYyBmb250RmFtaWx5OiBzdHJpbmcgPSBcIlZlcmRhbmFcIlxuICAgICkge1xuICAgIH1cblxuICAgIHNldERlY2FsKGRlY2FsWDogbnVtYmVyLCBkZWNhbFk6IG51bWJlcik6IEJsb2NrIHtcbiAgICAgICAgdGhpcy5kZWNhbFggPSBkZWNhbFg7XG4gICAgICAgIHRoaXMuZGVjYWxZID0gZGVjYWxZO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXRDb29yZGluYXRlcygpOiBWZWN0b3IyRCB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMkQoK3RoaXMuY29vcmRzLnggKyB0aGlzLmRlY2FsWCwgK3RoaXMuY29vcmRzLnkgKyB0aGlzLmRlY2FsWSk7XG4gICAgfVxuXG4gICAgZ2V0Q29sb3IoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sb3JcbiAgICB9XG5cbiAgICBnZXRTaXplcygpOiBWZWN0b3IyRCB7XG4gICAgICAgIHJldHVybiB0aGlzLnNpemVzO1xuICAgIH1cblxuICAgIGdldEZvbnRTaXplKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvbnRTaXplO1xuICAgIH1cblxuICAgIGdldEZvbnRGYW1pbHkoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9udEZhbWlseTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKTogdm9pZCB7fVxuXG4gICAgZHJhdyhjb250ZXh0OiBDb250ZXh0KTogdm9pZCB7XG4gICAgICAgIHRoaXMuZW50aXRpZXMuZm9yRWFjaChlbnRpdHkgPT4gZW50aXR5LmRyYXcoY29udGV4dCkpO1xuICAgIH1cblxuICAgIGdldEVudGl0aWVzKCk6IEVudGl0eVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50aXRpZXM7XG4gICAgfVxufSIsImltcG9ydCBDb250ZXh0IGZyb20gXCIuLi8uLi9DYW52YXMvQ29udGV4dFwiO1xuaW1wb3J0IEJsb2NrIGZyb20gXCIuL0Jsb2NrXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHQgZXh0ZW5kcyBCbG9jayB7XG4gICAgcHJvdGVjdGVkIGxpbmVzOiBzdHJpbmdbXSA9IFtdXG4gICAgXG4gICAgYWRkTGluZSh0ZXh0OiBzdHJpbmcpOiBUZXh0IHtcbiAgICAgICAgdGhpcy5saW5lcy5wdXNoKHRleHQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRMaW5lcyhsaW5lczogc3RyaW5nW10pOiBUZXh0IHtcbiAgICAgICAgdGhpcy5saW5lcyA9IGxpbmVzO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzaG91bGRCcmVha0xpbmUod2lkdGg6IG51bWJlciwgbGluZTogc3RyaW5nLCBjdHg6IENvbnRleHQpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGN0eC5jb250ZXh0Lm1lYXN1cmVUZXh0KGxpbmUpLndpZHRoID4gd2lkdGg7XG4gICAgfVxuXG4gICAgYnJlYWtMaW5lKHdpZHRoOiBudW1iZXIsIGxpbmU6IHN0cmluZywgY3R4OiBDb250ZXh0KTogc3RyaW5nW10ge1xuICAgICAgICBpZiAoIXRoaXMuc2hvdWxkQnJlYWtMaW5lKHdpZHRoLCBsaW5lLCBjdHgpKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGxpbmVzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICAvLyBicmVhayBmb3IgL25cbiAgICAgICAgbGluZS5zcGxpdChcIlxcblwiKS5mb3JFYWNoKChsOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIC8vIGZ1bGwgc2l6ZSBvZiBsaW5lXG4gICAgICAgICAgICBjb25zdCB0ZXh0V2lkdGggPSBjdHguY29udGV4dC5tZWFzdXJlVGV4dChsKS53aWR0aDtcbiAgICAgICAgICAgIC8vIHNpemUgb2YgYSBjaGFyYWN0ZXIsIHJvdW5kZWQgdG8gY2xvc2VzdCBncmVhdGVyIGludGVnZXJcbiAgICAgICAgICAgIGNvbnN0IGNoYXJTID0gTWF0aC5jZWlsKHRleHRXaWR0aCAvIGwubGVuZ3RoKTtcbiAgICAgICAgICAgIC8vIG51bWJlciBvZiBjaGFyIHBlciBsaW5lLCByb3VuZGVkIHRvIHRoZSBjbG9zZXN0IGxvd2VyIGludGVnZXJcbiAgICAgICAgICAgIGNvbnN0IGNoYXJQZXJMaW5lID0gTWF0aC5mbG9vcih3aWR0aCAvIGNoYXJTKTtcbiAgICAgICAgICAgIC8vIHJlbGF0aXZlIHdpZHRoLCB1c2luZyBhYm92ZSBhcHByb3hpbWF0aW9uc1xuICAgICAgICAgICAgY29uc3QgcmVsYXRpdmVXaWR0aCA9IGNoYXJQZXJMaW5lICogY2hhclM7XG4gICAgICAgICAgICAvLyBudW1iZXIgb2YgbGluZXMgd2Ugc2hvdWxkIGJyZWFrIGludG8uXG4gICAgICAgICAgICAvLyBtaW4obikgPSAxO1xuICAgICAgICAgICAgY29uc3QgbiA9IE1hdGguY2VpbCh0ZXh0V2lkdGggLyByZWxhdGl2ZVdpZHRoKTtcbiAgICAgICAgICAgIC8vIGN5Y2xlIG92ZXIgbnVtYmVyIG9mIGxpbmVzXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgIGxpbmVzLnB1c2gobC5zbGljZShjaGFyUGVyTGluZSppLCBjaGFyUGVyTGluZSooaSsxKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiBsaW5lcztcbiAgICB9XG5cbiAgICB3cml0ZUxpbmVzKFxuICAgICAgICBsaW5lczogc3RyaW5nW10sXG4gICAgICAgIHg6IG51bWJlcixcbiAgICAgICAgeTogbnVtYmVyLFxuICAgICAgICB3OiBudW1iZXIsXG4gICAgICAgIGg6IG51bWJlcixcbiAgICAgICAgZm9udFNpemU6IG51bWJlcixcbiAgICAgICAgY29sb3I6IHN0cmluZyxcbiAgICAgICAgZm9udEZhbWlseTogc3RyaW5nLFxuICAgICAgICBpT3ZlcmxvYWQ6IG51bWJlcixcbiAgICAgICAgY3R4OiBDb250ZXh0XG4gICAgKSB7XG4gICAgICAgIGxpbmVzLmZvckVhY2goKGxpbmU6IHN0cmluZywgaTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBibCA9IHRoaXMuYnJlYWtMaW5lKHcsIGxpbmUsIGN0eCk7XG4gICAgICAgICAgICBpZiAoYmwubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMud3JpdGVMaW5lcyhcbiAgICAgICAgICAgICAgICAgICAgYmwsXG4gICAgICAgICAgICAgICAgICAgIHgsXG4gICAgICAgICAgICAgICAgICAgIHksXG4gICAgICAgICAgICAgICAgICAgIHcsXG4gICAgICAgICAgICAgICAgICAgIGgsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseSxcbiAgICAgICAgICAgICAgICAgICAgaSArIGlPdmVybG9hZCxcbiAgICAgICAgICAgICAgICAgICAgY3R4XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAvLyAtMSBiZWNhdXNlIHRoZSBcImlcIiBvZiB0aGlzIGl0ZXJhdGlvbiB3YXMgbm90IHVzZWQgdG8gd3JpdGUgYVxuICAgICAgICAgICAgICAgIC8vIGxpbmUgYXMgaXQgc2hvdWxkIChjYW52YXNZIHVuZGVyKSwgYnV0IGFzIGFuIG92ZXJsb2FkIHZhbHVlXG4gICAgICAgICAgICAgICAgLy8gdG8gd3JpdGUgYnJva2VuIGxpbmVzLiBBbmQgXCJpXCIgd2lsbCBzdGlsbCBpbmNyZW1lbnQgYnkgMVxuICAgICAgICAgICAgICAgIC8vIGJlY2F1c2Ugb2YgZm9yRWFjaC5cbiAgICAgICAgICAgICAgICAvLyBBbmQgc2luY2UgaU92ZXJsb2FkIGlzIHVzZWQgdW5kZXIgdG8gY29tcHV0ZSBjYW52YXNZLCB3ZVxuICAgICAgICAgICAgICAgIC8vIGNhbiBjYW5jZWwgdGhhdCBlbXB0eSBcImlcIiBpdGVyYXRpb24gaGVyZS5cbiAgICAgICAgICAgICAgICBpT3ZlcmxvYWQgKz0gYmwubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjYW52YXNZID0geSArIChmb250U2l6ZSAqIChpICsgaU92ZXJsb2FkKSk7XG4gICAgICAgICAgICBjb25zdCBjYW52YXNYID0geDtcbiAgICAgICAgICAgIGN0eC53cml0ZShsaW5lLCBjYW52YXNYLCBjYW52YXNZLCBjb2xvciwgZm9udFNpemUsIGZvbnRGYW1pbHkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkcmF3KGN0eDogQ29udGV4dCkge1xuICAgICAgICAvLyBjYW52YXNUeHQuZm9udFNpemUgPSB0aGlzLmdldEZvbnRTaXplKCk7XG4gICAgICAgIGNvbnN0IHt4LCB5fSA9IHRoaXMuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICAgICAgY29uc3Qge3g6IHcsIHk6IGh9ID0gdGhpcy5nZXRTaXplcygpO1xuXG4gICAgICAgIHRoaXMud3JpdGVMaW5lcyh0aGlzLmxpbmVzLCB4LCB5LCB3LCBoLCB0aGlzLmdldEZvbnRTaXplKCksIHRoaXMuZ2V0Q29sb3IoKSwgXCJWZXJkYW5hXCIsIDAsIGN0eCk7XG4gICAgfVxufSIsImltcG9ydCBDb250ZXh0IGZyb20gXCIuLi9DYW52YXMvQ29udGV4dFwiXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSBcIi4uL1BoeXNpYy9WZWN0b3IyRFwiXG5pbXBvcnQgeyBraWxvbWV0cmVUb1B4IH0gZnJvbSBcIi4uL1VuaXQvRGlzdGFuY2VcIlxuaW1wb3J0IE1vZGVsIGZyb20gXCIuL01vZGVsXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzYyBpbXBsZW1lbnRzIE1vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY29vcmRzOiBWZWN0b3IyRCwgcHVibGljIHJhZGl1czogbnVtYmVyLCBwdWJsaWMgY29sb3I6IHN0cmluZykge31cblxuICAgIGRyYXcoY3R4OiBDb250ZXh0KSB7XG4gICAgICAgIGN0eC5jb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5jb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LmFyYyhraWxvbWV0cmVUb1B4KHRoaXMuY29vcmRzLngpLCBraWxvbWV0cmVUb1B4KHRoaXMuY29vcmRzLnkpLCBraWxvbWV0cmVUb1B4KHRoaXMucmFkaXVzKSwgMCwgMiAqIE1hdGguUEkpXG4gICAgICAgIGN0eC5jb250ZXh0LmZpbGwoKTtcbiAgICAgICAgY3R4LmNvbnRleHQuc3Ryb2tlKCk7XG4gICAgfVxuXG4gICAgZ2V0Q29vcmRpbmF0ZXMoKTogVmVjdG9yMkQge1xuICAgICAgICByZXR1cm4gdGhpcy5jb29yZHM7XG4gICAgfVxuXG4gICAgc2V0Q29vcmRpbmF0ZXMoY29vcmRzOiBWZWN0b3IyRCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvb3JkcyA9IGNvb3JkcztcbiAgICB9XG59IiwiaW1wb3J0IFBsYW5ldCBmcm9tIFwiLi4vUGxhbmV0XCJcbmltcG9ydCBDb25maWcgZnJvbSBcIi4uL0NvbmZpZ1wiXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSBcIi4vVmVjdG9yMkRcIlxuXG5jb25zdCBnZXRGb3JjZSA9IChhOiBQbGFuZXQsIGI6IFBsYW5ldCk6IFZlY3RvcjJEID0+IHtcbiAgICAvLyBjb25zdCBkaXN0ID0gR2VvbWV0cnkuZ2V0RGlzdGFuY2VCZXR3ZWVuT2JqZWN0cyhhLmNvb3JkcywgYi5jb29yZHMpXG4gICAgY29uc3QgcjIxX3YgPSBiLmdldENvb3JkaW5hdGVzKCkuc3ViKGEuZ2V0Q29vcmRpbmF0ZXMoKSlcbiAgICBjb25zdCBkaXN0ID0gTWF0aC5zcXJ0KChyMjFfdi54KnIyMV92LnggKiAxMDAwKSArIChyMjFfdi55KnIyMV92LnkgKiAxMDAwKSlcbiAgICBjb25zdCBmID0gKENvbmZpZy5HICogYS5tYXNzICogYi5tYXNzKSAvIChkaXN0ICogZGlzdClcbiAgICBjb25zdCBmMjFfdiA9IHIyMV92LmRpdmlkZShkaXN0KS5kb3QoZilcbiAgICByZXR1cm4gZjIxX3Zcbn1cblxuY29uc3QgZ2V0Rm9yY2VOb3JtID0gKGE6IFBsYW5ldCwgYjogUGxhbmV0KTogbnVtYmVyID0+IHtcbiAgICBjb25zdCBkaXN0ID0gTWF0aC5zcXJ0KE1hdGgucG93KGEuZ2V0Q29vcmRpbmF0ZXMoKS5nZXROb3JtKCkgLSBiLmdldENvb3JkaW5hdGVzKCkuZ2V0Tm9ybSgpLCAyKSkgKiAxMDAwO1xuICAgIHJldHVybiAoQ29uZmlnLkcgKiBhLm1hc3MgKiBiLm1hc3MpIC8gKGRpc3QgKiBkaXN0KVxufVxuXG5leHBvcnQge1xuICAgIGdldEZvcmNlLFxuICAgIGdldEZvcmNlTm9ybSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGE6IFBsYW5ldCwgYjogUGxhbmV0KTogVmVjdG9yMkQgPT4ge1xuICAgIHJldHVybiBnZXRGb3JjZShhLCBiKS5kaXZpZGUoYS5tYXNzKVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlY3RvcjJEIHtcbiAgICBjb25zdHJ1Y3RvciAocHVibGljIHg6IG51bWJlciwgcHVibGljIHk6IG51bWJlcikge31cblxuICAgIHN1Yih2ZWM6IFZlY3RvcjJEIHwgbnVtYmVyKTogVmVjdG9yMkQge1xuICAgICAgICBpZiAodHlwZW9mIHZlYyA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdmVjID0gbmV3IFZlY3RvcjJEKHZlYywgdmVjKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMkQodGhpcy54LXZlYy54LCB0aGlzLnktdmVjLnkpXG4gICAgfVxuXG4gICAgLy8gZG90IHByb2R1Y3RcbiAgICBkb3QodmVjOiBWZWN0b3IyRCB8IG51bWJlcik6IFZlY3RvcjJEIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2ZWMgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHZlYyA9IG5ldyBWZWN0b3IyRCh2ZWMsIHZlYylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjJEKHRoaXMueCAqIHZlYy54LCB0aGlzLnkgKiB2ZWMueSlcbiAgICB9XG5cbiAgICBzdW0odmVjOiBWZWN0b3IyRCB8IG51bWJlcik6IFZlY3RvcjJEIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2ZWMgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHZlYyA9IG5ldyBWZWN0b3IyRCh2ZWMsIHZlYylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjJEKHRoaXMueCArIHZlYy54LCB0aGlzLnkgKyB2ZWMueSlcbiAgICB9XG5cbiAgICBkaXZpZGUodmVjOiBWZWN0b3IyRCB8IG51bWJlcik6IFZlY3RvcjJEIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2ZWMgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHZlYyA9IG5ldyBWZWN0b3IyRCh2ZWMsIHZlYylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjJEKHRoaXMueCAvIHZlYy54LCB0aGlzLnkgLyB2ZWMueSlcbiAgICB9XG5cbiAgICBub3JtYWxpemUgKG51bWJlcjogbnVtYmVyKTogVmVjdG9yMkQge1xuICAgICAgICByZXR1cm4gdGhpcy5kb3QobmV3IFZlY3RvcjJEKG51bWJlciwgbnVtYmVyKSlcbiAgICB9XG5cbiAgICBjbG9uZSgpOiBWZWN0b3IyRCB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMkQodGhpcy54LCB0aGlzLnkpXG4gICAgfVxuXG4gICAgaW5zaWRlT25SYWRpdXModHJpYWw6IFZlY3RvcjJELCByYWRpdXM6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gTWF0aC5wb3codHJpYWwueCAtIHRoaXMueCwgMikgKyBNYXRoLnBvdyh0cmlhbC55IC0gdGhpcy55LCAyKSA8PSBNYXRoLnBvdyhyYWRpdXMsIDIpO1xuICAgIH1cblxuICAgIGdldE5vcm0oKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh0aGlzLngsIDIpICsgTWF0aC5wb3codGhpcy55LCAyKSk7XG4gICAgfVxufSIsImltcG9ydCBDb250ZXh0IGZyb20gXCIuL0NhbnZhcy9Db250ZXh0XCJcbmltcG9ydCBEaXNjIGZyb20gXCIuL01vZGVsL0Rpc2NcIlxuaW1wb3J0IGdldEdyYXZpdHlBY2MgZnJvbSBcIi4vUGh5c2ljL0dyYXZpdHlcIlxuaW1wb3J0IE5vZGUgZnJvbSBcIi4vRW50aXR5L05vZGVcIlxuaW1wb3J0IFZlY3RvcjJEIGZyb20gXCIuL1BoeXNpYy9WZWN0b3IyRFwiXG5pbXBvcnQgUGxhbmV0U3RhdHMgZnJvbSBcIi4vTWVudS9Db21wb25lbnQvUGxhbmV0U3RhdHNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGFuZXQgZXh0ZW5kcyBOb2RlIHtcbiAgICAvLyBwdWJsaWMgbW9kZWw6IERpc2NcbiAgICBwdWJsaWMgbW9kZWw6IERpc2NcbiAgICBwcm90ZWN0ZWQgc3RhdHM6IFBsYW5ldFN0YXRzXG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGlkOiBzdHJpbmcsXG4gICAgICAgIGNvb3JkczogVmVjdG9yMkQsXG4gICAgICAgIHJlYWRvbmx5IHJhZGl1czogbnVtYmVyLFxuICAgICAgICByZWFkb25seSBtYXNzOiBudW1iZXIsXG4gICAgICAgIHJlYWRvbmx5IGNvbG9yOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyB2ZWxvY2l0eTogVmVjdG9yMkQsXG4gICAgICAgIHJlYWRvbmx5IHBsYW5ldHM6IFBsYW5ldFtdXG4gICAgICAgICkge1xuICAgICAgICAgICAgc3VwZXIoY29vcmRzKTtcbiAgICAgICAgICAgIHRoaXMubW9kZWwgPSBuZXcgRGlzYyh0aGlzLmNvb3JkcywgdGhpcy5yYWRpdXMsIHRoaXMuY29sb3IpO1xuICAgICAgICAgICAgdGhpcy5zdGF0cyA9IG5ldyBQbGFuZXRTdGF0cyh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgdXBkYXRlKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaWQgPT0gXCJlYXJ0aCBhbG9yc1wiKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNvb3JkcylcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMucGxhbmV0cykge1xuICAgICAgICAgICAgY29uc3Qgb3RoZXIgPSB0aGlzLnBsYW5ldHNbaV07XG5cbiAgICAgICAgICAgIGlmIChvdGhlci5pZCA9PSB0aGlzLmlkKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5ID0gdGhpcy52ZWxvY2l0eS5zdW0oZ2V0R3Jhdml0eUFjYyh0aGlzLCBvdGhlcikpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29vcmRzID0gdGhpcy5jb29yZHMuc3VtKHRoaXMudmVsb2NpdHkubm9ybWFsaXplKGRlbHRhKSk7XG4gICAgICAgIHRoaXMubW9kZWwuY29vcmRzID0gdGhpcy5jb29yZHM7XG4gICAgICAgIHN1cGVyLnVwZGF0ZShkZWx0YSk7XG4gICAgfVxuXG4gICAgZHJhdyhjb250ZXh0OiBDb250ZXh0KTogdm9pZCB7XG4gICAgICAgIGNvbnRleHQuZHJhdyh0aGlzLm1vZGVsKTtcbiAgICAgICAgdGhpcy5zdGF0cy5kcmF3KGNvbnRleHQpO1xuICAgICAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuICAgIH1cblxuICAgIHNldENvb3JkaW5hdGVzKGNvb3JkczogVmVjdG9yMkQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb29yZHMgPSBjb29yZHM7XG4gICAgfVxuXG4gICAgZ2V0U2l6ZXMoKTogVmVjdG9yMkQge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjJEKHRoaXMucmFkaXVzKjIsIHRoaXMucmFkaXVzKjIpO1xuICAgIH1cbn0iLCJpbXBvcnQgRW50aXR5IGZyb20gXCIuLi9FbnRpdHkvRW50aXR5XCJcbmltcG9ydCBDb250ZXh0IGZyb20gXCIuLi9DYW52YXMvQ29udGV4dFwiXG5pbXBvcnQgU2NlbmUgZnJvbSBcIi4vU2NlbmVcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb0NsZWFyIGV4dGVuZHMgU2NlbmUgaW1wbGVtZW50cyBFbnRpdHkge1xuICAgIHB1YmxpYyBlbnRpdGllczogRW50aXR5W10gPSBbXVxuXG4gICAgZHJhdyhjb250ZXh0OiBDb250ZXh0LCBkZWx0YT86IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmVudGl0aWVzLmZvckVhY2goZSA9PiBlLmRyYXcoY29udGV4dCwgZGVsdGEpKVxuICAgIH1cbn0iLCJpbXBvcnQgRW50aXR5IGZyb20gXCIuLi9FbnRpdHkvRW50aXR5XCJcbmltcG9ydCBDb250ZXh0IGZyb20gXCIuLi9DYW52YXMvQ29udGV4dFwiXG5pbXBvcnQgTm9kZSBmcm9tIFwiLi4vRW50aXR5L05vZGVcIjtcbmltcG9ydCBWZWN0b3IyRCBmcm9tIFwiLi4vUGh5c2ljL1ZlY3RvcjJEXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lIGV4dGVuZHMgTm9kZSB7XG4gICAgY29uc3RydWN0b3IgKHB1YmxpYyBpZDogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG5ldyBWZWN0b3IyRCgwLCAwKSk7XG4gICAgfVxuXG4gICAgZHJhdyhjb250ZXh0OiBDb250ZXh0LCBkZWx0YT86IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb250ZXh0LmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNvbnRleHQuY2FudmFzLmNhbnZhcy53aWR0aCwgY29udGV4dC5jYW52YXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuZW50aXRpZXMuZm9yRWFjaChlID0+IGUuZHJhdyhjb250ZXh0LCBkZWx0YSkpO1xuICAgIH1cbn0iLCJpbXBvcnQgU2NlbmUgZnJvbSBcIi4vU2NlbmVcIlxuaW1wb3J0IE5vQ2xlYXIgZnJvbSBcIi4vTm9DbGVhclwiXG5cbmV4cG9ydCB7XG4gICAgU2NlbmUsXG4gICAgTm9DbGVhclxufSIsImltcG9ydCBDb25maWcgZnJvbSBcIi4uL0NvbmZpZ1wiXG5cbmNvbnN0IGtpbG9tZXRyZVRvUHggPSAoZGlzdGFuY2U6IG51bWJlcik6IG51bWJlciA9PiB7XG4gICAgcmV0dXJuIGRpc3RhbmNlIC8gQ29uZmlnLmttUGVyUHhcbn1cblxuY29uc3QgcHhUb0tpbG9tZXRyZSA9IChweDogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgICByZXR1cm4gcHggKiBDb25maWcua21QZXJQeFxufVxuXG5leHBvcnQgeyBraWxvbWV0cmVUb1B4LCBweFRvS2lsb21ldHJlIH0iXSwic291cmNlUm9vdCI6IiJ9