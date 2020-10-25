import React, { useState, useEffect } from 'react';
import FlashcardsList from './components/FlashcardList';
import './App.css';
import axios from 'axios';

function App() {
  const [flashcards, setflashcards] = useState(SAMPLE_FLASHCARDS);

  return (
    <>
      <div className='container'>
        <FlashcardsList flashcards={flashcards} />
      </div>
    </>
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question:
      'Which of these songs by Skrillex features Fatman Scoop as a side artist?',
    answer: 'Recess',
    options: [
      'Recess',
      'All is Fair in Love and Brostep',
      'Rock N Roll (Will Take You to the Mountain)',
      'Scary Monsters and Nice Sprites',
    ],
  },
  {
    id: 2,
    question: 'Which animation studio animated &quot;Psycho Pass&quot;?',
    answer: 'Production I.G',
    options: ['Kyoto Animation', 'Shaft', 'Trigger', 'Production I.G'],
  },
];

export default App;
