import Canvas from "./src/Canvas/Canvas"
import Camera from "./src/Camera/Camera"
import Config from "./src/Config"
import { pxToKilometre } from "./src/Unit/Distance"
import Vector2D from "./src/Physic/Vector2D"

export default (canvas: Canvas, camera: Camera): {[key: string]: any} => {
    const sun = {
        pos: new Vector2D(
            pxToKilometre(camera.relativeX(camera.z * (canvas.canvas.width / 2))),
            pxToKilometre(camera.relativeY(camera.z * (canvas.canvas.height / 2))),
        ),
        radius: pxToKilometre(120),
        mass: 1.9891e30,
        color: "orange",
        velocity: new Vector2D(0, 0)
    }

    console.log(sun.pos.x)
    const earth = {
        pos: new Vector2D(
            sun.pos.x - 149.59e6,
            sun.pos.y,
        ),
        radius: pxToKilometre(10),
        mass: 5.972e24,
        color: "skyblue",
        // velocity: new Vector2D(0, Config.earthSpeed).dot(new Vector2D(1/5, 4/5)),
        velocity: new Vector2D(0, Config.earthSpeed),
    }
    return {
            "sun41": sun,
            "earth alors": earth
            // "interloper": {
            //     pos: new Vector2D(
            //         earth.pos.x - 3844000000,
            //         earth.pos.y,
            //     ),
            //     radius: pxToMeter(5),
            //     mass: 7.348e4,
            //     color: "red",
            //     velocity: new Vector2D(0, 0)
            // }
    }
}