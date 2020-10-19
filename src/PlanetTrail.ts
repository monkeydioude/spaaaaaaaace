import Entity from "./Entity/Entity"
import Context from "./Canvas/Context"
import Planet from "./Planet"
import Dot from "./Model/Dot"

export default class PlanetTrail implements Entity {
    public entities: Entity[]

    constructor(private planets: Planet[]) {}

    update(_: number): void {}

    draw(canvas: Context): void {
        this.planets.forEach(p => {
            canvas.draw(new Dot(p.coords, p.color))
        })
    }

    getEntities(): Entity[] {
        return this.entities
    }
}