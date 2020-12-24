import Coordinates from "./Coordinates"
import { pxToMeter } from "../Unit/Distance";

const getDistanceBetweenObjects = (a: Coordinates, b: Coordinates): number => {
    return +pxToMeter((Math.abs(b.x - a.x) + Math.abs(b.y - a.y)))
}

function getAngularDirection(objRef: any, objDist: any) {
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

function getRotationDirection(objRef: any, objDist: any) {
    return getAngularDirection(objRef, objDist) / 360;
}


export { getDistanceBetweenObjects }