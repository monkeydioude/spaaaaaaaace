var collided = {};

function makeSerial(id1, id2) {
    return id1 < id2 ? id1+''+id2 : id2+''+id1;
}

function handleCollision(obj, objects) {
    for (let i = 0; i < objects.length; i++) {
        let trial = objects[i];
        let collisionSerial = makeSerial(obj.id, trial.id);

        if (obj.id == trial.id || collided[collisionSerial] == true) {
            continue;
        }
        let isColliding = obj.isColliding(trial);
        
        obj.updateCollisionState();
        if (isColliding) {
            obj.collide(trial);
            collided[collisionSerial] = true;
        }
    }
}

function isInsideObject(x, y, r, p) {
    for (let j = 0; j < p.length; j++) {
        if (p[j].isColliding({x: x, y: y, r: r + (planetsMinDist/2)})) {
            return true;
        }
    }
    return false;
}
