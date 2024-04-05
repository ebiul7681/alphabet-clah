function continueGame(){
 const alphabet = getARandomAlphabet();

//  set randomly generated alphabet(show it)
const currentAlphabetElement = document.getElementById('current-alphabet');
currentAlphabetElement.innerText = alphabet;

// set background color
setBackgroundColorById(alphabet);
}
function play(){
	hideElementById('home-screen');
	showElementById('play-ground');
	continueGame();
}

