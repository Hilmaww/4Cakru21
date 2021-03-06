var modal1 = document.getElementById("myModal1")
var modal2 = document.getElementById("myModal2")
var modal3 = document.getElementById("myModal3")
var modal4 = document.getElementById("myModal4")

var button1 = document.getElementById("myBtn1")

var span = document.getElementsByClassName("close")[0];

button1.onclick = function(){
    modal1.style.display = "block";
    document.getElementsByClassName("desc").innerHTML = "lol";
}

span.onclick  = function(){
    modal1.style.display = "none";
}

window.onclick = function(event){
    if (event.target == "modal"){
        modal1.style.display = "none";
    }
}