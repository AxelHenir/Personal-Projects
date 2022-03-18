class Combo {

    constructor(){

        this.hitCircles = [];

    }

    drawCombo(){

        this.drawConnectors();

        this.hitCircles.forEach((element) => {
            
            element.updateOpacity();
            element.drawHitCircle();
            
        });

        this.cullDeadHitCirlces();

    }

    drawConnectors(){

        let h = this.hitCircles;

        for(let i = 0 ; i < h.length-1 ; i++ ){

            let l = createVector(h[i].position.x,h[i].position.y);
            let k = createVector(h[i+1].position.x,h[i+1].position.y);
            let m = p5.Vector.sub(l,k);

            let p = createVector(h[i].size/2,0);
            


            push();

                stroke(255,255,255,255); //h[i].opacity
                strokeWeight(10);
                fill(200,200,200);

                stroke(0,0,255);
                line(l.x,l.y,l.x - h[i].life/100*m.x,l.y - h[i].life/100*m.y);

            pop();

            //console.log("x1: ",coords.x1,"y1: ",coords.y1,"x2: ",coords.x2,"y2: ",coords.y2);

            
        }
    }

    newHitCircle(x= random(0,1000),y= random(0,1000)){

        let n = new Hitcircle(x,y);

        this.hitCircles.push(n);

    }

    cullDeadHitCirlces(){

        this.hitCircles = this.hitCircles.filter(element => element.life < 100);

    }

}