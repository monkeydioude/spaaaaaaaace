const Gravity = {
    getForce: (a, b) => {
        let abM = a.mass*b.mass * Math.pow(10, 24);
        let deltaDist = getDistanceBetweenObjects(a, b);
        let dist = Math.pow(10, distPow) * deltaDist;
        if (dist == 0 || Number.isNaN(dist) || Number.isNaN(deltaDist)) {
            return null;
        }
        return ((G * (abM/Math.pow(dist, 2))) / 2) * gravityPullByDelta;
    },
    getAccelerationVector: (a, b, gravityForce) => {
        const acc = gravityForce / a.mass
        return {
            x: acc * Gravity.getForceRatio("x", a, b),
            y: acc * Gravity.getForceRatio("y", a, b),
        }
    },
    getForceRatio: (dir, a, b) => {
        return -(a[dir] - b[dir]) / (Math.abs(a.x - b.x) + Math.abs(a.y - b.y))
    }
}