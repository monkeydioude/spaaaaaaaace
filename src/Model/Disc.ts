import Context from "../Canvas/Context"
import Vector2D from "../Physic/Vector2D"
import { kilometreToPx } from "../Unit/Distance"
import Model from "./Model"

export default class Disc implements Model {
    constructor(public coords: Vector2D, public radius: number, public color: string) {}

    draw(ctx: Context) {
        ctx.context.fillStyle = this.color;
        ctx.context.strokeStyle = this.color;
        ctx.arc(kilometreToPx(this.coords.x), kilometreToPx(this.coords.y), kilometreToPx(this.radius), 0, 2 * Math.PI)
        ctx.context.fill();
        ctx.context.stroke();
    }

    getCoordinates(): Vector2D {
        return this.coords;
    }

    setCoordinates(coords: Vector2D): void {
        this.coords = coords;
    }
}