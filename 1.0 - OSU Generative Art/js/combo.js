// Combo class contains an array which contaoins element objects.
// Combo will contain the color of the combo

class Combo{

    constructor(){

        this.color = {red:50,green:100,blue:100};
        this.elements = [];

    }

    populateCombo(){
        
        let r = floor(random(4,8));

        for(let i = 0 ; i < r ; i++ ){
            this.elements.push(new Element);
        }
    }
    
    // Draws all elements contained int he combo
    drawCombo(){

        this.drawConnectors();

        for(let i = 0 ; i < this.elements.length ; i++ ){
            this.elements[i].drawElement();
        }
    }

    // Draws the connecting lines between the elements
    drawConnectors(){

        for(let i = 0 ; i < this.elements.length-1 ; i++ ){


            // Retrieve the coords of the 2 conncted elements.
            let coords = {
                x1: this.elements[i].startX, 
                y1: this.elements[i].startY,
                x2: this.elements[i+1].startX, 
                y2: this.elements[i+1].startY,
            };

            //console.log("x1: ",coords.x1,"y1: ",coords.y1,"x2: ",coords.x2,"y2: ",coords.y2);

            push();
            stroke(200,200,200,150);
            strokeWeight(10);
            fill(200);
            line(coords.x1,coords.y1,coords.x2,coords.y2);
            pop();
        }
    }

}