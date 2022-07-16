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

// Creating a function to pass first catergory through (1st object in the array) and make a title element with it and all its information.

// Category names
function makeCategory(category1) {
    const column = document.createElement('div')
    column.classList.add('category-column')

    const categoryTitle = document.createElement('div')
    categoryTitle.classList.add('category-title')
    categoryTitle.innerText = category1.category

    // appened the column just created to the 'div id= game" 
    column.appendChild(categoryTitle)
    game.append(column)

}
// loop through all the category names
gameData.forEach(category1 => makeCategory(category1))
