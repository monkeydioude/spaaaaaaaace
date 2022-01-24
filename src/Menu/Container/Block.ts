import Context from "../../Canvas/Context"
import Entity from "../../Entity/Entity"
import Vector2D from "../../Physic/Vector2D"
import Block from "./Container"

export default class Basic implements Block, Entity {
    public decalX: number = 0
    public decalY: number = 0
    public entities: Entity[]

    constructor(
        readonly coords: Vector2D,
        readonly sizes: Vector2D,
        public color: string = "#ffffff",
        public fontSize: number = 14,
        public fontFamily: string = "Verdana"
    ) {
    }

    setDecal(decalX: number, decalY: number): Block {
        this.decalX = decalX;
        this.decalY = decalY;
        return this;
    }

    getCoordinates(): Vector2D {
        return new Vector2D(+this.coords.x + this.decalX, +this.coords.y + this.decalY);
    }

    getColor(): string {
        return this.color
    }

    getSizes(): Vector2D {
        return this.sizes;
    }

    getFontSize(): number {
        return this.fontSize;
    }

    getFontFamily(): string {
        return this.fontFamily;
    }

    update(): void {}

    draw(context: Context): void {
        this.entities.forEach(entity => entity.draw(context));
    }

    getEntities(): Entity[] {
        return this.entities;
    }
}