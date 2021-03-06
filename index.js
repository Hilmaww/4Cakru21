var modal1 = document.getElementById("myModal1")
var modal2 = document.getElementById("myModal2")
var modal3 = document.getElementById("myModal3")
var modal4 = document.getElementById("myModal4")

var button1 = document.getElementById("myBtn1")
var button1 = document.getElementById("myBtn2")

var span = document.getElementsByClassName("close")[0];

button1.onclick = function(){
    modal1.style.display = "block";
    console.log("woi kerja kek")
}
button2.onclick = function(){
    modal2.style.display = "block";
}

span.onclick  = function(){
    modal1.style.display = "none";
}

window.onclick = function(event){
    if (event.target == "modal1"){
        modal1.style.display = "none";
    }
}