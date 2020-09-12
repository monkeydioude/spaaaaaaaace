import Camera from "../Camera/Camera"
import Config from "../Config"
import Canvas from "../Canvas/Canvas"

export default class Keyboard {
    public actionByKeycode: {[key: number]: Function}

    constructor(readonly camera: Camera, readonly canvas: Canvas) {
        this.actionByKeycode = {
            // 68: () => {debug.Toggle();},
            // 83: () => {mode = mode == PAUSE ? PLAY : PAUSE;},
            82: () => {
                this.camera.x = 0
                this.camera.y = 0
                this.camera.z = 1
            },
            90: () => {
                if (this.camera.z <= Config.zoomMin) {
                    return
                }
                this.camera.z -= Config.zoomActionPow
            },
            88: () => {
                this.camera.z += Config.zoomActionPow
            },
            37: () => {
                if (this.camera.x - Config.decalByMove <= 0) {
                    return;
                }
                this.camera.x -= Config.decalByMove
            },
            38: () => {
                if (this.camera.y - Config.decalByMove <= 0) {
                    return;
                }
                this.camera.y -= Config.decalByMove
            },
            39: () => {
                if (this.camera.x >= Config.spaceW) {
                    return;
                }
                this.camera.x += Config.decalByMove
            },
            40: () => {
                if (this.camera.y >= Config.spaceH) {
                    return;
                }
                this.camera.y += Config.decalByMove
            }
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