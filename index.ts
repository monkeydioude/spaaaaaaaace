import Canvas from "./src/Canvas/Canvas"
import Planet from "./src/Planet"
import {Scene, NoClear} from "./src/Scene/index"
import Camera from "./src/Camera/Camera"
import Keyboard from "./src/Controls/Keyboard"
import Config from "./src/Config"
import Velocity from "./src/Physic/Velocity"
import Coordinates from "./src/Physic/Coordinates"
import PlanetTrail from "./src/PlanetTrail"
import getPlanets from "./planets"
import Dot from "./src/Model/Dot"

let cTime = 0

const main = (t1: number, delta: number, boards: Canvas[]) => {
    // cTime += delta
    // if (cTime > Config.dpf) {
    boards.forEach(b => {
        b.update((delta / 1000) * Config.gameSpeed)
    })
    // cTime -= Config.dpf
    // }

    window.requestAnimationFrame(t => main(t, t - t1, boards))
}

document.onreadystatechange = function () {
    if (document.readyState != "complete") {
        return
    }
    const camera = new Camera(Config.spaceW / 2, Config.spaceH / 2, Config.zoomLevel)
    const bgBoard = new Canvas(document.body.clientWidth, document.body.clientHeight, camera, "background")
    const planetBoard = new Canvas(document.body.clientWidth, document.body.clientHeight, camera, "main")

    bgBoard.appendTo(document.body)
    planetBoard.appendTo(document.body)
    bgBoard.canvas.style.backgroundColor = "#000000"
    
    const bgScene = new NoClear("background")
    const planetScene = new Scene("main")

    const keyboardControls = new Keyboard(camera, planetBoard)
    const planetsConfig = getPlanets(planetBoard, camera)
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

    bgScene.entities = [new PlanetTrail(planets)]
    bgBoard.entities.push(bgScene)

    planetScene.entities = planets
    planetBoard.entities.push(planetScene)
    
    main(0, 0, [bgBoard, planetBoard])
 }