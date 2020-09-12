import Canvas from "./src/Canvas"
import Planet from "./src/Planet"
import Scene from "./src/Scene/index"
import Camera from "./src/Camera"

const main = (t1: number, delta: number, board: Canvas) => {
    board.update(delta)
    window.requestAnimationFrame(t => main(t, t - t1, board))
}

document.onreadystatechange = function (e) {
    if (document.readyState != "complete") {
        return
    }
    const board = new Canvas(document.body.clientWidth, document.body.clientHeight, new Camera())
    const scene = new Scene()
    scene.entities.push(new Planet("1", 400, 400, 120, "#ffffff", [0, 0]))
    scene.entities.push(new Planet("2", 300, 150, 80, "#784573", [0, 0]))
    board.entities.push(scene)
    board.append(document.body)
    main(0, 0, board)
 }