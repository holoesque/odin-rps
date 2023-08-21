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

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * options.length);

  return options[random];
}

function getResult(roundData) {
  return `You ${roundData[0]}! ${roundData[1].charAt(0).toUpperCase() + roundData[1].slice(1)} beats ${roundData[2]}!`
}

function playRound(choice) {
  let playerSelection = choice;
  let computerSelection = getComputerChoice();

  console.log(`Your choice: ${playerSelection}`);
  console.log(`CPU choice: ${computerSelection}`);

  switch (playerSelection) {
    case 'rock':
      switch (computerSelection) {
        case 'rock':
          return ['tie'];
        case 'paper':
          return ['lose', 'rock', 'paper'];
        case 'scissors':
          return ['win', 'rock', 'scissors'];
      }
    case 'paper':
      switch (computerSelection) {
        case 'rock':
          return ['win', 'paper', 'rock'];
        case 'paper':
          return ['tie'];
        case 'scissors':
          return ['lose', 'paper', 'scissors'];
      }
    case 'scissors':
      switch (computerSelection) {
        case 'rock':
          return ['loss', 'scissors', 'rock'];
        case 'paper':
          return ['win', 'scissors', 'paper'];
        case 'scissors':
          return ['tie'];
      }
  }
}

function game(roundData) {
  let roundResult;

  switch (roundData[0]) {
    case 'win':
      roundResult = getResult(roundData);
      playerScore++;
      break;
    case 'lose':
      roundResult = getResult(roundData);
      computerScore++;
      break;
    case 'tie':
      roundResult = `Tie. Try again`;
      break;
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
