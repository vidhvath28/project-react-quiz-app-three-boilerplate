import React from 'react'
import '../css/ResultComponent.css'
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom'

function ResultComponent(props) {
  const location = useLocation();
  const score=location.state.score
  const attempted = location.state.attempted
  const attemptedCount = attempted.length;
  return (
    <div>
        <h1>Result</h1>
        <div className="result">
        {score < 6 ? (
          <h3>You need more practice!</h3>
          ) : score >= 6 && score < 11 ? (
          <h3>Good job! You can do better!</h3>
          ) : (
          <h3>Great job! Keep it up!</h3>
        )}
            <h1>Your score is {Math.round((score/15)*100)}%</h1>
            <div className="flex">
                <div className="details">
                  <h5>Totol number of quesions</h5>
                  <h5>Number of attempted questions</h5>
                  <h5>Number of correct answers</h5>
                  <h5>Number of wrong answers</h5>
                </div>
                <div className="number">
                  <h5>15</h5>
                  <h5>{attemptedCount}</h5>
                  <h5>{score}</h5>
                  <h5>{attemptedCount - score}</h5>
                </div>
            </div>
        </div><br/>
        <div className='btn'>
          <NavLink to="/Quiz"><button>Play Again</button></NavLink>
          <NavLink to="/"><button>Back to home</button></NavLink>
        </div>
    </div>
  )
}

export default ResultComponent