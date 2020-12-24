import Canvas from "./src/Canvas/Canvas"
import Camera from "./src/Camera/Camera"
import Config from "./src/Config"
import {Px, Meter, meterToPx} from "./src/Unit/Distance"
import { KiloGram } from "./src/Unit/Mass"

export default (canvas: Canvas, camera: Camera): {[key: string]: any} => {
    const sun = {
        x: camera.relativeX(camera.z * (canvas.canvas.width / 2)),
        y: camera.relativeY(camera.z * (canvas.canvas.height / 2)),
        radius: <Px>120,
        mass: new KiloGram(1.9891e30),
        color: "orange",
        velocity: [0, 0]
    }
    const earth = {
        x: <Px>sun.x - meterToPx(new Meter(149.96e9)),
        y: <Px>sun.y,
        radius: <Px>30,
        mass: new KiloGram(5.972e24),
        color: "skyblue",
        velocity: [meterToPx(Config.earthSpeed.getDistance()) * 1/3, meterToPx(Config.earthSpeed.getDistance()) * 2/3]
    }
    return {
            "sun41": sun,
            "earth alors": earth,
            "interloper": {
                x: <Px>sun.x + meterToPx(new Meter(100.96e9)),
                y: <Px>sun.y + <Px>20,
                radius: <Px>24,
                mass: new KiloGram(3.972e24),
                color: "red",
                velocity: [meterToPx(Config.earthSpeed.getDistance()) * 1/3, meterToPx(Config.earthSpeed.getDistance()) * 2/3]
            }
    }
}