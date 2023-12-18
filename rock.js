let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorButton = document.getElementById("scissor");
let resultElement = document.getElementById("result");
let exitbutton = document.getElementById("exit");
let scoreButton = document.getElementById("score");

let totalScore = {computerScore:'0' , humanScore:'0'};

rockButton.addEventListener("click", () => playGame("rock"));
paperButton.addEventListener("click", () => playGame("paper"));
scissorButton.addEventListener("click", () => playGame("scissor"));
exitbutton.addEventListener("click", () => endgame());

function playGame(userChoice) {
    const choices = ["rock", "paper", "scissor"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const result = determineWinner(userChoice, computerChoice);
    resultElement.textContent = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
  }

  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (userChoice === "rock" && computerChoice === "scissor") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissor" && computerChoice === "paper")
    ) {
      return "You win!";

    } else {
      return "Computer wins!";
    }
  }
  function endgame(){
    exitbutton.textContent = `The game has been ended`;

  }
  function score(result){
    let sc = {'human':'0', 'computer':'0'};
    if(result=="You win!"){
      sc.human+=1;

    }
    else{
      sc.computer+=1;
    }
    return sc;
  }
  function showScore(){
    let sc1 = score(result);
    scoreButton.textContent = 'Computer wins: ${sc1.computer} , Human win: ${sc1.human}';


  }
