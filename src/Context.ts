import Model from "./Shape/Model"
import Camera from "./Camera"
import Canvas from "./Canvas"

export default class Context {
    constructor (
        readonly context: CanvasRenderingContext2D,
        readonly camera: Camera,
        readonly canvas: Canvas,
        ) {}

    draw(model: Model) {
        this.context.beginPath()
        model.draw(this)
        this.context.stroke()
    }

    arc(x: number, y: number, r: number, as: number, ae: number): Context {
        this.context.arc(x, y, r, as, ae)
        return this
    }

    fill(color: string): Context {
        this.context.fillStyle = color
        this.context.fill()
        return this
    }
}

type DrawFunction = (ctx: Context) => void

export {
    DrawFunction
}