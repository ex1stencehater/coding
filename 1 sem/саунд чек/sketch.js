/*
let sound = new Audio("background_music.mp3")


function setup()
{
    createCanvas(1024, 576);
    sound.play();
}

function draw()
{
    background(0);
}

*/




/*
let sound;

function preload(){
    sound = loadSound("background_music.mp3");
}

function setup()
{
    createCanvas(1024, 576);
    sound.play();
}

function draw()
{
    background(0);
}

*/

let mySound;
// function for preloading assets 
function preload() {
  soundFormats('mp3', 'ogg'); // format sounds support
  mySound = loadSound('background_music.mp3'); // connect sound from directory
}

function setup() {
  let cnv = createCanvas(100, 100);
  cnv.mousePressed(canvasPressed);
  background(220);
  text('tap here to play', 10, 20);
}

// function listen when user pressed in canvas
function canvasPressed() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  mySound.play();
}

/*let mySound;
function onSoundLoadSuccess(e){
   console.log("load sound success",e);
}
function onSoundLoadError(e){
   console.log("load sound error",e);
}
function onSoundLoadProgress(e){
   console.log("load sound progress",e);
}
function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound("horror-background-atmosphere-11-240870.mp3",onSoundLoadSuccess,onSoundLoadError,onSoundLoadProgress);
}

function setup(){
   createCanvas(1024, 576);
   mySound.setVolume(0.1);
   mySound.play();
}

function draw()
{
    background(0);
}*/