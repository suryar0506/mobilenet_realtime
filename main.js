function preload(){}

function setup() {
  canvas = createCanvas(300, 250);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('MobileNet', modelLoaded);
}

function modelLoaded(){
  console.log("Model is loaded");
}

function draw(){
  image(video, 0, 0, 300, 250);
  classifier.classify(video, gotResult);
}

function gotResult(error, results){
  if(error){
console.error(error);
  } else {
console.log(results);
document.getElementById("result_object_display").innerHTML = results[0].label;
document.getElementById("result_accuracy_display").innerHTML = results[0].confidence.toFixed(3);
  }
}


