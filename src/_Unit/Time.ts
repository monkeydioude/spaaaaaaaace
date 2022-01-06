enum Unit {
    MilliSecond = 1,
    Second = MilliSecond * 1000
}

interface Time {
    toMS(): number
    toS(): number
    valueOf(): number
}

export default Time

class MilliSecond implements Time {
    constructor(public time: number) {}

    toS(): number {
        return this.time / Unit.Second
    }

    toMS(): number {
        return this.time
    }

    valueOf(): number {
        return this.time
    }
}

class Second implements Time {
    constructor(public time: number) {}

    toS(): number {
        return this.time
    }

    toMS(): number {
        return this.time * Unit.MilliSecond
    }

    valueOf(): number {
        return this.time
    }
}

export {MilliSecond, Second}