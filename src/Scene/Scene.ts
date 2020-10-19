import Entity from "../Entity/Entity"
import Context from "../Canvas/Context"

export default class Scene implements Entity {
    public entities: Entity[] = []

    constructor (public id: string) {}

    update(delta: number): void {
        this.entities.forEach(e => e.update(delta))
    }

    draw(context: Context, delta?: number): void {
        context.context.clearRect(0, 0, context.canvas.canvas.width, context.canvas.canvas.height);
        this.entities.forEach(e => e.draw(context, delta))
        context.context.stroke();    
    }

    getEntities(): Entity[] {
        return this.entities
    }
}