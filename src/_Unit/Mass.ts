import Unit from "./Unit"

interface Mass {
    toKG(): number
    valueOf(): number
}

export default Mass

class KiloGram implements Mass, Unit {
    constructor(public mass: number){}

    toKG(): number {
        return this.mass
    }

    valueOf(): number {
        return this.mass
    }

    set(m: number): void {
        this.mass = m
    }
}

export {KiloGram}