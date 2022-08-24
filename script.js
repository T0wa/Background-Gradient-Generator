var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var text = document.querySelector("h3");
var body = document.getElementById("gradient")



function colorChange(){
    body.style.background = "linear-gradient(to right, "+ color1.value + " , " + color2.value+")";
    text.innerHTML = body.style.background+";"
}
color1.addEventListener("input", colorChange)
color2.addEventListener("input", colorChange)
