import Planet from "../Planet"
import Config from "../Config"
import Vector2D from "./Vector2D"

const getForce = (a: Planet, b: Planet): Vector2D => {
    // const dist = Geometry.getDistanceBetweenObjects(a.coords, b.coords)
    const r21_v = b.getCoordinates().sub(a.getCoordinates())
    const dist = Math.sqrt((r21_v.x*r21_v.x * 1000) + (r21_v.y*r21_v.y * 1000))
    const f = (Config.G * a.mass * b.mass) / (dist * dist)
    const f21_v = r21_v.divide(dist).dot(f)
    return f21_v
}

const getForceNorm = (a: Planet, b: Planet): number => {
    const dist = Math.sqrt(Math.pow(a.getCoordinates().getNorm() - b.getCoordinates().getNorm(), 2)) * 1000;
    return (Config.G * a.mass * b.mass) / (dist * dist)
}

export {
    getForce,
    getForceNorm,
}

export default (a: Planet, b: Planet): Vector2D => {
    return getForce(a, b).divide(a.mass)
}