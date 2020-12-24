import { Distance, Meter } from "../Unit/Distance"
import Time, { Second } from './Time'

type MetersPerSecond = number

interface Speed {
    toMPSec(): MetersPerSecond
    valueOf(): number
    getDistance(time?: Time): Distance 
    getTime(distance?: Distance): Time
}

export default Speed

class MPSec implements Speed {
    constructor(public speed: MetersPerSecond) {}

    toKMPSec(): number {
        return this.toMPSec() / 1000
    }

    toKMPHour(): number {
        return this.toKMPSec() * 3600
    }

    toMPSec(): MetersPerSecond {
        return this.speed
    }

    valueOf(): number {
        return this.speed
    }

    getDistance(time?: Time): Distance {
        if (time === undefined) {
            time = new Second(1)
        }
        return new Meter(this.valueOf() / time.toS())
    }

    getTime(distance?: Distance): Time {
        if (distance == undefined) {
            distance = new Meter(1)
        }
        return new Second(distance.toMeter() / this.speed)
    }
}

class KMPSec extends MPSec {
    constructor(public speed: number) {
        super(speed)
        this.speed = this.toMPSec()
    }

    toMPSec(): MetersPerSecond {
        return this.speed * 1000
    }
}

export {KMPSec, MPSec}