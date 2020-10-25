import React, { useState } from 'react';

export default function Flashcard(props) {
  const [flip, setFlip] = useState(false);
  const { flashcard } = props;
  const { answers, correct_answers } = flashcard;

  const getCorrectAnswers = (
    answersValues = Object.values(answers),
    correctAnswersValues = Object.values(correct_answers)
  ) => {
    return answersValues.filter((value, index) => {
      return correctAnswersValues[index] == 'true';
    });
  };

  return (
    <>
      <div
        className={`card ${flip ? 'flip' : ''}`}
        onClick={() => setFlip(!flip)}
        style={{ height: '160px' }}
      >
        <div className='front'>
          {flashcard.question}
          <div className='flashcard-options'>
            {Object.values(answers).map((answer) => {
              return <div className='flashcard-option'>{answer}</div>;
            })}
          </div>
        </div>
        <div className='back'>
          {getCorrectAnswers().map((answer) => {
            return <div className='flashcard-option-correct'>{answer}</div>;
          })}
        </div>
      </div>
    </>
  );
}
