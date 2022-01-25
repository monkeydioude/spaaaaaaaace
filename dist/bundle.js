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
        velocity: new Vector2D_1.default(0, Config_1.default.earthSpeed).dot(new Vector2D_1.default(1 / 2, 1 / 2)),
    };
    return {
        "sun41": sun,
        "earth alors": earth,
        "interloper": {
            pos: new Vector2D_1.default(sun.pos.x + 184400000, sun.pos.y - 50000000),
            radius: Distance_1.pxToKilometre(5),
            mass: 7.348e4,
            color: "red",
            velocity: new Vector2D_1.default(-16.5, -5)
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
    write(text, x, y, color, fontSize, fontFamily) {
        // const fs = text.getFontSize()
        // const ff = text.getFontFamily()
        // const c = text.getCoordinates()
        // this.context.beginPath();
        this.context.font = `${fontSize}px ${fontFamily}`;
        this.context.fillStyle = color;
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
const Distance_1 = __webpack_require__(/*! ../../Unit/Distance */ "./src/Unit/Distance.ts");
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
        const windowH = 200;
        const floatFix = 6;
        new Text_1.default(new Vector2D_1.default(20, 20 + (windowH * this.localIt)), new Vector2D_1.default(220, windowH), this.planet.color, 20).setLines([
            `> ${this.planet.id}`,
            `  mass: ${this.planet.mass} kg`,
            '  velocity (~):',
            `    x: ${this.planet.velocity.x > 0 ? " " : ""}${this.planet.velocity.x.toFixed(floatFix)} km/s`,
            `    y: ${this.planet.velocity.y > 0 ? " " : ""}${this.planet.velocity.y.toFixed(floatFix)} km/s`,
            '  coordinates (~):',
            `    x: ${Distance_1.kilometreToPx(this.planet.coords.x).toFixed(floatFix)}`,
            `    y: ${Distance_1.kilometreToPx(this.planet.coords.y).toFixed(floatFix)}`,
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
    breakLine(width, line, fontSize, ctx) {
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
            const bl = this.breakLine(w, line, fontSize, ctx);
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
            console.log("y:", canvasY, "i:", i, "iOverload:", iOverload, "i+iOverload:", (i + iOverload), "text:", line);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vcGxhbmV0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2FtZXJhL0NhbWVyYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2FudmFzL0NhbnZhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2FudmFzL0NvbnRleHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29udHJvbHMvS2V5Ym9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnRyb2xzL01vdXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9Db250cm9scy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRW50aXR5L05vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01lbnUvQ29tcG9uZW50L1BsYW5ldFN0YXRzLnRzIiwid2VicGFjazovLy8uL3NyYy9NZW51L0NvbnRhaW5lci9CbG9jay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTWVudS9Db250YWluZXIvVGV4dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTW9kZWwvRGlzYy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTW9kZWwvTGluZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGh5c2ljL0dyYXZpdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BoeXNpYy9WZWN0b3IyRC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGxhbmV0LnRzIiwid2VicGFjazovLy8uL3NyYy9QbGFuZXRUcmFpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2NlbmUvTm9DbGVhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2NlbmUvU2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NjZW5lL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9Vbml0L0Rpc3RhbmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtR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QyxDQUFDO1FBQzNGLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbEQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM3QixDQUFDO0NBQ0o7QUFaRCx3QkFZQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCRCwyRUFBMkI7QUFJdkIsZ0JBSkcsZUFBSyxDQUlIO0FBSFQsaUZBQStCO0FBSTNCLGtCQUpHLGlCQUFPLENBSUg7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMWCx5RUFBOEI7QUFFOUIsTUFBTSxhQUFhLEdBQUcsQ0FBQyxRQUFnQixFQUFVLEVBQUU7SUFDL0MsT0FBTyxRQUFRLEdBQUcsZ0JBQU0sQ0FBQyxPQUFPO0FBQ3BDLENBQUM7QUFNUSxzQ0FBYTtBQUp0QixNQUFNLGFBQWEsR0FBRyxDQUFDLEVBQVUsRUFBVSxFQUFFO0lBQ3pDLE9BQU8sRUFBRSxHQUFHLGdCQUFNLENBQUMsT0FBTztBQUM5QixDQUFDO0FBRXVCLHNDQUFhIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgQ2FudmFzIGZyb20gXCIuL3NyYy9DYW52YXMvQ2FudmFzXCI7XG5pbXBvcnQgUGxhbmV0IGZyb20gXCIuL3NyYy9QbGFuZXRcIjtcbmltcG9ydCB7U2NlbmV9IGZyb20gXCIuL3NyYy9TY2VuZVwiO1xuaW1wb3J0IENhbWVyYSBmcm9tIFwiLi9zcmMvQ2FtZXJhL0NhbWVyYVwiO1xuaW1wb3J0IHsgS2V5Ym9hcmQsIE1vdXNlfSBmcm9tIFwiLi9zcmMvQ29udHJvbHNcIjtcbmltcG9ydCBDb25maWcgZnJvbSBcIi4vc3JjL0NvbmZpZ1wiXG5pbXBvcnQgUGxhbmV0VHJhaWwgZnJvbSBcIi4vc3JjL1BsYW5ldFRyYWlsXCI7XG5pbXBvcnQgZ2V0UGxhbmV0cyBmcm9tIFwiLi9wbGFuZXRzXCI7XG5pbXBvcnQgVmVjdG9yMkQgZnJvbSBcIi4vc3JjL1BoeXNpYy9WZWN0b3IyRFwiO1xuaW1wb3J0IHsgcmVzZXRJdCB9IGZyb20gXCIuL3NyYy9NZW51L0NvbXBvbmVudC9QbGFuZXRTdGF0c1wiO1xuaW1wb3J0IHsgcHhUb0tpbG9tZXRyZSB9IGZyb20gXCIuL3NyYy9Vbml0L0Rpc3RhbmNlXCI7XG5cbmNvbnN0IG1haW4gPSAoZGVsdGE6IG51bWJlciwgYm9hcmRzOiBDYW52YXNbXSkgPT4ge1xuICAgIC8vIGNUaW1lICs9IGRlbHRhXG4gICAgLy8gaWYgKGNUaW1lID4gQ29uZmlnLmRwZikge1xuICAgIGxldCBuQmVmb3JlID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xuICAgIGJvYXJkcy5mb3JFYWNoKGIgPT4ge1xuICAgICAgICBiLnVwZGF0ZShkZWx0YSAqIENvbmZpZy5nYW1lU3BlZWQpO1xuICAgIH0pXG4gICAgbGV0IG5BZnRlciA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcbiAgICAvLyBjVGltZSAtPSBDb25maWcuZHBmXG4gICAgLy8gfVxuICAgIHNldFRpbWVvdXQoKCkgPT4gbWFpbihDb25maWcubWlsbGlTZWNvbmRzUGVyRnJhbWUsIGJvYXJkcyksIChkZWx0YSAqIDEwMDApIC0gKG5BZnRlciAtIG5CZWZvcmUpKTtcbn1cblxuZG9jdW1lbnQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9IFwiY29tcGxldGVcIikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBDYW1lcmEoQ29uZmlnLnNwYWNlVyAvIDIsIENvbmZpZy5zcGFjZUggLyAyLCBDb25maWcuem9vbUxldmVsKVxuICAgIGNvbnN0IGJnQm9hcmQgPSBuZXcgQ2FudmFzKGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0LCBjYW1lcmEsIFwiYmFja2dyb3VuZFwiKTtcbiAgICBjb25zdCBwbGFuZXRCb2FyZCA9IG5ldyBDYW52YXMoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQsIGNhbWVyYSwgXCJtYWluXCIpO1xuXG4gICAgYmdCb2FyZC5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KTtcbiAgICBwbGFuZXRCb2FyZC5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KTtcbiAgICBiZ0JvYXJkLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMwMDAwMDBcIjtcbiAgICBcbiAgICBjb25zdCBwbGFuZXRTY2VuZSA9IG5ldyBTY2VuZShcIm1haW5cIik7XG5cbiAgICBjb25zdCBrZXlib2FyZENvbnRyb2xzID0gbmV3IEtleWJvYXJkKGNhbWVyYSwgcGxhbmV0Qm9hcmQpO1xuICAgIGNvbnN0IG1vdXNlQ29udHJvbCA9IG5ldyBNb3VzZSgpO1xuICAgIGNvbnN0IHBsYW5ldHNDb25maWcgPSBnZXRQbGFuZXRzKHBsYW5ldEJvYXJkLCBjYW1lcmEpO1xuICAgIGNvbnN0IGRvbUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBsZXQgcGxhbmV0czogUGxhbmV0W10gPSBbXTtcblxuICAgIG1vdXNlQ29udHJvbC5vbkNsaWNrKCh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgICAgICBwbGFuZXRzLmZvckVhY2goKHA6IFBsYW5ldCkgPT4ge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHAuY29vcmRzLmluc2lkZU9uUmFkaXVzKFxuICAgICAgICAgICAgICAgICAgICBuZXcgVmVjdG9yMkQoXG4gICAgICAgICAgICAgICAgICAgICAgICBweFRvS2lsb21ldHJlKGNhbWVyYS5yZWxhdGl2ZVgoeCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHhUb0tpbG9tZXRyZShjYW1lcmEucmVsYXRpdmVZKHkpKVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIHAucmFkaXVzICsgcHhUb0tpbG9tZXRyZSg4MCkpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwLmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KTtcblxuICAgIGRvbUJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5Ym9hcmRDb250cm9scy5oYW5kbGVLZXlib2FyZC5iaW5kKGtleWJvYXJkQ29udHJvbHMpKTtcbiAgICBkb21Cb2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtb3VzZUNvbnRyb2wuaGFuZGxlTW91c2UuYmluZChtb3VzZUNvbnRyb2wpKTtcbiAgICBcbiAgICBmb3IgKGxldCBpIGluIHBsYW5ldHNDb25maWcpIHtcbiAgICAgICAgY29uc3QgcCA9IHBsYW5ldHNDb25maWdbaV1cbiAgICAgICAgY29uc3QgcGxhbmV0ID0gbmV3IFBsYW5ldChpLFxuICAgICAgICAgICAgbmV3IFZlY3RvcjJEKHAucG9zLngsIHAucG9zLnkpLFxuICAgICAgICAgICAgcC5yYWRpdXMsXG4gICAgICAgICAgICBwLm1hc3MsXG4gICAgICAgICAgICBwLmNvbG9yLFxuICAgICAgICAgICAgcC52ZWxvY2l0eSxcbiAgICAgICAgICAgIHBsYW5ldHNcbiAgICAgICAgKVxuICAgICAgICBwbGFuZXRTY2VuZS5hZGRFbnRpdHkocGxhbmV0KTtcbiAgICAgICAgcGxhbmV0U2NlbmUuYWRkRW50aXR5KG5ldyBQbGFuZXRUcmFpbChwbGFuZXQpKTtcbiAgICAgICAgcGxhbmV0cy5wdXNoKHBsYW5ldCk7XG4gICAgfVxuXG4gICAgcGxhbmV0Qm9hcmQuYWRkRW50aXR5KHBsYW5ldFNjZW5lKTtcbiAgICBwbGFuZXRTY2VuZS5hZGRFbnRpdHkobmV3IHJlc2V0SXQoKSk7XG4gICAgXG4gICAgbWFpbihDb25maWcubWlsbGlTZWNvbmRzUGVyRnJhbWUsIFtiZ0JvYXJkLCBwbGFuZXRCb2FyZF0pO1xuIH0iLCJpbXBvcnQgQ2FudmFzIGZyb20gXCIuL3NyYy9DYW52YXMvQ2FudmFzXCJcbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4vc3JjL0NhbWVyYS9DYW1lcmFcIlxuaW1wb3J0IENvbmZpZyBmcm9tIFwiLi9zcmMvQ29uZmlnXCJcbmltcG9ydCB7IHB4VG9LaWxvbWV0cmUgfSBmcm9tIFwiLi9zcmMvVW5pdC9EaXN0YW5jZVwiXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSBcIi4vc3JjL1BoeXNpYy9WZWN0b3IyRFwiXG5cbmV4cG9ydCBkZWZhdWx0IChjYW52YXM6IENhbnZhcywgY2FtZXJhOiBDYW1lcmEpOiB7W2tleTogc3RyaW5nXTogYW55fSA9PiB7XG4gICAgY29uc3Qgc3VuID0ge1xuICAgICAgICBwb3M6IG5ldyBWZWN0b3IyRChcbiAgICAgICAgICAgIHB4VG9LaWxvbWV0cmUoY2FtZXJhLnJlbGF0aXZlWChjYW52YXMuY2FudmFzLndpZHRoIC8gMikpLFxuICAgICAgICAgICAgcHhUb0tpbG9tZXRyZShjYW1lcmEucmVsYXRpdmVZKGNhbnZhcy5jYW52YXMuaGVpZ2h0IC8gMikpLFxuICAgICAgICApLFxuICAgICAgICByYWRpdXM6IHB4VG9LaWxvbWV0cmUoMTIwKSxcbiAgICAgICAgbWFzczogMS45ODkxZTMwLFxuICAgICAgICBjb2xvcjogXCJvcmFuZ2VcIixcbiAgICAgICAgdmVsb2NpdHk6IG5ldyBWZWN0b3IyRCgwLCAwKVxuICAgIH1cblxuICAgIGNvbnN0IGVhcnRoID0ge1xuICAgICAgICBwb3M6IG5ldyBWZWN0b3IyRChcbiAgICAgICAgICAgIHN1bi5wb3MueCAtIDE0OS41OWU2LFxuICAgICAgICAgICAgc3VuLnBvcy55LFxuICAgICAgICApLFxuICAgICAgICByYWRpdXM6IHB4VG9LaWxvbWV0cmUoMTApLFxuICAgICAgICBtYXNzOiA1Ljk3MmUyNCxcbiAgICAgICAgY29sb3I6IFwic2t5Ymx1ZVwiLFxuICAgICAgICB2ZWxvY2l0eTogbmV3IFZlY3RvcjJEKDAsIENvbmZpZy5lYXJ0aFNwZWVkKS5kb3QobmV3IFZlY3RvcjJEKDEvMiwgMS8yKSksXG4gICAgICAgIC8vIHZlbG9jaXR5OiBuZXcgVmVjdG9yMkQoMCwgMCksXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgICAgICBcInN1bjQxXCI6IHN1bixcbiAgICAgICAgICAgIFwiZWFydGggYWxvcnNcIjogZWFydGgsXG4gICAgICAgICAgICBcImludGVybG9wZXJcIjoge1xuICAgICAgICAgICAgICAgIHBvczogbmV3IFZlY3RvcjJEKFxuICAgICAgICAgICAgICAgICAgICBzdW4ucG9zLnggKyAxODQ0MDAwMDAsXG4gICAgICAgICAgICAgICAgICAgIHN1bi5wb3MueSAtIDUwMDAwMDAwLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgcmFkaXVzOiBweFRvS2lsb21ldHJlKDUpLFxuICAgICAgICAgICAgICAgIG1hc3M6IDcuMzQ4ZTQsXG4gICAgICAgICAgICAgICAgY29sb3I6IFwicmVkXCIsXG4gICAgICAgICAgICAgICAgdmVsb2NpdHk6IG5ldyBWZWN0b3IyRCgtMTYuNSwgLTUpXG4gICAgICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbWVyYSB7XG4gICAgcHVibGljIHg6IG51bWJlciA9IDBcbiAgICBwdWJsaWMgeTogbnVtYmVyID0gMFxuICAgIHB1YmxpYyB6OiBudW1iZXIgPSAxXG5cbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMueCA9IHhcbiAgICAgICAgdGhpcy55ID0geVxuICAgICAgICB0aGlzLnogPSB6XG4gICAgfVxuXG4gICAgWCh4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy56VHJhbnNmb3JtKHggLSB0aGlzLngpXG4gICAgfVxuXG4gICAgWSh5OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy56VHJhbnNmb3JtKHkgLSB0aGlzLnkpXG4gICAgfVxuXG4gICAgelRyYW5zZm9ybSh2OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdiAqICgxIC8gdGhpcy56KVxuICAgIH1cblxuICAgIHJlbGF0aXZlWCh4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy54ICsgKHRoaXMueiAqIHgpXG4gICAgfVxuXG4gICAgcmVsYXRpdmVZKHk6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnkgKyAodGhpcy56ICogeSlcbiAgICB9XG59IiwiaW1wb3J0IEVudGl0eSBmcm9tIFwiLi4vRW50aXR5L0VudGl0eVwiXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi9Db250ZXh0XCJcbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4uL0NhbWVyYS9DYW1lcmFcIlxuaW1wb3J0IE5vZGUgZnJvbSBcIi4uL0VudGl0eS9Ob2RlXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIGV4dGVuZHMgTm9kZXtcbiAgICByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50XG4gICAgcmVhZG9ubHkgY29udGV4dDogQ29udGV4dFxuICAgIHB1YmxpYyBlbnRpdGllczogRW50aXR5W10gPSBbXVxuXG4gICAgY29uc3RydWN0b3Iod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGNhbWVyYTogQ2FtZXJhLCBwdWJsaWMgaWQ6IHN0cmluZykge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKVxuICAgICAgICB0aGlzLmNhbnZhcy5pZCA9IHRoaXMuaWRcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aFxuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHRcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gbmV3IENvbnRleHQodGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpLCBjYW1lcmEsIHRoaXMpXG4gICAgfVxuXG4gICAgYXBwZW5kVG8oZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcylcbiAgICB9XG5cbiAgICB1cGRhdGUoZGVsdGE6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmVudGl0aWVzLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICBlLnVwZGF0ZShkZWx0YSlcbiAgICAgICAgICAgIGUuZHJhdyh0aGlzLmNvbnRleHQsIGRlbHRhKVxuICAgICAgICB9KVxuICAgIH1cbn0iLCJpbXBvcnQgTW9kZWwgZnJvbSBcIi4uL01vZGVsL01vZGVsXCI7XG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9DYW1lcmEvQ2FtZXJhXCI7XG5pbXBvcnQgQ2FudmFzIGZyb20gXCIuL0NhbnZhc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0IHtcbiAgICBjb25zdHJ1Y3RvciAoXG4gICAgICAgIHJlYWRvbmx5IGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgICAgICAgcmVhZG9ubHkgY2FtZXJhOiBDYW1lcmEsXG4gICAgICAgIHJlYWRvbmx5IGNhbnZhczogQ2FudmFzLFxuICAgICAgICApIHt9XG5cbiAgICBkcmF3KG1vZGVsOiBNb2RlbCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKClcbiAgICAgICAgbW9kZWwuZHJhdyh0aGlzKVxuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKClcbiAgICB9XG5cbiAgICBhcmMoeDogbnVtYmVyLCB5OiBudW1iZXIsIHI6IG51bWJlciwgYXM6IG51bWJlciwgYWU6IG51bWJlciwgbGluZVdpZHRoOiBudW1iZXIgPSAxKTogQ29udGV4dCB7XG4gICAgICAgIHRoaXMuY29udGV4dC5saW5lV2lkdGggPSBsaW5lV2lkdGhcbiAgICAgICAgdGhpcy5jb250ZXh0LmFyYyh0aGlzLmNhbWVyYS5YKHgpLCB0aGlzLmNhbWVyYS5ZKHkpLCB0aGlzLmNhbWVyYS56VHJhbnNmb3JtKHIpLCBhcywgYWUpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgd3JpdGUodGV4dDogc3RyaW5nLCB4OiBudW1iZXIsIHk6IG51bWJlciwgY29sb3I6IHN0cmluZywgZm9udFNpemU6IG51bWJlciwgZm9udEZhbWlseTogc3RyaW5nKSB7XG4gICAgICAgIC8vIGNvbnN0IGZzID0gdGV4dC5nZXRGb250U2l6ZSgpXG4gICAgICAgIC8vIGNvbnN0IGZmID0gdGV4dC5nZXRGb250RmFtaWx5KClcbiAgICAgICAgLy8gY29uc3QgYyA9IHRleHQuZ2V0Q29vcmRpbmF0ZXMoKVxuXG4gICAgICAgIC8vIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZvbnQgPSBgJHtmb250U2l6ZX1weCAke2ZvbnRGYW1pbHl9YDtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xuXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dCh0ZXh0LCB4LCB5KTtcbiAgICAgICAgLy8gbGluZXMubWFwKChsaW5lLCBpKSA9PiB7XG4gICAgICAgIC8vICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQobGluZSwgK2MueCwgK2MueSArIChmcyAqIGkpKVxuICAgICAgICAvLyB9KVxuICAgIH1cblxuICAgIGZpbGxSZWN0KHg6IG51bWJlciwgeTogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlciwgY29sb3I6IHN0cmluZyk6IENvbnRleHQge1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3JcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KHRoaXMuY2FtZXJhLlgoeCksIHRoaXMuY2FtZXJhLlkoeSksIHcsIGgpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgZmlsbChjb2xvcjogc3RyaW5nKTogQ29udGV4dCB7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBjb2xvclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbCgpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgbGluZShmcm9tWDogbnVtYmVyLCBmcm9tWTogbnVtYmVyLCB0b1g6IG51bWJlciwgdG9ZOiBudW1iZXIsIGNvbG9yOiBzdHJpbmcsIGxpbmVXaWR0aDogbnVtYmVyID0gMSkge1xuICAgICAgICB0aGlzLmNvbnRleHQubGluZVdpZHRoID0gbGluZVdpZHRoXG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG9yXG4gICAgICAgIHRoaXMuY29udGV4dC5tb3ZlVG8odGhpcy5jYW1lcmEuWChmcm9tWCksIHRoaXMuY2FtZXJhLlkoZnJvbVkpKVxuICAgICAgICB0aGlzLmNvbnRleHQubGluZVRvKHRoaXMuY2FtZXJhLlgodG9YKSwgdGhpcy5jYW1lcmEuWSh0b1kpKVxuICAgICAgICB0aGlzLmNvbnRleHQuY2xvc2VQYXRoKClcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpXG4gICAgfVxufVxuXG50eXBlIERyYXdGdW5jdGlvbiA9IChjdHg6IENvbnRleHQpID0+IHZvaWRcblxuZXhwb3J0IHtcbiAgICBEcmF3RnVuY3Rpb25cbn0iLCJjb25zdCBjRHVyYXRpb24gPSAwXG5jb25zdCBmcHMgPSA2MFxuY29uc3QgbWlsbGlTZWNvbmRzUGVyRnJhbWUgPSAxIC8gZnBzXG5sZXQgem9vbUxldmVsID0gMi41XG5sZXQgem9vbU1pbiA9IDAuMVxuY29uc3Qgem9vbUFjdGlvblBvdyA9IDAuMTBcbmNvbnN0IGRlY2FsQnlNb3ZlID0gMjVcblxubGV0IG1heFBsYW5ldHMgPSA0XG5sZXQgcGxhbmV0c1JhZGl1c0RlZiA9IHttaW46IDMsIG1heDogNzB9XG5jb25zdCBwbGFuZXRzTWluRGlzdCA9IDEwXG5jb25zdCBwbGFuZXRCYXNlU3BlZWQgPSA0MFxuXG5jb25zdCBzcGFjZVcgPSAxMDAwMFxuY29uc3Qgc3BhY2VIID0gMTAwMDBcbmNvbnN0IGRlY2FsWCA9IHNwYWNlVyAvIDJcbmNvbnN0IGRlY2FsWSA9IHNwYWNlSCAvIDJcblxuY29uc3QgZGlzdFBvdyA9IDVcblxuY29uc3QgZm9udFNpemUgPSAxNFxubGV0IGRlYnVnID0gbnVsbFxuY29uc3QgZWFydGhTcGVlZCA9IDI5Ljc4IC8vIGttL3NcbmNvbnN0IEcgPSBNYXRoLnBvdygxMCwgLTExKSAqIDYuNjc0XG5cbmVudW0gUGxheU1vZGUge1xuICAgIFBMQVksXG4gICAgUEFVU0Vcbn1cblxuY29uc3QgbW9kZSA9IFBsYXlNb2RlLlBMQVlcbi8vIGNvbnN0IGttUGVyUHggPSAxLjNlNVxuY29uc3Qga21QZXJQeCA9IDEuOGU1XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBnYW1lU3BlZWQ6IDM2NSAqIDI0ICogNjAgKiA2MCAvIDQsXG4gICAgLy8gZ2FtZVNwZWVkOiAxMDAsXG4gICAga21QZXJQeCxcbiAgICBtUGVyUHg6IGttUGVyUHggKiAxMDAwLFxuICAgIGtnUGVyUHhEZW5zaXR5OiAxMjAwLFxuICAgIEcsXG4gICAgY0R1cmF0aW9uLFxuICAgIGZwcyxcbiAgICB6b29tTGV2ZWwsXG4gICAgem9vbUFjdGlvblBvdyxcbiAgICBkZWNhbEJ5TW92ZSxcbiAgICBtYXhQbGFuZXRzLFxuICAgIHBsYW5ldHNSYWRpdXNEZWYsXG4gICAgcGxhbmV0c01pbkRpc3QsXG4gICAgcGxhbmV0QmFzZVNwZWVkLFxuICAgIHNwYWNlVyxcbiAgICBzcGFjZUgsXG4gICAgZGVjYWxYLFxuICAgIGRlY2FsWSxcbiAgICBkaXN0UG93LFxuICAgIGZvbnRTaXplLFxuICAgIGRlYnVnLFxuICAgIFBsYXlNb2RlLFxuICAgIG1vZGUsXG4gICAgem9vbU1pbixcbiAgICBlYXJ0aFNwZWVkLFxuICAgIG1pbGxpU2Vjb25kc1BlckZyYW1lXG59IiwiaW1wb3J0IENhbWVyYSBmcm9tIFwiLi4vQ2FtZXJhL0NhbWVyYVwiXG5pbXBvcnQgQ29uZmlnIGZyb20gXCIuLi9Db25maWdcIlxuaW1wb3J0IENhbnZhcyBmcm9tIFwiLi4vQ2FudmFzL0NhbnZhc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleWJvYXJkIHtcbiAgICBwdWJsaWMgYWN0aW9uQnlLZXljb2RlOiB7W2tleTogbnVtYmVyXTogRnVuY3Rpb259XG5cbiAgICBjb25zdHJ1Y3RvcihyZWFkb25seSBjYW1lcmE6IENhbWVyYSwgcmVhZG9ubHkgY2FudmFzOiBDYW52YXMpIHtcbiAgICAgICAgdGhpcy5hY3Rpb25CeUtleWNvZGUgPSB7XG4gICAgICAgICAgICAvLyA2ODogKCkgPT4ge2RlYnVnLlRvZ2dsZSgpO30sXG4gICAgICAgICAgICAvLyA4MzogKCkgPT4ge21vZGUgPSBtb2RlID09IFBBVVNFID8gUExBWSA6IFBBVVNFO30sXG4gICAgICAgICAgICA4MjogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnggPSAwXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEueSA9IDBcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56ID0gMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDkwOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FtZXJhLnogPD0gQ29uZmlnLnpvb21NaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnogLT0gQ29uZmlnLnpvb21BY3Rpb25Qb3dcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA4ODogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnogKz0gQ29uZmlnLnpvb21BY3Rpb25Qb3dcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAzNzogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhbWVyYS54IC0gQ29uZmlnLmRlY2FsQnlNb3ZlIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS54IC09IENvbmZpZy5kZWNhbEJ5TW92ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDM4OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FtZXJhLnkgLSBDb25maWcuZGVjYWxCeU1vdmUgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnkgLT0gQ29uZmlnLmRlY2FsQnlNb3ZlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMzk6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYW1lcmEueCA+PSBDb25maWcuc3BhY2VXKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEueCArPSBDb25maWcuZGVjYWxCeU1vdmVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA0MDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhbWVyYS55ID49IENvbmZpZy5zcGFjZUgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS55ICs9IENvbmZpZy5kZWNhbEJ5TW92ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlS2V5Ym9hcmQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aW9uQnlLZXljb2RlID09IHVuZGVmaW5lZCB8fCBcbiAgICAgICAgICAgICF0aGlzLmFjdGlvbkJ5S2V5Y29kZVtldmVudC5rZXlDb2RlXSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWN0aW9uQnlLZXljb2RlW2V2ZW50LmtleUNvZGVdKCk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdXNlIHtcbiAgICBwcm90ZWN0ZWQgY2xpY2tDYjogKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiB2b2lkXG4gICAgb25DbGljayhjYjogKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiB2b2lkKSB7XG4gICAgICAgIHRoaXMuY2xpY2tDYiA9IGNiO1xuICAgIH1cblxuICAgIGhhbmRsZU1vdXNlKGU6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgdGhpcy5jbGlja0NiKGUueCwgZS55KTtcbiAgICB9XG59IiwiaW1wb3J0IEtleWJvYXJkIGZyb20gXCIuL0tleWJvYXJkXCI7XG5pbXBvcnQgTW91c2UgZnJvbSBcIi4vTW91c2VcIjtcblxuZXhwb3J0IHtcbiAgICBLZXlib2FyZCxcbiAgICBNb3VzZSxcbn0iLCJpbXBvcnQgRW50aXR5IGZyb20gXCIuL0VudGl0eVwiXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi4vQ2FudmFzL0NvbnRleHRcIlxuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBOb2RlIGltcGxlbWVudHMgRW50aXR5IHtcbiAgICBwdWJsaWMgZW50aXRpZXM6IEVudGl0eVtdID0gW11cblxuICAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZW50aXRpZXMuZm9yRWFjaChlID0+IGUudXBkYXRlKGRlbHRhKSlcbiAgICB9XG5cbiAgICBkcmF3KGNvbnRleHQ6IENvbnRleHQsIGRlbHRhPzogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZW50aXRpZXMuZm9yRWFjaChlID0+IGUuZHJhdyhjb250ZXh0LCBkZWx0YSkpXG4gICAgfVxuXG4gICAgZ2V0RW50aXRpZXMoKTogRW50aXR5W10ge1xuICAgICAgICByZXR1cm4gdGhpcy5lbnRpdGllc1xuICAgIH1cblxuICAgIGFkZEVudGl0eShlbnRpdHk6IEVudGl0eSk6IHRoaXMge1xuICAgICAgICB0aGlzLmVudGl0aWVzLnB1c2goZW50aXR5KVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbn0iLCJpbXBvcnQgeyBraWxvbWV0cmVUb1B4IH0gZnJvbSBcIi4uLy4uL1VuaXQvRGlzdGFuY2VcIjtcbmltcG9ydCBDb250ZXh0IGZyb20gXCIuLi8uLi9DYW52YXMvQ29udGV4dFwiO1xuaW1wb3J0IEVudGl0eSBmcm9tIFwiLi4vLi4vRW50aXR5L0VudGl0eVwiO1xuaW1wb3J0IFZlY3RvcjJEIGZyb20gXCIuLi8uLi9QaHlzaWMvVmVjdG9yMkRcIjtcbmltcG9ydCBQbGFuZXQgZnJvbSBcIi4uLy4uL1BsYW5ldFwiO1xuaW1wb3J0IFRleHQgZnJvbSBcIi4uL0NvbnRhaW5lci9UZXh0XCI7XG5cbmxldCBpdCA9IDA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYW5ldFN0YXRzIHtcbiAgICBwcm90ZWN0ZWQgbG9jYWxJdDogbnVtYmVyID0gMDtcbiAgICBjb25zdHJ1Y3RvcihyZWFkb25seSBwbGFuZXQ6IFBsYW5ldCkge1xuICAgICAgICB0aGlzLmxvY2FsSXQgPSBpdDtcbiAgICAgICAgaXQrKztcbiAgICB9XG5cbiAgICBkcmF3KGNvbnRleHQ6IENvbnRleHQpIHtcbiAgICAgICAgY29uc3Qgd2luZG93SCA9IDIwMDtcbiAgICAgICAgY29uc3QgZmxvYXRGaXggPSA2O1xuICAgICAgICBuZXcgVGV4dChcbiAgICAgICAgICAgIG5ldyBWZWN0b3IyRCgyMCwgMjAgKyAod2luZG93SCAqIHRoaXMubG9jYWxJdCkpLFxuICAgICAgICAgICAgbmV3IFZlY3RvcjJEKDIyMCwgd2luZG93SCksXG4gICAgICAgICAgICB0aGlzLnBsYW5ldC5jb2xvcixcbiAgICAgICAgICAgIDIwXG4gICAgICAgICkuc2V0TGluZXMoW1xuICAgICAgICAgICAgYD4gJHt0aGlzLnBsYW5ldC5pZH1gLFxuICAgICAgICAgICAgYCAgbWFzczogJHt0aGlzLnBsYW5ldC5tYXNzfSBrZ2AsXG4gICAgICAgICAgICAnICB2ZWxvY2l0eSAofik6JyxcbiAgICAgICAgICAgIGAgICAgeDogJHt0aGlzLnBsYW5ldC52ZWxvY2l0eS54ID4gMCA/IFwiIFwiIDogXCJcIn0ke3RoaXMucGxhbmV0LnZlbG9jaXR5LngudG9GaXhlZChmbG9hdEZpeCl9IGttL3NgLFxuICAgICAgICAgICAgYCAgICB5OiAke3RoaXMucGxhbmV0LnZlbG9jaXR5LnkgPiAwID8gXCIgXCIgOiBcIlwifSR7dGhpcy5wbGFuZXQudmVsb2NpdHkueS50b0ZpeGVkKGZsb2F0Rml4KX0ga20vc2AsXG4gICAgICAgICAgICAnICBjb29yZGluYXRlcyAofik6JyxcbiAgICAgICAgICAgIGAgICAgeDogJHsga2lsb21ldHJlVG9QeCh0aGlzLnBsYW5ldC5jb29yZHMueCkudG9GaXhlZChmbG9hdEZpeCl9YCxcbiAgICAgICAgICAgIGAgICAgeTogJHsga2lsb21ldHJlVG9QeCh0aGlzLnBsYW5ldC5jb29yZHMueSkudG9GaXhlZChmbG9hdEZpeCl9YCxcbiAgICAgICAgXSkuZHJhdyhjb250ZXh0KTtcbiAgICB9XG59XG5cbmNsYXNzIHJlc2V0SXQgaW1wbGVtZW50cyBFbnRpdHkge1xuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgaXQgPSAwO1xuICAgIH1cblxuICAgIGRyYXcoKSB7fVxuICAgIGdldEVudGl0aWVzKCk6IEVudGl0eVtdIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICByZXNldEl0XG59OyIsImltcG9ydCBDb250ZXh0IGZyb20gXCIuLi8uLi9DYW52YXMvQ29udGV4dFwiXG5pbXBvcnQgRW50aXR5IGZyb20gXCIuLi8uLi9FbnRpdHkvRW50aXR5XCJcbmltcG9ydCBWZWN0b3IyRCBmcm9tIFwiLi4vLi4vUGh5c2ljL1ZlY3RvcjJEXCJcbmltcG9ydCBCbG9jayBmcm9tIFwiLi9Db250YWluZXJcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNpYyBpbXBsZW1lbnRzIEJsb2NrLCBFbnRpdHkge1xuICAgIHB1YmxpYyBkZWNhbFg6IG51bWJlciA9IDBcbiAgICBwdWJsaWMgZGVjYWxZOiBudW1iZXIgPSAwXG4gICAgcHVibGljIGVudGl0aWVzOiBFbnRpdHlbXVxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHJlYWRvbmx5IGNvb3JkczogVmVjdG9yMkQsXG4gICAgICAgIHJlYWRvbmx5IHNpemVzOiBWZWN0b3IyRCxcbiAgICAgICAgcHVibGljIGNvbG9yOiBzdHJpbmcgPSBcIiNmZmZmZmZcIixcbiAgICAgICAgcHVibGljIGZvbnRTaXplOiBudW1iZXIgPSAxNCxcbiAgICAgICAgcHVibGljIGZvbnRGYW1pbHk6IHN0cmluZyA9IFwiVmVyZGFuYVwiXG4gICAgKSB7XG4gICAgfVxuXG4gICAgc2V0RGVjYWwoZGVjYWxYOiBudW1iZXIsIGRlY2FsWTogbnVtYmVyKTogQmxvY2sge1xuICAgICAgICB0aGlzLmRlY2FsWCA9IGRlY2FsWDtcbiAgICAgICAgdGhpcy5kZWNhbFkgPSBkZWNhbFk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldENvb3JkaW5hdGVzKCk6IFZlY3RvcjJEIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyRCgrdGhpcy5jb29yZHMueCArIHRoaXMuZGVjYWxYLCArdGhpcy5jb29yZHMueSArIHRoaXMuZGVjYWxZKTtcbiAgICB9XG5cbiAgICBnZXRDb2xvcigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xvclxuICAgIH1cblxuICAgIGdldFNpemVzKCk6IFZlY3RvcjJEIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZXM7XG4gICAgfVxuXG4gICAgZ2V0Rm9udFNpemUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9udFNpemU7XG4gICAgfVxuXG4gICAgZ2V0Rm9udEZhbWlseSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5mb250RmFtaWx5O1xuICAgIH1cblxuICAgIHVwZGF0ZSgpOiB2b2lkIHt9XG5cbiAgICBkcmF3KGNvbnRleHQ6IENvbnRleHQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbnRpdGllcy5mb3JFYWNoKGVudGl0eSA9PiBlbnRpdHkuZHJhdyhjb250ZXh0KSk7XG4gICAgfVxuXG4gICAgZ2V0RW50aXRpZXMoKTogRW50aXR5W10ge1xuICAgICAgICByZXR1cm4gdGhpcy5lbnRpdGllcztcbiAgICB9XG59IiwiaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uLy4uL0NhbnZhcy9Db250ZXh0XCI7XG5pbXBvcnQgQmxvY2sgZnJvbSBcIi4vQmxvY2tcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dCBleHRlbmRzIEJsb2NrIHtcbiAgICBwcm90ZWN0ZWQgbGluZXM6IHN0cmluZ1tdID0gW11cbiAgICBcbiAgICBhZGRMaW5lKHRleHQ6IHN0cmluZyk6IFRleHQge1xuICAgICAgICB0aGlzLmxpbmVzLnB1c2godGV4dCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldExpbmVzKGxpbmVzOiBzdHJpbmdbXSk6IFRleHQge1xuICAgICAgICB0aGlzLmxpbmVzID0gbGluZXM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNob3VsZEJyZWFrTGluZSh3aWR0aDogbnVtYmVyLCBsaW5lOiBzdHJpbmcsIGN0eDogQ29udGV4dCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gY3R4LmNvbnRleHQubWVhc3VyZVRleHQobGluZSkud2lkdGggPiB3aWR0aDtcbiAgICB9XG5cbiAgICBicmVha0xpbmUod2lkdGg6IG51bWJlciwgbGluZTogc3RyaW5nLCBmb250U2l6ZTogbnVtYmVyLCBjdHg6IENvbnRleHQpOiBzdHJpbmdbXSB7XG4gICAgICAgIGlmICghdGhpcy5zaG91bGRCcmVha0xpbmUod2lkdGgsIGxpbmUsIGN0eCkpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbGluZXM6IHN0cmluZ1tdID0gW107XG4gICAgICAgIC8vIGJyZWFrIGZvciAvblxuICAgICAgICBsaW5lLnNwbGl0KFwiXFxuXCIpLmZvckVhY2goKGw6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgLy8gZnVsbCBzaXplIG9mIGxpbmVcbiAgICAgICAgICAgIGNvbnN0IHRleHRXaWR0aCA9IGN0eC5jb250ZXh0Lm1lYXN1cmVUZXh0KGwpLndpZHRoO1xuICAgICAgICAgICAgLy8gc2l6ZSBvZiBhIGNoYXJhY3Rlciwgcm91bmRlZCB0byBjbG9zZXN0IGdyZWF0ZXIgaW50ZWdlclxuICAgICAgICAgICAgY29uc3QgY2hhclMgPSBNYXRoLmNlaWwodGV4dFdpZHRoIC8gbC5sZW5ndGgpO1xuICAgICAgICAgICAgLy8gbnVtYmVyIG9mIGNoYXIgcGVyIGxpbmUsIHJvdW5kZWQgdG8gdGhlIGNsb3Nlc3QgbG93ZXIgaW50ZWdlclxuICAgICAgICAgICAgY29uc3QgY2hhclBlckxpbmUgPSBNYXRoLmZsb29yKHdpZHRoIC8gY2hhclMpO1xuICAgICAgICAgICAgLy8gcmVsYXRpdmUgd2lkdGgsIHVzaW5nIGFib3ZlIGFwcHJveGltYXRpb25zXG4gICAgICAgICAgICBjb25zdCByZWxhdGl2ZVdpZHRoID0gY2hhclBlckxpbmUgKiBjaGFyUztcbiAgICAgICAgICAgIC8vIG51bWJlciBvZiBsaW5lcyB3ZSBzaG91bGQgYnJlYWsgaW50by5cbiAgICAgICAgICAgIC8vIG1pbihuKSA9IDE7XG4gICAgICAgICAgICBjb25zdCBuID0gTWF0aC5jZWlsKHRleHRXaWR0aCAvIHJlbGF0aXZlV2lkdGgpO1xuICAgICAgICAgICAgLy8gY3ljbGUgb3ZlciBudW1iZXIgb2YgbGluZXNcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGluZXMucHVzaChsLnNsaWNlKGNoYXJQZXJMaW5lKmksIGNoYXJQZXJMaW5lKihpKzEpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIGxpbmVzO1xuICAgIH1cblxuICAgIHdyaXRlTGluZXMoXG4gICAgICAgIGxpbmVzOiBzdHJpbmdbXSxcbiAgICAgICAgeDogbnVtYmVyLFxuICAgICAgICB5OiBudW1iZXIsXG4gICAgICAgIHc6IG51bWJlcixcbiAgICAgICAgaDogbnVtYmVyLFxuICAgICAgICBmb250U2l6ZTogbnVtYmVyLFxuICAgICAgICBjb2xvcjogc3RyaW5nLFxuICAgICAgICBmb250RmFtaWx5OiBzdHJpbmcsXG4gICAgICAgIGlPdmVybG9hZDogbnVtYmVyLFxuICAgICAgICBjdHg6IENvbnRleHRcbiAgICApIHtcbiAgICAgICAgbGluZXMuZm9yRWFjaCgobGluZTogc3RyaW5nLCBpOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJsID0gdGhpcy5icmVha0xpbmUodywgbGluZSwgZm9udFNpemUsIGN0eCk7XG4gICAgICAgICAgICBpZiAoYmwubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMud3JpdGVMaW5lcyhcbiAgICAgICAgICAgICAgICAgICAgYmwsXG4gICAgICAgICAgICAgICAgICAgIHgsXG4gICAgICAgICAgICAgICAgICAgIHksXG4gICAgICAgICAgICAgICAgICAgIHcsXG4gICAgICAgICAgICAgICAgICAgIGgsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseSxcbiAgICAgICAgICAgICAgICAgICAgaSArIGlPdmVybG9hZCxcbiAgICAgICAgICAgICAgICAgICAgY3R4XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAvLyAtMSBiZWNhdXNlIHRoZSBcImlcIiBvZiB0aGlzIGl0ZXJhdGlvbiB3YXMgbm90IHVzZWQgdG8gd3JpdGUgYVxuICAgICAgICAgICAgICAgIC8vIGxpbmUgYXMgaXQgc2hvdWxkIChjYW52YXNZIHVuZGVyKSwgYnV0IGFzIGFuIG92ZXJsb2FkIHZhbHVlXG4gICAgICAgICAgICAgICAgLy8gdG8gd3JpdGUgYnJva2VuIGxpbmVzLiBBbmQgXCJpXCIgd2lsbCBzdGlsbCBpbmNyZW1lbnQgYnkgMVxuICAgICAgICAgICAgICAgIC8vIGJlY2F1c2Ugb2YgZm9yRWFjaC5cbiAgICAgICAgICAgICAgICAvLyBBbmQgc2luY2UgaU92ZXJsb2FkIGlzIHVzZWQgdW5kZXIgdG8gY29tcHV0ZSBjYW52YXNZLCB3ZVxuICAgICAgICAgICAgICAgIC8vIGNhbiBjYW5jZWwgdGhhdCBlbXB0eSBcImlcIiBpdGVyYXRpb24gaGVyZS5cbiAgICAgICAgICAgICAgICBpT3ZlcmxvYWQgKz0gYmwubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjYW52YXNZID0geSArIChmb250U2l6ZSAqIChpICsgaU92ZXJsb2FkKSk7XG4gICAgICAgICAgICBjb25zdCBjYW52YXNYID0geDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieTpcIiwgY2FudmFzWSwgXCJpOlwiLCBpLCBcImlPdmVybG9hZDpcIiwgaU92ZXJsb2FkLCBcImkraU92ZXJsb2FkOlwiLCAoaSArIGlPdmVybG9hZCksIFwidGV4dDpcIiwgbGluZSlcbiAgICAgICAgICAgIGN0eC53cml0ZShsaW5lLCBjYW52YXNYLCBjYW52YXNZLCBjb2xvciwgZm9udFNpemUsIGZvbnRGYW1pbHkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkcmF3KGN0eDogQ29udGV4dCkge1xuICAgICAgICAvLyBjYW52YXNUeHQuZm9udFNpemUgPSB0aGlzLmdldEZvbnRTaXplKCk7XG4gICAgICAgIGNvbnN0IHt4LCB5fSA9IHRoaXMuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICAgICAgY29uc3Qge3g6IHcsIHk6IGh9ID0gdGhpcy5nZXRTaXplcygpO1xuXG4gICAgICAgIHRoaXMud3JpdGVMaW5lcyh0aGlzLmxpbmVzLCB4LCB5LCB3LCBoLCB0aGlzLmdldEZvbnRTaXplKCksIHRoaXMuZ2V0Q29sb3IoKSwgXCJWZXJkYW5hXCIsIDAsIGN0eCk7XG4gICAgfVxufSIsImltcG9ydCBDb250ZXh0IGZyb20gXCIuLi9DYW52YXMvQ29udGV4dFwiXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSBcIi4uL1BoeXNpYy9WZWN0b3IyRFwiXG5pbXBvcnQgeyBraWxvbWV0cmVUb1B4LCBweFRvS2lsb21ldHJlIH0gZnJvbSBcIi4uL1VuaXQvRGlzdGFuY2VcIlxuaW1wb3J0IE1vZGVsIGZyb20gXCIuL01vZGVsXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzYyBpbXBsZW1lbnRzIE1vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY29vcmRzOiBWZWN0b3IyRCwgcHVibGljIHJhZGl1czogbnVtYmVyLCBwdWJsaWMgY29sb3I6IHN0cmluZykge31cblxuICAgIGRyYXcoY3R4OiBDb250ZXh0KSB7XG4gICAgICAgIGN0eC5hcmMoa2lsb21ldHJlVG9QeCh0aGlzLmNvb3Jkcy54KSwga2lsb21ldHJlVG9QeCh0aGlzLmNvb3Jkcy55KSwga2lsb21ldHJlVG9QeCh0aGlzLnJhZGl1cyksIDAsIDIgKiBNYXRoLlBJKVxuICAgICAgICBjdHguZmlsbCh0aGlzLmNvbG9yKVxuICAgIH1cblxuICAgIGdldENvb3JkaW5hdGVzKCk6IFZlY3RvcjJEIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29vcmRzXG4gICAgfVxuXG4gICAgc2V0Q29vcmRpbmF0ZXMoY29vcmRzOiBWZWN0b3IyRCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvb3JkcyA9IGNvb3Jkc1xuICAgIH1cbn0iLCJpbXBvcnQgQ29udGV4dCBmcm9tIFwiLi4vQ2FudmFzL0NvbnRleHRcIlxuaW1wb3J0IE5vZGUgZnJvbSBcIi4uL0VudGl0eS9Ob2RlXCJcbmltcG9ydCBWZWN0b3IyRCBmcm9tIFwiLi4vUGh5c2ljL1ZlY3RvcjJEXCJcbmltcG9ydCB7IHB4VG9LaWxvbWV0cmUgfSBmcm9tIFwiLi4vVW5pdC9EaXN0YW5jZVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvdCBleHRlbmRzIE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgZnJvbTogVmVjdG9yMkQsXG4gICAgICAgIHB1YmxpYyB0bzogVmVjdG9yMkQsXG4gICAgICAgIHB1YmxpYyBjb2xvcjogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgbGluZVdpZHRoOiBudW1iZXIgPSAxXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICB9XG5cbiAgICBkcmF3KGN0eDogQ29udGV4dCkge1xuICAgICAgICBjdHgubGluZShcbiAgICAgICAgICAgIHB4VG9LaWxvbWV0cmUodGhpcy5mcm9tLngpLFxuICAgICAgICAgICAgcHhUb0tpbG9tZXRyZSh0aGlzLmZyb20ueSksXG4gICAgICAgICAgICBweFRvS2lsb21ldHJlKHRoaXMudG8ueCksXG4gICAgICAgICAgICBweFRvS2lsb21ldHJlKHRoaXMudG8ueSksXG4gICAgICAgICAgICB0aGlzLmNvbG9yLFxuICAgICAgICAgICAgdGhpcy5saW5lV2lkdGhcbiAgICAgICAgKVxuICAgIH1cblxuICAgIGdldENvb3JkaW5hdGVzKCk6IFZlY3RvcjJEIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVxuICAgIH1cblxuICAgIHNldENvb3JkaW5hdGVzKGNvb3JkczogVmVjdG9yMkQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5mcm9tID0gY29vcmRzXG4gICAgfVxufSIsImltcG9ydCBQbGFuZXQgZnJvbSBcIi4uL1BsYW5ldFwiXG5pbXBvcnQgQ29uZmlnIGZyb20gXCIuLi9Db25maWdcIlxuaW1wb3J0IFZlY3RvcjJEIGZyb20gXCIuL1ZlY3RvcjJEXCJcblxuY29uc3QgZ2V0Rm9yY2UgPSAoYTogUGxhbmV0LCBiOiBQbGFuZXQpOiBWZWN0b3IyRCA9PiB7XG4gICAgLy8gY29uc3QgZGlzdCA9IEdlb21ldHJ5LmdldERpc3RhbmNlQmV0d2Vlbk9iamVjdHMoYS5jb29yZHMsIGIuY29vcmRzKVxuICAgIGNvbnN0IHIyMV92ID0gYi5jb29yZHMuc3ViKGEuY29vcmRzKVxuICAgIGNvbnN0IGRpc3QgPSBNYXRoLnNxcnQoKHIyMV92LngqcjIxX3YueCAqIDEwMDApICsgKHIyMV92LnkqcjIxX3YueSAqIDEwMDApKVxuICAgIGNvbnN0IGYgPSAoQ29uZmlnLkcgKiBhLm1hc3MgKiBiLm1hc3MpIC8gKGRpc3QgKiBkaXN0KVxuICAgIGNvbnN0IGYyMV92ID0gcjIxX3YuZGl2aWRlKGRpc3QpLmRvdChmKVxuICAgIHJldHVybiBmMjFfdlxufVxuXG5leHBvcnQgZGVmYXVsdCAoYTogUGxhbmV0LCBiOiBQbGFuZXQpOiBWZWN0b3IyRCA9PiB7XG4gICAgcmV0dXJuIGdldEZvcmNlKGEsIGIpLmRpdmlkZShhLm1hc3MpXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjdG9yMkQge1xuICAgIGNvbnN0cnVjdG9yIChwdWJsaWMgeDogbnVtYmVyLCBwdWJsaWMgeTogbnVtYmVyKSB7fVxuXG4gICAgc3ViKHZlYzogVmVjdG9yMkQgfCBudW1iZXIpOiBWZWN0b3IyRCB7XG4gICAgICAgIGlmICh0eXBlb2YgdmVjID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICB2ZWMgPSBuZXcgVmVjdG9yMkQodmVjLCB2ZWMpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyRCh0aGlzLngtdmVjLngsIHRoaXMueS12ZWMueSlcbiAgICB9XG5cbiAgICAvLyBkb3QgcHJvZHVjdFxuICAgIGRvdCh2ZWM6IFZlY3RvcjJEIHwgbnVtYmVyKTogVmVjdG9yMkQge1xuICAgICAgICBpZiAodHlwZW9mIHZlYyA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdmVjID0gbmV3IFZlY3RvcjJEKHZlYywgdmVjKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMkQodGhpcy54ICogdmVjLngsIHRoaXMueSAqIHZlYy55KVxuICAgIH1cblxuICAgIHN1bSh2ZWM6IFZlY3RvcjJEIHwgbnVtYmVyKTogVmVjdG9yMkQge1xuICAgICAgICBpZiAodHlwZW9mIHZlYyA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdmVjID0gbmV3IFZlY3RvcjJEKHZlYywgdmVjKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMkQodGhpcy54ICsgdmVjLngsIHRoaXMueSArIHZlYy55KVxuICAgIH1cblxuICAgIGRpdmlkZSh2ZWM6IFZlY3RvcjJEIHwgbnVtYmVyKTogVmVjdG9yMkQge1xuICAgICAgICBpZiAodHlwZW9mIHZlYyA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdmVjID0gbmV3IFZlY3RvcjJEKHZlYywgdmVjKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMkQodGhpcy54IC8gdmVjLngsIHRoaXMueSAvIHZlYy55KVxuICAgIH1cblxuICAgIG5vcm1hbGl6ZSAobnVtYmVyOiBudW1iZXIpOiBWZWN0b3IyRCB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvdChuZXcgVmVjdG9yMkQobnVtYmVyLCBudW1iZXIpKVxuICAgIH1cblxuICAgIGNsb25lKCk6IFZlY3RvcjJEIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyRCh0aGlzLngsIHRoaXMueSlcbiAgICB9XG5cbiAgICBpbnNpZGVPblJhZGl1cyh0cmlhbDogVmVjdG9yMkQsIHJhZGl1czogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBNYXRoLnBvdyh0cmlhbC54IC0gdGhpcy54LCAyKSArIE1hdGgucG93KHRyaWFsLnkgLSB0aGlzLnksIDIpIDw9IE1hdGgucG93KHJhZGl1cywgMik7XG4gICAgfVxufSIsImltcG9ydCBDb250ZXh0IGZyb20gXCIuL0NhbnZhcy9Db250ZXh0XCJcbmltcG9ydCBEaXNjIGZyb20gXCIuL01vZGVsL0Rpc2NcIlxuaW1wb3J0IGdldEdyYXZpdHlBY2MgZnJvbSBcIi4vUGh5c2ljL0dyYXZpdHlcIlxuaW1wb3J0IE5vZGUgZnJvbSBcIi4vRW50aXR5L05vZGVcIlxuaW1wb3J0IFZlY3RvcjJEIGZyb20gXCIuL1BoeXNpYy9WZWN0b3IyRFwiXG5pbXBvcnQgUGxhbmV0U3RhdHMgZnJvbSBcIi4vTWVudS9Db21wb25lbnQvUGxhbmV0U3RhdHNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGFuZXQgZXh0ZW5kcyBOb2RlIHtcbiAgICAvLyBwdWJsaWMgbW9kZWw6IERpc2NcbiAgICBwdWJsaWMgbW9kZWw6IERpc2NcbiAgICBwcm90ZWN0ZWQgc3RhdHM6IFBsYW5ldFN0YXRzXG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGlkOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBjb29yZHM6IFZlY3RvcjJELFxuICAgICAgICByZWFkb25seSByYWRpdXM6IG51bWJlcixcbiAgICAgICAgcmVhZG9ubHkgbWFzczogbnVtYmVyLFxuICAgICAgICByZWFkb25seSBjb2xvcjogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgdmVsb2NpdHk6IFZlY3RvcjJELFxuICAgICAgICByZWFkb25seSBwbGFuZXRzOiBQbGFuZXRbXVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLm1vZGVsID0gbmV3IERpc2ModGhpcy5jb29yZHMsIHRoaXMucmFkaXVzLCB0aGlzLmNvbG9yKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdHMgPSBuZXcgUGxhbmV0U3RhdHModGhpcyk7XG4gICAgICAgIH1cblxuICAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlkID09IFwiZWFydGggYWxvcnNcIikge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5jb29yZHMpXG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLnBsYW5ldHMpIHtcbiAgICAgICAgICAgIGNvbnN0IG90aGVyID0gdGhpcy5wbGFuZXRzW2ldO1xuXG4gICAgICAgICAgICBpZiAob3RoZXIuaWQgPT0gdGhpcy5pZCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHRoaXMudmVsb2NpdHkuc3VtKGdldEdyYXZpdHlBY2ModGhpcywgb3RoZXIpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvb3JkcyA9IHRoaXMuY29vcmRzLnN1bSh0aGlzLnZlbG9jaXR5Lm5vcm1hbGl6ZShkZWx0YSkpO1xuICAgICAgICB0aGlzLm1vZGVsLmNvb3JkcyA9IHRoaXMuY29vcmRzO1xuICAgICAgICBzdXBlci51cGRhdGUoZGVsdGEpO1xuICAgIH1cblxuICAgIGRyYXcoY29udGV4dDogQ29udGV4dCk6IHZvaWQge1xuICAgICAgICBjb250ZXh0LmRyYXcodGhpcy5tb2RlbCk7XG4gICAgICAgIHRoaXMuc3RhdHMuZHJhdyhjb250ZXh0KTtcbiAgICAgICAgc3VwZXIuZHJhdyhjb250ZXh0KTtcbiAgICB9XG5cbiAgICBnZXRDb29yZGluYXRlcygpOiBWZWN0b3IyRCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvb3JkcztcbiAgICB9XG5cbiAgICBzZXRDb29yZGluYXRlcyhjb29yZHM6IFZlY3RvcjJEKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29vcmRzID0gY29vcmRzO1xuICAgIH1cbn0iLCJpbXBvcnQgQ29udGV4dCBmcm9tIFwiLi9DYW52YXMvQ29udGV4dFwiXG5pbXBvcnQgTGluZSBmcm9tIFwiLi9Nb2RlbC9MaW5lXCJcbmltcG9ydCBQbGFuZXQgZnJvbSBcIi4vUGxhbmV0XCJcbmltcG9ydCBOb2RlIGZyb20gXCIuL0VudGl0eS9Ob2RlXCJcbmltcG9ydCBWZWN0b3IyRCBmcm9tIFwiLi9QaHlzaWMvVmVjdG9yMkRcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGFuZXRUcmFpbCBleHRlbmRzIE5vZGUge1xuICAgIHByaXZhdGUgdHJhaWxzOiBMaW5lW11cbiAgICBwcml2YXRlIG1heFRyYWlscyA9IDE1XG4gICAgcHJpdmF0ZSBwcmV2aW91c0Nvb3JkaW5hdGVzOiBWZWN0b3IyRCA9IG51bGxcbiBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBsYW5ldDogUGxhbmV0KSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy50cmFpbHMgPSBbXVxuICAgICAgICB0aGlzLnByZXZpb3VzQ29vcmRpbmF0ZXMgPSB0aGlzLnBsYW5ldC5nZXRDb29yZGluYXRlcygpLmNsb25lKClcbiAgICB9XG5cbiAgICB1cGRhdGUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnRyYWlscy5sZW5ndGggPT0gdGhpcy5tYXhUcmFpbHMpIHtcbiAgICAgICAgICAgIHRoaXMudHJhaWxzLnNoaWZ0KClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByZXZpb3VzQ29vcmRpbmF0ZXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50cmFpbHMucHVzaChcbiAgICAgICAgICAgIG5ldyBMaW5lKFxuICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXNDb29yZGluYXRlcyxcbiAgICAgICAgICAgICAgICB0aGlzLnBsYW5ldC5nZXRDb29yZGluYXRlcygpLmNsb25lKCksXG4gICAgICAgICAgICAgICAgdGhpcy5wbGFuZXQuY29sb3IsXG4gICAgICAgICAgICAgICAgMC4yXG4gICAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgdGhpcy5wcmV2aW91c0Nvb3JkaW5hdGVzID0gdGhpcy5wbGFuZXQuZ2V0Q29vcmRpbmF0ZXMoKS5jbG9uZSgpXG4gICAgfVxuXG4gICAgZHJhdyhjYW52YXM6IENvbnRleHQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50cmFpbHMuZm9yRWFjaChkID0+IGNhbnZhcy5kcmF3KGQpKVxuICAgIH1cbn0iLCJpbXBvcnQgRW50aXR5IGZyb20gXCIuLi9FbnRpdHkvRW50aXR5XCJcbmltcG9ydCBDb250ZXh0IGZyb20gXCIuLi9DYW52YXMvQ29udGV4dFwiXG5pbXBvcnQgU2NlbmUgZnJvbSBcIi4vU2NlbmVcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb0NsZWFyIGV4dGVuZHMgU2NlbmUgaW1wbGVtZW50cyBFbnRpdHkge1xuICAgIHB1YmxpYyBlbnRpdGllczogRW50aXR5W10gPSBbXVxuXG4gICAgZHJhdyhjb250ZXh0OiBDb250ZXh0LCBkZWx0YT86IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmVudGl0aWVzLmZvckVhY2goZSA9PiBlLmRyYXcoY29udGV4dCwgZGVsdGEpKVxuICAgIH1cbn0iLCJpbXBvcnQgRW50aXR5IGZyb20gXCIuLi9FbnRpdHkvRW50aXR5XCJcbmltcG9ydCBDb250ZXh0IGZyb20gXCIuLi9DYW52YXMvQ29udGV4dFwiXG5pbXBvcnQgTm9kZSBmcm9tIFwiLi4vRW50aXR5L05vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmUgZXh0ZW5kcyBOb2RlIHtcbiAgICBwdWJsaWMgZW50aXRpZXM6IEVudGl0eVtdID0gW11cblxuICAgIGNvbnN0cnVjdG9yIChwdWJsaWMgaWQ6IHN0cmluZykge1xuICAgICAgICBzdXBlcigpXG4gICAgfVxuXG4gICAgZHJhdyhjb250ZXh0OiBDb250ZXh0LCBkZWx0YT86IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb250ZXh0LmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNvbnRleHQuY2FudmFzLmNhbnZhcy53aWR0aCwgY29udGV4dC5jYW52YXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuZW50aXRpZXMuZm9yRWFjaChlID0+IGUuZHJhdyhjb250ZXh0LCBkZWx0YSkpXG4gICAgICAgIGNvbnRleHQuY29udGV4dC5zdHJva2UoKTsgICAgXG4gICAgfVxufSIsImltcG9ydCBTY2VuZSBmcm9tIFwiLi9TY2VuZVwiXG5pbXBvcnQgTm9DbGVhciBmcm9tIFwiLi9Ob0NsZWFyXCJcblxuZXhwb3J0IHtcbiAgICBTY2VuZSxcbiAgICBOb0NsZWFyXG59IiwiaW1wb3J0IENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnXCJcblxuY29uc3Qga2lsb21ldHJlVG9QeCA9IChkaXN0YW5jZTogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgICByZXR1cm4gZGlzdGFuY2UgLyBDb25maWcua21QZXJQeFxufVxuXG5jb25zdCBweFRvS2lsb21ldHJlID0gKHB4OiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICAgIHJldHVybiBweCAqIENvbmZpZy5rbVBlclB4XG59XG5cbmV4cG9ydCB7IGtpbG9tZXRyZVRvUHgsIHB4VG9LaWxvbWV0cmUgfSJdLCJzb3VyY2VSb290IjoiIn0=