const resultDiv = document.querySelector('.result');

function getComputerChoice () {

  const options = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * options.length);

  return options[random];

}

function playRound() {

  let playerSelection = prompt("Rock, Paper, or Scissors? ");
  let computerSelection = getComputerChoice();

  console.log(`Your choice: ${playerSelection.toLowerCase()}`);
  console.log(`CPU choice: ${computerSelection.toLowerCase()}`);

  if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
    return "You win! Rock beats scissors!";
  } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
    return "You lose! Paper beats rock!";
  } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
    return "You win! Paper beats rock!";
  } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
    return "You lose! Scissors beats paper!";
  } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
    return "You win! Scissors beats paper!";
  } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
    return "You lose! Rock beats scissors!";
  } else if (playerSelection.toLowerCase() == computerSelection) {
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

game();

