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
      <div className='card' onClick={() => setFlip(!flip)}>
        {flip
          ? getCorrectAnswers().map((answer) => {
              return answer + '\n';
            })
          : flashcard.question}
      </div>
    </>
  );
}
