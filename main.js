var i = Math.random();
i = Math.floor(i*6) + 1;


var j = Math.random();
j = Math.floor(j*6) + 1;
 
var head
if(i>j){
    head = "<h1>🚩</h1><h1>Player 1 wins</h1>";
}
else if(j>i){
     head = "<h1>Player 2 wins</h1><h1>🚩</h1 id='hh' >";
}
else{
    head = "<h1>Draw</h1>";
}
var img1 = "<img src =" + "'./dice" + i + ".png'>" ;
var img2 = "<img src =" + "'./dice" + j + ".png'>" ;

document.querySelector(".theImages1").innerHTML = (img1);
document.querySelector(".theImages2").innerHTML = (img2);
document.querySelector(".header").innerHTML = (head);

