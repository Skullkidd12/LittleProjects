// buttons

const startStopBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#resetBtn");

//time

let seconds = 0;
let minutes = 0;
let hours = 0;


//zeros
 let leadingSeconds = 0;
 let leadingMinutes = 0;
 let leadingHours = 0;


 //set interval and timer status


 let timerInterval= null;
 let timerStatus = "stopped"
//stopwatch func

function stopWatch() {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  if(seconds< 10) {
    leadingSeconds="0" + seconds.toString();
  }else{
    leadingSeconds = seconds;
  }
  if(minutes< 10) {
    leadingMinutes="0" + minutes.toString();
  }else{
    leadingMinutes = minutes;
  }
  if(hours< 10) {
    leadingHours="0" + hours.toString();
  }else{
    leadingHours = hours;
  }

  let displayTimer = document.getElementById("timer").innerHTML=
    leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}


//window.setInterval(stopWatch,1)

startStopBtn.addEventListener('click',function(){

  if(timerStatus === "stopped") {
    timerInterval = window.setInterval(stopWatch, 1000)
    document.getElementById('startStopBtn').innerHTML= `<i class="afa-solid fa-play" id="play"> PAUSE </i>`
    timerStatus = "rolling"
  }else{
    window.clearInterval(timerInterval);
    document.getElementById('startStopBtn').innerHTML= `<i class="afa-solid fa-play" id="play"> PLAY </i>`
    timerStatus = "stopped"
  }
})

resetBtn.addEventListener('click',function(){
  window.clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;


  document.getElementById('timer').innerHTML="00:00:00"
})


