const cDuration = 0
const fps = 60
const dpf = 1 / fps
let canvas = null
let ctx = null
let zoomLevel = 0.4
const zoomActionPow = 0.10
const decalByMove = 25

let maxPlanets = 4
let planetsRadiusDef = {min: 3, max: 70}
const planetsMinDist = 10
const planetBaseSpeed = 40

const spaceW = 10000
const spaceH = 10000
const decalX = spaceW / 2
const decalY = spaceH / 2

const G = Math.pow(10, -11) * 6.674
const gravityPullByDelta = 7
const distPow = 5

const fontSize = 14
let debug = null

enum PlayMode {
    PLAY,
    PAUSE
}

const mode = PlayMode.PLAY

export default {
    kmPerPx: 130000,
    kgPerPxDensity: 1200,
    G,
    gravityPullByDelta,
    cDuration,
    fps,
    dpf,
    canvas,
    ctx,
    zoomLevel,
    zoomActionPow,
    decalByMove,
    maxPlanets,
    planetsRadiusDef,
    planetsMinDist,
    planetBaseSpeed,
    spaceW,
    spaceH,
    decalX,
    decalY,
    distPow,
    fontSize,
    debug,
    PlayMode,
    mode
}