// First part of the instructions 
// let secret = 7;
// let answer = prompt("Please input a secret number (1-20)");
// let guess = parseInt(answer);

// if (guess === secret) {
//     alert("Correct guess! Well done!!")

// } else {
//     alert("Sorry, incorrect guess!!")
// };

//SECOND PART OF INSTRUCTIONS
//COMBINE LINE 2 & 3, WHILE LOOP, STOP WHEN CORRECT, 
// WHILE GUESS !=, SEE IF TOO HIGH OR TOO LOW
// CHANGE secret from 7 to math.random
alert("Welcome to the Guessing Game!");
let answerOptions = [14,12,3,7,5]
let secret = answerOptions[Math.floor(Math.random() * answerOptions.length)]; 
let userAnswer;
let lives = 6;
let i = 0;

while(i < lives) {
    userAnswer = prompt("Please input a secret number between (1 - 20)");

    if (userAnswer === null) {
        alert("You did not make a valid selection.\nPlease try again.");
    } else {
        userAnswer = parseInt(userAnswer); 
    }

    if(isNaN(userAnswer)|| userAnswer < 1 || userAnswer > 20) {
        alert("Please enter a valid number between 1 and 20.");
    } else {
        if (userAnswer === secret) {
        alert("Well done.\nYour guess is correct!");
        break;
    } else if (userAnswer < secret) {
        alert("Try again.\nYour guess was too low.");
    } else if (userAnswer > secret) {
        alert("Try again.\nYour guess was too high.");
    }
    
    i++;
}

if(i === lives) {
    alert(`Sorry you have reached the max number of attempts.\nThe correct answer was\n${secret}`);
}
}

