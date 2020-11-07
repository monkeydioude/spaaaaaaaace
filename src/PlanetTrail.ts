import Context from "./Canvas/Context"
import Dot from "./Model/Dot"
import Planet from "./Planet"
import Node from "./Entity/Node"

export default class PlanetTrail extends Node {
    private dots: Dot[]
    private maxDots = 999
 
    constructor(private planet: Planet) {
        super()
        this.dots = []
    }

    update(_: number): void {
        if (this.dots.length == this.maxDots) {
            this.dots.shift()
        }
        this.dots.push(new Dot(this.planet.getCoordinates().clone(), this.planet.color))
    }

    draw(canvas: Context): void {
        this.dots.forEach(d => canvas.draw(d))
    }
}