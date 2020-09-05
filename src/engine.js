const Engine = {
    drawPlanet: (planet) => {
        ctx.beginPath();
        ctx.font = fontSize+ "px Verdana";
        ctx.arc(X(planet.x), Y(planet.y), planet.r * zoomLevel, 0, 2 * Math.PI);
        ctx.fillStyle =  planet.c;
        ctx.fill(); 
    }
}