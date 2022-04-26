function computerPlay() 
{
    let min = 1;
    let max = 3;    

    switch(Math.floor(Math.random() * (max - min + 1)) + min)
    {
        case 1:
            return "ROCK";            
        case 2:
            return "PAPER";            
        case 3:
            return "SCISSORS";                       
    }
}