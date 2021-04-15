// const axios = require('axios').default;
const BASE_URL = "http://localhost:3000";
const USER_URL = `${BASE_URL}/users`;
const BALANCE_URL = `${BASE_URL}/balances`;
const LEADERBOARD_URL = `${BASE_URL}/leaderboard`;
const signInForm = document.querySelector('.signin-form')
const signInButton = document.querySelector('#signup-submit')
const welcomeMessage = document.querySelector('#welcome-message')
const username = document.getElementById('username')


class Questions {
    constructor(content, answer) {
        this.content = content;
        this.answer = answer
    }
}


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

const gameBtn = document.querySelector('#start-game');

gameBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const questions = [city, moose, strawberry, europe, eyeballs, feet, finland, india, athena, kobe];
    startGame(questions);
})

// Shuffle Question Array 

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

// Game Function

// function display9() {
//     q1.style.display = 'block'
//     for (i = 1; i < 10; i++) {
//         if (i === 9) { continue; }
//         let q = document.querySelector(`#question-${i}`);
//         q.style.display = 'none';
//     }
// }


let balance = document.querySelector('#balance')

function displayGame() {
    const game = document.querySelector('#game');
    headerTitle.style.display = 'none';
    welcomeMessage.style.display = 'none';
    game.style.display = 'block';
}

function displayNum(num) {
    let que = document.querySelector(`#question-${num}`);
    que.style.display = 'block';
    for (i = 1; i <= 10; i++) {
        if (i === num) { continue; }
        let other = document.querySelector(`#question-${i}`);
        other.style.display = 'none';
    }
}

function startGame(questions) {
    displayGame();
    shuffleArray(questions);
    for (i = 1; i <= 10; i++) {
        displayNum(i);
        let q = document.querySelector(`#question-content-${i}`);
        q.innerText = questions[i].content;
        let input = document.querySelector('#answer')
        let answerBtn = document.querySelector('#answer-button');
        answerBtn.addEventListener('click', (e) => {
            e.preventDefault();
            balance.value += 100000
            // if (input.value === questions[i].answer) {
            //     balance.value += 100,000
            // }
        })
    }
}



























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
// let ringo = new Questions("Which former Beatle narrated the TV adventures of Thomas the Tank Engine?", "Ringo Starr");
// let anchorage = new Questions("Which is the largest city in the USA's largest state?", "Anchorage");




// const BACKEND_URL = 'localhost:3001';

// fetch(`${BACKEND_URL}/test`)
// .then(response => response.json())
// .then(parsedResponse => console.log(parsedResponse));