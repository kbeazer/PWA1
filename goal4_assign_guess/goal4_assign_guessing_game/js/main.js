/**
 * GUESSING GAME:
 *
 * Created By: Kareem K. Beazer
 * Date: 10/11/13
 * 
 * GUESSING GAME
 */

//Game variables?
(function (){
    var playerGuess= 0;
    var remainingGuess= 2;
    var strike= 1;
    var numberRange= Math.floor(Math.random()*10+1);
    var guessingObject= {outputId: document.querySelector("#output"),
                         inputId:  document.querySelector("#input"),
                         buttonId: document.querySelector("button")
    };
    guessingObject.buttonId.addEventListener("click", onClick);
    function playGame(){
        var gameState= ' Guess #'+strike+'-----Only '+remainingGuess+ 'left';
        playerGuess=parseInt(guessingObject.inputId.value);
        validate();
        if(remainingGuess==0 && playerGuess!==numberRange){
            gameOver();
        }else if(remainingGuess==0 && strike>3){
            gameOver();
        }else if(playerGuess>numberRange){
            remainingGuess--;
            strike++;
            guessingObject.outputId.innerHTML= "I'm sorry, the number you entered was too high: "+gameState;
        }else if(playerGuess<numberRange){
            remainingGuess--;
            strike++;
            guessingObject.outputId.innerHTML= "I'm sorry, the number you entered was too low: "+gameState;
        }else{
            youWin();
        }
        function validate(){
            if(isNaN(playerGuess) || playerGuess<1 || playerGuess>10){
                guessingObject.outputId.innerHTML= 'Please enter a number between 1-10 to continue.';
            }
        }
    }
    function gameOver(){
        guessingObject.outputId.innerHTML= "GAME OVER!!!";
        guessingObject.buttonId.removeEventListener("click", onClick, false);
    }
    function youWin(){
        if(playerGuess==numberRange){
            guessingObject.outputId.innerHTML= "CONGRATULATIONS!!! You have guessed the magic number!";
            guessingObject.buttonId.removeEventListener("click", onClick, false);
        }
    }
    function onClick(){
        playGame();
    }
    console.log(numberRange); // Displays magic number in the console.
})();