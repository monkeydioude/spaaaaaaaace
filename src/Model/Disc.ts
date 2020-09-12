import Context from "../Canvas/Context"
import Model from "./Model"

export default class Disc implements Model {
    constructor(public x: number, public y: number, public radius: number, public color: string) {}

    draw(ctx: Context) {
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        ctx.fill(this.color)
    }
}