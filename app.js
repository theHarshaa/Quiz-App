const quiz = [
    {
        question: "Q.1:What is the Japanese name for 'Attack on Titan'?",
        a:"Yu Yu Hakusho",
        b:"Kosaku Shima",
        c:"Shingeki no Kyojin",
        d:"Kimi ni Todoke",
        ans:"ans3"
    },
    {
        question: "Q.2:Who was Jean Kirschtein disguised as when he was taken to the Imperial Capital for judgment?",
        a:"Levi Ackermann",
        b:"Connie Springer",
        c:"Sasha Braus",
        d:"Eren Yeager",
        ans:"ans4"
    },
    {
        question: "Q.3:How long does someone live for after eating a person controlling one of the 9 Titans?",
        a:"10 years",
        b:"13 years",
        c:"15 years",
        d:"18 years",
        ans:"ans2"
    },
    {
        question: "Q.4:The Battle of Shiganshina District took place in what year?",
        a:"820",
        b:"875",
        c:"890",
        d:"850",
        ans:"ans4"
    },
    {
        question: "Q.5:What did Levi find in the false bottom of Eren’s basement desk?",
        a:"Books",
        b:"A gun",
        c:"Key",
        d:"Amulet",
        ans:"ans1"
    },
    {
        question: "Q.6:What colour were the signal flares that the Scout Regiment used to warn of approaching titans?",
        a:"Blue & purple",
        b:"Yellow & orange",
        c:"Red & black",
        d:"White & green",
        ans:"ans3"
    },
    {
        question: "Q.7:In Eldian mythology, who granted Ymir Fritz the power of the Titans?",
        a:"The Devil of Helos",
        b:"The Spawn of the Devil",
        c:"The Dancing Devil",
        d:"The Devil of All Earth",
        ans:"ans4"
    },
    {
        question: "Q.8:The ‘D’ in ODM gear stands for what??",
        a:"Destructive",
        b:"Deadly",
        c:"Determined",
        d:"Directional",
        ans:"ans4"
    },
    {
        question: "Q.9:The Founding Titan allows its user to gain control of other titans by doing what?",
        a:" Dancing",
        b:"Jumping",
        c:"Screaming",
        d:"Whistling",
        ans:"ans3"
    },
    {
        question: "Q.10:What relation is Kenny the Ripper to Levi Ackerman?",
        a:"His Uncle",
        b:"His Father",
        c:"His Brother",
        d:"His Father-in-Law",
        ans:"ans1"
    },
];

const question = document.querySelector('.question');
const option1= document.querySelector('#option1');
const option2= document.querySelector('#option2');
const option3= document.querySelector('#option3');
const option4= document.querySelector('#option4');
const submit= document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore= document.querySelector('#showScore');

let questionCount=0;
let score=0;

const loadQuestion=() =>{
   const questionList= quiz[questionCount];
   question.innerHTML= questionList.question;
   option1.innerHTML=questionList.a;
   option2.innerHTML=questionList.b;
   option3.innerHTML=questionList.c;
   option4.innerHTML=questionList.d;
}

loadQuestion();

const getCheckAnswer= ()=>{
    let answer;
    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer=curAnsElem.id;
        }
    })
    return answer;
};

const deselectAll=()=>{
    answers.forEach((curAnsElem)=> curAnsElem.checked=false);
}

// ---------submit button event-----------

submit.addEventListener('click',()=>{
    const checkedAnswer=getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer===quiz[questionCount].ans){
        score++;
    }

    questionCount++;

    deselectAll();

    if(questionCount<quiz.length){
        loadQuestion();
    }else {
        showScore.innerHTML =
        `<h3>You scored ${score}/${quiz.length}</h3>
        <button class="btn" onclick="location.reload()">Try Again</button>
        `;
        showScore.classList.remove('scoreArea');
    }

})



