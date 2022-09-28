var bgStart, bgroomImg;


function preload(){
  
  bgStart = loadImage("./assets/inicioSolito.png");
  bgroomImg = loadImage("./assets/fondoFerci.png");
  
 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  start = new Start()
  start.display()
}

function draw() {
  
  background(bgStart);

  drawSprites();
}

