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
        idFuncs[id](camera);
        // document.body.addEventListener("mouseup", () => clearInterval(intervalSeed));
        document.querySelector(id).addEventListener("mousedown", () => {
            idFuncs[id](camera);
            // intervalSeed = setInterval(() => idFuncs[id](camera), 100);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vcGxhbmV0cy50cyIsIndlYnBhY2s6Ly8vLi9zYW5kYm94LnRzIiwid2VicGFjazovLy8uL3NyYy9DYW1lcmEvQ2FtZXJhLnRzIiwid2VicGFjazovLy8uL3NyYy9DYW52YXMvQ2FudmFzLnRzIiwid2VicGFjazovLy8uL3NyYy9DYW52YXMvQ29udGV4dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9Db250cm9scy9Db250cm9scy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29udHJvbHMvS2V5Ym9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnRyb2xzL01vdXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9Db250cm9scy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRW50aXR5L05vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01lbnUvQ29tcG9uZW50L1BsYW5ldFN0YXRzLnRzIiwid2VicGFjazovLy8uL3NyYy9NZW51L0NvbnRhaW5lci9CbG9jay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTWVudS9Db250YWluZXIvVGV4dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTW9kZWwvRGlzYy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGh5c2ljL0dyYXZpdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BoeXNpYy9WZWN0b3IyRC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGxhbmV0LnRzIiwid2VicGFjazovLy8uL3NyYy9TY2VuZS9Ob0NsZWFyLnRzIiwid2VicGFjazovLy8uL3NyYy9TY2VuZS9TY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2NlbmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VuaXQvRGlzdGFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FB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Q0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Q0FDSjtBQVRELHdCQVNDOzs7Ozs7Ozs7Ozs7Ozs7O0FDZEQsMkVBQTJCO0FBSXZCLGdCQUpHLGVBQUssQ0FJSDtBQUhULGlGQUErQjtBQUkzQixrQkFKRyxpQkFBTyxDQUlIOzs7Ozs7Ozs7Ozs7Ozs7O0FDTFgseUVBQThCO0FBRTlCLE1BQU0sYUFBYSxHQUFHLENBQUMsUUFBZ0IsRUFBVSxFQUFFO0lBQy9DLE9BQU8sUUFBUSxHQUFHLGdCQUFNLENBQUMsT0FBTztBQUNwQyxDQUFDO0FBTVEsc0NBQWE7QUFKdEIsTUFBTSxhQUFhLEdBQUcsQ0FBQyxFQUFVLEVBQVUsRUFBRTtJQUN6QyxPQUFPLEVBQUUsR0FBRyxnQkFBTSxDQUFDLE9BQU87QUFDOUIsQ0FBQztBQUV1QixzQ0FBYSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IENhbnZhcyBmcm9tIFwiLi9zcmMvQ2FudmFzL0NhbnZhc1wiO1xuaW1wb3J0IFBsYW5ldCBmcm9tIFwiLi9zcmMvUGxhbmV0XCI7XG5pbXBvcnQge1NjZW5lfSBmcm9tIFwiLi9zcmMvU2NlbmVcIjtcbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4vc3JjL0NhbWVyYS9DYW1lcmFcIjtcbmltcG9ydCB7IEtleWJvYXJkLCBNb3VzZX0gZnJvbSBcIi4vc3JjL0NvbnRyb2xzXCI7XG5pbXBvcnQgQ29uZmlnIGZyb20gXCIuL3NyYy9Db25maWdcIlxuaW1wb3J0IGdldFBsYW5ldHMsIHsgUGxhbmV0Q29uZmlnIH0gZnJvbSBcIi4vcGxhbmV0c1wiO1xuaW1wb3J0IFZlY3RvcjJEIGZyb20gXCIuL3NyYy9QaHlzaWMvVmVjdG9yMkRcIjtcbmltcG9ydCB7IHJlc2V0SXQgfSBmcm9tIFwiLi9zcmMvTWVudS9Db21wb25lbnQvUGxhbmV0U3RhdHNcIjtcbmltcG9ydCB7IHB4VG9LaWxvbWV0cmUgfSBmcm9tIFwiLi9zcmMvVW5pdC9EaXN0YW5jZVwiO1xuaW1wb3J0IHNhbmRib3ggZnJvbSBcIi4vc2FuZGJveFwiO1xuaW1wb3J0IENvbnRyb2xzIGZyb20gXCIuL3NyYy9Db250cm9scy9Db250cm9sc1wiO1xuXG5sZXQgcGF1c2UgPSBmYWxzZTtcblxuZXhwb3J0IGNvbnN0IHRvZ2dsZVBhdXNlID0gKCkgPT4ge1xuICAgIHBhdXNlID0gIXBhdXNlO1xufTtcblxuY29uc3QgbWFpbiA9IChkZWx0YTogbnVtYmVyLCBib2FyZHM6IENhbnZhc1tdKSA9PiB7XG4gICAgLy8gY1RpbWUgKz0gZGVsdGFcbiAgICBsZXQgbkJlZm9yZSA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcbiAgICBpZiAoIXBhdXNlKXtcbiAgICAgICAgYm9hcmRzLmZvckVhY2goYiA9PiB7XG4gICAgICAgICAgICBiLnVwZGF0ZShkZWx0YSAqIENvbmZpZy5nYW1lU3BlZWQpO1xuICAgICAgICB9KSAgICBcbiAgICB9XG4gICAgbGV0IG5BZnRlciA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IG1haW4oQ29uZmlnLm1pbGxpU2Vjb25kc1BlckZyYW1lLCBib2FyZHMpLCAoZGVsdGEgKiAxMDAwKSAtIChuQWZ0ZXIgLSBuQmVmb3JlKSk7XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgICBpbnRlcmZhY2UgV2luZG93IHsgTXlOYW1lc3BhY2U6IGFueTsgfVxufVxuXG4od2luZG93IGFzIGFueSkuc3RhcnQgPSAoKSA9PiB7XG4gICAgY29uc3QgY2FtZXJhID0gbmV3IENhbWVyYShDb25maWcuc3BhY2VXIC8gMiwgQ29uZmlnLnNwYWNlSCAvIDIsIENvbmZpZy56b29tTGV2ZWwpO1xuICAgIGNvbnN0IGJnQm9hcmQgPSBuZXcgQ2FudmFzKGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0LCBjYW1lcmEsIFwiYmFja2dyb3VuZFwiKTtcbiAgICBjb25zdCBwbGFuZXRCb2FyZCA9IG5ldyBDYW52YXMoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQsIGNhbWVyYSwgXCJtYWluXCIpO1xuICAgIGNvbnN0IHNjZW5lTm9kZTogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCIjc2NlbmVcIik7XG5cbiAgICBiZ0JvYXJkLmFwcGVuZFRvKHNjZW5lTm9kZSk7XG4gICAgcGxhbmV0Qm9hcmQuYXBwZW5kVG8oc2NlbmVOb2RlKTtcbiAgICBiZ0JvYXJkLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMwMDAwMDBcIjtcbiAgICBcbiAgICBjb25zdCBwbGFuZXRTY2VuZSA9IG5ldyBTY2VuZShcIm1haW5cIik7XG5cbiAgICBjb25zdCBrZXlib2FyZENvbnRyb2xzID0gbmV3IEtleWJvYXJkKGNhbWVyYSwgcGxhbmV0Qm9hcmQpO1xuICAgIGNvbnN0IG1vdXNlQ29udHJvbCA9IG5ldyBNb3VzZSgpO1xuICAgIGNvbnN0IHBsYW5ldHNDb25maWcgPSBnZXRQbGFuZXRzKHBsYW5ldEJvYXJkLCBjYW1lcmEpO1xuICAgIGNvbnN0IGRvbUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBsZXQgcGxhbmV0czogUGxhbmV0W10gPSBbXTtcblxuICAgIG1vdXNlQ29udHJvbC5vbkNsaWNrKCh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgICAgICBwbGFuZXRzLmZvckVhY2goKHA6IFBsYW5ldCkgPT4ge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHAuZ2V0Q29vcmRpbmF0ZXMoKS5pbnNpZGVPblJhZGl1cyhcbiAgICAgICAgICAgICAgICAgICAgbmV3IFZlY3RvcjJEKFxuICAgICAgICAgICAgICAgICAgICAgICAgcHhUb0tpbG9tZXRyZShjYW1lcmEucmVsYXRpdmVYKHgpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHB4VG9LaWxvbWV0cmUoY2FtZXJhLnJlbGF0aXZlWSh5KSlcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBwLnJhZGl1cyArIHB4VG9LaWxvbWV0cmUoODApKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocC5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICBkb21Cb2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleWJvYXJkQ29udHJvbHMuaGFuZGxlS2V5Ym9hcmQuYmluZChrZXlib2FyZENvbnRyb2xzKSk7XG4gICAgZG9tQm9keS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbW91c2VDb250cm9sLmhhbmRsZU1vdXNlLmJpbmQobW91c2VDb250cm9sKSk7XG4gICAgQ29udHJvbHMoY2FtZXJhKTtcblxuICAgIHBsYW5ldHNDb25maWcuZm9yRWFjaCgocDogUGxhbmV0Q29uZmlnKSA9PiB7XG4gICAgICAgIGNvbnN0IHBsYW5ldCA9IG5ldyBQbGFuZXQoXG4gICAgICAgICAgICBwLmlkLFxuICAgICAgICAgICAgbmV3IFZlY3RvcjJEKHAucG9zWzBdLCBwLnBvc1sxXSksXG4gICAgICAgICAgICBwLnJhZGl1cyxcbiAgICAgICAgICAgIHAubWFzcyxcbiAgICAgICAgICAgIHAuY29sb3IsXG4gICAgICAgICAgICBuZXcgVmVjdG9yMkQocC52ZWxvY2l0eVswXSwgcC52ZWxvY2l0eVsxXSksXG4gICAgICAgICAgICBwbGFuZXRzXG4gICAgICAgICk7XG4gICAgICAgIHBsYW5ldFNjZW5lLmFkZEVudGl0eShwbGFuZXQpO1xuICAgICAgICAvLyBwbGFuZXRTY2VuZS5hZGRFbnRpdHkobmV3IFBsYW5ldFRyYWlsKHBsYW5ldCkpO1xuICAgICAgICBwbGFuZXRzLnB1c2gocGxhbmV0KTtcbiAgICB9KVxuXG4gICAgLy8gY29uc29sZS5sb2coZ2V0R3Jhdml0eUFjYyhwbGFuZXRzWzBdLCBwbGFuZXRzWzFdKSk7XG5cbiAgICBwbGFuZXRTY2VuZS5hZGRFbnRpdHkobmV3IHJlc2V0SXQoKSk7XG4gICAgcGxhbmV0Qm9hcmQuYWRkRW50aXR5KHBsYW5ldFNjZW5lKTtcbiAgICBcbiAgICBtYWluKENvbmZpZy5taWxsaVNlY29uZHNQZXJGcmFtZSwgW2JnQm9hcmQsIHBsYW5ldEJvYXJkXSk7XG4gfTtcblxuKHdpbmRvdyBhcyBhbnkpLnNhbmRib3ggPSBzYW5kYm94OyIsImltcG9ydCBDYW52YXMgZnJvbSBcIi4vc3JjL0NhbnZhcy9DYW52YXNcIlxuaW1wb3J0IENhbWVyYSBmcm9tIFwiLi9zcmMvQ2FtZXJhL0NhbWVyYVwiXG5pbXBvcnQgQ29uZmlnIGZyb20gXCIuL3NyYy9Db25maWdcIlxuaW1wb3J0IHsgcHhUb0tpbG9tZXRyZSB9IGZyb20gXCIuL3NyYy9Vbml0L0Rpc3RhbmNlXCJcblxuXG5leHBvcnQgdHlwZSBQbGFuZXRDb25maWcgPSB7XG4gICAgaWQ6IHN0cmluZyxcbiAgICBwb3M6IG51bWJlcltdLFxuICAgIHJhZGl1czogbnVtYmVyLFxuICAgIG1hc3M6IG51bWJlcixcbiAgICBjb2xvcjogc3RyaW5nLFxuICAgIHZlbG9jaXR5OiBudW1iZXJbXSxcbn1cbmV4cG9ydCBkZWZhdWx0IChjYW52YXM6IENhbnZhcywgY2FtZXJhOiBDYW1lcmEpOiBQbGFuZXRDb25maWdbXSA9PiB7XG4gICAgY29uc3Qgc3VuID0ge1xuICAgICAgICBpZDogXCJzdW40MVwiLFxuICAgICAgICBwb3M6IFtcbiAgICAgICAgICAgIHB4VG9LaWxvbWV0cmUoY2FtZXJhLnJlbGF0aXZlWChjYW52YXMuY2FudmFzLndpZHRoIC8gMikpLFxuICAgICAgICAgICAgcHhUb0tpbG9tZXRyZShjYW1lcmEucmVsYXRpdmVZKGNhbnZhcy5jYW52YXMuaGVpZ2h0IC8gMikpLFxuICAgICAgICBdLFxuICAgICAgICByYWRpdXM6IHB4VG9LaWxvbWV0cmUoMTMwKSxcbiAgICAgICAgbWFzczogMS45ODkxZTMwLFxuICAgICAgICBjb2xvcjogXCJvcmFuZ2VcIixcbiAgICAgICAgdmVsb2NpdHk6IFswLCAwXVxuICAgIH07XG5cbiAgICBjb25zdCBlYXJ0aCA9IHtcbiAgICAgICAgaWQ6IFwiZWFydGggYWxvcnNcIixcbiAgICAgICAgcG9zOiBbXG4gICAgICAgICAgICBzdW4ucG9zWzBdIC0gMTQ5LjU5ZTYsXG4gICAgICAgICAgICBzdW4ucG9zWzFdLFxuICAgICAgICBdLFxuICAgICAgICByYWRpdXM6IHB4VG9LaWxvbWV0cmUoMTUpLFxuICAgICAgICBtYXNzOiA1Ljk3MmUyNCxcbiAgICAgICAgY29sb3I6IFwic2t5Ymx1ZVwiLFxuICAgICAgICAvLyB2ZWxvY2l0eTogWzAsIDBdLFxuICAgICAgICB2ZWxvY2l0eTogWzAsIENvbmZpZy5lYXJ0aFNwZWVkICogMC41XSxcblxuICAgICAgICAvLyB2ZWxvY2l0eTogbmV3IFZlY3RvcjJEKDAsIDApLFxuICAgIH07XG5cbiAgICBjb25zdCBpbnRlcmxvcGVyID0ge1xuICAgICAgICBpZDogXCJpbnRlcmxvcGVyXCIsXG4gICAgICAgIHBvczogW1xuICAgICAgICAgICAgc3VuLnBvc1swXSArIDE4NDQwMDAwMCxcbiAgICAgICAgICAgIHN1bi5wb3NbMV0gLSA1MDAwMDAwMCxcbiAgICAgICAgXSxcbiAgICAgICAgcmFkaXVzOiBweFRvS2lsb21ldHJlKDgpLFxuICAgICAgICBtYXNzOiA3LjM0OGU0LFxuICAgICAgICBjb2xvcjogXCJyZWRcIixcbiAgICAgICAgdmVsb2NpdHk6IFstMTUuNSwgLTVdXG4gICAgfTtcblxuICAgIGNvbnN0IG1vb25tb29uID0ge1xuICAgICAgICBpZDogXCJtb29ubW9vblwiLFxuICAgICAgICBwb3M6IFtcbiAgICAgICAgICAgIGVhcnRoLnBvc1swXSArIDUwMDAwMDAsXG4gICAgICAgICAgICBlYXJ0aC5wb3NbMV0gLSA0MDAwMDAwLFxuICAgICAgICBdLFxuICAgICAgICByYWRpdXM6IHB4VG9LaWxvbWV0cmUoNSksXG4gICAgICAgIG1hc3M6IDcuMzQ4ZTQsXG4gICAgICAgIGNvbG9yOiBcImdyYXlcIixcbiAgICAgICAgdmVsb2NpdHk6IFswLCAwLjE1XSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHN1bixcbiAgICAgICAgICAgIGVhcnRoLFxuICAgICAgICAgICAgaW50ZXJsb3BlcixcbiAgICAgICAgICAgIC8vIG1vb25tb29uLFxuICAgIF1cbn0iLCJpbXBvcnQgUGxhbmV0IGZyb20gXCIuL3NyYy9QbGFuZXRcIjtcbmltcG9ydCBDb25maWcgZnJvbSBcIi4vc3JjL0NvbmZpZ1wiO1xuaW1wb3J0IHsgcHhUb0tpbG9tZXRyZSB9IGZyb20gXCIuL3NyYy9Vbml0L0Rpc3RhbmNlXCI7XG5pbXBvcnQgVmVjdG9yMkQgZnJvbSBcIi4vc3JjL1BoeXNpYy9WZWN0b3IyRFwiO1xuaW1wb3J0IHsgZ2V0Rm9yY2VOb3JtIH0gZnJvbSBcIi4vc3JjL1BoeXNpYy9HcmF2aXR5XCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICBjb25zdCBlYXJ0aCA9IG5ldyBQbGFuZXQoXG4gICAgICAgIFwiZWFydGggYWxvcnNcIixcbiAgICAgICAgbmV3IFZlY3RvcjJEKDAsIDApLFxuICAgICAgICBweFRvS2lsb21ldHJlKDEwKSxcbiAgICAgICAgNS45NzJlMjQsXG4gICAgICAgIFwic2t5Ymx1ZVwiLFxuICAgICAgICAvLyB2ZWxvY2l0eTogWzAsIDBdLFxuICAgICAgICBuZXcgVmVjdG9yMkQoMCwgMCksXG4gICAgICAgIG51bGxcbiAgICAgICAgLy8gdmVsb2NpdHk6IG5ldyBWZWN0b3IyRCgwLCAwKSxcbiAgICApO1xuXG4gICAgY29uc3QgbW9vbm1vb24gPSBuZXcgUGxhbmV0KFxuICAgICAgICBcIm1vb25tb29uXCIsXG4gICAgICAgIG5ldyBWZWN0b3IyRCgzODQ0MDAsIDApLFxuICAgICAgICBweFRvS2lsb21ldHJlKDEwKSxcbiAgICAgICAgNy4zNDc2NzMwOWUyMixcbiAgICAgICAgXCJza3libHVlXCIsXG4gICAgICAgIC8vIHZlbG9jaXR5OiBbMCwgMF0sXG4gICAgICAgIG5ldyBWZWN0b3IyRCgwLCAxLjAyMiksXG4gICAgICAgIG51bGxcbiAgICAgICAgLy8gdmVsb2NpdHk6IG5ldyBWZWN0b3IyRCgwLCAwKSxcbiAgICApO1xuXG4gICAgY29uc3QgbW9vbkZvcmNlID0gZ2V0Rm9yY2VOb3JtKGVhcnRoLCBtb29ubW9vbik7XG4gICAgXG4gICAgY29uc29sZS5sb2cobW9vbkZvcmNlLCBtb29uRm9yY2UgLyBtb29ubW9vbi5tYXNzKTtcbn0iLCJpbXBvcnQgQ29uZmlnIGZyb20gXCIuLi9Db25maWdcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW1lcmEge1xuICAgIHB1YmxpYyB4OiBudW1iZXIgPSAwXG4gICAgcHVibGljIHk6IG51bWJlciA9IDBcbiAgICBwdWJsaWMgejogbnVtYmVyID0gMVxuXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlcikge1xuICAgICAgICB0aGlzLnggPSB4XG4gICAgICAgIHRoaXMueSA9IHlcbiAgICAgICAgdGhpcy56ID0gelxuICAgIH1cblxuICAgIFgoeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuelRyYW5zZm9ybSh4IC0gdGhpcy54KVxuICAgIH1cblxuICAgIFkoeTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuelRyYW5zZm9ybSh5IC0gdGhpcy55KVxuICAgIH1cblxuICAgIHpUcmFuc2Zvcm0odjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHYgKiAoMSAvIHRoaXMueilcbiAgICB9XG5cbiAgICByZWxhdGl2ZVgoeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCArICh0aGlzLnogKiB4KVxuICAgIH1cblxuICAgIHJlbGF0aXZlWSh5OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy55ICsgKHRoaXMueiAqIHkpXG4gICAgfVxuXG4gICAgdXAoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLnkgLSBDb25maWcuZGVjYWxCeU1vdmUgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMueSAtPSBDb25maWcuZGVjYWxCeU1vdmU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGxlZnQoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLnggLSBDb25maWcuZGVjYWxCeU1vdmUgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMueCAtPSBDb25maWcuZGVjYWxCeU1vdmU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJpZ2h0KCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy54ID49IENvbmZpZy5zcGFjZVcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnggKz0gQ29uZmlnLmRlY2FsQnlNb3ZlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBkb3duKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy55ID49IENvbmZpZy5zcGFjZUgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnkgKz0gQ29uZmlnLmRlY2FsQnlNb3ZlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB6b29tSW4oKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLnogPD0gQ29uZmlnLnpvb21NaW4pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnogLT0gQ29uZmlnLnpvb21BY3Rpb25Qb3c7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHpvb21PdXQoKTogYm9vbGVhbiB7XG4gICAgICAgIHRoaXMueiArPSBDb25maWcuem9vbUFjdGlvblBvdztcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufSIsImltcG9ydCBFbnRpdHkgZnJvbSBcIi4uL0VudGl0eS9FbnRpdHlcIlxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4vQ29udGV4dFwiXG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9DYW1lcmEvQ2FtZXJhXCJcbmltcG9ydCBOb2RlIGZyb20gXCIuLi9FbnRpdHkvTm9kZVwiXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSBcIi4uL1BoeXNpYy9WZWN0b3IyRFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyBleHRlbmRzIE5vZGUge1xuICAgIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnRcbiAgICByZWFkb25seSBjb250ZXh0OiBDb250ZXh0XG4gICAgcHVibGljIGVudGl0aWVzOiBFbnRpdHlbXSA9IFtdXG5cbiAgICBjb25zdHJ1Y3Rvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgY2FtZXJhOiBDYW1lcmEsIHB1YmxpYyBpZDogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG5ldyBWZWN0b3IyRCgwLCAwLCkpO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIilcbiAgICAgICAgdGhpcy5jYW52YXMuaWQgPSB0aGlzLmlkXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGhcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0XG4gICAgICAgIHRoaXMuY29udGV4dCA9IG5ldyBDb250ZXh0KHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSwgY2FtZXJhLCB0aGlzKVxuICAgIH1cblxuICAgIGFwcGVuZFRvKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpXG4gICAgfVxuXG4gICAgdXBkYXRlKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbnRpdGllcy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgZS51cGRhdGUoZGVsdGEpXG4gICAgICAgICAgICBlLmRyYXcodGhpcy5jb250ZXh0LCBkZWx0YSlcbiAgICAgICAgfSlcbiAgICB9XG59IiwiaW1wb3J0IE1vZGVsIGZyb20gXCIuLi9Nb2RlbC9Nb2RlbFwiO1xuaW1wb3J0IENhbWVyYSBmcm9tIFwiLi4vQ2FtZXJhL0NhbWVyYVwiO1xuaW1wb3J0IENhbnZhcyBmcm9tIFwiLi9DYW52YXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGV4dCB7XG4gICAgY29uc3RydWN0b3IgKFxuICAgICAgICByZWFkb25seSBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXG4gICAgICAgIHJlYWRvbmx5IGNhbWVyYTogQ2FtZXJhLFxuICAgICAgICByZWFkb25seSBjYW52YXM6IENhbnZhcyxcbiAgICAgICAgKSB7fVxuXG4gICAgZHJhdyhtb2RlbDogTW9kZWwpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpXG4gICAgICAgIG1vZGVsLmRyYXcodGhpcylcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpXG4gICAgfVxuXG4gICAgYXJjKHg6IG51bWJlciwgeTogbnVtYmVyLCByOiBudW1iZXIsIGFzOiBudW1iZXIsIGFlOiBudW1iZXIsIGxpbmVXaWR0aDogbnVtYmVyID0gMSk6IENvbnRleHQge1xuICAgICAgICB0aGlzLmNvbnRleHQubGluZVdpZHRoID0gbGluZVdpZHRoXG4gICAgICAgIHRoaXMuY29udGV4dC5hcmModGhpcy5jYW1lcmEuWCh4KSwgdGhpcy5jYW1lcmEuWSh5KSwgdGhpcy5jYW1lcmEuelRyYW5zZm9ybShyKSwgYXMsIGFlKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIHdyaXRlKHRleHQ6IHN0cmluZywgeDogbnVtYmVyLCB5OiBudW1iZXIsIGNvbG9yOiBzdHJpbmcsIGZvbnRTaXplOiBudW1iZXIsIGZvbnRGYW1pbHk6IHN0cmluZykge1xuICAgICAgICB0aGlzLmNvbnRleHQuZm9udCA9IGAke2ZvbnRTaXplfXB4ICR7Zm9udEZhbWlseX1gO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dCh0ZXh0LCB4LCB5KTtcbiAgICB9XG5cbiAgICBzdHJva2VSZWN0KHg6IG51bWJlciwgeTogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlciwgY29sb3I6IHN0cmluZyk6IENvbnRleHQge1xuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVJlY3QodGhpcy5jYW1lcmEuWCh4KSwgdGhpcy5jYW1lcmEuWSh5KSwgdywgaCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZpbGxSZWN0KHg6IG51bWJlciwgeTogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlciwgY29sb3I6IHN0cmluZyk6IENvbnRleHQge1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCh0aGlzLmNhbWVyYS5YKHgpLCB0aGlzLmNhbWVyYS5ZKHkpLCB3LCBoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbGluZShmcm9tWDogbnVtYmVyLCBmcm9tWTogbnVtYmVyLCB0b1g6IG51bWJlciwgdG9ZOiBudW1iZXIsIGNvbG9yOiBzdHJpbmcsIGxpbmVXaWR0aDogbnVtYmVyID0gMSkge1xuICAgICAgICB0aGlzLmNvbnRleHQubGluZVdpZHRoID0gbGluZVdpZHRoO1xuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5jb250ZXh0Lm1vdmVUbyh0aGlzLmNhbWVyYS5YKGZyb21YKSwgdGhpcy5jYW1lcmEuWShmcm9tWSkpO1xuICAgICAgICB0aGlzLmNvbnRleHQubGluZVRvKHRoaXMuY2FtZXJhLlgodG9YKSwgdGhpcy5jYW1lcmEuWSh0b1kpKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKCk7XG4gICAgfVxufVxuXG50eXBlIERyYXdGdW5jdGlvbiA9IChjdHg6IENvbnRleHQpID0+IHZvaWRcblxuZXhwb3J0IHtcbiAgICBEcmF3RnVuY3Rpb25cbn0iLCJjb25zdCBjRHVyYXRpb24gPSAwXG5jb25zdCBmcHMgPSA2MFxuY29uc3QgbWlsbGlTZWNvbmRzUGVyRnJhbWUgPSAxIC8gZnBzXG5sZXQgem9vbUxldmVsID0gMi41XG5sZXQgem9vbU1pbiA9IDAuMVxuY29uc3Qgem9vbUFjdGlvblBvdyA9IDAuMTBcbmNvbnN0IGRlY2FsQnlNb3ZlID0gMjVcblxubGV0IG1heFBsYW5ldHMgPSA0XG5sZXQgcGxhbmV0c1JhZGl1c0RlZiA9IHttaW46IDMsIG1heDogNzB9XG5jb25zdCBwbGFuZXRzTWluRGlzdCA9IDEwXG5jb25zdCBwbGFuZXRCYXNlU3BlZWQgPSA0MFxuXG5jb25zdCBzcGFjZVcgPSAxMDAwMFxuY29uc3Qgc3BhY2VIID0gMTAwMDBcbmNvbnN0IGRlY2FsWCA9IHNwYWNlVyAvIDJcbmNvbnN0IGRlY2FsWSA9IHNwYWNlSCAvIDJcblxuY29uc3QgZGlzdFBvdyA9IDVcblxuY29uc3QgZm9udFNpemUgPSAxNFxubGV0IGRlYnVnID0gbnVsbFxuY29uc3QgZWFydGhTcGVlZCA9IDI5Ljc4IC8vIGttL3NcbmNvbnN0IEcgPSA2LjY3NGUtMTFcblxuZW51bSBQbGF5TW9kZSB7XG4gICAgUExBWSxcbiAgICBQQVVTRVxufVxuXG5jb25zdCBtb2RlID0gUGxheU1vZGUuUExBWVxuLy8gY29uc3Qga21QZXJQeCA9IDEuM2U1XG5jb25zdCBrbVBlclB4ID0gMS44ZTVcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGdhbWVTcGVlZDogMzY1ICogMjQgKiA2MCAqIDYwIC8gNCxcbiAgICAvLyBnYW1lU3BlZWQ6IDEwMCxcbiAgICBrbVBlclB4LFxuICAgIG1QZXJQeDoga21QZXJQeCAqIDEwMDAsXG4gICAga2dQZXJQeERlbnNpdHk6IDEyMDAsXG4gICAgRyxcbiAgICBjRHVyYXRpb24sXG4gICAgZnBzLFxuICAgIHpvb21MZXZlbCxcbiAgICB6b29tQWN0aW9uUG93LFxuICAgIGRlY2FsQnlNb3ZlLFxuICAgIG1heFBsYW5ldHMsXG4gICAgcGxhbmV0c1JhZGl1c0RlZixcbiAgICBwbGFuZXRzTWluRGlzdCxcbiAgICBwbGFuZXRCYXNlU3BlZWQsXG4gICAgc3BhY2VXLFxuICAgIHNwYWNlSCxcbiAgICBkZWNhbFgsXG4gICAgZGVjYWxZLFxuICAgIGRpc3RQb3csXG4gICAgZm9udFNpemUsXG4gICAgZGVidWcsXG4gICAgUGxheU1vZGUsXG4gICAgbW9kZSxcbiAgICB6b29tTWluLFxuICAgIGVhcnRoU3BlZWQsXG4gICAgbWlsbGlTZWNvbmRzUGVyRnJhbWVcbn0iLCJpbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9DYW1lcmEvQ2FtZXJhXCI7XG5cbmNvbnN0IGlkRnVuY3M6IHsgW2tleTogc3RyaW5nXTogKGNhbWVyYTogQ2FtZXJhKSA9PiB2b2lkIH0gPSB7XG4gICAgXCIjYnRuLXVwXCI6IChjYW1lcmE6IENhbWVyYSkgPT4gY2FtZXJhLnVwKCksXG4gICAgXCIjYnRuLWRvd25cIjogKGNhbWVyYTogQ2FtZXJhKSA9PiBjYW1lcmEuZG93bigpLFxuICAgIFwiI2J0bi1sZWZ0XCI6IChjYW1lcmE6IENhbWVyYSkgPT4gY2FtZXJhLmxlZnQoKSxcbiAgICBcIiNidG4tcmlnaHRcIjogKGNhbWVyYTogQ2FtZXJhKSA9PiBjYW1lcmEucmlnaHQoKSxcbiAgICBcIiN6b29tLWluXCI6IChjYW1lcmE6IENhbWVyYSkgPT4gY2FtZXJhLnpvb21JbigpLFxuICAgIFwiI3pvb20tb3V0XCI6IChjYW1lcmE6IENhbWVyYSkgPT4gY2FtZXJhLnpvb21PdXQoKSxcbn1cblxubGV0IGludGVydmFsU2VlZDogTm9kZUpTLlRpbWVvdXQgPSBudWxsO1xuXG5jb25zdCBDb250cm9scyA9IChjYW1lcmE6IENhbWVyYSkgPT4ge1xuICAgIGZvciAoY29uc3QgaWQgaW4gaWRGdW5jcykge1xuICAgICAgICBpZEZ1bmNzW2lkXShjYW1lcmEpO1xuICAgICAgICAvLyBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxTZWVkKSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWRGdW5jc1tpZF0oY2FtZXJhKTtcbiAgICAgICAgICAgIC8vIGludGVydmFsU2VlZCA9IHNldEludGVydmFsKCgpID0+IGlkRnVuY3NbaWRdKGNhbWVyYSksIDEwMCk7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250cm9sczsiLCJpbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9DYW1lcmEvQ2FtZXJhXCJcbmltcG9ydCBDb25maWcgZnJvbSBcIi4uL0NvbmZpZ1wiXG5pbXBvcnQgQ2FudmFzIGZyb20gXCIuLi9DYW52YXMvQ2FudmFzXCJcbmltcG9ydCB7IHRvZ2dsZVBhdXNlIH0gZnJvbSBcIi4uLy4uL2luZGV4XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5Ym9hcmQge1xuICAgIHB1YmxpYyBhY3Rpb25CeUtleWNvZGU6IHtba2V5OiBudW1iZXJdOiBGdW5jdGlvbn1cblxuICAgIGNvbnN0cnVjdG9yKHJlYWRvbmx5IGNhbWVyYTogQ2FtZXJhLCByZWFkb25seSBjYW52YXM6IENhbnZhcykge1xuICAgICAgICB0aGlzLmFjdGlvbkJ5S2V5Y29kZSA9IHtcbiAgICAgICAgICAgIC8vIDY4OiAoKSA9PiB7ZGVidWcuVG9nZ2xlKCk7fSxcbiAgICAgICAgICAgIC8vIDgzOiAoKSA9PiB7bW9kZSA9IG1vZGUgPT0gUEFVU0UgPyBQTEFZIDogUEFVU0U7fSxcbiAgICAgICAgICAgIDgwOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdG9nZ2xlUGF1c2UoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA4MjogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnggPSAwXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEueSA9IDBcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56ID0gMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDkwOiAoKSA9PiB0aGlzLmNhbWVyYS56b29tSW4oKSxcbiAgICAgICAgICAgIDg4OiAoKSA9PiB0aGlzLmNhbWVyYS56b29tT3V0KCksXG4gICAgICAgICAgICAzNzogKCkgPT4gdGhpcy5jYW1lcmEubGVmdCgpLFxuICAgICAgICAgICAgMzg6ICgpID0+IHRoaXMuY2FtZXJhLnVwKCksXG4gICAgICAgICAgICAzOTogKCkgPT4gdGhpcy5jYW1lcmEucmlnaHQoKSxcbiAgICAgICAgICAgIDQwOiAoKSA9PiB0aGlzLmNhbWVyYS5kb3duKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUtleWJvYXJkKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGlvbkJ5S2V5Y29kZSA9PSB1bmRlZmluZWQgfHwgXG4gICAgICAgICAgICAhdGhpcy5hY3Rpb25CeUtleWNvZGVbZXZlbnQua2V5Q29kZV0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFjdGlvbkJ5S2V5Y29kZVtldmVudC5rZXlDb2RlXSgpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb3VzZSB7XG4gICAgcHJvdGVjdGVkIGNsaWNrQ2I6ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gdm9pZFxuICAgIG9uQ2xpY2soY2I6ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gdm9pZCkge1xuICAgICAgICB0aGlzLmNsaWNrQ2IgPSBjYjtcbiAgICB9XG5cbiAgICBoYW5kbGVNb3VzZShlOiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIHRoaXMuY2xpY2tDYihlLngsIGUueSk7XG4gICAgfVxufSIsImltcG9ydCBLZXlib2FyZCBmcm9tIFwiLi9LZXlib2FyZFwiO1xuaW1wb3J0IE1vdXNlIGZyb20gXCIuL01vdXNlXCI7XG5cbmV4cG9ydCB7XG4gICAgS2V5Ym9hcmQsXG4gICAgTW91c2UsXG59IiwiaW1wb3J0IEVudGl0eSBmcm9tIFwiLi9FbnRpdHlcIlxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL0NhbnZhcy9Db250ZXh0XCJcbmltcG9ydCBWZWN0b3IyRCBmcm9tIFwiLi4vUGh5c2ljL1ZlY3RvcjJEXCJcblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgTm9kZSBpbXBsZW1lbnRzIEVudGl0eSB7XG4gICAgcHJvdGVjdGVkIGVudGl0aWVzOiBFbnRpdHlbXSA9IFtdXG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY29vcmRzOiBWZWN0b3IyRCkge31cblxuICAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZW50aXRpZXMuZm9yRWFjaChlID0+IGUudXBkYXRlKGRlbHRhKSk7XG4gICAgfVxuXG4gICAgZHJhdyhjb250ZXh0OiBDb250ZXh0LCBkZWx0YT86IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmVudGl0aWVzLmZvckVhY2goZSA9PiBlLmRyYXcoY29udGV4dCwgZGVsdGEpKTtcbiAgICB9XG5cbiAgICBhZGRFbnRpdHkoZW50aXR5OiBFbnRpdHkpOiB0aGlzIHtcbiAgICAgICAgdGhpcy5lbnRpdGllcy5wdXNoKGVudGl0eSlcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0Q29vcmRpbmF0ZXMoKTogVmVjdG9yMkQge1xuICAgICAgICByZXR1cm4gdGhpcy5jb29yZHM7XG4gICAgfVxuXG4gICAgZ2V0U2l6ZXMoKTogVmVjdG9yMkQge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjJEKDAsIDApO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBraWxvbWV0cmVUb1B4IH0gZnJvbSBcIi4uLy4uL1VuaXQvRGlzdGFuY2VcIjtcbmltcG9ydCBDb250ZXh0IGZyb20gXCIuLi8uLi9DYW52YXMvQ29udGV4dFwiO1xuaW1wb3J0IEVudGl0eSBmcm9tIFwiLi4vLi4vRW50aXR5L0VudGl0eVwiO1xuaW1wb3J0IFZlY3RvcjJEIGZyb20gXCIuLi8uLi9QaHlzaWMvVmVjdG9yMkRcIjtcbmltcG9ydCBQbGFuZXQgZnJvbSBcIi4uLy4uL1BsYW5ldFwiO1xuaW1wb3J0IFRleHQgZnJvbSBcIi4uL0NvbnRhaW5lci9UZXh0XCI7XG5pbXBvcnQgTm9kZSBmcm9tIFwiLi4vLi4vRW50aXR5L05vZGVcIjtcblxubGV0IGl0ID0gMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhbmV0U3RhdHMge1xuICAgIHByb3RlY3RlZCBsb2NhbEl0OiBudW1iZXIgPSAwO1xuICAgIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHBsYW5ldDogUGxhbmV0KSB7XG4gICAgICAgIHRoaXMubG9jYWxJdCA9IGl0O1xuICAgICAgICBpdCsrO1xuICAgIH1cblxuICAgIGRyYXcoY29udGV4dDogQ29udGV4dCkge1xuICAgICAgICBjb25zdCB3aW5kb3dXID0gMjQwO1xuICAgICAgICBjb25zdCB3aW5kb3dIID0gMjAwO1xuICAgICAgICBjb25zdCBmbG9hdEZpeCA9IDY7XG4gICAgICAgIG5ldyBUZXh0KFxuICAgICAgICAgICAgbmV3IFZlY3RvcjJEKDIwLCAyMCArICh3aW5kb3dIICogdGhpcy5sb2NhbEl0KSksXG4gICAgICAgICAgICBuZXcgVmVjdG9yMkQod2luZG93Vywgd2luZG93SCksXG4gICAgICAgICAgICB0aGlzLnBsYW5ldC5jb2xvcixcbiAgICAgICAgICAgIDIwXG4gICAgICAgICkuc2V0TGluZXMoW1xuICAgICAgICAgICAgYD4gJHt0aGlzLnBsYW5ldC5pZH1gLFxuICAgICAgICAgICAgYCAgbWFzczogJHt0aGlzLnBsYW5ldC5tYXNzfSBrZ2AsXG4gICAgICAgICAgICAnICB2ZWxvY2l0eSAoa20vcyk6JyxcbiAgICAgICAgICAgIGAgICAgeDogJHt0aGlzLnBsYW5ldC52ZWxvY2l0eS54ID4gMCA/IFwiIFwiIDogXCJcIn0ke3RoaXMucGxhbmV0LnZlbG9jaXR5LngudG9GaXhlZChmbG9hdEZpeCl9YCxcbiAgICAgICAgICAgIGAgICAgeTogJHt0aGlzLnBsYW5ldC52ZWxvY2l0eS55ID4gMCA/IFwiIFwiIDogXCJcIn0ke3RoaXMucGxhbmV0LnZlbG9jaXR5LnkudG9GaXhlZChmbG9hdEZpeCl9YCxcbiAgICAgICAgICAgIGAgICAgbjogICR7dGhpcy5wbGFuZXQudmVsb2NpdHkuZ2V0Tm9ybSgpLnRvRml4ZWQoZmxvYXRGaXgpfWAsXG4gICAgICAgICAgICAnICBjb29yZGluYXRlcyAocHgpOicsXG4gICAgICAgICAgICBgICAgIHg6ICR7IGtpbG9tZXRyZVRvUHgodGhpcy5wbGFuZXQuZ2V0Q29vcmRpbmF0ZXMoKS54KS50b0ZpeGVkKDIpfWAsXG4gICAgICAgICAgICBgICAgIHk6ICR7IGtpbG9tZXRyZVRvUHgodGhpcy5wbGFuZXQuZ2V0Q29vcmRpbmF0ZXMoKS55KS50b0ZpeGVkKDIpfWAsXG4gICAgICAgIF0pLmRyYXcoY29udGV4dCk7XG4gICAgfVxufVxuXG5jbGFzcyByZXNldEl0IGV4dGVuZHMgTm9kZSBpbXBsZW1lbnRzIEVudGl0eSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKG5ldyBWZWN0b3IyRCgwLCAwLCkpO1xuICAgIH1cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGl0ID0gMDtcbiAgICB9XG5cbiAgICBkcmF3KCkge31cbn1cblxuZXhwb3J0IHtcbiAgICByZXNldEl0XG59OyIsImltcG9ydCBDb250ZXh0IGZyb20gXCIuLi8uLi9DYW52YXMvQ29udGV4dFwiXG5pbXBvcnQgRW50aXR5IGZyb20gXCIuLi8uLi9FbnRpdHkvRW50aXR5XCJcbmltcG9ydCBWZWN0b3IyRCBmcm9tIFwiLi4vLi4vUGh5c2ljL1ZlY3RvcjJEXCJcbmltcG9ydCBCbG9jayBmcm9tIFwiLi9Db250YWluZXJcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNpYyBpbXBsZW1lbnRzIEJsb2NrLCBFbnRpdHkge1xuICAgIHB1YmxpYyBkZWNhbFg6IG51bWJlciA9IDBcbiAgICBwdWJsaWMgZGVjYWxZOiBudW1iZXIgPSAwXG4gICAgcHVibGljIGVudGl0aWVzOiBFbnRpdHlbXVxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHJlYWRvbmx5IGNvb3JkczogVmVjdG9yMkQsXG4gICAgICAgIHJlYWRvbmx5IHNpemVzOiBWZWN0b3IyRCxcbiAgICAgICAgcHVibGljIGNvbG9yOiBzdHJpbmcgPSBcIiNmZmZmZmZcIixcbiAgICAgICAgcHVibGljIGZvbnRTaXplOiBudW1iZXIgPSAxNCxcbiAgICAgICAgcHVibGljIGZvbnRGYW1pbHk6IHN0cmluZyA9IFwiVmVyZGFuYVwiXG4gICAgKSB7XG4gICAgfVxuXG4gICAgc2V0RGVjYWwoZGVjYWxYOiBudW1iZXIsIGRlY2FsWTogbnVtYmVyKTogQmxvY2sge1xuICAgICAgICB0aGlzLmRlY2FsWCA9IGRlY2FsWDtcbiAgICAgICAgdGhpcy5kZWNhbFkgPSBkZWNhbFk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldENvb3JkaW5hdGVzKCk6IFZlY3RvcjJEIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyRCgrdGhpcy5jb29yZHMueCArIHRoaXMuZGVjYWxYLCArdGhpcy5jb29yZHMueSArIHRoaXMuZGVjYWxZKTtcbiAgICB9XG5cbiAgICBnZXRDb2xvcigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xvclxuICAgIH1cblxuICAgIGdldFNpemVzKCk6IFZlY3RvcjJEIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZXM7XG4gICAgfVxuXG4gICAgZ2V0Rm9udFNpemUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9udFNpemU7XG4gICAgfVxuXG4gICAgZ2V0Rm9udEZhbWlseSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5mb250RmFtaWx5O1xuICAgIH1cblxuICAgIHVwZGF0ZSgpOiB2b2lkIHt9XG5cbiAgICBkcmF3KGNvbnRleHQ6IENvbnRleHQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbnRpdGllcy5mb3JFYWNoKGVudGl0eSA9PiBlbnRpdHkuZHJhdyhjb250ZXh0KSk7XG4gICAgfVxuXG4gICAgZ2V0RW50aXRpZXMoKTogRW50aXR5W10ge1xuICAgICAgICByZXR1cm4gdGhpcy5lbnRpdGllcztcbiAgICB9XG59IiwiaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uLy4uL0NhbnZhcy9Db250ZXh0XCI7XG5pbXBvcnQgQmxvY2sgZnJvbSBcIi4vQmxvY2tcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dCBleHRlbmRzIEJsb2NrIHtcbiAgICBwcm90ZWN0ZWQgbGluZXM6IHN0cmluZ1tdID0gW11cbiAgICBcbiAgICBhZGRMaW5lKHRleHQ6IHN0cmluZyk6IFRleHQge1xuICAgICAgICB0aGlzLmxpbmVzLnB1c2godGV4dCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldExpbmVzKGxpbmVzOiBzdHJpbmdbXSk6IFRleHQge1xuICAgICAgICB0aGlzLmxpbmVzID0gbGluZXM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNob3VsZEJyZWFrTGluZSh3aWR0aDogbnVtYmVyLCBsaW5lOiBzdHJpbmcsIGN0eDogQ29udGV4dCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gY3R4LmNvbnRleHQubWVhc3VyZVRleHQobGluZSkud2lkdGggPiB3aWR0aDtcbiAgICB9XG5cbiAgICBicmVha0xpbmUod2lkdGg6IG51bWJlciwgbGluZTogc3RyaW5nLCBjdHg6IENvbnRleHQpOiBzdHJpbmdbXSB7XG4gICAgICAgIGlmICghdGhpcy5zaG91bGRCcmVha0xpbmUod2lkdGgsIGxpbmUsIGN0eCkpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbGluZXM6IHN0cmluZ1tdID0gW107XG4gICAgICAgIC8vIGJyZWFrIGZvciAvblxuICAgICAgICBsaW5lLnNwbGl0KFwiXFxuXCIpLmZvckVhY2goKGw6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgLy8gZnVsbCBzaXplIG9mIGxpbmVcbiAgICAgICAgICAgIGNvbnN0IHRleHRXaWR0aCA9IGN0eC5jb250ZXh0Lm1lYXN1cmVUZXh0KGwpLndpZHRoO1xuICAgICAgICAgICAgLy8gc2l6ZSBvZiBhIGNoYXJhY3Rlciwgcm91bmRlZCB0byBjbG9zZXN0IGdyZWF0ZXIgaW50ZWdlclxuICAgICAgICAgICAgY29uc3QgY2hhclMgPSBNYXRoLmNlaWwodGV4dFdpZHRoIC8gbC5sZW5ndGgpO1xuICAgICAgICAgICAgLy8gbnVtYmVyIG9mIGNoYXIgcGVyIGxpbmUsIHJvdW5kZWQgdG8gdGhlIGNsb3Nlc3QgbG93ZXIgaW50ZWdlclxuICAgICAgICAgICAgY29uc3QgY2hhclBlckxpbmUgPSBNYXRoLmZsb29yKHdpZHRoIC8gY2hhclMpO1xuICAgICAgICAgICAgLy8gcmVsYXRpdmUgd2lkdGgsIHVzaW5nIGFib3ZlIGFwcHJveGltYXRpb25zXG4gICAgICAgICAgICBjb25zdCByZWxhdGl2ZVdpZHRoID0gY2hhclBlckxpbmUgKiBjaGFyUztcbiAgICAgICAgICAgIC8vIG51bWJlciBvZiBsaW5lcyB3ZSBzaG91bGQgYnJlYWsgaW50by5cbiAgICAgICAgICAgIC8vIG1pbihuKSA9IDE7XG4gICAgICAgICAgICBjb25zdCBuID0gTWF0aC5jZWlsKHRleHRXaWR0aCAvIHJlbGF0aXZlV2lkdGgpO1xuICAgICAgICAgICAgLy8gY3ljbGUgb3ZlciBudW1iZXIgb2YgbGluZXNcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGluZXMucHVzaChsLnNsaWNlKGNoYXJQZXJMaW5lKmksIGNoYXJQZXJMaW5lKihpKzEpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIGxpbmVzO1xuICAgIH1cblxuICAgIHdyaXRlTGluZXMoXG4gICAgICAgIGxpbmVzOiBzdHJpbmdbXSxcbiAgICAgICAgeDogbnVtYmVyLFxuICAgICAgICB5OiBudW1iZXIsXG4gICAgICAgIHc6IG51bWJlcixcbiAgICAgICAgaDogbnVtYmVyLFxuICAgICAgICBmb250U2l6ZTogbnVtYmVyLFxuICAgICAgICBjb2xvcjogc3RyaW5nLFxuICAgICAgICBmb250RmFtaWx5OiBzdHJpbmcsXG4gICAgICAgIGlPdmVybG9hZDogbnVtYmVyLFxuICAgICAgICBjdHg6IENvbnRleHRcbiAgICApIHtcbiAgICAgICAgbGluZXMuZm9yRWFjaCgobGluZTogc3RyaW5nLCBpOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJsID0gdGhpcy5icmVha0xpbmUodywgbGluZSwgY3R4KTtcbiAgICAgICAgICAgIGlmIChibC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53cml0ZUxpbmVzKFxuICAgICAgICAgICAgICAgICAgICBibCxcbiAgICAgICAgICAgICAgICAgICAgeCxcbiAgICAgICAgICAgICAgICAgICAgeSxcbiAgICAgICAgICAgICAgICAgICAgdyxcbiAgICAgICAgICAgICAgICAgICAgaCxcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemUsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5LFxuICAgICAgICAgICAgICAgICAgICBpICsgaU92ZXJsb2FkLFxuICAgICAgICAgICAgICAgICAgICBjdHhcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIC8vIC0xIGJlY2F1c2UgdGhlIFwiaVwiIG9mIHRoaXMgaXRlcmF0aW9uIHdhcyBub3QgdXNlZCB0byB3cml0ZSBhXG4gICAgICAgICAgICAgICAgLy8gbGluZSBhcyBpdCBzaG91bGQgKGNhbnZhc1kgdW5kZXIpLCBidXQgYXMgYW4gb3ZlcmxvYWQgdmFsdWVcbiAgICAgICAgICAgICAgICAvLyB0byB3cml0ZSBicm9rZW4gbGluZXMuIEFuZCBcImlcIiB3aWxsIHN0aWxsIGluY3JlbWVudCBieSAxXG4gICAgICAgICAgICAgICAgLy8gYmVjYXVzZSBvZiBmb3JFYWNoLlxuICAgICAgICAgICAgICAgIC8vIEFuZCBzaW5jZSBpT3ZlcmxvYWQgaXMgdXNlZCB1bmRlciB0byBjb21wdXRlIGNhbnZhc1ksIHdlXG4gICAgICAgICAgICAgICAgLy8gY2FuIGNhbmNlbCB0aGF0IGVtcHR5IFwiaVwiIGl0ZXJhdGlvbiBoZXJlLlxuICAgICAgICAgICAgICAgIGlPdmVybG9hZCArPSBibC5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNhbnZhc1kgPSB5ICsgKGZvbnRTaXplICogKGkgKyBpT3ZlcmxvYWQpKTtcbiAgICAgICAgICAgIGNvbnN0IGNhbnZhc1ggPSB4O1xuICAgICAgICAgICAgY3R4LndyaXRlKGxpbmUsIGNhbnZhc1gsIGNhbnZhc1ksIGNvbG9yLCBmb250U2l6ZSwgZm9udEZhbWlseSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRyYXcoY3R4OiBDb250ZXh0KSB7XG4gICAgICAgIC8vIGNhbnZhc1R4dC5mb250U2l6ZSA9IHRoaXMuZ2V0Rm9udFNpemUoKTtcbiAgICAgICAgY29uc3Qge3gsIHl9ID0gdGhpcy5nZXRDb29yZGluYXRlcygpO1xuICAgICAgICBjb25zdCB7eDogdywgeTogaH0gPSB0aGlzLmdldFNpemVzKCk7XG5cbiAgICAgICAgdGhpcy53cml0ZUxpbmVzKHRoaXMubGluZXMsIHgsIHksIHcsIGgsIHRoaXMuZ2V0Rm9udFNpemUoKSwgdGhpcy5nZXRDb2xvcigpLCBcIlZlcmRhbmFcIiwgMCwgY3R4KTtcbiAgICB9XG59IiwiaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL0NhbnZhcy9Db250ZXh0XCJcbmltcG9ydCBWZWN0b3IyRCBmcm9tIFwiLi4vUGh5c2ljL1ZlY3RvcjJEXCJcbmltcG9ydCB7IGtpbG9tZXRyZVRvUHggfSBmcm9tIFwiLi4vVW5pdC9EaXN0YW5jZVwiXG5pbXBvcnQgTW9kZWwgZnJvbSBcIi4vTW9kZWxcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNjIGltcGxlbWVudHMgTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjb29yZHM6IFZlY3RvcjJELCBwdWJsaWMgcmFkaXVzOiBudW1iZXIsIHB1YmxpYyBjb2xvcjogc3RyaW5nKSB7fVxuXG4gICAgZHJhdyhjdHg6IENvbnRleHQpIHtcbiAgICAgICAgY3R4LmNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LmNvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguYXJjKGtpbG9tZXRyZVRvUHgodGhpcy5jb29yZHMueCksIGtpbG9tZXRyZVRvUHgodGhpcy5jb29yZHMueSksIGtpbG9tZXRyZVRvUHgodGhpcy5yYWRpdXMpLCAwLCAyICogTWF0aC5QSSlcbiAgICAgICAgY3R4LmNvbnRleHQuZmlsbCgpO1xuICAgICAgICBjdHguY29udGV4dC5zdHJva2UoKTtcbiAgICB9XG5cbiAgICBnZXRDb29yZGluYXRlcygpOiBWZWN0b3IyRCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvb3JkcztcbiAgICB9XG5cbiAgICBzZXRDb29yZGluYXRlcyhjb29yZHM6IFZlY3RvcjJEKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29vcmRzID0gY29vcmRzO1xuICAgIH1cbn0iLCJpbXBvcnQgUGxhbmV0IGZyb20gXCIuLi9QbGFuZXRcIlxuaW1wb3J0IENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnXCJcbmltcG9ydCBWZWN0b3IyRCBmcm9tIFwiLi9WZWN0b3IyRFwiXG5cbmNvbnN0IGdldEZvcmNlID0gKGE6IFBsYW5ldCwgYjogUGxhbmV0KTogVmVjdG9yMkQgPT4ge1xuICAgIC8vIGNvbnN0IGRpc3QgPSBHZW9tZXRyeS5nZXREaXN0YW5jZUJldHdlZW5PYmplY3RzKGEuY29vcmRzLCBiLmNvb3JkcylcbiAgICBjb25zdCByMjFfdiA9IGIuZ2V0Q29vcmRpbmF0ZXMoKS5zdWIoYS5nZXRDb29yZGluYXRlcygpKVxuICAgIGNvbnN0IGRpc3QgPSBNYXRoLnNxcnQoKHIyMV92LngqcjIxX3YueCAqIDEwMDApICsgKHIyMV92LnkqcjIxX3YueSAqIDEwMDApKVxuICAgIGNvbnN0IGYgPSAoQ29uZmlnLkcgKiBhLm1hc3MgKiBiLm1hc3MpIC8gKGRpc3QgKiBkaXN0KVxuICAgIGNvbnN0IGYyMV92ID0gcjIxX3YuZGl2aWRlKGRpc3QpLmRvdChmKVxuICAgIHJldHVybiBmMjFfdlxufVxuXG5jb25zdCBnZXRGb3JjZU5vcm0gPSAoYTogUGxhbmV0LCBiOiBQbGFuZXQpOiBudW1iZXIgPT4ge1xuICAgIGNvbnN0IGRpc3QgPSBNYXRoLnNxcnQoTWF0aC5wb3coYS5nZXRDb29yZGluYXRlcygpLmdldE5vcm0oKSAtIGIuZ2V0Q29vcmRpbmF0ZXMoKS5nZXROb3JtKCksIDIpKSAqIDEwMDA7XG4gICAgcmV0dXJuIChDb25maWcuRyAqIGEubWFzcyAqIGIubWFzcykgLyAoZGlzdCAqIGRpc3QpXG59XG5cbmV4cG9ydCB7XG4gICAgZ2V0Rm9yY2UsXG4gICAgZ2V0Rm9yY2VOb3JtLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoYTogUGxhbmV0LCBiOiBQbGFuZXQpOiBWZWN0b3IyRCA9PiB7XG4gICAgcmV0dXJuIGdldEZvcmNlKGEsIGIpLmRpdmlkZShhLm1hc3MpXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjdG9yMkQge1xuICAgIGNvbnN0cnVjdG9yIChwdWJsaWMgeDogbnVtYmVyLCBwdWJsaWMgeTogbnVtYmVyKSB7fVxuXG4gICAgc3ViKHZlYzogVmVjdG9yMkQgfCBudW1iZXIpOiBWZWN0b3IyRCB7XG4gICAgICAgIGlmICh0eXBlb2YgdmVjID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICB2ZWMgPSBuZXcgVmVjdG9yMkQodmVjLCB2ZWMpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyRCh0aGlzLngtdmVjLngsIHRoaXMueS12ZWMueSlcbiAgICB9XG5cbiAgICAvLyBkb3QgcHJvZHVjdFxuICAgIGRvdCh2ZWM6IFZlY3RvcjJEIHwgbnVtYmVyKTogVmVjdG9yMkQge1xuICAgICAgICBpZiAodHlwZW9mIHZlYyA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdmVjID0gbmV3IFZlY3RvcjJEKHZlYywgdmVjKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMkQodGhpcy54ICogdmVjLngsIHRoaXMueSAqIHZlYy55KVxuICAgIH1cblxuICAgIHN1bSh2ZWM6IFZlY3RvcjJEIHwgbnVtYmVyKTogVmVjdG9yMkQge1xuICAgICAgICBpZiAodHlwZW9mIHZlYyA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdmVjID0gbmV3IFZlY3RvcjJEKHZlYywgdmVjKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMkQodGhpcy54ICsgdmVjLngsIHRoaXMueSArIHZlYy55KVxuICAgIH1cblxuICAgIGRpdmlkZSh2ZWM6IFZlY3RvcjJEIHwgbnVtYmVyKTogVmVjdG9yMkQge1xuICAgICAgICBpZiAodHlwZW9mIHZlYyA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdmVjID0gbmV3IFZlY3RvcjJEKHZlYywgdmVjKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMkQodGhpcy54IC8gdmVjLngsIHRoaXMueSAvIHZlYy55KVxuICAgIH1cblxuICAgIG5vcm1hbGl6ZSAobnVtYmVyOiBudW1iZXIpOiBWZWN0b3IyRCB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvdChuZXcgVmVjdG9yMkQobnVtYmVyLCBudW1iZXIpKVxuICAgIH1cblxuICAgIGNsb25lKCk6IFZlY3RvcjJEIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyRCh0aGlzLngsIHRoaXMueSlcbiAgICB9XG5cbiAgICBpbnNpZGVPblJhZGl1cyh0cmlhbDogVmVjdG9yMkQsIHJhZGl1czogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBNYXRoLnBvdyh0cmlhbC54IC0gdGhpcy54LCAyKSArIE1hdGgucG93KHRyaWFsLnkgLSB0aGlzLnksIDIpIDw9IE1hdGgucG93KHJhZGl1cywgMik7XG4gICAgfVxuXG4gICAgZ2V0Tm9ybSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHRoaXMueCwgMikgKyBNYXRoLnBvdyh0aGlzLnksIDIpKTtcbiAgICB9XG59IiwiaW1wb3J0IENvbnRleHQgZnJvbSBcIi4vQ2FudmFzL0NvbnRleHRcIlxuaW1wb3J0IERpc2MgZnJvbSBcIi4vTW9kZWwvRGlzY1wiXG5pbXBvcnQgZ2V0R3Jhdml0eUFjYyBmcm9tIFwiLi9QaHlzaWMvR3Jhdml0eVwiXG5pbXBvcnQgTm9kZSBmcm9tIFwiLi9FbnRpdHkvTm9kZVwiXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSBcIi4vUGh5c2ljL1ZlY3RvcjJEXCJcbmltcG9ydCBQbGFuZXRTdGF0cyBmcm9tIFwiLi9NZW51L0NvbXBvbmVudC9QbGFuZXRTdGF0c1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYW5ldCBleHRlbmRzIE5vZGUge1xuICAgIC8vIHB1YmxpYyBtb2RlbDogRGlzY1xuICAgIHB1YmxpYyBtb2RlbDogRGlzY1xuICAgIHByb3RlY3RlZCBzdGF0czogUGxhbmV0U3RhdHNcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgaWQ6IHN0cmluZyxcbiAgICAgICAgY29vcmRzOiBWZWN0b3IyRCxcbiAgICAgICAgcmVhZG9ubHkgcmFkaXVzOiBudW1iZXIsXG4gICAgICAgIHJlYWRvbmx5IG1hc3M6IG51bWJlcixcbiAgICAgICAgcmVhZG9ubHkgY29sb3I6IHN0cmluZyxcbiAgICAgICAgcHVibGljIHZlbG9jaXR5OiBWZWN0b3IyRCxcbiAgICAgICAgcmVhZG9ubHkgcGxhbmV0czogUGxhbmV0W11cbiAgICAgICAgKSB7XG4gICAgICAgICAgICBzdXBlcihjb29yZHMpO1xuICAgICAgICAgICAgdGhpcy5tb2RlbCA9IG5ldyBEaXNjKHRoaXMuY29vcmRzLCB0aGlzLnJhZGl1cywgdGhpcy5jb2xvcik7XG4gICAgICAgICAgICB0aGlzLnN0YXRzID0gbmV3IFBsYW5ldFN0YXRzKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICB1cGRhdGUoZGVsdGE6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5pZCA9PSBcImVhcnRoIGFsb3JzXCIpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY29vcmRzKVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5wbGFuZXRzKSB7XG4gICAgICAgICAgICBjb25zdCBvdGhlciA9IHRoaXMucGxhbmV0c1tpXTtcblxuICAgICAgICAgICAgaWYgKG90aGVyLmlkID09IHRoaXMuaWQpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkgPSB0aGlzLnZlbG9jaXR5LnN1bShnZXRHcmF2aXR5QWNjKHRoaXMsIG90aGVyKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb29yZHMgPSB0aGlzLmNvb3Jkcy5zdW0odGhpcy52ZWxvY2l0eS5ub3JtYWxpemUoZGVsdGEpKTtcbiAgICAgICAgdGhpcy5tb2RlbC5jb29yZHMgPSB0aGlzLmNvb3JkcztcbiAgICAgICAgc3VwZXIudXBkYXRlKGRlbHRhKTtcbiAgICB9XG5cbiAgICBkcmF3KGNvbnRleHQ6IENvbnRleHQpOiB2b2lkIHtcbiAgICAgICAgY29udGV4dC5kcmF3KHRoaXMubW9kZWwpO1xuICAgICAgICB0aGlzLnN0YXRzLmRyYXcoY29udGV4dCk7XG4gICAgICAgIHN1cGVyLmRyYXcoY29udGV4dCk7XG4gICAgfVxuXG4gICAgc2V0Q29vcmRpbmF0ZXMoY29vcmRzOiBWZWN0b3IyRCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvb3JkcyA9IGNvb3JkcztcbiAgICB9XG5cbiAgICBnZXRTaXplcygpOiBWZWN0b3IyRCB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMkQodGhpcy5yYWRpdXMqMiwgdGhpcy5yYWRpdXMqMik7XG4gICAgfVxufSIsImltcG9ydCBFbnRpdHkgZnJvbSBcIi4uL0VudGl0eS9FbnRpdHlcIlxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL0NhbnZhcy9Db250ZXh0XCJcbmltcG9ydCBTY2VuZSBmcm9tIFwiLi9TY2VuZVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vQ2xlYXIgZXh0ZW5kcyBTY2VuZSBpbXBsZW1lbnRzIEVudGl0eSB7XG4gICAgcHVibGljIGVudGl0aWVzOiBFbnRpdHlbXSA9IFtdXG5cbiAgICBkcmF3KGNvbnRleHQ6IENvbnRleHQsIGRlbHRhPzogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZW50aXRpZXMuZm9yRWFjaChlID0+IGUuZHJhdyhjb250ZXh0LCBkZWx0YSkpXG4gICAgfVxufSIsImltcG9ydCBFbnRpdHkgZnJvbSBcIi4uL0VudGl0eS9FbnRpdHlcIlxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL0NhbnZhcy9Db250ZXh0XCJcbmltcG9ydCBOb2RlIGZyb20gXCIuLi9FbnRpdHkvTm9kZVwiO1xuaW1wb3J0IFZlY3RvcjJEIGZyb20gXCIuLi9QaHlzaWMvVmVjdG9yMkRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmUgZXh0ZW5kcyBOb2RlIHtcbiAgICBjb25zdHJ1Y3RvciAocHVibGljIGlkOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobmV3IFZlY3RvcjJEKDAsIDApKTtcbiAgICB9XG5cbiAgICBkcmF3KGNvbnRleHQ6IENvbnRleHQsIGRlbHRhPzogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnRleHQuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY29udGV4dC5jYW52YXMuY2FudmFzLndpZHRoLCBjb250ZXh0LmNhbnZhcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5lbnRpdGllcy5mb3JFYWNoKGUgPT4gZS5kcmF3KGNvbnRleHQsIGRlbHRhKSk7XG4gICAgfVxufSIsImltcG9ydCBTY2VuZSBmcm9tIFwiLi9TY2VuZVwiXG5pbXBvcnQgTm9DbGVhciBmcm9tIFwiLi9Ob0NsZWFyXCJcblxuZXhwb3J0IHtcbiAgICBTY2VuZSxcbiAgICBOb0NsZWFyXG59IiwiaW1wb3J0IENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnXCJcblxuY29uc3Qga2lsb21ldHJlVG9QeCA9IChkaXN0YW5jZTogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgICByZXR1cm4gZGlzdGFuY2UgLyBDb25maWcua21QZXJQeFxufVxuXG5jb25zdCBweFRvS2lsb21ldHJlID0gKHB4OiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICAgIHJldHVybiBweCAqIENvbmZpZy5rbVBlclB4XG59XG5cbmV4cG9ydCB7IGtpbG9tZXRyZVRvUHgsIHB4VG9LaWxvbWV0cmUgfSJdLCJzb3VyY2VSb290IjoiIn0=