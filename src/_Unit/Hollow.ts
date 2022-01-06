import Unit from "./Unit"

export default class Hollow implements Unit {
    constructor(public v?: number) {
        this.v = this.v === undefined ? 1 : this.v
    }

    valueOf(): number {
        return this.v
    }

    set(v: number): void {
        this.v = v
    }
}