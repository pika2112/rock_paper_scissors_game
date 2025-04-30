// Step 2: Get the computer's choice
function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 1 / 3) {
      return "rock";
    } else if (randomNumber < 2 / 3) {
      return "paper";
    } else {
      return "scissors";
    }
  }
  
  // Step 3: Get the human's choice
  function getHumanChoice() {
    const userInput = prompt("Enter rock, paper, or scissors:");
    return userInput.toLowerCase(); // Make input case-insensitive
  }
  
  // Step 6: Full game logic including Step 4 and Step 5
  function playGame() {
    let humanScore = 0;
    let computerScore = 0;
  
    function playRound(humanChoice, computerChoice) {
      const human = humanChoice.toLowerCase(); // Just in case
      const computer = computerChoice;
  
      if (human === computer) {
        console.log(`It's a tie! Both chose ${human}`);
      } else if (
        (human === "rock" && computer === "scissors") ||
        (human === "paper" && computer === "rock") ||
        (human === "scissors" && computer === "paper")
      ) {
        humanScore++;
        console.log(`You win! ${human} beats ${computer}`);
      } else {
        computerScore++;
        console.log(`You lose! ${computer} beats ${human}`);
      }
    }
  
    // Play 5 rounds
    for (let i = 1; i <= 5; i++) {
      console.log(`\nRound ${i}`);
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice();
      playRound(humanSelection, computerSelection);
    }
  
    // Declare final winner
    console.log(`\nFinal Score - You: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
      console.log("🎉 You won the game!");
    } else if (computerScore > humanScore) {
      console.log("💻 Computer won the game!");
    } else {
      console.log("🤝 It's a tie game!");
    }
  }
  
  // Start the game
  playGame();
  