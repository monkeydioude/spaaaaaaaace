let cDuration = 0
let fps = 60
let dpf = 1 / fps
let canvas = null
let ctx = null
// let zoomLevel = 0.20;
let zoomLevel = 0.4
let zoomActionPow = 0.10
let decalByMove = 25

let maxPlanets = 4
let planetsRadiusDef = {min: 3, max: 70}
let planetsMinDist = 10
let planetBaseSpeed = 40

let spaceW = 10000
let spaceH = 10000
let decalX = spaceW / 2
let decalY = spaceH / 2

let G = Math.pow(10, -11) * 6.674
let gravityPullByDelta = 7
let distPow = 5
let gravity = true

let fontSize = 14
let debug = null

let PLAY = 1
let PAUSE = 2

let mode = PLAY