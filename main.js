let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score"); //använder "_" för att särskilja variabler och html-variabler
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
let userName_span = document.getElementById('name');
let welcomeUser = document.getElementById('welcome');





function callMe() {
    let name = document.getElementById('userInput').value;
    sessionStorage.setItem('userName', name);
    

}

window.onload = function() {
    document.getElementById('user-lable').innerText = sessionStorage.getItem('userName');
    document.getElementById('welcome').innerText = 'Welcome ' +  sessionStorage.getItem('userName' ) + '!';
    

}


//function that gives you a random number between 0-3, is then applied to the array and gives you 'r', 'p' or 's'.
function getComupterChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]
} 

function convertToWord(letter) {
    if (letter === 'r') return "Rock";
    if (letter === 'p') return "Paper";
    return "Scissors";

}

// function that makes user score go up when 'you' win
function win(userChoice, computerChoice) {
    userScore++;

    userScore_span.innerHTML = userScore; //ändrar poängsiffran på hemsidan
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = sessionStorage.getItem('userName').fontsize(2).sub();
    const smallCompWord = 'Comp'.fontsize(2).sub();

    result_p.innerHTML = convertToWord(userChoice)+ smallUserWord + " beats " + convertToWord(computerChoice)+ smallCompWord + ". You win!"
   
    console.log("win")
}

    // function that makes computer score go up when 'you' lose 
function lose(userChoice, computerChoice) {
    computerScore++;

    userScore_span.innerHTML = userScore; //ändrar poängsiffran på hemsidan
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = sessionStorage.getItem('userName').fontsize(2).sub();
    const smallCompWord = 'Comp'.fontsize(2).sub();

    result_p.innerHTML = convertToWord(userChoice)+ smallUserWord + " loses to " + convertToWord(computerChoice)+ smallCompWord + ". You lose!"
   
    console.log("lose")
}
function draw(userChoice, computerChoice) {

    const smallUserWord = sessionStorage.getItem('userName').fontsize(2).sub();
    const smallCompWord = 'Comp'.fontsize(2).sub();

    result_p.innerHTML = convertToWord(userChoice)+ smallUserWord + " equals " + convertToWord(computerChoice)+ smallCompWord + ". It's a draw!"
    console.log("draw")
}



//contains the logic behind all the moves that are possible
function game(userChoice) {
    const computerChoice = getComupterChoice();
    
    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp': 
        console.log("USER WINS.");
        win(userChoice, computerChoice);
        break;
        case 'rp':
        case 'ps':
        case 'sr':
        console.log("USER LOSES.");
        lose(userChoice, computerChoice);
        break;
        case 'rr':
        case 'pp':
        case 'sp':
        console.log("IT'S A DRAW.");
        draw(userChoice, computerChoice);
        
    }

}


function main() {
    rock_div.addEventListener('click', function() {
        game('r');
        
    })
    paper_div.addEventListener('click', function() {
        game('p');
        
    })
    scissors_div.addEventListener('click', function() {
        game('s');
        
    })


}
main();







