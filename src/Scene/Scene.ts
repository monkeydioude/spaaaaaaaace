import Entity from "../Entity/Entity"
import Context from "../Canvas/Context"
import Node from "../Entity/Node";

export default class Scene extends Node {
    public entities: Entity[] = []

    constructor (public id: string) {
        super()
    }

    draw(context: Context, delta?: number): void {
        context.context.clearRect(0, 0, context.canvas.canvas.width, context.canvas.canvas.height);
        this.entities.forEach(e => e.draw(context, delta))
        context.context.stroke();    
    }
}