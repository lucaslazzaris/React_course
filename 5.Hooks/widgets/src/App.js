import React from 'react';
import Accordion from './components/Accordion.js';
import Search from './components/Seach';

const items = [
  {
    title: 'What is React?',
    content: 'Front end frame',
  },
  {
    title: 'What is React? 2',
    content: 'Front end frame 2',
  },
  {
    title: 'What is React? 3',
    content: 'Front end frame 3',
  },
];

const App = () => {
  return (
    <div>
      <Search />
    </div>
  );
};

export default App;
