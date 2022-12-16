var text = document.querySelector("#start")
var input = document.querySelector("#speed")

var speed = 500
var i = 0



var txt = 'Røyken videregående skole'

function skrivTeksten() {
    if (i <= txt.length) {
        text.innerHTML += txt.charAt(i);
        i++;
        setTimeout(skrivTeksten, speed);
      }
      if (i > txt.length ) {
        i = 1;
        text.innerHTML= "R";
      }
}

input.addEventListener("input", function() {
    speed = 500 / input.value
    text.innerHTML = " "
    i = 0
    skrivTeksten()
})