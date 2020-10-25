import React, { useState } from 'react';
import FlashcardsList from './components/FlashcardList';
import './App.css';

//https://quizapi.io/api/v1/questions?apiKey=YOUR_API_KEY&category=sql&difficulty=Easy&limit=5

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
    id: 366,
    question:
      'The GROUP BY command cannot be used with aggregate functions together',
    description: null,
    answers: {
      answer_a: 'True',
      answer_b: 'False',
      answer_c: null,
      answer_d: null,
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: 'false',
    correct_answers: {
      answer_a_correct: 'false',
      answer_b_correct: 'true',
      answer_c_correct: 'false',
      answer_d_correct: 'false',
      answer_e_correct: 'false',
      answer_f_correct: 'false',
    },
    correct_answer: 'answer_a',
    explanation: null,
    tip: null,
    tags: [{ name: 'MySQL' }],
    category: 'SQL',
    difficulty: 'Easy',
  },
  {
    id: 373,
    question: 'MySQL does not support auto generating numbers',
    description: null,
    answers: {
      answer_a: 'True',
      answer_b: 'False',
      answer_c: null,
      answer_d: null,
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: 'false',
    correct_answers: {
      answer_a_correct: 'false',
      answer_b_correct: 'true',
      answer_c_correct: 'false',
      answer_d_correct: 'false',
      answer_e_correct: 'false',
      answer_f_correct: 'false',
    },
    correct_answer: 'answer_a',
    explanation: null,
    tip: null,
    tags: [{ name: 'MySQL' }],
    category: 'SQL',
    difficulty: 'Easy',
  },
  {
    id: 212,
    question:
      'Which operator is not included in the data manipulation language (DML)?',
    description: null,
    answers: {
      answer_a: 'UPDATE',
      answer_b: 'DELETE',
      answer_c: 'CREATE',
      answer_d: 'SELECT',
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: 'false',
    correct_answers: {
      answer_a_correct: 'false',
      answer_b_correct: 'false',
      answer_c_correct: 'true',
      answer_d_correct: 'false',
      answer_e_correct: 'false',
      answer_f_correct: 'false',
    },
    correct_answer: 'answer_a',
    explanation: null,
    tip: null,
    tags: [{ name: 'MySQL' }],
    category: 'SQL',
    difficulty: 'Easy',
  },
  {
    id: 345,
    question:
      'Which type of database management system represents relations using tables?',
    description: null,
    answers: {
      answer_a: 'Network DBMS',
      answer_b: 'Hierachical DBMS',
      answer_c: 'Relational DBMS',
      answer_d: 'Object Oriented DBMS',
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: 'false',
    correct_answers: {
      answer_a_correct: 'false',
      answer_b_correct: 'false',
      answer_c_correct: 'true',
      answer_d_correct: 'false',
      answer_e_correct: 'false',
      answer_f_correct: 'false',
    },
    correct_answer: 'answer_a',
    explanation: null,
    tip: null,
    tags: [{ name: 'MySQL' }],
    category: 'SQL',
    difficulty: 'Easy',
  },
  {
    id: 356,
    question: 'The WHERE clause is mandatory when using the SELECT command',
    description: null,
    answers: {
      answer_a: 'True',
      answer_b: 'False',
      answer_c: null,
      answer_d: null,
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: 'false',
    correct_answers: {
      answer_a_correct: 'false',
      answer_b_correct: 'true',
      answer_c_correct: 'false',
      answer_d_correct: 'false',
      answer_e_correct: 'false',
      answer_f_correct: 'false',
    },
    correct_answer: 'answer_a',
    explanation: null,
    tip: null,
    tags: [{ name: 'MySQL' }],
    category: 'SQL',
    difficulty: 'Easy',
  },
];

export default App;
