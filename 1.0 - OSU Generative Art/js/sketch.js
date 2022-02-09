// Standard P5 Project
let combo1 = undefined;
let map1 = undefined;
let font = undefined;

const FONT_PATH = "assets/font/123Marker.ttf";

function preload(){

    font = loadFont(FONT_PATH);

}

function setup() {

    createCanvas(1000,1000);

    // Instantiate objects
    combo1 = new Combo;
    map1 = new Map;

    combo1.populateCombo();

}

function draw() {

    background(0);
    combo1.drawCombo();
    map1.drawMultiplier();

}

function mousePressed(){
    switch(keyCode){

        case 81: // 81 = Q
            // Generate new canvas
            break;
    }
}
