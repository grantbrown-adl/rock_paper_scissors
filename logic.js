function computerPlay() 
{
    let min = 1;
    let max = 3;

    switch (Math.floor(Math.random() * (max - min + 1)) + min) 
    {
        case 1:
            return "ROCK";
        case 2:
            return "PAPER";
        case 3:
            return "SCISSORS";
    }
}

function playRound(playerSelection, computerSelection) 
{
    if (playerSelection == computerSelection)
        return "Draw!";
    else if (playerSelection == "ROCK") 
    {
        if (computerSelection == "PAPER")
            return "You Lose! " + computerSelection + " covers " + playerSelection;
        else
            return "You Win! " + playerSelection + " breaks " + computerSelection;
    }
    else if (playerSelection == "PAPER") 
    {
        if (computerSelection == "Rock")
            return "You Lose! " + computerSelection + " breaks " + playerSelection;
        else
            return "You Win! " + playerSelection + " covers " + computerSelection;
    }
    else if (playerSelection == "SCISSORS") 
    {
        if (computerSelection == "ROCK")
            return "You Lose! " + computerSelection + " breaks " + playerSelection;
        else
            return "You Win! " + playerSelection + " cuts " + computerSelection;
    }
}

function playGame() 
{
    for (let i = 0; i < 5; i++) 
    {
    let playerChoice = "RoCk";
    playerChoice = playerChoice.toUpperCase();
    let computerChoice = computerPlay();

    console.log("Game " + i + 1 + ": " + playRound(playerChoice, computerChoice));
    }
}
playGame();

