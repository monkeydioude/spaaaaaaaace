import Context from "../Context"

export default interface Model {
    draw(ctx: Context): void
}