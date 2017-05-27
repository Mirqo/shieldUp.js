var height = 600;
var width = 600;
var player;
var bubbles = [];
var bubbleInterval = 500; // how often should bubbles spawn in ms
var score = 0;
var bestScore = 0;
var paused = true;
var gameOver = false;
var oldFrameCount;
var oldTime;
function setup() {
    oldTime = Date.now();
    height = 600;
    width = 600;
    var canvas = createCanvas(width, height);
    player= new Player(width/2, height/2);
}
function draw() {
    // drawing stuff
    background(255);
    player.draw(); // draw rect, 1 side of rect, circle inside
    for (var i = bubbles.length-1; i >= 0; i--){
        bubbles[i].draw();
    }
    fill(0);
    textSize(16);
    text("Score: "+score,5,5);
    textAlign(RIGHT);
    text("Best Score: "+bestScore,width-5,5);
    textAlign(LEFT);

    // logic
    if (!paused){
        if (oldTime <= Date.now()-bubbleInterval){
            oldTime = Date.now();
            bubbles.push(new Bubble(Math.floor((Math.random()*4))));
            bubbles[bubbles.length-1].init();
        }
        for (var i = bubbles.length-1; i >= 0; i--){
            bubbles[i].update();
            if (bubbles[i].collideShield(player)){
                score++;
                if (bestScore < score) bestScore = score;
                bubbles.splice(i,1);
            }
            else if (bubbles[i].collideInner(player)){
                gameOver = true;
                pause();
                bubbles.splice(i,1);
            }
        }
    }
    else {
        textAlign(CENTER,CENTER);
        textSize(50);
        if (!gameOver){
            text("Game Paused",width/2, height/2);
            textSize(32);
            text("Press Space to continue.",width/2,height/2+50);
            textSize(16);
            text("Use arrow keys (or hjkl if you are a vim wizard) to move your shield to stop bubbles from getting you wet.",0,150,width,height);
        }
        else {
            text("YOU LOST",width/2, height/2);
            textSize(32);
            text("Press Space try again.",width/2,height/2+50);
        }
        textAlign(LEFT,TOP);

    }
}
function keyPressed(){
    //console.log(keyCode);
    if (keyCode === 38){ //up
        player.dir = 0;
    }
    else if (keyCode === 75){
        player.dir = 0;
    }
    else if ((keyCode === 76) || (keyCode === 39)){ //right
        player.dir = 1;
    }
    else if ((keyCode === 74) || (keyCode === 40)){ //down
        player.dir = 2;
    }
    else if ((keyCode === 72) || (keyCode === 37)){ //left
        player.dir = 3;
    }
    else if (keyCode === 32){ //left
        pause();
    }
}
function pause() {
    if (!paused){
    }
    else if (gameOver){
        console.log("restarting...");
        restartGame();
    } else {
        oldTime = Date.now();
    }
    paused = !paused;
}
function restartGame() {
    gameOver = false;
    score = 0;
    bubbles = [];
    frameCount = 0;
}
