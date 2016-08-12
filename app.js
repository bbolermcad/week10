var beats, drums, guitarlead, riff, synth1, synthmelody;


function preload() {
  beats = loadSound('beats.wav');
  drums = loadSound('drums.wav');
  guitarlead = loadSound('guitarlead.wav');
  riff = loadSound ('riff.wav');
  synth1 = loadSound('synth.mp3');
  synthmelody = loadSound ('synthmelody.wav');
  beats.loop();
}

function setup() {
  createCanvas(600, 600);
  background (202, 190, 190);
}

function draw () {

  //beats//
  fill(210, 28, 65);
  ellipse(100, 100, 100, 100);
  fill(0, 0, 0);
  text('play beat loop', 70, 100);
  //drums//
  fill(174, 73, 185);
  ellipse(100, 250, 100, 100);
  fill(0, 0, 0);
  text('play drums', 70, 250);
  //synth//
  fill (28, 210, 134);
  ellipse (100, 400, 100, 100);
  fill(0, 0, 0);
  text('play synth sound', 60, 400);
  //guitarlead//
  fill(14, 189, 189);
  ellipse (250, 100, 100, 100);
  fill(0, 0, 0);
  text('play guitar lead', 215, 100);
  //guitar riff//
  fill (210, 113, 28);
  ellipse (250, 250, 100, 100);
  fill(0, 0, 0);
  text('play guitar riff', 220, 250);
  //synthmelody//
  fill(239, 234, 102);
  ellipse (250, 400, 100, 100);
  fill(0, 0, 0);
  text('play synth wave', 210, 400);
  //soundFile1//
  fill(149, 134, 134);
  ellipse (400, 200, 150, 150);
  fill(0, 0, 0);
  text('play synth wave', 210, 400);

}




function mousePressed(){
  var beatsd = dist(mouseX, mouseY, 100, 100);
  var  drumsd= dist(mouseX, mouseY, 100, 250);
  var synthd = dist (mouseX, mouseY, 100, 400)
  var guitard = dist(mouseX, mouseY, 250, 100)
  var riffd = dist(mouseX, mouseY, 250, 250)
  var melodyd = dist(mouseX, mouseY, 250, 400)
  var sound1d = dist(mouseX, mouseY, 400, 200)

  if (beats.isPlaying()) {
    beats.stop();
  } else if (beatsd < 50) {
    beats.play()
  }

  if (drums.isPlaying()){
    drums.stop();
  } else if (drumsd < 50) {
    drums.play()
  }

  if (synth1.isPlaying()){
    synth1.stop();
  } else if (synthd < 50) {
    synth1.play()
  }

  if (guitarlead.isPlaying()){
    guitarlead.stop();
  } else if (guitard < 50) {
    guitarlead.play()
  }

  if (riff.isPlaying()) {
    riff.stop();
  } else if (riffd < 50) {
    riff.play()
  }

  if (synthmelody.isPlaying()){
    synthmelody.stop();
  } else if (melodyd < 50) {
    synthmelody.play()
  }


}
