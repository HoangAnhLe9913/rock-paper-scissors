

let humanChoice ='';
function getHumanChoice(){
 let input = prompt("Rock, Paper or Scissors", null);
  if(input.toLowerCase() === 'rock' ){
    humanChoice = 'rock';
  } else if (input.toLowerCase() === 'paper'){
    humanChoice = 'paper';
  } else if (input.toLowerCase() === 'scissors'){
    humanChoice = 'scissors'
  } else {
    humanChoice = 'Invalid answer';
  }
   return humanChoice;
} 

humanChoice = getHumanChoice(); //need to assign new value to variable
console.log("Human choice: " + humanChoice);

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










let result ='';
function playRound(humanChoice,computerChoice) {
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

//The issue you're encountering is that you're not getting new inputs for humanChoice and computerChoice inside the loop. Since both choices are determined outside of the loop, the same result is repeated for each iteration. To fix this, you need to call getHumanChoice() and getComputerChoice() inside the loop so that the player and the computer make a new choice for each round.
function playGame(){
  for(let i = 0; i < 5; i++){
  
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    console.log(`Round ${i + 1}`);
    playRound(humanChoice, computerChoice);
    console.log(result)

 
  }
}

playGame();