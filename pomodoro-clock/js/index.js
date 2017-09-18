var minutestoadd = parseInt(document.getElementById("time").innerHTML);
var hours, minutes, seconds;
var counthour, countminutes, countseconds;
var myfunc;
var stop;
var clicks = 0;
var done = false;

function clicked() {
  if(clicks == 0) {
    clicks++;
    calculate();
    document.getElementById("start").innerHTML = "STOP";
myfunc = setInterval(function(){ count() }, 1000);
    setInterval(function(){ checkifdone() }, 1000);
  }
  else {
    clicks--;
    myfunc = clearInterval(myfunc);
    document.getElementById("start").innerHTML = "RE-START";
    
  }
}

function count() {
  if(countseconds == 0 && countminutes > 0) {
    countminutes--; 
    document.getElementById("minute").innerHTML = countminutes.toString(); 
    countseconds = 60;
    document.getElementById("second").innerHTML = countseconds.toString(); 
    document.getElementById("second").innerHTML = countseconds--;
  } 
  else if(countminutes == 0 && counthour > 0) {
    counthour--;
    document.getElementById("hour").innerHTML = counthour.toString(); 
    countminutes = 60;
    document.getElementById("minute").innerHTML = countminutes.toString();
  }
  else { 
    document.getElementById("second").innerHTML = countseconds--;
  }
}

function checkifdone() {
  if(counthour == 0 && countminutes == 0 && countseconds == 0) {
    myfunc = clearInterval(myfunc);
    document.getElementById("second").innerHTML = countseconds--;
    document.getElementById("sound").play();
  }
}

function calculate() {
  var now = new Date().getTime();
  
  var d = new Date();
  var countDownDate = d.setMinutes(d.getMinutes()+ minutestoadd); 
  var distance = d.getTime() - now;
  
  hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;
  
  counthour = parseInt(document.getElementById("hour").innerHTML);
  countminutes = parseInt(document.getElementById("minute").innerHTML);
  countseconds = parseInt(document.getElementById("second").innerHTML);
}

function add() {
  minutestoadd++;
  document.getElementById("time").innerHTML = minutestoadd;
  document.getElementById("minute").innerHTML = minutestoadd;
}

function minus() {
  minutestoadd--;
  document.getElementById("time").innerHTML = minutestoadd;
   document.getElementById("minute").innerHTML = minutestoadd;
}

function stop() {
  stop = true;
}

function reset() {
  calculate();
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;
}