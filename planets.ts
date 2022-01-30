import Canvas from "./src/Canvas/Canvas"
import Camera from "./src/Camera/Camera"
import Config from "./src/Config"
import { pxToKilometre } from "./src/Unit/Distance"


export type PlanetConfig = {
    id: string,
    pos: number[],
    radius: number,
    mass: number,
    color: string,
    velocity: number[],
}
export default (canvas: Canvas, camera: Camera): PlanetConfig[] => {
    const sun = {
        id: "sun41",
        pos: [
            pxToKilometre(camera.relativeX(canvas.canvas.width / 2)),
            pxToKilometre(camera.relativeY(canvas.canvas.height / 2)),
        ],
        radius: pxToKilometre(130),
        mass: 1.9891e30,
        color: "orange",
        velocity: [0, 0]
    };

    const earth = {
        id: "earth alors",
        pos: [
            sun.pos[0] - 149.59e6,
            sun.pos[1],
        ],
        radius: pxToKilometre(15),
        mass: 5.972e24,
        color: "skyblue",
        // velocity: [0, 0],
        velocity: [0, Config.earthSpeed * 0.5],

        // velocity: new Vector2D(0, 0),
    };

    const interloper = {
        id: "interloper",
        pos: [
            sun.pos[0] + 184400000,
            sun.pos[1] - 50000000,
        ],
        radius: pxToKilometre(8),
        mass: 7.348e4,
        color: "red",
        velocity: [-15.5, -5]
    };

    const moonmoon = {
        id: "moonmoon",
        pos: [
            earth.pos[0] + 5000000,
            earth.pos[1] - 4000000,
        ],
        radius: pxToKilometre(5),
        mass: 7.348e4,
        color: "gray",
        velocity: [0, 0.15],
    };

    return [
            sun,
            earth,
            interloper,
            // moonmoon,
    ]
}