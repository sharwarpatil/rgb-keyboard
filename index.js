var noofbuttons=document.querySelectorAll(".button").length;
for (var i = 0; i < noofbuttons; i++) {
document.querySelectorAll(".button")[i].addEventListener("click", function (){
    var playsound = new Audio('mech.mp3');
    playsound.play();
    
    
});
}

document.addEventListener("keypress",function(event) {
    var tom1 = new Audio('mech.mp3');
    tom1.play();

});

