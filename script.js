

// let humanChoice ='';
// function getHumanChoice(){
//  let input = prompt("Rock, Paper or Scissors", null);
//   if(input.toLowerCase() === 'rock' ){
//     humanChoice = 'rock';
//   } else if (input.toLowerCase() === 'paper'){
//     humanChoice = 'paper';
//   } else if (input.toLowerCase() === 'scissors'){
//     humanChoice = 'scissors'
//   } else {
//     humanChoice = 'Invalid answer';
//   }
//    return humanChoice;
// } 

// humanChoice = getHumanChoice(); //need to assign new value to variable
// console.log("Human choice: " + humanChoice);

// let computerChoice ='';

// function getComputerChoice(){
//   let chance = Math.random();
//   // console.log(chance)
//   if (chance < 0.5 ){
//     computerChoice = 'rock';
//   } else if (chance >= 0.5 && chance <= 0.7  ){
//     computerChoice = 'paper';
//   } else {
//     computerChoice = 'scissors';
//   } return computerChoice;
// }

// computerChoice = getComputerChoice(); //assign new value to variable
// console.log("Computer choice: " + computerChoice);



// let result ='';
// function playRound(humanChoice,computerChoice) {
//   if(humanChoice === computerChoice){
//     result = "It's a tie!"
//   } else if (
//     (humanChoice === 'rock' && computerChoice === 'paper')|| 
//     (humanChoice === 'scissors' && computerChoice === 'rock') || 
//     (humanChoice === 'paper' && computerChoice === 'scissors')
//   ){ 
//     result = "You lose";
//   } else if (
//     (humanChoice === 'rock' && computerChoice === 'scissors')|| 
//     (humanChoice === 'scissors' && computerChoice === 'paper') || 
//     (humanChoice === 'paper' && computerChoice === 'rock')
//   )
//   {result = 'You win';
//   } else {
//     result = 'Invalid answer'
//   }
// return result;
//   }

// //playRound(humanChoice, computerChoice); //need to parse in the result from the other 2 functions

// //The issue you're encountering is that you're not getting new inputs for humanChoice and computerChoice inside the loop. Since both choices are determined outside of the loop, the same result is repeated for each iteration. To fix this, you need to call getHumanChoice() and getComputerChoice() inside the loop so that the player and the computer make a new choice for each round.
// function playGame(){
//  // for(let i = 0; i < 5; i++){
  
//     let humanChoice = getHumanChoice();
//     let computerChoice = getComputerChoice();
//     //console.log(`Round ${i + 1}`);
//     playRound(humanChoice, computerChoice);
//     console.log(result)

 
//   //}
// }

// playGame();

const results = document.querySelector("#results");
let humanChoice = "";


  document.getElementById("rock").addEventListener("click", () => {
    humanChoice = 'rock';
    playGame();
  });
  
  document.getElementById("paper").addEventListener("click", () => {
     humanChoice = 'paper';
     playGame();
  });
  document.getElementById("scissors").addEventListener("click", () => {
    humanChoice = 'scissors';
    playGame();
  });





 let computerChoice ='';

function getComputerChoice(){
  let chance = Math.random();
  // console.log(chance)
  if (chance < 0.5 ){
    computerChoice = 'rock';
  } else if (chance >= 0.5 && chance <= 0.7  ){
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors';
  } return computerChoice;
}

computerChoice = getComputerChoice(); //assign new value to variable
console.log("Computer choice: " + computerChoice);

function playRound(humanChoice,computerChoice) {
  let result = "";
    if(humanChoice === computerChoice){
      result = "It's a tie!"
    } else if (
      (humanChoice === 'rock' && computerChoice === 'paper')|| 
      (humanChoice === 'scissors' && computerChoice === 'rock') || 
      (humanChoice === 'paper' && computerChoice === 'scissors')
    ){ 
      result = "You lose";
    } else if (
      (humanChoice === 'rock' && computerChoice === 'scissors')|| 
      (humanChoice === 'scissors' && computerChoice === 'paper') || 
      (humanChoice === 'paper' && computerChoice === 'rock')
    )
    {result = 'You win';
    } else {
      result = 'Invalid answer'
    }
  return result;
    }
  
  //playRound(humanChoice, computerChoice); //need to parse in the result from the other 2 functions

 function playGame(){
  if (humanChoice === "") {
    results.innerHTML = "<p>Please choose Rock, Paper, or Scissors!</p>";
    return; // Exit if no choice is made yet
  }

  let computerChoice = getComputerChoice();
  let result = playRound(humanChoice, computerChoice);

  // Display the result in the results div
  results.innerHTML = `
    <p>Player chose: <strong>${humanChoice}</strong></p>
    <p>Computer chose: <strong>${computerChoice}</strong></p>
    <p><strong>${result}</strong></p>
  `;
   
    //}
  }
  

  playGame();

  /* The issue with your code lies in the way you're handling asynchronous events and the assignment of the humanChoice. Here's a breakdown of the problems and how to fix them:

Problems
getHumanChoice() does not return the selected choice immediately:

The addEventListener functions are asynchronous, meaning they won’t set the humanChoice immediately when getHumanChoice() is called. This is because the event listener is waiting for the user to click one of the buttons, but getHumanChoice() finishes execution without waiting for this.
humanChoice is reset every time the playGame() function is called:

Inside playGame(), you are re-declaring let humanChoice, which shadows the global humanChoice variable.
playRound() uses humanChoice immediately, but it might be undefined:

Since the event listeners are asynchronous, humanChoice might still be empty when the playRound() function runs, resulting in the Invalid answer outcome.
Solution
The solution is to use the event listeners to update the humanChoice state, and trigger the game logic after the user has made a choice.
Also, since the user will make a choice via buttons, we can directly call playRound from within the event listeners.
Key Changes:
Removed getHumanChoice(): The humanChoice is now directly set when a button is clicked (via the event listeners).
Refactored the playGame() function: The game logic now only runs after the player has made a choice (button click). We also check that humanChoice is not empty before proceeding with the game.
Updated the results display: The result is updated dynamically in the #results div when a button is clicked.
Explanation:
Buttons for User Selection: Each button (Rock, Paper, Scissors) listens for a click event and updates the humanChoice variable accordingly.
Game Logic: After the player's choice is made, the computer randomly selects a choice and playRound() determines the winner.
Displaying Results: The result is dynamically inserted into the #results div.*/