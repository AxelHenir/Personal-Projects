class Combo {

    constructor(){

        this.elements = [];

        this.lastElement = undefined;

        this.direction = undefined;

        this.newElement(width/2,height/2);

    }

    drawCombo(){
        this.elements.forEach();
    }

    newElement(x,y){

        let ele = new Element(x,y);

        this.lastElement = ele;

        this.calculateNextDirection();

        this.elements.push(ele);

    }

    calculateNextDirection(){

    }

}