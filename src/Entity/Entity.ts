import Vector2D from "src/Physic/Vector2D";
import Context from "../Canvas/Context"

export default interface Entity {
    update(delta: number): void
    draw(canvas: Context, delta?: number): void
    getCoordinates(): Vector2D
    getSizes(): Vector2D
}