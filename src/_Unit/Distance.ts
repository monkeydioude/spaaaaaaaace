import Config from "../Config"
import Unit from "./Unit"
type Px = number

interface Distance {
    toMeter(): number
    valueOf(): number
    set(v: number): void
}

export default Distance

class Meter implements Distance, Unit {
    constructor(public dist?: number) {
        this.dist = this.dist === undefined ? 1 : this.dist
    }

    toMeter(): number {
        return this.dist
    }

    valueOf(): number {
        return this.dist
    }

    set(v: number): void {
        this.dist = v
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