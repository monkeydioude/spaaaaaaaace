import Config from "../Config"

type Px = number

interface Distance {
    toMeter(): number
    valueOf(): number
}

export default Distance

class Meter implements Distance {
    constructor(public dist: number) {}

    toMeter(): number {
        return this.dist
    }

    valueOf(): number {
        return this.dist
    }
}

class KiloMeter extends Meter {
    constructor(public dist: number) {
        super(dist)
        this.dist = this.toMeter()
    }

    toMeter(): number {
        return this.dist * 1000
    }
}

export {Px, Distance, Meter, KiloMeter}

const meterToPx = (distance: Distance): Px => {
    return distance.toMeter() / Config.mPerPx
}

const pxToMeter = (px: Px): Meter => {
    return new Meter(px * Config.mPerPx)
}

export {meterToPx, pxToMeter}