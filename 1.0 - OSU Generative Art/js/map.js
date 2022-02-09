// Map class will contain the various combos
// Map class will access a JSON file with all the map data

class Map{

    constructor(multiplier){

        this.combos = [];
        this.multiplier = multiplier;

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