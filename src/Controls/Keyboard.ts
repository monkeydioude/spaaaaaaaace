import Camera from "../Camera/Camera"
import Config from "../Config"
import Canvas from "../Canvas/Canvas"
import { togglePause } from "../../index"

export default class Keyboard {
    public actionByKeycode: {[key: number]: Function}

    constructor(readonly camera: Camera, readonly canvas: Canvas) {
        this.actionByKeycode = {
            // 68: () => {debug.Toggle();},
            // 83: () => {mode = mode == PAUSE ? PLAY : PAUSE;},
            80: () => {
                togglePause();
            },
            82: () => {
                this.camera.x = 0
                this.camera.y = 0
                this.camera.z = 1
            },
            90: () => this.camera.zoomIn(),
            88: () => this.camera.zoomOut(),
            37: () => this.camera.left(),
            38: () => this.camera.up(),
            39: () => this.camera.right(),
            40: () => this.camera.down()
        }
    }

    handleKeyboard(event: KeyboardEvent) {
        if (this.actionByKeycode == undefined || 
            !this.actionByKeycode[event.keyCode]) {
            return;
        }
        this.actionByKeycode[event.keyCode]();
    }
}