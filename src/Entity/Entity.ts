import Context from "../Context"

export default interface Entity {
    update(delta: number): void
    draw(delta: number, canvas: Context): void
    getEntities(): Entity[]
}