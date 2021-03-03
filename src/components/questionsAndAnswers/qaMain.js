// import './qa.css';
import React from 'react';

function QuestionsAndAnswers() {
  return (
    <div className="question-answer-container">
      <h5 id='questionsAndAnswersHeader'>Questions and Answers</h5>
      <div>
        <form>
          <input placeholder='have a question? search for answers'></input>
        </form>
        {/* have that search icon as the button in the placeholder/search */}
        <div>
          {/* to have a questions list */}
        </div>

        <div>
          {/* span for more answered questions button*/}
          {/* span for add a qustion button */}
        </div>
      </div>
    </div>
  );
}

export default QuestionsAndAnswers;
