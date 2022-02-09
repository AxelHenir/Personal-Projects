// An element is a single hit element such as a circle or a slider.
// All elements have an X and Y coordinate. 
// If the ending X and Y is the same as the start, it's a circle.
// Otherwise, it's a slider. 

class Element{

    constructor(x1,y1,x2,y2,cs,color){

        // Start Coords
        this.startX = x1;
        this.startY = y1;

        // End coords
        this.endX = x2;
        this.endY = y2;

        // Color (retrieved from combo)
        this.color = color;

        // Circle Size
        this.cs = cs;

        // Bezier control pooints
        this.bez1 = random(200,800);
        this.bez2 = random(200,800);
        this.bez3 = random(200,800);
        this.bez4 = random(200,800);

    }

    // Take a wild guess at what this does
    drawElement(){

        push();

        // If the element is a circle, (x1 = x2 and y1 = y2)
        if(this.startX === this.endX && this.startY === this.endY){

            stroke(200,200,200);
            strokeWeight(10);
            fill(this.color.r,this.color.g,this.color.b);
            ellipse(this.startX,this.startY,this.cs,this.cs); 

        } else { // This would mean we are drawing a slider
            
            // Draw the slider border
            stroke(200,200,200);
            strokeWeight(this.cs - (-10));
            noFill();
            bezier(this.startX,this.startY,this.bez1,this.bez2,this.bez3,this.bez4,this.endX,this.endY);
            // Draw the slider body
            stroke(this.color.r*0.7,this.color.g*0.7,this.color.b*0.7);
            strokeWeight(this.cs - 10);
            noFill();
            bezier(this.startX,this.startY,this.bez1,this.bez2,this.bez3,this.bez4,this.endX,this.endY);

            // Draw the circular ends of the slider
            stroke(200,200,200);
            strokeWeight(10);
            fill(this.color.r,this.color.g,this.color.b);
            ellipse(this.endX,this.endY,this.cs,this.cs);
            ellipse(this.startX,this.startY,this.cs,this.cs);

        }
        pop();
    }
    
}