import Entity from "./Entity/Entity"
import Coordinates from "./Physic/Coordinates"
import Context from "./Canvas/Context"
import Disc from "./Model/Disc"
import Velocity from "./Physic/Velocity"
import applyGravity from "./Physic/Gravity"

export default class Planet implements Entity {
    public entities: Entity[] = []
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
            this.model = new Disc(this.coords, this.radius, this.color)
        }

    getEntities(): Entity[] {
        return this.entities
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
        this.entities.forEach(e => e.update(delta))
    }

    draw(delta: number, context: Context): void {
        context.draw(this.model)
    }

    getCoordinates(): Coordinates {
        return this.coords
    }

    setCoordinates(coords: Coordinates): void {
        // console.log(coords)
        this.coords = coords
        // this.model.setCoordinates(this.coords)
    }
}