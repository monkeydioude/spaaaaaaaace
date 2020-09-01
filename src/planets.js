function isOutsideSpace(x, y , r) {
    return x - r <= 0 ||
    y - r <= 0 ||
    x + r >= spaceW ||
    y + r >= spaceH;
}

function findOkCoordinates(w, h, r, p) {
    let x = Math.random() * w << 0;
    let y = Math.random() * h << 0;
    for (let retry = 0; isInsideObject(x, y, r, p) || isOutsideSpace(x, y, r); retry++) {
        if (retry >= 20) {
            return null;
        }
        x = Math.random() * w << 0;
        y = Math.random() * h << 0;
    }

    return {x: x, y: y};
}

function definePlanets(max, planetsRadiusDef, w, h) {
    let planets = [];
    let minPlanetSizeSeed = planetsRadiusDef.min / planetsRadiusDef.max;

    for (let i = 0; i < max; i++) {
        let r = Math.random();
        if (r < minPlanetSizeSeed) {
            r = minPlanetSizeSeed + r;
        } 
        r = r * planetsRadiusDef.max << 0;
        let coords = findOkCoordinates(w, h, r, planets);

        if (coords == null) {
            continue;
        }
        planets.push(
            new Hoshi(
                i, 
                coords.x, 
                coords.y, 
                ((Math.PI * r * r) / 1000).toFixed(2), 
                r, 
                "#"+ (Math.random() * (16*16) << 0).toString(16) + (Math.random() * (16*16) << 0).toString(16) + (Math.random() * (16*16) << 0).toString(16)
            )
        );
    }
    return planets;
}

function dumpPlanetData(p, size) {
    debug.Write("[id: "+ p.id + " x: "+ (p.x << 0) +" y: "+ (p.y << 0) + "] ");
    // console.log(p);
    ctx.strokeStyle = '#000000';
    ctx.fillStyle = "#FFFFFF";
    ctx.lineWidth = 1;
    let x = p.x;
    let y = p.y + p.r;
    let sm = 1;

    if (p.x + fontSize * 16 > canvas.width) {
        x -= 120;
    }

    if (p.y + fontSize * 5 > canvas.height) {
        y = p.y - p.r;
        sm = -2;
    }

    ctx.fillText("x: "+ (p.x << 0) +" y: "+ (p.y << 0), X(x), Y(y)+ sm*size);
    // ctx.strokeText("x: "+ p.x +" y: "+ p.y, p.x, p.y - size);
    sm++;
    ctx.fillText("dir: "+ p.motion.d, X(x), Y(y) + sm*size);
    // ctx.strokeText("radius: "+ p.r, p.x, p.y);
    sm++;
    ctx.fillText("m: "+ p.mass + "e+24 kg", X(x), Y(y) + sm*size);
    // ctx.strokeText("mass: "+ p.ar, p.x, p.y + size);
    sm++;
    ctx.fillText("radius: "+ p.r, X(x), Y(y) + sm*size);
}

function drawPlanet(planet) {
    ctx.beginPath();
    ctx.font = fontSize+ "px Verdana";
    ctx.arc(X(planet.x), Y(planet.y), planet.r * zoomLevel, 0, 2 * Math.PI);
    ctx.fillStyle =  planet.c;
    ctx.fill(); 
}
