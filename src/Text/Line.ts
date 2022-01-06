import Text from "./Text"
import Context from "../Canvas/Context"
import Vector2D from "../Physic/Vector2D"

export default class Line implements Text {
    public color: string = "#ffffff"
    public fontSize: number = 14
    public fontFamily: string = "Verdana"

    constructor(readonly context: Context, readonly coords: Vector2D) {}

    getColor(): string {
        return this.color
    }

    setFontSize(fontSize: number): Text {
        this.fontSize = fontSize
        return this
    }

    getFontSize(): number {
        return this.fontSize
    }

    getFontFamily(): string {
        return this.fontFamily
    }

    getCoordinates(): Vector2D {
        return this.coords
    }
}