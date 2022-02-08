"use strict";

let l = 0; // Current lyric
let lyric = undefined; // Holds the lyrics .json


let cardives, pts,txtScale;

function preload(){
  cardives = loadFont('assets/fonts/Cardives.ttf');

  lyric = loadJSON('assets/json/lyrics.json');
}

function setup(){

  createCanvas(windowWidth,windowHeight); // Fullscreen, HD
  txtScale = 100;

}

function draw(){

  pts = cardives.textToPoints(lyric.lyrics[l], width/4, height/2, 200 ,{sampleFactor: 0.15, simplifyThreshold: 0});

  voronoiClearSites();

  background(100);

  for(let i =0; i< pts.length; i++){

    noStroke();
    voronoiSite(pts[i].x,pts[i].y,200);

  }

  voronoi(width,height,false);
  voronoiDraw(0,0,true,true);


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

    case 81:
      l++;
      break;
  }

}