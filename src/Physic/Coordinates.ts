export default class Coordinates {
    constructor(public x: number, public y: number) {}

    setCoordinates(x: number, y: number): void {
        this.x = x
        this.y = y
    }

    clone(): Coordinates {
        return new Coordinates(this.x, this.y)
    }
}