// console.log('LINKED')
// Set up Array with objects
//Categories???? Animals, Movies, Sports, Places, NYC
//Levels: Easy, Medium, Hard
// - Array will have objects with the different categories (objects)
// - Categories: Question, Answer choices, correct answer, level 

//Grab DOM elements and save into a variable
const game = document.getElementById('game')
const totalScore = document.getElementById('score')

//make a skeleton and instert questions and answers later
// Created Array with objects
// questions key will be an array with an object to include actual question and answer choices.
const gameData = [
    {
        category: "Animals",
        questions: [
            {
                question: 'The baby of what animal is called a Joey?',
                answers: ['Deer', 'Kangaroo'],
                correctAnswer: 'Kangaroo',
                level: 'easy'
            },
            {
                question: 'Do frogs lay eggs?',
                answers: ['Yes', 'No'],
                correctAnswer: 'Yes',
                level: 'medium'
            },
            {
                question: 'What is the largest animal on Earth?',
                answers: ['The blue Whale', 'An Ostrich'],
                correctAnswer: 'The blue Whale',
                level: 'hard'
            }
        ]
    },
    {
        category: "Movies",
        questions: [
            {
                question: 'Which Disney princess lost their shoe?',
                answers: ['Cinderella', 'Belle'],
                correctAnswer: 'Cinderella',
                level: 'easy'
            },
            {
                question: 'What superhero is know as "The Man of Steel"?',
                answers: ['Superman', 'Iron Man'],
                correctAnswer: 'Superman',
                level: 'medium'
            },
            {
                question: 'Where was the lord of the rings filmed?',
                answers: ['New Zealand', 'Ireland'],
                correctAnswer: 'New Zealand',
                level: 'hard'
            }
        ]
    },
    {
        category: "Sports",
        questions: [
            {
                question: 'How many bases are on a baseball field?',
                answers: ['3', '4'],
                correctAnswer: '4',
                level: 'easy'
            },
            {
                question: 'How many teams make up the NFL?',
                answers: ['32', '30'],
                correctAnswer: '32',
                level: 'medium'
            },
            {
                question: 'How many championships does Michael Jordan have?',
                answers: ['6', '8'],
                correctAnswer: '6',
                level: 'hard'
            }
        ]
    },
    {
        category: "Places",
        questions: [
            {
            question: 'In what country would you find the Effiel Tower?',
                answers: ['Germany', 'France'],
                correctAnswer: 'France',
                level: 'easy'
        },
        {
            question: 'Which country is also a continent?',
                answers: ['Australia', 'Antartica'],
                correctAnswer: 'Australia',
                level: 'medium'
        },
        {
            question: 'Helsinki is the capital of which country?',
                answers: ['Finland', 'Denmark' ],
                correctAnswer: 'Finland',
                level: 'hard'
        }
    ]
    },
    {
        category: "NYC",
        questions: [
            {
                question: 'What is the nickname for NYC?',
                answers: ['Big Orange', 'Big Apple'],
                correctAnswer: 'Big Apple',
                level: 'easy'
        },
        {
            question: 'How many boroughs are there in NYC?',
                answers: ['5', '7'],
                correctAnswer: '5',
                level: 'medium'
        },
        {
            question: 'Where is Prospect Park located?',
                answers: ['Brooklyn', 'Manhattan'],
                correctAnswer: 'Brooklyn',
                level: 'hard'
        },
    ],
    },
]

let score = 0;

// Creating a function to pass first catergory through (1st object in the array) and make a title element with it and all its information.

// making Category names
function makeCategory(category1) {

    const column = document.createElement('div')
    column.classList.add('category-column')

    const categoryTitle = document.createElement('div')
    categoryTitle.classList.add('category-title')
    categoryTitle.innerText = category1.category

    // appened the column just created to the 'div id= game" 
    column.appendChild(categoryTitle)
    game.append(column)

    // making Questions
    category1.questions.forEach(question => {
        const card = document.createElement('div')
        card.classList.add('card')
    // adding to the column
        column.appendChild(card)

    // adding each questions level
    if (question.level === 'easy') {
        card.innerText = '100'
    }
    if (question.level === 'medium') {
        card.innerText = '200'
    }
    if (question.level === 'hard') {
        card.innerText = '300'
    }
    // adding each question, choices and correct answers to the card
    card.setAttribute('game-question', question.question)
    card.setAttribute('answer-choice-1', question.answers[0])
    card.setAttribute('answer-choice-2', question.answers[1])
    card.setAttribute('correct-answer', question.correctAnswer)

    //getting the value of the card
    card.setAttribute('score-value', card.getInnerHTML())

    // adding Event Listeners to each card
    card.addEventListener('click', flipCard)

    })

}
// loop through all the category names
gameData.forEach(category1 => makeCategory(category1))


// creating function to filpcard
function flipCard() {
    this.innerText = ""
    this.style.fontSize = "15px"
    this.style.lineHeight = "30px"
    const textDisplay = document.createElement('div')
    textDisplay.classList.add('card-text')
    // display the question
    textDisplay.innerText = this.getAttribute('game-question')

    //create buttons for answer choices
    const button1 = document.createElement('button')
    const button2 = document.createElement('button')

    // add buttons 
    button1.classList.add('button-1')
    button1.innerText = this.getAttribute('answer-choice-1')
    button1.addEventListener('click', getAnswer)

    button2.classList.add('button-2')
    button2.innerText = this.getAttribute('answer-choice-2')
    button2.addEventListener('click', getAnswer)
    
    //appending 
    this.append(textDisplay, button1, button2)

    //if one card is clicked, remove event listener from other cards
    const allCards = document.querySelectorAll('.card')
    allCards.forEach(card => card.removeEventListener('click', flipCard ))

} 

//creating function for answers
function getAnswer() {
    //get all cards and add back the event listeners
    const allCards = document.querySelectorAll('.card')
    allCards.forEach(card => card.addEventListener('click', flipCard ))

    const cardOfButton = this.parentElement
    // console.log('cardOfButton', cardOfButton)
    
    if (cardOfButton.getAttribute('correct-answer') === this.innerText) {
        //using parseInt to add the displayed score numbers
       score = score + parseInt(cardOfButton.getAttribute('score-value'))
       totalScore.innerText = score
       cardOfButton.classList.add('correct')
       setTimeout(() => {
        //creating while loop to go through ...
        while( cardOfButton.firstChild) {
            cardOfButton.removeChild(cardOfButton.lastChild)
        }
        cardOfButton.innerText = cardOfButton.getAttribute('score-value')
       }, 100)
    } else {
        cardOfButton.classList.add('wrong')
        setTimeout(() => {
            //creating while loop to remove card once their played
            while( cardOfButton.firstChild) {
                cardOfButton.removeChild(cardOfButton.lastChild)
            }
            cardOfButton.innerText = '0'

    }, 100)
}
// remove the event listeners
cardOfButton.removeEventListener('click', flipCard )
}


//If there are more green than red, player wins
// function winner(){
//     if 
// }
