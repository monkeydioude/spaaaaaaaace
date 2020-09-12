import Canvas from "./src/Canvas/Canvas"
import Planet from "./src/Planet"
import Scene from "./src/Scene/index"
import Camera from "./src/Camera/Camera"
import Keyboard from "./src/Controls/Keyboard"
import Config from "./src/Config"
import Velocity from "./src/Physic/Velocity"
import Coordinates from "./src/Physic/Coordinates"

import getPlanets from "./planets"

let cTime = 0

const main = (t1: number, delta: number, board: Canvas) => {
    // cTime += delta
    // if (cTime > Config.dpf) {
        board.update((delta / 1000) * Config.gameSpeed)
        // cTime -= Config.dpf
    // }

    window.requestAnimationFrame(t => main(t, t - t1, board))
}

document.onreadystatechange = function () {
    if (document.readyState != "complete") {
        return
    }
    const camera = new Camera(Config.spaceW / 2, Config.spaceH / 2, Config.zoomLevel)
    const board = new Canvas(document.body.clientWidth, document.body.clientHeight, camera)
    board.appendTo(document.body)
    
    const scene = new Scene()
    const keyboardControls = new Keyboard(camera, board)
    const planetsConfig = getPlanets(board, camera)
    let planets: Planet[] = []


    document.querySelector("body").addEventListener("keydown", keyboardControls.handleKeyboard.bind(keyboardControls));
    
    for (let i in planetsConfig) {
        const p = planetsConfig[i]
        planets.push(new Planet(i,
            new Coordinates(p.x, p.y),
            p.radius,
            p.mass,
            p.color,
            new Velocity(p.velocity[0], p.velocity[1]),
            planets
            ))
    }

    scene.entities = planets
    board.entities.push(scene)
    
    main(0, 0, board)
 }