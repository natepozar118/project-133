x = 0;
y = 0;

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

var apple = "";

var speak_data = "";

var screen_width = window.innerWidth;

var screen_height = window.innerHeight;

var to_number = Number(content);
if(Number.isInteger(to_number))
{
  padding: ;
} else {
  
}

function preload() {
  loadimage("apple.png")
}

function  screen_width() {
  screen_width = [0]
}

function screen_height() {
  screen_height = [0]
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
 
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}


function createCanvas(screen_width, screen_height-150){

}