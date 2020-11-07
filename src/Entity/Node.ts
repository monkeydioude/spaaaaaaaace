import Entity from "./Entity"
import Context from "../Canvas/Context"

export default abstract class Node implements Entity {
    public entities: Entity[] = []

    update(delta: number): void {
        this.entities.forEach(e => e.update(delta))
    }

    draw(context: Context, delta?: number): void {
        this.entities.forEach(e => e.draw(context, delta))
    }

    getEntities(): Entity[] {
        return this.entities
    }

    addEntity(entity: Entity): this {
        this.entities.push(entity)
        return this
    }
}