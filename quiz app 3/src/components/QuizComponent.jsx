import React, { useState } from "react";
import "../css/QuizComponent.css";
import questions from "../resource/question.json";
import { useNavigate } from "react-router-dom";


function QuizComponent(){
  const [num, setNum] = useState(0);
  const [score, setScore] = useState(0)
  const [attempted, setAttempted] = useState([])
  const navigate = useNavigate();

  const handleNext = () => {
    if (num < 14) {
      setNum(num + 1);
    }
  };

  const handlePrevious = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };

  const handleOption=(e)=>{
    if(e.target.innerText===questions[num].answer){
      alert('Correct answer');
      if(!attempted.includes(num)){
        setAttempted(prevAttempted => [...prevAttempted, num]);
        setScore(prevScore => prevScore + 1);
      }
      console.log(score,attempted)
    }else{
      alert('Incorrect answer');
      if(!attempted.includes(num)){
        setAttempted(prevAttempted => [...prevAttempted, num]);
      }
    }
  }

  const handleFinish = () => {
    navigate('/Result', { state: {score, attempted } });
  };
  

  const handleQuit = () => {
    if(window.confirm("Are you sure you want to quit?")){
      window.location.reload(false)
    }
  };

  return (
    <div className="quiz">
      <p>Question</p>
      <div>
        <span>{num + 1} of 15</span>
        <h5>{questions[num].question}</h5>
      </div>
      <div className="options">
        <p className="option" onClick={handleOption}>{questions[num].optionA}</p>
        <p className="option" onClick={handleOption}>{questions[num].optionB}</p>
        <p className="option" onClick={handleOption}>{questions[num].optionC}</p>
        <p className="option" onClick={handleOption}>{questions[num].optionD}</p>
      </div>
      <div>
        <button className="previous-btn button" onClick={handlePrevious}>
          Previous
        </button>
        <button className="next-btn button" onClick={handleNext}>
          Next
        </button>
        <button className="quit-btn button" onClick={handleQuit}>
          Quit
        </button>
        <button className="button" onClick={handleFinish}>
            Finish
        </button>
      </div>
    </div>
  );
};

export default QuizComponent;