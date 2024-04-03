import React,{useState} from "react";

function App() {


    const questions = [
        {
            
            questionText: "Which type of JavaScript language is ___",
            answerOptions: [
                { answerText: 'Object - Oriented', isCorrect: false },
                { answerText: 'Object - Based', isCorrect: true },
                { answerText: 'Assembly - language', isCorrect: false },
                { answerText: 'High - level', isCorrect: false },
            ],
        },
        {
            
            questionText: "Which one of the following also known as Conditional Expression: ",
            answerOptions: [
                { answerText: 'Alternative to if-else', isCorrect: false },
                { answerText: 'Switch statement', isCorrect: false },
                { answerText: 'If-then-else statement', isCorrect: false },
                { answerText: 'immediate if', isCorrect: true },
            ],
        },
        {
        
            questionText: "In JavaScript, what is a block of statement? ",
            answerOptions: [
                { answerText: 'Conditional block', isCorrect: false },
                { answerText: 'Switch statement', isCorrect: false },
                { answerText: 'If-then-else statement', isCorrect: false },
                { answerText: 'immediate if', isCorrect: true },
            ],
        },
        {
            
            questionText: "When interpreter encounters an empty statements, what it will do: ",
            answerOptions: [
                { answerText: 'Shows a warning', isCorrect: false },
                { answerText: 'Prompts to complete the statement', isCorrect: true },
                { answerText: 'Throws an error', isCorrect: false },
                { answerText: 'Ignores the statements', isCorrect: false },
            ],
        }
    ];
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore ,setShowScore]=useState(false);
const[score,setScore]=useState(0);
    const handelChange = (isCorrect) => {
        if(isCorrect===true){
            setScore(score + 1);
        }}
        function onClickNext(){
        const nextQuestion = currentQuestion+1;
        if (questions.length > nextQuestion) {
            setCurrentQuestion(nextQuestion);
        }
        else {
            setShowScore(true);
        }
    }
    function onClickPrevious(){
        const previousQuestion = currentQuestion-1 ;
        if (questions.length > previousQuestion) {
            setCurrentQuestion(previousQuestion);
        } 
        else{
           alert("no more questions")
        }
    }

    return (
        <div className="app">
        {showScore ? (
<div className="score-section ">Your Score is {score} out of {questions.length} </div>):(
    <>  <div>
                <div className="question-count"><span>Question {currentQuestion+1}</span>/ {questions.length}</div>

                <div className="question-text"> {questions[currentQuestion].questionText} </div>

                <div className="answer-section"> {questions[currentQuestion].answerOptions.map((answer) => {
                    return (<button onClick={()=>handelChange(answer.isCorrect)}>{answer.answerText}</button>);
                }) } 
                <div className="button-next">  <button className="next" onClick={onClickNext}>Next </button> </div>
                <div className="button-pre"><button className="next" onClick={onClickPrevious}> Previous </button></div>
               </div>
            </div>
            </>
)

        }
            
            
        </div>
        
    );

}
export default App;