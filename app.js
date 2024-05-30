document.addEventListener('DOMContentLoaded', () => {
const heading = document.getElementById("heading");
const description = document.getElementById("description")

questions = [{question : "Morning or Evening",
              Options : ["Morning","Evening"],
              answer : "Evening"
            },
             {question : "Cat or Dog",
              Options : ["Cat", "Dog"],
              answer : "Dog"
             },
             {question : "Road trips or Air travel",
              Options : ["Road trips", "Air travel"],
              answer : "Road trips"
              
             },
             {question : "Tokyo or Paris",
             Options : ["Tokyo", "Paris"],
             answer : "Tokyo"
             },
             {question : "Horror or Comedy",
             Options : ["Horror", "Comedy"],
             answer : "Comedy"
             },
             {question : "Sweet or Savoury",
             Options : ["Sweet", "Savoury"],
             answer : "Sweet"
             },
             {question : "Text or Call",
             Options : ["Text", "Call"],
             answer : "Call"
             },
             {question : "Movies or Book",
             Options : ["Movie", "Book"],
             answer : "Book"
             },
             {question : "Camping or Staycation",
             Options : ["Camping", "Staycation"],
             answer : "Staycation"
             }
             
]
let currentQuestionIndex = 0;
let mark = 0;

function Start () {
    
    heading.textContent = "Smash or Pass";
    const para = document.createElement('p');
    para.textContent = "you ready??";
    const button = document.createElement('button');
    button.textContent= "lets goooo";

    description.appendChild(para);
    description.appendChild(button);

    button.addEventListener('click',loadques);

    function loadques() {
        if(currentQuestionIndex < questions.length) {
            const currentQuestion = questions[currentQuestionIndex];
            description.innerHTML = '';

            const questCont = document.createElement('div');
            questCont.className = 'QuestionCont';
            questCont.textContent = currentQuestion.question;
            description.appendChild(questCont);

            const optCont = document.createElement('div');
            optCont.className = 'optionCont';
            currentQuestion.Options.forEach (option => {
                const butt = document.createElement('button');
                butt.textContent= option;
                optCont.appendChild(butt);
                butt.addEventListener('click',() => {
                    if (option=== currentQuestion.answer){
                        mark = mark + 1;
                    }
                    currentQuestionIndex++;
                    loadques();
                });

            });
            description.appendChild(optCont);
        }
        else{
            description.textContent = "Finished";
            description.textContent = `your score is ${mark}`
        }
    }
};
Start();

})
