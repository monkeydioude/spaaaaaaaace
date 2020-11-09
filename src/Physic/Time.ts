enum Unit {
    MilliSecond = 1,
    Second = MilliSecond * 1000
}

type Millisecond = number
type Second = number

interface Time {
    toMS(): Millisecond
    toS(): Second
    valueOf(): number
}

class MS implements Time {
    constructor(public time: Millisecond) {}

    toS(): Second {
        return this.time / Unit.Second
    }

    toMS(): Millisecond {
        return this.time
    }

    valueOf(): number {
        return this.time
    }
}

class S implements Time {
    constructor(public time: Second) {}

    toS(): Second {
        return this.time
    }

    toMS(): Millisecond {
        return this.time * Unit.MilliSecond
    }

    valueOf(): number {
        return this.time
    }
}
