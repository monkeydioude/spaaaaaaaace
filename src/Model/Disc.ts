import Context from "../Canvas/Context"
import Coordinates from "../Physic/Coordinates"
import Model from "./Model"

export default class Disc implements Model {
    constructor(public coords: Coordinates, public radius: number, public color: string) {}

    draw(ctx: Context) {
        ctx.arc(this.coords.x, this.coords.y, this.radius, 0, 2 * Math.PI)
        ctx.fill(this.color)
    }

    getCoordinates(): Coordinates {
        return this.coords
    }

    setCoordinates(coords: Coordinates): void {
        this.coords = coords
    }
}