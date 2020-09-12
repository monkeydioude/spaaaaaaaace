import Coordinates from "./Coordinates"
import Config from "../Config"

const getDistanceBetweenObjects = (a: Coordinates, b: Coordinates): number => {
    return (Math.abs(b.x - a.x) + Math.abs(b.y - a.y)) * Config.mPerPx
}

export {
    getDistanceBetweenObjects
}