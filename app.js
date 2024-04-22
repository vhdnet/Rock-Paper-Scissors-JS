const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

const checkWinner = (Player, Computer) => {
  if (Player === Computer) {
    return "draw";
  } else if (Player === "rock") {
    return Computer === "scissors" ? "Player" : "Computer";
  } else if (Player === "paper") {
    return Computer === "rock" ? "Player" : "Computer";
  } else {
    return Computer === "paper" ? "Player" : "Computer";
  }
};

const showResult = (result) => {
  if (result === "Player") {
    console.log("You Win");
    playerScore++;
  } else if (result === "Computer") {
    console.log("You Lost");
    computerScore++;
  } else {
    console.log("It's a tie");
  }

  console.log(`Your score: ${playerScore}`);
  console.log(`Computer's score score: ${computerScore}`);
  console.log("....................");
};

const play = () => {
  const playerChoice = prompt(" Choose rock, paper, scissors");
  if (choices.indexOf(playerChoice?.toLowerCase()) !== -1) {
    console.log(`You choose ${playerChoice}`);
  } else {
    console.log("You cheated!");
    return;
  }

  const randomNumber = Math.floor(Math.random() * choices.length);
  const computerChoise = choices[randomNumber];
  console.log(`Computer chooses ${computerChoise}`);

  const gameResult = checkWinner(playerChoice, computerChoise);
  showResult(gameResult);

  if (playerScore === 3) {
    console.log("Player Wins The Game");
  } else if (computerScore === 3) {
    console.log("Computer Wins The Game");
  } else {
    play();
  }
};

play();
