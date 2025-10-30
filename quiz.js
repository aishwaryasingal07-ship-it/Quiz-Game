const questions =[
    {
        question:"Which Country is known as the Land of Rising sun ?",
        answers:  [
            {text: "china", correct : false},
            {text: "Thailand", correct : false},
            {text: "Japan", correct : true},
            {text: "South Korea", correct : false},
    ],
        },
    {
    question: "which Language Has most native Speakers in the world?",
    answers: [
        {text: "hindi" , correct: false},
        {text: "chinese" , correct: true},
        {text: "English" , correct: false},
        {text: "Spanish" , correct: false},
    ],
    },
    {
        question: " which vitamin is produced in the human body when exposed to sunlight?",
        answers: [
            {text: " vitamin A" , correct: false},
            {text: " vitamin B12", correct: false},
            {text: " vitamin C" , correct: false},
            {text: " vitamin D" , correct: true},
        ],
},
{
question: " which country has the highest number of times zones? ",
    answers: [
        {text:"France" , correct: true},
        {text:"Russia" , correct: false},
        {text:"China" , correct: false},
        {text:"USA" , correct: false},
],
},
];


const questionelement = document.getElementById("question");
const answerbuttons = document.getElementById("answerbuttons");
const nextbutton = document.getElementById("nextbtn");



let currentquestionindex = 0;
let score= 0;

function startquiz() {
    currentquestionindex = 0;
    score= 0;
    nextbutton.innerText = "Next";
    Showquestion();
}

function Showquestion(){
    resetstate();
    let currentquestion= questions[currentquestionindex];
    let questionno = currentquestionindex + 1;
    questionelement.innerHTML = questionno  + "." +  currentquestion.question;

currentquestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerbuttons.appendChild(button);
    if(answer.correct){
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click",selectAnswer);
});
}

function resetstate(){
    nextbutton.style.display = "none";
    while(answerbuttons.firstChild) {
        answerbuttons.removeChild(answerbuttons.firstChild);
    }
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const iscorrect = selectedBtn.dataset.correct === "true";
    if (iscorrect){
        selectedBtn.classList.add("correct");
        score++ ;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerbuttons.children).forEach(button => {
        if (button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextbutton.style.display = "block";
}

function showscore(){
    resetstate();
    questionelement.innerHTML= `you scored ${score} out of ${questions.length} !` ;
    nextb
    utton.innerText = "Play Again";
    nextbutton.style.display = "block";
}


function handleNextButton(){
    currentquestionindex++;
    if(currentquestionindex< questions.length){
        Showquestion();
    }else{
        showscore();
    }
}

nextbutton.addEventListener("click", ()=>{
    if( currentquestionindex< questions.length){
        handleNextButton();
    }else{
        startquiz();
    }
});


startquiz();