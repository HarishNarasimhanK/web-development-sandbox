const choices=["rock" , "paper" , "scissor"];
const playerDisplay=document.getElementById("playerDisplay");
const computerDisplay=document.getElementById("computerDisplay");
const resultDisplay=document.getElementById("resultDisplay");
const scoreDisplay=document.getElementById("scoreDisplay");

let playerPts=0;
let computerPts=0;

function reset(){
    playerPts=0;
    computerPts=0;
    resultDisplay.textContent="START";
    scoreDisplay.textContent=`${playerPts}:${computerPts}`;
    resultDisplay.classList.remove("greenText","redText");

}


function playGame(playerChoice)
{
    
    const computerChoice=choices[Math.floor(Math.random()*3)];
    let result="";
    
    if(playerPts<10 && computerPts<10){
        resultDisplay.style.visibility="hidden";
        if(playerChoice===computerChoice){
            result="";
        }
        else{
            switch(playerChoice){
                case "rock":
                    result= (computerChoice ==="paper") ? (computerPts++) : (playerPts++);
                    break;
                case "paper":
                    result= (computerChoice ==="scissor") ? (computerPts++) : (playerPts++);
                    break;
                case "scissor":
                    result= (computerChoice ==="rock") ? (computerPts++) : (playerPts++);
                    break;
            }
            scoreDisplay.textContent=`${playerPts}:${computerPts}`;
        }
        playerDisplay.textContent=`PLAYER: ${playerChoice}`;
        computerDisplay.textContent=`COMPUTER: ${computerChoice}`;


        if(playerPts===10 || computerPts===10){
            resultDisplay.style.visibility="visible";
            result= (playerPts===10)?"PLAYER WINS":"COMPUTER WINS";

            resultDisplay.textContent=result;

            resultDisplay.classList.remove("greenText","redText");

            if(result=="PLAYER WINS"){
                resultDisplay.classList.toggle("greenText");
            }
            else if(result=="COMPUTER WINS"){
                resultDisplay.classList.toggle("redText");
            }
        }
    }
}

