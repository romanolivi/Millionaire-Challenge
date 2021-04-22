const BASE_URL = "http://localhost:3000";
const USERS_URL = `${BASE_URL}/users`;
const BALANCE_URL = `${BASE_URL}/balances`;
const LEADERBOARD_URL = `${BASE_URL}/leaderboards`;
const signInForm = document.querySelector('.signin-form')
const signInButton = document.querySelector('#signup-submit')
const welcomeMessage = document.querySelector('#welcome-message')
const leaderBtn = document.querySelector('#leader-btn');
let b = document.querySelector('#balance');

let leaderboardButton = document.querySelector('#leaderboard-btn');
let leaderboard = document.querySelector('.leaderboard');

let leaveBtn = document.querySelector('.leave');

// Game button
const gameBtn = document.querySelector('#start-game');

// Question class
class Questions {
    constructor(content, answer) {
        this.content = content;
        this.answer = answer
    }
}

// Header Image 





// Leaderboard button

leaderboardButton.addEventListener('click', (e) => {
    e.preventDefault();
    updateBoard();
    game.style.display = 'none'
    leaderboard.style.display = 'block'
    signInForm.style.display = 'none'
    leaderBtn.style.display = 'none'
    welcomeMessage.style.display = 'none'
    winLayout.style.display = 'none'
    homeImage.style.display = 'none'
})

// Leaderboard after winning 
// let lb2 = document.querySelector('#leaderboard-btn-2');
// lb2.addEventListener('click', (e) => {
//     e.preventDefault();
//     updateBoard();
//     game.style.display = 'none'
//     leaderboard.style.display = 'block'
//     signInForm.style.display = 'none'
//     leaderBtn.style.display = 'none'
//     welcomeMessage.style.display = 'none'
//     winLayout.style.display = 'none'
//     homeImage.style.display = 'none'
// })

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
let ringo = new Questions("Which former Beatle narrated the TV adventures of Thomas the Tank Engine?", "Ringo Starr");
let anchorage = new Questions("Which is the largest city in the USA's largest state?", "Anchorage");






// sign in button

signInButton.addEventListener('click', function(e) { 
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

    fetch(USERS_URL, configObj)
    .then(resp => resp.json())
    .then(json => {
        loggedIn(json);
    })
    .catch(function(error) {
        alert("Fetch response did not succeed");
    })

})

// sign in function

let homeImage = document.querySelector('#home-image');
const headerTitle = document.querySelector('.header-title');
let currentUser;

function loggedIn(user) {
    if (user) {
        currentUser = user;
        signInForm.style.display = 'none'
        homeImage.style.display = 'none'
        leaderBtn.style.display = 'none'
        welcomeMessage.style.display = 'block'
        headerTitle.innerHTML = `<h1>Hello, ${currentUser.username}!</h1>`
    } else { 
        signInForm.style.display = 'block'
        leaderBtn.style.display = 'block'
        welcomeMessage.style.display = 'none'
    }
}

gameBtn.addEventListener('click', function(e) {
    e.preventDefault();
    displayGame();
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

// Failure Screen

function failureScreen() {
    let failure = document.querySelector('#failure');
    failure.style.display = 'block';
    let playAgain = document.querySelector('#play');
    let leaveGame = document.querySelector('#done');
    leaveBtn.style.display = 'none';
    for (let i = 1; i <= 10; i++) {
        let q = document.querySelector(`#question-${i}`);
        q.style.display = 'none';
    }

    playAgain.addEventListener('click', (e) => {
        e.preventDefault();
        failure.style.display = 'none';
        leaveBtn.style.display = 'block';
        shuffleArray(questions)
        display1();
    })

    leaveGame.addEventListener('click', (e) => {
        location.reload();
    })
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



// Declaring questions
const questions = [city, moose, strawberry, europe, eyeballs, feet, finland, india, athena, kobe, ringo, anchorage];
const game = document.querySelector('#game');


function displayGame() {
    headerTitle.style.display = 'none';
    welcomeMessage.style.display = 'none';
    game.style.display = 'block';
    display1();
}


function display1() {
    console.log(score)
    q1.style.display = 'block'
    let content = questions[0].content;
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
        if (input.value.toLowerCase() === questions[0].answer.toLowerCase()) {
            score = 100000;
            b.textContent = score;
            display2();
        } else {
            score = 0 ;
            b.textContent = score;
            failureScreen();
        }
    })

}

function display2() {
    console.log(score)
    q2.style.display = 'block'
    let content = questions[1].content;
    console.log(content);
    qq2.textContent = content;
    let input = document.querySelector('#answer-2');
    for (i = 1; i <= 10; i++) {
        if (i === 2) { continue; }
        let q = document.querySelector(`#question-${i}`);
        q.style.display = 'none';
    }

    let btn2 = document.querySelector('#answer-button-2');
    btn2.addEventListener('click', (e) => {
        e.preventDefault();
        if (input.value.toLowerCase() === questions[1].answer.toLowerCase()) {
            score = 200000;
            b.textContent = score;
            display3();
        } else {
            score = 0;
            b.textContent = score;
            failureScreen();
        }
    })

}

function display3() {
    console.log(score)
    q3.style.display = 'block'
    let content = questions[2].content;
    console.log(content);
    qq3.textContent = content;
    let input = document.querySelector('#answer-3');
    for (i = 1; i <= 10; i++) {
        if (i === 3) { continue; }
        let q = document.querySelector(`#question-${i}`);
        q.style.display = 'none';
    }

    let btn3 = document.querySelector('#answer-button-3');
    btn3.addEventListener('click', (e) => {
        e.preventDefault();
        if (input.value.toLowerCase() === questions[2].answer.toLowerCase()) {
            score = 300000;
            b.textContent = score;
            display4();
        } else {
            score = 0;
            b.textContent = score;
            failureScreen();
        }
    })

}

function display4() {
    console.log(score)
    q4.style.display = 'block'
    let content = questions[3].content;
    console.log(content);
    qq4.textContent = content;
    let input = document.querySelector('#answer-4');
    for (i = 1; i <= 10; i++) {
        if (i === 4) { continue; }
        let q = document.querySelector(`#question-${i}`);
        q.style.display = 'none';
        
    }

    let btn4 = document.querySelector('#answer-button-4');
    btn4.addEventListener('click', (e) => {
        e.preventDefault();
        if (input.value.toLowerCase() === questions[3].answer.toLowerCase()) {
            score = 400000;
            b.textContent = score;
            display5();
        } else {
            score = 0;
            b.textContent = score;
            failureScreen();
        }
    })

}

function display5() {
    q5.style.display = 'block'
    let content = questions[4].content;
    console.log(content);
    qq5.textContent = content;
    let input = document.querySelector('#answer-5');
    for (i = 1; i <= 10; i++) {
        if (i === 5) { continue; }
        let q = document.querySelector(`#question-${i}`);
        q.style.display = 'none';
    }

    let btn5 = document.querySelector('#answer-button-5');
    btn5.addEventListener('click', (e) => {
        e.preventDefault();
        if (input.value.toLowerCase() === questions[4].answer.toLowerCase()) {
            score = 500000;
            b.textContent = score;
            display6();
        } else {
            score = 0;
            b.textContent = score;
            failureScreen();
        }
    })

}

function display6() {
    q6.style.display = 'block'
    let content = questions[5].content;
    console.log(content);
    qq6.textContent = content;
    let input = document.querySelector('#answer-6');
    for (i = 1; i <= 10; i++) {
        if (i === 6) { continue; }
        let q = document.querySelector(`#question-${i}`);
        q.style.display = 'none';
    }

    let btn6 = document.querySelector('#answer-button-6');
    btn6.addEventListener('click', (e) => {
        e.preventDefault();
        if (input.value.toLowerCase() === questions[5].answer.toLowerCase()) {
            score = 600000;
            b.textContent = score;
            display7();
        } else {
            score = 0;
            b.textContent = score;
            failureScreen();
        }
    })

}

function display7() {
    q7.style.display = 'block'
    let content = questions[6].content;
    console.log(content);
    qq7.textContent = content;
    let input = document.querySelector('#answer-7');
    for (i = 1; i <= 10; i++) {
        if (i === 7) { continue; }
        let q = document.querySelector(`#question-${i}`);
        q.style.display = 'none';
    }

    let btn7 = document.querySelector('#answer-button-7');
    btn7.addEventListener('click', (e) => {
        e.preventDefault();
        if (input.value.toLowerCase() === questions[6].answer.toLowerCase()) {
            score = 700000;
            b.textContent = score;
            display8();
        } else {
            score = 0;
            b.textContent = score;
            failureScreen();
        }
    })

}

function display8() {
    q8.style.display = 'block'
    let content = questions[7].content;
    console.log(content);
    qq8.textContent = content;
    let input = document.querySelector('#answer-8');
    for (i = 1; i <= 10; i++) {
        if (i === 8) { continue; }
        let q = document.querySelector(`#question-${i}`);
        q.style.display = 'none';
    }

    let btn8 = document.querySelector('#answer-button-8');
    btn8.addEventListener('click', (e) => {
        e.preventDefault();
        if (input.value.toLowerCase() === questions[7].answer.toLowerCase()) {
            score = 800000;
            b.textContent = score;
            display9();
        } else {
            score = 0;
            b.textContent = score;
            failureScreen();
        }
    })

}

function display9() {
    q9.style.display = 'block'
    let content = questions[8].content;
    console.log(content);
    qq9.textContent = content;
    let input = document.querySelector('#answer-9');
    for (i = 1; i <= 10; i++) {
        if (i === 9) { continue; }
        let q = document.querySelector(`#question-${i}`);
        q.style.display = 'none';
    }

    let btn9 = document.querySelector('#answer-button-9');
    btn9.addEventListener('click', (e) => {
        e.preventDefault();
        if (input.value.toLowerCase() === questions[8].answer.toLowerCase()) {
            score = 900000;
            b.textContent = score;
            display10();
        } else {
            score = 0;
            b.textContent = score;
            failureScreen();
        }
    })

}

function display10() {
    q10.style.display = 'block'
    let content = questions[9].content;
    console.log(content);
    qq10.textContent = content;
    let input = document.querySelector('#answer-10');
    for (i = 1; i <= 10; i++) {
        if (i === 10) { continue; }
        let q = document.querySelector(`#question-${i}`);
        q.style.display = 'none';
    }

    let btn10 = document.querySelector('#answer-button-10');
    btn10.addEventListener('click', (e) => {
        e.preventDefault();
        if (input.value.toLowerCase() === questions[9].answer.toLowerCase()) {
            score = 1000000;
            b.textContent = score; 
            winner();
        } else {
            score = 0;
            b.textContent = score;
            failureScreen();
        }
    })

}

// Challenge Complete

let winLayout = document.querySelector('#win');

// Winner function

let load = document.querySelector('.load');

function winner() {
    score = 1000000;
    game.style.display = 'none';
    winLayout.style.display = 'block';
    game.style.display = 'none';
    load.style.display = "block";
}

// Load Button - Challenge Completed
load.addEventListener('click', function(e) {
    e.preventDefault();
    let username = currentUser.username;
    let balance = score;

    formData = {
        username: username,
        balance: balance
    }

    configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }

    fetch(LEADERBOARD_URL, configObj)
    .then(resp => resp.json())
    .then(json => {
        console.log(json.data.attributes.balance)
        updateBoard();
    })
    load.style.display = 'none';
    winLayout.style.display = 'none'
    leaderboard.style.display = 'block'
    game.style.display = 'none';
})

// Leave Button

leaveBtn.addEventListener('click', function(e) {
    e.preventDefault();
    let username = currentUser.username;
    let balance = score;

    formData = {
        username: username,
        balance: balance
    }

    configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }

    fetch(LEADERBOARD_URL, configObj)
    .then(resp => resp.json())
    .then(json => {
        console.log(json.data.attributes.balance)
        updateBoard();
    })
    leaderboard.style.display = 'block'
    game.style.display = 'none';
})

function updateBoard(){
    fetch(LEADERBOARD_URL)
        .then((resp) => resp.json())
        .then(json => {
            sortBoard(json.data);
            console.log(json.data);
        })
}

function sortBoard(data) {
    let sortedData = data.sort(function (a, b) {
        return b.attributes.balance - a.attributes.balance;
    });
    showBoard(sortedData)
}


function showBoard(sortedData) {
    let data = sortedData;
    let i = 1;
    data.forEach((d) => {
        document.getElementById(`name-${i}`).innerText = d.attributes.username;
        document.getElementById(`score-${i}`).innerText = d.attributes.balance;
        i += 1
    });
}


