
function Bubble(dir){
    this.x = width/2;
    this.y = height-25;
    this.vel = new createVector(0,-1);
    this.dir = dir;
    this.radius = 15; // its actually diameter...
    this.speed = bubbleSpeed;

    this.init = function (){
        if (this.dir == 0){
        } else if (this.dir == 1){
            this.x = 25;
            this.y = height/2;
            this.vel = new createVector(1,0);
        } else if (this.dir == 2){
            this.x = width/2;
            this.y = 25;
            this.vel = new createVector(0,1);
        } else {
            this.x = width-25;
            this.y = height/2;
            this.vel = new createVector(-1,0);
        }
    }
    this.draw = function () {
        fill("blue");
        stroke("blue");
        strokeWeight(0);
        ellipse(this.x,this.y,this.radius,this.radius);
    }
    this.update = function (){
        this.x += this.vel.x*this.speed;
        this.y += this.vel.y*this.speed;
    }
    this.collideShield = function (p) {
        if ((this.dir+2)%4 == p.dir){
            if (this.dir == 0 && this.y-this.radius/2 <= (p.y+p.width/2)){
                return true;
            } else
                if (this.dir == 1 && this.x+this.radius/2 >= (p.x-p.width/2)){
                    return true;
                } else
                if (this.dir == 2 && this.y+this.radius/2 >= (p.x-p.width/2)){
                    return true;
                } else
                if (this.dir == 3 && this.x-this.radius/2 <= (p.x+p.width/2)){
                    return true;
                }}
        return false;

    }
    this.collideInner = function(p){
        var distance = Math.floor(Math.sqrt((this.x-p.x)*(this.x-p.x)+(this.y-p.y)*(this.y-p.y)));
        return (distance <= (this.radius/2+p.radius/2));
    }
}
