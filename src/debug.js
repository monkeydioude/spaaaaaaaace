function Debug(id) {
    this.node = document.querySelector(id);
}

Debug.prototype.Write = function(data) {
    let textNode = document.createTextNode(data);
    let span = document.createElement("span");
    span.appendChild(textNode);
    this.node.appendChild(span);
}

Debug.prototype.BR = function() {
    let br = document.createElement("br");
    this.node.appendChild(br);
}

Debug.prototype.Toggle = function() {
    this.node.style.display = this.node.style.display == "block" ? "none" : "block";
}

Debug.prototype.dummyDefPlanets = function (objs) {
    let r = [Planets.getComputedRadius(0.15), Planets.getComputedRadius(1.3)]
    objs[0] = new Planet(
        0, 
        (canvas.width / 3) + decalX - 300, 
        (canvas.height / 4) + decalY, 
        ((Math.PI * r[0] * r[0]) / 1000).toFixed(2), 
        r[0], 
        "#"+ (Math.random() * (16*16) << 0).toString(16) + (Math.random() * (16*16) << 0).toString(16) + (Math.random() * (16*16) << 0).toString(16),
        new Velocity(190, -110)
    )
    objs[1] = new Planet(
        1, 
        (canvas.width / 2) + decalX - 300, 
        (canvas.height / 2) + decalY, 
        ((Math.PI * r[1] * r[1]) / 1000).toFixed(2), 
        r[1], 
        "#"+ (Math.random() * (16*16) << 0).toString(16) + (Math.random() * (16*16) << 0).toString(16) + (Math.random() * (16*16) << 0).toString(16),
        new Velocity()
    )
    objs[2] = new Planet(
        0, 
        (canvas.width / 2) + decalX - 300, 
        (canvas.height / 1.2) + decalY, 
        ((Math.PI * r[0] * r[0]) / 1000).toFixed(2), 
        r[0], 
        "#"+ (Math.random() * (16*16) << 0).toString(16) + (Math.random() * (16*16) << 0).toString(16) + (Math.random() * (16*16) << 0).toString(16),
        new Velocity(-265, 0)
    )
    // objs[2].x = canvas.width / 2;
    // objs[2].y = canvas.height / 2;
    // objs[2].motion.v = 3;
    // objs[2].motion.d = 0.25;
    // objs[3].x = canvas.width / 1.1;
    // objs[3].y = canvas.height / 1.1;
    // objs[3].motion.v = 3;
    // objs[3].motion.d = 0.75;
    // objs[4].x = 730;
    // objs[4].y = 150;
    // objs[4].motion.v = 3;
    // objs[4].motion.d = 0.125;
    // objs[5].x = 800;
    // objs[5].y = 75;
    // objs[5].motion.v = 3;
    // objs[5].motion.d = 0.66;
    // objs[2].x = 800;
    // objs[2].y = 100;
    // objs[2].motion.d = 0.75;
    // console.log(getRotationDirection(objs[0], objs[1]));
    // console.log(getRotationDirection(objs[1], objs[2]));
}