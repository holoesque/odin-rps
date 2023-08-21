
const resultDiv   = document.querySelector('.result');
const scoreDiv    = document.querySelector('.score-board');
const rock        = document.querySelector('#rock');
const paper       = document.querySelector('#paper');
const scissors    = document.querySelector('#scissors');

let playerScore   = 0;
let computerScore = 0;

// event listeners for buttons

rock.addEventListener('click', () => {
    
  let result = playRound('rock');
  game(result);
    
});
    
paper.addEventListener('click', () => {
    
  let result = playRound('paper');
  game(result);
    
});
    
scissors.addEventListener('click', () => {
    
  let result = playRound('scissors');
  game(result);
    
});

// functions

function getComputerChoice () {

  const options = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * options.length);

  return options[random];

}

function playRound(choice) {

  let playerSelection = choice;
  let computerSelection = getComputerChoice();

  console.log(`Your choice: ${playerSelection}`);
  console.log(`CPU choice: ${computerSelection}`);

  if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You win! Rock beats scissors!";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return "You lose! Paper beats rock!";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "You win! Paper beats rock!";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "You lose! Scissors beats paper!";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You win! Scissors beats paper!";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "You lose! Rock beats scissors!";
  } else if (playerSelection == computerSelection) {
    return "Tie. Try again.";
  } else {
    return "Invalid input, try again.";
  }

}

function game(roundResult) {

  if (roundResult == "You win! Rock beats scissors!"
   || roundResult == "You win! Paper beats rock!" 
   || roundResult == "You win! Scissors beats paper!") {

    playerScore++;

  } else if (roundResult == "You lose! Paper beats rock!" 
          || roundResult == "You lose! Scissors beats paper!"
          || roundResult == "You lose! Rock beats scissors!") {

    computerScore++;

  }

    scoreDiv.textContent = `Current Score: You: ${playerScore} - CPU: ${computerScore}`;

  if (playerScore === 5) {
    resultDiv.textContent = "You win the match!";
  } else if (computerScore === 5) {
    resultDiv.textContent = "You lose the match!";
  } else {
    resultDiv.textContent = roundResult;
  }

}
