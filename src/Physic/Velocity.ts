import Coordinates from "./Coordinates"

export default class Velocity {
    constructor(public x: number, public y: number) {}

    accelerate(x: number, y: number, delta: number) {
        this.x += x * delta
        this.y += y * delta
    }

    apply(obj: Coordinates, delta: number) {
        obj.x += this.x * delta
        obj.y += this.y * delta
    }
}