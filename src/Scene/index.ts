import Entity from "../Entity/Entity"
import Context from "../Canvas/Context"

export default class Scene implements Entity {
    public entities: Entity[] = []

    update(delta: number): void {
        this.entities.forEach(e => e.update(delta))
    }

    draw(delta: number, context: Context): void {
        context.context.clearRect(0, 0, context.canvas.canvas.width, context.canvas.canvas.height);
        context.canvas.canvas.style.backgroundColor = "#000000"
        this.entities.forEach(e => e.draw(delta, context))
        context.context.stroke();    
    }

    getEntities(): Entity[] {
        return this.entities
    }
}