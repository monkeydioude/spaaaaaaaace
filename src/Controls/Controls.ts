import Camera from "../Camera/Camera";

const idFuncs: { [key: string]: (camera: Camera) => void } = {
    "#btn-up": (camera: Camera) => camera.up(),
    "#btn-down": (camera: Camera) => camera.down(),
    "#btn-left": (camera: Camera) => camera.left(),
    "#btn-right": (camera: Camera) => camera.right(),
    "#zoom-in": (camera: Camera) => camera.zoomIn(),
    "#zoom-out": (camera: Camera) => camera.zoomOut(),
}

const Controls = (camera: Camera) => {
    for (const id in idFuncs) {
        document.querySelector(id).addEventListener("click", () => idFuncs[id](camera))
    }
}

export default Controls;