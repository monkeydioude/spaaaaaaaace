import Planet from "../Planet"
import Config from "../Config"
import Vector2D from "./Vector2D"

const getForce = (a: Planet, b: Planet): Vector2D => {
    // const dist = Geometry.getDistanceBetweenObjects(a.coords, b.coords)
    const r21_v = b.coords.sub(a.coords)
    const dist = Math.sqrt((r21_v.x*r21_v.x) + (r21_v.y*r21_v.y)) * 1000
    const f = (Config.G * a.mass * b.mass) / (dist * dist)
    const f21_v = r21_v.divide(dist).dot(-f*-1)
    return f21_v
}

export default (a: Planet, b: Planet): Vector2D => {
    return getForce(a, b).divide(a.mass)
}