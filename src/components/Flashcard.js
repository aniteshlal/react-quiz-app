import React, { useState } from 'react';

export default function Flashcard(props) {
  const { flashcard } = props;
  const [flip, setFlip] = useState(false);
  console.log(flashcard.question);
  return (
    <div
      className={`card ${flip ? 'flip' : ''}`}
      style={{ height: '150px' }}
      onClick={() => setFlip(!flip)}
    >
      <div className='front'>
        {flashcard.question}
        <div className='flashcard-options'>
          {flashcard.options.map((option) => {
            return (
              <div className='flashcard-option' key={option}>
                {option}
              </div>
            );
          })}
        </div>
      </div>
      <div className='back'>{flashcard.answer}</div>
    </div>
  );
}
