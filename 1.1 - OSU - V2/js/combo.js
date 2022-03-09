class Combo {

    constructor(){

        this.hitCircles = [];

    }

    drawCombo(){

        this.hitCircles.forEach((element) => {
            element.drawHitCircle();
        });

    }

    newHitCircle(x,y){

        let n = new Hitcircle(x,y);

        this.hitCircles.push(n);

        console.log("new circle at ",x,y, "hitcircle array:",this.hitCircles);

    }

}