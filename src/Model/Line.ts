import Context from "../Canvas/Context"
import Node from "../Entity/Node"
import Vector2D from "../Physic/Vector2D"
import { pxToKilometre } from "../Unit/Distance"

export default class Line extends Node {
    constructor(
        public from: Vector2D,
        public to: Vector2D,
        public color: string,
        public lineWidth: number = 1
    ) {
        super(from);
    }

    draw(ctx: Context) {
        ctx.line(
            pxToKilometre(this.from.x),
            pxToKilometre(this.from.y),
            pxToKilometre(this.to.x),
            pxToKilometre(this.to.y),
            this.color,
            this.lineWidth
        )
    }

    setCoordinates(coords: Vector2D): void {
        this.from = coords
    }

    getSizes(): Vector2D {
        const t = this.from.sub(this.to);
        return new Vector2D(Math.abs(t.x), Math.abs(t.y));
    }
}