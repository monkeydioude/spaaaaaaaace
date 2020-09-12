import Entity from "../Entity/Entity"
import Context from "./Context"
import Camera from "../Camera/Camera"

export default class Canvas {
    readonly canvas: HTMLCanvasElement
    readonly context: Context
    public entities: Entity[]

    constructor(width: number, height: number, camera: Camera) {
        this.canvas = document.createElement("canvas")
        this.canvas.width = width
        this.canvas.height = height
        this.context = new Context(this.canvas.getContext("2d"), camera, this)
        this.entities = []
    }

    appendTo(element: HTMLElement) {
        element.appendChild(this.canvas)
    }

    update(delta: number): void {
        this.entities.forEach(e => {
            e.update(delta)
            e.draw(delta, this.context)
        })
    }
}