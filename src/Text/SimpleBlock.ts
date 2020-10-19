import Context from "../Canvas/Context"
import Entity from "../Entity/Entity"
import Coordinates from "../Physic/Coordinates"
import Text from "./Text"

export default class SimpleBlock implements Text, Entity {
    public decalX: number = 0
    public decalY: number = 0
    public color: string = "#ffffff"
    public fontSize: number = 14
    public fontFamily: string = "Verdana"
    public entities: Entity[]

    constructor(readonly context: Context, readonly coords: Coordinates, color?: string, fontSize?: number, fontFamily?: string) {
        if (color) {
            this.color = color
        }

        if (fontSize) {
            this.fontSize = fontSize
        }

        if (fontFamily) {
            this.fontFamily = fontFamily
        }
    }

    setDecal(decalX: number, decalY: number): Text {
        this.decalX = decalX
        this.decalY = decalY
        return this
    }

    getCoordinates(): Coordinates {
        return new Coordinates(this.coords.x + this.decalX, this.coords.y + this.decalY)
    }

    setColor(color: string): Text {
        this.color = color
        return this
    }

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

    update(delta: number): void {
    }

    draw(context: Context): void {
        for (let entity of this.entities) {
            entity.draw(context)
        }
    }

    getEntities(): Entity[] {
        return this.entities
    }
}