import Context from "./Canvas/Context"
import Line from "./Model/Line"
import Planet from "./Planet"
import Node from "./Entity/Node"
import Coordinates from "./Physic/Coordinates"

export default class PlanetTrail extends Node {
    private trails: Line[]
    private maxTrails = 999
    private previousCoordinates: Coordinates = null
 
    constructor(private planet: Planet) {
        super()
        this.trails = []
    }

    update(_: number): void {
        if (this.trails.length == this.maxTrails) {
            this.trails.shift()
        }

        if (this.previousCoordinates !== null) {
            this.trails.push(
                new Line(
                    this.previousCoordinates,
                    this.planet.getCoordinates().clone(),
                    this.planet.color,
                    0.2
                )
            )
        }

        this.previousCoordinates = this.planet.getCoordinates().clone()
    }

    draw(canvas: Context): void {
        this.trails.forEach(d => canvas.draw(d))
    }
}