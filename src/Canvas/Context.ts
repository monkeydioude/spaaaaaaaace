import Model from "../Model/Model"
import Camera from "../Camera/Camera"
import Canvas from "./Canvas"
import Text from "../Text/Text"

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

    write(text: Text, lines: string[]) {
        const fs = text.getFontSize()
        const ff = text.getFontFamily()
        const c = text.getCoordinates()

        this.context.beginPath()
        this.context.font = `${fontSize}px ${ff}`

        lines.map((line, i) => {
            this.context.fillText(line, c.x, c.y + (fs * i))
        })
    }

    fillRect(x: number, y: number, w: number, h: number, color: string): Context {
        this.context.fillStyle = color
        this.context.fillRect(this.camera.X(x), this.camera.Y(y), w, h)
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