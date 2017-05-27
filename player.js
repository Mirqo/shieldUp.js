function Player(x,y){
    this.x = x;
    this.y = y;
    this.width = 120;
    this.radius = 50;
    this.dir = 3;

    this.draw = function() {
        fill(255);
        strokeWeight(4);
        stroke(205);
        rect(this.x-this.width/2,this.y-this.width/2,this.width,this.width);
        strokeCap(PROJECT);
        stroke("rgb(0,255,0)");
        if (this.dir == 0){
            line(this.x-this.width/2,this.y-this.width/2,this.x+this.width/2,this.y-this.width/2);
        }
        else if (this.dir == 1){
            line(this.x+this.width/2,this.y-this.width/2,this.x+this.width/2,this.y+this.width/2);
        }
        else if (this.dir == 2){
            line(this.x-this.width/2,this.y+this.width/2,this.x+this.width/2,this.y+this.width/2);
        }
        else {
            line(this.x-this.width/2,this.y-this.width/2,this.x-this.width/2,this.y+this.width/2);
        }
        stroke(0);
        strokeWeight(0);
        fill("#01FF70");
        ellipse(this.x,this.y,this.radius,this.radius);
    }
}

