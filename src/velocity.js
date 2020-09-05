var Velocity = function(x, y) {
    this.x = x == undefined ? 0 : x
    this.y = y == undefined ? 0 : y
}

Velocity.prototype.applyAcceleration = function(accVector) {
    this.x += accVector.x
    this.y += accVector.y
}

Velocity.prototype.random = function() {
    this.x = planetBaseSpeed + (planetBaseSpeed * Math.random());
    this.y = planetBaseSpeed + (planetBaseSpeed * Math.random());
    return this;
}
