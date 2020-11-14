noseX=0;
noseY=0;
leftwristX=0;
rightwristX=0;
difference=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);
    video.position(200,250);

    canvas=createCanvas(500,450);
    canvas.position(800,250);
    
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on("pose",getposes);
}

function draw(){
    background("#f3d2c1");
    fill("#c7e312");
    stroke("#d512e3");
    strokeWeight(10);
    square(noseX,noseY,difference);
}

function modelLoaded(){
    console.log("Yay! You did it! ");
}

function getposes(results){
    if (results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        console.log(noseX,noseY);
        difference=floor(leftwristX-rightwristX);
        console.log("Difference = "+difference);
        document.getElementById("sidedisplay").innerHTML="The Side of the Square = "+difference+" px";
    }
}