//get a reference to the canvas
var ctx = $('#canvas')[0].getContext("2d");
 
// This code draws a basic circle

/*ctx.beginPath();
ctx.arc(75, 75, 10, 0, Math.PI*2, true); // (x, y, radius, first line, closing line);//
ctx.closePath();
ctx.fill();/

 This code draws circles and a rectangle but with color. Note the ctx.fillstlye and the ctx.fill 
*/

/*

ctx.fillStyle = "#00A308";
ctx.beginPath();
ctx.arc(220, 220, 50, 0, Math.PI*2, true);
ctx.closePath();
ctx.fill();

ctx.fillStyle = "#FF1C0A";
ctx.beginPath();
ctx.arc(100, 100, 100, 0, Math.PI*2, true);
ctx.closePath();
ctx.fill();

//the rectangle is half transparent
ctx.fillStyle = "rgba(255, 255, 0, .5)"
ctx.beginPath();
ctx.rect(15, 150, 120, 120);
ctx.closePath();
ctx.fill();

*/


/* The code below draws a ball and moves it across the screen. This is done by placing a circle inside of the draw function below
dx and dy values change the direction of the ball. x and y values change where it will start... 

var x = 150;
var y = 150;
var dx = 2;
var dy = 4;
var ctx;
 
function init() {
  ctx = $('#canvas')[0].getContext("2d");
  return setInterval(draw, 10);
}
 
function draw() {
  ctx.clearRect(0,0,300,300);
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI*2, true); 
  ctx.closePath();
  ctx.fill();
  x += dx;
  y += dy;
}
 
init();

*/




//------- Code for bouncing ball of the walls ------------//

/* the bulk of our code is now put in a library as you can see below. Variable declarations and shapes.
this allows us to focus on the 'draw' function wich essentialy animates everything 

//BEGIN LIBRARY CODE
var x = 150;
var y = 150;
var dx = 2;
var dy = 4;
var ctx;
var WIDTH; 
var HEIGHT;
 
function circle(x,y,r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fill();
}
 
function rect(x,y,w,h) {
  ctx.beginPath();
  ctx.rect(x,y,w,h);
  ctx.closePath();
  ctx.fill();
}
 
function clear() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
}
 
function init() {
  ctx = $('#canvas')[0].getContext("2d");
  WIDTH = $("#canvas").width()
  HEIGHT = $("#canvas").height()
  return setInterval(draw, 10);
}
 
//END LIBRARY CODE
 
function draw() {
  clear();
  circle(x, y, 10);
 
//the if statements below make it so that the ball bounces around in the canvas without leaving the canvas
in english the first if statement goes something like this: If starting point for the x coordinate plus the direction the ball travels in that x coordinate
is GREATER than the width of the canvas OR if the starting point plus the direction is less than zero then dx = -dx forcing the ball to stay within the 
specified canvas. and same logic applies for y and dy.


  if (x + dx > WIDTH || x + dx < 0)  
    dx = -dx;
  if (y + dy > HEIGHT || y + dy < 0) 
    dy = -dy;
 
  x += dx;
  y += dy;
}

init();
 
*/


//-------CODE FOR CREATING A STATIONARY PADDLE ------------//

/*
//Begin Library
var x = 140; 
var y = 150; 
var dx = 2; 
var dy = 4; 
var ctx; 
var WIDTH; 
var HEIGHT; 
var intervalId = 0; 
 
function circle(x,y,r) { 
  ctx.beginPath(); 
  ctx.arc(x, y, r, 0, Math.PI*2, true); 
  ctx.closePath(); 
  ctx.fill(); 
} 
 
function rect(x,y,w,h) { 
  ctx.beginPath(); 
  ctx.rect(x,y,w,h); 
  ctx.closePath(); 
  ctx.fill(); 
} 
 
function clear() { 
  ctx.clearRect(0, 0, WIDTH, HEIGHT); 
} 
 
function init() { 
  ctx = $('#canvas')[0].getContext("2d"); 
  WIDTH = $("#canvas").width()
  HEIGHT = $("#canvas").height()
  intervalId = setInterval(draw, 10);
}
//End library

var paddlex; 
var paddleh; 
var paddlew; 
 
function init_paddle() { 
  paddlex = WIDTH / 32;       // the starting position of the paddle
  paddleh = 10;               // paddle height
  paddlew = 75;               // Paddle width
} 
 
function draw() { 
  clear(); 
  circle(x, y, 10); 
  rect(paddlex, HEIGHT-paddleh, paddlew, paddleh); 
  
  //the if and else statements below control how the game and ball will react when it hits walls or paddle //
   
  if (x + dx > WIDTH || x + dx < 0) 
    dx = -dx; 
 
  if (y + dy < 0) 
    dy = -dy; 
  else if (y + dy > HEIGHT) {
    if (x > paddlex && x < paddlex + paddlew)
      dy = -dy;
    else
      //game over, so stop the animation
      alert('You suck');
      clearInterval(intervalId);
  }
 
  x += dx;
  y += dy;
}
 
init();
init_paddle();





*/






/*

//----THE CODE BELOW IS FOR MOVING THE PADDLE -----//
//BEgin Library
var x = 150;
var y = 150;
var dx = 2;
var dy = 4;
var ctx;
var WIDTH;
var HEIGHT;
var paddlex;
var paddleh = 10;
var paddlew = 75;
var intervalId = 0;
 
function circle(x,y,r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fill();
}
 
function rect(x,y,w,h) {
  ctx.beginPath();
  ctx.rect(x,y,w,h);
  ctx.closePath();
  ctx.fill();

}
 
function clear() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
}
 
function init() {
  ctx = $('#canvas')[0].getContext("2d");
  WIDTH = $("#canvas").width()
  HEIGHT = $("#canvas").height()
  paddlex = WIDTH / 2;
  intervalId = setInterval(draw, 10);
}

//Library END







rightDown = false; 
leftDown = false; 
 
//set rightDown or leftDown if the right or left keys are down 
function onKeyDown(evt) { 
  if (evt.keyCode == 39) rightDown = true; 
  else if (evt.keyCode == 37) leftDown = true; 
} 
 
//and unset them when the right or left key is released 
function onKeyUp(evt) { 
  if (evt.keyCode == 39) rightDown = false; 
  else if (evt.keyCode == 37) leftDown = false; 
} 
 
$(document).keydown(onKeyDown); 
$(document).keyup(onKeyUp); 
        


function draw() { 
  clear(); 
  circle(x, y, 10); 

 
  //move the paddle if left or right is currently pressed 
  if (rightDown) paddlex += 5;                                  <---//THESE VALUES CHANGE THE SPEED OF THE PADDLE//
  else if (leftDown) paddlex -= 5;                              <---//THESE VALUES CHANGE THE SPEED OF THE PADDLE//
  rect(paddlex, HEIGHT-paddleh, paddlew, paddleh); 
  
  if (x + dx > WIDTH || x + dx < 0) 
    dx = -dx; 
 
  if (y + dy < 0)
    dy = -dy;
  else if (y + dy > HEIGHT) {
    if (x > paddlex && x < paddlex + paddlew)
      dy = -dy;
    else
      clearInterval(intervalId);
  }
 
  x += dx;
  y += dy;
}


 
init();

*/









//-------------- THE CODE BELOW CREATES THE BRICKS -------------//


/*
//BEGIN LIBRARY //
var x = 25; 
var y = 250; 
var dx = 1.5; 
var dy = -4; 
var ctx; 
var WIDTH; 
var HEIGHT; 
var paddlex; 
var paddleh = 10; 
var paddlew = 75; 
var rightDown = false; 
var leftDown = false; 
var canvasMinX = 0; 
var canvasMaxX = 0; 
var intervalId = 0; 
 
function circle(x,y,r) { 
  ctx.beginPath(); 
  ctx.arc(x, y, r, 0, Math.PI*2, true); 
  ctx.closePath(); 
  ctx.fill(); 
} 
 
function rect(x,y,w,h) { 
  ctx.beginPath(); 
  ctx.rect(x,y,w,h); 
  ctx.closePath(); 
  ctx.fill(); 
}
 
function clear() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
}
 
function onKeyDown(evt) {
  if (evt.keyCode == 39) rightDown = true;
  else if (evt.keyCode == 37) leftDown = true;
}
 
function onKeyUp(evt) {
  if (evt.keyCode == 39) rightDown = false;
  else if (evt.keyCode == 37) leftDown = false;
}
 
$(document).keydown(onKeyDown);
$(document).keyup(onKeyUp);
 
function onMouseMove(evt) {
  if (evt.pageX > canvasMinX && evt.pageX < canvasMaxX) {
    paddlex = evt.pageX - canvasMinX - (paddlew/2);
  }
}
 
$(document).mousemove(onMouseMove);
 
function init() {
  ctx = $('#canvas')[0].getContext("2d");
  WIDTH = $("#canvas").width()
  HEIGHT = $("#canvas").height()
  paddlex = WIDTH / 2;
  canvasMinX = $("#canvas").offset().left;
  canvasMaxX = canvasMinX + WIDTH;
  intervalId = setInterval(draw, 20);
}

//END LIBRARY//

var bricks;
var NROWS;
var NCOLS;
var BRICKWIDTH;
var BRICKHEIGHT;
var PADDING;

function initbricks() {
  NROWS = 5;
  NCOLS = 5;
  BRICKWIDTH = (WIDTH/NCOLS) - 5;
  BRICKHEIGHT = 15;
  PADDING = 1;
//WHY IS THERE A FOR LOOP THE  BRICKS??????????

  bricks = new Array(NROWS);
  for (i=0; i < NROWS; i++) {
    bricks[i] = new Array(NCOLS);
    for (j=0; j < NCOLS; j++) {
      bricks[i][j] = 1;
    }
  }
}
       
function draw() {
  clear();
  circle(x, y, 10);

  if (rightDown) paddlex += 5;
  else if (leftDown) paddlex -= 5;
  rect(paddlex, HEIGHT-paddleh, paddlew, paddleh);


  //draw bricks
  for (i=0; i < NROWS; i++) {
    for (j=0; j < NCOLS; j++) {
      if (bricks[i][j] == 1) {
        rect((j * (BRICKWIDTH + PADDING)) + PADDING, 
             (i * (BRICKHEIGHT + PADDING)) + PADDING,
             BRICKWIDTH, BRICKHEIGHT);
      }
    }
  }

  //have we hit a brick?                   < - THIS IS THE CODE FOR WHEN DA BALL HITS DA BRICKS ----->
  rowheight = BRICKHEIGHT + PADDING;
  colwidth = BRICKWIDTH + PADDING;
  row = Math.floor(y/rowheight);
  col = Math.floor(x/colwidth);
  //if so, reverse the ball and mark the brick as broken
  if (y < NROWS * rowheight && row >= 0 && col >= 0 && bricks[row][col] == 1) {
    dy = -dy;
    bricks[row][col] = 0;
  }
 
  
//the if and else statements below control how the game and ball will react when it hits walls or paddle //

  if (x + dx > WIDTH || x + dx < 0)
    dx = -dx;

  if (y + dy < 0)
    dy = -dy;
  else if (y + dy > HEIGHT) {
    if (x > paddlex && x < paddlex + paddlew)
      dy = -dy;
  else
      clearInterval(intervalId);
  }
 
  x += dx;
  y += dy;
}

init();
initbricks();

*/

//BEGIN LIBRARY//  
var x = 25;
var y = 250;
var dx = 1.5;
var dy = -4;
var ctx;
var WIDTH;
var HEIGHT;
var paddlex;
var paddleh = 10;
var paddlew = 75;
var rightDown = false;
var leftDown = false;
var canvasMinX = 0;
var canvasMaxX = 0;
var intervalId = 0;
var bricks;
var NROWS = 5;
var NCOLS = 5;
var BRICKWIDTH;
var BRICKHEIGHT = 15;
var PADDING = 1;
var mySound;
var mySound2;
var score = 0;
var myMusic;


function init() {
  ctx = $('#canvas')[0].getContext("2d");
  WIDTH = $("#canvas").width();
  HEIGHT = $("#canvas").height();
  paddlex = WIDTH / 2;
  BRICKWIDTH = (WIDTH/NCOLS) - 1;
  canvasMinX = $("#canvas").offset().left;
  canvasMaxX = canvasMinX + WIDTH;
  intervalId = setInterval(draw, 30);
  mySound2 = new sound("Congo.wav");
  mySound = new sound("Effect.mp3");
  myMusic = new sound("C-2.mp3");
  myMusic.play();
}
function circle(x,y,r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI*2, true);
  

  ctx.fill();
}

function rect(x,y,w,h) {
  ctx.beginPath();
  ctx.rect(x,y,w,h);
  ctx.closePath();
  ctx.fill();
}

function clear() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  rect(0,0,WIDTH,HEIGHT);
}

function onKeyDown(evt) {                           //This function moves the paddle left and right
  if (evt.keyCode == 39) rightDown = true;      
  else if (evt.keyCode == 37) leftDown = true;
}

function onKeyUp(evt) {                            //This function stops the paddle from moving when you take your finger off the key arrow
  if (evt.keyCode == 39) rightDown = false;
  else if (evt.keyCode == 37) leftDown = false;
}

$(document).keydown(onKeyDown);
$(document).keyup(onKeyUp);

function onMouseMove(evt) {
  if (evt.pageX > canvasMinX && evt.pageX < canvasMaxX) {
    paddlex = Math.max(evt.pageX - canvasMinX - (paddlew/2), 0);
    paddlex = Math.min(WIDTH - paddlew, paddlex);
  }
}

$(document).mousemove(onMouseMove);
function initbricks() {
    bricks = new Array(NROWS);
    for (i=0; i < NROWS; i++) {
        bricks[i] = new Array(NCOLS);
        for (j=0; j < NCOLS; j++) {
            bricks[i][j] = 1;
        }
    }
}

function drawbricks() {
  for (i=0; i < NROWS; i++) {
    ctx.fillStyle = rowcolors[i];
    for (j=0; j < NCOLS; j++) {
      if (bricks[i][j] == 1) {
        rect((j * (BRICKWIDTH + PADDING)) + PADDING, 
             (i * (BRICKHEIGHT + PADDING)) + PADDING,
             BRICKWIDTH, BRICKHEIGHT);
      }
    }
  }
}


function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

function drawScore() {
    ctx.font = "20px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+score, 8, 140);

}
function sound2(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}


//END LIBRARY//


var ballr = 10;
var rowcolors = ["#6B8E23"];
var paddlecolor = "#FFFFFF";
var ballcolor = "#FFFFFF";
var backcolor = "#000000";

function draw() {
  ctx.fillStyle = backcolor;
  clear();
  ctx.fillStyle = ballcolor;
  circle(x, y, ballr);
  drawScore();

  if (rightDown) paddlex += 5;
  else if (leftDown) paddlex -= 5;
  ctx.fillStyle = paddlecolor;
  rect(paddlex, HEIGHT-paddleh, paddlew, paddleh);

  drawbricks();

  //want to learn about real collision detection? go read
  // http://www.metanetsoftware.com/technique/tutorialA.html
  rowheight = BRICKHEIGHT + PADDING;
  colwidth = BRICKWIDTH + PADDING;
  row = Math.floor(y/rowheight);
  col = Math.floor(x/colwidth);
  //reverse the ball and mark the brick as broken
  if (y < NROWS * rowheight && row >= 0 && col >= 0 && bricks[row][col] == 1) {
    dy = -dy;
    bricks[row][col] = 0;
    mySound.play();
    score ++;
  }
 
 if (x + dx + ballr > WIDTH || x + dx - ballr < 0)
    dx = -dx;

  if (y + dy - ballr < 0)
    dy = -dy;
  else if (y + dy + ballr > HEIGHT - paddleh) {
    if (x > paddlex && x < paddlex + paddlew) {
      //move the ball differently based on where it hit the paddle
      dx = 8 * ((x-(paddlex+paddlew/2))/paddlew);
      dy = -dy;
      mySound2.play();


    }
    else if (y + dy + ballr > HEIGHT) {
     clearInterval(intervalId);
     document.getElementById('info').innerHTML = "GAME OVER<br>SUCKA";
     myMusic.stop();    
     }
     
     
  	 

  }
  if (score >= 25) {
    document.getElementById('info').innerHTML = "YOU WIN!!!";
    

  }
  
  x += dx;
  y += dy;
}

init();
initbricks();








































































































































































