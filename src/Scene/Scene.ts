import Entity from "../Entity/Entity"
import Context from "../Canvas/Context"
import Node from "../Entity/Node";
import Vector2D from "../Physic/Vector2D";

export default class Scene extends Node {
    constructor (public id: string) {
        super(new Vector2D(0, 0));
    }

    draw(context: Context, delta?: number): void {
        context.context.clearRect(0, 0, context.canvas.canvas.width, context.canvas.canvas.height);
        this.entities.forEach(e => e.draw(context, delta));
    }
}