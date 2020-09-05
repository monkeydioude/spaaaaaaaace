let cDuration = 0;
let fps = 60;
let dpf = 1 / fps;
let canvas = null;
let ctx = null;
// let zoomLevel = 0.20;
let zoomLevel = 1;
let zoomActionPow = 0.10;
let decalByMove = 25;

let maxPlanets = 2;
let planetsRadiusDef = {min: 20, max: 60};
let planetsMinDist = 10;
let planetBaseSpeed = 0.5;

let spaceW = 10000;
let spaceH = 10000;
let decalX = 0;
let decalY = 0;

let G = Math.pow(10, -11) * 6.674;
let gravityPullByDelta = 10
let distPow = 5;
let gravity = true;

let fontSize = 14;
let debug = null;

let PLAY = 1;
let PAUSE = 2;

let mode = PLAY;