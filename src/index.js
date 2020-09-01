let cDuration = 0;
let fps = 60;
let dpf = 1 / fps;
let canvas = null;
let ctx = null;
// let zoomLevel = 0.20;
let zoomLevel = 1;
let zoomActionPow = 0.10;
let decalByMove = 25;
let decalX = 0;
let decalY = 0;

var objects = [];
let maxPlanets = 10;
let planetsRadiusDef = {min: 20, max: 60};
let planetsMinDist = 10;
let planetBaseSpeed = 0.5;
let spaceW = 10000;
let spaceH = 10000;

let G = Math.pow(10, -11) * 6.674;
let gravityPullByDelta = 0.005;
let distPow = 5;
let gravity = true;

let fontSize = 14;
let debug = null;

let PLAY = 1;
let PAUSE = 2;

let mode = PLAY;

function dummyDefPlanets(objs) {
    objs[0].x = canvas.width / 4;
    objs[0].y = canvas.height / 4;
    objs[0].motion.v = 3;
    objs[0].motion.d = 0.875;
    objs[1].x = canvas.width / 3;
    objs[1].y = canvas.height / 3;
    objs[1].motion.v = 3;
    objs[1].motion.d = 0.375;
    objs[2].x = canvas.width / 2;
    objs[2].y = canvas.height / 2;
    objs[2].motion.v = 3;
    objs[2].motion.d = 0.25;
    objs[3].x = canvas.width / 1.1;
    objs[3].y = canvas.height / 1.1;
    objs[3].motion.v = 3;
    objs[3].motion.d = 0.75;
    // objs[4].x = 730;
    // objs[4].y = 150;
    // objs[4].motion.v = 3;
    // objs[4].motion.d = 0.125;
    // objs[5].x = 800;
    // objs[5].y = 75;
    // objs[5].motion.v = 3;
    // objs[5].motion.d = 0.66;
    // objs[2].x = 800;
    // objs[2].y = 100;
    // objs[2].motion.d = 0.75;
    console.log(getRotationDirection(objs[0], objs[1]));
    // console.log(getRotationDirection(objs[1], objs[2]));
}

document.onreadystatechange = function (e) {
    spaceW = document.body.clientWidth;
    spaceH = document.body.clientHeight;
        debug = new Debug("#debug");
    if (document.readyState != "complete") {
        return;
    }
    document.querySelector("body").addEventListener("keydown", handleKeyboard);
    canvas = document.querySelector("#board");
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
    ctx = canvas.getContext("2d");

    objects = definePlanets(maxPlanets, planetsRadiusDef, spaceW, spaceH);
    // dummyDefPlanets(objects);
    main(0);
 };

let actionByKeycode = {
    68: function() {debug.Toggle();},
    83: function() {mode = mode == PAUSE ? PLAY : PAUSE;},
    82: function() {
        decalX = 0;
        decalY = 0;
        zoomLevel = 1;
    },
    90: function() {zoomLevel += zoomActionPow},
    88: function() {if (zoomLevel - (zoomActionPow*2) <= 0) return; zoomLevel -= zoomActionPow},
    37: function() {
        if (decalX <= 0) {
            return;
        }
        decalX -= (decalByMove * 1/zoomLevel);
    },
    38: function() {
        if (decalY <= 0) {
            return;
        }
        decalY -= (decalByMove * 1/zoomLevel);
    },
    39: function() {
        if (decalX >= spaceW) {
            return;
        }
        decalX += (decalByMove * 1/zoomLevel);
    },
    40: function() {
        if (decalY >= spaceH) {
            return;
        }
        decalY += (decalByMove * 1/zoomLevel);
    }

}

function handleKeyboard(event) {
    if (!actionByKeycode[event.keyCode]) {
        return;
    }
    actionByKeycode[event.keyCode]();
}

function main(duration) {
    if (mode == PLAY) {
        ctx.clearRect(0, 0, canvas.width, canvas.clientHeight);
        process(duration - cDuration);
        ctx.stroke();    
    }

    cDuration = duration;
    window.requestAnimationFrame(main);
}

function process(delta) {
    collided = {};
    for(let i = 0; i < objects.length; i++) {
        let obj = objects[i];

        gravityEffect(obj, objects, delta);
        // handleCollision(obj, objects);

        // if (obj.colliding) {
        //     console.log(obj.id + " collides");
        // }

        obj.update(delta);
        drawPlanet(obj);
        dumpPlanetData(obj, fontSize);    
    }
}

function X(x) {
    return (x - decalX) * zoomLevel;
}

function Y(y) {
    return (y - decalY) * zoomLevel;
}
