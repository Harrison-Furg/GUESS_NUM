let difficulty = 10; 
let i;
let targetNum;
let result = "";
let win = false;
function guess(){
    let guess = document.getElementById("guessField").value;
    if(guess == targetNum){
        result= "WINNER!";
        win = true;
    } else if(guess > targetNum){
        result = "Too high!";
    } else {
        result = "Too low!";
    }
    document.getElementById("hint").innerHTML = result;
    if (win) {
        setTimeout(reset, 3000);
    }
}

function init(){
    win = false;
    i = 0;
    targetNum = Math.floor(Math.random() * 100*difficulty);
    result = "Guess a number between 1 and " + 100*difficulty;
    document.getElementById("hint").innerHTML = result;
    document.getElementById("range").innerHTML = "1 - " + 100*difficulty;
    console.log(targetNum);
    console.log(100*difficulty);
}

function reset(){
    console.log("reset");
    if (i< 8) {
        i++;
        if (i == 0 || i == 4) {
            result = "reseting";
        } else if (i == 1 || i == 5) {
            result = "reseting.";
        } else if (i == 2 || i == 6) {
            result = "reseting..";
        } else {
            result = "reseting...";
        }
        setTimeout(reset, 250);
    } else {
        init();
    }
    document.getElementById("hint").innerHTML = result;
}

window.onload = init();