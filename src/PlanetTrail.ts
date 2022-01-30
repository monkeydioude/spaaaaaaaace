import Context from "./Canvas/Context"
import Line from "./Model/Line"
import Planet from "./Planet"
import Node from "./Entity/Node"
import Vector2D from "./Physic/Vector2D"

export default class PlanetTrail extends Node {
    private trails: Line[]
    private maxTrails = 15
    private previousCoordinates: Vector2D = null
 
    constructor(private planet: Planet) {
        super(new Vector2D(0, 0));
        this.trails = []
        this.previousCoordinates = this.planet.getCoordinates().clone()
    }

    update(): void {
        if (this.trails.length == this.maxTrails) {
            this.trails.shift()
        }

        if (this.previousCoordinates === null) {
            return
        }

        this.trails.push(
            new Line(
                this.previousCoordinates,
                this.planet.getCoordinates().clone(),
                this.planet.color,
                0.2
            )
        )
        this.previousCoordinates = this.planet.getCoordinates().clone()
    }

    draw(canvas: Context): void {
        this.trails.forEach(d => canvas.draw(d))
    }
}