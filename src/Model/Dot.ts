import Context from "../Canvas/Context"
import Node from "../Entity/Node"
import Vector2D from "../Physic/Vector2D"
import { pxToKilometre } from "../Unit/Distance"

export default class Dot extends Node {
    constructor(public coords: Vector2D, public color: string) {
        super()
    }

    draw(ctx: Context) {
        // ctx.context.fillStyle = "purple"
        // ctx.context.fillRect(this.coords.x - 1, this.coords.y - 1, 2, 2)
        ctx.fillRect(pxToKilometre(this.coords.x), pxToKilometre(this.coords.y), 1, 1, this.color)
    }

    getCoordinates(): Vector2D {
        return this.coords
    }

    setCoordinates(coords: Vector2D): void {
        this.coords = coords
    }
}