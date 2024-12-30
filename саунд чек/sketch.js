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







/*let sound;

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