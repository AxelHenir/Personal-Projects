// Standard P5 Project
let combo1 = undefined;
let map1 = undefined;
let font = undefined;
let config = undefined;

const FONT_PATH = "assets/font/123Marker.ttf";
const CONFIG_PATH = "assets/json/config.json";

function preload(){

    font = loadFont(FONT_PATH);
    config = loadJSON(CONFIG_PATH);

}

function setup() {

    createCanvas(1000,1000);

    // Instantiate objects
    combo1 = new Combo;
    map1 = new Map(floor(random(0,1200)));

}

function draw() {

    background(0);
    combo1.drawCombo();
    map1.drawMultiplier();

}

function keyPressed(){

    switch(keyCode){

        case 81: // 81 = Q
            // Generate new canvas
            combo1 = new Combo;
            map1 = new Map(floor(random(0,1200)));
            break;
    }
}
