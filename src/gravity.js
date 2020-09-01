function getGravityScalar(a, b, delta) {
    let abM = a.mass*b.mass * Math.pow(10, 24);
    let deltaDist = getDistanceBetweenObjects(a, b);
    let dist = Math.pow(10, distPow) * deltaDist;
    // debug.Write("["+ deltaDist + ":" + dist +"]")
    if (dist == 0 || Number.isNaN(dist) || Number.isNaN(deltaDist)) {
        return null;
    }
    return ((G * (abM/Math.pow(dist, 2))) / 2) * gravityPullByDelta;
}

function getApplicationDirection(a, b, acc, delta) {
    let dx = a.x - b.x;
    let dy = a.y - b.y;
    let xRatio = Math.abs(dx / dy);

    debug.Write("<" + acc + ">");
    // console.log(acc)
    // debug.Write("<" + acc + ">");
    // a.x += acc * xRatio * (dx > 0 ? -1 : 1) * delta;
    // a.y += acc * (1 - xRatio) * (dy > 0 ? -1 : 1) * delta;
}

function attraction(planet, planets, delta) {
    for (let i = 0; i < maxPlanets; i++) {
        let p = planets[i];

        if (planet.id == p.id) {
            continue;
        }
 
        let acc = getGravityScalar(planet, p, delta);
        if (acc == null) {
            continue;
        }
        getApplicationDirection(planet, p, acc, delta);
    }
    // debug.BR();
}

function gravityEffect(obj, objects, delta) {
    if (gravity == false) {
        return;
    }

    attraction(obj, objects, delta);
}
