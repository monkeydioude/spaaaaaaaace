import Model from "../Model/Model"
import Camera from "../Camera/Camera"
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
        this.context.arc(this.camera.X(x), this.camera.Y(y), this.camera.zTransform(r), as, ae)
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