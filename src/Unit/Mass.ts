interface Mass {
    toKG(): number
    valueOf(): number
}

export default Mass

class KiloGram implements Mass{
    constructor(public mass: number){}

    toKG(): number {
        return this.mass
    }

    valueOf(): number {
        return this.mass
    }
}

export {KiloGram}