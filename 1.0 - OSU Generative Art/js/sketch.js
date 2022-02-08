// Standard P5 Project
let combo1 = new Combo;
let map1 = new Map;

function preload(){

}

function setup() {

    createCanvas(1000,1000);
    rectMode(CENTER,CENTER);
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
