var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random");
setGradient();



color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomButton.addEventListener("click", randomGrad)

function setGradient(){
	body.style.background = "Linear-gradient(to right, "
	+color1.value+", "+color2.value+ ")";
	css.textContent = body.style.background + " ;";
}

function randomGrad(){
	var rand1 = generateRandomNumber();
	var rand2 = generateRandomNumber();
	//console.log(rand1, rand2);
	color1.value=rand1;
	color2.value=rand2;
	setGradient();
}


function generateRandomNumber(){
	return  '#'+(function lol(m,s,c){return s[m.floor(m.random() * s.length)] +
  (c && lol(m,s,c-1));})(Math,'0123456789ABCDEF',4);
}