import Context from "../Canvas/Context"
import Coordinates from "../Physic/Coordinates"
import Node from "../Entity/Node"

export default class Dot extends Node {
    constructor(public coords: Coordinates, public color: string) {
        super()
    }

    draw(ctx: Context) {
        // ctx.context.fillStyle = "purple"
        // ctx.context.fillRect(this.coords.x - 1, this.coords.y - 1, 2, 2)
        ctx.fillRect(this.coords.x, this.coords.y, 1, 1, this.color)
    }

    getCoordinates(): Coordinates {
        return this.coords
    }

    setCoordinates(coords: Coordinates): void {
        this.coords = coords
    }
}