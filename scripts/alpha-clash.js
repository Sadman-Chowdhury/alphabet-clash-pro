// function play(){
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }

function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;

    //stop the game if 'Esc' is pressed
    if(playerPressed === 'Escape'){
        gameOver();
    }

    //get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    //check match or not
    if(playerPressed === expectedAlphabet){
        console.log('You got a point');
        
        //Update score:
        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);



        // //1. get current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);

        // //increase score by 1
        // const newScore = currentScore + 1;

        //show updated score
        // currentScoreElement.innerText = newScore;

        //start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }else{
        console.log('You lost a life')

         //Update life:
         const currentLife = getTextElementValueById('current-life');
         const updatedLife = currentLife - 1;
         setTextElementValueById('current-life', updatedLife);

         if(updatedLife === 0){
            gameOver();
         }

        // //1. get current life
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // //decrease life by 1
        // const newLife = currentLife - 1;

        // //show updated life
        // currentLifeElement.innerText = newLife;

        //start a new round
    }
}

//capture keyboard key press
document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function continueGame(){
    //generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log(alphabet);

    // show the alphabet
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set background color
    setBackgroundColorById(alphabet);
}

function play(){
    // hide everything and show only play-ground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    //Reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    //update final score
    //1. get the final score
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);

    //Clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}