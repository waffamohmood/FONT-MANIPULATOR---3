noseX=0;
noseY=0;
leftWristx=0;
rightWristx=0;
difference=0;



function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
  video.hide();
  
    canvas = createCanvas(550, 550);
    canvas.position(560,150);
  
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
  }
  
  function modelLoaded() {
    console.log('PoseNet Is Initialized!');
  }
  
  
  function gotPoses(results)
  {
    if(results.length > 0)
    {
      console.log(results);
      noseX = results[0].pose.nose.x;
      noseY = results[0].pose.nose.y;
      console.log("noseX = " + noseX +" noseY = " + noseY);
      leftWristx=results[0].pose.leftWrist.x;
      rightWristx=results[0].pose.rightWrist.x;
      difference=floor(leftWristx-rightWristx);
      console.log("leftWristx = " + leftWristx +" rightWristx = " + rightWristx);
    }
}

function draw() {
    background('#030303');
    document.getElementById("font_size").innerHTML=("Font of the text = "+difference+"px");
    fill("#fcfcfc");
    text("Hassah",50,400);
    textSize(difference)
    }