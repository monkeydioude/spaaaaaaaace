type KiloGram = number

interface Mass {
    toKG(): KiloGram
}

class KG implements Mass{
    constructor(public mass: KiloGram){}

    toKG(): KiloGram {
        return this.mass
    }
}

export {Mass, KG}