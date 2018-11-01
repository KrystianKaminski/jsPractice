// CHALLENGE CONSOLE GAME

function Question(question, answers, correct) {
    this.question = question
    this.answers = answers
    this.correct = correct
}

const question1 = new Question(
    'What is my favourite football player?',
    ['Alessandro Del Piero', 'Paolo Maldini', 'Alexandre Pato', 'Andriy Shevchenko', 'Zlatan Ibrahimović'],
    4
)

const question2 = new Question(
    'Where am I from?',
    ['Poland', 'Italy', 'Germany', 'Sweden'],
    0
)

const question3 = new Question(
    'What am I going to be?',
    ['Programmer', 'Economist', 'Student', 'Politician'],
    0
)

const allQuestions = [question1, question2, question3];
let score = 0;
const nextQuestion = () => {
    const random = Math.round(Math.random() * 2)
    allQuestions[random].showQuestion()
}

Question.prototype.showQuestion = function () {
    console.log(this.question)
    this.answers.forEach((element, index, array) =>
        console.log(`${index}: ${array[index]}`)
    )
    this.rightAnswer()
}

Question.prototype.rightAnswer = function () {
    const prompting = prompt(('What is the correct answer?'))
    if (parseInt(prompting) === this.correct) {
        score++;
        console.log(`Your actual score is ${score}`)
        console.log('Right answer!')
        nextQuestion()
    } else if (prompting === 'exit') {
        console.log('Thank You!')
        console.log(`Your final score is ${score}`)
    } else {
        console.log('Try again')
        console.log(`Your actual score is ${score}`)
        nextQuestion()
    }
}

nextQuestion()