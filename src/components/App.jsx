import React, { useState } from "react";

function App() {


    const questions = [
        {
            id: 1,
            question: "Which language runs in a web browser?",
            options: ["Java", "C", "Python", "JavaScript"],
            correctAnswer: "JavaScript"
        },
        {
            id: 2,
            question: "What does CSS stand for?",
            options: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Cars SUVs Sailboats"],
            correctAnswer: "Cascading Style Sheets"
        },
        {
            id: 3,
            question: "What does HTML stand for?",
            options: ["Hypertext Markup Language", "Hypertext Markdown Language", "Hyperloop Machine Language", "Helicopters Terminals Motorboats Lamborginis"],
            correctAnswer: "Hypertext Markup Language"
        },
        {
            id: 4,
            question: "What year was JavaScript launched?",
            options: ["1996", "1995", "1994", "none of the above"],
            correctAnswer: "none of the above"
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(null));
    const [answered, setAnswered] = useState(Array(questions.length).fill(false));
    const [prevSelectedOptions, setPrevSelectedOptions] = useState(Array(questions.length).fill(null));



    const handleAnswerClick = (selectedOption) => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[currentQuestion] = selectedOption;
        setSelectedOptions(newSelectedOptions);
        setAnswered(answered.map((value, index) => index === currentQuestion ? true : value));
        updateScore(selectedOption);
      };
      
      const updateScore = (selectedOption) => {
        const prevSelectedOption = prevSelectedOptions[currentQuestion];
      
        if (selectedOption === questions[currentQuestion].correctAnswer && prevSelectedOption !== questions[currentQuestion].correctAnswer) {
          setScore(score + 1);
        } else if (selectedOption !== questions[currentQuestion].correctAnswer && prevSelectedOption === questions[currentQuestion].correctAnswer) {
          setScore(score - 1);
        }
      
        const newPrevSelectedOptions = [...prevSelectedOptions];
        newPrevSelectedOptions[currentQuestion] = selectedOption;
        setPrevSelectedOptions(newPrevSelectedOptions);
      };


    function onClickNext() {
        if (questions.length - 1 > currentQuestion) {
            setCurrentQuestion(currentQuestion + 1);

        }
        else {
            setShowScore(true)
        }
    };


    function onClickPrevious() {

        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);

        }

    }



    return (
        <div className="app">
            {showScore ? (
                <div className="score-section ">Your Score is {score} out of {questions.length} </div>) : (
                <>  <div>
                    <div className="question-count"><span>Question {currentQuestion + 1}</span>/
                        {questions.length}</div>

                    <div className="question-text"> {questions[currentQuestion].question} </div>

                    <div className="answer-section">
                        {questions[currentQuestion].options.map((option, index) => (

                            <button key={index}
                                onClick={() => handleAnswerClick(option)}
                                className={`button-option ${ answered[currentQuestion] && 
                                (selectedOptions[currentQuestion] === option ?
                                 "selected" : null)}`}>
                                {option}</button>)
                        )}


                        <div className="buttons-app">
                            <div className="button-pre"><button className="next"
                                onClick={onClickPrevious} disabled={currentQuestion === 0}>
                                Previous </button></div>
                            <div className="button-next">  <button className="next"
                                onClick={onClickNext} >Next </button> </div>

                        </div>
                    </div>
                </div>
                </>

            )
            }
        </div>

    );


}
export default App;