function handleKeyboardButtonPress(event){
	const playerPressed = event.key;
	console.log(playerPressed);
//  get the expected to press
const currentAlphabetElement = document.getElementById('current-alphabet');

const currentAlphabet = currentAlphabetElement.innerText;
const expectedAlphabet = currentAlphabet.toLowerCase();
console.log(playerPressed, expectedAlphabet);

// cheek matched or not
if(playerPressed === expectedAlphabet){
  console.log('you get a point');
//   update score
// 1. get the current score
const currentScoreElement = document.getElementById('current-score');
const currentScoreText = currentScoreElement.innerText;
const currentScore = parseInt(currentScoreText);
console.log(currentScoreText);
// 2. increase the score by 1
const newScore = currentScore + 1;
// 3. show the updated score
currentScoreElement.innerText = newScore;
//   start a new round
  removeBackgroundColorById(expectedAlphabet)
  continueGame();
}
else{
	console.log("you missed")
	// 1. get the current life number
const currentLifeElement = document.getElementById('current-life');
const currentLifeText = currentLifeElement.innerText;
const currentLife =parseInt(currentLifeText);
	// 2. reduce the life count 
const newLife =  currentLife - 1;
	// 3. display the updated life count
	currentLifeElement.innerText = newLife;
	if(newLife === 0){
     gameOver();
	}
}
}
document.addEventListener('keyup',handleKeyboardButtonPress);


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
	hideElementById('final-score');
	showElementById('play-ground');

	// reset score and life
	setTextElementValueById('current-life',5);
	setTextElementValueById('current-score',0);

	continueGame();
}

function gameOver(){
  hideElementById('play-ground');
  showElementById('final-score');
//   update final score
// 1.get the final score
const latsScore = getElementById('current-score');
setTextElementValueById('last-score')
}
