import Canvas from "./src/Canvas/Canvas";
import Planet from "./src/Planet";
import {Scene} from "./src/Scene";
import Camera from "./src/Camera/Camera";
import { Keyboard, Mouse} from "./src/Controls";
import Config from "./src/Config"
import PlanetTrail from "./src/PlanetTrail";
import getPlanets from "./planets";
import Vector2D from "./src/Physic/Vector2D";
import { resetIt } from "./src/Menu/Component/PlanetStats";
import { pxToKilometre, kilometreToPx } from "./src/Unit/Distance";

const main = (delta: number, boards: Canvas[]) => {
    // cTime += delta
    // if (cTime > Config.dpf) {
    let nBefore = window.performance.now();
    boards.forEach(b => {
        b.update(delta * Config.gameSpeed);
    })
    let nAfter = window.performance.now();
    // cTime -= Config.dpf
    // }
    setTimeout(() => main(Config.milliSecondsPerFrame, boards), (delta * 1000) - (nAfter - nBefore));
}

document.onreadystatechange = function () {
    if (document.readyState != "complete") {
        return;
    }
    const camera = new Camera(Config.spaceW / 2, Config.spaceH / 2, Config.zoomLevel)
    const bgBoard = new Canvas(document.body.clientWidth, document.body.clientHeight, camera, "background");
    const planetBoard = new Canvas(document.body.clientWidth, document.body.clientHeight, camera, "main");

    bgBoard.appendTo(document.body);
    planetBoard.appendTo(document.body);
    bgBoard.canvas.style.backgroundColor = "#000000";
    
    const planetScene = new Scene("main");

    const keyboardControls = new Keyboard(camera, planetBoard);
    const mouseControl = new Mouse();
    const planetsConfig = getPlanets(planetBoard, camera);
    const domBody = document.querySelector("body");
    let planets: Planet[] = [];

    mouseControl.onClick((x: number, y: number): void => {
        planets.forEach((p: Planet) => {
            if (
                p.coords.insideOnRadius(
                    new Vector2D(
                        pxToKilometre(camera.relativeX(x)),
                        pxToKilometre(camera.relativeY(y))
                    ),
                p.radius + pxToKilometre(80))
            ) {
                console.log(p.id);
            }
        })
    });

    domBody.addEventListener("keydown", keyboardControls.handleKeyboard.bind(keyboardControls));
    domBody.addEventListener("click", mouseControl.handleMouse.bind(mouseControl));
    
    for (let i in planetsConfig) {
        const p = planetsConfig[i]
        const planet = new Planet(i,
            new Vector2D(p.pos.x, p.pos.y),
            p.radius,
            p.mass,
            p.color,
            p.velocity,
            planets
        )
        planetScene.addEntity(planet);
        planetScene.addEntity(new PlanetTrail(planet));
        planets.push(planet);
    }

    planetBoard.addEntity(planetScene);
    planetScene.addEntity(new resetIt());
    
    main(Config.milliSecondsPerFrame, [bgBoard, planetBoard]);
 }