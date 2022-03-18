class Hitcircle{

    constructor(x,y){

        this.size = 125;
        
        this.position = createVector(x, y);

        this.opacity = undefined;

        this.life = 0;

    }

    drawHitCircle(){

        push();
        
        noFill();
        strokeWeight(this.size*0.075);
        stroke(255,255,255,this.opacity);
        ellipseMode(CENTER, CENTER);
        ellipse(this.position.x,this.position.y,this.size*1.1,this.size*1.1);

        noStroke();
        fill(160,50,50,this.opacity);
        ellipse(this.position.x,this.position.y,this.size,this.size);

        pop();
    }

    setNewPosition(x,y){
        this.position.set(x,y);
    }

    updateOpacity(){

        this.opacity = 700*sin(0.04*this.life);
        
        this.life ++;

    }

}