const cDuration = 0
const fps = 60
const milliSecondsPerFrame = 1 / fps
let zoomLevel = 2.5
let zoomMin = 0.1
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

const distPow = 5

const fontSize = 14
let debug = null
const earthSpeed = 29.78 // km/s
const G = 6.674e-11

enum PlayMode {
    PLAY,
    PAUSE
}

const mode = PlayMode.PLAY
// const kmPerPx = 1.3e5
const kmPerPx = 1.8e5

export default {
    gameSpeed: 365 * 24 * 60 * 60 / 4,
    // gameSpeed: 100,
    kmPerPx,
    mPerPx: kmPerPx * 1000,
    kgPerPxDensity: 1200,
    G,
    cDuration,
    fps,
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
    mode,
    zoomMin,
    earthSpeed,
    milliSecondsPerFrame
}