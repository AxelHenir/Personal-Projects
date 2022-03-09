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

            // Retrieve the coords of the 2 conncted elements.
            let coords = {
                x1: h[i].position.x, 
                y1: h[i].position.y,
                x2: h[i+1].position.x, 
                y2: h[i+1].position.y,
            };

            //console.log("x1: ",coords.x1,"y1: ",coords.y1,"x2: ",coords.x2,"y2: ",coords.y2);

            push();
            stroke(200,200,200,h[i].opacity);
            strokeWeight(10);
            fill(200);
            line(coords.x1,coords.y1,coords.x2,coords.y2);
            pop();
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