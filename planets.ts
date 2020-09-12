import Config from "./src/Config"
import Canvas from "./src/Canvas/Canvas"
import Camera from "./src/Camera/Camera"

export default (canvas: Canvas, camera: Camera): {[key: string]: any} => {
    return {
            "1": {
                x: camera.X(canvas.canvas.width / 2 + 120),
                y: camera.Y(canvas.canvas.width / 2 + 120),
                radius: 120,
                color: "#ffffff",
                velocity: [0, 0]
            },
            "2": {
                x: camera.X(canvas.canvas.width / 3 + 80),
                y: camera.Y(canvas.canvas.height / 4 + 80),
                radius: 80,
                color: "#784573",
                velocity: [0, 0]  
            }
    }
}