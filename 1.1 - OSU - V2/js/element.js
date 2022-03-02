class Element{

    constructor(x,y){

        this.position = createVector(x, y);

        this.opacity = 0;

    }

    drawElement(){
        push();
        fill(255,255,255,this.opacity);
        ellipseMode(CENTER, CENTER);
        ellipse(this.position.x,this.position.y,100,100);

        fill(160,50,50,this.opacity);
        ellipse(this.position.x,this.position.y,90,90);
        pop();
    }

    updateElement(){
        
    }

    setNewPosition(x,y){
        this.position.set(x,y);
    }

}