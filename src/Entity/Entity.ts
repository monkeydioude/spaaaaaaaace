import Context from "../Canvas/Context"

export default interface Entity {
    update(delta: number): void
    draw(canvas: Context, delta?: number): void
    getEntities(): Entity[]
}