var modal1 = document.getElementById("myModal1")
var modal2 = document.getElementById("myModal2")
var modal3 = document.getElementById("myModal3")
var modal4 = document.getElementById("myModal4")

var modal6 = document.getElementById("myModal6")

var button1 = document.getElementById("myBtn1")
var button2 = document.getElementById("myBtn2")
var button3 = document.getElementById("myBtn3")
var button4 = document.getElementById("myBtn4")

var button6 = document.getElementById("myBtn6")


button1.onmouseover = function(){
    modal1.style.display = "block";
}
button1.onmouseout = function(){
    modal1.style.display = "none";
}
button2.onmouseout = function(){
    modal2.style.display = "none";
}
button3.onmouseout = function(){
    modal3.style.display = "none";
}
button4.onmouseout = function(){
    modal4.style.display = "none";
}
button6.onmoseout = function(){
    modal6.style.display = "none";
}

button2.onmouseover = function(){
    modal2.style.display = "block";
}
button3.onmouseover = function(){
    modal3.style.display = "block";
}
button4.onmouseover = function(){
    modal4.style.display = "block";
}

button6.onmouseover = function(){
    modal6.style.display = "block";
}


/*
span1.onclick  = function(){
    modal1.style.display = "none";

window.onclick = function(event){
    if (event.target == "modal1"){
        modal1.style.display = "none";
    }
}
window.onclick = function(event){
    if (event.target == "modal2"){
        modal2.style.display = "none";
    }
}
window.onclick = function(event){
    if (event.target == "modal3"){
        modal3.style.display = "none";
    }
}
window.onclick = function(event){
    if (event.target == "modal4"){
        modal4.style.display = "none";
    }
}
window.onclick = function(event){
    if (event.target == "modal6"){
        modal6.style.display = "none";
    }
}*/