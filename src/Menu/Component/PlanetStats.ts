import { kilometreToPx } from "../../Unit/Distance";
import Context from "../../Canvas/Context";
import Entity from "../../Entity/Entity";
import Vector2D from "../../Physic/Vector2D";
import Planet from "../../Planet";
import Text from "../Container/Text";
import Node from "../../Entity/Node";

let it = 0;

export default class PlanetStats {
    protected localIt: number = 0;
    constructor(readonly planet: Planet) {
        this.localIt = it;
        it++;
    }

    draw(context: Context) {
        const windowW = 240;
        const windowH = 200;
        const floatFix = 6;
        new Text(
            new Vector2D(20, 20 + (windowH * this.localIt)),
            new Vector2D(windowW, windowH),
            this.planet.color,
            20
        ).setLines([
            `> ${this.planet.id}`,
            `  mass: ${this.planet.mass} kg`,
            '  velocity (km/s):',
            `    x: ${this.planet.velocity.x > 0 ? " " : ""}${this.planet.velocity.x.toFixed(floatFix)}`,
            `    y: ${this.planet.velocity.y > 0 ? " " : ""}${this.planet.velocity.y.toFixed(floatFix)}`,
            `    n:  ${this.planet.velocity.getNorm().toFixed(floatFix)}`,
            '  coordinates (px):',
            `    x: ${ kilometreToPx(this.planet.getCoordinates().x).toFixed(2)}`,
            `    y: ${ kilometreToPx(this.planet.getCoordinates().y).toFixed(2)}`,
        ]).draw(context);
    }
}

class resetIt extends Node implements Entity {
    constructor() {
        super(new Vector2D(0, 0,));
    }
    update() {
        it = 0;
    }

    draw() {}
}

export {
    resetIt
};