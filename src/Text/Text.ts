import Coordinates from "../Physic/Coordinates";

export default interface Text {
    getColor(): string
    getFontSize(): number
    getFontFamily(): string
    getCoordinates(): Coordinates
}