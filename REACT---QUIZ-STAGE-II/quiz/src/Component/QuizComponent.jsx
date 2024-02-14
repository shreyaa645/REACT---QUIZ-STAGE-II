import React from "react";
import quizQuestions from "../resources/Questions.json";
import "./QuizComponent.css";

class UpdatedQuizComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      currentQuestion: 0,
    };
  }

  handlenext = () => {
    this.setState((prevState) => ({ 
        currentQuestion: prevState.currentQuestion + 1 
    }));
  };

  handleprev = () => {
    this.setState((prevState) => ({
        currentQuestion: prevState.currentQuestion - 1
     }));
  };

  handleQuit = () => {
    
    let userConfirmed = window.confirm("Are you sure you want to quit?");

    if (userConfirmed && this.onQuit) {
      this.onQuit();
    }
  };

  render() {
    const { currentQuestion } = this.state;
    const currentQuizQuestion = quizQuestions[currentQuestion];

    return (
      <>
        <div className="quiz-container">
          <h1 className="question-title">Question</h1>
          <p className="question-number">{`${currentQuestion + 1} of ${quizQuestions.length}`}</p>
          <h3 className="question-text">{currentQuizQuestion.question}</h3>

          <div className="answer-options">
            <button>{currentQuizQuestion.optionA}</button>
            <button>{currentQuizQuestion.optionB}</button>
          </div>

          <div className="answer-options">
            <button>{currentQuizQuestion.optionC}</button>
            <button>{currentQuizQuestion.optionD}</button>
          </div>

          <div className="quiz-footer">
            <button
              className="previous-button"
              onClick={this.handleprev}
              disabled={currentQuestion === 0}
            >
              Previous
            </button>
            <button
              className="next-button"
              onClick={this.handlenext}
              disabled={currentQuestion === quizQuestions.length - 1}
            >
              Next
            </button>
            <button className="quit-button" onClick={this.handleQuit}>
              Quit
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default UpdatedQuizComponent;
