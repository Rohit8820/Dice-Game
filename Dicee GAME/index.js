	var ran1 = Math.round(Math.random()*5 + 1);
	var imag1 = "images/dice"+ran1+".png";
	document.querySelectorAll("img")[0].setAttribute("src",imag1);  


var ran2 = Math.round(Math.random()*5 + 1);
	var imag2 = "images/dice"+ran2+".png";
	document.querySelectorAll("img")[1].setAttribute("src",imag2);	
if(ran1 > ran2){
	document.querySelector("h1").textContent = "Player 1 Wins!";
}
else if(ran1 < ran2){
	document.querySelector("h1").textContent = "Player 2 Wins!";
}
else{
		document.querySelector("h1").textContent = "Draw!";
}