let userScore = 0;
let compScore = 0;

const userScorePara = document.getElementById("user-score");
const compScorePara = document.getElementById("comp-score");

const restart =document.querySelector("#restart");

const images = document.querySelectorAll(".choice img");

const theme1 = document.getElementById('theme1');
const theme2 = document.getElementById('theme2');

theme1.addEventListener('click', () => {
    images.forEach((img) => {
        const currentSrc = img.getAttribute('src');
        if (currentSrc.includes('rock1.png')) {
            img.setAttribute('src', './images/rock.png');
        } else if (currentSrc.includes('scissors1.png')) {
            img.setAttribute('src', './images/scissors.png');
        } else if (currentSrc.includes('paper1.png')) {
            img.setAttribute('src', './images/paper.png');
        }
    });
});



theme2.addEventListener('click', () => {
    images.forEach((img) => {
        const currentSrc = img.getAttribute('src');
        if (currentSrc.includes('rock.png') && !currentSrc.includes('rock1.png')) {
            img.setAttribute('src', './images/rock1.png');
        } else if (currentSrc.includes('scissors.png') && !currentSrc.includes('scissors1.png')) {
            img.setAttribute('src', './images/scissors1.png');
        } else if (currentSrc.includes('paper.png') && !currentSrc.includes('paper1.png')) {
            img.setAttribute('src', './images/paper1.png');
        }
    });
});

restart.addEventListener('click', () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    msg.innerText = "Let's play again!";
    msg.style.backgroundColor = "black";
})



const choices = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");

const getCompChoice = () => {
    const compOptions = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * 3);
    return compOptions[randomChoice];
}

const showWinner = (userWin, user, comp) => {
    if (userWin) {
        console.log("You win");
        msg.innerText = "You win! " + user + " beats " + comp;
        userScore++;
        userScorePara.innerText = userScore;
        msg.style.backgroundColor = "green";
    }
    else {
        console.log("Computer wins");
        msg.innerText = "Computer wins! " + comp + " beats your " + user;
        compScore++;
        compScorePara.innerText = compScore;
        msg.style.backgroundColor = "red";
    }

}

const drawGame = () => {
    // console.log("It's a draw");
    msg.innerText = "It's a draw";
    msg.style.backgroundColor = "gray";
}


const checkStatus = (user, comp) => {
    if (user === comp) {
        drawGame();
        return;
    } else {
        let userWin = true;
        if (user === 'rock') {
            userWin = (comp === 'paper') ? false : true;
        } else if (user === 'paper') {
            userWin = (comp === 'scissors') ? false : true;
        } else {
            userWin = (comp === 'rock') ? false : true;
        }
        showWinner(userWin, user, comp);
    }
}




const playGame = (userChoice) => {

    console.log("User choice is", userChoice);

    const compChoice = getCompChoice();
    console.log("Computer choice is", compChoice);

    checkStatus(userChoice, compChoice);
    // Generate computer choice
}


choices.forEach((choice) => {

    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    })

})