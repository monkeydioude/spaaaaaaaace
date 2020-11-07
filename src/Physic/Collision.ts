// import Planet from "../Planet"

// var collided = {};

// function makeSerial(id1: any, id2: any) {
//     return id1 < id2 ? id1+''+id2 : id2+''+id1;
// }

// function handleCollision(obj: any, objects: any) {
//     for (let i = 0; i < objects.length; i++) {
//         let trial = objects[i];
//         let collisionSerial = makeSerial(obj.id, trial.id);

//         if (obj.id == trial.id || collided[collisionSerial] == true) {
//             continue;
//         }
//         let isColliding = obj.isColliding(trial);
        
//         obj.updateCollisionState();
//         if (isColliding) {
//             obj.collide(trial);
//             collided[collisionSerial] = true;
//         }
//     }
// }

// function isInsideObject(x: number, y: number, r: number, p: Planet) {
//     for (let j = 0; j < p.length; j++) {
//         if (p[j].isColliding({x: x, y: y, r: r + (planetsMinDist/2)})) {
//             return true;
//         }
//     }
//     return false;
// }
