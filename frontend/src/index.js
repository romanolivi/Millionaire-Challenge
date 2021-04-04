const BASE_URL = "http://localhost:3000"
const USER_URL = `${BASE_URL}/users`
const BALANCE_URL = `${BASE_URL}/balances`
const LEADERBOARD_URL = `${BASE_URL}/leaderboard`
const signInForm = document.querySelector('.signin-form')
const welcomeMessage = document.querySelector('#welcome-message')
const username = document.getElementById('username')
let signedIn = false 

class Questions {
    constructor(content, answer) {
        this.content = content;
        this.answer = answer
    }
}


signInForm.addEventListener('submit', function(e) {
    e.preventDefault()
    fetch(USER_URL, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(username)
    })
    .then(resp => resp.json())
    .then(obj => {
        loggedIn(obj);
    })
})

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
    const questions = [city, moose, strawberry, europe, eyeballs, feet, finland, india, athena, kobe, ringo, anchorage];
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

function startGame(questions) {
    shuffleArray(questions)
    for (i = 0; i < 9; i++) {
        
    }
}

function renderQuestion(question) {
    let h2 = document.createElement('h2')
    h2.innerText = question.content

    
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
let ringo = new Questions("Which former Beatle narrated the TV adventures of Thomas the Tank Engine?", "Ringo Starr");
let anchorage = new Questions("Which is the largest city in the USA's largest state?", "Anchorage");




// const BACKEND_URL = 'localhost:3001';

// fetch(`${BACKEND_URL}/test`)
// .then(response => response.json())
// .then(parsedResponse => console.log(parsedResponse));