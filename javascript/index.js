
const resultDiv = document.querySelector('.result');
const scoreDiv  = document.querySelector('.score-board');
const rock      = document.querySelector('#rock');
const paper     = document.querySelector('#paper');
const scissors  = document.querySelector('#scissors');

// event listeners for buttons

rock.addEventListener('click', () => {

  playRound('rock');

});

paper.addEventListener('click', () => {

  playRound('paper');

});


scissors.addEventListener('click', () => {

  playRound(scissors);

});

// functions

function getComputerChoice () {

  const options = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * options.length);

  return options[random];

}

function playRound(choice) {

  let playerSelection = choice;
  console.log(playerSelection);
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

function game() {

  let playerScore = 0;
  let computerScore = 0;

  while (playerScore != 3 && computerScore != 3) {
    let result = playRound();
    console.log(result);

    if (result == "You win! Rock beats scissors!"
     || result == "You win! Paper beats rock!" 
     || result == "You win! Scissors beats paper!") {

      playerScore++;

    } else if (result == "You lose! Paper beats rock!" 
            || result == "You lose! Scissors beats paper!"
            || result == "You lose! Rock beats scissors!") {

      computerScore++;

    } else if (result == "Tie. Try again.") {

      continue;

    }

    console.log(`Current Score: You: ${playerScore} - CPU: ${computerScore}`);
    
  }

  if (playerScore == 3) {
    console.log("You win the match!");
  } else {
    console.log("You lose the match!");
  }

}

///////////////// MAIN //////////////////

game();
