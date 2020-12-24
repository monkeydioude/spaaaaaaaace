import Context from "../Canvas/Context"
import Coordinates from "../Physic/Coordinates"
import Node from "../Entity/Node"

export default class Dot extends Node {
    constructor(
        public from: Coordinates,
        public to: Coordinates,
        public color: string,
        public lineWidth: number = 1
    ) {
        super()
    }

    draw(ctx: Context) {
        ctx.line(this.from.x, this.from.y, this.to.x, this.to.y, this.color, this.lineWidth)
    }

    getCoordinates(): Coordinates {
        return this.from
    }

    setCoordinates(coords: Coordinates): void {
        this.from = coords
    }
}