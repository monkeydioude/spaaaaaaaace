import Context from "../Canvas/Context"

export default interface Entity {
    update(delta: number): void
    draw(delta: number, canvas: Context): void
    getEntities(): Entity[]
}