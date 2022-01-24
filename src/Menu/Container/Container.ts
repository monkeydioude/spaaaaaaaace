import Vector2D from "../../Physic/Vector2D";

export default interface Text {
    getColor(): string
    getFontSize(): number
    getFontFamily(): string
    getCoordinates(): Vector2D
    getSizes(): Vector2D
}