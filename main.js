songA="";
songW="";
leftwristx=0;
leftwristy=0;
rightwritx=0;
rightwristy=0;
scoreLeftWrist=0;

function preload() {
    songA=loadSound("46_avengers_infinity_sms_tune_mp3_ringtone_ringtone_mp3.mp3")
    songW=loadSound("music.mp3")
}

function setup() {
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded)    
poseNet.on('pose', gotPoses)
}
function draw() {
    image(video, 0, 0, 600, 500);
    function isPlaying() {
        scoreLeftWrist=song_songA.isPlaying()
        if(scoreLeftWrist>0.2) 
        {
        song_songW.stop()
        circle(leftwristx,leftwristy,20);
        
        }
    if(scoreLeftWrist=false) {
        rightwristx=song_songW.isPlaying()
        song_songA.stop()
    }
    else{
        song_songW.stop()
        scoreLeftWrist=song_songA.isPlaying() 
    }
    }
document.getElementById("song").innerHTML="Song="+scoreLeftWrist

}

function gotPoses(results) {
    if(results.length>0) {
        console.log(results)
        scoreLeftWrist= results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist="+scoreLeftWrist);
        leftwristx=results[0].pose.leftWrist.x
        leftwristy=results[0].pose.leftWrist.y;
        console.log("leftWristX="+leftWristX+"leftWristY="+leftWristY);
        rightwristx=results[0].pose.rightWrist.x;
        rightwristy=results[0].pose.rightWrist.y;
        console.log("rightWristX="+rightWristX+"rightWristY="+rightWristY);
    }

}
