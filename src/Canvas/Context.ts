import Model from "../Model/Model"
import Camera from "../Camera/Camera"
import Canvas from "./Canvas"
import Text from "../Text/Text"
import Config from "../Config"

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

    arc(x: number, y: number, r: number, as: number, ae: number, lineWidth: number = 1): Context {
        this.context.lineWidth = lineWidth
        this.context.arc(this.camera.X(x), this.camera.Y(y), this.camera.zTransform(r), as, ae)
        return this
    }

    write(text: Text, lines: string[]) {
        const fs = text.getFontSize()
        const ff = text.getFontFamily()
        const c = text.getCoordinates()

        this.context.beginPath()
        this.context.font = `${Config.fontSize}px ${ff}`

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

    line(fromX: number, fromY: number, toX: number, toY: number, color: string, lineWidth: number = 1) {
        this.context.lineWidth = lineWidth
        this.context.strokeStyle = color
        this.context.moveTo(this.camera.X(fromX), this.camera.Y(fromY))
        this.context.lineTo(this.camera.X(toX), this.camera.Y(toY))
        this.context.closePath()
        this.context.stroke()
    }
}

type DrawFunction = (ctx: Context) => void

export {
    DrawFunction
}