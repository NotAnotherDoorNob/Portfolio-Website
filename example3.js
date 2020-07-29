
// mappa.js setup/////////////////////////////////////////////////////////////////////////////////////////////
let myMap;
let canvas;
const mappa = new Mappa('Leaflet');
const options = {
    lat: 0,
    lng: 0,
    zoom: 1.5,
    style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
  }







//This is to get a date string to later call the column with yesterday's date////////////////////////////////
var dateObj = new Date(); 
  
// subtract one day from current time                           
 dateObj.setDate(dateObj.getDate() - 1);  

let myDay = dateObj.getDate();
let myMonth = dateObj.getMonth() + 1;
let yesterdayDate = myMonth.toString() + "/" + myDay.toString() + "/20";

//console.log(yesterdayDate);

let data = []








//loading csv with covid-19 data/////////////////////////////////////////////////////////////////////////////////////
let covidData;
function preload() {
    let url = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv"
    covidData = loadTable(url, 'csv', 'header');

}








function setup(){

  canvas = createCanvas(800,600); 
  canvas.parent('sketch-holder');
  myMap = mappa.tileMap(options); 
  myMap.overlay(canvas);
  
  for (let row of covidData.rows){
    let country = (row.get('Country/Region'));
    let lat = Number(row.get('Lat'));
    let lon = Number(row.get('Long'));
    let covidCount = Number(row.get(yesterdayDate));
    data.push({
      country,
      lat,
      lon,
      covidCount
    })
  }



}

console.log(data);

function draw(){
    clear();
    
    for (i = 0; i <= data.length; i++){
      if(data[i]){

      const pix = myMap.latLngToPixel(data[i], data[i]); 
      
      let diameter = (sqrt(data[i].covidCount) /20) * myMap.zoom();
      fill('rgba(196, 35, 35, 0.55)');
      stroke(75);
      ellipse(pix.x, pix.y, diameter);
      
      //console.log(row.get(yesterdayDate));
      }
    }

    

}