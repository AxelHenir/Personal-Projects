// Combo class contains an array which contaoins element objects.
// Combo will contain the color of the combo

class Combo{

    constructor(){

        this.color = {r:random(0,255),g:random(0,255),b:random(0,255)};
        this.elements = [];

        this.populateCombo();
    }

    // Adds some amount of elements to the combo
    populateCombo(){

        // Generate numbe rof elements in the combo
        let r = floor(random(3,5));

        for(let i = 0 ; i < r ; i++ ){

            let cleared = false;
            let x = random(50,950);
            let y = random(50,950);

            while(!cleared){

                x = random(50,950);
                y = random(50,950); 

                cleared = true;

                for(let j = 0 ; j < this.elements.length ; j++){

                    if(dist(x,y,this.elements[j].startX,this.elements[j].startY) < 100){
                        cleared = false;
                        break;
                    }
    
                }

            }
            
            // Random chance to be a slider
            let r = random(0,100);
            if(r>60){

                // Slider Element (startX, startY, endX, endY, circleSize, {r,g,b} 
                this.elements.push(new Element(x,y,random(50,950),random(50,950),config.circleSize,this.color));

            } else {

                // Basic Element (startX, startY, endX, endY, circleSize, {r,g,b} 
                this.elements.push(new Element(x,y,x,y,config.circleSize,this.color));

            }
            
        }
    }
    
    // Draws all elements contained in the combo
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