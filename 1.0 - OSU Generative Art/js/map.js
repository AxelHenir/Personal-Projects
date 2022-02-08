// Map class will contain the various combos
// Map class will access a JSON file with all the map data

class Map{

    constructor(){

        this.combos = [];
        this.multiplier = "500";

    }

    // Draws the multiplier
    drawMultiplier(){

        push();
        textAlign(CENTER,CENTER);
        textSize(32);
        text(this.multiplier + "x", 50,950);
        pop();
    }

}