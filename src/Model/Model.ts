import Context from "../Canvas/Context"

export default interface Model {
    draw(ctx: Context): void
}