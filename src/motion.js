var Motion = function(v, d) {
    this.v = v;
    this.d = d;
}

Motion.prototype.computeCoords = function(x, y, delta) {
    let v = {x: 0, y: 0};

    if (this.d <= 0.5) {
        v.x = (1 - (Math.abs(this.d - 0.25) / 0.25)) * this.v;
    } else {
        v.x = -((1 - (Math.abs(this.d - 0.75) / 0.25)) * this.v);
    }

    if (this.d >= 0.25 && this.d < 0.75) {
        v.y = (1 - (Math.abs(this.d - 0.50) / 0.25)) * this.v;
    } else {
        if (this.d >= 0.75) {
            v.y = -((this.d - 0.75)/ 0.25) * this.v;
        } else {
            v.y = -(1 - (this.d - 0.25 / 0.25)) * this.v;
        }
    }
    return v;
}

Motion.prototype.random = function() {
    this.d = Math.random();
    this.v = planetBaseSpeed + (planetBaseSpeed * Math.random());
    return this;
}
