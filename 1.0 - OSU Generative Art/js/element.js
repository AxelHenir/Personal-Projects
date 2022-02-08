// An element is a single hit element such as a circle or a slider.
// All elements have an X and Y coordinate. 
// If the ending X and Y is the same as the start, it's a circle.
// Otherwise, it's a slider. 

class Element{

    constructor(){

        // Start Coords
        this.startX = random(50,950);
        this.startY = random(50,950);

        // End coords
        this.endX = undefined;
        this.endY = undefined;

        // Color (retrieved from combo)
        this.color = {red: 50, green: 100, blue: 100};

        // ID - Might not be needed (retreived from combo)
        this.id = undefined;

        // PLACEHOLDER CIRCLE SIZE
        this.CS = 110;

    }

    // Take a wild guess at what this does
    drawElement(){

        push();

        // Retreive the fill color
        fill(this.color.red,this.color.green,this.color.blue);

        // If the element is a circle, (x1 = x2 and y1 = y2)
        if(this.startX === this.endX && this.startY === this.endY){

            ellipse(this.startX,this.startY,this.CS,this.CS); 

        } else { // This would mean we are drawing a slider
            
            // Draw the slider body
            strokeWeight(50);
            line(this.startX,this.startY,this.endX,this.endY);

            // Draw the circular ends of the slider
            stroke(200,200,200);
            strokeWeight(10);
            ellipse(this.endX,this.endY,this.CS,this.CS);
            ellipse(this.startX,this.startY,this.CS,this.CS);

        }
        pop();
    }
    
}