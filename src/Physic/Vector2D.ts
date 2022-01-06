export default class Vector2D {
    public x: number
    public y: number
    constructor (x: number, y: number) {
        this.x = x
        this.y = y
    }

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

    // normalize allows to normalize the vector to
    // an other number. The held value should transform
    // the x, y values to the number 1 of the passed number
    normalize (number: number | number): Vector2D {
        return this.dot(new Vector2D(number, number))
    }

    clone(): Vector2D {
        return new Vector2D(this.x, this.y)
    }
}