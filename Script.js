// Also, need to add a delay before choice and need to loop to continue to 5.
// Finnally, need to account for typos in user input/prompt. 
let computerSelection;
let playerChoice;

function computerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  computerSelection = choices[Math.floor(Math.random() * 3)];
  alert("Computer's choice: " + computerSelection);
}

function getPlayerChoice() {
  playerChoice = prompt('Rock, Paper, or Scissors?');
  alert("Player's choice: " + playerChoice);
}

function gameScore() {
  if (playerChoice === computerSelection) {
    alert('It\'s a tie! Let\'s play again.');
  } else if (
    (playerChoice === 'Rock' && computerSelection === 'Scissors') ||
    (playerChoice === 'Paper' && computerSelection === 'Rock') ||
    (playerChoice === 'Scissors' && computerSelection === 'Paper')
  ) {
    alert('You win this round!');
    playerScore++;
  } else {
    alert('You lost this round!');
    computerScore++;
  }
  
  alert('Your score: ' + playerScore + ' Computer score: ' + computerScore);

  if (playerScore === 3) {
    alert('You win the game of best out of 5!');
  } else if (computerScore === 3) {
    alert('You lose the game of best out of 5!');
  } else {
    getPlayerChoice();
    computerChoice();
    gameScore();
  }
}

let playerScore = 0;
let computerScore = 0;

getPlayerChoice();
computerChoice();
gameScore();
