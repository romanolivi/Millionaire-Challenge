const BASE_URL = "http://localhost:3000";
const USERS_URL = `${BASE_URL}/users`;
const BALANCE_URL = `${BASE_URL}/balances`;
const LEADERBOARD_URL = `${BASE_URL}/leaderboard`;
const signInForm = document.querySelector('.signin-form')
const signInButton = document.querySelector('#signup-submit')
const welcomeMessage = document.querySelector('#welcome-message')
const leaderBtn = document.querySelector('#leader-btn');
let balance = document.querySelector('#balance');


// Game button
const gameBtn = document.querySelector('#start-game');

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


const headerTitle = document.querySelector('.header-title');

function loggedIn(user) {
    if (user) {
        currentUser = user.username;
        signInForm.style.display = 'none'
        leaderBtn.style.display = 'none'
        welcomeMessage.style.display = 'block'
        headerTitle.innerHTML = `<h1>Welcome, ${currentUser}!</h1>`

        gameBtn.addEventListener('click', function(e) {
            e.preventDefault();
            displayGame(currentUser);
        })
    } else { 
        signInForm.style.display = 'block'
        leaderBtn.style.display = 'block'
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
    for (let i = 1; i <= 10; i++) {
        let q = document.querySelector(`#question-${i}`);
        q.style.display = 'none';
    }

    playAgain.addEventListener('click', (e) => {
        e.preventDefault();
        failure.style.display = 'none';
        displayGame();
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
const questions = [city, moose, strawberry, europe, eyeballs, feet, finland, india, athena, kobe];

function displayGame(currentUser) {
    const game = document.querySelector('#game');
    headerTitle.style.display = 'none';
    welcomeMessage.style.display = 'none';
    game.style.display = 'block';
    shuffleArray(questions);
    display1(currentUser);
}

function display1(currentUser) {
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
            score = '$ 100,000 ';
            balance.textContent = score;
            display2();
        } else {
            score = '$ 0 ';
            balance.textContent = score;
            failureScreen();
        }
    })

    let leave = document.querySelector('#leave-1');
    leave.addEventListener('click', (e) => {
        e.preventDefault();
        userToLeaderboard(currentUser, '$ 100,000 ')
    })

}

function display2(currentUser) {
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
        if (input.value === questions[1].answer) {
            score = '$ 200,000 ';
            balance.textContent = score;
            display3();
        } else {
            score = '$ 0 ';
            balance.textContent = score;
            failureScreen();
        }
    })

    let leave2 = document.querySelector('#leave-2');
    leave2.addEventListener('click', (e) => {
        e.preventDefault();
        userToLeaderboard(currentUser)
    })

}

function display3() {
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
        if (input.value === questions[2].answer) {
            score = '$ 300,000 ';
            balance.textContent = score;
            display4();
        } else {
            score = '$ 0 ';
            balance.textContent = score;
            failureScreen();
        }
    })

}

function display4() {
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
        if (input.value === questions[3].answer) {
            score = '$ 400,000 ';
            balance.textContent = score;
            display5();
        } else {
            score = '$ 0 ';
            balance.textContent = score;
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
        if (input.value === questions[4].answer) {
            score = '$ 500,000 ';
            balance.textContent = score;
            display6();
        } else {
            score = '$ 0 ';
            balance.textContent = score;
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
        if (input.value === questions[5].answer) {
            score = '$ 600,000 ';
            balance.textContent = score;
            display7();
        } else {
            score = '$ 0 ';
            balance.textContent = score;
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
        if (input.value === questions[6].answer) {
            score = '$ 700,000 ';
            balance.textContent = score;
            display8();
        } else {
            score = '$ 0 ';
            balance.textContent = score;
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
        if (input.value === questions[7].answer) {
            score = '$ 800,000 ';
            balance.textContent = score;
            display9();
        } else {
            score = '$ 0 ';
            balance.textContent = score;
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
        if (input.value === questions[8].answer) {
            score = '$ 900,000 ';
            balance.textContent = score;
            display10();
        } else {
            score = '$ 0 ';
            balance.textContent = score;
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
        if (input.value === questions[9].answer) {
            score = '$ 1,000,000 ';
            balance.textContent = score;
            challengeComplete();
        } else {
            score = '$ 0 ';
            balance.textContent = score;
            failureScreen();
        }
    })
}

let leaderboardButton = document.querySelector('#leaderboard-btn');
let leaderboard = document.querySelector('#leaderboard');
const table = document.querySelector('.table');

leaderboardButton.addEventListener('click', (e) => {
    e.preventDefault();
    leaderboard.style.display = 'block'
    signInForm.style.display = 'none'
    leaderBtn.style.display = 'none'
    welcomeMessage.style.display = 'none'

})

function userToLeaderboard(name, score) {
    let row = document.createElement('tr');

    let nameRow = document.createElement('td');
    nameRow.innerText = name;
    row.appendChild(nameRow);

    let scoreRow = document.createElement('td');
    scoreRow.innerText = score;
    row.appendChild(scoreRow);

    table.appendChild(row);

    leaderboard.style.display = 'block'
    signInForm.style.display = 'none'
    leaderBtn.style.display = 'none'
    welcomeMessage.style.display = 'none'

}



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