// Map class will contain the various combos
// Map class will access a JSON file with all the map data

class Map{

    constructor(){

        this.combos = [];
        this.multiplier = floor(random(0,1200));

    }

    // Draws the multiplier
    drawMultiplier(){

        push();
        textAlign(CENTER,CENTER);
        textSize(64);
        textFont(font);
        fill(255);
        text(this.multiplier + " X", 100,950);
        pop();
    }

}