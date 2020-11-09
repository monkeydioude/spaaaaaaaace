type MetersPerSecond = number

interface Speed {
    toMPSec(): MetersPerSecond
    valueOf(): number
}

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

    valueOf(): number{
        return this.speed
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

export {Speed, KMPSec, MPSec}