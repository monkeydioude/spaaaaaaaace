
function getDistanceBetweenObjects(a, b) {
    return Math.round(Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2)));
}

function getAngularDirection(objRef, objDist) {
    let hyp = getDistanceBetweenObjects(objRef, objDist);
    let opp = Math.abs(objRef.x - objDist.x)
    // sin = opp/hyp
    // cos = adj/hyp
    // tan = opp/adj
    if (objDist.y == objRef.y) {
        if (objDist.x < objRef.x) {
            return 270;
        }
        return 90;
    }

    if (objDist.y < objRef.y) {
        if (objDist.x < objRef.x) {
            return 360 - Math.asin(opp/hyp);
        }
        // console.log(hyp, opp, Math.asin(opp/hyp));
        return Math.asin(opp/hyp);
    }

    if (objDist.x < objRef.x) {
        return 180 + Math.asin(opp/hyp);
    }
    // console.log(hyp, opp, 180 - Math.asin(opp/hyp));
    return 180 - Math.asin(opp/hyp);
}

function getRotationDirection(objRef, objDist) {
    return getAngularDirection(objRef, objDist) / 360;
}
