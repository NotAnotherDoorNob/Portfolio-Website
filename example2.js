var table;
var shapewidth = 20;
var graphHeight = [];
var names;
var buildingHeigth;
var xAxisLength = 860;
var barColor = [];


// pre load CSV and font files/////////////////////////////////////
function preload() {
  table = loadTable("buildings_.csv", "csv", "header");
  OSExtraBold = loadFont('OpenSans-ExtraBold.ttf');
  OSExtraBoldItal = loadFont('OpenSans-ExtraBoldItalic.ttf');
  OSLight = loadFont('OpenSans-Light.ttf');
  OSReg = loadFont('OpenSans-Regular.ttf');
}


//set up///////////////////////////////////////////////////////////
function setup() {
  var canvas = createCanvas(850, 600);

  canvas.parent('sketch-holder');
  background(245);
  translate(150, 500);

  //color variables
  let indigo = color(53, 38, 255);
  let gray = color(200);
  let lightGray = color(225);
  
  //data extracted from the CSV file
  names = table.getColumn("Building");
  city = table.getColumn("City");
  country = table.getColumn("Country");
  yearBuilt = table.getColumn("Built");
  buildingHeight = table.getColumn("Feet");







  //graph row lines/////////////////////////////////////////////
  push();
  translate(-250, 0)
  for (var i=0; i <= 15; i++){

    //every 5th line is darker and thicker
    if(i===5 || i===10 || i===15){
      strokeWeight(1.5);
      stroke(gray);
      line(200, 0, xAxisLength, 0);
      translate(0, -20);

      noStroke();
      fill(indigo);
      textSize(11);
      textFont(OSReg);
      text(i * 200 + "ft", 150, 20);
      
    } else {
      strokeWeight(.75);
      stroke(lightGray);
      line(200, 0, xAxisLength, 0);
      translate(0, -20);
    }


  }
  pop();




  //graph bars/////////////////////////////////////////////////////
  push();
  for(var i=0; i <= 9; i++)  {
    
    //mapping height to the graph height!!!
    graphHeight[i] = round(map(buildingHeight[i], 0, 2800, 0, 280));
    barColor[i] = round(map(buildingHeight[i], 0, 2800, 100, 255));


    //bars
    fill(53, 38, barColor[i]);
    noStroke();
    rect(0, 0, shapewidth, -graphHeight[i]);
    translate(60, 0);

    //x axis numbers
    textSize(11);
    textFont(OSReg);
    text(round(buildingHeight[i]) + "ft", -66, 20);
 
  }
  pop();





  //graph base x axis
  translate(-250, 0);
  strokeWeight(3);
  stroke(gray);
  line(200, 0, xAxisLength, 0);







  //headers
  push();
  noStroke();
  fill(indigo);
  textSize(42);
  textFont(OSExtraBoldItal);
  text("The World's tallest buildings!", 165, -415);
  pop();

 


}


//idk why this needs to be here, all I know is the whole thing falls
//apart w/o it
function draw(){
} 



//bar interactivity/////////////////////////////////////////////////////

//this is my giant if else statement- it displays the data related to
//the bar when the bar is hovered over
    function mouseMoved() {
      if (mouseX > 150 && mouseX < 170 && 
        mouseY > (500 - graphHeight[0]) && mouseY < 500){
         
        fill(color(53, 38, 255));
        textSize(18);
        textFont(OSLight);
        text("Name: " + names[0] + "      City: " + city[0] + "      Country: " + country[0], 100, 145);
        text("Year Built: " + yearBuilt[0], 100, 170);
        console.log("test");

      } else if (mouseX > 210 && mouseX < 230 && 
        mouseY > (500 - graphHeight[1]) && mouseY < 500){
          fill(color(53, 38, 255));
          textSize(18);
          textFont(OSLight);
          text("Name: " + names[1] + "      City: " + city[1] + "      Country: " + country[1], 100, 145);
          text("Year Built: " + yearBuilt[1], 100, 170);
      
      } else if (mouseX > 270 && mouseX < 290 && 
        mouseY > (500 - graphHeight[2]) && mouseY < 500){
          fill(color(53, 38, 255));
          textSize(18);
          textFont(OSLight);
          text("Name: " + names[2] + "        City: " + city[2], 100, 145);
          text("Country: " + country[2] + "        Year Built: " + yearBuilt[2], 100, 170);

      } else if (mouseX > 330 && mouseX < 350 && 
        mouseY > (500 - graphHeight[3]) && mouseY < 500){
          fill(color(53, 38, 255));
          textSize(18);
          textFont(OSLight);
          text("Name: " + names[3] + "        City: " + city[3], 100, 145);
          text("Country: " + country[3] + "        Year Built: " + yearBuilt[3], 100, 170);

      } else if (mouseX > 390 && mouseX < 410 && 
        mouseY > (500 - graphHeight[4]) && mouseY < 500){
          fill(color(53, 38, 255));
          textSize(18);
          textFont(OSLight);
          text("Name: " + names[4] + "        City: " + city[4] + "        Country: " + country[4], 100, 145);
          text("Year Built: " + yearBuilt[4], 100, 170);

      } else if (mouseX > 450 && mouseX < 470 && 
        mouseY > (500 - graphHeight[5]) && mouseY < 500){
          fill(color(53, 38, 255));
          textSize(18);
          textFont(OSLight);
          text("Name: " + names[5] + "        City: " + city[5], 100, 145);
          text("Country: " + country[5] + "        Year Built: " + yearBuilt[5], 100, 170);

      } else if (mouseX > 510 && mouseX < 530 && 
        mouseY > (500 - graphHeight[6]) && mouseY < 500){
          fill(color(53, 38, 255));
          textSize(18);
          textFont(OSLight);
          text("Name: " + names[6] + "        City: " + city[6], 100, 145);
          text("Country: " + country[6] + "        Year Built: " + yearBuilt[6], 100, 170);

      } else if (mouseX > 570 && mouseX < 590 && 
        mouseY > (500 - graphHeight[7]) && mouseY < 500){
          fill(color(53, 38, 255));
          textSize(18);
          textFont(OSLight);
          text("Name: " + names[7] + "        City: " + city[7] + "        Country: " + country[7] , 100, 145);
          text("Year Built: " + yearBuilt[7], 100, 170);

      } else if (mouseX > 630 && mouseX < 650 && 
        mouseY > (500 - graphHeight[8]) && mouseY < 500){
          fill(color(53, 38, 255));
          textSize(18);
          textFont(OSLight);
          text("Name: " + names[8] + "        City: " + city[8] + "        Country: " + country[8] , 100, 145);
          text("Year Built: " + yearBuilt[8], 100, 170);


      }  else if (mouseX > 690 && mouseX < 710 && 
        mouseY > (500 - graphHeight[9]) && mouseY < 500){
          fill(color(53, 38, 255));
          textSize(18);
          textFont(OSLight);
          text("Name: " + names[9] + "        City: " + city[9] + "        Country: " + country[8] , 100, 145);
          text("Year Built: " + yearBuilt[9], 100, 170);
//every time the else is called, a rectangle is drawn over the words 
//as if they've disappeared (spooky :o)
      } else {
        noStroke()
        fill(245)
        rect(0, 120, 1000, 70);
      }

      //this is just for building and testing purposes
      //console.log("x " + mouseX);
      //console.log("y " + mouseY);


}