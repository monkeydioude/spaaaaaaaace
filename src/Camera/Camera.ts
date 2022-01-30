import Config from "../Config"

export default class Camera {
    public x: number = 0
    public y: number = 0
    public z: number = 1

    constructor(x: number, y: number, z: number) {
        this.x = x
        this.y = y
        this.z = z
    }

    X(x: number): number {
        return this.zTransform(x - this.x)
    }

    Y(y: number): number {
        return this.zTransform(y - this.y)
    }

    zTransform(v: number): number {
        return v * (1 / this.z)
    }

    relativeX(x: number): number {
        return this.x + (this.z * x)
    }

    relativeY(y: number): number {
        return this.y + (this.z * y)
    }

    up(): boolean {
        if (this.y - Config.decalByMove <= 0) {
            return false;
        }
        this.y -= Config.decalByMove;
        return true;
    }

    left(): boolean {
        if (this.x - Config.decalByMove <= 0) {
            return false;
        }
        this.x -= Config.decalByMove;
        return true;
    }

    right(): boolean {
        if (this.x >= Config.spaceW) {
            return false;
        }
        this.x += Config.decalByMove;
        return true;
    }

    down(): boolean {
        if (this.y >= Config.spaceH) {
            return false;
        }
        this.y += Config.decalByMove;
        return true;
    }

    zoomIn(): boolean {
        if (this.z <= Config.zoomMin) {
            return false;
        }
        this.z -= Config.zoomActionPow;
        return true;
    }

    zoomOut(): boolean {
        this.z += Config.zoomActionPow;
        return true;
    }
}