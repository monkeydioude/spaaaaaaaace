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
const Canvas_1 = __webpack_require__(/*! ./src/Canvas/Canvas */ "./src/Canvas/Canvas.ts");
const Planet_1 = __webpack_require__(/*! ./src/Planet */ "./src/Planet.ts");
const Scene_1 = __webpack_require__(/*! ./src/Scene */ "./src/Scene/index.ts");
const Camera_1 = __webpack_require__(/*! ./src/Camera/Camera */ "./src/Camera/Camera.ts");
const Controls_1 = __webpack_require__(/*! ./src/Controls */ "./src/Controls/index.ts");
const Config_1 = __webpack_require__(/*! ./src/Config */ "./src/Config.ts");
const PlanetTrail_1 = __webpack_require__(/*! ./src/PlanetTrail */ "./src/PlanetTrail.ts");
const planets_1 = __webpack_require__(/*! ./planets */ "./planets.ts");
const Vector2D_1 = __webpack_require__(/*! ./src/Physic/Vector2D */ "./src/Physic/Vector2D.ts");
const PlanetStats_1 = __webpack_require__(/*! ./src/Menu/Component/PlanetStats */ "./src/Menu/Component/PlanetStats.ts");
const Distance_1 = __webpack_require__(/*! ./src/Unit/Distance */ "./src/Unit/Distance.ts");
const main = (delta, boards) => {
    // cTime += delta
    // if (cTime > Config.dpf) {
    let nBefore = window.performance.now();
    boards.forEach(b => {
        b.update(delta * Config_1.default.gameSpeed);
    });
    let nAfter = window.performance.now();
    // cTime -= Config.dpf
    // }
    setTimeout(() => main(Config_1.default.milliSecondsPerFrame, boards), (delta * 1000) - (nAfter - nBefore));
};
document.onreadystatechange = function () {
    if (document.readyState != "complete") {
        return;
    }
    const camera = new Camera_1.default(Config_1.default.spaceW / 2, Config_1.default.spaceH / 2, Config_1.default.zoomLevel);
    const bgBoard = new Canvas_1.default(document.body.clientWidth, document.body.clientHeight, camera, "background");
    const planetBoard = new Canvas_1.default(document.body.clientWidth, document.body.clientHeight, camera, "main");
    bgBoard.appendTo(document.body);
    planetBoard.appendTo(document.body);
    bgBoard.canvas.style.backgroundColor = "#000000";
    const planetScene = new Scene_1.Scene("main");
    const keyboardControls = new Controls_1.Keyboard(camera, planetBoard);
    const mouseControl = new Controls_1.Mouse();
    const planetsConfig = planets_1.default(planetBoard, camera);
    const domBody = document.querySelector("body");
    let planets = [];
    mouseControl.onClick((x, y) => {
        planets.forEach((p) => {
            if (p.coords.insideOnRadius(new Vector2D_1.default(Distance_1.pxToKilometre(camera.relativeX(x)), Distance_1.pxToKilometre(camera.relativeY(y))), p.radius + Distance_1.pxToKilometre(80))) {
                console.log(p.id);
            }
        });
    });
    domBody.addEventListener("keydown", keyboardControls.handleKeyboard.bind(keyboardControls));
    domBody.addEventListener("click", mouseControl.handleMouse.bind(mouseControl));
    for (let i in planetsConfig) {
        const p = planetsConfig[i];
        const planet = new Planet_1.default(i, new Vector2D_1.default(p.pos.x, p.pos.y), p.radius, p.mass, p.color, p.velocity, planets);
        planetScene.addEntity(planet);
        planetScene.addEntity(new PlanetTrail_1.default(planet));
        planets.push(planet);
    }
    planetBoard.addEntity(planetScene);
    planetScene.addEntity(new PlanetStats_1.resetIt());
    main(Config_1.default.milliSecondsPerFrame, [bgBoard, planetBoard]);
};


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
const Vector2D_1 = __webpack_require__(/*! ./src/Physic/Vector2D */ "./src/Physic/Vector2D.ts");
exports.default = (canvas, camera) => {
    const sun = {
        pos: new Vector2D_1.default(Distance_1.pxToKilometre(camera.relativeX(canvas.canvas.width / 2)), Distance_1.pxToKilometre(camera.relativeY(canvas.canvas.height / 2))),
        radius: Distance_1.pxToKilometre(120),
        mass: 1.9891e30,
        color: "orange",
        velocity: new Vector2D_1.default(0, 0)
    };
    const earth = {
        pos: new Vector2D_1.default(sun.pos.x - 149.59e6, sun.pos.y),
        radius: Distance_1.pxToKilometre(10),
        mass: 5.972e24,
        color: "skyblue",
        velocity: new Vector2D_1.default(0, Config_1.default.earthSpeed).dot(new Vector2D_1.default(1 / 5, 1.2 / 5)),
    };
    return {
        "sun41": sun,
        "earth alors": earth,
        "interloper": {
            pos: new Vector2D_1.default(sun.pos.x + 184400000, sun.pos.y - 50000000),
            radius: Distance_1.pxToKilometre(5),
            mass: 7.348e4,
            color: "red",
            velocity: new Vector2D_1.default(4, 4)
        }
    };
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
class Canvas extends Node_1.default {
    constructor(width, height, camera, id) {
        super();
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
    write(text, x, y) {
        // const fs = text.getFontSize()
        // const ff = text.getFontFamily()
        // const c = text.getCoordinates()
        // this.context.beginPath()
        // this.context.font = `${Config.fontSize}px ${ff}`
        this.context.fillText(text, x, y);
        // lines.map((line, i) => {
        //     this.context.fillText(line, +c.x, +c.y + (fs * i))
        // })
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
const G = Math.pow(10, -11) * 6.674;
var PlayMode;
(function (PlayMode) {
    PlayMode[PlayMode["PLAY"] = 0] = "PLAY";
    PlayMode[PlayMode["PAUSE"] = 1] = "PAUSE";
})(PlayMode || (PlayMode = {}));
const mode = PlayMode.PLAY;
// const kmPerPx = 1.3e5
const kmPerPx = 1.8e5;
exports.default = {
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
};


/***/ }),

/***/ "./src/Controls/Keyboard.ts":
/*!**********************************!*\
  !*** ./src/Controls/Keyboard.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = __webpack_require__(/*! ../Config */ "./src/Config.ts");
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
                if (this.camera.z <= Config_1.default.zoomMin) {
                    return;
                }
                this.camera.z -= Config_1.default.zoomActionPow;
            },
            88: () => {
                this.camera.z += Config_1.default.zoomActionPow;
            },
            37: () => {
                if (this.camera.x - Config_1.default.decalByMove <= 0) {
                    return;
                }
                this.camera.x -= Config_1.default.decalByMove;
            },
            38: () => {
                if (this.camera.y - Config_1.default.decalByMove <= 0) {
                    return;
                }
                this.camera.y -= Config_1.default.decalByMove;
            },
            39: () => {
                if (this.camera.x >= Config_1.default.spaceW) {
                    return;
                }
                this.camera.x += Config_1.default.decalByMove;
            },
            40: () => {
                if (this.camera.y >= Config_1.default.spaceH) {
                    return;
                }
                this.camera.y += Config_1.default.decalByMove;
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
const Vector2D_1 = __webpack_require__(/*! ../../Physic/Vector2D */ "./src/Physic/Vector2D.ts");
const Text_1 = __webpack_require__(/*! ../Container/Text */ "./src/Menu/Container/Text.ts");
let it = 0;
class PlanetStats {
    constructor(planet) {
        this.planet = planet;
        this.localIt = 0;
        this.localIt = it;
        it++;
    }
    draw(context) {
        const windowH = 100;
        const floatFix = 6;
        new Text_1.default(new Vector2D_1.default(20, 20 + (windowH * this.localIt)), new Vector2D_1.default(200, windowH), this.planet.color).setLines([
            `> ${this.planet.id}`,
            `  mass: ${this.planet.mass}`,
            '  velocity:',
            `  - x: ${this.planet.velocity.x > 0 ? " " : ""}${this.planet.velocity.x.toFixed(floatFix)} km/s`,
            `  - y: ${this.planet.velocity.y > 0 ? " " : ""}${this.planet.velocity.y.toFixed(floatFix)} km/s`,
        ]).draw(context);
    }
}
exports.default = PlanetStats;
class resetIt {
    update() {
        it = 0;
    }
    draw() { }
    getEntities() {
        return [];
    }
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
            const textWidth = ctx.context.measureText(l).width;
            // number of lines we should break into.
            // min(n) = 1;
            const n = Math.ceil(textWidth / width);
            const charS = Math.ceil(textWidth / l.length);
            // cycle over number of lines
            for (let i = 0; i < n; i++) {
                lines.push(l.slice(charS * i, charS * (i + 1)));
            }
        });
        return lines;
    }
    writeLines(lines, x, y, w, h, fs, iOverload, ctx) {
        lines.forEach((line, i) => {
            const bl = this.breakLine(w, line, ctx);
            if (bl.length > 0) {
                this.writeLines(bl, x, y, w, h, fs, iOverload, ctx);
                iOverload += bl.length;
                return;
            }
            const canvasY = y + (fs * (i + iOverload));
            const canvasX = x;
            ctx.write(line, canvasX, canvasY);
        });
    }
    draw(ctx) {
        // canvasTxt.fontSize = this.getFontSize();
        const { x, y } = this.getCoordinates();
        const { x: w, y: h } = this.getSizes();
        this.writeLines(this.lines, x, y, w, h, this.getFontSize(), 0, ctx);
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
        ctx.arc(Distance_1.kilometreToPx(this.coords.x), Distance_1.kilometreToPx(this.coords.y), Distance_1.kilometreToPx(this.radius), 0, 2 * Math.PI);
        ctx.fill(this.color);
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

/***/ "./src/Model/Line.ts":
/*!***************************!*\
  !*** ./src/Model/Line.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = __webpack_require__(/*! ../Entity/Node */ "./src/Entity/Node.ts");
const Distance_1 = __webpack_require__(/*! ../Unit/Distance */ "./src/Unit/Distance.ts");
class Dot extends Node_1.default {
    constructor(from, to, color, lineWidth = 1) {
        super();
        this.from = from;
        this.to = to;
        this.color = color;
        this.lineWidth = lineWidth;
    }
    draw(ctx) {
        ctx.line(Distance_1.pxToKilometre(this.from.x), Distance_1.pxToKilometre(this.from.y), Distance_1.pxToKilometre(this.to.x), Distance_1.pxToKilometre(this.to.y), this.color, this.lineWidth);
    }
    getCoordinates() {
        return this.from;
    }
    setCoordinates(coords) {
        this.from = coords;
    }
}
exports.default = Dot;


/***/ }),

/***/ "./src/Physic/Gravity.ts":
/*!*******************************!*\
  !*** ./src/Physic/Gravity.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = __webpack_require__(/*! ../Config */ "./src/Config.ts");
const getForce = (a, b) => {
    // const dist = Geometry.getDistanceBetweenObjects(a.coords, b.coords)
    const r21_v = b.coords.sub(a.coords);
    const dist = Math.sqrt((r21_v.x * r21_v.x * 1000) + (r21_v.y * r21_v.y * 1000));
    const f = (Config_1.default.G * a.mass * b.mass) / (dist * dist);
    const f21_v = r21_v.divide(dist).dot(f);
    return f21_v;
};
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
const PlanetStats_1 = __webpack_require__(/*! ./Menu/Component/PlanetStats */ "./src/Menu/Component/PlanetStats.ts");
class Planet extends Node_1.default {
    constructor(id, coords, radius, mass, color, velocity, planets) {
        super();
        this.id = id;
        this.coords = coords;
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
    getCoordinates() {
        return this.coords;
    }
    setCoordinates(coords) {
        this.coords = coords;
    }
}
exports.default = Planet;


/***/ }),

/***/ "./src/PlanetTrail.ts":
/*!****************************!*\
  !*** ./src/PlanetTrail.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Line_1 = __webpack_require__(/*! ./Model/Line */ "./src/Model/Line.ts");
const Node_1 = __webpack_require__(/*! ./Entity/Node */ "./src/Entity/Node.ts");
class PlanetTrail extends Node_1.default {
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
        this.trails.push(new Line_1.default(this.previousCoordinates, this.planet.getCoordinates().clone(), this.planet.color, 0.2));
        this.previousCoordinates = this.planet.getCoordinates().clone();
    }
    draw(canvas) {
        this.trails.forEach(d => canvas.draw(d));
    }
}
exports.default = PlanetTrail;


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
class Scene extends Node_1.default {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vcGxhbmV0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2FtZXJhL0NhbWVyYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2FudmFzL0NhbnZhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2FudmFzL0NvbnRleHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29udHJvbHMvS2V5Ym9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnRyb2xzL01vdXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9Db250cm9scy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRW50aXR5L05vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01lbnUvQ29tcG9uZW50L1BsYW5ldFN0YXRzLnRzIiwid2VicGFjazovLy8uL3NyYy9NZW51L0NvbnRhaW5lci9CbG9jay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTWVudS9Db250YWluZXIvVGV4dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTW9kZWwvRGlzYy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTW9kZWwvTGluZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGh5c2ljL0dyYXZpdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BoeXNpYy9WZWN0b3IyRC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGxhbmV0LnRzIiwid2VicGFjazovLy8uL3NyYy9QbGFuZXRUcmFpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2NlbmUvTm9DbGVhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2NlbmUvU2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NjZW5lL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9Vbml0L0Rpc3RhbmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSwwRkFBeUM7QUFDekMsNEVBQWtDO0FBQ2xDLCtFQUFrQztBQUNsQywwRkFBeUM7QUFDekMsd0ZBQWdEO0FBQ2hELDRFQUFpQztBQUNqQywyRkFBNEM7QUFDNUMsdUVBQW1DO0FBQ25DLGdHQUE2QztBQUM3Qyx5SEFBMkQ7QUFDM0QsNEZBQW1FO0FBRW5FLE1BQU0sSUFBSSxHQUFHLENBQUMsS0FBYSxFQUFFLE1BQWdCLEVBQUUsRUFBRTtJQUM3QyxpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDdkMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNmLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLGdCQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDO0lBQ0YsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUN0QyxzQkFBc0I7SUFDdEIsSUFBSTtJQUNKLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQU0sQ0FBQyxvQkFBb0IsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ3JHLENBQUM7QUFFRCxRQUFRLENBQUMsa0JBQWtCLEdBQUc7SUFDMUIsSUFBSSxRQUFRLENBQUMsVUFBVSxJQUFJLFVBQVUsRUFBRTtRQUNuQyxPQUFPO0tBQ1Y7SUFDRCxNQUFNLE1BQU0sR0FBRyxJQUFJLGdCQUFNLENBQUMsZ0JBQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLGdCQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxnQkFBTSxDQUFDLFNBQVMsQ0FBQztJQUNqRixNQUFNLE9BQU8sR0FBRyxJQUFJLGdCQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3hHLE1BQU0sV0FBVyxHQUFHLElBQUksZ0JBQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFFdEcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztJQUVqRCxNQUFNLFdBQVcsR0FBRyxJQUFJLGFBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUV0QyxNQUFNLGdCQUFnQixHQUFHLElBQUksbUJBQVEsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDM0QsTUFBTSxZQUFZLEdBQUcsSUFBSSxnQkFBSyxFQUFFLENBQUM7SUFDakMsTUFBTSxhQUFhLEdBQUcsaUJBQVUsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdEQsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQyxJQUFJLE9BQU8sR0FBYSxFQUFFLENBQUM7SUFFM0IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQVEsRUFBRTtRQUNoRCxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBUyxFQUFFLEVBQUU7WUFDMUIsSUFDSSxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FDbkIsSUFBSSxrQkFBUSxDQUNSLHdCQUFhLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNsQyx3QkFBYSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDckMsRUFDTCxDQUFDLENBQUMsTUFBTSxHQUFHLHdCQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDL0I7Z0JBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDckI7UUFDTCxDQUFDLENBQUM7SUFDTixDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDNUYsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBRS9FLEtBQUssSUFBSSxDQUFDLElBQUksYUFBYSxFQUFFO1FBQ3pCLE1BQU0sQ0FBQyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDMUIsTUFBTSxNQUFNLEdBQUcsSUFBSSxnQkFBTSxDQUFDLENBQUMsRUFDdkIsSUFBSSxrQkFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQzlCLENBQUMsQ0FBQyxNQUFNLEVBQ1IsQ0FBQyxDQUFDLElBQUksRUFDTixDQUFDLENBQUMsS0FBSyxFQUNQLENBQUMsQ0FBQyxRQUFRLEVBQ1YsT0FBTyxDQUNWO1FBQ0QsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixXQUFXLENBQUMsU0FBUyxDQUFDLElBQUkscUJBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQy9DLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDeEI7SUFFRCxXQUFXLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ25DLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxxQkFBTyxFQUFFLENBQUMsQ0FBQztJQUVyQyxJQUFJLENBQUMsZ0JBQU0sQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO0FBQzdELENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2hGRiw0RUFBaUM7QUFDakMsNEZBQW1EO0FBQ25ELGdHQUE0QztBQUU1QyxrQkFBZSxDQUFDLE1BQWMsRUFBRSxNQUFjLEVBQXdCLEVBQUU7SUFDcEUsTUFBTSxHQUFHLEdBQUc7UUFDUixHQUFHLEVBQUUsSUFBSSxrQkFBUSxDQUNiLHdCQUFhLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUN4RCx3QkFBYSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FDNUQ7UUFDRCxNQUFNLEVBQUUsd0JBQWEsQ0FBQyxHQUFHLENBQUM7UUFDMUIsSUFBSSxFQUFFLFNBQVM7UUFDZixLQUFLLEVBQUUsUUFBUTtRQUNmLFFBQVEsRUFBRSxJQUFJLGtCQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUMvQjtJQUVELE1BQU0sS0FBSyxHQUFHO1FBQ1YsR0FBRyxFQUFFLElBQUksa0JBQVEsQ0FDYixHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQ3BCLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUNaO1FBQ0QsTUFBTSxFQUFFLHdCQUFhLENBQUMsRUFBRSxDQUFDO1FBQ3pCLElBQUksRUFBRSxRQUFRO1FBQ2QsS0FBSyxFQUFFLFNBQVM7UUFDaEIsUUFBUSxFQUFFLElBQUksa0JBQVEsQ0FBQyxDQUFDLEVBQUUsZ0JBQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxrQkFBUSxDQUFDLENBQUMsR0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFDLENBQUMsQ0FBQyxDQUFDO0tBRTdFO0lBQ0QsT0FBTztRQUNDLE9BQU8sRUFBRSxHQUFHO1FBQ1osYUFBYSxFQUFFLEtBQUs7UUFDcEIsWUFBWSxFQUFFO1lBQ1YsR0FBRyxFQUFFLElBQUksa0JBQVEsQ0FDYixHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxTQUFTLEVBQ3JCLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FDdkI7WUFDRCxNQUFNLEVBQUUsd0JBQWEsQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsS0FBSztZQUNaLFFBQVEsRUFBRSxJQUFJLGtCQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMvQjtLQUNSO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDM0NELE1BQXFCLE1BQU07SUFLdkIsWUFBWSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVM7UUFKcEMsTUFBQyxHQUFXLENBQUM7UUFDYixNQUFDLEdBQVcsQ0FBQztRQUNiLE1BQUMsR0FBVyxDQUFDO1FBR2hCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNWLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNWLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUNkLENBQUM7SUFFRCxDQUFDLENBQUMsQ0FBUztRQUNQLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsQ0FBQyxDQUFDLENBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELFVBQVUsQ0FBQyxDQUFTO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELFNBQVMsQ0FBQyxDQUFTO1FBQ2YsT0FBTyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELFNBQVMsQ0FBQyxDQUFTO1FBQ2YsT0FBTyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQztDQUNKO0FBOUJELHlCQThCQzs7Ozs7Ozs7Ozs7Ozs7O0FDN0JELGtGQUErQjtBQUUvQixpRkFBaUM7QUFFakMsTUFBcUIsTUFBTyxTQUFRLGNBQUk7SUFLcEMsWUFBWSxLQUFhLEVBQUUsTUFBYyxFQUFFLE1BQWMsRUFBUyxFQUFVO1FBQ3hFLEtBQUssRUFBRTtRQUR1RCxPQUFFLEdBQUYsRUFBRSxDQUFRO1FBRnJFLGFBQVEsR0FBYSxFQUFFO1FBSTFCLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFDOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUU7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSztRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUM7SUFDMUUsQ0FBQztJQUVELFFBQVEsQ0FBQyxPQUFvQjtRQUN6QixPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFhO1FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3RCLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztRQUMvQixDQUFDLENBQUM7SUFDTixDQUFDO0NBQ0o7QUF4QkQseUJBd0JDOzs7Ozs7Ozs7Ozs7Ozs7QUN6QkQsTUFBcUIsT0FBTztJQUN4QixZQUNhLE9BQWlDLEVBQ2pDLE1BQWMsRUFDZCxNQUFjO1FBRmQsWUFBTyxHQUFQLE9BQU8sQ0FBMEI7UUFDakMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDcEIsQ0FBQztJQUVSLElBQUksQ0FBQyxLQUFZO1FBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUU7UUFDeEIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7SUFDekIsQ0FBQztJQUVELEdBQUcsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxFQUFVLEVBQUUsRUFBVSxFQUFFLFlBQW9CLENBQUM7UUFDOUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsU0FBUztRQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3ZGLE9BQU8sSUFBSTtJQUNmLENBQUM7SUFFRCxLQUFLLENBQUMsSUFBWSxFQUFFLENBQVMsRUFBRSxDQUFTO1FBQ3BDLGdDQUFnQztRQUNoQyxrQ0FBa0M7UUFDbEMsa0NBQWtDO1FBRWxDLDJCQUEyQjtRQUMzQixtREFBbUQ7UUFFbkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsQywyQkFBMkI7UUFDM0IseURBQXlEO1FBQ3pELEtBQUs7SUFDVCxDQUFDO0lBRUQsUUFBUSxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxLQUFhO1FBQzlELElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLEtBQUs7UUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvRCxPQUFPLElBQUk7SUFDZixDQUFDO0lBRUQsSUFBSSxDQUFDLEtBQWE7UUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxLQUFLO1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1FBQ25CLE9BQU8sSUFBSTtJQUNmLENBQUM7SUFFRCxJQUFJLENBQUMsS0FBYSxFQUFFLEtBQWEsRUFBRSxHQUFXLEVBQUUsR0FBVyxFQUFFLEtBQWEsRUFBRSxZQUFvQixDQUFDO1FBQzdGLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLFNBQVM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsS0FBSztRQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRTtRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtJQUN6QixDQUFDO0NBQ0o7QUFyREQsMEJBcURDOzs7Ozs7Ozs7Ozs7Ozs7QUN6REQsTUFBTSxTQUFTLEdBQUcsQ0FBQztBQUNuQixNQUFNLEdBQUcsR0FBRyxFQUFFO0FBQ2QsTUFBTSxvQkFBb0IsR0FBRyxDQUFDLEdBQUcsR0FBRztBQUNwQyxJQUFJLFNBQVMsR0FBRyxHQUFHO0FBQ25CLElBQUksT0FBTyxHQUFHLEdBQUc7QUFDakIsTUFBTSxhQUFhLEdBQUcsSUFBSTtBQUMxQixNQUFNLFdBQVcsR0FBRyxFQUFFO0FBRXRCLElBQUksVUFBVSxHQUFHLENBQUM7QUFDbEIsSUFBSSxnQkFBZ0IsR0FBRyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBQztBQUN4QyxNQUFNLGNBQWMsR0FBRyxFQUFFO0FBQ3pCLE1BQU0sZUFBZSxHQUFHLEVBQUU7QUFFMUIsTUFBTSxNQUFNLEdBQUcsS0FBSztBQUNwQixNQUFNLE1BQU0sR0FBRyxLQUFLO0FBQ3BCLE1BQU0sTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDO0FBQ3pCLE1BQU0sTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDO0FBRXpCLE1BQU0sT0FBTyxHQUFHLENBQUM7QUFFakIsTUFBTSxRQUFRLEdBQUcsRUFBRTtBQUNuQixJQUFJLEtBQUssR0FBRyxJQUFJO0FBQ2hCLE1BQU0sVUFBVSxHQUFHLEtBQUssRUFBQyxPQUFPO0FBQ2hDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSztBQUVuQyxJQUFLLFFBR0o7QUFIRCxXQUFLLFFBQVE7SUFDVCx1Q0FBSTtJQUNKLHlDQUFLO0FBQ1QsQ0FBQyxFQUhJLFFBQVEsS0FBUixRQUFRLFFBR1o7QUFFRCxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSTtBQUMxQix3QkFBd0I7QUFDeEIsTUFBTSxPQUFPLEdBQUcsS0FBSztBQUVyQixrQkFBZTtJQUNYLFNBQVMsRUFBRSxHQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO0lBQzdCLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsTUFBTSxFQUFFLE9BQU8sR0FBRyxJQUFJO0lBQ3RCLGNBQWMsRUFBRSxJQUFJO0lBQ3BCLENBQUM7SUFDRCxTQUFTO0lBQ1QsR0FBRztJQUNILFNBQVM7SUFDVCxhQUFhO0lBQ2IsV0FBVztJQUNYLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGVBQWU7SUFDZixNQUFNO0lBQ04sTUFBTTtJQUNOLE1BQU07SUFDTixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixLQUFLO0lBQ0wsUUFBUTtJQUNSLElBQUk7SUFDSixPQUFPO0lBQ1AsVUFBVTtJQUNWLG9CQUFvQjtDQUN2Qjs7Ozs7Ozs7Ozs7Ozs7O0FDN0RELHlFQUE4QjtBQUc5QixNQUFxQixRQUFRO0lBR3pCLFlBQXFCLE1BQWMsRUFBVyxNQUFjO1FBQXZDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3hELElBQUksQ0FBQyxlQUFlLEdBQUc7WUFDbkIsK0JBQStCO1lBQy9CLG9EQUFvRDtZQUNwRCxFQUFFLEVBQUUsR0FBRyxFQUFFO2dCQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDckIsQ0FBQztZQUNELEVBQUUsRUFBRSxHQUFHLEVBQUU7Z0JBQ0wsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxnQkFBTSxDQUFDLE9BQU8sRUFBRTtvQkFDakMsT0FBTTtpQkFDVDtnQkFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxnQkFBTSxDQUFDLGFBQWE7WUFDekMsQ0FBQztZQUNELEVBQUUsRUFBRSxHQUFHLEVBQUU7Z0JBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksZ0JBQU0sQ0FBQyxhQUFhO1lBQ3pDLENBQUM7WUFDRCxFQUFFLEVBQUUsR0FBRyxFQUFFO2dCQUNMLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsZ0JBQU0sQ0FBQyxXQUFXLElBQUksQ0FBQyxFQUFFO29CQUN6QyxPQUFPO2lCQUNWO2dCQUNELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLGdCQUFNLENBQUMsV0FBVztZQUN2QyxDQUFDO1lBQ0QsRUFBRSxFQUFFLEdBQUcsRUFBRTtnQkFDTCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLGdCQUFNLENBQUMsV0FBVyxJQUFJLENBQUMsRUFBRTtvQkFDekMsT0FBTztpQkFDVjtnQkFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxnQkFBTSxDQUFDLFdBQVc7WUFDdkMsQ0FBQztZQUNELEVBQUUsRUFBRSxHQUFHLEVBQUU7Z0JBQ0wsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxnQkFBTSxDQUFDLE1BQU0sRUFBRTtvQkFDaEMsT0FBTztpQkFDVjtnQkFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxnQkFBTSxDQUFDLFdBQVc7WUFDdkMsQ0FBQztZQUNELEVBQUUsRUFBRSxHQUFHLEVBQUU7Z0JBQ0wsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxnQkFBTSxDQUFDLE1BQU0sRUFBRTtvQkFDaEMsT0FBTztpQkFDVjtnQkFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxnQkFBTSxDQUFDLFdBQVc7WUFDdkMsQ0FBQztTQUNKO0lBQ0wsQ0FBQztJQUVELGNBQWMsQ0FBQyxLQUFvQjtRQUMvQixJQUFJLElBQUksQ0FBQyxlQUFlLElBQUksU0FBUztZQUNqQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3RDLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7SUFDMUMsQ0FBQztDQUNKO0FBdkRELDJCQXVEQzs7Ozs7Ozs7Ozs7Ozs7O0FDM0RELE1BQXFCLEtBQUs7SUFFdEIsT0FBTyxDQUFDLEVBQWtDO1FBQ3RDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxXQUFXLENBQUMsQ0FBYTtRQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7Q0FDSjtBQVRELHdCQVNDOzs7Ozs7Ozs7Ozs7Ozs7O0FDVEQsdUZBQWtDO0FBSTlCLG1CQUpHLGtCQUFRLENBSUg7QUFIWiw4RUFBNEI7QUFJeEIsZ0JBSkcsZUFBSyxDQUlIOzs7Ozs7Ozs7Ozs7Ozs7QUNGVCxNQUE4QixJQUFJO0lBQWxDO1FBQ1csYUFBUSxHQUFhLEVBQUU7SUFrQmxDLENBQUM7SUFoQkcsTUFBTSxDQUFDLEtBQWE7UUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxJQUFJLENBQUMsT0FBZ0IsRUFBRSxLQUFjO1FBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELFdBQVc7UUFDUCxPQUFPLElBQUksQ0FBQyxRQUFRO0lBQ3hCLENBQUM7SUFFRCxTQUFTLENBQUMsTUFBYztRQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDMUIsT0FBTyxJQUFJO0lBQ2YsQ0FBQztDQUNKO0FBbkJELHVCQW1CQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCRCxnR0FBNkM7QUFFN0MsNEZBQXFDO0FBRXJDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztBQUVYLE1BQXFCLFdBQVc7SUFFNUIsWUFBcUIsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFEekIsWUFBTyxHQUFXLENBQUMsQ0FBQztRQUUxQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixFQUFFLEVBQUUsQ0FBQztJQUNULENBQUM7SUFFRCxJQUFJLENBQUMsT0FBZ0I7UUFDakIsTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ3BCLE1BQU0sUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLGNBQUksQ0FDSixJQUFJLGtCQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFDL0MsSUFBSSxrQkFBUSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsRUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQ3BCLENBQUMsUUFBUSxDQUFDO1lBQ1AsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRTtZQUNyQixXQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQzdCLGFBQWE7WUFDYixVQUFVLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU87WUFDakcsVUFBVSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPO1NBQ3BHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckIsQ0FBQztDQUNKO0FBdEJELDhCQXNCQztBQUVELE1BQU0sT0FBTztJQUNULE1BQU07UUFDRixFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELElBQUksS0FBSSxDQUFDO0lBQ1QsV0FBVztRQUNQLE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztDQUNKO0FBR0csMEJBQU87Ozs7Ozs7Ozs7Ozs7OztBQzFDWCxnR0FBNEM7QUFHNUMsTUFBcUIsS0FBSztJQUt0QixZQUNhLE1BQWdCLEVBQ2hCLEtBQWUsRUFDakIsUUFBZ0IsU0FBUyxFQUN6QixXQUFtQixFQUFFLEVBQ3JCLGFBQXFCLFNBQVM7UUFKNUIsV0FBTSxHQUFOLE1BQU0sQ0FBVTtRQUNoQixVQUFLLEdBQUwsS0FBSyxDQUFVO1FBQ2pCLFVBQUssR0FBTCxLQUFLLENBQW9CO1FBQ3pCLGFBQVEsR0FBUixRQUFRLENBQWE7UUFDckIsZUFBVSxHQUFWLFVBQVUsQ0FBb0I7UUFUbEMsV0FBTSxHQUFXLENBQUM7UUFDbEIsV0FBTSxHQUFXLENBQUM7SUFVekIsQ0FBQztJQUVELFFBQVEsQ0FBQyxNQUFjLEVBQUUsTUFBYztRQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsY0FBYztRQUNWLE9BQU8sSUFBSSxrQkFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRUQsUUFBUTtRQUNKLE9BQU8sSUFBSSxDQUFDLEtBQUs7SUFDckIsQ0FBQztJQUVELFFBQVE7UUFDSixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVELFdBQVc7UUFDUCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUVELGFBQWE7UUFDVCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQUVELE1BQU0sS0FBVSxDQUFDO0lBRWpCLElBQUksQ0FBQyxPQUFnQjtRQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsV0FBVztRQUNQLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0NBQ0o7QUFqREQsd0JBaURDOzs7Ozs7Ozs7Ozs7Ozs7QUNyREQsb0ZBQTRCO0FBRTVCLE1BQXFCLElBQUssU0FBUSxlQUFLO0lBQXZDOztRQUNjLFVBQUssR0FBYSxFQUFFO0lBbUVsQyxDQUFDO0lBakVHLE9BQU8sQ0FBQyxJQUFZO1FBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxRQUFRLENBQUMsS0FBZTtRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsZUFBZSxDQUFDLEtBQWEsRUFBRSxJQUFZLEVBQUUsR0FBWTtRQUNyRCxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkQsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFhLEVBQUUsSUFBWSxFQUFFLEdBQVk7UUFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRTtZQUN6QyxPQUFPLEVBQUUsQ0FBQztTQUNiO1FBQ0QsSUFBSSxLQUFLLEdBQWEsRUFBRSxDQUFDO1FBQ3pCLGVBQWU7UUFDZixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQVMsRUFBRSxFQUFFO1lBQ25DLE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNuRCx3Q0FBd0M7WUFDeEMsY0FBYztZQUNkLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5Qyw2QkFBNkI7WUFDN0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDeEIsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBQyxDQUFDLEVBQUUsS0FBSyxHQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3QztRQUNMLENBQUMsQ0FBQztRQUVGLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxVQUFVLENBQ04sS0FBZSxFQUNmLENBQVMsRUFDVCxDQUFTLEVBQ1QsQ0FBUyxFQUNULENBQVMsRUFDVCxFQUFVLEVBQ1YsU0FBaUIsRUFDakIsR0FBWTtRQUVaLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFZLEVBQUUsQ0FBUyxFQUFFLEVBQUU7WUFDdEMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3hDLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3BELFNBQVMsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDO2dCQUN2QixPQUFPO2FBQ1Y7WUFDRCxNQUFNLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUMzQyxNQUFNLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFDbEIsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELElBQUksQ0FBQyxHQUFZO1FBQ2IsMkNBQTJDO1FBQzNDLE1BQU0sRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3JDLE1BQU0sRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Q0FDSjtBQXBFRCx1QkFvRUM7Ozs7Ozs7Ozs7Ozs7OztBQ3JFRCx5RkFBK0Q7QUFHL0QsTUFBcUIsSUFBSTtJQUNyQixZQUFtQixNQUFnQixFQUFTLE1BQWMsRUFBUyxLQUFhO1FBQTdELFdBQU0sR0FBTixNQUFNLENBQVU7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtJQUFHLENBQUM7SUFFcEYsSUFBSSxDQUFDLEdBQVk7UUFDYixHQUFHLENBQUMsR0FBRyxDQUFDLHdCQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSx3QkFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsd0JBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQy9HLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRUQsY0FBYztRQUNWLE9BQU8sSUFBSSxDQUFDLE1BQU07SUFDdEIsQ0FBQztJQUVELGNBQWMsQ0FBQyxNQUFnQjtRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU07SUFDeEIsQ0FBQztDQUNKO0FBZkQsdUJBZUM7Ozs7Ozs7Ozs7Ozs7OztBQ25CRCxpRkFBaUM7QUFFakMseUZBQWdEO0FBRWhELE1BQXFCLEdBQUksU0FBUSxjQUFJO0lBQ2pDLFlBQ1csSUFBYyxFQUNkLEVBQVksRUFDWixLQUFhLEVBQ2IsWUFBb0IsQ0FBQztRQUU1QixLQUFLLEVBQUU7UUFMQSxTQUFJLEdBQUosSUFBSSxDQUFVO1FBQ2QsT0FBRSxHQUFGLEVBQUUsQ0FBVTtRQUNaLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixjQUFTLEdBQVQsU0FBUyxDQUFZO0lBR2hDLENBQUM7SUFFRCxJQUFJLENBQUMsR0FBWTtRQUNiLEdBQUcsQ0FBQyxJQUFJLENBQ0osd0JBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUMxQix3QkFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQzFCLHdCQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFDeEIsd0JBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUN4QixJQUFJLENBQUMsS0FBSyxFQUNWLElBQUksQ0FBQyxTQUFTLENBQ2pCO0lBQ0wsQ0FBQztJQUVELGNBQWM7UUFDVixPQUFPLElBQUksQ0FBQyxJQUFJO0lBQ3BCLENBQUM7SUFFRCxjQUFjLENBQUMsTUFBZ0I7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNO0lBQ3RCLENBQUM7Q0FDSjtBQTVCRCxzQkE0QkM7Ozs7Ozs7Ozs7Ozs7OztBQ2hDRCx5RUFBOEI7QUFHOUIsTUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFZLEVBQUU7SUFDaEQsc0VBQXNFO0lBQ3RFLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDcEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUMzRSxNQUFNLENBQUMsR0FBRyxDQUFDLGdCQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUN0RCxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdkMsT0FBTyxLQUFLO0FBQ2hCLENBQUM7QUFFRCxrQkFBZSxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQVksRUFBRTtJQUM5QyxPQUFPLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDeEMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDZkQsTUFBcUIsUUFBUTtJQUN6QixZQUFvQixDQUFTLEVBQVMsQ0FBUztRQUEzQixNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBQVMsTUFBQyxHQUFELENBQUMsQ0FBUTtJQUFHLENBQUM7SUFFbkQsR0FBRyxDQUFDLEdBQXNCO1FBQ3RCLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO1lBQ3pCLEdBQUcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO1NBQy9CO1FBQ0QsT0FBTyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxjQUFjO0lBQ2QsR0FBRyxDQUFDLEdBQXNCO1FBQ3RCLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO1lBQ3pCLEdBQUcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO1NBQy9CO1FBQ0QsT0FBTyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxHQUFHLENBQUMsR0FBc0I7UUFDdEIsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDekIsR0FBRyxHQUFHLElBQUksUUFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7U0FDL0I7UUFDRCxPQUFPLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELE1BQU0sQ0FBQyxHQUFzQjtRQUN6QixJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUN6QixHQUFHLEdBQUcsSUFBSSxRQUFRLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztTQUMvQjtRQUNELE9BQU8sSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsU0FBUyxDQUFFLE1BQWM7UUFDckIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksUUFBUSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsS0FBSztRQUNELE9BQU8sSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxjQUFjLENBQUMsS0FBZSxFQUFFLE1BQWM7UUFDMUMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoRyxDQUFDO0NBQ0o7QUEzQ0QsMkJBMkNDOzs7Ozs7Ozs7Ozs7Ozs7QUMxQ0QsOEVBQStCO0FBQy9CLHlGQUE0QztBQUM1QyxnRkFBZ0M7QUFFaEMscUhBQXNEO0FBRXRELE1BQXFCLE1BQU8sU0FBUSxjQUFJO0lBS3BDLFlBQ1csRUFBVSxFQUNWLE1BQWdCLEVBQ2QsTUFBYyxFQUNkLElBQVksRUFDWixLQUFhLEVBQ2YsUUFBa0IsRUFDaEIsT0FBaUI7UUFFdEIsS0FBSyxFQUFFLENBQUM7UUFSTCxPQUFFLEdBQUYsRUFBRSxDQUFRO1FBQ1YsV0FBTSxHQUFOLE1BQU0sQ0FBVTtRQUNkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNmLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDaEIsWUFBTyxHQUFQLE9BQU8sQ0FBVTtRQUd0QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksY0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLHFCQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVMLE1BQU0sQ0FBQyxLQUFhO1FBQ2hCLElBQUksSUFBSSxDQUFDLEVBQUUsSUFBSSxhQUFhLEVBQUU7WUFDMUIsMkJBQTJCO1NBQzlCO1FBQ0QsS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3hCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFOUIsSUFBSSxLQUFLLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUU7Z0JBQ3JCLFNBQVM7YUFDWjtZQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsaUJBQWEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUNqRTtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2hDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELElBQUksQ0FBQyxPQUFnQjtRQUNqQixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxjQUFjO1FBQ1YsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxjQUFjLENBQUMsTUFBZ0I7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztDQUNKO0FBakRELHlCQWlEQzs7Ozs7Ozs7Ozs7Ozs7O0FDdkRELDhFQUErQjtBQUUvQixnRkFBZ0M7QUFHaEMsTUFBcUIsV0FBWSxTQUFRLGNBQUk7SUFLekMsWUFBb0IsTUFBYztRQUM5QixLQUFLLEVBQUU7UUFEUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSDFCLGNBQVMsR0FBRyxFQUFFO1FBQ2Qsd0JBQW1CLEdBQWEsSUFBSTtRQUl4QyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUU7UUFDaEIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFO0lBQ25FLENBQUM7SUFFRCxNQUFNO1FBQ0YsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1NBQ3RCO1FBRUQsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEtBQUssSUFBSSxFQUFFO1lBQ25DLE9BQU07U0FDVDtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNaLElBQUksY0FBSSxDQUNKLElBQUksQ0FBQyxtQkFBbUIsRUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQ2pCLEdBQUcsQ0FDTixDQUNKO1FBQ0QsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFO0lBQ25FLENBQUM7SUFFRCxJQUFJLENBQUMsTUFBZTtRQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztDQUNKO0FBbENELDhCQWtDQzs7Ozs7Ozs7Ozs7Ozs7O0FDdENELDJFQUEyQjtBQUUzQixNQUFxQixPQUFRLFNBQVEsZUFBSztJQUExQzs7UUFDVyxhQUFRLEdBQWEsRUFBRTtJQUtsQyxDQUFDO0lBSEcsSUFBSSxDQUFDLE9BQWdCLEVBQUUsS0FBYztRQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3RELENBQUM7Q0FDSjtBQU5ELDBCQU1DOzs7Ozs7Ozs7Ozs7Ozs7QUNSRCxpRkFBa0M7QUFFbEMsTUFBcUIsS0FBTSxTQUFRLGNBQUk7SUFHbkMsWUFBb0IsRUFBVTtRQUMxQixLQUFLLEVBQUU7UUFEUyxPQUFFLEdBQUYsRUFBRSxDQUFRO1FBRnZCLGFBQVEsR0FBYSxFQUFFO0lBSTlCLENBQUM7SUFFRCxJQUFJLENBQUMsT0FBZ0IsRUFBRSxLQUFjO1FBQ2pDLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNGLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbEQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM3QixDQUFDO0NBQ0o7QUFaRCx3QkFZQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCRCwyRUFBMkI7QUFJdkIsZ0JBSkcsZUFBSyxDQUlIO0FBSFQsaUZBQStCO0FBSTNCLGtCQUpHLGlCQUFPLENBSUg7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMWCx5RUFBOEI7QUFFOUIsTUFBTSxhQUFhLEdBQUcsQ0FBQyxRQUFnQixFQUFVLEVBQUU7SUFDL0MsT0FBTyxRQUFRLEdBQUcsZ0JBQU0sQ0FBQyxPQUFPO0FBQ3BDLENBQUM7QUFNUSxzQ0FBYTtBQUp0QixNQUFNLGFBQWEsR0FBRyxDQUFDLEVBQVUsRUFBVSxFQUFFO0lBQ3pDLE9BQU8sRUFBRSxHQUFHLGdCQUFNLENBQUMsT0FBTztBQUM5QixDQUFDO0FBRXVCLHNDQUFhIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgQ2FudmFzIGZyb20gXCIuL3NyYy9DYW52YXMvQ2FudmFzXCI7XG5pbXBvcnQgUGxhbmV0IGZyb20gXCIuL3NyYy9QbGFuZXRcIjtcbmltcG9ydCB7U2NlbmV9IGZyb20gXCIuL3NyYy9TY2VuZVwiO1xuaW1wb3J0IENhbWVyYSBmcm9tIFwiLi9zcmMvQ2FtZXJhL0NhbWVyYVwiO1xuaW1wb3J0IHsgS2V5Ym9hcmQsIE1vdXNlfSBmcm9tIFwiLi9zcmMvQ29udHJvbHNcIjtcbmltcG9ydCBDb25maWcgZnJvbSBcIi4vc3JjL0NvbmZpZ1wiXG5pbXBvcnQgUGxhbmV0VHJhaWwgZnJvbSBcIi4vc3JjL1BsYW5ldFRyYWlsXCI7XG5pbXBvcnQgZ2V0UGxhbmV0cyBmcm9tIFwiLi9wbGFuZXRzXCI7XG5pbXBvcnQgVmVjdG9yMkQgZnJvbSBcIi4vc3JjL1BoeXNpYy9WZWN0b3IyRFwiO1xuaW1wb3J0IHsgcmVzZXRJdCB9IGZyb20gXCIuL3NyYy9NZW51L0NvbXBvbmVudC9QbGFuZXRTdGF0c1wiO1xuaW1wb3J0IHsgcHhUb0tpbG9tZXRyZSwga2lsb21ldHJlVG9QeCB9IGZyb20gXCIuL3NyYy9Vbml0L0Rpc3RhbmNlXCI7XG5cbmNvbnN0IG1haW4gPSAoZGVsdGE6IG51bWJlciwgYm9hcmRzOiBDYW52YXNbXSkgPT4ge1xuICAgIC8vIGNUaW1lICs9IGRlbHRhXG4gICAgLy8gaWYgKGNUaW1lID4gQ29uZmlnLmRwZikge1xuICAgIGxldCBuQmVmb3JlID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xuICAgIGJvYXJkcy5mb3JFYWNoKGIgPT4ge1xuICAgICAgICBiLnVwZGF0ZShkZWx0YSAqIENvbmZpZy5nYW1lU3BlZWQpO1xuICAgIH0pXG4gICAgbGV0IG5BZnRlciA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcbiAgICAvLyBjVGltZSAtPSBDb25maWcuZHBmXG4gICAgLy8gfVxuICAgIHNldFRpbWVvdXQoKCkgPT4gbWFpbihDb25maWcubWlsbGlTZWNvbmRzUGVyRnJhbWUsIGJvYXJkcyksIChkZWx0YSAqIDEwMDApIC0gKG5BZnRlciAtIG5CZWZvcmUpKTtcbn1cblxuZG9jdW1lbnQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9IFwiY29tcGxldGVcIikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBDYW1lcmEoQ29uZmlnLnNwYWNlVyAvIDIsIENvbmZpZy5zcGFjZUggLyAyLCBDb25maWcuem9vbUxldmVsKVxuICAgIGNvbnN0IGJnQm9hcmQgPSBuZXcgQ2FudmFzKGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0LCBjYW1lcmEsIFwiYmFja2dyb3VuZFwiKTtcbiAgICBjb25zdCBwbGFuZXRCb2FyZCA9IG5ldyBDYW52YXMoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQsIGNhbWVyYSwgXCJtYWluXCIpO1xuXG4gICAgYmdCb2FyZC5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KTtcbiAgICBwbGFuZXRCb2FyZC5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KTtcbiAgICBiZ0JvYXJkLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMwMDAwMDBcIjtcbiAgICBcbiAgICBjb25zdCBwbGFuZXRTY2VuZSA9IG5ldyBTY2VuZShcIm1haW5cIik7XG5cbiAgICBjb25zdCBrZXlib2FyZENvbnRyb2xzID0gbmV3IEtleWJvYXJkKGNhbWVyYSwgcGxhbmV0Qm9hcmQpO1xuICAgIGNvbnN0IG1vdXNlQ29udHJvbCA9IG5ldyBNb3VzZSgpO1xuICAgIGNvbnN0IHBsYW5ldHNDb25maWcgPSBnZXRQbGFuZXRzKHBsYW5ldEJvYXJkLCBjYW1lcmEpO1xuICAgIGNvbnN0IGRvbUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBsZXQgcGxhbmV0czogUGxhbmV0W10gPSBbXTtcblxuICAgIG1vdXNlQ29udHJvbC5vbkNsaWNrKCh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgICAgICBwbGFuZXRzLmZvckVhY2goKHA6IFBsYW5ldCkgPT4ge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHAuY29vcmRzLmluc2lkZU9uUmFkaXVzKFxuICAgICAgICAgICAgICAgICAgICBuZXcgVmVjdG9yMkQoXG4gICAgICAgICAgICAgICAgICAgICAgICBweFRvS2lsb21ldHJlKGNhbWVyYS5yZWxhdGl2ZVgoeCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHhUb0tpbG9tZXRyZShjYW1lcmEucmVsYXRpdmVZKHkpKVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIHAucmFkaXVzICsgcHhUb0tpbG9tZXRyZSg4MCkpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwLmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KTtcblxuICAgIGRvbUJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5Ym9hcmRDb250cm9scy5oYW5kbGVLZXlib2FyZC5iaW5kKGtleWJvYXJkQ29udHJvbHMpKTtcbiAgICBkb21Cb2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtb3VzZUNvbnRyb2wuaGFuZGxlTW91c2UuYmluZChtb3VzZUNvbnRyb2wpKTtcbiAgICBcbiAgICBmb3IgKGxldCBpIGluIHBsYW5ldHNDb25maWcpIHtcbiAgICAgICAgY29uc3QgcCA9IHBsYW5ldHNDb25maWdbaV1cbiAgICAgICAgY29uc3QgcGxhbmV0ID0gbmV3IFBsYW5ldChpLFxuICAgICAgICAgICAgbmV3IFZlY3RvcjJEKHAucG9zLngsIHAucG9zLnkpLFxuICAgICAgICAgICAgcC5yYWRpdXMsXG4gICAgICAgICAgICBwLm1hc3MsXG4gICAgICAgICAgICBwLmNvbG9yLFxuICAgICAgICAgICAgcC52ZWxvY2l0eSxcbiAgICAgICAgICAgIHBsYW5ldHNcbiAgICAgICAgKVxuICAgICAgICBwbGFuZXRTY2VuZS5hZGRFbnRpdHkocGxhbmV0KTtcbiAgICAgICAgcGxhbmV0U2NlbmUuYWRkRW50aXR5KG5ldyBQbGFuZXRUcmFpbChwbGFuZXQpKTtcbiAgICAgICAgcGxhbmV0cy5wdXNoKHBsYW5ldCk7XG4gICAgfVxuXG4gICAgcGxhbmV0Qm9hcmQuYWRkRW50aXR5KHBsYW5ldFNjZW5lKTtcbiAgICBwbGFuZXRTY2VuZS5hZGRFbnRpdHkobmV3IHJlc2V0SXQoKSk7XG4gICAgXG4gICAgbWFpbihDb25maWcubWlsbGlTZWNvbmRzUGVyRnJhbWUsIFtiZ0JvYXJkLCBwbGFuZXRCb2FyZF0pO1xuIH0iLCJpbXBvcnQgQ2FudmFzIGZyb20gXCIuL3NyYy9DYW52YXMvQ2FudmFzXCJcbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4vc3JjL0NhbWVyYS9DYW1lcmFcIlxuaW1wb3J0IENvbmZpZyBmcm9tIFwiLi9zcmMvQ29uZmlnXCJcbmltcG9ydCB7IHB4VG9LaWxvbWV0cmUgfSBmcm9tIFwiLi9zcmMvVW5pdC9EaXN0YW5jZVwiXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSBcIi4vc3JjL1BoeXNpYy9WZWN0b3IyRFwiXG5cbmV4cG9ydCBkZWZhdWx0IChjYW52YXM6IENhbnZhcywgY2FtZXJhOiBDYW1lcmEpOiB7W2tleTogc3RyaW5nXTogYW55fSA9PiB7XG4gICAgY29uc3Qgc3VuID0ge1xuICAgICAgICBwb3M6IG5ldyBWZWN0b3IyRChcbiAgICAgICAgICAgIHB4VG9LaWxvbWV0cmUoY2FtZXJhLnJlbGF0aXZlWChjYW52YXMuY2FudmFzLndpZHRoIC8gMikpLFxuICAgICAgICAgICAgcHhUb0tpbG9tZXRyZShjYW1lcmEucmVsYXRpdmVZKGNhbnZhcy5jYW52YXMuaGVpZ2h0IC8gMikpLFxuICAgICAgICApLFxuICAgICAgICByYWRpdXM6IHB4VG9LaWxvbWV0cmUoMTIwKSxcbiAgICAgICAgbWFzczogMS45ODkxZTMwLFxuICAgICAgICBjb2xvcjogXCJvcmFuZ2VcIixcbiAgICAgICAgdmVsb2NpdHk6IG5ldyBWZWN0b3IyRCgwLCAwKVxuICAgIH1cblxuICAgIGNvbnN0IGVhcnRoID0ge1xuICAgICAgICBwb3M6IG5ldyBWZWN0b3IyRChcbiAgICAgICAgICAgIHN1bi5wb3MueCAtIDE0OS41OWU2LFxuICAgICAgICAgICAgc3VuLnBvcy55LFxuICAgICAgICApLFxuICAgICAgICByYWRpdXM6IHB4VG9LaWxvbWV0cmUoMTApLFxuICAgICAgICBtYXNzOiA1Ljk3MmUyNCxcbiAgICAgICAgY29sb3I6IFwic2t5Ymx1ZVwiLFxuICAgICAgICB2ZWxvY2l0eTogbmV3IFZlY3RvcjJEKDAsIENvbmZpZy5lYXJ0aFNwZWVkKS5kb3QobmV3IFZlY3RvcjJEKDEvNSwgMS4yLzUpKSxcbiAgICAgICAgLy8gdmVsb2NpdHk6IG5ldyBWZWN0b3IyRCgwLCAwKSxcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFwic3VuNDFcIjogc3VuLFxuICAgICAgICAgICAgXCJlYXJ0aCBhbG9yc1wiOiBlYXJ0aCxcbiAgICAgICAgICAgIFwiaW50ZXJsb3BlclwiOiB7XG4gICAgICAgICAgICAgICAgcG9zOiBuZXcgVmVjdG9yMkQoXG4gICAgICAgICAgICAgICAgICAgIHN1bi5wb3MueCArIDE4NDQwMDAwMCxcbiAgICAgICAgICAgICAgICAgICAgc3VuLnBvcy55IC0gNTAwMDAwMDAsXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICByYWRpdXM6IHB4VG9LaWxvbWV0cmUoNSksXG4gICAgICAgICAgICAgICAgbWFzczogNy4zNDhlNCxcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJyZWRcIixcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eTogbmV3IFZlY3RvcjJEKDQsIDQpXG4gICAgICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbWVyYSB7XG4gICAgcHVibGljIHg6IG51bWJlciA9IDBcbiAgICBwdWJsaWMgeTogbnVtYmVyID0gMFxuICAgIHB1YmxpYyB6OiBudW1iZXIgPSAxXG5cbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMueCA9IHhcbiAgICAgICAgdGhpcy55ID0geVxuICAgICAgICB0aGlzLnogPSB6XG4gICAgfVxuXG4gICAgWCh4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy56VHJhbnNmb3JtKHggLSB0aGlzLngpXG4gICAgfVxuXG4gICAgWSh5OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy56VHJhbnNmb3JtKHkgLSB0aGlzLnkpXG4gICAgfVxuXG4gICAgelRyYW5zZm9ybSh2OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdiAqICgxIC8gdGhpcy56KVxuICAgIH1cblxuICAgIHJlbGF0aXZlWCh4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy54ICsgKHRoaXMueiAqIHgpXG4gICAgfVxuXG4gICAgcmVsYXRpdmVZKHk6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnkgKyAodGhpcy56ICogeSlcbiAgICB9XG59IiwiaW1wb3J0IEVudGl0eSBmcm9tIFwiLi4vRW50aXR5L0VudGl0eVwiXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi9Db250ZXh0XCJcbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4uL0NhbWVyYS9DYW1lcmFcIlxuaW1wb3J0IE5vZGUgZnJvbSBcIi4uL0VudGl0eS9Ob2RlXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIGV4dGVuZHMgTm9kZXtcbiAgICByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50XG4gICAgcmVhZG9ubHkgY29udGV4dDogQ29udGV4dFxuICAgIHB1YmxpYyBlbnRpdGllczogRW50aXR5W10gPSBbXVxuXG4gICAgY29uc3RydWN0b3Iod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGNhbWVyYTogQ2FtZXJhLCBwdWJsaWMgaWQ6IHN0cmluZykge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKVxuICAgICAgICB0aGlzLmNhbnZhcy5pZCA9IHRoaXMuaWRcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aFxuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHRcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gbmV3IENvbnRleHQodGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpLCBjYW1lcmEsIHRoaXMpXG4gICAgfVxuXG4gICAgYXBwZW5kVG8oZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcylcbiAgICB9XG5cbiAgICB1cGRhdGUoZGVsdGE6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmVudGl0aWVzLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICBlLnVwZGF0ZShkZWx0YSlcbiAgICAgICAgICAgIGUuZHJhdyh0aGlzLmNvbnRleHQsIGRlbHRhKVxuICAgICAgICB9KVxuICAgIH1cbn0iLCJpbXBvcnQgTW9kZWwgZnJvbSBcIi4uL01vZGVsL01vZGVsXCI7XG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9DYW1lcmEvQ2FtZXJhXCI7XG5pbXBvcnQgQ2FudmFzIGZyb20gXCIuL0NhbnZhc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0IHtcbiAgICBjb25zdHJ1Y3RvciAoXG4gICAgICAgIHJlYWRvbmx5IGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgICAgICAgcmVhZG9ubHkgY2FtZXJhOiBDYW1lcmEsXG4gICAgICAgIHJlYWRvbmx5IGNhbnZhczogQ2FudmFzLFxuICAgICAgICApIHt9XG5cbiAgICBkcmF3KG1vZGVsOiBNb2RlbCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKClcbiAgICAgICAgbW9kZWwuZHJhdyh0aGlzKVxuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKClcbiAgICB9XG5cbiAgICBhcmMoeDogbnVtYmVyLCB5OiBudW1iZXIsIHI6IG51bWJlciwgYXM6IG51bWJlciwgYWU6IG51bWJlciwgbGluZVdpZHRoOiBudW1iZXIgPSAxKTogQ29udGV4dCB7XG4gICAgICAgIHRoaXMuY29udGV4dC5saW5lV2lkdGggPSBsaW5lV2lkdGhcbiAgICAgICAgdGhpcy5jb250ZXh0LmFyYyh0aGlzLmNhbWVyYS5YKHgpLCB0aGlzLmNhbWVyYS5ZKHkpLCB0aGlzLmNhbWVyYS56VHJhbnNmb3JtKHIpLCBhcywgYWUpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgd3JpdGUodGV4dDogc3RyaW5nLCB4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICAvLyBjb25zdCBmcyA9IHRleHQuZ2V0Rm9udFNpemUoKVxuICAgICAgICAvLyBjb25zdCBmZiA9IHRleHQuZ2V0Rm9udEZhbWlseSgpXG4gICAgICAgIC8vIGNvbnN0IGMgPSB0ZXh0LmdldENvb3JkaW5hdGVzKClcblxuICAgICAgICAvLyB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKClcbiAgICAgICAgLy8gdGhpcy5jb250ZXh0LmZvbnQgPSBgJHtDb25maWcuZm9udFNpemV9cHggJHtmZn1gXG5cbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KHRleHQsIHgsIHkpO1xuICAgICAgICAvLyBsaW5lcy5tYXAoKGxpbmUsIGkpID0+IHtcbiAgICAgICAgLy8gICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChsaW5lLCArYy54LCArYy55ICsgKGZzICogaSkpXG4gICAgICAgIC8vIH0pXG4gICAgfVxuXG4gICAgZmlsbFJlY3QoeDogbnVtYmVyLCB5OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyLCBjb2xvcjogc3RyaW5nKTogQ29udGV4dCB7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBjb2xvclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QodGhpcy5jYW1lcmEuWCh4KSwgdGhpcy5jYW1lcmEuWSh5KSwgdywgaClcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBmaWxsKGNvbG9yOiBzdHJpbmcpOiBDb250ZXh0IHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsKClcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBsaW5lKGZyb21YOiBudW1iZXIsIGZyb21ZOiBudW1iZXIsIHRvWDogbnVtYmVyLCB0b1k6IG51bWJlciwgY29sb3I6IHN0cmluZywgbGluZVdpZHRoOiBudW1iZXIgPSAxKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5saW5lV2lkdGggPSBsaW5lV2lkdGhcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gY29sb3JcbiAgICAgICAgdGhpcy5jb250ZXh0Lm1vdmVUbyh0aGlzLmNhbWVyYS5YKGZyb21YKSwgdGhpcy5jYW1lcmEuWShmcm9tWSkpXG4gICAgICAgIHRoaXMuY29udGV4dC5saW5lVG8odGhpcy5jYW1lcmEuWCh0b1gpLCB0aGlzLmNhbWVyYS5ZKHRvWSkpXG4gICAgICAgIHRoaXMuY29udGV4dC5jbG9zZVBhdGgoKVxuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKClcbiAgICB9XG59XG5cbnR5cGUgRHJhd0Z1bmN0aW9uID0gKGN0eDogQ29udGV4dCkgPT4gdm9pZFxuXG5leHBvcnQge1xuICAgIERyYXdGdW5jdGlvblxufSIsImNvbnN0IGNEdXJhdGlvbiA9IDBcbmNvbnN0IGZwcyA9IDYwXG5jb25zdCBtaWxsaVNlY29uZHNQZXJGcmFtZSA9IDEgLyBmcHNcbmxldCB6b29tTGV2ZWwgPSAyLjVcbmxldCB6b29tTWluID0gMC4xXG5jb25zdCB6b29tQWN0aW9uUG93ID0gMC4xMFxuY29uc3QgZGVjYWxCeU1vdmUgPSAyNVxuXG5sZXQgbWF4UGxhbmV0cyA9IDRcbmxldCBwbGFuZXRzUmFkaXVzRGVmID0ge21pbjogMywgbWF4OiA3MH1cbmNvbnN0IHBsYW5ldHNNaW5EaXN0ID0gMTBcbmNvbnN0IHBsYW5ldEJhc2VTcGVlZCA9IDQwXG5cbmNvbnN0IHNwYWNlVyA9IDEwMDAwXG5jb25zdCBzcGFjZUggPSAxMDAwMFxuY29uc3QgZGVjYWxYID0gc3BhY2VXIC8gMlxuY29uc3QgZGVjYWxZID0gc3BhY2VIIC8gMlxuXG5jb25zdCBkaXN0UG93ID0gNVxuXG5jb25zdCBmb250U2l6ZSA9IDE0XG5sZXQgZGVidWcgPSBudWxsXG5jb25zdCBlYXJ0aFNwZWVkID0gMjkuNzggLy8ga20vc1xuY29uc3QgRyA9IE1hdGgucG93KDEwLCAtMTEpICogNi42NzRcblxuZW51bSBQbGF5TW9kZSB7XG4gICAgUExBWSxcbiAgICBQQVVTRVxufVxuXG5jb25zdCBtb2RlID0gUGxheU1vZGUuUExBWVxuLy8gY29uc3Qga21QZXJQeCA9IDEuM2U1XG5jb25zdCBrbVBlclB4ID0gMS44ZTVcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGdhbWVTcGVlZDogMzY1ICogMjQgKiA2MCAqIDYwLFxuICAgIC8vIGdhbWVTcGVlZDogMTAwLFxuICAgIGttUGVyUHgsXG4gICAgbVBlclB4OiBrbVBlclB4ICogMTAwMCxcbiAgICBrZ1BlclB4RGVuc2l0eTogMTIwMCxcbiAgICBHLFxuICAgIGNEdXJhdGlvbixcbiAgICBmcHMsXG4gICAgem9vbUxldmVsLFxuICAgIHpvb21BY3Rpb25Qb3csXG4gICAgZGVjYWxCeU1vdmUsXG4gICAgbWF4UGxhbmV0cyxcbiAgICBwbGFuZXRzUmFkaXVzRGVmLFxuICAgIHBsYW5ldHNNaW5EaXN0LFxuICAgIHBsYW5ldEJhc2VTcGVlZCxcbiAgICBzcGFjZVcsXG4gICAgc3BhY2VILFxuICAgIGRlY2FsWCxcbiAgICBkZWNhbFksXG4gICAgZGlzdFBvdyxcbiAgICBmb250U2l6ZSxcbiAgICBkZWJ1ZyxcbiAgICBQbGF5TW9kZSxcbiAgICBtb2RlLFxuICAgIHpvb21NaW4sXG4gICAgZWFydGhTcGVlZCxcbiAgICBtaWxsaVNlY29uZHNQZXJGcmFtZVxufSIsImltcG9ydCBDYW1lcmEgZnJvbSBcIi4uL0NhbWVyYS9DYW1lcmFcIlxuaW1wb3J0IENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnXCJcbmltcG9ydCBDYW52YXMgZnJvbSBcIi4uL0NhbnZhcy9DYW52YXNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlib2FyZCB7XG4gICAgcHVibGljIGFjdGlvbkJ5S2V5Y29kZToge1trZXk6IG51bWJlcl06IEZ1bmN0aW9ufVxuXG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgY2FtZXJhOiBDYW1lcmEsIHJlYWRvbmx5IGNhbnZhczogQ2FudmFzKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uQnlLZXljb2RlID0ge1xuICAgICAgICAgICAgLy8gNjg6ICgpID0+IHtkZWJ1Zy5Ub2dnbGUoKTt9LFxuICAgICAgICAgICAgLy8gODM6ICgpID0+IHttb2RlID0gbW9kZSA9PSBQQVVTRSA/IFBMQVkgOiBQQVVTRTt9LFxuICAgICAgICAgICAgODI6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS54ID0gMFxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnkgPSAwXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEueiA9IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA5MDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhbWVyYS56IDw9IENvbmZpZy56b29tTWluKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56IC09IENvbmZpZy56b29tQWN0aW9uUG93XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgODg6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56ICs9IENvbmZpZy56b29tQWN0aW9uUG93XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMzc6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYW1lcmEueCAtIENvbmZpZy5kZWNhbEJ5TW92ZSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEueCAtPSBDb25maWcuZGVjYWxCeU1vdmVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAzODogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhbWVyYS55IC0gQ29uZmlnLmRlY2FsQnlNb3ZlIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS55IC09IENvbmZpZy5kZWNhbEJ5TW92ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDM5OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FtZXJhLnggPj0gQ29uZmlnLnNwYWNlVykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnggKz0gQ29uZmlnLmRlY2FsQnlNb3ZlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNDA6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYW1lcmEueSA+PSBDb25maWcuc3BhY2VIKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEueSArPSBDb25maWcuZGVjYWxCeU1vdmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUtleWJvYXJkKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGlvbkJ5S2V5Y29kZSA9PSB1bmRlZmluZWQgfHwgXG4gICAgICAgICAgICAhdGhpcy5hY3Rpb25CeUtleWNvZGVbZXZlbnQua2V5Q29kZV0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFjdGlvbkJ5S2V5Y29kZVtldmVudC5rZXlDb2RlXSgpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb3VzZSB7XG4gICAgcHJvdGVjdGVkIGNsaWNrQ2I6ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gdm9pZFxuICAgIG9uQ2xpY2soY2I6ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gdm9pZCkge1xuICAgICAgICB0aGlzLmNsaWNrQ2IgPSBjYjtcbiAgICB9XG5cbiAgICBoYW5kbGVNb3VzZShlOiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIHRoaXMuY2xpY2tDYihlLngsIGUueSk7XG4gICAgfVxufSIsImltcG9ydCBLZXlib2FyZCBmcm9tIFwiLi9LZXlib2FyZFwiO1xuaW1wb3J0IE1vdXNlIGZyb20gXCIuL01vdXNlXCI7XG5cbmV4cG9ydCB7XG4gICAgS2V5Ym9hcmQsXG4gICAgTW91c2UsXG59IiwiaW1wb3J0IEVudGl0eSBmcm9tIFwiLi9FbnRpdHlcIlxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL0NhbnZhcy9Db250ZXh0XCJcblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgTm9kZSBpbXBsZW1lbnRzIEVudGl0eSB7XG4gICAgcHVibGljIGVudGl0aWVzOiBFbnRpdHlbXSA9IFtdXG5cbiAgICB1cGRhdGUoZGVsdGE6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmVudGl0aWVzLmZvckVhY2goZSA9PiBlLnVwZGF0ZShkZWx0YSkpXG4gICAgfVxuXG4gICAgZHJhdyhjb250ZXh0OiBDb250ZXh0LCBkZWx0YT86IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmVudGl0aWVzLmZvckVhY2goZSA9PiBlLmRyYXcoY29udGV4dCwgZGVsdGEpKVxuICAgIH1cblxuICAgIGdldEVudGl0aWVzKCk6IEVudGl0eVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50aXRpZXNcbiAgICB9XG5cbiAgICBhZGRFbnRpdHkoZW50aXR5OiBFbnRpdHkpOiB0aGlzIHtcbiAgICAgICAgdGhpcy5lbnRpdGllcy5wdXNoKGVudGl0eSlcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG59IiwiaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uLy4uL0NhbnZhcy9Db250ZXh0XCI7XG5pbXBvcnQgRW50aXR5IGZyb20gXCIuLi8uLi9FbnRpdHkvRW50aXR5XCI7XG5pbXBvcnQgVmVjdG9yMkQgZnJvbSBcIi4uLy4uL1BoeXNpYy9WZWN0b3IyRFwiO1xuaW1wb3J0IFBsYW5ldCBmcm9tIFwiLi4vLi4vUGxhbmV0XCI7XG5pbXBvcnQgVGV4dCBmcm9tIFwiLi4vQ29udGFpbmVyL1RleHRcIjtcblxubGV0IGl0ID0gMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhbmV0U3RhdHMge1xuICAgIHByb3RlY3RlZCBsb2NhbEl0OiBudW1iZXIgPSAwO1xuICAgIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHBsYW5ldDogUGxhbmV0KSB7XG4gICAgICAgIHRoaXMubG9jYWxJdCA9IGl0O1xuICAgICAgICBpdCsrO1xuICAgIH1cblxuICAgIGRyYXcoY29udGV4dDogQ29udGV4dCkge1xuICAgICAgICBjb25zdCB3aW5kb3dIID0gMTAwO1xuICAgICAgICBjb25zdCBmbG9hdEZpeCA9IDY7XG4gICAgICAgIG5ldyBUZXh0KFxuICAgICAgICAgICAgbmV3IFZlY3RvcjJEKDIwLCAyMCArICh3aW5kb3dIICogdGhpcy5sb2NhbEl0KSksXG4gICAgICAgICAgICBuZXcgVmVjdG9yMkQoMjAwLCB3aW5kb3dIKSxcbiAgICAgICAgICAgIHRoaXMucGxhbmV0LmNvbG9yXG4gICAgICAgICkuc2V0TGluZXMoW1xuICAgICAgICAgICAgYD4gJHt0aGlzLnBsYW5ldC5pZH1gLFxuICAgICAgICAgICAgYCAgbWFzczogJHt0aGlzLnBsYW5ldC5tYXNzfWAsXG4gICAgICAgICAgICAnICB2ZWxvY2l0eTonLFxuICAgICAgICAgICAgYCAgLSB4OiAke3RoaXMucGxhbmV0LnZlbG9jaXR5LnggPiAwID8gXCIgXCIgOiBcIlwifSR7dGhpcy5wbGFuZXQudmVsb2NpdHkueC50b0ZpeGVkKGZsb2F0Rml4KX0ga20vc2AsXG4gICAgICAgICAgICBgICAtIHk6ICR7dGhpcy5wbGFuZXQudmVsb2NpdHkueSA+IDAgPyBcIiBcIiA6IFwiXCJ9JHt0aGlzLnBsYW5ldC52ZWxvY2l0eS55LnRvRml4ZWQoZmxvYXRGaXgpfSBrbS9zYCxcbiAgICAgICAgXSkuZHJhdyhjb250ZXh0KTtcbiAgICB9XG59XG5cbmNsYXNzIHJlc2V0SXQgaW1wbGVtZW50cyBFbnRpdHkge1xuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgaXQgPSAwO1xuICAgIH1cblxuICAgIGRyYXcoKSB7fVxuICAgIGdldEVudGl0aWVzKCk6IEVudGl0eVtdIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICByZXNldEl0XG59OyIsImltcG9ydCBDb250ZXh0IGZyb20gXCIuLi8uLi9DYW52YXMvQ29udGV4dFwiXG5pbXBvcnQgRW50aXR5IGZyb20gXCIuLi8uLi9FbnRpdHkvRW50aXR5XCJcbmltcG9ydCBWZWN0b3IyRCBmcm9tIFwiLi4vLi4vUGh5c2ljL1ZlY3RvcjJEXCJcbmltcG9ydCBCbG9jayBmcm9tIFwiLi9Db250YWluZXJcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNpYyBpbXBsZW1lbnRzIEJsb2NrLCBFbnRpdHkge1xuICAgIHB1YmxpYyBkZWNhbFg6IG51bWJlciA9IDBcbiAgICBwdWJsaWMgZGVjYWxZOiBudW1iZXIgPSAwXG4gICAgcHVibGljIGVudGl0aWVzOiBFbnRpdHlbXVxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHJlYWRvbmx5IGNvb3JkczogVmVjdG9yMkQsXG4gICAgICAgIHJlYWRvbmx5IHNpemVzOiBWZWN0b3IyRCxcbiAgICAgICAgcHVibGljIGNvbG9yOiBzdHJpbmcgPSBcIiNmZmZmZmZcIixcbiAgICAgICAgcHVibGljIGZvbnRTaXplOiBudW1iZXIgPSAxNCxcbiAgICAgICAgcHVibGljIGZvbnRGYW1pbHk6IHN0cmluZyA9IFwiVmVyZGFuYVwiXG4gICAgKSB7XG4gICAgfVxuXG4gICAgc2V0RGVjYWwoZGVjYWxYOiBudW1iZXIsIGRlY2FsWTogbnVtYmVyKTogQmxvY2sge1xuICAgICAgICB0aGlzLmRlY2FsWCA9IGRlY2FsWDtcbiAgICAgICAgdGhpcy5kZWNhbFkgPSBkZWNhbFk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldENvb3JkaW5hdGVzKCk6IFZlY3RvcjJEIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyRCgrdGhpcy5jb29yZHMueCArIHRoaXMuZGVjYWxYLCArdGhpcy5jb29yZHMueSArIHRoaXMuZGVjYWxZKTtcbiAgICB9XG5cbiAgICBnZXRDb2xvcigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xvclxuICAgIH1cblxuICAgIGdldFNpemVzKCk6IFZlY3RvcjJEIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZXM7XG4gICAgfVxuXG4gICAgZ2V0Rm9udFNpemUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9udFNpemU7XG4gICAgfVxuXG4gICAgZ2V0Rm9udEZhbWlseSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5mb250RmFtaWx5O1xuICAgIH1cblxuICAgIHVwZGF0ZSgpOiB2b2lkIHt9XG5cbiAgICBkcmF3KGNvbnRleHQ6IENvbnRleHQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbnRpdGllcy5mb3JFYWNoKGVudGl0eSA9PiBlbnRpdHkuZHJhdyhjb250ZXh0KSk7XG4gICAgfVxuXG4gICAgZ2V0RW50aXRpZXMoKTogRW50aXR5W10ge1xuICAgICAgICByZXR1cm4gdGhpcy5lbnRpdGllcztcbiAgICB9XG59IiwiaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uLy4uL0NhbnZhcy9Db250ZXh0XCI7XG5pbXBvcnQgQmxvY2sgZnJvbSBcIi4vQmxvY2tcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dCBleHRlbmRzIEJsb2NrIHtcbiAgICBwcm90ZWN0ZWQgbGluZXM6IHN0cmluZ1tdID0gW11cbiAgICBcbiAgICBhZGRMaW5lKHRleHQ6IHN0cmluZyk6IFRleHQge1xuICAgICAgICB0aGlzLmxpbmVzLnB1c2godGV4dCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldExpbmVzKGxpbmVzOiBzdHJpbmdbXSk6IFRleHQge1xuICAgICAgICB0aGlzLmxpbmVzID0gbGluZXM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNob3VsZEJyZWFrTGluZSh3aWR0aDogbnVtYmVyLCBsaW5lOiBzdHJpbmcsIGN0eDogQ29udGV4dCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gY3R4LmNvbnRleHQubWVhc3VyZVRleHQobGluZSkud2lkdGggPiB3aWR0aDtcbiAgICB9XG5cbiAgICBicmVha0xpbmUod2lkdGg6IG51bWJlciwgbGluZTogc3RyaW5nLCBjdHg6IENvbnRleHQpOiBzdHJpbmdbXSB7XG4gICAgICAgIGlmICghdGhpcy5zaG91bGRCcmVha0xpbmUod2lkdGgsIGxpbmUsIGN0eCkpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbGluZXM6IHN0cmluZ1tdID0gW107XG4gICAgICAgIC8vIGJyZWFrIGZvciAvblxuICAgICAgICBsaW5lLnNwbGl0KFwiXFxuXCIpLmZvckVhY2goKGw6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGV4dFdpZHRoID0gY3R4LmNvbnRleHQubWVhc3VyZVRleHQobCkud2lkdGg7XG4gICAgICAgICAgICAvLyBudW1iZXIgb2YgbGluZXMgd2Ugc2hvdWxkIGJyZWFrIGludG8uXG4gICAgICAgICAgICAvLyBtaW4obikgPSAxO1xuICAgICAgICAgICAgY29uc3QgbiA9IE1hdGguY2VpbCh0ZXh0V2lkdGggLyB3aWR0aCk7XG4gICAgICAgICAgICBjb25zdCBjaGFyUyA9IE1hdGguY2VpbCh0ZXh0V2lkdGggLyBsLmxlbmd0aCk7XG4gICAgICAgICAgICAvLyBjeWNsZSBvdmVyIG51bWJlciBvZiBsaW5lc1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKGwuc2xpY2UoY2hhclMqaSwgY2hhclMqKGkrMSkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gbGluZXM7XG4gICAgfVxuXG4gICAgd3JpdGVMaW5lcyhcbiAgICAgICAgbGluZXM6IHN0cmluZ1tdLFxuICAgICAgICB4OiBudW1iZXIsXG4gICAgICAgIHk6IG51bWJlcixcbiAgICAgICAgdzogbnVtYmVyLFxuICAgICAgICBoOiBudW1iZXIsXG4gICAgICAgIGZzOiBudW1iZXIsXG4gICAgICAgIGlPdmVybG9hZDogbnVtYmVyLFxuICAgICAgICBjdHg6IENvbnRleHRcbiAgICApIHtcbiAgICAgICAgbGluZXMuZm9yRWFjaCgobGluZTogc3RyaW5nLCBpOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJsID0gdGhpcy5icmVha0xpbmUodywgbGluZSwgY3R4KTtcbiAgICAgICAgICAgIGlmIChibC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53cml0ZUxpbmVzKGJsLCB4LCB5LCB3LCBoLCBmcywgaU92ZXJsb2FkLCBjdHgpO1xuICAgICAgICAgICAgICAgIGlPdmVybG9hZCArPSBibC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY2FudmFzWSA9IHkgKyAoZnMgKiAoaSArIGlPdmVybG9hZCkpO1xuICAgICAgICAgICAgY29uc3QgY2FudmFzWCA9IHg7XG4gICAgICAgICAgICBjdHgud3JpdGUobGluZSwgY2FudmFzWCwgY2FudmFzWSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRyYXcoY3R4OiBDb250ZXh0KSB7XG4gICAgICAgIC8vIGNhbnZhc1R4dC5mb250U2l6ZSA9IHRoaXMuZ2V0Rm9udFNpemUoKTtcbiAgICAgICAgY29uc3Qge3gsIHl9ID0gdGhpcy5nZXRDb29yZGluYXRlcygpO1xuICAgICAgICBjb25zdCB7eDogdywgeTogaH0gPSB0aGlzLmdldFNpemVzKCk7XG5cbiAgICAgICAgdGhpcy53cml0ZUxpbmVzKHRoaXMubGluZXMsIHgsIHksIHcsIGgsIHRoaXMuZ2V0Rm9udFNpemUoKSwgMCwgY3R4KTtcbiAgICB9XG59IiwiaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL0NhbnZhcy9Db250ZXh0XCJcbmltcG9ydCBWZWN0b3IyRCBmcm9tIFwiLi4vUGh5c2ljL1ZlY3RvcjJEXCJcbmltcG9ydCB7IGtpbG9tZXRyZVRvUHgsIHB4VG9LaWxvbWV0cmUgfSBmcm9tIFwiLi4vVW5pdC9EaXN0YW5jZVwiXG5pbXBvcnQgTW9kZWwgZnJvbSBcIi4vTW9kZWxcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNjIGltcGxlbWVudHMgTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjb29yZHM6IFZlY3RvcjJELCBwdWJsaWMgcmFkaXVzOiBudW1iZXIsIHB1YmxpYyBjb2xvcjogc3RyaW5nKSB7fVxuXG4gICAgZHJhdyhjdHg6IENvbnRleHQpIHtcbiAgICAgICAgY3R4LmFyYyhraWxvbWV0cmVUb1B4KHRoaXMuY29vcmRzLngpLCBraWxvbWV0cmVUb1B4KHRoaXMuY29vcmRzLnkpLCBraWxvbWV0cmVUb1B4KHRoaXMucmFkaXVzKSwgMCwgMiAqIE1hdGguUEkpXG4gICAgICAgIGN0eC5maWxsKHRoaXMuY29sb3IpXG4gICAgfVxuXG4gICAgZ2V0Q29vcmRpbmF0ZXMoKTogVmVjdG9yMkQge1xuICAgICAgICByZXR1cm4gdGhpcy5jb29yZHNcbiAgICB9XG5cbiAgICBzZXRDb29yZGluYXRlcyhjb29yZHM6IFZlY3RvcjJEKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29vcmRzID0gY29vcmRzXG4gICAgfVxufSIsImltcG9ydCBDb250ZXh0IGZyb20gXCIuLi9DYW52YXMvQ29udGV4dFwiXG5pbXBvcnQgTm9kZSBmcm9tIFwiLi4vRW50aXR5L05vZGVcIlxuaW1wb3J0IFZlY3RvcjJEIGZyb20gXCIuLi9QaHlzaWMvVmVjdG9yMkRcIlxuaW1wb3J0IHsgcHhUb0tpbG9tZXRyZSB9IGZyb20gXCIuLi9Vbml0L0Rpc3RhbmNlXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG90IGV4dGVuZHMgTm9kZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBmcm9tOiBWZWN0b3IyRCxcbiAgICAgICAgcHVibGljIHRvOiBWZWN0b3IyRCxcbiAgICAgICAgcHVibGljIGNvbG9yOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBsaW5lV2lkdGg6IG51bWJlciA9IDFcbiAgICApIHtcbiAgICAgICAgc3VwZXIoKVxuICAgIH1cblxuICAgIGRyYXcoY3R4OiBDb250ZXh0KSB7XG4gICAgICAgIGN0eC5saW5lKFxuICAgICAgICAgICAgcHhUb0tpbG9tZXRyZSh0aGlzLmZyb20ueCksXG4gICAgICAgICAgICBweFRvS2lsb21ldHJlKHRoaXMuZnJvbS55KSxcbiAgICAgICAgICAgIHB4VG9LaWxvbWV0cmUodGhpcy50by54KSxcbiAgICAgICAgICAgIHB4VG9LaWxvbWV0cmUodGhpcy50by55KSxcbiAgICAgICAgICAgIHRoaXMuY29sb3IsXG4gICAgICAgICAgICB0aGlzLmxpbmVXaWR0aFxuICAgICAgICApXG4gICAgfVxuXG4gICAgZ2V0Q29vcmRpbmF0ZXMoKTogVmVjdG9yMkQge1xuICAgICAgICByZXR1cm4gdGhpcy5mcm9tXG4gICAgfVxuXG4gICAgc2V0Q29vcmRpbmF0ZXMoY29vcmRzOiBWZWN0b3IyRCk6IHZvaWQge1xuICAgICAgICB0aGlzLmZyb20gPSBjb29yZHNcbiAgICB9XG59IiwiaW1wb3J0IFBsYW5ldCBmcm9tIFwiLi4vUGxhbmV0XCJcbmltcG9ydCBDb25maWcgZnJvbSBcIi4uL0NvbmZpZ1wiXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSBcIi4vVmVjdG9yMkRcIlxuXG5jb25zdCBnZXRGb3JjZSA9IChhOiBQbGFuZXQsIGI6IFBsYW5ldCk6IFZlY3RvcjJEID0+IHtcbiAgICAvLyBjb25zdCBkaXN0ID0gR2VvbWV0cnkuZ2V0RGlzdGFuY2VCZXR3ZWVuT2JqZWN0cyhhLmNvb3JkcywgYi5jb29yZHMpXG4gICAgY29uc3QgcjIxX3YgPSBiLmNvb3Jkcy5zdWIoYS5jb29yZHMpXG4gICAgY29uc3QgZGlzdCA9IE1hdGguc3FydCgocjIxX3YueCpyMjFfdi54ICogMTAwMCkgKyAocjIxX3YueSpyMjFfdi55ICogMTAwMCkpXG4gICAgY29uc3QgZiA9IChDb25maWcuRyAqIGEubWFzcyAqIGIubWFzcykgLyAoZGlzdCAqIGRpc3QpXG4gICAgY29uc3QgZjIxX3YgPSByMjFfdi5kaXZpZGUoZGlzdCkuZG90KGYpXG4gICAgcmV0dXJuIGYyMV92XG59XG5cbmV4cG9ydCBkZWZhdWx0IChhOiBQbGFuZXQsIGI6IFBsYW5ldCk6IFZlY3RvcjJEID0+IHtcbiAgICByZXR1cm4gZ2V0Rm9yY2UoYSwgYikuZGl2aWRlKGEubWFzcylcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBWZWN0b3IyRCB7XG4gICAgY29uc3RydWN0b3IgKHB1YmxpYyB4OiBudW1iZXIsIHB1YmxpYyB5OiBudW1iZXIpIHt9XG5cbiAgICBzdWIodmVjOiBWZWN0b3IyRCB8IG51bWJlcik6IFZlY3RvcjJEIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2ZWMgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHZlYyA9IG5ldyBWZWN0b3IyRCh2ZWMsIHZlYylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjJEKHRoaXMueC12ZWMueCwgdGhpcy55LXZlYy55KVxuICAgIH1cblxuICAgIC8vIGRvdCBwcm9kdWN0XG4gICAgZG90KHZlYzogVmVjdG9yMkQgfCBudW1iZXIpOiBWZWN0b3IyRCB7XG4gICAgICAgIGlmICh0eXBlb2YgdmVjID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICB2ZWMgPSBuZXcgVmVjdG9yMkQodmVjLCB2ZWMpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyRCh0aGlzLnggKiB2ZWMueCwgdGhpcy55ICogdmVjLnkpXG4gICAgfVxuXG4gICAgc3VtKHZlYzogVmVjdG9yMkQgfCBudW1iZXIpOiBWZWN0b3IyRCB7XG4gICAgICAgIGlmICh0eXBlb2YgdmVjID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICB2ZWMgPSBuZXcgVmVjdG9yMkQodmVjLCB2ZWMpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyRCh0aGlzLnggKyB2ZWMueCwgdGhpcy55ICsgdmVjLnkpXG4gICAgfVxuXG4gICAgZGl2aWRlKHZlYzogVmVjdG9yMkQgfCBudW1iZXIpOiBWZWN0b3IyRCB7XG4gICAgICAgIGlmICh0eXBlb2YgdmVjID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICB2ZWMgPSBuZXcgVmVjdG9yMkQodmVjLCB2ZWMpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyRCh0aGlzLnggLyB2ZWMueCwgdGhpcy55IC8gdmVjLnkpXG4gICAgfVxuXG4gICAgbm9ybWFsaXplIChudW1iZXI6IG51bWJlcik6IFZlY3RvcjJEIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG90KG5ldyBWZWN0b3IyRChudW1iZXIsIG51bWJlcikpXG4gICAgfVxuXG4gICAgY2xvbmUoKTogVmVjdG9yMkQge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjJEKHRoaXMueCwgdGhpcy55KVxuICAgIH1cblxuICAgIGluc2lkZU9uUmFkaXVzKHRyaWFsOiBWZWN0b3IyRCwgcmFkaXVzOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucG93KHRyaWFsLnggLSB0aGlzLngsIDIpICsgTWF0aC5wb3codHJpYWwueSAtIHRoaXMueSwgMikgPD0gTWF0aC5wb3cocmFkaXVzLCAyKTtcbiAgICB9XG59IiwiaW1wb3J0IENvbnRleHQgZnJvbSBcIi4vQ2FudmFzL0NvbnRleHRcIlxuaW1wb3J0IERpc2MgZnJvbSBcIi4vTW9kZWwvRGlzY1wiXG5pbXBvcnQgZ2V0R3Jhdml0eUFjYyBmcm9tIFwiLi9QaHlzaWMvR3Jhdml0eVwiXG5pbXBvcnQgTm9kZSBmcm9tIFwiLi9FbnRpdHkvTm9kZVwiXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSBcIi4vUGh5c2ljL1ZlY3RvcjJEXCJcbmltcG9ydCBQbGFuZXRTdGF0cyBmcm9tIFwiLi9NZW51L0NvbXBvbmVudC9QbGFuZXRTdGF0c1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYW5ldCBleHRlbmRzIE5vZGUge1xuICAgIC8vIHB1YmxpYyBtb2RlbDogRGlzY1xuICAgIHB1YmxpYyBtb2RlbDogRGlzY1xuICAgIHByb3RlY3RlZCBzdGF0czogUGxhbmV0U3RhdHNcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgaWQ6IHN0cmluZyxcbiAgICAgICAgcHVibGljIGNvb3JkczogVmVjdG9yMkQsXG4gICAgICAgIHJlYWRvbmx5IHJhZGl1czogbnVtYmVyLFxuICAgICAgICByZWFkb25seSBtYXNzOiBudW1iZXIsXG4gICAgICAgIHJlYWRvbmx5IGNvbG9yOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyB2ZWxvY2l0eTogVmVjdG9yMkQsXG4gICAgICAgIHJlYWRvbmx5IHBsYW5ldHM6IFBsYW5ldFtdXG4gICAgICAgICkge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMubW9kZWwgPSBuZXcgRGlzYyh0aGlzLmNvb3JkcywgdGhpcy5yYWRpdXMsIHRoaXMuY29sb3IpO1xuICAgICAgICAgICAgdGhpcy5zdGF0cyA9IG5ldyBQbGFuZXRTdGF0cyh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgdXBkYXRlKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaWQgPT0gXCJlYXJ0aCBhbG9yc1wiKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNvb3JkcylcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMucGxhbmV0cykge1xuICAgICAgICAgICAgY29uc3Qgb3RoZXIgPSB0aGlzLnBsYW5ldHNbaV07XG5cbiAgICAgICAgICAgIGlmIChvdGhlci5pZCA9PSB0aGlzLmlkKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5ID0gdGhpcy52ZWxvY2l0eS5zdW0oZ2V0R3Jhdml0eUFjYyh0aGlzLCBvdGhlcikpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29vcmRzID0gdGhpcy5jb29yZHMuc3VtKHRoaXMudmVsb2NpdHkubm9ybWFsaXplKGRlbHRhKSk7XG4gICAgICAgIHRoaXMubW9kZWwuY29vcmRzID0gdGhpcy5jb29yZHM7XG4gICAgICAgIHN1cGVyLnVwZGF0ZShkZWx0YSk7XG4gICAgfVxuXG4gICAgZHJhdyhjb250ZXh0OiBDb250ZXh0KTogdm9pZCB7XG4gICAgICAgIGNvbnRleHQuZHJhdyh0aGlzLm1vZGVsKTtcbiAgICAgICAgdGhpcy5zdGF0cy5kcmF3KGNvbnRleHQpO1xuICAgICAgICBzdXBlci5kcmF3KGNvbnRleHQpO1xuICAgIH1cblxuICAgIGdldENvb3JkaW5hdGVzKCk6IFZlY3RvcjJEIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29vcmRzO1xuICAgIH1cblxuICAgIHNldENvb3JkaW5hdGVzKGNvb3JkczogVmVjdG9yMkQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb29yZHMgPSBjb29yZHM7XG4gICAgfVxufSIsImltcG9ydCBDb250ZXh0IGZyb20gXCIuL0NhbnZhcy9Db250ZXh0XCJcbmltcG9ydCBMaW5lIGZyb20gXCIuL01vZGVsL0xpbmVcIlxuaW1wb3J0IFBsYW5ldCBmcm9tIFwiLi9QbGFuZXRcIlxuaW1wb3J0IE5vZGUgZnJvbSBcIi4vRW50aXR5L05vZGVcIlxuaW1wb3J0IFZlY3RvcjJEIGZyb20gXCIuL1BoeXNpYy9WZWN0b3IyRFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYW5ldFRyYWlsIGV4dGVuZHMgTm9kZSB7XG4gICAgcHJpdmF0ZSB0cmFpbHM6IExpbmVbXVxuICAgIHByaXZhdGUgbWF4VHJhaWxzID0gMTVcbiAgICBwcml2YXRlIHByZXZpb3VzQ29vcmRpbmF0ZXM6IFZlY3RvcjJEID0gbnVsbFxuIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGxhbmV0OiBQbGFuZXQpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLnRyYWlscyA9IFtdXG4gICAgICAgIHRoaXMucHJldmlvdXNDb29yZGluYXRlcyA9IHRoaXMucGxhbmV0LmdldENvb3JkaW5hdGVzKCkuY2xvbmUoKVxuICAgIH1cblxuICAgIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMudHJhaWxzLmxlbmd0aCA9PSB0aGlzLm1heFRyYWlscykge1xuICAgICAgICAgICAgdGhpcy50cmFpbHMuc2hpZnQoKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJldmlvdXNDb29yZGluYXRlcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRyYWlscy5wdXNoKFxuICAgICAgICAgICAgbmV3IExpbmUoXG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c0Nvb3JkaW5hdGVzLFxuICAgICAgICAgICAgICAgIHRoaXMucGxhbmV0LmdldENvb3JkaW5hdGVzKCkuY2xvbmUoKSxcbiAgICAgICAgICAgICAgICB0aGlzLnBsYW5ldC5jb2xvcixcbiAgICAgICAgICAgICAgICAwLjJcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnByZXZpb3VzQ29vcmRpbmF0ZXMgPSB0aGlzLnBsYW5ldC5nZXRDb29yZGluYXRlcygpLmNsb25lKClcbiAgICB9XG5cbiAgICBkcmF3KGNhbnZhczogQ29udGV4dCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRyYWlscy5mb3JFYWNoKGQgPT4gY2FudmFzLmRyYXcoZCkpXG4gICAgfVxufSIsImltcG9ydCBFbnRpdHkgZnJvbSBcIi4uL0VudGl0eS9FbnRpdHlcIlxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL0NhbnZhcy9Db250ZXh0XCJcbmltcG9ydCBTY2VuZSBmcm9tIFwiLi9TY2VuZVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vQ2xlYXIgZXh0ZW5kcyBTY2VuZSBpbXBsZW1lbnRzIEVudGl0eSB7XG4gICAgcHVibGljIGVudGl0aWVzOiBFbnRpdHlbXSA9IFtdXG5cbiAgICBkcmF3KGNvbnRleHQ6IENvbnRleHQsIGRlbHRhPzogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZW50aXRpZXMuZm9yRWFjaChlID0+IGUuZHJhdyhjb250ZXh0LCBkZWx0YSkpXG4gICAgfVxufSIsImltcG9ydCBFbnRpdHkgZnJvbSBcIi4uL0VudGl0eS9FbnRpdHlcIlxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL0NhbnZhcy9Db250ZXh0XCJcbmltcG9ydCBOb2RlIGZyb20gXCIuLi9FbnRpdHkvTm9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZSBleHRlbmRzIE5vZGUge1xuICAgIHB1YmxpYyBlbnRpdGllczogRW50aXR5W10gPSBbXVxuXG4gICAgY29uc3RydWN0b3IgKHB1YmxpYyBpZDogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICB9XG5cbiAgICBkcmF3KGNvbnRleHQ6IENvbnRleHQsIGRlbHRhPzogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnRleHQuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY29udGV4dC5jYW52YXMuY2FudmFzLndpZHRoLCBjb250ZXh0LmNhbnZhcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5lbnRpdGllcy5mb3JFYWNoKGUgPT4gZS5kcmF3KGNvbnRleHQsIGRlbHRhKSlcbiAgICAgICAgY29udGV4dC5jb250ZXh0LnN0cm9rZSgpOyAgICBcbiAgICB9XG59IiwiaW1wb3J0IFNjZW5lIGZyb20gXCIuL1NjZW5lXCJcbmltcG9ydCBOb0NsZWFyIGZyb20gXCIuL05vQ2xlYXJcIlxuXG5leHBvcnQge1xuICAgIFNjZW5lLFxuICAgIE5vQ2xlYXJcbn0iLCJpbXBvcnQgQ29uZmlnIGZyb20gXCIuLi9Db25maWdcIlxuXG5jb25zdCBraWxvbWV0cmVUb1B4ID0gKGRpc3RhbmNlOiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICAgIHJldHVybiBkaXN0YW5jZSAvIENvbmZpZy5rbVBlclB4XG59XG5cbmNvbnN0IHB4VG9LaWxvbWV0cmUgPSAocHg6IG51bWJlcik6IG51bWJlciA9PiB7XG4gICAgcmV0dXJuIHB4ICogQ29uZmlnLmttUGVyUHhcbn1cblxuZXhwb3J0IHsga2lsb21ldHJlVG9QeCwgcHhUb0tpbG9tZXRyZSB9Il0sInNvdXJjZVJvb3QiOiIifQ==