import Canvas from "./src/Canvas/Canvas"
import Planet from "./src/Planet"
import Scene from "./src/Scene/index"
import Camera from "./src/Camera/Camera"
import Keyboard from "./src/Controls/Keyboard"
import Config from "./src/Config"
import getPlanets from "./planets"

const main = (t1: number, delta: number, board: Canvas) => {
    board.update(delta)
    window.requestAnimationFrame(t => main(t, t - t1, board))
}

document.onreadystatechange = function (e) {
    if (document.readyState != "complete") {
        return
    }
    const camera = new Camera(Config.spaceW / 2, Config.spaceH / 2, Config.zoomLevel)
    const board = new Canvas(document.body.clientWidth, document.body.clientHeight, camera)
    board.appendTo(document.body)
    
    const scene = new Scene()
    const keyboardControls = new Keyboard(camera, board)
    const planets = getPlanets(board, camera)

    document.querySelector("body").addEventListener("keydown", keyboardControls.handleKeyboard.bind(keyboardControls));
    
    for (let i in planets) {
        const p = planets[i]
        scene.entities.push(new Planet(i, p.x, p.y, p.radius, p.color, p.velocity))
    }

    // scene.entities.push(new Planet("1", Config.spaceW / 2 + board.canvas.width / 2 + 120, Config.spaceH / 2 + board.canvas.height / 2 + 120, 120, "#ffffff", [0, 0]))
    // scene.entities.push(new Planet("2", Config.spaceW / 2 + board.canvas.width / 3 + 80, Config.spaceH / 2 + board.canvas.height / 4 + 80, 80, "#784573", [0, 0]))

    board.entities.push(scene)
    
    main(0, 0, board)
 }