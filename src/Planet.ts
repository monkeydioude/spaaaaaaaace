import Coordinates from "./Physic/Coordinates"
import Context from "./Canvas/Context"
import Disc from "./Model/Disc"
import Velocity from "./Physic/Velocity"
import applyGravity from "./Physic/Gravity"
import Node from "./Entity/Node"

export default class Planet extends Node {
    // public model: Disc
    public model: Disc

    constructor(
        public id: string,
        public coords: Coordinates,
        readonly radius: number,
        readonly mass: number,
        readonly color: string,
        public velocity: Velocity,
        readonly planets: Planet[]
        ) {
            super()
            this.model = new Disc(this.coords, this.radius, this.color)
        }

    update(delta: number): void {
        for (let i in this.planets) {
            const p = this.planets[i]

            if (p.id == this.id) {
                continue
            }
            applyGravity(this.velocity, this, p, delta)
        }
        this.velocity.apply(this.coords, delta)
        super.update(delta)
    }

    draw(context: Context): void {
        context.draw(this.model)
        super.draw(context)
    }

    getCoordinates(): Coordinates {
        return this.coords
    }

    setCoordinates(coords: Coordinates): void {
        this.coords = coords
    }
}