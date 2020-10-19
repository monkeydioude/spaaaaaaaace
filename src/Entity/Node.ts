import Entity from "./Entity"
import Context from "../Canvas/Context"

export default abstract class Node implements Entity {
    public entities: Entity[]

    update(_: number): void {}

    draw(_: Context): void {}

    getEntities(): Entity[] {
        return this.entities
    }
}