var Velocity = function(x, y) {
    this.x = x == undefined ? 0 : x
    this.y = y == undefined ? 0 : y
    this.updateDirection()
}

Velocity.prototype.applyAcceleration = function(accVector) {
    this.x += accVector.x
    this.y += accVector.y
}

Velocity.prototype.updateDirection = function() {
    if (this.x == 0) {
        if (this.y == 0) {
            this.d = 0
            return
        }
        this.d = this.y > 0 ? 0.5 : 1
        return
    }
    if (this.y == 0) {
        this.d = this.x > 0 ? 0.25 : 0.75
    }
    const r = 0.25 * (this.x/(Math.abs(this.y) + Math.abs(this.x)))
    this.d = 0.5 - ((this.y > 0 ? 1 : 3) * (0.25 - r))
}

Velocity.prototype.random = function() {
    this.x = (planetBaseSpeed + (planetBaseSpeed * Math.random())) * (Math.random() > 0.5 ? 1 : -1);
    this.y = (planetBaseSpeed + (planetBaseSpeed * Math.random())) * (Math.random() > 0.5 ? 1 : -1);
    return this;
}
