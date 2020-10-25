import React, { useState, useEffect, useRef } from 'react';
import FlashcardsList from './components/FlashcardList';
import './App.css';
import axios from 'axios';

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);
  const [categories, setCategories] = useState([]);

  const categoryEl = useRef();
  const amountEl = useRef()

  useEffect(() => {
    axios.get('https://opentdb.com/api_category.php').then((res) => {
      setCategories(res.data.trivia_categories);
    });
  }, []);

  function decodeString(str) {
    /*this function is to help format the the questions and answers properly because they contain html when returned from the api call */
    const textArea = document.createElement('textarea');
    textArea.innerHTML = str;
    return textArea.value;
  }

  useEffect(() => {
    axios.get('https://opentdb.com/api.php?amount=10').then((res) => {
      setFlashcards(
        res.data.results.map((questionItem, index) => {
          const answer = decodeString(questionItem.correct_answer);
          const options = [
            ...questionItem.incorrect_answers.map((a) => decodeString(a)),
            answer,
          ];
          return {
            id: `${index}-${Date.now()}`,
            question: decodeString(questionItem.question),
            answer: answer,
            options: options.sort(() => Math.random() - 0.5),
          };
        })
      );
    });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <div className='header' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='category'>Category</label>
          <select id='category' ref={categoryEl}>
            {categories.map((category) => {
              return (
                <option value={category.id} key={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="amount">Number of Questions</label>
          <input type="number" id="amount" min="1" step="1" defaultValue={10} ref={amountEl} />
        </div>
        <div className="form-group">
          <button className="btn">Generate</button>
        </div>
      </div>
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
