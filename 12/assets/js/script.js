let quizs = [
    {
        question: "ဗြဟ္မစိုရ်တရား အရေအတွက်?",
        options: ['2', '3', '4', '5' ],
        feedback: '4'
    },

    {
        question: "အင်္ဂလန်ပရီးမီးယားလိဂ်တွင် ရွှေဖလားရဖူးသောအသင်း?",
        options: ['မန်ယူ', 'အာဆင်နယ်', 'မန်စီးတီး', 'လီဗာပူး' ],
        feedback: 'အာဆင်နယ်'
    },

    {
        question: "ဗိုလ်ချုပ်အောင်ဆန်း၏ ငယ်နာမည်?",
        options: ['ထိန်ဝင်း', 'ထိန်လင်း', 'လင်းထိန်', 'အောင်သန်း' ],
        feedback: 'ထိန်လင်း'
    },
]

let timeLeft = 30;
let currentQuiz = 0;
let score = 0;

function startQuiz(){
    const userName = document.querySelector('#name').value;
    if (userName.trim() === ''){
        alert("နာမည်ထည့်ပါဆို");
        return;
    }

    document.querySelector('.welcome').style.display = 'none';
    document.querySelector('.exam').style.display = 'block';
    
    quizs = shuffleArray(quizs);

    startTimer();
    displayQuiz();

}

submitQuiz()

testAgain()