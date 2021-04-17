// const axios = require('axios').default;
const BASE_URL = "http://localhost:3000";
const USER_URL = `${BASE_URL}/users`;
const BALANCE_URL = `${BASE_URL}/balances`;
const LEADERBOARD_URL = `${BASE_URL}/leaderboard`;
const signInForm = document.querySelector('.signin-form')
const signInButton = document.querySelector('#signup-submit')
const welcomeMessage = document.querySelector('#welcome-message')
const username = document.getElementById('username')


// Question class
class Questions {
    constructor(content, answer) {
        this.content = content;
        this.answer = answer
    }
}

// Questions
let city = new Questions("What is the most populated city in the world?", "Tokyo");
let moose = new Questions("Which animal is the largest member of the deer family?", "Moose");
let strawberry = new Questions("What is the only fruit that bears it's seeds on the outside?", "Strawberry");
let europe = new Questions("Which continent is the only one without desserts?", "Europe");
let eyeballs = new Questions("Which human body part stays the same size from birth", "Eyeballs");
let feet = new Questions("Which body part do butterflies use to taste?", "Feet");
let finland = new Questions("Which country is known as the Land of the Lakes?", "Finland");
let india = new Questions("Which country is the leading producer of bananas?", "India");
let athena = new Questions("Which Greek Goddess is the Goddess of Wisdom?", "Athena");
let kobe = new Questions("Who was the famous basketball player who earned the nickname The Black Mamba?", "Kobe Bryant");

// sign in button

signInButton.addEventListener('click', function(e) {
    signIn(e);
    // e.preventDefault();
    // console.log(e.target.value);
})

// sign in function

function signIn(e) {
    e.preventDefault();
    

    const signInUsername = document.querySelector('#signup-username').value;

    let formData = {
        username: signInUsername
    }

    let configObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }

    fetch(USER_URL, configObj)
    .then(resp => resp.json())
    .then(json => {
        loggedIn(json);
    
    })
    .catch(function(error) {
        alert("Fetch response did not succeed");
    })

}

const headerTitle = document.querySelector('.header-title');

function loggedIn(user) {
    if (user) {
        currentUser = user;
        signInForm.style.display = 'none'
        welcomeMessage.style.display = 'block'
        headerTitle.innerHTML = `<h1>Welcome, ${currentUser.username}!</h1>`
    } else { 
        signInForm.style.display = 'block'
        welcomeMessage.style.display = 'none'
    }
}

// Shuffle Question Array 

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

// Failure Screen

function failureScreen() {
    let failure = document.querySelector('#failure');
    failure.style.display = 'block';
    let playAgain = document.querySelector('#play');
    let leaveGame = document.querySelector('#done');

    playAgain.addEventListener('click', (e) => {
        e.preventDefault();
        displayGame();
    })

    // leaveGame.addEventListener('click', (e) => {
    //     e.preventDefault();

    // })
}

// Game Function

let q1 = document.querySelector('#question-1');
let q2 = document.querySelector('#question-2');
let q3 = document.querySelector('#question-3');
let q4 = document.querySelector('#question-4');
let q5 = document.querySelector('#question-5');
let q6 = document.querySelector('#question-6');
let q7 = document.querySelector('#question-7');
let q8 = document.querySelector('#question-8');
let q9 = document.querySelector('#question-9');
let q10 = document.querySelector('#question-10');

let score = 0;

let qq1 = document.querySelector('#question-content-1');
let qq2 = document.querySelector('#question-content-2');
let qq3 = document.querySelector('#question-content-3');
let qq4 = document.querySelector('#question-content-4');
let qq5 = document.querySelector('#question-content-5');
let qq6 = document.querySelector('#question-content-6');
let qq7 = document.querySelector('#question-content-7');
let qq8 = document.querySelector('#question-content-8');
let qq9 = document.querySelector('#question-content-9');
let qq10 = document.querySelector('#question-content-10');

// Game button
const gameBtn = document.querySelector('#start-game');

// Declaring questions
const questions = [city, moose, strawberry, europe, eyeballs, feet, finland, india, athena, kobe];
shuffleArray(questions);

gameBtn.addEventListener('click', function(e) {
    e.preventDefault();
    displayGame();
})

function displayGame() {
    const game = document.querySelector('#game');
    headerTitle.style.display = 'none';
    welcomeMessage.style.display = 'none';
    game.style.display = 'block';
    display1();
}

function display1() {
    q1.style.display = 'block'
    let content = questions[0].content;
    console.log(content);
    qq1.textContent = content;
    let input = document.querySelector('#answer-1');
    for (i = 1; i <= 10; i++) {
        if (i === 1) { continue; }
        let q = document.querySelector(`#question-${i}`);
        q.style.display = 'none';
    }

    let btn = document.querySelector('#answer-button');
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (input.value === questions[0].answer) {
            score = 100000;
            balance.textContent = score;
            display2();
        } else {
            failureScreen();
        }
    })

}

function display2() {
    q2.style.display = 'block'
    let input = document.querySelector('#answer');
    for (i = 1; i <= 10; i++) {
        if (i === 2) { continue; }
        let q = document.querySelector(`#question-${i}`);
        q.style.display = 'none';
    }
}

function display3() {
    q3.style.display = 'block'
    let input = document.querySelector('#answer');
    for (i = 1; i <= 10; i++) {
        if (i === 3) { continue; }
        let q = document.querySelector(`#question-${i}`);
        q.style.display = 'none';
    }
}

function display4() {
    q4.style.display = 'block'
    let input = document.querySelector('#answer');
    for (i = 2; i <= 10; i++) {
        if (i === 4) { continue; }
        let q = document.querySelector(`#question-${i}`);
        q.style.display = 'none';
    }
}

function display5() {
    q5.style.display = 'block'
    let input = document.querySelector('#answer');
    for (i = 1; i <= 10; i++) {
        if (i === 5) { continue; }
        let q = document.querySelector(`#question-${i}`);
        q.style.display = 'none';    
        }
}

function display6() {
    q6.style.display = 'block'
    let input = document.querySelector('#answer');
    for (i = 1; i <= 10; i++) {
        if (i === 6) { continue; }
        let q = document.querySelector(`#question-${i}`);
        q.style.display = 'none';
    }
}

function display7() {
    q7.style.display = 'block'
    let input = document.querySelector('#answer');
    for (i = 2; i <= 10; i++) {
        if (i === 7) { continue; }
        let q = document.querySelector(`#question-${i}`);
        q.style.display = 'none';
    }
}

function display8() {
    q8.style.display = 'block'
    let input = document.querySelector('#answer');
    for (i = 1; i <= 10; i++) {
        if (i === 8) { continue; }
        let q = document.querySelector(`#question-${i}`);
        q.style.display = 'none';
    }
}

function display9() {
    q9.style.display = 'block'
    let input = document.querySelector('#answer');
    for (i = 1; i <= 10; i++) {
        if (i === 9) { continue; }
        let q = document.querySelector(`#question-${i}`);
        q.style.display = 'none';
    }
}

function display10() {
    q10.style.display = 'block'
    let input = document.querySelector('#answer');
    for (i = 1; i <= 10; i++) {
        if (i === 10) { continue; }
        let q = document.querySelector(`#question-${i}`);
        q.style.display = 'none';
    }
}

let balance = document.querySelector('#balance')

// Start Game

// function startGame() {
//     displayGame();
//     const questions = [city, moose, strawberry, europe, eyeballs, feet, finland, india, athena, kobe];
//     shuffleArray(questions);
//     qq1.textContent = questions[0].content;
//     display1();
//     qq1.innerText = questions[0].content;
//     let answer = document.querySelector('#answer-button');
//     answer.addEventListener('click', (e) => {
//         e.preventDefault();
//         if (input === questions[0].answer) {
//             score += 100000;
//             balance.textContent = score;
//             display2();
//         }
//     })

// }
















// let city = new Questions("What is the most populated city in the world?", "Tokyo");
// let moose = new Questions("Which animal is the largest member of the deer family?", "Moose");
// let strawberry = new Questions("What is the only fruit that bears it's seeds on the outside?", "Strawberry");
// let europe = new Questions("Which continent is the only one without desserts?", "Europe");
// let eyeballs = new Questions("Which human body part stays the same size from birth", "Eyeballs");
// let feet = new Questions("Which body part do butterflies use to taste?", "Feet");
// let finland = new Questions("Which country is known as the Land of the Lakes?", "Finland");
// let india = new Questions("Which country is the leading producer of bananas?", "India");
// let athena = new Questions("Which Greek Goddess is the Goddess of Wisdom?", "Athena");
// let kobe = new Questions("Who was the famous basketball player who earned the nickname The Black Mamba?", "Kobe Bryant");
// let ringo = new Questions("Which former Beatle narrated the TV adventures of Thomas the Tank Engine?", "Ringo Starr");
// let anchorage = new Questions("Which is the largest city in the USA's largest state?", "Anchorage");




// const BACKEND_URL = 'localhost:3001';

// fetch(`${BACKEND_URL}/test`)
// .then(response => response.json())
// .then(parsedResponse => console.log(parsedResponse));

// function displayNum(num) {
//     let que = document.querySelector(`#question-${num}`);
//     que.style.display = 'block';
//     for (i = 1; i <= 10; i++) {
//         if (i === num) { continue; }
//         let other = document.querySelector(`#question-${i}`);
//         other.style.display = 'none';
//     }
// }