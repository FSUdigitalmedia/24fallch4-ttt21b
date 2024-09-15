let y = 0; 
let speed = 3;
let deg = 0;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER)
}

function draw() {
  background(10);

// change color based on vert mouse position

  let startingColor = color("green");
  let endingColor = color("pink");
  let pct = map(mouseY, 0, height, 0, 1, true);
  let clr = lerpColor(startingColor,endingColor,pct);
  fill(clr);


  // draw circle based on mouse
let d = map(mouseX, 0, width, 50, 150, true);
let yPos = map2(y, 0, height, 0, height, SINUSOIDAL, IN);
circle(width/2, yPos, d);

if (y > height || y < 0) {
  speed = speed * -1;
}

y = y + speed;

//rotating rectangle
push();
translate(100,100);
rotate (radians(deg));
deg = (deg + 1) % 360 
rect(0, 0, 50, 20);
pop();


console.log(d);
}