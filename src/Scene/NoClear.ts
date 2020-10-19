import Entity from "../Entity/Entity"
import Context from "../Canvas/Context"
import Scene from "./Scene"

export default class NoClear extends Scene implements Entity {
    public entities: Entity[] = []

    draw(context: Context, delta?: number): void {
        this.entities.forEach(e => e.draw(context, delta))
    }
}