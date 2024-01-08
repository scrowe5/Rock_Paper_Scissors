// Need to add display of players choice and computers choice before 
// displaying the winner.
// Also, need to add a delay before choice and need to loop to continue to 5.
// Finnally, need to account for typos in user input/prompt. 
let playerSelection;
let computerSelection;
let getComputerChoice;

function computerChoice() {
  let getComputerChoice = ['Rock', 'Paper', 'Scissors'];
  computerSelection = getComputerChoice[Math.floor(Math.random() * 3)];
}

function playerChoice() {
  playerSelection = prompt('Rock, Paper, or Scissors?');
  alert(computerSelection);
}

let playerScore = 0;
let computerScore = 0;

computerChoice();
playerChoice();
gameScore();

function gameScore() {
  if (playerSelection === computerSelection) {
    alert('It\'s a tie! Let\'s play again.');
    playerSelection();
    computerChoice();
  } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    alert('You win! Rock beats Scissors.');
    playerScore++;
    alert('Your score: ' + playerScore + ' Computer score: ' + computerScore);
    playerSelection();
    computerChoice();
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    alert('You win! Paper beats Rock.');
    playerScore++;
    alert('Your score: ' + playerScore + ' Computer score: ' + computerScore);
    playerSelection();
    computerChoice();
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    alert('You win! Scissors beats Paper.');
    playerScore++;
    alert('Your score: ' + playerScore + ' Computer score: ' + computerScore);
    playerSelection();
    computerChoice();
  } else if (computerSelection === 'Rock' && playerSelection === 'Scissors') {
    alert('You lost! Rock beats Scissors.');
    computerScore++;
    alert('Your score: ' + playerScore + ' Computer score: ' + computerScore);
    playerSelection();
    computerChoice();
  } else if (computerSelection === 'Paper' && playerSelection === 'Rock') {
    computerScore++;
    alert('You lost! Paper beats Rock.');
    alert('Your score: ' + playerScore + ' Computer score: ' + computerScore);
    playerSelection();
    computerChoice();
  } else if (computerSelection === 'Scissors' && playerSelection === 'Paper') {
    computerScore++;
    alert('You lost! Scissors beats Paper.');
    alert('Your score: ' + playerScore + ' Computer score: ' + computerScore);
    playerSelection();
    computerChoice();
  }

  if (playerScore === 3) {
    alert('You win the game of best out of 5!');
  } else if (computerScore === 3) {
    alert('You lose the game of best ouf of 5!');
  }
}