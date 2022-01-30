import Model from "../Model/Model";
import Camera from "../Camera/Camera";
import Canvas from "./Canvas";

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

    write(text: string, x: number, y: number, color: string, fontSize: number, fontFamily: string) {
        this.context.font = `${fontSize}px ${fontFamily}`;
        this.context.fillStyle = color;
        this.context.fillText(text, x, y);
    }

    strokeRect(x: number, y: number, w: number, h: number, color: string): Context {
        this.context.strokeStyle = color;
        this.context.strokeRect(this.camera.X(x), this.camera.Y(y), w, h);
        return this;
    }

    fillRect(x: number, y: number, w: number, h: number, color: string): Context {
        this.context.fillStyle = color;
        this.context.fillRect(this.camera.X(x), this.camera.Y(y), w, h);
        return this;
    }

    line(fromX: number, fromY: number, toX: number, toY: number, color: string, lineWidth: number = 1) {
        this.context.lineWidth = lineWidth;
        this.context.strokeStyle = color;
        this.context.moveTo(this.camera.X(fromX), this.camera.Y(fromY));
        this.context.lineTo(this.camera.X(toX), this.camera.Y(toY));
        this.context.closePath();
        this.context.stroke();
    }
}

type DrawFunction = (ctx: Context) => void

export {
    DrawFunction
}