import Entity from "./Entity/Entity"
import Context from "./Context"
import Disc from "./Shape/Disc"

export default class Planet implements Entity {
    public entities: Entity[] = []
    public model: Disc

    constructor(
        public id: string,
        public x: number,
        public y: number,
        readonly radius: number,
        readonly color: string,
        public velocity: any) {
            this.model = new Disc(this.x, this.y, this.radius, this.color)
        }

    getEntities(): Entity[] {
        return this.entities
    }

    update(delta: number): void {
        this.entities.forEach(e => e.update(delta))
    }

    draw(delta: number, context: Context): void {
        context.draw(this.model)
    }
}