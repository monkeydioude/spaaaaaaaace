import Canvas from "./src/Canvas/Canvas"
import Camera from "./src/Camera/Camera"
import Config from "./src/Config"

export default (canvas: Canvas, camera: Camera): {[key: string]: any} => {
    const sun = {
        x: camera.relativeX(camera.z * (canvas.canvas.width / 2)),
        y: camera.relativeY(camera.z * (canvas.canvas.height / 2)),
        radius: 120,
        mass: 1.9891e30,
        color: "orange",
        velocity: [0, 0]
    }
    const earth = {
        x: sun.x - (149.96e9 / Config.mPerPx),
        y: sun.y,
        radius: 30,
        mass: 5.972e24,
        color: "skyblue",
        velocity: [(Config.earthSpeed / Config.mPerPx) * 1/3, (Config.earthSpeed / Config.mPerPx) * 2/3]
    }
    return {
            "sun41": sun,
            "earth alors": earth,
            "interloper": {
                x: sun.x + (100.96e9 / Config.mPerPx),
                y: sun.y + 20,
                radius: 24,
                mass: 3.972e24,
                color: "red",
                velocity: [(Config.earthSpeed / Config.mPerPx) * 1/3, (Config.earthSpeed / Config.mPerPx) * 2/3]
            }
    }
}