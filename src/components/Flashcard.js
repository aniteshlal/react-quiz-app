import React from 'react';

export default function Flashcard({ flashcard }) {
  return (
    <>
      <div className='card'>{flashcard.question}</div>
    </>
  );
}
