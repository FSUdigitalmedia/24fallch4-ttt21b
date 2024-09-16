let Font; // create the variable first
let c; // color of the text
let x = 0;
let speed = 10;
let y = 0;



//preload comes before setup, more faster
function preload() {
  Font = loadFont("assets/PPTelegraf-Regular.otf"); // add quotes or it wont work
}
function setup() {
  createCanvas(windowWidth, windowHeight);
textFont(Font); // sets the font, textFont is the function
textSize(100);
colorMode(HSB); // changes the color mode from rgb to hsb

}
//to get picture in, make sure the resolution is right or it will be slow
function draw() {
  background(10);
  
  //let bbox = Font.textBounds(' rubber chameleon', windowWidth/1.7, windowHeight/1.7); 
  // add the font variable before .textBounds
 // rect(bbox.x, bbox.y, bbox.w, bbox.h); // draws box around text, 
  //think of bounding box as guiding lines for the text

  let xPos = map2(x, 0, windowWidth/1.7, 0, windowWidth/1.7, QUADRATIC, IN); // map2 is different from just map
  //sticks to the right side after adding any of the constants, idk why
  // initial variable of x, set from 0 to winWidth, new mapped to new coords
  x = x + speed

  if (x > windowWidth/1.7 || x < 0) {
    speed = speed * -1;
  } // this is prolly where the issue is
  

let yPos = windowHeight/2;
  
if (yPos > windowHeight || x < 0) {
  speed = speed * -1;
}

  text("rubber chameleon", xPos, yPos);




 
 // if (x > )

 console.log(x);

  
  


  //for these parts i looked up how to get color shifts in p5 but i think i get it
  h = map(mouseX, 0, windowWidth, -30, 300); // h is hue
  c = color(h, map(mouseY, 0, windowHeight, 100, 20), 100); // c is color
  fill(c);


}
// not working
function keyPressed () {
  if (key === 's') {
    yPos = y - 10;
  } else if (key === 'w') {
    yPos = y + 10;
  }
  
}





