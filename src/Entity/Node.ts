import Entity from "./Entity"
import Context from "../Canvas/Context"
import Vector2D from "../Physic/Vector2D"

export default abstract class Node implements Entity {
    protected entities: Entity[] = []

    constructor(protected coords: Vector2D) {}

    update(delta: number): void {
        this.entities.forEach(e => e.update(delta));
    }

    draw(context: Context, delta?: number): void {
        this.entities.forEach(e => e.draw(context, delta));
    }

    addEntity(entity: Entity): this {
        this.entities.push(entity)
        return this;
    }

    getCoordinates(): Vector2D {
        return this.coords;
    }

    getSizes(): Vector2D {
        return new Vector2D(0, 0);
    }
}