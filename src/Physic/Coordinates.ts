export default class Coordinates {
    constructor(public x: number, public y: number) {}

    setCoordinates(x: number, y: number): void {
        this.x = x
        this.y = y
    }
}