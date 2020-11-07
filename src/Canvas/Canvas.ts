import Entity from "../Entity/Entity"
import Context from "./Context"
import Camera from "../Camera/Camera"
import Node from "../Entity/Node"

export default class Canvas extends Node{
    readonly canvas: HTMLCanvasElement
    readonly context: Context
    public entities: Entity[] = []

    constructor(width: number, height: number, camera: Camera, public id: string) {
        super()
        this.canvas = document.createElement("canvas")
        this.canvas.id = this.id
        this.canvas.width = width
        this.canvas.height = height
        this.context = new Context(this.canvas.getContext("2d"), camera, this)
    }

    appendTo(element: HTMLElement) {
        element.appendChild(this.canvas)
    }

    update(delta: number): void {
        this.entities.forEach(e => {
            e.update(delta)
            e.draw(this.context, delta)
        })
    }
}