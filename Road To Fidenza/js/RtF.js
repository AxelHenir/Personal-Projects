

function preload(){

}

function setup() {

    // Create a new canvas
    createCanvas(1000,1000);

}

function draw() {


}


class flowfield{

    // Function generates the underlying flowfield
    // Width (px), Height (px), Resolution (0 - 1)
    constructor(width,height,resolution){
        this.w = width;
        this.h = height;
        this.res = resolution;
    }
}
