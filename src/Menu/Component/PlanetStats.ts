import Context from "../../Canvas/Context";
import Entity from "../../Entity/Entity";
import Vector2D from "../../Physic/Vector2D";
import Planet from "../../Planet";
import Text from "../Container/Text";

let it = 0;

export default class PlanetStats {
    protected localIt: number = 0;
    constructor(readonly planet: Planet) {
        this.localIt = it;
        it++;
    }

    draw(context: Context) {
        const windowH = 100;
        const floatFix = 6;
        new Text(
            new Vector2D(20, 20 + (windowH * this.localIt)),
            new Vector2D(200, windowH),
            this.planet.color
        ).setLines([
            `> ${this.planet.id}`,
            `  mass: ${this.planet.mass}`,
            '  velocity:',
            `  - x: ${this.planet.velocity.x > 0 ? " " : ""}${this.planet.velocity.x.toFixed(floatFix)} km/s`,
            `  - y: ${this.planet.velocity.y > 0 ? " " : ""}${this.planet.velocity.y.toFixed(floatFix)} km/s`,
        ]).draw(context);
    }
}

class resetIt implements Entity {
    update() {
        it = 0;
    }

    draw() {}
    getEntities(): Entity[] {
        return [];
    }
}

export {
    resetIt
};