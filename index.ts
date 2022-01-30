import Canvas from "./src/Canvas/Canvas";
import Planet from "./src/Planet";
import {Scene} from "./src/Scene";
import Camera from "./src/Camera/Camera";
import { Keyboard, Mouse} from "./src/Controls";
import Config from "./src/Config"
import getPlanets, { PlanetConfig } from "./planets";
import Vector2D from "./src/Physic/Vector2D";
import { resetIt } from "./src/Menu/Component/PlanetStats";
import { pxToKilometre } from "./src/Unit/Distance";
import sandbox from "./sandbox";
import Controls from "./src/Controls/Controls";

let pause = false;

export const togglePause = () => {
    pause = !pause;
};

const main = (delta: number, boards: Canvas[]) => {
    // cTime += delta
    let nBefore = window.performance.now();
    if (!pause){
        boards.forEach(b => {
            b.update(delta * Config.gameSpeed);
        })    
    }
    let nAfter = window.performance.now();
    setTimeout(() => main(Config.milliSecondsPerFrame, boards), (delta * 1000) - (nAfter - nBefore));
}

declare global {
    interface Window { MyNamespace: any; }
}

(window as any).start = () => {
    const camera = new Camera(Config.spaceW / 2, Config.spaceH / 2, Config.zoomLevel);
    const bgBoard = new Canvas(document.body.clientWidth, document.body.clientHeight, camera, "background");
    const planetBoard = new Canvas(document.body.clientWidth, document.body.clientHeight, camera, "main");
    const sceneNode: HTMLElement = document.body.querySelector("#scene");

    bgBoard.appendTo(sceneNode);
    planetBoard.appendTo(sceneNode);
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
                p.getCoordinates().insideOnRadius(
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
    Controls(camera);

    planetsConfig.forEach((p: PlanetConfig) => {
        const planet = new Planet(
            p.id,
            new Vector2D(p.pos[0], p.pos[1]),
            p.radius,
            p.mass,
            p.color,
            new Vector2D(p.velocity[0], p.velocity[1]),
            planets
        );
        planetScene.addEntity(planet);
        // planetScene.addEntity(new PlanetTrail(planet));
        planets.push(planet);
    })

    // console.log(getGravityAcc(planets[0], planets[1]));

    planetScene.addEntity(new resetIt());
    planetBoard.addEntity(planetScene);
    
    main(Config.milliSecondsPerFrame, [bgBoard, planetBoard]);
 };

(window as any).sandbox = sandbox;