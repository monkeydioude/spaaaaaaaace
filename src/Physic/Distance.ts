import Config from "../Config"

type Meter = number
type Px = number

interface Distance {
    toMeter(): Meter
}

class M implements Distance {
    constructor(public dist: Meter) {}

    toMeter(): Meter {
        return this.dist
    }
}

class KM extends M {
    constructor(public dist: number) {
        super(dist)
        this.dist = this.toMeter()
    }

    toMeter(): Meter {
        return this.dist * 1000
    }
}

export {Distance, M, KM}

const mToPx = (m: Meter): Px => {
    return m / Config.mPerPx
}

const pxToM = (px: number): Meter => {
    return px * Config.mPerPx
}

export {mToPx, pxToM}