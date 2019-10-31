/* Add interactivity to your site with Javascript */
function randomPosition() {
  var list = document.getElementsByTagName("BUTTON");
  for(var i = 0; i < list.length; i++){
    if(i%2==0){
    var x = Math.floor((Math.random() * 1500) + 1);
    var y = Math.floor((Math.random() * 3000) + 1);
    var xpos = x+'px'
    var ypos = y+'px'
    list[i].style.right = xpos;
    list[i].style.top = ypos;
    }
  }
}

var counter = 360;

function randomRotate(){
  var list = document.getElementsByTagName("BUTTON");
  for(var i = 0; i < 12; i++){ 
    list[i].style.transform = 'rotate('+counter + 'deg)';
  }  
  counter += 360;
}

var score = 0;
function changeScore(){
  score += 1;
  document.getElementById("score").innerHTML = score;

}

function loseScore(){
  document.getElementById('score').innerHTML = '0';
  var x = Math.floor((Math.random() * 999999) + 1);
  console.log('#'+x);
  document.body.style.backgroundColor = '#' + x;
  alert("You lost ALL your POINTS to Sensei JAIN");
}

var opacityCounter = .5
function disapearButtons(){
  var list = document.getElementsByTagName("BUTTON");
  for(var i = 0; i < 12; i++){ 
    list[i].style.opacity = opacityCounter;
    
  }
  var x = Math.floor((Math.random() * 2) + 1);
    if (x >=2) {
      opacityCounter += .2;
    }
    else {
      opacityCounter -= .2;
    }
  
}
function reapear(){
  var list = document.getElementsByTagName("BUTTON");
  for(var i = 0; i < 12; i++){ 
    list[i].style.opacity = 1;
  }
}
function extremeRandomButtons(){
  var list = document.getElementsByTagName("BUTTON");
  for(var i = 0; i < 12; i++){ 
    list[i].style.opacity = 0;
  }
  setTimeout(randomPosition, 3000);
  setTimeout(reapear, 5000)
}


function red(){
  document.body.style="background-color:red";
}

function blue(){
  document.body.style="background-color:blue";
}

function display(){
  document.getElementById('h2').style.display="";
}

function green(){
  document.body.style="background-color:green";
}

function yellow(){
  document.body.style="background-color:yellow";
}

function purple(){
  document.body.style="background-color:purple";
}

function black(){
  document.body.style="background-color:#332F29";
}

function white(){
  document.body.style="background-color:white";
}

function brown(){
  document.body.style="background-color:brown";
}

function orange(){
  document.body.style="background-color:orange";
}

function pink(){
  document.body.style="background-color:pink";
}

function hide(){
  document.getElementById('h2').style.display="none";
}




randomPosition()



