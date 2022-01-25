import Canvas from "./src/Canvas/Canvas"
import Camera from "./src/Camera/Camera"
import Config from "./src/Config"
import { pxToKilometre } from "./src/Unit/Distance"
import Vector2D from "./src/Physic/Vector2D"

export default (canvas: Canvas, camera: Camera): {[key: string]: any} => {
    const sun = {
        pos: new Vector2D(
            pxToKilometre(camera.relativeX(canvas.canvas.width / 2)),
            pxToKilometre(camera.relativeY(canvas.canvas.height / 2)),
        ),
        radius: pxToKilometre(120),
        mass: 1.9891e30,
        color: "orange",
        velocity: new Vector2D(0, 0)
    }

    const earth = {
        pos: new Vector2D(
            sun.pos.x - 149.59e6,
            sun.pos.y,
        ),
        radius: pxToKilometre(10),
        mass: 5.972e24,
        color: "skyblue",
        velocity: new Vector2D(0, Config.earthSpeed).dot(new Vector2D(1/2, 1/2)),
        // velocity: new Vector2D(0, 0),
    }
    return {
            "sun41": sun,
            "earth alors": earth,
            "interloper": {
                pos: new Vector2D(
                    sun.pos.x + 184400000,
                    sun.pos.y - 50000000,
                ),
                radius: pxToKilometre(5),
                mass: 7.348e4,
                color: "red",
                velocity: new Vector2D(-16.5, -5)
            }
    }
}