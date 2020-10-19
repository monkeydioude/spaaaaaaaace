import Context from "../Canvas/Context"
import Coordinates from "../Physic/Coordinates"

export default interface Model {
    draw(ctx: Context, delta? :number): void
    getCoordinates(): Coordinates
}