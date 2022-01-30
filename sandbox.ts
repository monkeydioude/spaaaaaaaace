import Planet from "./src/Planet";
import Config from "./src/Config";
import { pxToKilometre } from "./src/Unit/Distance";
import Vector2D from "./src/Physic/Vector2D";
import { getForceNorm } from "./src/Physic/Gravity";

export default () => {
    const earth = new Planet(
        "earth alors",
        new Vector2D(0, 0),
        pxToKilometre(10),
        5.972e24,
        "skyblue",
        // velocity: [0, 0],
        new Vector2D(0, 0),
        null
        // velocity: new Vector2D(0, 0),
    );

    const moonmoon = new Planet(
        "moonmoon",
        new Vector2D(384400, 0),
        pxToKilometre(10),
        7.34767309e22,
        "skyblue",
        // velocity: [0, 0],
        new Vector2D(0, 1.022),
        null
        // velocity: new Vector2D(0, 0),
    );

    const moonForce = getForceNorm(earth, moonmoon);
    
    console.log(moonForce, moonForce / moonmoon.mass);
}