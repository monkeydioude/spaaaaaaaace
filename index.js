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

function X(x) {
    return (x - decalX);
}

function Y(y) {
    return (y - decalY);
}

function process(delta, planets) {
    for(let i = 0; i < maxPlanets; i++) {
        let thisPlanet = planets[i];

        for (let j = 0; j < maxPlanets; j++) {
            let getsPulledByThisPlanet = planets[j];
    
            if (thisPlanet.id == getsPulledByThisPlanet.id) {
                continue;
            }
     
            let gravityForce = Gravity.getForce(thisPlanet, getsPulledByThisPlanet, delta);
            if (gravityForce == null) {
                continue;
            }

            thisPlanet.update(getsPulledByThisPlanet, gravityForce, delta);
        }
        // handleCollision(obj, planets);

        // if (obj.colliding) {
        //     console.log(obj.id + " collides");
        // }

        Engine.drawPlanet(thisPlanet);
        dumpPlanetData(thisPlanet, fontSize);    
    }
}

function main(duration, planets) {
    if (mode == PLAY) {
        ctx.clearRect(0, 0, canvas.width, canvas.clientHeight);
        process(duration - cDuration, planets);
        ctx.stroke();    
    }

    cDuration = duration;
    window.requestAnimationFrame(delta => main(delta, planets));
}

document.onreadystatechange = function (e) {
    debug = new Debug("#debug");
    if (document.readyState != "complete") {
        return;
    }
    document.querySelector("body").addEventListener("keydown", handleKeyboard);
    canvas = document.querySelector("#board");
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
    ctx = canvas.getContext("2d");

    const planets = Planets.define(maxPlanets, planetsRadiusDef, document.body.clientWidth, document.body.clientHeight);
    debug.dummyDefPlanets(planets);
    main(0, planets);
 };