import Velocity from "./Velocity";
import Planet from "../Planet"
import Coordinates from "./Coordinates"
import * as Geometry from "./Geometry"
import Config from "../Config"
import { Meter, meterToPx } from "../Unit/Distance";

const getForce = (a: Planet, b: Planet): number => {
    const dist = Geometry.getDistanceBetweenObjects(a.coords, b.coords)
    if (dist == 0 || Number.isNaN(dist)) {
        return 
    }
    const F = Config.G * (((+a.mass)*(+b.mass))/(dist*dist))

    return F * Config.gravityPullByDelta
}

const getForceRatio = (dirA: number, dirB: number, coordA: Coordinates, coordB: Coordinates): number => {
    return -(dirA - dirB) / (Math.abs(coordA.x - coordB.x) + Math.abs(coordA.y - coordB.y))
}

export default (velocity: Velocity, a: Planet, b: Planet, delta: number) => {
    const acc = meterToPx(new Meter(getForce(a, b) / (+a.mass)))
    velocity.accelerate(
        acc * getForceRatio(a.coords.x, b.coords.x, a.coords, b.coords),
        acc * getForceRatio(a.coords.y, b.coords.y, a.coords, b.coords),
        delta
    )
}