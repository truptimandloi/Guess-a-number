let random = Math.floor(Math.random()*20);
function check(){
    let output = document.getElementById("output");
    let display = document.getElementById("display");

    let userGuess = Number(display.value);

    if( userGuess < 1 ||  userGuess > 20){
        output.innerHTML = "Enter number between 1 to 20";
    }
    else if( userGuess < random){
           output.innerHTML ="Too low , Try Again";
    }
    else if( userGuess > random){
          output.innerHTML ="Too high , Try Again";
    }
    else{
        output.innerHTML ="Correct!! Wow you guessed the number!!";
        
    }

};