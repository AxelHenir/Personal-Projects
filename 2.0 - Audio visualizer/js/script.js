"use strict";

let cardives, pts,txtScale;

function preload(){
  cardives = loadFont('assets/fonts/Cardives.ttf');
}

function setup(){

  createCanvas(windowWidth,windowHeight); // Fullscreen, HD
  txtScale = 100;
  

  

}

function draw(){

  pts = cardives.textToPoints('ABC abc', width/2, height/2, 300 ,{sampleFactor: 0.1, simplifyThreshold: 0.1});

  voronoiClearSites();

  background(100);

  for(let i =0; i< pts.length; i++){
 
    noStroke();
    voronoiSite(pts[i].x,pts[i].y,100);

  }

  voronoi(width,height,false);
  voronoiDraw(0,0,true,false);


}

function keyPressed(){

  switch(keyCode){

    case 32: // SPACE = Pause/Unpause
      if(isLooping()){
        noLoop();

      }
      else{
        loop();
      }
      break;
  }
}