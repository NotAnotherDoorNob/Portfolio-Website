
//random num generator for the number of grass blades in a patch
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function setup() {
    var canvas = createCanvas(720, 400);

    canvas.parent('sketch-holder');
    
    background(144, 242, 82);
    drawGrassField()
};




//draws petals for drawLongFlower()
function drawLongPetal(myColor) {
        noStroke();
        fill(myColor);
        ellipse(150, 0, 305, 100);
    };




//draws petals for drawRoundFlower()
function drawRoundPetal(myColor) {
        noStroke();
        fill(myColor);
        ellipse(150, 0, 200, 150);
    };



//draws leaves for drawRoundFlower()
function drawRoundPetalLeaves(){
      noStroke();
      fill(16, 173, 55);
      ellipse(150, 0, 310, 100);
    };







function drawLongFlower(myColor, nPetals) {
  let angle = 360 / nPetals;

  //shadow for long petal flowers
  // noStroke();
  // fill(16, 180, 50);
  // ellipse(0, 0, 540,540);

  //iterates petals
  for(let i=0; i < nPetals; i++) {
    rotate( radians(angle) );
    drawLongPetal(myColor);
    }
 
  //flower center - this one has a random color between white and yellow for the center
  stroke(122, 115, 11);
  fill(255, random(246,255), random(125,255));
  ellipse(0, 0, 150,150);
  };







  function drawRoundFlower(myColor, nPetals) {
    let angle = 360 / nPetals;
    let numLeaves = round(random(1,4));
    let leafAngle = 360 / numLeaves; 

    //iterates leaves
    for(let i=0; i < leafAngle; i++){

      rotate(radians(leafAngle))
      drawRoundPetalLeaves(numLeaves);
    }
    //iterates petals
    for(let i=0; i < nPetals; i++) {
      rotate( radians(angle) );
      drawRoundPetal(myColor);
    };
  //flower center   
  noStroke();
  fill(255);
  ellipse(0, 0, 200,200);
};




//flowers are drawn on mousePressed at the mouseX, mouseY
function drawClick() {
        push();
          translate( mouseX, mouseY );
          scale( random(.03, .11) );
    
          var petalColor = color(random(50,255), random(255), random(255));
          var numPetals = round(random(7,16));
          
          //the type of flower is determined by numPetals
            if(numPetals >= 12) {
                drawLongFlower(petalColor, numPetals);
            } else if (numPetals <= 11) {
                drawRoundFlower(petalColor, numPetals);
            } else {
                console.log("error")
            };
        pop();
};

function mousePressed(){
    drawClick();
    return false;
};









function drawGrass() {

  stroke(25, 181, 54);
  line(0, 0, 0, random(5, 10));
}


function drawGrassPatch(){

  for (let i=0; i < randomIntFromInterval(4, 8); i++){
    push();
      translate((i * 5), random(0,5));
      rotate( radians(210) )
      drawGrass()
    pop();
  }
}


function drawGrassField() {

  for(let i=0; i<20; i++){
    push();
      translate( random(width), random(height) );
      drawGrassPatch();
    pop();
  }
}



    

