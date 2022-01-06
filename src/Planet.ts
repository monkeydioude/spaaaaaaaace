import Context from "./Canvas/Context"
import Disc from "./Model/Disc"
import getGravityAcc from "./Physic/Gravity"
import Node from "./Entity/Node"
import Vector2D from "./Physic/Vector2D"

export default class Planet extends Node {
    // public model: Disc
    public model: Disc

    constructor(
        public id: string,
        public coords: Vector2D,
        readonly radius: number,
        readonly mass: number,
        readonly color: string,
        public velocity: Vector2D,
        readonly planets: Planet[]
        ) {
            super()
            this.model = new Disc(this.coords, this.radius, this.color)
        }

    update(delta: number): void {
        if (this.id == "earth alors") {
            // console.log(this.coords)
        }
        for (let i in this.planets) {
            const other = this.planets[i]

            if (other.id == this.id) {
                continue
            }
            const acc = getGravityAcc(this, other)
            const accNormalized = acc.dot(delta)
            this.velocity = this.velocity.sum(accNormalized)
        }
        this.coords = this.coords.sum(this.velocity)
        this.model.coords = this.coords
        super.update(delta)
    }

    draw(context: Context): void {
        context.draw(this.model)
        super.draw(context)
    }

    getCoordinates(): Vector2D {
        return this.coords
    }

    setCoordinates(coords: Vector2D): void {
        this.coords = coords
    }
}