import Context from "../Canvas/Context"
import Vector2D from "../Physic/Vector2D";

export default interface Model {
    draw(ctx: Context, delta? :number): void
    getCoordinates(): Vector2D
}