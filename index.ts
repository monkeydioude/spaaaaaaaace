import Canvas from "./src/Canvas/Canvas"
import Planet from "./src/Planet"
import {Scene} from "./src/Scene/index"
import Camera from "./src/Camera/Camera"
import Keyboard from "./src/Controls/Keyboard"
import Config from "./src/Config"
import Velocity from "./src/Physic/Velocity"
import Coordinates from "./src/Physic/Coordinates"
import PlanetTrail from "./src/PlanetTrail"
import getPlanets from "./planets"

const main = (delta: number, boards: Canvas[]) => {
    // cTime += delta
    // if (cTime > Config.dpf) {
    let nBefore = window.performance.now()
    boards.forEach(b => {
        b.update(delta * Config.gameSpeed)
    })
    let nAfter = window.performance.now()
    // cTime -= Config.dpf
    // }
    setTimeout(() => main(Config.milliSecondsPerFrame, boards), (delta * 1000) - (nAfter - nBefore))
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
    
    const planetScene = new Scene("main")

    const keyboardControls = new Keyboard(camera, planetBoard)
    const planetsConfig = getPlanets(planetBoard, camera)
    let planets: Planet[] = []

    document.querySelector("body").addEventListener("keydown", keyboardControls.handleKeyboard.bind(keyboardControls));
    
    for (let i in planetsConfig) {
        const p = planetsConfig[i]
        const planet = new Planet(i,
            new Coordinates(p.x, p.y),
            p.radius,
            p.mass,
            p.color,
            new Velocity(p.velocity[0], p.velocity[1]),
            planets
        )
        planetScene.addEntity(planet)
        planetScene.addEntity(new PlanetTrail(planet))
        planets.push(planet)
    }

    planetBoard.addEntity(planetScene)
    
    main(Config.milliSecondsPerFrame, [bgBoard, planetBoard])
 }