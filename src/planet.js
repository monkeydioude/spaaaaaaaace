let COLLISION_STATE = {
    "NOT": 0,
    "ENTER": 1,
    "NAKA": 2,
    "EXIT": 3
};

var Planet = function(id, x, y, mass, r, c, v) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.r = r;
    this.c = c;
    this.mass = mass;
    this.colliding = false;
    this.collisionState = COLLISION_STATE["NOT"];
    this.velocity = v
}

Planet.prototype.update = function(b, gravityForce, delta) {
    const accV2 = Gravity.getAccelerationVector(this, b, gravityForce)
    delta = delta / 1000

    this.velocity.applyAcceleration(accV2)
    this.x += this.velocity.x * delta
    this.y += this.velocity.y * delta
    this.velocity.updateDirection()
}

Planet.prototype.isColliding = function(obj) {
    if (this.id == obj.id) {
        return false;
    }
    
    let rr = getDistanceBetweenObjects(this, obj);
    this.colliding = (rr - obj.r <= this.r);
    return this.colliding;
}

Planet.prototype.updateCollisionState = function() {
    if (this.colliding == false) {
        if (this.collisionState == COLLISION_STATE["EXIT"]) {
            this.collisionState = COLLISION_STATE["NOT"];
            return;
        }
        if (this.collisionState == COLLISION_STATE["ENTER"]) {
            this.collisionState = COLLISION_STATE["EXIT"];
            return;
        }
        if (this.collisionState == COLLISION_STATE["NAKA"]) {
            this.collisionState = COLLISION_STATE["EXIT"];
            return;
        }
        // if (this.collisionState == COLLISION_STATE["NOT"]) {
        return;
    }

    if (this.colliding == true) {
        if (this.collisionState == COLLISION_STATE["EXIT"]) {
            this.collisionState = COLLISION_STATE["ENTER"];
            return;
        }
        if (this.collisionState == COLLISION_STATE["NOT"]) {
            this.collisionState = COLLISION_STATE["ENTER"];
            return;
        }
        if (this.collisionState == COLLISION_STATE["ENTER"]) {
            this.collisionState = COLLISION_STATE["NAKA"];
            return;
        }
        // if (this.collisionState == COLLISION_STATE["NAKA"]) {
        return;
    }
}

Planet.prototype.collide = function(incObj) {
    let collSource = getRotationDirection(this, incObj),
        cObjKE = (this.mass/2) * (this.motion.v * this.motion.v),
        incObjKE = (incObj.mass/2) * (incObj.motion.v * incObj.motion.v);
    
    let computedCObjKEoverIncObj = cObjKE * (1 - Math.abs(this.motion.d - collSource));

    let cd = this.motion.d;
    this.motion.d = (this.motion.d + Math.abs(this.motion.d - incObj.motion.d))%1;
    incObj.motion.d = (incObj.motion.d + Math.abs(cd - incObj.motion.d))%1;
}
