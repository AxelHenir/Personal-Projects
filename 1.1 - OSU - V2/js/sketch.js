// Standard P5 Project
let font = undefined;

let gg = undefined;

const FONT_PATH = "assets/font/123Marker.ttf";

function preload(){

    font = loadFont(FONT_PATH);

}

function setup() {

    createCanvas(1000,1000);

    gg = new Combo();


}

function draw() {

    background(0);

    gg.drawCombo();

}

function keyPressed(){
    switch(keyCode){

        case 81: // 81 = Q
            gg.newHitCircle(random(0,1000),random(0,1000));
            break;
    }
}
