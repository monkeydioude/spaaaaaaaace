export default class Vector2D {
    constructor (public x: number, public y: number) {}

    sub(vec: Vector2D | number): Vector2D {
        if (typeof vec === "number") {
            vec = new Vector2D(vec, vec)
        }
        return new Vector2D(this.x-vec.x, this.y-vec.y)
    }

    // dot product
    dot(vec: Vector2D | number): Vector2D {
        if (typeof vec === "number") {
            vec = new Vector2D(vec, vec)
        }
        return new Vector2D(this.x * vec.x, this.y * vec.y)
    }

    sum(vec: Vector2D | number): Vector2D {
        if (typeof vec === "number") {
            vec = new Vector2D(vec, vec)
        }
        return new Vector2D(this.x + vec.x, this.y + vec.y)
    }

    divide(vec: Vector2D | number): Vector2D {
        if (typeof vec === "number") {
            vec = new Vector2D(vec, vec)
        }
        return new Vector2D(this.x / vec.x, this.y / vec.y)
    }

    normalize (number: number): Vector2D {
        return this.dot(new Vector2D(number, number))
    }

    clone(): Vector2D {
        return new Vector2D(this.x, this.y)
    }

    insideOnRadius(trial: Vector2D, radius: number): boolean {
        return Math.pow(trial.x - this.x, 2) + Math.pow(trial.y - this.y, 2) <= Math.pow(radius, 2);
    }
}